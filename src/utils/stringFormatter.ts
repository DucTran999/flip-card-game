/** return a string formatted like 'Your Name Is Bala' */
const formatToCapitalize = (original: String) => {
  let formatted = original.trim().toLowerCase()

  // Remove redundant space
  formatted = formatted.replace(/(\s+)/g, ' ')

  // Uppercase first letter of every words
  let words = formatted.split(' ')
  for (let i = 0; i < words.length; ++i) {
    words[i] = words[i].charAt(0).toUpperCase() + words[i].slice(1)
  }

  return words.join(' ')
}

export default { formatToCapitalize }
