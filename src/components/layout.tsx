import { useState, useEffect } from "react"
import * as React from 'react'
import { Link } from "gatsby"
import "./layout.scss"
import Profile from "./Profile/Profile"
enum ActiveTab {
  Blog = 'blog',
  Projects = 'projects'
}

export interface IProps extends React.Props<{}> {
  showSideBar: boolean;
}

const Layout = (props: IProps): JSX.Element => {
  const [activeTab, setTab] = useState(ActiveTab.Blog)


  useEffect(() => {
    if (window.location.pathname.includes(ActiveTab.Projects)) {
      setTab(ActiveTab.Projects)
    }
  }, []);
  return (
    <>
      <header>
        <div className='header-content'>
          <nav>
            <Link to='/'><div className={`navitem ${activeTab == ActiveTab.Blog ? 'active' : ''}`}>Blog</div></Link>
            <Link to='/projects'><div className={`navitem ${activeTab == ActiveTab.Projects ? 'active' : ''}`}>Projects</div></Link>
          </nav>
        </div>
      </header>
      <div className="container">
        {props.showSideBar && <div className="sidebar-wrapper">
          <Profile />
        </div>}
        <div className="main-wrapper">
          {props.children}
        </div>
      </div>
    </>
  )
}

export default Layout
