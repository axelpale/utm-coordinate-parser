# utm-coordinate-parser

Parse northing and easting from various UTM coordinate string formats in your JavaScript projects. UTM, abbreviation of [Universal Transverse Mercator](https://en.wikipedia.org/wiki/Universal_Transverse_Mercator_coordinate_system), is a popular zoned coordinate system and used as the default coordinate system in many countries including Sweden and Finland. In contrast to the latitude and longitude pair of [WGS84](https://en.wikipedia.org/wiki/World_Geodetic_System), UTM coordinate consists of a *easting* and *northing* pair, relative to the origin of the zone.

To parse latitude and longitude from text input, see [coordinate-parser](https://www.npmjs.com/package/coordinate-parser).

## Installation

Install via [NPM](https://www.npmjs.com/package/utm-coordinate-parser):

    $ npm install utm-coordinate-parser

## Usage & API

To parse coordinates from text:

    const utm = require('utm-coordinate-parser')
    const ne = utm.parse('N 12345 W 23456')

The result `ne` is an object:

    {
      x: -23456, // easting
      y: 12345 // northing
    }

If input cannot be parsed or is in unknown format, an Error is thrown.

Supported input text formats:

    23456 12345
    N 12345 E 23456
    12345 N 23456 E
    W -23456 S -12345
    N12345;E23456
    x=23456 y=12345
    y:12345;x:23456
    x23456 y12345
    w-23456n12345

If the input has no recognisable direction labels such as `N` or `x` then the easting is assumed to come first.

## Contribute

Pull requests and [bug reports](https://github.com/axelpale/node-lib-template/issues) are highly appreciated. The code is written in [ES6](https://en.wikipedia.org/wiki/ECMAScript) in [StandardJS](https://standardjs.com/) style. Please test your contribution with the following scripts.

Run test suite:

    $ npm test

Run only linter:

    $ npm run lint

## License

[MIT](LICENSE)
