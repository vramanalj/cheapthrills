import React from 'react';

import FrostedGlassBackdrop from '../../components/frostedGlass/FrostedGlassBackdrop';
import FrostedGlassCard from '../../components/frostedGlassCard/FrostedGlassCard';

import sampl from '../../assets/backdrop1.jpg';

import concertsData from '../../music-events.json';

import './ConcertsBrowser.scss';

export default function ConcertsBrowser() {
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
                  <span className="concertTime">{concert.DATE} {concert.TIME}</span>
                  <span className="concertTime">{concert.VENUE}</span>
                </div>
              </div>
              <div>Spotify Player</div>
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