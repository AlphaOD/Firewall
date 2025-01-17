import React from 'react';
import { Divider } from 'antd';
import "./style/popup.css";
import {
  HomeOutlined,
} from '@ant-design/icons';
import icon from '../../static/img/firewallLogo.svg';


export default function PopupPanel(props) {
  // Screen for map interaction
    
    if(props.type){
      return (
        <div className="popup-panel fire">
          <Divider className="popup-title" orientation="left"><img style={{ width: "3rem"}} src={icon} alt="FireLogo" />Fire information</Divider>
      {/* <List
        header={<div className="popup-info">County Name</div>}
        footer={<div className="popup-info">State Name</div>}
        bordered
        dataSource={popupInfo.props.info}
        renderItem={item => (
          <List.Item className="popup-list">
            <Typography.Text  className="popup-span" mark>[Info]</Typography.Text> 
            <p>{item.name}</p>
          </List.Item>
        )}
      /> */}
      <section>
          <h1>County Name</h1>
          <div className="tbl-header">
            <table cellPadding="0" cellSpacing="0" border="0">
              <thead>
                <tr>
                  <th>[Info]</th>
                  <th>Data</th>
                </tr>
              </thead>
            </table>
          </div>
          <div className="tbl-content">
            <table cellPadding="0" cellSpacing="0" border="0">
              <tbody>
                <tr>
                  <td>aquired date</td>
                  <td>{props.info.properties.acq_date}</td>
                </tr>
                <tr>
                  <td>Brightness</td>
                  <td>{props.info.properties.bright_ti4}</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>
      </div>
      );
    }else{
      return (
        <div className="popup-panel shelter">
          <Divider className="popup-title" orientation="left"><HomeOutlined />Shelter information</Divider>
          <section>
          <h1>{props.info.COUNTY_PARISH}</h1>
          <div className="tbl-header">
            <table cellPadding="0" cellSpacing="0" border="0">
              <thead>
                <tr>
                  <th>[Info]</th>
                  <th>Data</th>
                </tr>
              </thead>
            </table>
          </div>
          <div className="tbl-content">
            <table cellPadding="0" cellSpacing="0" border="0">
              <tbody>
                <tr>
                  <td>City</td>
                  <td>{props.info.CITY}</td>
                </tr>
                <tr>
                  <td>Name</td>
                  <td>{props.info.SHELTER_NAME}</td>
                </tr>
                <tr>
                  <td>Capacity</td>
                  <td>{(props.info.EVACUATION_CAPACITY > 0)? props.info.EVACUATION_CAPACITY:'Not Given' }</td>
                </tr>
                <tr>
                  <td>Adress</td>
                  <td>{props.info.ADDRESS_1 + ", " + props.info.CITY + ", " + props.info.STATE + ", " + props.info.ZIP}</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

      </div>
      );
    }
    
}