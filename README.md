# utm-coordinate-parser

Parse northing and easting from various UTM coordinate string formats in your JavaScript projects. UTM, abbreviation of [Universal Transverse Mercator](https://en.wikipedia.org/wiki/Universal_Transverse_Mercator_coordinate_system), is a popular zoned coordinate system and used as the default coordinate system in many countries including Sweden and Finland. In contrast to the latitude and longitude pair of [WGS84](https://en.wikipedia.org/wiki/World_Geodetic_System), UTM coordinate consists of a *easting* and *northing* pair in metres and relative to the origin of their zone.

To parse latitude and longitude from text input, see [coordinate-parser](https://www.npmjs.com/package/coordinate-parser).

## Installation

Install via [NPM](https://www.npmjs.com/package/utm-coordinate-parser):

    $ npm install utm-coordinate-parser

## Usage

To parse coordinates from text:

    const utmp = require('utm-coordinate-parser')
    const pos = utmp.parse('N 12345 W 23456')

The result `pos` is an object:

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

If the input has no recognisable direction labels such as `N` or `x` then the easting coordinate is assumed to come first. If input has language-specific labels, for example `P` and `I` in Finland, you might want to customise label patterns with options `eastingLabel` and `northingLabel`. See [API](#API) for details.

## API

### utmp.parse(text, options)

Extract numeric coordinates from a free-form UTM coordinate string.

**Parameters:**

- `text`: string containing a UTM coordinate pair
- `options`: optional object with optional properties:
  - `eastingLabel`
    - a [RegExp](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Regular_Expressions) pattern for easting label.
    - Defaults to `/^[xe]/i`
  - `westingLabel`
    - a [RegExp](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Regular_Expressions) pattern for negative easting label.
    - Defaults to `/^w/i`
  - `northingLabel`
    - a [RegExp](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Regular_Expressions) pattern for northing label.
    - Defaults to `/^[yn]/i`
  - `southingLabel`
    - a [RegExp](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Regular_Expressions) pattern for negative northing label.
    - Defaults to `/^s/i`

**Returns** object `{ x: <number>, y: <number> }` where `x` denotes easting and `y` northing.

**Throws** an error if parsing fails due to invalid input or unknown coordinate format.

**Example:**

    utmp.parse('N 12345, E 23456')
    // => { x: 23456, y: 12345 }

**Example** with custom label patterns:

    const opts = {
      northingLabel: /^[yYnNpP]/,
      eastingLabel: /^[xXeEiI]/
    }
    utmp.parse('P: 12345, I: 23456', opts)
    // => { x: 23456, y: 12345 }

### utmp.validate(text, options)

Not yet implemented. Let us know by [submitting an issue](https://github.com/axelpale/node-lib-template/issues) if you happen to need such feature.

## Contribute

Pull requests and [bug reports](https://github.com/axelpale/node-lib-template/issues) are highly appreciated. The code is written in [ES6](https://en.wikipedia.org/wiki/ECMAScript) in [StandardJS](https://standardjs.com/) style. Please test your contribution with the following scripts.

Run test suite:

    $ npm test

Run only linter:

    $ npm run lint

## License

[MIT](LICENSE)
