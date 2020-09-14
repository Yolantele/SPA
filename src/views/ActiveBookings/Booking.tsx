import React, { useState } from 'react'
import { Card, Avatar, Typography, Tag, Divider, Tooltip } from 'antd'
import moment from 'moment'
import { ClockCircleOutlined, FieldTimeOutlined } from '@ant-design/icons'
import { BookingTypes } from '../types'
import { EditOutlined, EyeOutlined } from '@ant-design/icons'
import { primary } from '../../const'
import { style as s } from './style'

interface CompProps {
  booking: BookingTypes
  showOld: boolean
}

const { Text } = Typography
const DATE_FORMAT = 'LL'

// @ts-ignore
const Booking: React.FC<CompProps> = ({ booking, showOld }) => {
  const [expand, setExpand] = useState(false)
  const { scheduledStart, scheduledDuration, imageUrl, otherUserFullName } = booking || {}

  const isPassed = moment(scheduledStart) <= moment()
  const show = !isPassed || (isPassed && showOld)
  const cardStyle = {
    minWidth: 300,
    maxWidth: expand ? '100%' : 600,
    margin: '20px 0px',
    backgroundColor: isPassed ? 'lightgray' : 'white'
  }

  const BookingDetails = () => (
    <section style={s.more}>
      <Divider />
      <Text>Fetch Booking ID data and display here...</Text>
    </section>
  )

  const AVAILABLE_ACTIONS = isPassed
    ? []
    : [
        <Tooltip placement='top' title={'Make changes to booking'} mouseEnterDelay={0.5}>
          <EditOutlined key='edit' role='button' />
        </Tooltip>,
        <Tooltip placement='top' title={'See more details on booking'} mouseEnterDelay={0.5}>
          <EyeOutlined key='seeMore' onClick={() => setExpand(!expand)} role='button' />
        </Tooltip>
      ]

  return (
    show && (
      <Card hoverable={!isPassed} style={cardStyle} actions={AVAILABLE_ACTIONS}>
        <Avatar src={imageUrl} alt={`${otherUserFullName} photo`} style={{ margin: 7 }} />
        <Text> With </Text>
        <Text strong>{otherUserFullName} </Text>

        <Divider />

        <Text strong>{`Booking: `}</Text>
        <Tag icon={<ClockCircleOutlined />} color='default' style={{ margin: 5 }}>
          {`${moment(scheduledStart).format(DATE_FORMAT)} `}
        </Tag>
        <Tag icon={<FieldTimeOutlined />} color={primary} style={{ margin: 5 }}>
          {`for ${scheduledDuration} h `}
        </Tag>
        {expand && <BookingDetails />}
      </Card>
    )
  )
}

export default Booking
