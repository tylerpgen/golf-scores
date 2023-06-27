import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import User from "../models/user.js";
import asyncHandler from "express-async-handler";

//@desc Auth user/set token
//route POST /api/users/auth
const authUser = asyncHandler(async (req, res) => {
  res.status(401);
  throw new Error("Something went wrong");
  res.status(200).json({ message: "Auth User" });
});

export { authUser };
