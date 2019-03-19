const { capAndSort } = require('../utils/utils.js')

module.exports = (req, res) => {
  const body = []
  req.on('data', chunk => {
    body.push(chunk)
  })
  req.on('end', () => {
    const sorted = capAndSort(JSON.parse(body))
    res.end(JSON.stringify(sorted))
  })
}
