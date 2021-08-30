import React from 'react';
import { Form, Input, Button, Checkbox, Divider, message } from 'antd';
import axios from 'axios';
import './Login.css';
import { Link } from 'react-router-dom';

export default class Login extends React.Component{ 

	constructor(props){
			super(props);
			this.state = {loginUrl: this.props.loginUrl}
		}
		
	render(){
	  return (
		  <>
			<div className='login-form'>
				<Form name="basic" labelCol={{span: 8,}}
					wrapperCol={{span: 8,}}
					initialValues={{
						remember: true,
					}}
					onFinish={this.onFinish}
					onFinishFailed={this.onFinishFailed}
					>
					<Divider />
					<Form.Item label="Email" name="login"
						rules={[
						{
							required: true,
							message: 'Please input your email!',
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
	};
	
	onFinish = (formValues) => {
		
		console.log('Success:', formValues);
		axios.post(
			this.state.loginUrl,
			JSON.stringify(formValues),
			{
				headers: {
					'Content-Type': 'application/json'
				}
			})
		.then(res => {
			
			if(res.data.success){
				this.props.loginCallback(res.data);
				<Link to="/home" />
			}
			else{
				message.error(res.data.message);
			}
		  })
		.catch(function (error) {
			message.error(error);
		  });
		
  };
  
	  onFinishFailed = (errorInfo) => {
		console.log('Failed:', errorInfo);
  };
}
