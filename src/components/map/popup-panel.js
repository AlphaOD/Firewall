import React, {useState} from 'react';
import { List, Typography, Divider } from 'antd';
import "./style/popup.css";


export default function PopupPanel(props) {
  // Screen for map interaction
  const [popupInfo, setInfo] = useState({
      props,
      data:[
        {'name': 'Racing car sprays burning fuel into crowd.'},
        {'name': 'Japanese princess to wed commoner.'},
      ]
    });
    console.log(popupInfo);
    return (
      <div className="popup-panel">
        <Divider className="popup-title" orientation="left">Fire information</Divider>
    <List
      header={<div className="popup-info">County Name</div>}
      footer={<div className="popup-info">State Name</div>}
      bordered
      dataSource={popupInfo.data}
      renderItem={item => (
        <List.Item className="popup-list">
          <Typography.Text  className="popup-span" mark>[Info]</Typography.Text> 
          <p>{item.name}</p>
        </List.Item>
      )}
    />
    </div>
    );
}