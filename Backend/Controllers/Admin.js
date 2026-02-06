const jwt = require('jsonwebtoken');

// Hardcoded admin credentials (you can later move this to database)
const ADMIN_CREDENTIALS = {
  username: 'admin',
  password: 'admin123',
};

// Admin login controller
const adminLogin = async (req, res) => {
  try {
    const { username, password } = req.body;

    // Validate required fields
    if (!username || !password) {
      return res.status(400).json({
        success: false,
        message: 'Username and password are required',
      });
    }

    // Validate credentials
    if (username !== ADMIN_CREDENTIALS.username || password !== ADMIN_CREDENTIALS.password) {
      return res.status(401).json({
        success: false,
        message: 'Invalid username or password',
      });
    }

    // Generate JWT token
    const token = jwt.sign(
      { username: ADMIN_CREDENTIALS.username, role: 'admin' },
      process.env.JWT_SECRET || 'your_jwt_secret_key_here',
      { expiresIn: '7d' }
    );

    res.status(200).json({
      success: true,
      message: 'Admin login successful',
      token,
      payload: {
        username: ADMIN_CREDENTIALS.username,
        role: 'admin',
      },
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: 'Admin login failed',
      error: error.message,
    });
  }
};

module.exports = {
  adminLogin,
};
