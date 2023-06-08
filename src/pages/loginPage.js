import React, { useState } from "react";
import {
  Layout,
  Button,
  Space,
  Typography,
  Input,
  Form,
  Modal,
  InputNumber,
} from "antd";
import { useNavigate } from "react-router-dom";
import ReactCodeInput from "react-code-input";
import "react-input-code/dist/index.css";
import { AutoTabProvider } from "react-auto-tab";
import "../styles.css";
import { Login, forgotPassword } from "../apis/usersapi";

const { Title } = Typography;
const { Header, Footer, Content, Sider } = Layout;


const headerStyle = {
  textAlign: "center",
  color: "#fff",
  height: 64,
  paddingInline: 50,
  lineHeight: "64px",
  backgroundColor: "#f4f2ee",
};
const contentStyle = {
  textAlign: "center",
  minHeight: 120,
  height: 450,
  lineHeight: "120px",
  color: "#fff",
  backgroundColor: "#efe7d2",
};
const footerStyle = {
  textAlign: "center",
  color: "#fff",
  backgroundColor: "#f4f2ee",
};

const SendEmail = async (username) => {
  const num = await forgotPassword(username);
};

const LoginPageComponent = () => {
  const navigate = useNavigate();

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [isResetPassModalOpen, setIsResetModalOpen] = useState(false);
  const [isPassModalOpen, setIsPassModalOpen] = useState(false);
  const SendTo = () => {
    const navigate = useNavigate();
  
    navigate("/SystemScreen");
  };
  const showModal = () => {
    setIsResetModalOpen(true);
  };
  const handleResetOk = () => {
    setIsResetModalOpen(false);
    setIsPassModalOpen(true);
  };
  const handlePassOk = () => {
    setIsPassModalOpen(false);
    SendTo();
  };

  const handleCancel = () => {
    setIsResetModalOpen(false);
    setIsPassModalOpen(false);
  };
  const ChangePassword = () => {
    navigate("/ChangePasswordPage");
  };

  const onFinish = async (values) => {
    const user = await Login(values);
  };

  return (
    <Form onFinish={onFinish}>
      <Form.Item
        label="Username"
        name="username"
        rules={[
          {
            required: true,
            message: "Please input your username!",
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
            message: "Please input your password!",
          },
        ]}
      >
        <Input.Password />
      </Form.Item>

      <Space wrap>
        <Button type="primary" htmlType="submit">
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
        width="600px"
        open={isResetPassModalOpen}
        onOk={handleResetOk}
        onCancel={handleCancel}
      >
        <Form>
          <Form.Item
            label="Username"
            name="username"
            rules={[
              {
                required: true,
                message: "Please input your username!",
              },
            ]}
          >
            <Input />
          </Form.Item>
          <div>
            <Space direction="vertical">
              <Button type="primary" onClick={SendEmail(username)}>
                Send E-mail
              </Button>
              <text>
                A 6 digit code was sent to your e-mail. Enter it below:
              </text>
            </Space>
            <Form.Item>
              <Input id="partitioned" type="number" maxlength="6" />
            </Form.Item>
          </div>
        </Form>
      </Modal>

      <Modal
        width="600px"
        open={isPassModalOpen}
        onOk={handlePassOk}
        onCancel={handleCancel}
      >
        <Form.Item
          label="Password"
          // validateStatus={passwordValid ? 'success' : 'error'}
          // help={
          //   passwordValid
          //     ? null
          //     : 'Must contain at least 10 characters, one capital letter, one lowercase letter, one special character, and one digit'
          // }
        >
          <Input.Password value={password} />
        </Form.Item>
        <Form.Item label="Repeat Password">
          <Input.Password
          // value={repeatPassword}
          // onChange={handleRepeatPasswordChange}
          // suffix={
          //   repeatPassword === password ? (
          //     <Checkbox checked={true} />
          //   ) : null
          // }
          />
        </Form.Item>
      </Modal>
    </Form>
  );
};

const LoginPage = () => {
  return (
    <Space
      direction="vertical"
      style={{
        width: "100%",
      }}
      size={[0, 50]}
    >
      <Layout>
        <Header style={headerStyle}>
          <Title level={3} style={{ color: "#22545c" }}>
            Comunication_LTD
          </Title>
        </Header>
        <Layout>
          <Sider style={{ background: "#efe7d2" }}></Sider>
          <Layout>
            <Content style={contentStyle}>
              <LoginPageComponent />
            </Content>
          </Layout>
          <Sider style={{ background: "#efe7d2" }}></Sider>
        </Layout>
        <Footer style={footerStyle}></Footer>
      </Layout>
    </Space>
  );
};

export default LoginPage;
