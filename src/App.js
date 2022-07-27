<<<<<<< HEAD
import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./routes/Home";
import About from "./routes/About";
import Detail from "./routes/Detail";
import Navigation from "./components/Navigation";
=======
import logo from "./logo.svg";
>>>>>>> 42e9460a01650e029b177c9ae3269e5c13785284
import "./App.css";

function App() {
  return (
<<<<<<< HEAD
    <Router basename="klucas33.github.io/movie_app/">
      <Routes>
        <Route element={Navigation} />
        <Route path="/" exact={true} element={<Home />} />
        <Route path="/about" element={About} />
        <Route path="/movie/:id" element={Detail} />
      </Routes>
    </Router>
=======
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> 홍래님 화이팅
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
>>>>>>> 42e9460a01650e029b177c9ae3269e5c13785284
  );
}

export default App;
