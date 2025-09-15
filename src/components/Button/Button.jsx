import "./Button.scss";

const Button = ({ submitText, onClick, type = "submit", variant = "" }) => {
  return (
    <button className={`button button--${variant}`} type={type} onClick={onClick}>
      {submitText}
    </button>
  );
};

export default Button;
