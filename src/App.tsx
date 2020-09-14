import React, { useState } from 'react'
import { Branding } from './comps/ui'
import { Login, YourBubble, FindSitters } from './views'
import './App.less'
import { useData } from './hooks'

const App = () => {
  const [auth, setAuth] = useState({ token: null })
  const [{ user, sitters, bookings }] = useData(auth.token)
  const [activeTab, setActiveTab] = useState(1)

  const logout = () => {
    setAuth({ token: null })
  }
  return (
    <Branding {...{ auth, setActiveTab, logout }}>
      {!auth.token && <Login {...{ setAuth }} />}
      {auth.token && (
        <>
          {activeTab === 1 && <YourBubble {...{ user, bookings }} />}
          {activeTab === 2 && <FindSitters {...{ sitters }} />}
        </>
      )}
    </Branding>
  )
}

export default App
