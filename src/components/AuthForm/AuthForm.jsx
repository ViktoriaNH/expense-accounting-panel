import { useId } from "react";
import "./AuthForm.scss";
import { Link } from "react-router-dom";
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
          <img src={iconBack} alt="Назад" width={16} height={16} />

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
              <div
                className="auth__group"
                key={field.id}
                // style={{
                //   display: "flex",
                //   flexDirection: field.extra?.type === "link" ? "row" : "column",
                //   justifyContent: "space-between",
                //   alignItems: field.extra?.type === "link" ? "center" : "flex-start",
                //   marginBottom: "16px",
                // }}
              >
                <label htmlFor={field.id}>{field.label}</label>
                <div
                // style={{ display: "flex", width: "100%", justifyContent: "space-between", alignItems: "center" }}
                >
                  <input
                    className="auth__input"
                    id={field.id}
                    name={field.name}
                    type={field.type}
                    required={field.required}
                    minLength={field.minLength}
                    maxLength={field.maxLength}
                    aria-describedby={error ? "auth-error" : undefined}
                  />
                  {field.extra?.type === "link" && (
                    <Link to={field.extra.href} className="auth__link">
                      {field.extra.text}
                    </Link>
                  )}
                </div>
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
      </div>
    </section>
  );
};

export default AuthForm;
