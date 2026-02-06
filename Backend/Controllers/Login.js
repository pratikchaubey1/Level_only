const UserModel = require("../models/User");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
require("dotenv").config();

const Login_data = async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await UserModel.findOne({ email });
    if (!user) {
      return res.status(404).json({
        success: false,
        message: "User not found",
      });
    }
    const ans = await bcrypt.compare(password, user.password);
    if (!ans) {
      return res.status(401).json({
        success: false,
        message: "Invalid password",
      });
    }

    const payload = {
      role: user.role,
      email: user.email,
      id: user._id,
    };

    const token = jwt.sign(payload, process.env.Prab_key, {
      expiresIn: "10d",
    });

    res.cookie("token", token);
    //   console.log(token);
    res.status(200).json({
      success: true,
      message: "Login Success",
      token,
      payload,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

module.exports = { Login_data };
