import portfolioData from '../backend/data.js';

export default function handler(req, res) {
  res.json(portfolioData);
}