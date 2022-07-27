import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./routes/Home";
import About from "./routes/About";
import Detail from "./routes/Detail";
import Navigation from "./components/Navigation";
import "./App.css";

function App() {
  return (
    <Router basename="klucas33.github.io/movie_app/">
      <Routes>
        <Route element={Navigation} />
        <Route path="/" exact={true} element={<Home />} />
        <Route path="/about" element={About} />
        <Route path="/movie/:id" element={Detail} />
      </Routes>
    </Router>
  );
}

export default App;
