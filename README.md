# orbit-angular

orbit-angular is a personal website template derived from [orbit template](http://themes.3rdwavemedia.com/website-templates/orbit-free-resume-cv-template-for-developers/) from [3rdwavemedia](http://themes.3rdwavemedia.com/)
. It uses Angular.js to load contents from a REST API and supports multiple languages.
[See it in action!](http://francosalinasmendoza.com)

## Requirements

orbit-angular requires Node.js v4 to be installed on your system.

## Installation

Get a copy of orbit-angular by downloading it or via git using:

```
git clone https://github.com/FrancoSalinas/orbit-angular
```

Open a terminal window in the orbit-angular directory and run:

```
npm install
npm install gulp --global
npm install bower --global
bower install
gulp setup
```

Test the installation using:

```
gulp build
gulp serve
```

Then, if you open http://localhost:3000 in your browser, you should see the website.

### Warning

If you just open `index.html` without running a web server then the contents won't be loaded because cross origin requests are not allowed for local files in modern browsers.

## Usage

Replace the profile picture placeholder in the `images` directory with your own picture. Edit `content/es` and `content/en` with any text editor to add your own information.

### Adding new languages.

In this version, to add new languages it is necessary to create the following files:

* a JSON file for the static data in the `objects` directory, for example `fr.json`.
* a JSON file for the contents in the `contents` directory, for example `fr`.
* Add manually a link for the new language in the `index.html` footer (this will be automatic in the next version).

## Licence

This work, [orbit-angular](https://github.com/FrancoSalinas/orbit-angular), is a derivative of the [Orbit theme](http://themes.3rdwavemedia.com) by Xiaoying Riley, used under CC BY. 'orbit-angular' is licensed under CC BY by [Franco J. Salinas Mendoza](http://francosalinasmendoza.com).
