import * as React from 'react'
import Adapter from 'enzyme-adapter-react-16'
import { shallow, configure } from 'enzyme'
import ActiveBookings from './ActiveBookings'

configure({ adapter: new Adapter() })

describe('ActiveBookings Component', () => {
  it('renders without crashing', () => {
    shallow(<ActiveBookings />)
  })
})
