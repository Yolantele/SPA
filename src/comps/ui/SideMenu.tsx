import React, { useState } from 'react'
import { Layout, Menu } from 'antd'
import { UserOutlined, HomeOutlined } from '@ant-design/icons'
import { Bubble } from '../../images'
import { style as s } from './style'
const { Sider } = Layout
const { Item } = Menu

const MENU_ITEMS = [
  { label: 'Your Bubble', icon: <HomeOutlined />, k: 1 },
  { label: 'Find Local Sitters', icon: <UserOutlined />, k: 2 }
]

interface CompProps {
  setActiveTab: (k: number) => void
}

const SideMenu: React.FC<CompProps> = ({ setActiveTab }) => {
  const [collapsed, setCollapsed] = useState(false)
  return (
    <Sider width={300} style={s.sider} collapsible onCollapse={() => setCollapsed(!collapsed)}>
      {!collapsed && <Bubble />}
      <Menu mode='inline' defaultSelectedKeys={['1']} defaultOpenKeys={['sub1']} style={s.menu}>
        {MENU_ITEMS.map(({ label, icon, k }) => (
          <Item key={k} icon={icon} onClick={() => setActiveTab(k)}>
            {label}
          </Item>
        ))}
      </Menu>
    </Sider>
  )
}

export default SideMenu
