import React from 'react';
import { Link } from "gatsby"
import { IPost } from '../../pages';

const OverviewBlogCard: React.SFC<IPost> = (props: IPost) => (

  <div className='overview-blog-card'>
    <div className='overview-blog-card-header'>
      Posted {props.date} by <span> daniel</span>
    </div>
    <div className='overview-blog-card-content'>
      <Link to={props.path}>
        <div className='title'>
          <h3>{props.title}</h3>
        </div>
      </Link>

      <p className='description'>{props.description} </p>
      <p></p>
    </div>
  </div>
);

export default OverviewBlogCard;
