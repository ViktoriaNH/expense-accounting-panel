import { Routes, Route, BrowserRouter, Navigate } from "react-router-dom";
import "./styles/index";

import Login from "./components/Login/Login";

import Welcome from "./sections/Welcome/Welcome";
import Authorization from "./pages/Authorization";
import AuthWrapper from "./sections/AuthWrapper/AuthWrapper";
import Register from "./components/Register/Register";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navigate to="/welcome" replace />} />

        <Route path="/welcome" element={<Authorization />} />

        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />

        {/*    
      <Route path="/list" element={} />
      <Route path="/stats" element={} />
      <Route path="/setting" element={} />  */}
      </Routes>
    </BrowserRouter>
  );
};

export default App;
