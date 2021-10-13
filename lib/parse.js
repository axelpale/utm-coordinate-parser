module.exports = (text) => {
  const parts = text.split(' ')

  if (typeof text !== 'string') {
    throw new Error('Coordinate input must be string')
  }
  if (parts.length < 2) {
    throw new Error('Unknown coordinate string')
  }

  const ea = parseInt(parts[0])
  const no = parseInt(parts[1])

  return {
    x: ea,
    y: no
  }
}
