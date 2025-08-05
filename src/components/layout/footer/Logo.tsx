import React from "react";

const Logo = () => (
  <div className="flex items-center space-x-3 mb-4">
    <img
      src="/favicon.ico"
      alt="Badminton Teamup Logo"
      className="w-8 h-8 rounded-lg shadow"
      style={{ imageRendering: 'auto' }}
    />
    <span className="text-xl font-bold bg-gradient-to-r from-blue-600 to-blue-700 bg-clip-text text-transparent">
      Badminton Teamup
    </span>
  </div>
);

export default Logo;
