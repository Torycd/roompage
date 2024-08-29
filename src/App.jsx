// import React from 'react'

import Hero from "./components/Hero";

const App = () => {
  return (
    <div className="h-screen">
      <div className="h-[73%] w-full">
        <Hero />
      </div>
      <div className="h-[27%] bg-gray-950 w-full">
        <p>The email</p>
      </div>
    </div>
  );
};

export default App;
