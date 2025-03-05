// middleware/auth.js
const jwt = require('jsonwebtoken');
require('dotenv').config();

// Verify JWT token
function verifyToken(req, res, next) {
  const authHeader = req.headers['authorization'];
  if (!authHeader) return res.status(401).json({ message: 'Access Denied: No token provided' });

  const token = authHeader.split(' ')[1]; // Expected format: "Bearer <token>"
  if (!token) return res.status(401).json({ message: 'Access Denied: No token provided' });

  try {
    const verified = jwt.verify(token, process.env.JWT_SECRET);
    req.user = verified;
    next();
  } catch (err) {
    res.status(400).json({ message: 'Invalid token' });
  }
}

// Role-based access control middleware
function checkRole(role) {
  return (req, res, next) => {
    if (req.user && req.user[role]) {
      next();
    } else {
      res.status(403).json({ message: 'Forbidden: Insufficient privileges' });
    }
  };
}

module.exports = { verifyToken, checkRole };
