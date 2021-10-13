# utm-coordinate-parser

Parse northing and easting from various UTM coordinate string formats in your JavaScript projects. UTM, abbreviation of [Universal Transverse Mercator](https://en.wikipedia.org/wiki/Universal_Transverse_Mercator_coordinate_system), is a popular zoned coordinate system and used as the default coordinate system in many countries including Sweden and Finland. In contrast to the latitude and longitude pair of [WGS84](https://en.wikipedia.org/wiki/World_Geodetic_System), UTM coordinate consists of a *easting* and *northing* pair, relative to the origin of the zone.

To parse latitude and longitude from text input, see [coordinate-parser](https://www.npmjs.com/package/coordinate-parser).

## Installation

    $ npm install utm-coordinate-parser

## Usage & API

To parse coordinates from text:

    const utm = require('utm-coordinate-parser')
    const ne = utm.parse('N 123456 W 123456')

The result `ne` is an object:

    {
      x: -123456, // easting
      y: 123456 // northing
    }

If input cannot be parsed or is in unknown format, an Error is thrown.

Supported input text formats:

    23456 12345
    N 12345 E 23456
    12345 N 23456 E
    W -23456 S -12345
    x=23456 y=12345
    x23456 y12345
    w-23456n12345

## Contribute

Pull requests and [bug reports](https://github.com/axelpale/node-lib-template/issues) are highly appreciated. The code is written in [ES6](https://en.wikipedia.org/wiki/ECMAScript) in [StandardJS](https://standardjs.com/) style. Please test your contribution with the following scripts.

Run test suite:

    $ npm test

Run only linter:

    $ npm run lint

## License

[MIT](LICENSE)
