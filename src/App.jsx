import { Routes, Route, BrowserRouter, Navigate } from "react-router-dom";
import "./styles/index";

import Login from "./components/Login/Login";

import Authorization from "./pages/Authorization";
import Register from "./components/Register/Register";
import ForgotPassword from "./components/ForgotPassword/ForgotPassword";
import ResetPassword from "./components/ResetPassword/ResetPassword";
import MyProfile from "./pages/MyProfile";
import Dashboard from "./pages/Dashboard";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navigate to="/welcome" replace />} />

        <Route path="/welcome" element={<Authorization />} />

        <Route path="/auth/login" element={<Login />} />
        <Route path="/auth/register" element={<Register />} />
        <Route path="/auth/forgot-password" element={<ForgotPassword />} />
        <Route path="/auth/reset-password" element={<ResetPassword />} />
        <Route path="/my-profile" element={<MyProfile />} />
        <Route path="/dashboard" element={<Dashboard />} />

        {/*    
      <Route path="/list" element={} />
      <Route path="/stats" element={} />
      <Route path="/setting" element={} />  */}
      </Routes>
    </BrowserRouter>
  );
};

export default App;
