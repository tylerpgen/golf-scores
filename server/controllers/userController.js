import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import User from "../models/user.js";

export const signIn = async (req, res) => {
  // Destructure email and password from request body
  const { email, password } = req.body;

  try {
    // Find user in the database by email
    const existingUser = await User.findOne({ email });

    // If user doesn't exist, return a 404 response indicating the user doesn't exist
    if (!existingUser) return res.status(404).json({ message: "User doesn't exist." });

    const isPasswordCorrect = await bcrypt.compare(password, existingUser.password);

    if (!isPasswordCorrect) return res.status(400).json({ message: "Invalid Passoword." });

    // Generate a JSON Web Token (JWT) with user email and ID, signed with the provided secret key,
    // and set to expire in 1 hour
    const token = jwt.sign({ email: existingUser.email, id: existingUser._id }, process.env.JWT_SECRET, {
      expiresIn: "1h",
    });

    // Return a 200 response with the existingUser object and the generated token in the JSON response
    res.status(200).json({ result: existingUser, token });
  } catch (error) {
    // If an error occurs during the execution, return a 500 response with a generic error message
    res.status(500).json({ message: "Something went wrong" });
  }
};

export const signUp = async (req, res) => {
  const { email, password, confirmPassword, firstName, lastName } = req.body;

  try {
    // Check if a user with the same email already exists
    const existingUser = await User.findOne({ email });

    // If user exists, return a 400 response with a message
    if (existingUser) return res.status(400).json({ message: "User already exists" });

    // Check if password and confirmPassword match
    if (password !== confirmPassword) return res.status(400).json({ message: "Passwords don't match." });

    // Hash the password
    const hashedPassword = await bcrypt.hash(password, 12);

    // Create a new user
    const result = await User.create({ email, password: hashedPassword, name: `${firstName} ${lastName}` });

    // Generate a JWT token
    const token = jwt.sign({ email: result.email, id: result._id }, process.env.JWT_SECRET, { expiresIn: "1h" });

    // Return a 200 response with the newly created user and token
    res.status(200).json({ result: result, token });
  } catch (error) {
    // Handle any error that occurred during the process
    res.status(500).json({ message: "Something went wrong." });
  }
};
