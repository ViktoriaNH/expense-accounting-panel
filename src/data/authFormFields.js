import { inputIcons } from "./inputIcons";

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
    placeholder: 'Введите имя пользователя',
    iconLeft: inputIcons.leftIconUsername,
    iconRightError: inputIcons.rightIconErr,
    iconRightSuccess: inputIcons.rightIconSucc,
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
    placeholder: 'Введите Ваш пароль',

    extra: {
      type: "link",
      text: "Забыли пароль?",
      href: "/auth/forgot-password",
    },

    iconLeft: inputIcons.leftIconPassword,
    iconRight: inputIcons.rightIconPassword,

    iconClose: inputIcons.rightIconPasswordClose,
    iconOpen: inputIcons.rightIconPasswordOpen,

    iconRightError: inputIcons.rightIconErr,
    iconRightSuccess: inputIcons.rightIconSucc,
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
      placeholder: 'Введите имя пользователя',
    iconLeft: inputIcons.leftIconUsername,
    iconRightError: inputIcons.rightIconErr,
    iconRightSuccess: inputIcons.rightIconSucc,
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
    iconLeft: inputIcons.leftIconEmail,
    iconRightError: inputIcons.rightIconErr,
    iconRightSuccess: inputIcons.rightIconSucc,

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
    placeholder: 'Введите Ваш пароль',
    iconLeft: inputIcons.leftIconPassword,
    iconRight: inputIcons.rightIconPassword,

    iconClose: inputIcons.rightIconPasswordClose,
    iconOpen: inputIcons.rightIconPasswordOpen,

    iconRightError: inputIcons.rightIconErr,
    iconRightSuccess: inputIcons.rightIconSucc,
    value: undefined, // если родитель контролирует поле — туда приходит строка
    disabled: false,
    error: null, // string с текстом ошибки или null
    success: false, // булевый флаг (или тоже string с сообщением)
    onChange: undefined, // опц. функция (для контролируем. полей)
    message: null, // хэлпер текст
  },
  // {
  //   id: "confirm",
  //   name: "confirm",
  //   label: "Повторите пароль",
  //   type: "password",
  //   required: true,
  //   placeholder: 'Повторите Ваш пароль',
  //   minLength: 8,
  //   maxLength: 14,
  //   iconLeft: inputIcons.leftIconPassword,
  //   iconRight: inputIcons.rightIconPassword,

  //   iconClose: inputIcons.rightIconPasswordClose,
  //   iconOpen: inputIcons.rightIconPasswordOpen,

  //   iconRightError: inputIcons.rightIconErr,
  //   iconRightSuccess: inputIcons.rightIconSucc,
  //   value: undefined, // если родитель контролирует поле — туда приходит строка
  //   disabled: false,
  //   error: null, // string с текстом ошибки или null
  //   success: false, // булевый флаг (или тоже string с сообщением)
  //   onChange: undefined, // опц. функция (для контролируем. полей)
  //   message: null, // хэлпер текст
  // },
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
    iconLeft: inputIcons.leftIconEmail,
    iconRightError: inputIcons.rightIconErr,
    iconRightSuccess: inputIcons.rightIconSucc,

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
    iconLeft: inputIcons.leftIconEmail,
    iconRightError: inputIcons.rightIconErr,
    iconRightSuccess: inputIcons.rightIconSucc,

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
    placeholder: 'Введите код из письма',
    minLength: 6,
    maxLength: 6,
    iconLeft: inputIcons.leftIconPassword,
    iconRight: inputIcons.rightIconPassword,

    iconClose: inputIcons.rightIconPasswordClose,
    iconOpen: inputIcons.rightIconPasswordOpen,

    iconRightError: inputIcons.rightIconErr,
    iconRightSuccess: inputIcons.rightIconSucc,
    value: undefined, // если родитель контролирует поле — туда приходит строка
    disabled: false,
    error: null, // string с текстом ошибки или null
    success: false, // булевый флаг (или тоже string с сообщением)
    onChange: undefined, // опц. функция (для контролируем. полей)
    message: null, // хэлпер текст
  },
  {
    id: "new_password",
    name: "new_password",
    label: "Новый пароль",
    type: "password",
    required: true,
    placeholder: 'Введите новый пароль',
    minLength: 6,
    maxLength: 20,
    iconLeft: inputIcons.leftIconPassword,
    iconRight: inputIcons.rightIconPassword,

    iconClose: inputIcons.rightIconPasswordClose,
    iconOpen: inputIcons.rightIconPasswordOpen,

    iconRightError: inputIcons.rightIconErr,
    iconRightSuccess: inputIcons.rightIconSucc,
    value: undefined, // если родитель контролирует поле — туда приходит строка
    disabled: false,
    error: null, // string с текстом ошибки или null
    success: false, // булевый флаг (или тоже string с сообщением)
    onChange: undefined, // опц. функция (для контролируем. полей)
    message: null, // хэлпер текст
  },
];
