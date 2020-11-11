import * as React from 'react';
import {PureComponent} from 'react';
import logo from '../static/img/firewall.png';

export default class ControlPanel extends PureComponent {

  render() {
    return (
      <div className="control-panel">
        <h3>Cluster Done, heat map coming</h3>
        <div className="source-link">
          <img src={logo} alt="LOGO FILE" style={{width: 170, height: 130}}/>
        </div>
      </div>
    );
  }
}