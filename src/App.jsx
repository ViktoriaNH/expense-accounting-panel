import { Routes, Route, BrowserRouter, Navigate } from "react-router-dom";
import "./styles/index";

import Login from "./components/Login/Login";

import Welcome from "./sections/Welcome/Welcome";
import Authorization from "./pages/Authorization";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navigate to="/welcome" replace />} />

        <Route path="/welcome" element={<Authorization />} />

        <Route path="/" element={<Navigate to="/login" replace />} />

        {/*    
      <Route path="/list" element={} />
      <Route path="/stats" element={} />
      <Route path="/setting" element={} />  */}
      </Routes>
    </BrowserRouter>
  );
};

export default App;
