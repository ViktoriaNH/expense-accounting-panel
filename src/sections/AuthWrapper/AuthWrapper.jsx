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
      </Routes>
    </div>
  );
};

export default AuthWrapper;
