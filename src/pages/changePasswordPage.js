
import { Layout, Button, Space, Typography,Input, Form, Checkbox, Modal } from 'antd';
import React , { useRef, useState } from 'react';

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


const ChangePasswordConmponent = () => {
    const [password, setPassword] = useState('');
    const [repeatPassword, setRepeatPassword] = useState('');
    const [passwordValid, setPasswordValid] = useState(false);

    const onFinish = (values) => {
        console.log('Success:', values);
      };
      const onFinishFailed = (errorInfo) => {
        console.log('Failed:', errorInfo);
      };
      const [username, setUsername] = useState('');

      
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
      
    return (
    <Form onFinish={onFinish}>
        <Form.Item
        name="username"
        label="username"
        rules={[{ required: true, message: "Please input your user name!" }]}
        >
        <Input />
        </Form.Item>
        <Form.Item
            label="Current Password"
            name="oldPassword"
            rules={[
            {
            required: true,
            message: 'Please input your password!',
            },
            ]}
        >
        <Input.Password />
        </Form.Item>
        <Form.Item
            label="New Password"
            name="newPassword"
            rules={[
            {
                required: true,
                message: 'Please input your password!',
            },
            ]}
            validateStatus={passwordValid ? 'success' : 'error'}
            help={
              passwordValid
                ? null
                : 'Must contain at least 10 characters, one capital letter, one lowercase letter, one special character, and one digit'
            }
        >
        <Input.Password />
        </Form.Item>
        <Form.Item
            label="Repeat Password"
            name="repeatPassword"
            rules={[
            {
                required: true,
                message: 'Please input your password!',
            },
            ]}
            validateStatus={repeatPassword === password ? 'success' : 'error'}
            help={repeatPassword === password ? null : 'Passwords do not match'}
        >
        <Input.Password />
        </Form.Item>
        <Form.Item>
        <Button type="primary">
            Change Password
        </Button>
        </Form.Item>
    </Form>
);
};

const ChangePasswordPage = () => {
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
                <ChangePasswordConmponent/>
            </Content>
            </Layout>
            <Sider style={{ background: "#efe7d2" }}></Sider>
        </Layout>
        <Footer style={footerStyle}></Footer>
    </Layout>
</Space>
);
};

export default ChangePasswordPage;
