import User from "../models/userModel.js";
import bcrypt from "bcrypt";

// Get all users
export const getusers = async (req, res) => {
  try {
    const users = await User.find({});
    res.status(200).json(users);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Create user
export const createUser = async (req, res) => {
  try {
    const { username, email, password } = req.body;

    const userexist = await User.findOne({
      $or: [
        { username: username.toLowerCase() },
        { email: email.toLowerCase() },
      ],
    });

    if (userexist) {
      return res.status(400).json("Username or email already exists");
    }
    const newUser = await User.create({
      username,
      email,
      password,
    });

    res.status(201).json(["User registered successfully", newUser]);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Update user
export const updateUser = async (req, res) => {
  try {
    const { id } = req.params;
    const user = await User.findById(id);
    if (!user) return res.status(404).json("User not found");

    // If password updated hash it
    if (req.body.password) {
      req.body.password = await bcrypt.hash(req.body.password, 10);
    }
    const updatedUser = await User.findByIdAndUpdate(id, req.body, {
      new: true,
    });

    res.status(200).json(["User updated successfully", updatedUser]);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Delete user
export const deleteUser = async (req, res) => {
  try {
    const { id } = req.params;

    const deleted = await User.findByIdAndDelete(id);
    if (!deleted) return res.status(404).json("User not found");

    res.status(200).json(["User deleted successfully", deleted]);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
