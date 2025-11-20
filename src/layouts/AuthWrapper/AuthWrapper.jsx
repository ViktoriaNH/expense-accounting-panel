import ForgotPassword from "../../components/ForgotPassword/ForgotPassword";
import Login from "../../components/Login/Login";
import Register from '../../components/Register/Register';

const AuthWrapper = ({ onLogin }) => {
  return (
    <div className="auth-wrapper">
      <Routes>
        <Route
          path="auth/login"
          element={
            <>
              <Login onLogin={onLogin} />
            </>
          }
        />
        <Route
          path="auth/register"
          element={
            <>
              <Register onLogin={onLogin} />
            </>
          }
        />
        <Route
          path="auth/forgot-password"
          element={
            <>
              <ForgotPassword onLogin={onLogin} />
            </>
          }
        />
        <Route
          path="auth/reset-password"
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
