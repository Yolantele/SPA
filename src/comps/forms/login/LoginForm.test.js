import * as React from 'react'
import Adapter from 'enzyme-adapter-react-16'
import { shallow, configure } from 'enzyme'
import LoginForm from './LoginForm.tsx'
import Submit from '../../ui/Submit.tsx'
import AddEmail from './AddEmail.tsx'
import AddPassword from './AddPassword.tsx'

configure({ adapter: new Adapter() })

describe('LoginForm Component', () => {
  it('renders without crashing', () => {
    shallow(<LoginForm />)
  })

  it('contains appropriate form fields to add email and passowrd', () => {
    const wrapper = shallow(<LoginForm />)
    expect(wrapper.containsMatchingElement(<AddEmail />)).toEqual(true)
    expect(wrapper.containsMatchingElement(<AddPassword />)).toEqual(true)
  })

  it('contains the appropriate child components Submit', () => {
    const wrapper = shallow(<LoginForm />)
    expect(wrapper.containsMatchingElement(<Submit />)).toEqual(true)
  })
})
