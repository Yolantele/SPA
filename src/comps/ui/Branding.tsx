import React from 'react'
import { Layout, Button } from 'antd'
import SideMenu from './SideMenu'
import { Logo } from '../../images'
import { style as s } from './style'
const { Header, Footer, Content } = Layout

interface CompProps {
  auth: any
  children: any
  setActiveTab: (k: number) => void
  logout: () => void
}

const Branding: React.FC<CompProps> = ({ children, auth, setActiveTab, logout }) => {
  const Links = () => (
    <section style={s.header}>
      <Logo />
      {auth.token && (
        <Button type={'link'} style={{ color: 'white' }} onClick={() => logout()}>
          Log Out
        </Button>
      )}
    </section>
  )

  return (
    <Layout>
      <Header>
        <Links />
      </Header>
      <Layout>
        {auth.token && <SideMenu {...{ setActiveTab }} />}
        <Content style={{ minHeight: '100vh' }}>{children}</Content>
      </Layout>
      <Footer style={{ height: 200 }} />
    </Layout>
  )
}

export default Branding
