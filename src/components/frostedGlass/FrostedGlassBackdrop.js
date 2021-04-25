import React from 'react';
import './FrostedGlassBackdrop.scss';

export default function FrostedGlassBackdrop(props) {
    return(
      <div className="glassWindow">
          {props.children}
      </div>
    );
  }