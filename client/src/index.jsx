// Import necessary libraries and components
import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import store from "./store/store.jsx";
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from "react-router-dom";
import App from "./App.jsx";
import "./index.css";
import PrivateRoute from "./components/PrivateRoute.jsx";
import HomePage from "./pages/HomePage.jsx";
import LoginPage from "./pages/LoginPage.jsx";
import RegisterPage from "./pages/RegisterPage.jsx";
import ProfilePage from "./pages/ProfilePage.jsx";
import ScoresPage from "./pages/ScoresPage.jsx";
import { disableReactDevTools } from "@fvilers/disable-react-devtools";

// Create a router using createBrowserRouter and define routes using createRoutesFromElements
const router = createBrowserRouter(
  createRoutesFromElements(
    // Main route with "App" component as the root element
    <Route path="/" element={<App />}>
      {/* Home page as the index route */}
      <Route index={true} path="/" element={<HomePage />} />
      {/* Login page */}
      <Route path="/login" element={<LoginPage />} />
      {/* Register page */}
      <Route path="/register" element={<RegisterPage />} />

      {/* Private Routes */}
      {/* Routes within the PrivateRoute component require authentication */}
      <Route path="" element={<PrivateRoute />}>
        {/* Profile page */}
        <Route path="/profile" element={<ProfilePage />} />
        {/* Scores page */}
        <Route path="/scores" element={<ScoresPage />} />
      </Route>
    </Route>
  )
);

// Disable React DevTools in production mode
if (process.env.NODE_ENV === "production") disableReactDevTools();

// Render the app
ReactDOM.createRoot(document.getElementById("root")).render(
  // Provide the Redux store to all components
  <Provider store={store}>
    {/* Enable strict mode during development */}
    <React.StrictMode>
      {/* Provide the router to the application */}
      <RouterProvider router={router} />
    </React.StrictMode>
  </Provider>
);
