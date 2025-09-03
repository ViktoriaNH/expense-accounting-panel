import { useNavigate } from "react-router-dom";
import "./Welcome.scss";

const Welcome = () => {
  const titleId = "welcome-title";
  const navigate = useNavigate;

  const handleLoginClick = () => {
    navigate('/login');
  }

  return (
    <section className="welcome" aria-labelledby={titleId}>
      <div className="welcome__message">Добро пожаловать</div>
      <div className="welcome__identify">
        <img
          src="/icons/welcome-logo.svg"
          alt="Главный логотип"
          width="40"
          height="40"
          loading="eager"
        />
        <h1 id={titleId}>Панель учета расходов</h1>
        <p>
          Трать с умом. Отслеживай траты.
          <br /> Расслабься и наслаждайся.
        </p>
      </div>

      <div className="welcome__decription">
        Панель автоматически распределит расходы и построит отчёты <br />в графиках и
        таблицах.
      </div>

      <div className="welcome__auth">
        <button className="button button--login" onClick={handleLoginClick}>Войти</button>
        <button className="button button--register">Зарегистрироваться</button>
      </div>
    </section>
  );
};

export default Welcome;

// const AuthWrapper = ({ onLogin }) => {
//   return (
//     <div className="auth-wrapper">
//       <Routes>
//         <Route
//           path="login"
//           element={
//             <>
//               <AuthDescription />
//               <Login onLogin={onLogin} />
//             </>
//           }
//         />
//         <Route
//           path="register"
//           element={
//             <>
//               <AuthDescription />
//               <Register onLogin={onLogin} />
//             </>
//           }
//         />
//         <Route
//           index
//           element={
//             <>
//               {" "}
//               <AuthDescription />
//               <Login onLogin={onLogin} />
//             </>
//           }
//         />
//       </Routes>
//     </div>
//   );
// };

// export default AuthWrapper;
