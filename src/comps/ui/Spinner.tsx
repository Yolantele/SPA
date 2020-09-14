import React from 'react'
import { Spin } from 'antd'
import { style as s } from './style'

const Spinner = () => (
  <section style={s.spinner}>
    <Spin tip='Loading...' />
  </section>
)

export default Spinner
