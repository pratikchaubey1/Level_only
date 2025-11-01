// controllers/authController.js
const UserModel = require("../models/User");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
require("dotenv").config();

const Signup = async (req, res) => {
  try {
    const { username, email, password, role } = req.body;

    // 1. Check if user already exists
    const exists = await UserModel.findOne({ email });
    if (exists) {
      return res.status(400).json({
        success: false,
        message: "User already exists",
      });
    }

    // 2. Hash password
    let hashedPassword;
    try {
      hashedPassword = await bcrypt.hash(password, 10);
    } catch (err) {
      console.error("Error while encrypting password:", err);
      return res.status(500).json({
        success: false,
        message: "Error while encrypting password",
      });
    }

    // 3. Create user with hashed password
    const newUser = await UserModel.create({
      username,
      email,
      password: hashedPassword,
      role,
    });

    // 4. Issue JWT and success response (auto-login after signup)
    const payload = { id: newUser._id, email: newUser.email, role: newUser.role };
    const token = jwt.sign(payload, process.env.Prab_key, { expiresIn: "10d" });

    return res.status(201).json({
      success: true,
      message: "Profile created successfully",
      token,
      user: {
        id: newUser._id,
        username: newUser.username,
        email: newUser.email,
        role: newUser.role,
      },
    });
  } catch (e) {
    console.error("Error while creating signup:", e);
    return res.status(500).json({
      success: false,
      message: "Error while creating signup page",
    });
  }
};

module.exports = { Signup };
