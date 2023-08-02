/** Shuffling array elements */
const shuffle = (array: Array<number>) => {
  for (let i = array.length - 1; i > 0; i--) {
    // Select random index
    const j = Math.floor(Math.random() * (i + 1))
    // Swap
    ;[array[i], array[j]] = [array[j], array[i]]
  }

  return array
}

/** Get elements by quantity required randomly */
const sample = (array: Array<number>, quantity: number) => {
  const elements: number[] = []
  let required = quantity

  while (required > 0) {
    let index = Math.floor(Math.random() * array.length)

    // Add distinct elements
    if (elements.indexOf(array[index]) === -1) {
      elements.push(array[index])
      required--
    }
  }

  return elements
}

export default { shuffle, sample }
