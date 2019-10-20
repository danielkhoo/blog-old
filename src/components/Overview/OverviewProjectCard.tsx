import React from 'react';
import calendarSVG from '../../images/calendar.svg';
import bookSVG from '../../images/book.svg';
import Icon from '../Icon';
export interface IProps {
  title: string;
  href: string;
  description: string;
  dotColor: string;
  tags: string[];
  year?: string;
  shield?: string;
}

const OverviewProjectCard: React.SFC<IProps> = (props: IProps) => (
  <div className='overview-project-card'>
    <a className='overview-project-card-title' href={props.href}>
      {props.title}
    </a>
    <div className='overview-project-card-shields'>
      {props.shield && <img src={props.shield} />}
    </div>
    <p>{props.description}</p>

    <div className='overview-project-card-content'>
      <div className='tags'>
        <span className="language-color tag-icon" style={{ backgroundColor: props.dotColor }}></span>
        <span>{props.tags[0]}</span>

      </div>

      <div className='tags'>
        <span className='tag-icon'>
          <Icon width={12} height={16} SVG={bookSVG} />
        </span>
        <span>{props.tags[1]}</span>
      </div>


      <div className='tags'>
        <span className='tag-icon'>
          <Icon width={14} height={16} SVG={calendarSVG} />
        </span>
        <span>{props.year}</span>
      </div>

    </div>
  </div>
);

export default OverviewProjectCard;
