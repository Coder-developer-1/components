import  { useState } from 'react';

const GoogleHomePage = () => {
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearch = () => {
    window.location.href = `https://www.google.com/search?q=${searchTerm}`;
  };

  return (
    <div className="h-screen w-screen flex flex-col items-center justify-center bg-gray-100">
      <div className="flex flex-col items-center justify-center">
        <img
          src="https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_272x92dp.png"
          alt="Google Logo"
          className="w-72 h-24 mb-4"
        />
        <input
          type="text"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="w-full max-w-md p-2 pl-10 text-sm text-gray-700 border border-gray-300 rounded-full focus:outline-none focus:ring focus:border-blue-500"
          placeholder="Search Google or type a URL"
        />
        <button
          onClick={handleSearch}
          className="mt-4 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        >
          Google Search
        </button>
      </div>
    </div>
  );
};

export default GoogleHomePage;