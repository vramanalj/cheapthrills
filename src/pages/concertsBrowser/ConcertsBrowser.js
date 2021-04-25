import React from 'react';

import FrostedGlassBackdrop from '../../components/frostedGlass/FrostedGlassBackdrop';
import FrostedGlassCard from '../../components/frostedGlassCard/FrostedGlassCard';

import concertsData from '../../music-events.json';

import './ConcertsBrowser.scss';

export default function ConcertsBrowser() {
  return(
    <FrostedGlassBackdrop>
      <div className="concertsList">
        {concertsData.map(concert=>{
        return (
          <FrostedGlassCard>
            <h3>{concert.ARTIST}</h3>
          </FrostedGlassCard>
        )
        })
        }
      </div>
    </FrostedGlassBackdrop>
  );
}