export const loginFormFields = [
  {
    id: "email",
    type: "email",
    name: "email",
    label: "Email",
    required: true,
  },
  {
    id: "password",
    type: "password",
    name: "password",
    label: "Пароль",
    required: true,
    minLength: 8,
    maxLength: 14,
  },
];

export const registerFormFields = [
  { id: "email", name: "email", label: "Email", type: "email", required: true },
  {
    id: "password",
    name: "password",
    label: "Пароль",
    type: "password",
    required: true,
    minLength: 8,
    maxLength: 14,
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
