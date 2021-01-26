const validate = values => {
    const errors = {}
    if (!values.password) {
      errors.username = 'Required'
    } else if (values.password.length < 8) {
      errors.username = 'Must be more than 8 characters'
    }
    if (!values.email) {
      errors.email = 'Required'
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
      errors.email = 'Invalid email address'
    }
    return errors
  }
  
  export default validate