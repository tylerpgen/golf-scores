import jwt from "jsonwebtoken";

// Function to generate a JWT token and set it as a cookie in the response
const generateToken = (res, userId) => {
  // Generate a JWT token with the provided userId and JWT_SECRET using the 'jsonwebtoken' package
  const token = jwt.sign({ userId }, process.env.JWT_SECRET, {
    expiresIn: "30d", // Token expiration time (30 days from the current date)
  });

  // Set the generated token as a cookie in the response
  res.cookie("jwt", token, {
    httpOnly: true, // The cookie cannot be accessed by JavaScript
    secure: process.env.NODE_ENV !== "development", // 'secure' option ensures the cookie is only sent over HTTPS in production environment
    sameSite: "strict", // The cookie is sent only with requests from the same site
    maxAge: 30 * 24 * 60 * 60 * 1000, // Cookie expiration time (30 days converted to milliseconds)
  });
};

// Export the 'generateToken' function to be used in other parts of the application
export default generateToken;
