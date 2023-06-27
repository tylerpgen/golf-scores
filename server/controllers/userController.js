import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import User from "../models/user.js";

//@desc Auth user/set token
//route POST /api/users/auth
const authUser = (req, res) => {
  res.status(200).json({ message: "Auth User" });
};

export { authUser };
