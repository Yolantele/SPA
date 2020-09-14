import React from 'react'
import { Card, Avatar, Typography, Tag } from 'antd'
import { IUser, ActiveBookingSummary } from './types'
import { ActiveBookings } from './ActiveBookings'
import { style as s } from './style'
import { primary } from '../const'

interface CompProps {
  user: IUser
  bookings: ActiveBookingSummary
}
const { Text } = Typography

const YourBubble: React.FC<CompProps> = ({ user, bookings }) => {
  const { firstName = '', lastName = '', profileImageUrl = '', premiumUser = false } = user

  const UserInfo = () => (
    <section style={s.user}>
      <section style={s.name}>
        <Avatar
          src={profileImageUrl}
          alt={`${firstName} ${lastName} photo`}
          style={s.avatar}
          size='large'
        />
        <Text strong>{`${firstName} ${lastName} Bubble`}</Text>
      </section>
      {premiumUser && <Tag color={primary}>Premium User</Tag>}
    </section>
  )

  return (
    <Card title={<UserInfo />} bordered style={s.card}>
      <ActiveBookings {...{ bookings }} />
    </Card>
  )
}

export default YourBubble
