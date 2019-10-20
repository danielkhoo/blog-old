import { useState, useEffect } from "react"
import * as React from 'react'
import { Link } from "gatsby"
import "./layout.scss"
import './Overview/Overview.scss';
import Profile from "./Profile/Profile"
import { Grid, GridColumn } from 'semantic-ui-react';
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
      <div className="container">
        {props.showSideBar && <div className="sidebar-wrapper">
          <Profile />
        </div>}
        <div className="main-wrapper">
          <div className='tab-bar'>
            <Link to='/'><button className={activeTab === ActiveTab.Blog ? 'active' : ''}> Blog</button></Link>
            <Link to='/projects'><button className={activeTab === ActiveTab.Projects ? 'active' : ''}> Projects</button></Link>
          </div>
          {props.children}
        </div>
      </div>
    </>
  )
}

export default Layout
