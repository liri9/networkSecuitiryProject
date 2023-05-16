        import React, { useState } from 'react';
        import { Layout, Button, Space, Typography,Input, Form, Checkbox, Modal } from 'antd';
        import { useNavigate } from "react-router-dom";

        const { Title } = Typography;
        const { Header, Footer, Content,Sider } = Layout;

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



        const ChangePassword = () => {
        const navigate = useNavigate();
        navigate("/changePassword");
        };

        const ForgotPasswordComponent =() => {
        const [isModalOpen, setIsModalOpen] = useState(false);

        const showModal = () => {
        setIsModalOpen(true);
        };

        <Modal
          title="Choose name and color"
          open={isModalOpen}
        ></Modal>

        };

        const ResetPassword =() => {



        };

        const LoginPageComponent = () =>{
        const navigate = useNavigate();

        const [username, setUsername] = useState('');
        const [password, setPassword] = useState('');

        const handleUsernameChange = (event) => {
        setUsername(event.target.value);
        };

        const handlePasswordChange = (event) => {
        setPassword(event.target.value);
        };

        const handleSubmit = (event) => {
        event.preventDefault();
        console.log(`Submitted username: ${username} and password: ${password}`);
        };

        return (
        <form onSubmit={handleSubmit}>
        <Form.Item
        label="Username"
        name="username"
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

        <Space wrap>
        <Button type="primary">
          Login
          </Button>

        <Button type="primary">
          Forgot Password
          </Button>
          <Button type="primary" onClick={ChangePassword}>
          Change Password
          </Button>
        </Space>

        </form>
        )
        };


  const LoginPage=()=> {
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
          <LoginPageComponent/>
        </Content>
      </Layout>
      <Sider style={{ background: "#efe7d2" }}></Sider>
    </Layout>
   <Footer style={footerStyle}></Footer>
  </Layout>
  </Space>
  );
  }

export default LoginPage;