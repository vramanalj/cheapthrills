import React from 'react';

import FrostedGlassBackdrop from '../../components/frostedGlass/FrostedGlassBackdrop';
import FrostedGlassCard from '../../components/frostedGlassCard/FrostedGlassCard';

import sampl from '../../assets/backdrop1.jpg';

import concertsData from '../../music-events.json';
import SpotifyPlayer from 'react-spotify-web-playback';

import './ConcertsBrowser.scss';

export default function ConcertsBrowser() {

  function myfunction(){
    console.log('click')
  }

  return(
    <>
    <h2 className="titleOtherPages">CHEAP THRILLS</h2>
    <FrostedGlassBackdrop>
      <div className="concertsList">
        {concertsData.map((concert,i)=>{
        return (
          <FrostedGlassCard key={`event-card-`+i}>
            <div className="eventCard">
              <div className="cardInfoSection">
                <div className="artistCover">
                  <img src={sampl}></img>
                </div>
                <div className="concertInfo">
                  <span className="artistName">{concert.ARTIST}</span>
                  <div>
                    <span className="concertTime">{concert.DATE} {concert.TIME}</span>
                    <div title="Add to Calendar" id="addeventatc" className="addeventatc calendardiv">
                      Add to Calendar
                      <span class="start">05/10/2021 08:00 AM</span>
                      <span class="end">05/10/2021 10:00 AM</span>
                      <span class="timezone">America/Los_Angeles</span>
                      <span class="title">Summary of the event</span>
                      <span class="description">Description of the event</span>
                      <span class="location">Location of the event</span>
                    </div>
                  </div>
                  <div>
                    <span className="concertTime">{concert.VENUE}</span>
                    <button className="directions"><i className="bi bi-map" onClick={myfunction}/>Directions</button>
                  </div>
                </div>
              </div>
              <div>
              {/* <SpotifyPlayer
                styles={{
                  activeColor: '#fff',
                  bgColor: 'transparent',
                  color: '#fff',
                  loaderColor: '#fff',
                  sliderColor: '#1cb954',
                  trackArtistColor: '#ccc',
                  trackNameColor: '#fff',
                }}
                token="BQAvh4GXaNzxK1e0pjRMh3TSuifa1z0qBz7R-LnSJEV6_PMKe_Tba-IRXLfdww4pwcENHJ-gX1N6aay7BYsJI6PpTW2faA3MZ31M_1ZHu4ju36ao8uwOh9U7aMBMZ3vFi-N1WpBodp6zyhK925QVbm7OhF-yMx7hkjsANLG-ZF9JK0lmNzYRoTPrIjMKsI7P"
                uris={['spotify:artist:6HQYnRM4OzToCYPpVBInuU']}
              /> */}
              </div>
            </div>
          </FrostedGlassCard>
        )
        })
        }
      </div>
    </FrostedGlassBackdrop>
    </>
  );
}