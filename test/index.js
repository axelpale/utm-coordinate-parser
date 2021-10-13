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
    lib.parse('123')
  })
  t.end()
})
