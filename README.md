# Albums Of The Month

Share the most relevant albums you listened to.
In time, you could see how your music taste changes (or not) over a few months

#### Live Demo

https://alt-romes.github.io/albumsofthemonth


## Getting Started

These instructions will get you a copy of the project on your local machine for publishing purposes.
See deployment for notes on how to deploy the project on a live system.

### Prerequisites

You must have node installed on your system.

### Installing

Clone the repository

```
git clone https://github.com/alt-romes/albumsofthemonth.git
cd albumsofthemonth
```

And install the dependencies

```
npm run install
```

## Editing the stylesheet

To edit the stylesheet...

First, write your SCSS code in *_sass/style.scss*.

Second, compile the code for changes to take effect
```
npm run css-build
```

## Cleaning up

Delete the file *albums.json*

Upon adding a first album, the file will be created with it


## Adding a New Album

To add a new album to the list run

```
npm run addalbum
```

And follow the instructions that appear onscreen

### Editing or Deleting an Album

Edit the JSON file with a text editor.
To edit, change the value of the desired property,
To delete, delete the whole entry for that album (from *{* to *}*)

## Deployment

Deploy the contents of the cloned, and edited, repository, in a webpage

Suggestion - Use **Github Pages**

### Github Pages Guide

#### Github Account

Login / Sign Up - [github.com](https://github.com)

#### New Repository

Create a new repository named - **yourusername.github.io** (use your github username)

![example](https://camo.githubusercontent.com/da5a2102873c2be1d5d94c52984dc90039f38e5e/68747470733a2f2f692e696d6775722e636f6d2f62545958766f752e706e67)

#### Publish to repository

Copy the repository's https link.

Remove git directory to create new one

```
rm -rf .git
```

Init git and publish to your new repository

*For Example*
```
git init
git add .
git commit -m "publishing..."
git push https://github.com/alt-romes/minblog.git
```

#### Accessing published website

Visit **https://yourusername.github.io/** (use your github username)

## Built With

* [NPM](https://www.npmjs.com/) - Dependency Management
* [Bulma](https://bulma.io/) - CSS Framework

## Authors

* **Romes** - [About](https://alt-romes.github.io/#/about)

## License

This project is licensed under the [MIT License](https://opensource.org/licenses/mit-license.php)
