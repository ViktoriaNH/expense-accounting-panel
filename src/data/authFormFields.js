
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
      type: 'link',
      text: 'Забыли пароль?',
      href: '/forgot-password'
    }
  },

  {
    id: 'remember',
    type: 'checkbox',
    name: 'remember',
    label: 'Запомнить меня',
  }


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

export const forgotPasswordFormFields = [
 {
    id: "email",
    name: "email",
    label: "Email",
    type: "email",
    required: true,
    minLength: 6,
    maxLength: 30
  }
]

export const resetPasswordFormFields = [
 {
    id: "email",
    name: "email",
    label: "Email",
    type: "email",
    required: true,
    minLength: 6,
    maxLength: 30
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

]