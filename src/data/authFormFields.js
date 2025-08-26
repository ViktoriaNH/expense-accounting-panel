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
