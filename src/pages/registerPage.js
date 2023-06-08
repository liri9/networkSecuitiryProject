import React, { useRef, useState } from "react";
import {
  Layout,
  Button,
  Space,
  Typography,
  Input,
  Form,
  Checkbox,
  message,
} from "antd";
import { Register } from "../apis/usersapi";

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

const RegisterPageContent = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [repeatPassword, setRepeatPassword] = useState("");
  const [passwordValid, setPasswordValid] = useState(false);
  const [messageApi, contextHolder] = message.useMessage();
  const submissionShow = useRef(true);
  const [form] = Form.useForm();
  const [passwordsMatch, setPasswordsMatch] = useState(false);

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

  const successMsg = (text) => {
    messageApi.open({
      type: "success",
      contenet: text,
    });
  };

  const errorMsg = (text) => {
    messageApi.open({
      type: "error",
      content: text,
    });
  };
  const validatePassword = (_, value) => {
    const { confirm } = Form.getFieldsValue(['repeat password']);
    console.log(value,confirm);
    if (value && confirm && value !== confirm) {
      setPasswordsMatch(false);
      return Promise.reject('The passwords do not match');
    } else {
      setPasswordsMatch(true);
      return Promise.resolve();
    }
  };

  const onFinish = async (values) => {
    if (passwordsMatch) 
        console.log(values);
   //const result = await Register();

    // await ClientRegisterApi(values);
    // if (dataFromServer) { // todo change when we add post in the back
    //   console.log(dataFromServer);
    //   successMsg("Registration successful!");
    //   submissionShow.current = false;
    // //  setRegisterSuccess(true);
    // } else {
    //   errorMsg("somthing went wrong");
    //  // setRegisterSuccess(false);
    // }
  };

  return (
    <>
      {contextHolder}
      <Form onFinish={onFinish}>
        <Form.Item
          name={["username"]}
          // label="User Name"
          rules={[
            {
              required: true,
            },
          ]}
        >
          <Input placeholder="User Name"></Input>
        </Form.Item>
        <Form.Item
          name={["email"]}
          // label="Email"
          rules={[
            {
              type: "email",
              required: true,

            },
          ]}
        >
          <Input placeholder="Email"></Input>
        </Form.Item>

        <Form.Item
          name="password"
          rules={[
            {
              required: true,
            },
          ]}
          validateStatus={passwordValid ? "success" : "error"}
          help={
            !passwordValid && password.length > 0
              ? "Must contain at least 10 characters, one capital letter, one lowercase letter, one special character, and one digit"
              : null
          }
        >
          <Input.Password
            // type="password"
            placeholder="Password"
          />
        </Form.Item>

        <Form.Item
        name="repeat password"
        rules={[
          {
            required: true,
          },
        ]}
        validateStatus={passwordValid ? "success" : "error"}
      >
          <Input.Password
            value={repeatPassword}
            placeholder="Repeat Password"
            dependencies={['password']}
        rules={[
          { required: true, message: 'Please confirm your password!' },
          { validator: validatePassword },
        ]}
            suffix={
              repeatPassword === password ? <Checkbox checked={true} /> : null
            }
          />
        </Form.Item>
        <Form.Item>
          <Button type="primary" htmlType="submit">
            Register
          </Button>
        </Form.Item>
      </Form>
    </>
  );
};

const RegisterPage = () => {
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
              <RegisterPageContent />
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
