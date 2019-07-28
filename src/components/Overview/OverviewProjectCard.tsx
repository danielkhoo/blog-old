import React from 'react';

export interface IProps {
  title: string;
  href: string;
  description: string;
  tags: string[];
  year?: string;
}

const OverviewProjectCard: React.SFC<IProps> = (props: IProps) => (
  <div className='overview-project-card'>
    <a className='overview-project-card-title' href={props.href}>
      {props.title}
    </a>
    <p>{props.description}</p>
    <div>
      {props.tags.map((tag, index) => {
        return <span key={index}>{tag}</span>
      })}

      <span>{props.year}</span>
    </div>
  </div>
);

export default OverviewProjectCard;
