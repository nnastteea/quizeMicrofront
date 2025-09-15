import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import QuizeScreen from "../src/components/QuizeScreen";
import StartScreen from "../src/components/StartScreen";
import { UserProvider } from "./UserContext";

import "./styles.css";

function App() {
  return (
    <UserProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<StartScreen />} />
          <Route path="/quize" element={<QuizeScreen />} />
        </Routes>
      </BrowserRouter>
    </UserProvider>
  );
}

export default App;
