import * as React from 'react'

import './Icon.css'

interface IProps {
  width: number
  height: number
  SVG: any
}

const Icon: React.SFC<IProps> = (props: IProps): JSX.Element => (
  <span className={`icon icon-wrapper`}>
    <props.SVG
      style={{
        width: props.width,
        height: props.height,
      }}
    />
  </span>
)

export default Icon
