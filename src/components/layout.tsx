import React, { useState, useEffect } from "react"
import { Link } from "gatsby"
import "./layout.scss"
import './Overview/Overview.scss';
import Profile from "./Profile/Profile"
import { Grid, GridColumn } from 'semantic-ui-react';
enum ActiveTab {
  Blog = 'blog',
  Projects = 'projects'
}
const Layout = ({ children }) => {
  const [activeTab, setTab] = useState(ActiveTab.Blog)


  useEffect(() => {
    if (window.location.pathname.includes(ActiveTab.Projects)) {
      setTab(ActiveTab.Projects)
    }
  }, []);
  return (
    <>
      <div className="container">
        <Grid container={true} columns={16}>
          <GridColumn mobile={16} tablet={6} computer={5}>
            <div className="sidebar">
              <Profile />
            </div>
          </GridColumn>
          <GridColumn mobile={16} tablet={10} computer={11}>
            <div className='tab-bar'>
              <Link to='/'><button className={activeTab === ActiveTab.Blog ? 'active' : ''}> Blog</button></Link>
              <Link to='/projects'><button className={activeTab === ActiveTab.Projects ? 'active' : ''}> Projects</button></Link>
            </div>
            {children}
          </GridColumn>
        </Grid>
      </div>
    </>
  )
}

export default Layout
