import React from 'react'
import logo from './bubble-min.png'

interface CompProps {
  width?: number
}

const Bubble: React.FC<CompProps> = ({ width = 150 }) => (
  <img src={logo} width={width} style={{ margin: 45 }} alt='Bubble branding graphics' />
)

export default Bubble
