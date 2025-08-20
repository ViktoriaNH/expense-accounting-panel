import { Routes, Route, BrowserRouter, Navigate } from "react-router-dom";
import "./styles/index";

import Authorization from "./pages/Authorization";
import { useState } from "react";
import Header from "./layouts/Header/Header";
import MyProfile from "./pages/MyProfile";

function App() {
  const [isUserAuth, setIsUserAuth] = useState(false);

  return (
    //  console.log("App рендерится");

    <BrowserRouter>
      <Header isUserAuth={isUserAuth} />
      <Routes>
        <Route
          path="/auth/*"
          element={<Authorization onLogin={() => setIsUserAuth(true)} />}
        />
        <Route path="/" element={<Navigate to="/auth/login" replace />} />
    <Route path="/my-profile" element={<MyProfile />} />


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
