import "./AuthForm.scss";
import { Link, useNavigate } from "react-router-dom";
import iconBack from "../../assets/icons/icon-back.svg";
import Input from "../Input/Input";
import Button from "../Button/Button";
import { useState } from "react";
import { initFieldsStatus } from "../../utils/initFieldsStatus";

const AuthForm = ({ title, submitText, fields, notice, onSubmit }) => {
  const navigate = useNavigate();
  const [serverErrors, setServerErrors] = useState({});
  const [formStatus, setFormStatus] = useState("normal");

  const isDisabled = formStatus !== "normal";

  const clearServerError = (fieldId) => {
    setServerErrors(function update(prev) {
      const newErrors = { ...prev };
      delete newErrors[fieldId];
      return newErrors;
    });
  };

  const [fieldsStatus, setFieldsStatus] = useState(() =>
    initFieldsStatus(fields)
  );

  const onStatusChange = (id, isSuccess) => {
    setFieldsStatus((prev) => {
      if (prev[id] === isSuccess) return prev;

      const updatedFields = { ...prev };
      updatedFields[id] = isSuccess;

      return updatedFields;
    });
  };

  const allFieldsSuccess = Object.values(fieldsStatus).every(
    (status) => status === true
  );

  return (
    <div className="auth">
      <div className="auth__inner container">
        <div
          className={`auth__form-inner ${
            isDisabled ? "auth__form-inner--disabled" : ""
          }`}
        >
          <form
            className="auth__form"
            aria-labelledby={title}
            onSubmit={(e) => onSubmit(e, setServerErrors, setFormStatus)}
          >
            <img
              className="auth__icon"
              src={iconBack}
              alt="Назад"
              width={18}
              height={18}
              onClick={() => navigate("/welcome")}
            />

            <h2 id={title}>{title}</h2>

            <Input
              fields={fields}
              onStatusChange={onStatusChange}
              serverErrors={serverErrors}
              clearServerError={clearServerError}
              disabled={isDisabled}
            />

            <Button
              submitText={submitText}
              allFieldsSuccess={allFieldsSuccess}
              variant="login"
              disabled={isDisabled}
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
      </div>
    </div>
  );
};

export default AuthForm;
