import React, { useState } from 'react'
import { Typography, Button, Divider } from 'antd'
import { ActiveBookingSummary, BookingTypes } from '../types'
import Booking from './Booking'
import { Bubble } from '../../images'
import { style as s } from './style'
import { Spinner } from '../../comps/ui'

interface CompProps {
  bookings: ActiveBookingSummary
}
const { Text, Title } = Typography

const ActiveBookings: React.FC<CompProps> = ({ bookings }) => {
  const [showOld, setShowOld] = useState(false)

  const Footer = () => (
    <section style={s.footer}>
      <Divider />
      <Bubble width={50} />
    </section>
  )

  return bookings && bookings.confirmedBookings ? (
    <>
      <Title level={4}>Active Bookings</Title>
      {bookings.confirmedBookings.length === 0 ? (
        <Text>No active bookings yet</Text>
      ) : (
        <>
          <Button size='small' onClick={() => setShowOld(!showOld)}>
            {`${showOld ? 'Hide' : 'Show'} Past Bookings`}
          </Button>
          {bookings.confirmedBookings.map((booking: BookingTypes, i: number) => (
            <Booking {...{ booking, showOld }} key={i} />
          ))}
        </>
      )}
      <Footer />
    </>
  ) : (
    <Spinner />
  )
}

export default ActiveBookings
