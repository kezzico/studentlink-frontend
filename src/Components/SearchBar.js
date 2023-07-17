import React from 'react';

function SearchBar() {
  return (
    <div className="flex justify-center">
      <input
        className="border border-gray-300 rounded px-4 py-2 focus:outline-none focus:border-blue-500 w-96"
        type="text"
        placeholder="Search by your location of interest..."
      />
      <button className="bg-blue-500 hover:bg-blue-600 text-white rounded px-4 py-2 ml-2" type="submit">
        Search
      </button>
    </div>
  );
}

export default SearchBar;
