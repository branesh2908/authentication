import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import React from 'react';
import './index.css';
import { Button, Checkbox, Form, Input } from 'antd';

// const auth = getAuth();
// createUserWithEmailAndPassword(auth, username, password)
//   .then((userCredential) => {
//     // Signed in 
//     const user = userCredential.user;
//     // ...
//   })
//   .catch((error) => {
//     const errorCode = error.code;
//     const errorMessage = error.message;
//     // ..
//   });
  
  const onFinish = (e) => {
    console.log('Success:', '');
  };

  const onFinishFailed = (e) => {
    console.log('Failed:', '');
  };
function App() {
  return (
    <form className="form">
      
      <Form 
        name="basic"
        labelCol={{ span: 8 }}
        wrapperCol={{ span: 16 }}
        initialValues={{ remember: true }}
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
        autoComplete="off"
      >  <h1>Login Page</h1>
        <div className='input-fld-item'>
        <label>UserName</label>
        <Form.Item
          name="username"
          // rules={[{ required: true, message: 'Please input your username!' }]}
        >
          <Input required/>
        </Form.Item>
        </div>
        <div className='input-fld-item'>
          <label required>Password</label>
        <Form.Item
          name="password"
          // rules={[{ required: true, message: 'Please input your password!' }]}
        >
          <Input.Password />
        </Form.Item>
        </div>
        <Form.Item name="remember" valuePropName="checked" wrapperCol={{ offset: 8, span: 16 }}>
          <Checkbox>Remember me</Checkbox>
          
        </Form.Item>
        <label>Forget Password?</label>
        <Form.Item className='button-sec' wrapperCol={{ offset: 8, span: 16 }}>
        
          <Button type="primary" htmlType="submit"  >
            Sign in
          </Button>
        </Form.Item>
      </Form>
    </form>
  );
}
export default App;