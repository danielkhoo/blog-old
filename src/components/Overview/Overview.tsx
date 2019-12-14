import React from 'react';

enum ActiveTab {
  About = 'About',
  Projects = 'Projects',
  Experience = 'Experience',
  Blog = 'Blog'
}

interface IState {
  active: ActiveTab;
}
class Overview extends React.Component<{}, IState> {
  public state: IState = {
    active: ActiveTab.Projects,
  };
  public render = (): JSX.Element => {
    const setTab = (tab: ActiveTab): void => {
      this.setState({ active: tab });
    };
    return (
      <>
        <div className='tab-bar'>
          <button
            onClick={() => { setTab(ActiveTab.About); }}
            className={this.state.active === ActiveTab.About ? 'active' : ''}
          >
            About
          </button>
          <button
            onClick={() => { setTab(ActiveTab.Projects); }}
            className={this.state.active === ActiveTab.Projects ? 'active' : ''}
          >
            Projects
          </button>


        </div>
        <div className='overview-projects'>
          {/* <OverviewProjectCard />
          <OverviewProjectCard />
          <OverviewProjectCard /> */}
        </div>
      </>
    );
  }
}

export default Overview;
