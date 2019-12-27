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
