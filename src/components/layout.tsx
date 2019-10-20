import { useState, useEffect } from "react"
import * as React from 'react'
import { Link } from "gatsby"
import "./layout.scss"
import './Overview/Overview.scss';
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
          {/* <Link to='/'><div className='logo'>danielkhoo.github.io</div></Link> */}
          <nav>
            <Link to='/'><div className={`navitem ${activeTab === ActiveTab.Blog ? 'active' : ''}`}>Blog</div></Link>
            <Link to='/projects'><div className={`navitem ${activeTab === ActiveTab.Projects ? 'active' : ''}`}>Projects</div></Link>
          </nav>
        </div>
      </header>
      <div className="container">
        {props.showSideBar && <div className="sidebar-wrapper">
          <Profile />
        </div>}
        <div className="main-wrapper">
          {/* <div className='tab-bar'>
            <Link to='/'><button className={activeTab === ActiveTab.Blog ? 'active' : ''}> Blog</button></Link>
            <Link to='/projects'><button className={activeTab === ActiveTab.Projects ? 'active' : ''}> Projects</button></Link>
          </div> */}
          {props.children}
        </div>
      </div>
    </>
  )
}

export default Layout
