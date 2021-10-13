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
  }
]

test('basic parse', (t) => {
  t.plan(samples.length)

  samples.forEach((sample) => {
    const output = lib.parse(sample.input)
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
