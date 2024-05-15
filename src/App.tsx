import React from "react";
import Intro from "./components/home/Intro";
import "./index.css";
import AboutMe from "./components/home/AboutMe";
import Header from "./components/layout/Header";
import Gallery from "./components/home/Gallery";
import Footer from "./components/layout/Footer";
import Projects from "./components/home/Projects";

const App: React.FC = () => {
  return (
    <div className="App">
      <Header />
      <Intro />
      <AboutMe />
      <Gallery />
      <Projects />
      <Footer />
    </div>
  );
};

export default App;
