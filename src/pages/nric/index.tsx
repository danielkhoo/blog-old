import React, { useState } from 'react';
import nric from 'nric'
import './index.scss'

const HelloWorld: React.SFC<{}> = () => {
  const [NRIC, setNRIC] = useState('')
  const [valid, setValid] = useState()
  const handleInputChange = (e) => {
    setNRIC(e.currentTarget.value)
    setValid(nric.validate(e.currentTarget.value))
  }
  const generate = () => {
    const newNRIC = nric.generateNRIC()
    setNRIC(newNRIC)
    setValid(nric.validate(newNRIC))
  }
  return (

    <div className='blog-post'>

      <div className='blog-post-title'>
        <h1></h1>
        <h4></h4>
      </div>


      <div className='blog-post-content'>
        <div className='nric-wrapper'>

          <div className='nric-generator'>
            <input maxLength={9} className={`nric ${valid == false ? 'invalid' : ''}`} onChange={handleInputChange} value={NRIC}></input>

            {valid == false && <span>Invalid NRIC</span>}
            <button className='nric-button' onClick={generate}>Generate</button>
          </div>
        </div>
      </div>
    </div>
  )
};

export default HelloWorld;
