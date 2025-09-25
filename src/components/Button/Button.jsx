import "./Button.scss";

const Button = ({ submitText, onClick, type = "submit", variant = "", allFieldsSuccess }) => {
  return (
    <button className={`button button--${variant}`} type={type} onClick={onClick}  disabled={!allFieldsSuccess} >
      {submitText}
    </button>
  );
};

export default Button;
