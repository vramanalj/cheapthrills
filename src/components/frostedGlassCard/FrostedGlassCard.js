import React from 'react';
import './FrostedGlassCard.scss';

export default function FrostedGlassCard(props) {
    return(
      <div className="glassCard">
        {props.children}
      </div>
    );
  }