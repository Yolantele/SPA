import React, { useState } from 'react'
import { LoginForm } from '../../comps/forms'
import { style as s } from '../style'
import { Card, Alert } from 'antd'
import axios from 'axios'
import { Bubble } from '../../images'

interface CompProps {
  setAuth: (val: any) => void
}

const Login: React.FC<CompProps> = ({ setAuth }) => {
  const [err, setErr] = useState(false)

  const onFinish = (values: any) => {
    const { email = '', password = '' } = values
    axios
      .post(process.env.REACT_APP_API + '/auth/local', { email, password })
      .then(({ data }) => setAuth({ token: data.token }))
      .catch((err) => {
        console.log('err is -->', err)
        setErr(true)
      })
  }

  return (
    <div style={s.main}>
      <Bubble width={100} />
      <Card title='Sign in to Bubble' bordered={false} style={{ maxWidth: 800 }}>
        <section>
          <LoginForm {...{ onFinish, err }} />
        </section>
        {err && <Alert message='Sign in failed. Please try again' type='error' />}
      </Card>
    </div>
  )
}

export default Login
