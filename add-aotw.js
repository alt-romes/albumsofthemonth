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
	var coverURL = yield prompt('Cover URL: ');

	var currentAlbum = albums.current;

	var newWeek;

	if(currentAlbum==null) {
		newWeek = 1;
		albums.previous = [];
	} else {
		newWeek = currentAlbum.week+1;
		albums.previous.push(currentAlbum);
	
	}
	albums.current={name: title, artist: artist, cover: coverURL, week: newWeek}	

	fs.writeFile("./albums.json", JSON.stringify(albums, null, 4), (err)=>{
	
		if(err) throw err;

		console.log("Album added.");
		process.exit()
	})
});
