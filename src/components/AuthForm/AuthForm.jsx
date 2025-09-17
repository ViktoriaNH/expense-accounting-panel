import "./AuthForm.scss";
import { Link, useNavigate } from "react-router-dom";
import iconBack from "../../assets/icons/icon-back.svg";
import Input from "../Input/Input";
import Button from "../Button/Button";
// import formsImg from "../../assets/images/forms-img.jpg";

const AuthForm = ({
  title,
  submitText,
  fields,
  error,
  notice,
  onSubmit,
  // buttons, // для создания нескольких кнопок в профиле, это на страницу с профилем
}) => {
  // новая фича Реакт18+, useId генерирует уникальную строку на каждый рендер компонента, чтобы не было пересечения
  // одинаковых id в двух компонентах login и register
  // const uid = useId();
  const navigate = useNavigate();

  // const titleId = `auth-title-${uid}`;
  // const errorId = `auth-error-${uid}`;

  return (
    <section className="auth">
      <div className="auth__inner container">
        <div className="auth__logo">
          <img
            src="/src/assets/icons/welcome-logo.svg"
            alt=""
            width="32"
            height="32"
            loading="eager"
          />
        </div>

        <div className="auth__form-inner">
          <form
            className="auth__form"
            aria-labelledby={title}
            onSubmit={onSubmit}
          >
            <img
              className="auth__icon"
              src={iconBack}
              alt="Назад"
              width={16}
              height={16}
              onClick={() => navigate("/welcome")}
            />

            <h2 id={title}>{title}</h2>

            <Input fields={fields} />

            {error && (
              <div
                id="auth-error"
                className="auth__input auth__input--error"
                role="alert"
                aria-live="polite"
              >
                Неверный Email или пароль. Попробуйте ещё раз.
              </div>
            )}

            <Button submitText={submitText} variant="login" />

            <hr className="auth__divider" />

            {notice && (
              <div className="auth__notice">
                <p>
                  {notice.text}{" "}
                  {notice.linkText && notice.href && (
                    <Link to={notice.href}>{notice.linkText}</Link>
                  )}
                </p>
              </div>
            )}
          </form>
        </div>

        {/* <div className="auth__image">
        <img src={formsImg} width={604} />
      </div> */}
      </div>
    </section>
  );
};

export default AuthForm;
