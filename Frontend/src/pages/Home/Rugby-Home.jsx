import React from 'react'
const Vikings="https://media-hosting.imagekit.io//7245d5adf02245e6/Vikings.png?Expires=1835850555&Key-Pair-Id=K2ZIVPTIP2VGHC&Signature=FRkHlI07pou3ChYpio17lae5Wul7pfn2jR3aZPaSaG2dtkHCBtBaEVpC-clcA8xOgPTWJgqNH9UQtNu0TREs4ibLlPJ4zV44QjJxEfNV-v8Ou3vmpwawlEtUasHLlVyMYtZPEOPu2eNe8jsoBMS7JCL1JjB8Vp6qJSs6GwnX1JnaA7WNhkcX5Mj443bQx9sBulZ7HKOCsiRXF2lMp-vPthhAAkABSHEO8FEBuWbcaSqdC2sH81WFmCDC~cZ-pAcdMeRGqsmTkC0A5RaxZ61IQKTiZMcBZB302QBs~12-O9KMsRdjNEXO6BPCQzp5yJcymCEbIuLtm85~559O6tfW9w__"
const Eagles="https://media-hosting.imagekit.io//3a01e1a9fe5d4c51/Eagles.png?Expires=1835850555&Key-Pair-Id=K2ZIVPTIP2VGHC&Signature=I94nPijJTfkG6ltIA0rjc~esSVXeSgvKftNcSStgcQo5aJ3fMr7DSNeEyJeEO-dF8BjD7miTlp4JtzC2lrEts-nQY0WzbjjMK9Mn9HYRVb58o2yvWo9P6f0khxogWORREjxv6AzlgdNVNV1p7icHlda27HMfQxwg1MfheRn-CwK150VBCMwSIRPAuA8QOlgDdd~0RuI8BLmMyL1G13SAwLoPePUuiluDBzTA4YLTMNjF~~tVYyefVOMoj2FF6ACBAbL~mGdPp4tn4iFVfdce8o6YH5w0OVLPuJbNa49cmxKibDD8vaGxkgs4WaVsV5lgkSfuVA~dm~FutCFaWhM~YQ__"
const Packers="https://media-hosting.imagekit.io//de9408a8025b44ae/Packers.png?Expires=1835850555&Key-Pair-Id=K2ZIVPTIP2VGHC&Signature=p~f8ObktxVj24fU1J9eKYJFOYDDbxOJ1znLQbWyr-XNc-xMJPlWAYuQIDkXvh8mUcIzw8mvU631gmMn4~NlMS5NIFnSdh0R8TcCplNOUKIFyELPZAUAYv6aoYy7LbiXXOFlS049ujndQRuXiyOe9f2EbZX3qTkcKRo3icy21Zmq4FQ5oCt8Hy76PwxhYLkLEc9doWtjqqsdnkh8M1IvBS1wCveYYXC37vPQIrwp304phI8VP9eLv3ZPjdTDX1y9xLRALiYe2RYn4sr1tCjDUWAKL5aH6dNCl4YkhULfYE8~wzdcCfbofGQm~-iKNqmXf9LKKLdb6OpTqIkN7YMqWwQ__"
const Rams="https://media-hosting.imagekit.io//eb0d04dc3a004a95/Rams.png?Expires=1835850555&Key-Pair-Id=K2ZIVPTIP2VGHC&Signature=ngz24sw1dCrxI9lp19~j2NTcLU1CAy~9OawIoDBg4GoE1~MB-nXtAjsHMqo~q3OeZBobF-IYrVgS8txHgXxnq4x64De8Dm~qZeBNlqGTwXNHWiBRANCKybn45oHLxsurww034cpVFmjYkWcNLEiNclitLoJ~HHBwwzgWyqeyElsUlOtaMRoLGz9sZ8InwCSeEk0bnODYNILCP~CuKU3lxe5J01lnDrZDjLTBHzFHCxUyS91PTHUKJbctAUN0wPi4WpMbMjq5UY5S4jS2lpDax~iIRK64krx1Yu3ERuwSwGhynpQOntVgcLNl16y0F~JmZ3J8DbVt2i8GLUQVdBl8Hw__"

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

