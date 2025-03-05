import React from 'react'
import Lakers from '../../assets/images/Basketball/Lakers.png'
import Clippers from '../../assets/images/Basketball/Clippers.png'
import Bulls from "../../assets/images/Basketball/Bulls.png"

export default function Basketball() {
  return (
    <div>
      <h5>Basketball</h5>
                            <br />
                            <div className="d-flex justify-content-between align-items-center">
                                <div className='col-lg-4 text-start'><span><img src={Lakers} alt="" /> Lakers</span></div>
                                <div className='col-lg-4 text-center'><strong>108&nbsp;-&nbsp;102</strong></div>
                                <div className='col-lg-4 text-end'><span>Clipers <img src={Clippers} alt="" /></span></div>
                            </div>
     
                            <div className="d-flex justify-content-between align-items-center">
                                <div className='col-lg-4 text-start'><span> <img src={Clippers} alt="" /> Clipers </span></div>
                                <div className='col-lg-4 text-center'><strong>117&nbsp;-&nbsp;122</strong></div>
                                <div className='col-lg-4 text-end'><span> Bulls <img src={Bulls} alt="" /> </span></div>
                            </div>
    </div>
  )
}

