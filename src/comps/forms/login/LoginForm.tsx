import React from 'react'
import { Form } from 'antd'
import { LAYOUT } from '../style'
import AddPassword from './AddPassword'
import AddEmail from './AddEmail'
import { Submit } from '../../ui'
const { formItemLayout } = LAYOUT

interface CompProps {
  onFinish: (values: object) => void
}

const LoginForm: React.FC<CompProps> = ({ onFinish }) => {
  const [form] = Form.useForm()

  return (
    <Form
      {...formItemLayout}
      form={form}
      name='register'
      onFinish={onFinish}
      style={{ width: 350 }}
      scrollToFirstError>
      <AddEmail />
      <AddPassword />
      <Submit noBack />
    </Form>
  )
}

export default LoginForm
