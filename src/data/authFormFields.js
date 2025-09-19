import { emailIcons } from "./inputIcons";

// избавить от дублирования !!!!

export const loginFormFields = [
  {
    id: "username",
    name: "username",
    label: "Имя пользователя",
    type: "text",
    required: true,
    minLength: 6,
    maxLength: 20,
    iconLeft: emailIcons.leftIconUsername,
    iconRightError: emailIcons.rightIconErr,
    iconRightSuccess: emailIcons.rightIconSucc,
    value: undefined, // если родитель контролирует поле — туда приходит строка
    disabled: false,
    error: null, // string с текстом ошибки или null
    success: false, // булевый флаг (или тоже string с сообщением)
    onChange: undefined, // опц. функция (для контролируем. полей)
    message: null, // хэлпер текст
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

    iconLeft: emailIcons.leftIconPassword,
    iconRight: emailIcons.rightIconPassword,

    iconClose: emailIcons.rightIconPasswordClose,
    iconOpen: emailIcons.rightIconPasswordOpen,

    iconRightError: emailIcons.rightIconErr,
    iconRightSuccess: emailIcons.rightIconSucc,
    value: undefined, // если родитель контролирует поле — туда приходит строка
    disabled: false,
    error: null, // string с текстом ошибки или null
    success: false, // булевый флаг (или тоже string с сообщением)
    onChange: undefined, // опц. функция (для контролируем. полей)
    message: null, // хэлпер текст
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
    iconLeft: emailIcons.leftIconUsername,
    iconRightError: emailIcons.rightIconErr,
    iconRightSuccess: emailIcons.rightIconSucc,
    value: undefined, // если родитель контролирует поле — туда приходит строка
    disabled: false,
    error: null, // string с текстом ошибки или null
    success: false, // булевый флаг (или тоже string с сообщением)
    onChange: undefined, // опц. функция (для контролируем. полей)
    message: null, // хэлпер текст
  },
  {
    id: "email",
    name: "email",
    label: "E-mail",
    type: "email",
    required: true,
    minLength: 6,
    maxLength: 30,
    placeholder: "example123@mail.com",
    iconLeft: emailIcons.leftIconEmail,
    iconRightError: emailIcons.rightIconErr,
    iconRightSuccess: emailIcons.rightIconSucc,

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
    iconLeft: emailIcons.leftIconPassword,
    iconRight: emailIcons.rightIconPassword,

    iconClose: emailIcons.rightIconPasswordClose,
    iconOpen: emailIcons.rightIconPasswordOpen,

    iconRightError: emailIcons.rightIconErr,
    iconRightSuccess: emailIcons.rightIconSucc,
    value: undefined, // если родитель контролирует поле — туда приходит строка
    disabled: false,
    error: null, // string с текстом ошибки или null
    success: false, // булевый флаг (или тоже string с сообщением)
    onChange: undefined, // опц. функция (для контролируем. полей)
    message: null, // хэлпер текст
  },
  {
    id: "confirm",
    name: "confirm",
    label: "Повторите пароль",
    type: "password",
    required: true,
    minLength: 8,
    maxLength: 14,
    iconLeft: emailIcons.leftIconPassword,
    iconRight: emailIcons.rightIconPassword,

    iconClose: emailIcons.rightIconPasswordClose,
    iconOpen: emailIcons.rightIconPasswordOpen,

    iconRightError: emailIcons.rightIconErr,
    iconRightSuccess: emailIcons.rightIconSucc,
    value: undefined, // если родитель контролирует поле — туда приходит строка
    disabled: false,
    error: null, // string с текстом ошибки или null
    success: false, // булевый флаг (или тоже string с сообщением)
    onChange: undefined, // опц. функция (для контролируем. полей)
    message: null, // хэлпер текст
  },
];

export const forgotPasswordFormFields = [
  {
    id: "email",
    name: "email",
    label: "E-mail",
    type: "email",
    required: true,
    minLength: 6,
    maxLength: 30,
    placeholder: "example123@mail.com",
    iconLeft: emailIcons.leftIconEmail,
    iconRightError: emailIcons.rightIconErr,
    iconRightSuccess: emailIcons.rightIconSucc,

    value: undefined, // если родитель контролирует поле — туда приходит строка
    disabled: false,
    error: null, // string с текстом ошибки или null
    success: false, // булевый флаг (или тоже string с сообщением)
    onChange: undefined, // опц. функция (для контролируем. полей)
    message: null, // хэлпер текст
  },
];

export const resetPasswordFormFields = [
  {
    id: "email",
    name: "email",
    label: "E-mail",
    type: "email",
    required: true,
    minLength: 6,
    maxLength: 30,
    placeholder: "example123@mail.com",
    iconLeft: emailIcons.leftIconEmail,
    iconRightError: emailIcons.rightIconErr,
    iconRightSuccess: emailIcons.rightIconSucc,

    value: undefined, // если родитель контролирует поле — туда приходит строка
    disabled: false,
    error: null, // string с текстом ошибки или null
    success: false, // булевый флаг (или тоже string с сообщением)
    onChange: undefined, // опц. функция (для контролируем. полей)
    message: null, // хэлпер текст
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
    iconLeft: emailIcons.leftIconPassword,
    iconRight: emailIcons.rightIconPassword,

    iconClose: emailIcons.rightIconPasswordClose,
    iconOpen: emailIcons.rightIconPasswordOpen,

    iconRightError: emailIcons.rightIconErr,
    iconRightSuccess: emailIcons.rightIconSucc,
    value: undefined, // если родитель контролирует поле — туда приходит строка
    disabled: false,
    error: null, // string с текстом ошибки или null
    success: false, // булевый флаг (или тоже string с сообщением)
    onChange: undefined, // опц. функция (для контролируем. полей)
    message: null, // хэлпер текст
  },
];
