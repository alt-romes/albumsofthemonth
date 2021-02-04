#! /usr/bin/env node

var co = require('co');
var prompt = require('co-prompt');

const fs = require('fs');

if (!fs.existsSync('./albums.json')) {
    fs.writeFileSync('./albums.json', "{}", (err) => {if(err) throw err; console.log("File albums.json was created")})
}

var albums = require('./albums.json');

co(function *() {
	console.log('Adding a new Album...');
	var title = yield prompt('Album Title: ');
	var artist = yield prompt('Artist: ');


    var manualCoverURL = yield prompt ('Do you want to insert a cover URL manually? [y/n]: ');
    manualCoverURL = manualCoverURL.toLowerCase();

	var coverURL = "";

    if (manualCoverURL == "y" || manualCoverURL == "yes") 
        coverURL = yield prompt('Cover URL: ')
    else {

        console.log("Fetching the album cover...")

        var Discogs = require('disconnect').Client;

        var db = new Discogs({
            consumerKey: "yfdSjRJUshuktdYKinwl",
            consumerSecret: "NJnuVuKIvltmEOTYBiRFpdfYWlCUgVrj"
        }).database();

        yield db.search({artist: artist, release_title: title, type: "master", format: "album"})
            .then(function (searchResult) {

                var bestCover = null;
                for (let i=0; i < searchResult.results.length; i++) {
                    if (searchResult.results[i].thumb != "" && searchResult.results[i].cover_image != "" && !searchResult.results[i].cover_image.endsWith("spacer.gif")) {

                        // Accept the first one, and then
                        // Prefer older releases
                        // Prefer known Countries
                        // prefer older ids 
                        if (bestCover == null
                                || bestCover.year > searchResult.results[i].year
                                || (bestCover.country == "Unknown" && searchResult.results[i].country != "Unknown")
                                || bestCover.id > searchResult.results[i].id )
                            bestCover = searchResult.results[i];

                    }
                }

                coverURL = bestCover.cover_image;

            })
            .catch(function (err) {
                console.error("Error: " + err);
            });

        if (coverURL == "")
            console.log("No album cover was found.")
    }

	var currentAlbum = albums.current;

	if(currentAlbum==null) {
		albums.previous = [];
	} else {
		albums.previous.push(currentAlbum);
	
	}

	var date = new Date();

	var months = ['january', 'february', 'march', 'april', 'may', 'june', 'july', 'august', 'september', 'october', 'november', 'december'];
	var dmonth = months[date.getMonth()];

	albums.current={name: title, artist: artist, cover: coverURL, year: date.getFullYear(), month: dmonth, day: date.getDay()}	

	fs.writeFile("./albums.json", JSON.stringify(albums, null, 4), (err)=>{
	
		if(err) throw err;

		console.log("Album added.");
		process.exit()
	})
});
