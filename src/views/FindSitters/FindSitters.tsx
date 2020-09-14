import React from 'react'
import { Typography } from 'antd'

interface CompProps {
  sitters: any
}

const { Title } = Typography

const YourBubble: React.FC<CompProps> = ({ sitters }) => {
  return (
    <Title level={3} style={{ margin: 50 }}>
      Find Sitters View
    </Title>
  )
}

export default YourBubble
