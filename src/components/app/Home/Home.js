import React from 'react';
import { Divider } from 'antd';
import { Layout } from 'antd';
import { DatePicker } from 'antd';
import { Button } from 'antd';
import { SearchOutlined } from '@ant-design/icons';
import { Input, Space } from 'antd';
const { Search } = Input;

export default function Home() {
    return (
    <>
    <div className="content">
      <Layout>
        <Space className="space_main">
          <Layout direction="vertical">
            <Divider orientation="left">From:</Divider>
            <Space>
              <Search size="large" placeholder="From" onSearch={onSearch} style={{ width: 200 }} />
              <DatePicker size="large" onChange={onChange} />
            </Space>
          </Layout>
          <Layout direction="vertical">
            <Divider orientation="left">To:</Divider>
            <Space>
              <Search size="large" placeholder="To" onSearch={onSearch} style={{ width: 200 }} />
              <DatePicker size="large" onChange={onChange} />
              <Button  size="large" type="primary" icon={<SearchOutlined />} success>
                Search
              </Button>
            </Space>
          </Layout>        
        </Space>      
      </Layout>      
    </div>
    </>);
  }

  const onSearch = value => console.log(value);

  function onChange(date, dateString) {
    console.log(date, dateString);
  }