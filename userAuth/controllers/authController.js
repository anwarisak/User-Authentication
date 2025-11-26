import User from "../models/userModel.js";
import { generateToken } from "../utils/generateToken.js";
//login user

export const profile = (req, res) => {
  res.json({ massage: "welcome profile" });
};

export const loginUser = async (req, res) => {
  try {
    const { username, password } = req.body;
    const user = await User.findOne({
      username: username.toLowerCase(),
    });

    if (!user) {
      return res.status(404).json("username is not found");
    }

    const isPasswordCorrect = await user.comparePassword(password);
    if (!isPasswordCorrect) {
      return res.status(404).json("password is incorect");
    }

    const token = generateToken(user);

    res.cookie("token", token, {
      httpOnly: true, // protects against XSS
      secure: false, // change to true when using HTTPS
      maxAge: 3 * 24 * 60 * 60 * 1000, // 3 days
    });
    return res.status(200).json({ success: true, token, user });

    // return res.status(200).json("Login...");
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
