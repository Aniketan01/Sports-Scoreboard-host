import React from 'react';
import Basketball from './Home/Basketball-Home';
import Rugby from './Home/Rugby-Home';
import Football from './Home/Football-Home';
import Cricket from './Home/Cricket-Home';
import Baseball from './Home/Baseball-Home';

export default function Home() {
  return (
    <div>
      <div className="container-fluid">
            <div className="row">
                
                <div className="col-lg-3 p-3">
                    <div className="card p-3">
                        <h4>Cricket Champions Trophy</h4>
                        <strong><p>Semi-Finals</p></strong>
                        <div className="d-flex justify-content-between align-items-center">
                            <div className='col-lg-4 text-start'><span>🇮🇳 India</span></div>
                            <div className='col-lg-4 text-center'><strong>267/6&nbsp;-&nbsp;264/10</strong></div>
                            <div className='col-lg-4 text-end'><span>Australia 🇦🇺</span></div>
                        </div>


                        <div className="d-flex justify-content-between align-items-center">
                            <div className='col-lg-4 text-start'><span>🇿🇦 South Africa</span></div>
                            <div className='col-lg-4 text-center'><strong>267/6&nbsp;-&nbsp;264/10</strong></div>
                            <div className='col-lg-4 text-end'><span>New Zealand 🇳🇿</span></div>
                        </div>
                        <br /><br /><br />&nbsp;
                        <strong><p>Finals</p></strong>

                        <div className="d-flex justify-content-between align-items-center">
                            <div className='col-lg-4 text-start'><span>🇮🇳 India</span></div>
                            <div className='col-lg-4 text-center'><strong>&nbsp;9 March&nbsp;</strong></div>
                            <div className='col-lg-4 text-end'><span>TBD</span></div>
                        </div>
                    </div>

                    <div className="card mt-3 p-3">
                        <h6>Current Leagues</h6>
                        <ul className="list-unstyled">
                            <li>🏏 Indian Premier League</li>
                            <li>⚽ Europe Premier League</li>
                            <li>🏀 National Basketball Association</li>
                            <li>⚾ Major League Baseball</li>
                            <li>🏉 National Football League</li>
                        </ul>
                    </div>
                </div>

                
                <div className="col-lg-6 p-3">
                    <div className="card text-white bg-primary p-3">
                        <strong><h5>THRILL TO WIN THE GAME 💪</h5></strong>
                        <p>Get live scores and updates instantly!</p>
                    </div>

                    <div className="card mt-3 p-3">
                        <h4>Matches</h4>
                        <br />&nbsp;
                        <Cricket/>
                        <hr />
                        <Football/>
                        <hr />
                        <Basketball/>
                        <hr />
                        <Rugby/>
                        <hr />
                        <Baseball/>

                    </div>
                </div>

                
                <div className="col-lg-3 p-3">
                    <div className="card p-3">
                        <h6>Recent News</h6>
                        <ul className="list-unstyled">
                            <li><a href="https://indianexpress.com/article/sports/football/real-madrids-benzema-named-champions-league-player-of-the-season-7946018/" target='_blank'>⚽ Benzema is the UCL Player of the Season</a></li>
                            <li><a href="https://www.espncricinfo.com/series/icc-champions-trophy-2024-25-1459031/australia-vs-india-1st-semi-final-1466426/full-scorecard" target='_blank'>🏏IND vs AUS Scorecard</a></li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </div>
  );
}
