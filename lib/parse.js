module.exports = (text) => {
  // Parameters
  //   text
  //     string, utm easting and northing
  //
  // Return
  //   { x, y }
  //

  if (typeof text !== 'string') {
    throw new Error('Coordinate input must be a string')
  }

  // Surround letters with spaces to separate them from numbers
  const norm1 = text.replace(/([A-Za-z])/g, ' $1 ')

  // Replace special characters and white space with single spaces
  const norm2 = norm1.replace(/[:;=\s]/g, ' ')

  // Shrink white spaces to single spaces
  const norm3 = norm2.replace(/\s+/g, ' ').trim()

  // Split to parts
  const parts = norm3.split(' ')

  // Part possibilities
  //   <num> <num>
  //   <x> <num> <y> <num>
  //   <y> <num> <x> <num>
  //   <num> <x> <num> <y>
  //   <num> <y> <num> <x>
  // where <x> can be
  //   X, x, W, w, E, e
  // where <y> can be
  //   Y, y, N, n, S, s

  if (parts.length < 2) {
    throw new Error('Unknown coordinate format')
  }

  // Collect and normalize parts
  const labels = []
  const numbers = []
  for (let i = 0; i < parts.length; i += 1) {
    const part = parts[i]
    const num = parseInt(part)
    if (isNaN(num)) {
      if (/^[xe]/i.test(part)) {
        labels.push('E')
      } else if (/^w/i.test(part)) {
        labels.push('W')
      } else if (/^[yn]/i.test(part)) {
        labels.push('N')
      } else if (/^s/i.test(part)) {
        labels.push('S')
      }
      // Else, skip label
    } else {
      // part is number
      numbers.push(num)
    }
  }

  if (numbers.length < 2) {
    throw new Error('Unknown coordinate format')
  }

  const xy = { x: 0, y: 0 }

  if (labels.length === numbers.length) {
    // Each number has a label; iterate labels.
    for (let j = 0; j < labels.length; j += 1) {
      const label = labels[j]
      const num = numbers[j]
      if (label === 'E') {
        xy.x = num
      } else if (label === 'W') {
        xy.x = -num
      } else if (label === 'N') {
        xy.y = num
      } else if (label === 'S') {
        xy.y = -num
      }
    }
  } else {
    // Too many or too few labels.
    // Disregard the labels and take first two numbers as x, y
    xy.x = numbers[0]
    xy.y = numbers[1]
  }

  return xy
}
