import React from 'react';
import { Form, Input, Button, Checkbox, Divider } from 'antd';
import './Login.css';

export default function Login(){
  return (
      <>
        <div className='login-form'>
            <Form name="basic" labelCol={{span: 8,}}
                wrapperCol={{span: 8,}}
                initialValues={{
                    remember: true,
                }}
                onFinish={onFinish}
                onFinishFailed={onFinishFailed}
                >
                <Divider />
                <Form.Item label="Username" name="username"
                    rules={[
                    {
                        required: true,
                        message: 'Please input your username!',
                    },
                    ]}
                >
                    <Input />
                </Form.Item>
                <Form.Item
                    label="Password"
                    name="password"
                    rules={[
                    {
                        required: true,
                        message: 'Please input your password!',
                    },
                    ]}
                >
                    <Input.Password />
                </Form.Item>
                <Form.Item name="remember" valuePropName="checked"
                    wrapperCol={{
                        offset: 8,
                        span: 16,
                    }}
                >
                    <Checkbox>Remember me</Checkbox>
                </Form.Item>
                <Form.Item
                    wrapperCol={{
                        offset: 8,
                        span: 16,
                    }}
                >
                    <Button type="primary" htmlType="submit">
                        Submit
                    </Button>
                </Form.Item>
            </Form>
        </div>
    </>
  );
}

const onFinish = (values) => {
    console.log('Success:', values);
  };

const onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo);
  };