import React from 'react';
import { 
  Divider, 
  Layout,
  DatePicker,
  Button,
  Input,
  Space } from 'antd';
import { SearchOutlined } from '@ant-design/icons';
import "./Home.css";

const onSearch = value => console.log(value);

export default function Home() {
    return (
    <>
      <div className="search-container">
        <Space className="search-space">
          <Layout direction="vertical">
            <Divider orientation="left">From:</Divider>
            <Space>
              <Input.Search size="large" placeholder="From" onSearch={onSearch} style={{ width: 200 }} />
              <DatePicker size="large" onChange={onChange} />
            </Space>
          </Layout>
          <Layout direction="vertical">
            <Divider orientation="left">To:</Divider>
            <Space>
              <Input.Search size="large" placeholder="To" onSearch={onSearch} style={{ width: 200 }} />
              <DatePicker size="large" onChange={onChange} />
              <Button  size="large" type="primary" icon={<SearchOutlined />}>
                Search
              </Button>
            </Space>
          </Layout>        
        </Space>      
      </div>
    </>);
  }

  function onChange(date, dateString) {
    console.log(date, dateString);
  }