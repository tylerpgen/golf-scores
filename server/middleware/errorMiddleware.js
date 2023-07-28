// Middleware for handling 404 Not Found errors
const notFound = (req, res, next) => {
  // Create a new Error object with a message indicating the URL that was not found
  const error = new Error(`Not Found - ${req.originalUrl}`);

  // Set the HTTP status code of the response to 404 (Not Found)
  res.status(404);

  // Call the next middleware with the error object to propagate the error to the error handler middleware
  next(error);
};

// Middleware for handling errors
const errorHandler = (err, req, res, next) => {
  // Determine the status code to be sent in the response
  let statusCode = res.statusCode === 200 ? 500 : res.statusCode;

  // Set the default error message to the error's message
  let message = err.message;

  // If the error is a "CastError" (e.g., invalid ObjectId), set the status code to 404 and update the message
  if (err.name === "CastError" && err.kind === "ObjectId") {
    statusCode = 404;
    message = "Resource not found";
  }

  // Send the error response in JSON format
  res.status(statusCode).json({
    message, // Error message to be sent in the response
    stack: process.env.NODE_ENV === "production" ? null : err.stack, // Stack trace (if in development mode)
  });
};

// Export both middleware functions to be used in other parts of the application
export { notFound, errorHandler };
