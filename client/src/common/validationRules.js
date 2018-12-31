// { validator: compareTo(form), reference: 'password', message: 'Password confirm not match password' }
export const compareTo = (form) => (rule, val, cb) => {
  if (val && val !== form.getFieldValue(rule.reference)) {
    cb(rule.message)
  } else {
    cb()
  }
}

// { validator: compareTo(form), reference: 'confirmPassword', }
export const compareBy = (form) => (rule, val, cb) => {
  if (val && form.isFieldTouched(rule.reference)) {
    form.validateFields([rule.reference], { force: true })
  }

  cb()
}