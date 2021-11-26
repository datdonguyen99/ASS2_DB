import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "./Navbar";
import ViewAPI from "./ViewAPI";
import Users from "./Users";
import ScientistCreate from "./ScientistCreate";
import ScientistUpdate from "./ScientistUpdate";

function App() {
  return (
    <BrowserRouter>
      <div>
        <Navbar />
        <Routes>
          <Route exact path="/" element={<Users />} />
          <Route exact path="/create" element={<ScientistCreate />} />
          <Route exact path="/update/:id" element={<ScientistUpdate />} />
          <Route exact path="/viewApi" element={<ViewAPI />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
