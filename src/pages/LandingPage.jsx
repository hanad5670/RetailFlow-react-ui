import React from 'react';
// import logoFont from 'https://www.fontspace.com/ananda-font-f28668';

 const LandingPage = () => { 
    return (
        <div className="flex flex-col items-center justify-center h-screen">
      <h1 className="text-6xl font-logo mb-8">Retail-Flow</h1>
      <button className="flex items-center justify-center px-8 py-4 bg-blue-500 text-white rounded-lg shadow-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-opacity-50">
      <img src='https://upload.wikimedia.org/wikipedia/commons/4/44/Microsoft_logo.svg' alt="Microsoft Logo" className="w-6 h-6 mr-2" />
        Sign In
      </button>
    </div>
  );
};

export default LandingPage;