import React, { useState } from 'react';
import {
  Form,
  Input,
  Button,
  Radio,
  Select,
  // Cascader,
  DatePicker,
  InputNumber,
  // TreeSelect,
  Switch,
} from 'antd';

export default function Dashboard (props) {
  const [componentSize, setComponentSize] = useState('default');

  const onFormLayoutChange = ({ size }) => {
    setComponentSize(size);
  };

  return (
    <div style={{paddingTop: "1rem"}}>
      <Form
        labelCol={{
          span: 4,
        }}
        wrapperCol={{
          span: 14,
        }}
        layout="horizontal"
        initialValues={{
          size: componentSize,
        }}
        onValuesChange={onFormLayoutChange}
        size={componentSize}
      >
        <Form.Item label="Form Size" name="size">
          <Radio.Group>
            <Radio.Button value="small">Update</Radio.Button>
            <Radio.Button value="default">New</Radio.Button>
            <Radio.Button value="large">Delete</Radio.Button>
          </Radio.Group>
        </Form.Item>
        <Form.Item label="Shelter information">
          <Input />
        </Form.Item>
        <Form.Item label="Address">
          <Input />
        </Form.Item>
        <Form.Item label="Select">
          <Select>
            <Select.Option value="demo"> </Select.Option>
          </Select>
        </Form.Item>
        {/* <Form.Item label="TreeSelect">
          <TreeSelect
            treeData={[
              {
                title: 'Light',
                value: 'light',
                children: [
                  {
                    title: 'Bamboo',
                    value: 'bamboo',
                  },
                ],
              },
            ]}
          />
        </Form.Item> */}
        {/* <Form.Item label="Cascader">
          <Cascader
            options={[
              {
                value: 'zhejiang',
                label: 'Zhejiang',
                children: [
                  {
                    value: 'hangzhou',
                    label: 'Hangzhou',
                  },
                ],
              },
            ]}
          />
        </Form.Item> */}
        <Form.Item label="DatePicker">
          <DatePicker />
        </Form.Item>
        <Form.Item label="Capacity">
          <InputNumber />
        </Form.Item>
        <Form.Item label="Opened?">
          <Switch />
        </Form.Item>
        <Form.Item label="       ">
          <Button>Submit</Button>
        </Form.Item>
      </Form>
    </div>
  );
};
