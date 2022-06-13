import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { Background } from './components/Background';
import FullScreenDialog from './components/FullScreenDialog';
import {BgSound} from './components/BgSound'
import { BgVideo } from './components/BgVideo';
import PlayVideo from './components/PlayVideo';
import bg_img from './bg_bday.jpg'

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

const styleImg = {
  backgroundImage:bg_img,
  backgroundRepeat:'no-repeat'
}
root.render(
  <React.StrictMode>
    <div style={{backgroundImage: `url(${bg_img})`,backgroundRepeat:'no-repeat', width:'100%'}}>
    <FullScreenDialog/>
    {/* <Background/> */}
    <PlayVideo/>
    {/* <BgVideo/> */}
    <BgSound/>
    </div>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
