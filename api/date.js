module.exports = (req, res) => {
  const myDate = new Date()
  res.end(myDate.toISOString().substring(0, 10))
}
