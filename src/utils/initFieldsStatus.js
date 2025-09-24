export const initFieldsStatus= (fields) => {
    const fieldsStatus = {}; // здесь мы будем хранить статусы по каждому полю, успех или ошибка

  // формируем через перебор всех полей объект по такой логике: 
  // если в поле есть required - по умолчанию оно не заполнено, false, чтобы при надобности оно могло заблокировать отправку
  // если нет required (чекбокс) - то можно true, т.к. не важно, будет оно отмечено или нет


    fields.forEach(field => {
        if (field.required) {
            fieldsStatus[field.id] = false
        } else {
            fieldsStatus[field.id] = true
        }
    });

    return fieldsStatus;
}