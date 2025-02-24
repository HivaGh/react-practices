import { useState } from "react";
import "./App.css";

import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

function Home() {
  return <h1> صفحه اصلی</h1>;
}

function About() {
  return <h1> درباره ما</h1>;
}

function Contact() {
  return <h1> تماس با ما</h1>;
}

function App() {
  return (
    <BrowserRouter>
      <nav>
        <Link to="/">خانه</Link> | <Link to="/about">درباره ما</Link> | <Link to="/contact">تماس با ما</Link>
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
