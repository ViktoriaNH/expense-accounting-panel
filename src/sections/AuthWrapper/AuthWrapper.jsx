import "./AuthWrapper.scss";
import { Route, Routes } from "react-router-dom";
import AuthDescription from "../../components/AuthDescription/AuthDescription";
import Login from "../../components/Login/Login";
import Register from "../../components/Register/Register";

const AuthWrapper = ({ onLogin }) => {
  return (
    <div className="auth-wrapper">
      <Routes>
        <Route
          path="login"
          element={
            <>
              <AuthDescription />
              <Login onLogin={onLogin} />
            </>
          }
        />
        <Route
          path="register"
          element={
            <>
              <AuthDescription />
              <Register onLogin={onLogin} />
            </>
          }
        />
        <Route
          index
          element={
            <>
              {" "}
              <AuthDescription />
              <Login onLogin={onLogin} />
            </>
          }
        />
      </Routes>
    </div>
  );
};

export default AuthWrapper;
