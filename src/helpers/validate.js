export function isRequired(value) {
  return !!!value && [false, 'Field is Required!']
}
export function minLength(value) {
  return value.length < 3 && [false, 'Min Length of this field 3']
}
export function maxLength(value) {
  return value.length > 40 && [false, 'Max Length of this field 40']
}
export function spaces(value) {
  if (value.search(/\s/) !== -1) {
    return [false, 'Text may not contain spaces']
  }
}
export function email(value, name) {
  if (name === 'email') {
    const ve = /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
    return !ve.test(value) && [false, 'Please enter a valid email']
  }
}
