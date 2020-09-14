import * as React from 'react'
import Adapter from 'enzyme-adapter-react-16'
import { shallow, configure } from 'enzyme'
import { Login, YourBubble, FindSitters } from './views'

import App from './App'

configure({ adapter: new Adapter() })

describe('App ', () => {
  it('renders without crashing', () => {
    shallow(<App />)
  })
})
