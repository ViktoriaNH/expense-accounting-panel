import ForgotPassword from "../../components/ForgotPassword/ForgotPassword";
import Login from "../../components/Login/Login";
import Register from '../../components/Register/Register';

const AuthWrapper = ({ onLogin }) => {
  return (
    <div className="auth-wrapper">
      <Routes>
        <Route
          path="login"
          element={
            <>
              <Login onLogin={onLogin} />
            </>
          }
        />
        <Route
          path="register"
          element={
            <>
              <Register onLogin={onLogin} />
            </>
          }
        />
        <Route
          path="forgot-password"
          element={
            <>
              <ForgotPassword onLogin={onLogin} />
            </>
          }
        />
      </Routes>
    </div>
  );
};

export default AuthWrapper;
