import React from "react";
import Navbar from "./Components/Navbar/Navbar";
import Header from "./Components/Header/Header";
import About from "./Components/About/About";
import Porjects from "./Components/Projects/Projects";


const App = () => {
  return (
    <div>
      <Navbar/>
      <Header/>
      <About/>
      <Porjects/>
    </div>
  );
}

export default App

