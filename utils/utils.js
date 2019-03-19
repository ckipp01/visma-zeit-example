const capAndSort = words => {
  return words.map(word => word[0].toUpperCase() + word.slice(1)).sort()
}

module.exports = { capAndSort }
