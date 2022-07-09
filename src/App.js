import React from "react";
import Destination from "./component/Destination";
import Hero from "./component/Hero";
import Navbar from "./component/Navbar";
import Search from "./component/Search";

function App() {
  return (
    <div>
      <Navbar/>
      <Hero/>
      <Destination/>
      <Search/>
    </div>
  );
}

export default App;
