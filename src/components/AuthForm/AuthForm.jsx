import { useId } from "react";
import "./AuthForm.scss";
import { Link, useNavigate } from "react-router-dom";
import iconBack from "../../assets/icons/icon-back.svg";

const AuthForm = ({
  title,
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
  const navigate = useNavigate();

  const titleId = `auth-title-${uid}`;
  const errorId = `auth-error-${uid}`;

  return (
    <section className="auth">
      <form
        className="auth__form"
        aria-labelledby={titleId}
        onSubmit={onSubmit}
      >
        <img
          className="auth__icon"
          src={iconBack}
          alt="Назад"
          width={16}
          height={16}
          onClick={ () => navigate('/welcome')}
        />

        <h2 id={titleId}>{title}</h2>

        {fields.map((field) => {
          // Чекбокс
          if (field.type === "checkbox") {
            return (
              <label
                key={field.id}
                htmlFor={field.id}
                className="checkbox-wrapper"
              >
                <input type="checkbox" {...field} /> {field.label}
              </label>
            );
          }

          // Поля text / password
          return (
            <div className="auth__group" key={field.id}>
              <div className="auth__group-row">
                <label htmlFor={field.id} className="auth__label">
                  {field.label}
                </label>

                {/* поддерживаем ссылку "Забыли пароль?" через поле extra */}
                {field.extra?.type === "link" && (
                  <Link to={field.extra.href} className="auth__forgot">
                    {field.extra.text}
                  </Link>
                )}
              </div>

              <input
                id={field.id}
                name={field.name}
                type={field.type}
                required={field.required}
                minLength={field.minLength}
                maxLength={field.maxLength}
                className={`auth__input ${error ? "auth__input--error" : ""}`}
                aria-invalid={!!error}
                aria-describedby={error ? errorId : undefined}
                autoComplete={field.autoComplete}
              />
            </div>
          );
        })}

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

        <button className="auth__button" type="submit">
          {submitText}
        </button>

        <hr className="auth__divider" />

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
              {notice.text}{" "}
              {notice.linkText && notice.href && (
                <Link to={notice.href}>{notice.linkText}</Link>
              )}
            </p>
          </div>
        )}
      </form>
    </section>
  );
};

export default AuthForm;
