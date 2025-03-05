import React from 'react'
import Reds from "../../assets/images/Baseball/Reds.png"
import Nationals from "../../assets/images/Baseball/Nationals.png"
import Rockies from "../../assets/images/Baseball/Rockies.png"
import Cardinals from "../../assets/images/Baseball/Cardinals.png"
export default function Baseball() {
  return (
    <div>
      <h5>Baseball</h5>
                        &nbsp;
                        <div className="d-flex justify-content-between align-items-center">
                            <div className='col-lg-4 text-start'><span><img src={Rockies} alt="" />Colorado Rockies</span></div>
                            <div className='col-lg-4 text-center'><strong>9&nbsp;-&nbsp;5</strong></div>
                            <div className='col-lg-4 text-end'><span>Cincinnati Reds <img src={Reds} alt="" /></span></div>
                        </div>

                        <div className="d-flex justify-content-between align-items-center">
                            <div className='col-lg-4 text-start'><span><img src={Nationals} alt="" />Washington Nationals</span></div>
                            <div className='col-lg-4 text-center'><strong>4&nbsp;-&nbsp;6</strong></div>
                            <div className='col-lg-4 text-end'><span>St. Louis Cardinals <img src={Cardinals} alt="" /></span></div>
                        </div>
    </div>
  )
}

