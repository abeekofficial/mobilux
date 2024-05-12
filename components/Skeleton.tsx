// Spinner.js
import React from "react";

const Spinner = () => {
  return (
    <div className="flex space-x-2 justify-center items-center bg-white h-screen dark:invert">
      <span className="sr-only text-red-400">Loading...</span>
      <div className="h-8 w-8 bg-gray-300 rounded-full animate-bounce [animation-delay:-0.3s]"></div>
      <div className="h-8 w-8 bg-gray-300 rounded-full animate-bounce [animation-delay:-0.15s]"></div>
      <div className="h-8 w-8 bg-gray-300 rounded-full animate-bounce"></div>
    </div>
  );
};

export default Spinner;
