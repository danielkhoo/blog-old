import { useState, useEffect } from "react"
import * as React from 'react'
import { Link } from "gatsby"
import "./layout.scss"
enum ActiveTab {
  Blog = 'blog',
  Projects = 'projects',
  About = 'about'
}

const Layout = (props: React.Props<{}>): JSX.Element => {
  const [activeTab, setTab] = useState(ActiveTab.Blog)


  useEffect(() => {
    if (window.location.pathname.includes(ActiveTab.Projects)) setTab(ActiveTab.Projects)
    if (window.location.pathname.includes(ActiveTab.About)) setTab(ActiveTab.About)
  }, []);
  return (
    <>
      <header>
        <div className='header-content'>
          <nav>
            <Link to='/'><div className={`navitem ${activeTab == ActiveTab.Blog ? 'active' : ''}`}>Blog</div></Link>
            <Link to='/projects'><div className={`navitem ${activeTab == ActiveTab.Projects ? 'active' : ''}`}>Projects</div></Link>
            <Link to='/about'><div className={`navitem ${activeTab == ActiveTab.About ? 'active' : ''}`}>About</div></Link>
          </nav>
        </div>
      </header>
      <div className="container">
        <div className="main-wrapper">
          {props.children}
        </div>
      </div>
    </>
  )
}

export default Layout
