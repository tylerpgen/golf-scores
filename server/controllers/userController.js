import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import User from "../models/user.js";
import asyncHandler from "express-async-handler";

//@desc Auth user/set token
//route POST /api/users/auth
const authUser = asyncHandler(async (req, res) => {
  res.status(200).json({ message: "Auth User" });
});

//@desc Register user
//route POST /api/users
const registerUser = asyncHandler(async (req, res) => {
  res.status(200).json({ message: "Register User" });
});

//@desc Logout user
//route POST /api/users/logout
const logoutUser = asyncHandler(async (req, res) => {
  res.status(200).json({ message: "Logged out User" });
});

//@desc Get user
//route POST /api/users/profile
const getUserProfile = asyncHandler(async (req, res) => {
  res.status(200).json({ message: "Get User Profile" });
});

//@desc Update user
//route POST /api/users/profile
const updateUserProfile = asyncHandler(async (req, res) => {
  res.status(200).json({ message: "Update User Profile" });
});

export { authUser, registerUser, logoutUser, getUserProfile, updateUserProfile };
