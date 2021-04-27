import React, { useEffect, useRef } from 'react';

import './Landing.scss'
import { useHistory } from "react-router-dom";
import axios from 'axios';
import FrostedGlassBackdrop from '../../components/frostedGlass/FrostedGlassBackdrop';
import concertsData from '../../music-events.json';

import {JSO, Popup} from 'jso-2';

export default function Landing(props) {
  let axiosProvider;
  const history = useHistory();
  let authToken = useRef();
  function createAxiosProvider(token){
    return axios.create ({
      baseURL : 'https://api.spotify.com/v1/',
      headers: {'Accept': 'application/json',
                'Authorization':'Bearer '+ token}
    })
  }



  function openConcertsPage(){
    history.push('/concerts',{artistdata:concertsData,token:authToken.current?.access_token})
  }

  function logintoSpotify(){
    let client = new JSO({
      client_id: "1956304451ee4685a09898316d9eaffb",
      redirect_uri: "http://localhost:3000",
      authorization: "https://accounts.spotify.com/authorize",
      scopes: "streaming user-read-email user-read-private user-read-playback-state user-modify-playback-state",
      response_type: "token"
    });
    client.callback();
    client.getToken()
    .then((token) => {
    	console.log("I got the token: ", token);
      authToken.current=token;
      axiosProvider = createAxiosProvider(token.access_token);
      fetchArtistData();
    })
  }

  function fetchArtistData(){
    concertsData.map((concert)=>{
      axiosProvider.get('https://api.spotify.com/v1/search?q='+encodeURIComponent(concert.ARTIST)+'&type=artist').then((resp)=>{
        concert['spotifyID']=resp.data.artists.items.length>0 && resp.data.artists.items[0].id;
        concert['artistCoverImg']=resp.data.artists.items.length>0 && 
        resp.data.artists.items[0].images.length>0 && 
        resp.data.artists.items[0].images[0].url;
        return concert;
      })
    })
    console.log(concertsData);
  }

  useEffect(() => {
    logintoSpotify();
  },[]);


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