const portfolioData = require('../backend/data.js');

export default function handler(req, res) {
  res.json(portfolioData);
}