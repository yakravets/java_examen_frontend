import React from 'react';
import { Form, Input, Select, Checkbox, Button, Layout, Divider, message } from 'antd';
import './Register.css';
import config from '../../config.js';
import axios from 'axios';

const registerUrl = config.api_url + config.register_register;

const formItemLayout = {
  labelCol: {
    xs: { span: 16 },
    sm: { span: 8 },
  },
  wrapperCol: {
    xs: { span: 24 },
    sm: { span: 24 },
  },
};
const tailFormItemLayout = {
  wrapperCol: {
    xs: {
      span: 12,
      offset: 0,
    },
    sm: {
      span: 16,
      offset: 4,
    },
  },
};

const RegistrationForm = () => {
  const [form] = Form.useForm();

  const onFinish = (values) => {
    
    axios.post(
        registerUrl,
        JSON.stringify(values),
        {
            headers: {
                'Content-Type': 'application/json'
            }
        })
    .then(res => {
        
        if(res.data.success){
            window.location.href='/login';
        }
        else{
            message.error(res.data.message);
        }
      })
    .catch(function (error) {
        message.error("Network error. Try again await.");
      });
    
      console.log('Received values of form: ', values);

  };

  return (
      <>
        <Layout className='content_register'>            
            <Form
                {...formItemLayout}
                form={form}
                name="register"
                onFinish={onFinish}
                scrollToFirstError
            >
                <Layout orientation='vertical' className="block_data_register">
                    <Divider orientation="left">Access:</Divider>
                    <Form.Item
                        name="email"
                        label="E-mail"
                        rules={[
                        {
                            type: 'email',
                            message: 'The input is not valid E-mail!',
                        },
                        {
                            required: true,
                            message: 'Please input your E-mail!',
                        },
                        ]}
                    >
                        <Input />
                    </Form.Item>
                    
                    <Form.Item
                        name="password"
                        label="Password"
                        rules={[
                        {
                            required: true,
                            message: 'Please input your password!',
                        },
                        ]}
                        hasFeedback
                    >
                        <Input.Password />
                    </Form.Item>

                    <Form.Item
                        name="confirm"
                        label="Confirm"
                        dependencies={['password']}
                        hasFeedback
                        rules={[
                        {
                            required: true,
                            message: 'Please confirm your password!',
                        },
                        ({ getFieldValue }) => ({
                            validator(_, value) {
                            if (!value || getFieldValue('password') === value) {
                                return Promise.resolve();
                            }
                            return Promise.reject(new Error('The two passwords that you entered do not match!'));
                            },
                        }),
                        ]}
                    >
                        <Input.Password />
                    </Form.Item>
                </Layout>
                
                <Layout orientation='vertical' className="block_data_register">                    
                    <Divider orientation="left">Contact information data:</Divider>
                    <Form.Item
                        name="firstName"
                        label="First name"
                        rules={[{ required: true, message: 'Please input your First name!', whitespace: true }]}
                    >
                        <Input />
                    </Form.Item>
                    
                    <Form.Item
                        name="lastName"
                        label="Last name"
                        rules={[{ required: true, message: 'Please input your Last name!', whitespace: true }]}
                    >
                        <Input />
                    </Form.Item>

                    <Form.Item
                        name="gender"
                        label="Gender"
                        rules={[{ required: true, message: 'Please select gender!' }]}
                    >
                        <Select placeholder="select your gender">
                        <Select.Option value="Male">Male</Select.Option>
                        <Select.Option value="Female">Female</Select.Option>
                        </Select>
                    </Form.Item>

                    <Form.Item
                        name="agreement"
                        valuePropName="checked"
                        rules={[
                        {
                            validator: (_, value) =>
                            value ? Promise.resolve() : Promise.reject(new Error('Should accept agreement')),
                        },
                        ]}
                        {...tailFormItemLayout}
                    >
                        <Checkbox>
                            I have read the <a href="">agreement</a>
                        </Checkbox>
                    </Form.Item>
                    <Form.Item {...tailFormItemLayout}>
                        <Button type="primary" htmlType="submit">
                            Register
                        </Button>
                    </Form.Item>
                </Layout>
            </Form>
        </Layout>
    </>
  );
};

export default RegistrationForm;