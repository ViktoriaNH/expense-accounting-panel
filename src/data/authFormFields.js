import { emailIcons } from "./inputIcons";

export const loginFormFields = [
  {
    id: "username",
    name: "username",
    label: "Имя пользователя",
    type: "text",
    required: true,
    minLength: 6,
    maxLength: 20,
  },
  {
    id: "password",
    type: "password",
    name: "password",
    label: "Пароль",
    required: true,
    minLength: 6,
    maxLength: 20,

    extra: {
      type: "link",
      text: "Забыли пароль?",
      href: "/auth/forgot-password",
    },
  },

  {
    id: "remember",
    type: "checkbox",
    name: "remember",
    label: "Запомнить меня",
  },
];

export const registerFormFields = [
  {
    id: "username",
    name: "username",
    label: "Имя пользователя",
    type: "text",
    required: true,
    minLength: 6,
    maxLength: 20,
  },
  {
    id: "email",
    name: "email",
    label: "Email",
    type: "email",
    required: true,
    minLength: 6,
    maxLength: 30,
    placeholder: "example123@mail.com",
    iconLeft: emailIcons.iconLeft,
    iconRightError: emailIcons.iconError,

    value: undefined, // если родитель контролирует поле — туда приходит строка
    disabled: false,
    error: null, // string с текстом ошибки или null
    success: false, // булевый флаг (или тоже string с сообщением)
    onChange: undefined, // опц. функция (для контролируем. полей)
    message: null, // хэлпер текст
  },
  {
    id: "password",
    name: "password",
    label: "Пароль",
    type: "password",
    required: true,
    minLength: 6,
    maxLength: 20,
  },
  {
    id: "confirm",
    name: "confirm",
    label: "Повторите пароль",
    type: "password",
    required: true,
    minLength: 8,
    maxLength: 14,
  },
];

export const forgotPasswordFormFields = [
  {
    id: "email",
    name: "email",
    label: "Email",
    type: "email",
    required: true,
    minLength: 6,
    maxLength: 30,
  },
];

export const resetPasswordFormFields = [
  {
    id: "email",
    name: "email",
    label: "Email",
    type: "email",
    required: true,
    minLength: 6,
    maxLength: 30,
  },
  {
    id: "reset_code",
    name: "reset_code",
    label: "Код из письма",
    type: "text",
    required: true,
    minLength: 6,
    maxLength: 6,
  },
  {
    id: "new_password",
    name: "new_password",
    label: "Новый пароль",
    type: "password",
    required: true,
    minLength: 6,
    maxLength: 20,
  },
];
