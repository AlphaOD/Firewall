import React, {useState} from 'react';
import { List, Typography, Divider } from 'antd';


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
        <Divider orientation="left">ANT test</Divider>
    <List
      header={<div>Popup information</div>}
      footer={<div>Popup information</div>}
      bordered
      dataSource={popupInfo.data}
      renderItem={item => (
        <List.Item>
          <Typography.Text mark>[Info]</Typography.Text> {item.name}
        </List.Item>
      )}
    />
      </div>
    );
}