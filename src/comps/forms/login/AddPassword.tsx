import React from 'react'
import { Form, Input } from 'antd'

const { Item: Field } = Form

const AddPassword = () => {
  return (
    <Field
      name='password'
      hasFeedback
      label='Password'
      rules={[
        {
          required: true,
          message: 'Please input your Password!'
        }
      ]}>
      <Input.Password />
    </Field>
  )
}

export default AddPassword
