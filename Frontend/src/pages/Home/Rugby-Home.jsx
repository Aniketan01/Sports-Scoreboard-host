import React from 'react'
import Eagles from '../../assets/images/rugby/Eagles.png'
import Packers from '../../assets/images/rugby/Packers.png'
import Rams from '../../assets/images/rugby/Rams.png'
import Vikings from '../../assets/images/rugby/Vikings.png'

export default function Rugby() {
  return (
    <div>
      <h5>Rugby</h5>
        <br />
        <div className="d-flex justify-content-between align-items-center">
            <div className='col-lg-4 text-start'><span><img src={Eagles} alt="" /> Philadelphia Eagles </span></div>
            <div className='col-lg-4 text-center'><strong>22&nbsp;-&nbsp;10</strong></div>
            <div className='col-lg-4 text-end'><span>Green Bay Packers <img src={Packers} alt="" /></span></div>
        </div>

        <div className="d-flex justify-content-between align-items-center">
            <div className='col-lg-4 text-start'><span><img src={Rams} alt="" /> Los Angeles Rams </span></div>
            <div className='col-lg-4 text-center'><strong>28&nbsp;-&nbsp;22</strong></div>
            <div className='col-lg-4 text-end'><span>Minnesota Vikings <img src={Vikings} alt="" /></span></div>
        </div>
    </div>
  )
}

