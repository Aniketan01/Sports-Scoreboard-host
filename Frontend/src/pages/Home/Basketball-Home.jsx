import React from 'react'

const Lakers="https://media-hosting.imagekit.io//5778f24594654656/Lakers.png?Expires=1835850545&Key-Pair-Id=K2ZIVPTIP2VGHC&Signature=yH-t3xwiDoeEDi2de5NazjNDIEDJUf5-b8oDdezu5NhnzidTa-wrm~-oW61zTiLChtjv3OCqH80becikVah4wtahFOceUKX-mgoRfnGyiHKOdC5dRZRafS7vK4sQg-ExTkf-Mn0sDuov1DvEDJ69nViO8T9JEgqw7Ftb4gOXnLxLub895UUzlhh6amVpGyDtWNF6abJ6LxddVqPNCqcKzBya1vTiOjZrGbYmaK4R3R~SY68oCvJCDTsSu094Xj3zuJZKIYAmJZ4MKop~XhPKDhKHcfpRcXjOg0n-e4U3chAjjTpU7c53UwXP34oEakrwAOvfDkk~ruYmU0EYz~7hdw__"
const Clippers="https://media-hosting.imagekit.io//5778f24594654656/Lakers.png?Expires=1835850545&Key-Pair-Id=K2ZIVPTIP2VGHC&Signature=yH-t3xwiDoeEDi2de5NazjNDIEDJUf5-b8oDdezu5NhnzidTa-wrm~-oW61zTiLChtjv3OCqH80becikVah4wtahFOceUKX-mgoRfnGyiHKOdC5dRZRafS7vK4sQg-ExTkf-Mn0sDuov1DvEDJ69nViO8T9JEgqw7Ftb4gOXnLxLub895UUzlhh6amVpGyDtWNF6abJ6LxddVqPNCqcKzBya1vTiOjZrGbYmaK4R3R~SY68oCvJCDTsSu094Xj3zuJZKIYAmJZ4MKop~XhPKDhKHcfpRcXjOg0n-e4U3chAjjTpU7c53UwXP34oEakrwAOvfDkk~ruYmU0EYz~7hdw__"
const Bulls="https://media-hosting.imagekit.io//cc17c011907f4a29/Bulls.png?Expires=1835850545&Key-Pair-Id=K2ZIVPTIP2VGHC&Signature=rhm1OaKMvPUeW8EMYauHcIgnbIp9bNp3f0ln6F4U4UL6JHpvuWtqbeZAhf84ou06jVwfqW9crjiACBgr33sOxYjTQBAgerRBIWPeUh0K6SxJ-goz0iA0dX~RPddRYbNiHQx95nZvFR4ZBsbV2vr-N46a6Y6aAGGD2TbPT4OPZayWB4WHCjXMJN73asK~WAzbtn2u3Hy8PtcBoC2ypmXqquI1wT6SDyO66URkksiBIOXaSkpLr18jbWo1zcsnjhHFAVq0HGa08O2c~50E4L-34p2XUUfFSwOOpQMLRJsE0Dqqm7YQiboOWm3GNrhyl8wvDAogNLXVhWw4lVS5gzdNHQ__"


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

