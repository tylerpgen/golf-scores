import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import User from "../models/user.js";

export const signIn = async (req, res) => {
  const { email, password } = req.body; // Destructure email and password from request body

  try {
    const existingUser = await User.findOne({ email }); // Find user in the database by email

    if (!existingUser) return res.status(404).json({ message: "User doesn't exist." }); // If user doesn't exist, return a 404 response indicating the user doesn't exist

    const isPasswordCorrect = await bcrypt.compare(password, existingUser.password);

    if (!isPasswordCorrect) return res.status(400).json({ message: "Invalid Passoword." });

    const token = jwt.sign({ email: existingUser.email, id: existingUser._id }, process.env.JWT_SECRET, {
      expiresIn: "1h",
    });
    // Generate a JSON Web Token (JWT) with user email and ID, signed with the provided secret key,
    // and set to expire in 1 hour

    res.status(200).json({ result: existingUser, token });
    // Return a 200 response with the existingUser object and the generated token in the JSON response
  } catch (error) {
    res.status(500).json({ message: "Something went wrong" });
    // If an error occurs during the execution, return a 500 response with a generic error message
  }
};

export const signUp = async (req, res) => {
  const { email, password, confirmPassword, firstName, lastName } = req.body;

  try {
    const existingUser = await User.findOne({ email });

    if (existingUser) return res.status(400).json({ message: "User already exists" });

    if (password !== confirmPassword) return res.status(400).json({ message: "Passwords don't match." });

    const hashedPassword = await bcrypt.hash(password, 12);

    const result = await User.create({ email, password: hashedPassword, name: `${firstName} ${lastName}` });

    const token = jwt.sign({ email: result.email, id: result._id }, process.env.JWT_SECRET, { expiresIn: "1h" });

    res.status(200).json({ result: result, token });
  } catch (error) {
    res.status(500).json({ message: "Something went wrong." });
  }
};
