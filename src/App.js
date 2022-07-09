import React from "react";
import Carousel from "./component/Carousel";
import Destination from "./component/Destination";
import Footer from "./component/Footer";
import Hero from "./component/Hero";
import Navbar from "./component/Navbar";
import Search from "./component/Search";
import Selects from "./component/Selects";

function App() {
  return (
    <div>
      <Navbar/>
      <Hero/>
      <Destination/>
      <Search/>
      <Selects/>
      <Carousel/>
      <Footer/>
    </div>
  );
}

export default App;
