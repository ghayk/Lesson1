export function isRequired(value) {
  return !!!value && 'Field is Required!'
}
export function minLength(value) {
  return value.length < 3 && 'Min Length of this field 3'
}
export function maxLength(value) {
  return value.length > 40 && 'Max Length of this field 40'
}
export function spaces(value) {
  if (value.search(/\s/) !== -1) {
    return 'Text may not contain spaces'
  }
}
export function email(value, name) {
  if (name === 'email') {
    const ve = /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
    return !ve.test(value) && 'Please enter a valid email'
  }
}
