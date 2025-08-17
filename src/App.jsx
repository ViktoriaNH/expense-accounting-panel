import { Routes, Route, BrowserRouter, Navigate } from "react-router-dom";
import "./styles/index";

import Authorization from "./pages/Authorization";
import { useState } from "react";
import Header from "./layouts/Header/Header";

function App() {
  const [isUserAuth, setIsUserAuth] = useState(false); 

  return (
    <BrowserRouter>
    <Header isUserAuth={isUserAuth} />
      <Routes>
        <Route path="/auth/*" element={<Authorization onLogin={() => setIsUserAuth(true)}/>} />


        {/* * <Route path="/dashboard" element={} />
      <Route path="/add" element={} />
      <Route path="/list" element={} />
      <Route path="/stats" element={} />
      <Route path="/setting" element={} /> */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
