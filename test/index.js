const test = require('tape')
const lib = require('../index')

const samples = [
  {
    input: '6717563 2545107',
    output: { x: 6717563, y: 2545107 }
  },
  {
    input: 'x=6717563 y=2545107',
    output: { x: 6717563, y: 2545107 }
  },
  {
    input: 'x=6717563 y=2545107 YKJ',
    output: { x: 6717563, y: 2545107 }
    // Example from https://fi.scoutwiki.org/Koordinaatit
  },
  {
    input: 'y=2545107 x=6717563',
    output: { x: 6717563, y: 2545107 }
  },
  {
    input: 'y2545107 x6717563',
    output: { x: 6717563, y: 2545107 }
  },
  {
    input: 'E 6717563 N 2545107',
    output: { x: 6717563, y: 2545107 }
  },
  {
    input: 'E 6717563, N 2545107',
    output: { x: 6717563, y: 2545107 }
  },
  {
    input: 'N 2545107 , E 6717563',
    output: { x: 6717563, y: 2545107 }
  },
  {
    input: 'E6717563;N2545107',
    output: { x: 6717563, y: 2545107 }
  },
  {
    input: 'x:6717563;y:2545107',
    output: { x: 6717563, y: 2545107 }
  },
  {
    input: 'W -6717563 S -2545107',
    output: { x: 6717563, y: 2545107 }
  },
  {
    input: 'w-6717563 n2545107',
    output: { x: 6717563, y: 2545107 }
  },
  {
    input: 'e6717563n2545107',
    output: { x: 6717563, y: 2545107 }
  },
  {
    input: '6717563e2545107n',
    output: { x: 6717563, y: 2545107 }
  },
  {
    input: '6717563 2545107 3323',
    output: { x: 6717563, y: 2545107 }
  },
  {
    input: 'A 6717563 B 2545107',
    output: { x: 6717563, y: 2545107 }
  },
  {
    input: 'P: 2545107 m\n I: 6717563 m',
    options: { northingLabel: /^[yYnNpP]/, eastingLabel: /^[xXeEiI]/ },
    output: { x: 6717563, y: 2545107 }
    // Finnish labels: P = northing, I = easting.
    // Example from riista.fi, Ohjeita koordinaattien kirjaamiseen
  }
]

test('parse', (t) => {
  t.plan(samples.length)

  samples.forEach((sample) => {
    const output = lib.parse(sample.input, sample.options)
    t.deepEqual(output, sample.output)
  })
})

test('unknown format', (t) => {
  t.throws(() => {
    lib.parse()
  })

  t.throws(() => {
    lib.parse('123')
  })

  t.throws(() => {
    lib.parse('A B C D E')
  })

  t.end()
})
