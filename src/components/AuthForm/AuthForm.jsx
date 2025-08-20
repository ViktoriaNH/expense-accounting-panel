import { useId } from "react";
import "./AuthForm.scss";
import { Link } from "react-router-dom";

const AuthForm = ({
  title,
  userIcon,
  fields,
  submitText,
  error,
  notice,
  onSubmit,
  // buttons, // для создания нескольких кнопок в профиле, это на страницу с профилем
}) => {
  // новая фича Реакт18+, useId генерирует уникальную строку на каждый рендер компонента, чтобы не было пересечения
  // одинаковых id в двух компонентах login и register
  const uid = useId();

  const titleId = `auth-title-${uid}`;
  const errorId = `auth-error-${uid}`;

  return (
    <section className="auth">
      <div className="auth__inner">
        <form
          className="auth__form"
          aria-labelledby={titleId}
          onSubmit={onSubmit}
        >
          <h2 id={titleId}>
            {userIcon && <span className="user-icon">{userIcon}</span>}
            {title}
          </h2>

          {fields.map((field) => (
            <div className="auth__group" key={field.id}>
              <label htmlFor={field.id}>{field.label}</label>
              <input
                className="auth__input"
                id={field.id}
                name={field.name}
                type={field.type}
                required={field.required}
                minLength={field.minLength}
                maxLength={field.maxLength}
                aria-describedby={error ? errorId : undefined}
              />
            </div>
          ))}

          {error && (
            <input
              type="text"
              className="auth__input auth__input--error"
              placeholder="Неверный Email или пароль. Попробуйте ещё раз."
              readOnly
              aria-live="polite"
              aria-label="Ошибка формы"
            />
          )}

          <button className="auth__button" type="submit">
            {submitText}
          </button>

          {notice && (
            <div
              className={`auth__notice ${
                notice.type === "success"
                  ? "auth__notice--success"
                  : notice.type === "error"
                  ? "auth__notice--error"
                  : ""
              }`}
            >
              <p>
                {notice.text} <Link to={notice.href}>{notice.linkText}</Link>
              </p>
            </div>
          )}
        </form>
      </div>
    </section>
  );
};

export default AuthForm;
