import React from 'react';
import './Landing.scss'
import { useHistory } from "react-router-dom";

import FrostedGlassBackdrop from '../../components/frostedGlass/FrostedGlassBackdrop';

export default function Landing(props) {
  const history = useHistory();
  function openConcertsPage(){
    history.push('/concerts')
  }

  return(
    <FrostedGlassBackdrop>
      <div className="landing-content">
        <h1 className="landingTitle">CHEAP THRILLS</h1>
        <span className="landingMessage">Find local concerts and event</span>
        <button className="landingAction" onClick={openConcertsPage}>Start Exploring</button>
      </div>
    </FrostedGlassBackdrop>
  );
}