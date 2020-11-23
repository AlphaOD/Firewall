import React from 'react';
import PropTypes from 'prop-types';
import QueueAnim from 'rc-queue-anim';
// import { Button } from 'antd';
// import BannerImage from '../../logo.svg';
import Canvas from '../../static/img/undraw_Relaxing_at_home_re_mror.svg';

class Banner extends React.PureComponent {
  static propTypes = {
    className: PropTypes.string,
  }
  static defaultProps = {
    className: 'home-banner',
  }
  render() {
    const { className } = this.props;
    return (
      <div className={`home-layout-wrapper ${className}`}>
        <div className="home-layout">
            {/*For Animations may change*/}
          <QueueAnim className={`${className}-content-wrapper`} delay={300} ease="easeOutQuart">
            <h1 key="h3" style={{color: 'black'}}>Connecting you with Information and Resources</h1>
            <p key="p" style={{color: 'black'}}>Up to Date Fire Map with Data by Location Your Portal to Shelter</p>
            <span key="button">
              {/* <Button
                type="primary"
                onClick={() => {
                window.location.href = '/activity/home';
              }}
              >
                CCCCCC
              </Button> */}
            </span>
          </QueueAnim>
        </div>
        <div className={`${className}-image-wrapper`}>
            {/* <BannerImage /> */}
            <img src={Canvas} alt="Firewall canvas" />

          </div>
      </div>
    );
  }
}

export default Banner;
