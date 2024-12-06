import React from "react";
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import SignIn from "./pages/SignIn";
import SignUp from "./pages/SignUp";

function App() {
  return (
    <Router>
      <div className="bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 min-h-screen flex flex-col">
        {/* Navbar */}
        <nav className="flex justify-between items-center p-5 bg-white shadow-lg">
          <div className="text-2xl font-bold text-gray-800">Logo</div>
          <div className="space-x-4">
            <Link to="/signin">
              <button className="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-700">
                Sign In
              </button>
            </Link>
            <Link to="/signup">
              <button className="bg-green-500 text-white py-2 px-4 rounded-md hover:bg-green-700">
                Sign Up
              </button>
            </Link>
          </div>
        </nav>

        {/* Main Content */}
        <Routes>
          <Route path="/signin" element={<SignIn />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/" element={
            <div className="flex-grow flex justify-center items-center text-white text-4xl font-semibold">
              Welcome to Our Project!
            </div>
          } />
        </Routes>
      </div>
    </Router>
  );
}


export default App;
