import React from 'react';
// import QueueAnim from 'rc-queue-anim';
// import OverPack from 'rc-scroll-anim/lib/ScrollOverPack';
// import { Row, Col } from 'antd';
// import { Main } from './Data';
import Map from '../map/map';

//Main Frame
export default function Main() {

  return (
    <div  >
      <h2>Map</h2>
      <i className="line" />
        <Map/>
    </div>);
}