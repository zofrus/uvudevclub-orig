# [UVU Dev Club](https://uvudevclub.org/)

## Preview
insert site screenshot here later
[![Landing Page Preview](https://uvudevclub.org/assests/img/foo.jpg)](https://uvudevclub.org/)

## Status

[![GitHub license](https://img.shields.io/badge/license-MIT-blue.svg)](https://raw.githubusercontent.com/zofrus/uvudevclub/master/LICENSE)
[![Build Status](https://travis-ci.com/zofrus/uvudevclub.svg?token=2bqNMZdBCthM3zofcmeS&branch=master)](https://travis-ci.com/zofrus/uvudevclub)

TODO: -- still need to update everything below (zofrus)

## Download and Installation

To begin contributing to this repo, install the following to get started:
* [Download the latest release on Start Bootstrap](https://startbootstrap.com/template-overviews/landing-page/)
* Install via npm: `npm i startbootstrap-landing-page`
* Clone the repo: `git clone https://github.com/BlackrockDigital/startbootstrap-landing-page.git`
* [Fork, Clone, or Download on GitHub](https://github.com/BlackrockDigital/startbootstrap-landing-page)

## Usage

### Basic Usage

After downloading, simply edit the HTML and CSS files included with the template in your favorite text editor to make changes. These are the only files you need to worry about, you can ignore everything else! To preview the changes you make to the code, you can open the `index.html` file in your web browser.

### Advanced Usage

After installation, run `npm install` and then run `gulp dev` which will open up a preview of the template in your default browser, watch for changes to core template files, and live reload the browser when changes are saved. You can view the `gulpfile.js` to see which tasks are included with the dev environment.

## Bugs and Issues

Have a bug or an issue with this template? [Open a new issue](https://github.com/BlackrockDigital/startbootstrap-landing-page/issues) here on GitHub or leave a comment on the [template overview page at Start Bootstrap](http://startbootstrap.com/template-overviews/landing-page/).

## Custom Builds

You can hire Start Bootstrap to create a custom build of any template, or create something from scratch using Bootstrap. For more information, visit the **[custom design services page](https://startbootstrap.com/bootstrap-design-services/)**.

## About

Start Bootstrap is an open source library of free Bootstrap templates and themes. All of the free templates and themes on Start Bootstrap are released under the MIT license, which means you can use them for any purpose, even for commercial projects.

* https://startbootstrap.com
* https://twitter.com/SBootstrap

Start Bootstrap was created by and is maintained by **[David Miller](http://davidmiller.io/)**, Owner of [Blackrock Digital](http://blackrockdigital.io/).

* http://davidmiller.io
* https://twitter.com/davidmillerskt
* https://github.com/davidtmiller

Start Bootstrap is based on the [Bootstrap](http://getbootstrap.com/) framework created by [Mark Otto](https://twitter.com/mdo) and [Jacob Thorton](https://twitter.com/fat).

## Copyright and License

Copyright 2013-2017 Blackrock Digital LLC. Code released under the [MIT](https://github.com/BlackrockDigital/startbootstrap-landing-page/blob/gh-pages/LICENSE) license.


--------------------------------------------
 clif

Cross-platform CLI GIF maker based on JS+Web.

![](https://cldup.com/Iu3VmK9SVy.gif)

## Getting started

On OS X, install latest Xcode command line tools, even if you think you already have them:

```
xcode-select --install
```

Then, go through the Apple dialogue to download and install them. Now, you’re ready to install Surge’s version of clif with:

```sh
npm install -g @surge/clif
```

Note, you’ll need to be running npm@2.0.0 or greater to do this. You can check what version you’re using with:

```sh
npm --version
```

…and upgrade with:

```sh
sudo npm install -g npm
```

You can omit `sudo` if you are using Windows.

## How to use

Run

```sh
clif out.gif
```

type `exit` to finish and save the recording.

## Features

- Easy to install: `npm install -g clif`.
- Works on OSX and Linux.
- Small GIFs.
- High quality (anti-aliased fonts).
- Rendered with CSS/JS, customizable.
- Realtime parallel rendering.
- Frame aggregation and customizable FPS.
- Support for titles Terminal.app-style.

## How it works

clif builds mainly on four projects: `child_pty`, `term.js`
`omggif` and `phantomjs`.

`child_pty` is used to spawn a pseudo terminal from
which we can capture the entirety of input and output.

Each frame that's captured is asynchronously sent to
a `phantomjs` headless browser to render using `term.js`
and screenshot.

The GIF is composited with `omggif` and finally written
out to the filesystem.

## Options

```

  Usage: clif [options] <outfile>

  Options:

    -h, --help           output usage information
    -V, --version        output the version number
    -c, --cols <cols>    Cols of the term [90]
    -r, --rows <rows>    Rows of the term [30]
    -s, --shell <shell>  Shell to use [/bin/bash]
    -f, --fps <fps>      Frames per second [8]
    -q, --quality <q>    Frame quality 1-30 (1 = best|slowest) [5]

```

## Contributing

You can edit the styles in `lib/client.js` and the recompiling:

```sh
npm run compile
```

## TODO

- Substitute `phantom` with a terminal rendered on top
  of `node-canvas` or low-level graphic APIs.
  [terminal.js](https://github.com/Gottox/terminal.js) seems like a good
  candidate to add a `<canvas>` adaptor to.
- Should work on Windows with some minor tweaks.
- There's an issue with Node 0.12 and IO.js on Mac
  where stdout sometimes buffers for no reason `¯\_(ツ)_/¯`

## Credits

- Inspired by [KeyboardFire](https://github.com/KeyboardFire)'s [mkcast](https://github.com/KeyboardFire/mkcast).
- Borrows GIF palette neuquant indexing from
  [sole](https://github.com/sole)'s [animated_GIF.js](https://github.com/sole/Animated_GIF).

## License

MIT
----------------------------

