import "./Button.scss";

const Button = ({ submitText, onClick, type = "submit", variant = "", allFieldsSuccess }) => {
  return (
    <button className={`button button--${variant}`} type={type} onClick={onClick}  isDisabled={!allFieldsSuccess} >
      {submitText}
    </button>
  );
};

export default Button;
