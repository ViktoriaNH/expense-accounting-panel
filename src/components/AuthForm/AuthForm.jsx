import "./AuthForm.scss";
import { Link, useNavigate } from "react-router-dom";
import iconBack from "../../assets/icons/icon-back.svg";
import Input from "../Input/Input";
import Button from "../Button/Button";
import { useState } from "react";
import { initFieldsStatus } from "../../utils/initFieldsStatus";

// родитель должен знать, какие поля success, чтобы дизэйблить кнопку

const AuthForm = ({
  title,
  submitText,
  fields,
  notice,
  onSubmit,

}) => {
  const navigate = useNavigate();
  const [serverErrors, setServerErrors] = useState({}); // <--- ошибки сервера

  // const isDisabled =
  //   formStatus === "submit" || // отправка данных
  //   formStatus === "success" || // данные отправлены, ждем переход
  //   formStatus === "normal-disable" || // временная блокировка (что-то просто подвисло)
  //   formStatus === "error-disable"; // блокировка при ошибке

  //     Как это работает

  // Пока formStatus = "idle" → isDisabled = false → поля и кнопка активны, пользователь может печатать.

  // Если мы ставим formStatus = "submitting" → isDisabled = true → все поля и кнопка блокируются, чтобы пользователь не мог их трогать.

  // Тоже самое для success, normal-disable и error-disable — форма полностью блокируется.

  // убираем сообщение об ошибке, когда пользоватлеь начал что-то печатать

  const clearServerError = (fieldId) => {
    setServerErrors(function update(prev) {
      // если в объекте нет ключа с таким id — тоже ничего не меняем
      // if (!(fieldId in prev)) {
      //   return prev;
      // }

      // создаём новый объект-копию
      const newErrors = { ...prev };

      // убираем конкретное поле
      delete newErrors[fieldId];

      // возвращаем новый объект
      return newErrors;
    });
  };

  const [fieldsStatus, setFieldsStatus] = useState(() =>
    initFieldsStatus(fields)
  ); // сюда передаем маасивы с полями в зависмости от конктреной формы

  const onStatusChange = (id, isSuccess) => {
    // принимает id - конкртное поле, к-ое обновилось и его статус, он success или нет
    setFieldsStatus((prev) => {
      // передаем текущее состояние полей
      // чтобы избежать лишнего перерендеринга, проверяем, не совпадает ли текущее значение
      if (prev[id] === isSuccess) return prev; // возвращаем старое состояние без изменений

      const updatedFields = { ...prev }; // копируем, чтобы избежать мутирования старого объекта
      updatedFields[id] = isSuccess; // обновляем одно конкретное поле в новом объекте

      return updatedFields; // и возращаем обновленный объект состояния, чтобы установить его как новое состояние fieldsStatus
    });
  };

  const allFieldsSuccess = Object.values(fieldsStatus).every(
    (status) => status === true
  );
  // Object.values() берёт все значения объекта и преобразует в массив, типа [true, false, true]

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
            onSubmit={(e) => onSubmit(e, setServerErrors)}
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

            <Input
              fields={fields}
              onStatusChange={onStatusChange}
              serverErrors={serverErrors}
              clearServerError={clearServerError} // передаём вниз
            />

            <Button
              submitText={submitText}
              allFieldsSuccess={allFieldsSuccess}
              variant="login"
            />

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
