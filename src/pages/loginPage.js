function LoginPage() {
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
  
      <Content style={contentStyle}>
          
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="username" style={{color:'black'}}>Username:  </label>
          <input
            type="text"
            id="username"
            name="username"
            value={username}
            onChange={handleUsernameChange}
          />
        </div>
        <div>
          <label htmlFor="password" style={{color:'black'}}> Password:  </label>
          <input
            type="password"
            id="password"
            name="password"
            value={password}
            onChange={handlePasswordChange}
          />
        </div>
        <div>
      <Space wrap>
      <Button type="primary">Login</Button>
      
      <Button type="primary">Forgot Password</Button>
      </Space>
      </div>
     
      </form>
       </Content>
       <Footer style={footerStyle}></Footer>
       </Layout>
       </Space>
    );
  }