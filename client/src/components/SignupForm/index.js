import React, { useEffect, useState } from 'react'
import { withStyles } from '@material-ui/core/styles'
import TextField from '@material-ui/core/TextField'
import Button from '@material-ui/core/Button'
import Send from '@material-ui/icons/Send'
import FormControlLabel from '@material-ui/core/FormControlLabel'
import Checkbox from '@material-ui/core/Checkbox'
import { createForm } from 'rc-form'
import escape from 'lodash/escape'

import * as validationRules from '../../common/validationRules'

const styles = (theme) => ({
  form: {
    maxWidth: 640
  },
  row: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-between'
  },
  input: {
    margin: '12px',
    flexGrow: 1,
    flexBasis: 'calc(50% - 24px)',
    minWidth: 240
  },
  rightIcon: {
    marginLeft: theme.spacing.unit,
  },
  checkBox: {
    display: 'flex',
    margin: '12px'
  }
})

const SignupForm = ({ handleSubmit, form, classes, errors }) => {
  const [rememberMe, setRememberMe] = useState(false)

  const fieldGenerator = ({ name, label, rules, type = 'text', value = '' }) => {
    return (
      <React.Fragment>
        {form.getFieldDecorator(name, {
          rules: [{ transform: val => escape(val.trim()) }, ...rules],
          initialValue: value
        })(
          <TextField 
            className={classes.input}
            name={name} 
            label={label} 
            required={!!rules.find(rule => rule.required)} 
            type={type}
            margin="normal"
            variant="filled"
            error={!!form.getFieldError(name)}
            helperText={(form.getFieldError(name) || []).join(', ')}
          />
        )}
      </React.Fragment>
    )
  }

  const submitValidation = (e) => {
    e.preventDefault()

    form.validateFields((err, values) => {
      if (!err) {
        Object.keys(values).forEach(key => values[key] = values[key].trim())

        handleSubmit({ ...values, rememberMe })
      }
    }, { force: true })
  }

  useEffect(() => {
    const fieldsValues = form.getFieldsValue()
    const newFields = {}

    errors.forEach(error => {
      newFields[error.name] = {
        value: fieldsValues[error.name],
        errors: error.messages.map(mes => new Error(mes))
      }
    })

    form.setFields(newFields)
  }, [errors])

  return (
    <form className={classes.form} autoComplete="off" noValidate onSubmit={submitValidation}>
      <div className={classes.row}>
        {fieldGenerator({
          name: 'firstname',
          label: 'First Name',
          rules: [{ required: true, message: 'This field is required!' }]
        })}
        {fieldGenerator({
          name: 'lastname',
          label: 'Last Name',
          rules: [{ required: true, message: 'This field is required!' }]
        })}
      </div>

      <div className={classes.row}>
        {fieldGenerator({
          name: 'username',
          label: 'Username',
          rules: [
            { required: true, message: 'This field is required!' },
            { min: 3, max: 18, message: 'Username must be at least 6, maximum 18 chars!'}
          ]
        })}
        {fieldGenerator({
          name: 'email',
          label: 'Email',
          rules: [
            { type: 'email', message: 'Please provide a valid email!'},
            { required: true, message: 'This field is required!' }
          ],
          type: 'email'
        })}
      </div>

      <div className={classes.row}>
        {fieldGenerator({
          name: 'password',
          label: 'Password',
          rules: [
            { required: true, message: 'This field is required' },
            { min: 6, max: 24, message: 'Password must be at least 8, maximum 24 chars!'},
            { validator: validationRules.compareBy(form), reference: 'confirmPassword' }
          ],
          type: 'password'
        })}
        {fieldGenerator({
          name: 'confirmPassword',
          label: 'Confirm Password',
          rules: [
            { required: true, message: 'This field is required' },
            { validator: validationRules.compareTo(form), reference: 'password', message: 'Two passwords that you enter is inconsistent!' }
          ],
          type: 'password'
        })}
      </div>

      <div className={`${classes.row} ${classes.input}`}>
        <Button fullWidth variant="contained" color="primary" type="submit" size="large">
          Sign up
          <Send className={classes.rightIcon} />
        </Button>
      </div>

      <div className={classes.checkBox}>
        <FormControlLabel
          control={
            <Checkbox
              onChange={() => setRememberMe(!rememberMe)}
            />
          }
          label="Remember me"
        />
      </div>
    </form>
  )
}

SignupForm.defaultProps = {
  errors: [],
  handleSubmit: console.log
}

export default withStyles(styles)(createForm()(SignupForm))
