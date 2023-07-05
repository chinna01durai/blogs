import React from "react";
import Home from "./pages/home/Home";
import Navbar from "./components/navbar/Navbar";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Create from "./pages/create/Create";


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/create" element={<Create />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
