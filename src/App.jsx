// import React from 'react'

import Hero from "./components/Hero";

const App = () => {
  return (
    <div className="sm:max-h-screen w-full">
      <div className="row-span-2">
        <Hero />
      </div>
      <div className="row-span-1">
        <p>The email</p>
      </div>
    </div>
  );
};

export default App;
