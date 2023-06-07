import React, { useRef, useState } from 'react';
import { Layout, Button, Space, Typography,Input, Form, Checkbox, message } from 'antd';
const { Title } = Typography;
const { Header, Footer, Content ,Sider} = Layout;




const headerStyle = {
  textAlign: 'center',
  color: '#fff',
  height: 64,
  paddingInline: 50,
  lineHeight: '64px',
  backgroundColor: '#f4f2ee',
};
const contentStyle = {
  textAlign: 'center',
  minHeight: 120,
  height:450,
  lineHeight: '120px',
  color: '#fff',
  backgroundColor: '#efe7d2',
};
const footerStyle = {
  textAlign: 'center',
  color: '#fff',
  backgroundColor: '#f4f2ee',
};

const RegisterPageContent = () =>{

const [username, setUsername] = useState('');
const [email, setEmail] = useState('');
const [password, setPassword] = useState('');
const [repeatPassword, setRepeatPassword] = useState('');
const [passwordValid, setPasswordValid] = useState(false);
const [messageApi, contextHolder] = message.useMessage();
const submissionShow = useRef(true);
  
  const handleUsernameChange = (event) => {
    setUsername(event.target.value);
  };
  
  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };
  
  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
    setPasswordValid(
      event.target.value.length >= 10 &&
        /[a-z]/.test(event.target.value) &&
        /[A-Z]/.test(event.target.value) &&
        /[0-9]/.test(event.target.value) &&
        /[^\w\s]/.test(event.target.value)
    );
  };
  
  const handleRepeatPasswordChange = (event) => {
    setRepeatPassword(event.target.value);
  };
  
  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(
      `Submitted username: ${username}, email: ${email}, password: ${password}, and repeat password: ${repeatPassword}`
    );
  };

  const successMsg = (text) =>{
    messageApi.open({
      type:"success",
      contenet:text,
    });
  }

  const errorMsg = (text) => {
    messageApi.open({
      type: "error",
      content: text,
    });
  };

  const onFinish = async(values)=>{
    console.log(values);
    const dataFromServer =true;
    // await ClientRegisterApi(values);
    if (dataFromServer) { // todo change when we add post in the back
      console.log(dataFromServer);
      successMsg("Registration successful!");
      submissionShow.current = false;
    //  setRegisterSuccess(true);
    } else {
      errorMsg("somthing went wrong");
     // setRegisterSuccess(false);
    }
  };

  return (
    <>
    {contextHolder}
    <Form onSubmit={handleSubmit}
        autoComplete="off">
    <Form onFinish = {onFinish}>
    <Form.Item label="Username">
            <Input value={username} onChange={handleUsernameChange} />
          </Form.Item>
          <Form.Item label="E-mail">
            <Input type="email" value={email} onChange={handleEmailChange} />
          </Form.Item>
          <Form.Item
            label="Password"
            validateStatus={passwordValid ? 'success' : 'error'}
            help={
              passwordValid
                ? null
                : 'Must contain at least 10 characters, one capital letter, one lowercase letter, one special character, and one digit'
            }
            
          >
            <Input.Password value={password} onChange={handlePasswordChange} />
          </Form.Item>
          <Form.Item
            label="Repeat Password"
           
          >
            <Input.Password
              value={repeatPassword}
              onChange={handleRepeatPasswordChange}
              suffix={
                repeatPassword === password ? (
                  <Checkbox checked={true} />
                ) : null
              }
            />
          </Form.Item>
          <Form.Item>
            <Button type="primary" htmlType="submit">
              Register
            </Button>
          </Form.Item>
    </Form>
    </Form>
    </>
  )

}

const RegisterPage=()=>{
   
  
    return (
      <Space
      direction="vertical"
      style={{
      width: '100%',
      }}
      size={[0, 50]}
  >
      <Layout>
          <Header style={headerStyle}>
          <Title level={3} style={{color:'#22545c'}}>Comunication_LTD</Title>
          </Header>
          <Layout>
              <Sider style={{ background: "#efe7d2" }}></Sider>
              <Layout>
              <Content style={contentStyle}>
                  <RegisterPageContent/>
              </Content>
              </Layout>
              <Sider style={{ background: "#efe7d2" }}></Sider>
          </Layout>
          <Footer style={footerStyle}></Footer>
      </Layout>
  </Space>
    );
  };
export default RegisterPage;