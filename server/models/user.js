import mongoose from "mongoose";
import bcrypt from "bcryptjs";

// Define the user schema using Mongoose's Schema constructor
const userSchema = mongoose.Schema(
  {
    // Define the fields for the user schema
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    id: { type: String },
  },
  {
    // Add timestamps to the schema to automatically track createdAt and updatedAt fields
    timestamps: true,
  }
);

// Middleware function to hash the user's password before saving it to the database
userSchema.pre("save", async function (next) {
  // Check if the password field has been modified
  if (!this.isModified("password")) {
    next(); // If not modified, proceed to the next middleware
  }

  // Generate a salt (a random string) to use during password hashing
  const salt = await bcrypt.genSalt(11);

  // Hash the user's password using bcrypt with the generated salt
  this.password = await bcrypt.hash(this.password, salt);

  // Continue to the next middleware or save the user with the hashed password
  next();
});

// Method to compare the entered password with the user's hashed password
userSchema.methods.matchPassword = async function (enteredPassword) {
  return await bcrypt.compare(enteredPassword, this.password);
};

// Create a User model using the user schema and export it
const User = mongoose.model("User", userSchema);
export default User;
