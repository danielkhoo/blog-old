import React from 'react';
import githubSVG from '../../images/github.svg';
import linkedinSvg from '../../images/linkedin.svg';
import Icon from '../Icon';
import './Profile.scss';

const Profile: React.SFC = (): JSX.Element => (
  <div className='profile'>
    <div className='side-card'>
      <img
        width='220'
        height='220'
        className='profile-pic'
        src='https://github.com/danielkhoo.png'
        alt=''
      />
      <div>
        <h1>Daniel Khoo</h1>
        <h2>Software Engineer</h2>
      </div>
      <p>A blog, portfolio and digital garage for all my work, side-projects, procrastinations from work.</p>
      <i>"The most creative work is done while avoiding other work" <br />- Some guy on twitter</i>

    </div>
    <div className='side-card'>
      <ul className='social_icons'>
        <li>
          <a title='linkedin' href='https://www.linkedin.com/in/danieljkhoo/'>
            <Icon width={50} height={50} SVG={linkedinSvg} />
          </a>
        </li>
        <li>
          <a title='github' href='https://github.com/danielkhoo'>
            <Icon width={50} height={50} SVG={githubSVG} />
          </a>
        </li>
      </ul>
    </div>
  </div>
);

export default Profile;
