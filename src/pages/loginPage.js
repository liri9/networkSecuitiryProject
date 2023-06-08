import React, { useState } from 'react';
import { Layout, Button, Space, Typography,Input, Form, Modal, InputNumber } from 'antd';
import { useNavigate } from "react-router-dom";
import ReactCodeInput from 'react-code-input';
import 'react-input-code/dist/index.css'
import {AutoTabProvider} from 'react-auto-tab'
import '../styles.css';


const { Title } = Typography;
const { Header, Footer, Content,Sider } = Layout;

const SendTo =() => 
{
  const navigate = useNavigate();

  navigate("/SystemScreen");

}

const Cell =()=> {
const onChange = (value) => {
  console.log('changed', value);
};

return(
    
      // <InputNumber  min={0} max={999999} onChange={onChange}
      //   style={{
      //     width: '100%',
      //   }}
      // />
  
  <InputNumber min={0} max={9} defaultValue={null} onChange={onChange} size='10px' />
);
}
const Row =()=> {
  return(
  //   <Space direction="vertical" size="middle">
  //   <Space.Compact>
  //     {/* <Cell/>
  //     <Cell/>
  //     <Cell/>
  //     <Cell/>
  //     <Cell/>
  //     <Cell/> */}

  //   </Space.Compact>
  // </Space>
<div>
  {/* <input type="number_C" value="Hello World" maxlength="6"/>
  <input
  type="number_C"
  pattern="[0-9]{6}"
  min="0"
  max="999999"
  maxlength="6"
  className="input-wrapper"
/> */}
  
  <div id="divInner">
  <input id="partitioned" type="number" maxlength="6" />
      </div>
</div>
  


  )

}
const Table =()=> {
  return(
  <table>
  <Row/>
  </table>
  )

}

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

const SendEmail =() =>{

}
const LoginPageComponent = () =>{
const navigate = useNavigate();

const [username, setUsername] = useState('');
const [password, setPassword] = useState('');
const [isModalOpen, setIsModalOpen] = useState(false);


const showModal = () => {
  setIsModalOpen(true);
  };
  const handleOk = () => {
    //TODO check if the 6 digits are ok and send to another page
    setIsModalOpen(false);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };

  // const finishedReset = () => {
  //   navigate("/tables/arrangeTables");
  // };
const ChangePassword = () => {
  navigate("/ChangePasswordPage");
};
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
<Form onSubmit={handleSubmit}>
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
<Button type="primary" OnClick = {SendTo}>
  Login
  </Button>

<Button type="primary" onClick={showModal}>
  Forgot Password
  </Button>
  <Button type="primary" onClick={ChangePassword}>
  Change Password
  </Button>
</Space>
<Modal
width ='600px'
open={isModalOpen}
onOk={handleOk}
onCancel={handleCancel}>
  <ModalContent/>
 
</Modal>
</Form>

)
};

const ModalContent =()=>{
return (
  <Form>
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
  <div>
  <Space
    direction="vertical">
  <Button type="primary" onClick ={SendEmail}>
  Send E-mail
  </Button>
  <text>A 6 digit code was sent to your e-mail. Enter it below:</text>
  </Space>
  <Form.Item>
    <Table/>
  </Form.Item>
  </div>
  </Form>
)
}
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