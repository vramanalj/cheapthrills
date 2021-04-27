import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';

import FrostedGlassBackdrop from '../../components/frostedGlass/FrostedGlassBackdrop';
import FrostedGlassCard from '../../components/frostedGlassCard/FrostedGlassCard';

import SpotifyPlayer from 'react-spotify-web-playback';
import artistPlaceholder from '../../assets/artistPlaceholder.jpg';
import './ConcertsBrowser.scss';

export default function ConcertsBrowser() {

  const location = useLocation();
  const [concertsData, setConcertsData] = useState(location.state.artistdata);
  const [activeArtist, setActiveArtist] = useState();
  const [token, updateToken] = useState(location.state.token);
  function openDirections(venue){
    let formattedVenue = venue.replace(/ /g, '+');
    let mapsURL='https://www.google.com/maps/dir/?api=1&destination='+formattedVenue+'+Montreal+Quebec';
    console.log(mapsURL);
    window.open(mapsURL, '_blank', 'noopener,noreferrer');
  }

  return(
    <>
    <h2 className="titleOtherPages">CHEAP THRILLS</h2>
    <FrostedGlassBackdrop>
      <div className="concertsList">
        {concertsData && concertsData.map((concert,i)=>{
        return (
          <FrostedGlassCard key={`event-card-`+i}>
            <div className="eventCard">
              <div className="cardInfoSection">
                <div className="artistCover">
                  <img src={concert.artistCoverImg===false?artistPlaceholder:concert.artistCoverImg}></img>
                </div>
                <div className="concertInfo">
                  <span className="artistName">{concert.ARTIST}</span>
                  <div>
                    <span className="concertTime">{concert.DATE} {concert.TIME}</span>
                    <div title="Add to Calendar" id="addeventatc" className="addeventatc calendardiv">
                      Add to Calendar
                      <span className="start">05/10/2021 08:00 AM</span>
                      <span className="end">05/10/2021 10:00 AM</span>
                      <span className="timezone">America/Los_Angeles</span>
                      <span className="title">Summary of the event</span>
                      <span className="description">Description of the event</span>
                      <span className="location">Location of the event</span>
                    </div>
                  </div>
                  <div onClick={()=>{openDirections(concert.VENUE)}}>
                    <span className="concertTime">{concert.VENUE}</span>
                    <button className="directions"><i className="bi bi-map"/>Directions</button>
                  </div>
                </div>
              </div>
              <div>
              {concert.spotifyID?<button className="playSampleBtn" onClick={()=>setActiveArtist(concert.spotifyID)}>
                <i className="bi bi-music-player-fill"/>Play Sample</button>
              : <div className="noSamples"><span>No Samples found!</span></div>}
              </div>
            </div>
          </FrostedGlassCard>
        )
        })
        }
        {activeArtist && 
        <div className="musicPlayer">
          <SpotifyPlayer
            styles={{
              activeColor: '#1DB954',
              bgColor: '#000000',
              color: '#1DB954',
              loaderColor: '#1DB954',
              sliderColor: '#1cb954',
              trackArtistColor: '#ccc',
              trackNameColor: '#fff',
            }}
            autoPlay={activeArtist?true:false}
            token={token}
            uris={['spotify:artist:'+activeArtist]}
          />
        </div>}
      </div>
    </FrostedGlassBackdrop>
    </>
  );
}