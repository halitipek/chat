import React, { useEffect, useState } from 'react'
import { withStyles } from '@material-ui/core/styles'
import TextField from '@material-ui/core/TextField'
import Button from '@material-ui/core/Button'
import AccountCircle from '@material-ui/icons/AccountCircle'
import Lock from '@material-ui/icons/Lock'
import Send from '@material-ui/icons/Send'
import InputAdornment from '@material-ui/core/InputAdornment'
import FormControlLabel from '@material-ui/core/FormControlLabel'
import Checkbox from '@material-ui/core/Checkbox'
import { createForm } from 'rc-form'
import escape from 'lodash/escape'

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
    flexBasis: 'calc(100% - 24px)'
  },
  rightIcon: {
    marginLeft: theme.spacing.unit,
  },
  checkBox: {
    display: 'flex',
    margin: '12px'
  }
})

const LoginForm = ({ handleSubmit, form, classes, errors }) => {
  const [rememberMe, setRememberMe] = useState(false)

  const fieldGenerator = ({ name, label, rules, icon, type = 'text', value = '' }) => {
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
            InputProps={{
              startAdornment: (
                <InputAdornment position="start" variant="filled">
                  {
                    React.cloneElement(
                        icon,
                        { color: !!form.getFieldError(name) ? 'error' : 'action' }
                    )
                  }
                </InputAdornment>
              )
            }}
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
          name: 'email',
          label: 'Email',
          rules: [
            { type: 'email', message: 'Please provide a valid email!'},
            { required: true, message: 'This field is required!' }
          ],
          icon: <AccountCircle />
        })}
        {fieldGenerator({
          name: 'password',
          label: 'Password',
          rules: [{ required: true, message: 'This field is required!' }],
          icon: <Lock />
        })}
      </div>

      <div className={`${classes.row} ${classes.input}`}>
        <Button fullWidth variant="contained" color="primary" type="submit" size="large">
          Sign in
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

LoginForm.defaultProps = {
  errors: [],
  handleSubmit: console.log
}

export default withStyles(styles)(createForm()(LoginForm))
