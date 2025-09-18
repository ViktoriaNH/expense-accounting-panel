export function setRightIcon(field, hasError, isSuccess) {
  if (hasError && field.iconRightError) return field.iconRightError;
  if (isSuccess && field.iconRightSuccess) return field.iconRightSuccess;
  return null;
}