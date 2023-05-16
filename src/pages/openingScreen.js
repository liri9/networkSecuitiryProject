
function OpeningScreen (){
  
    return (
  
      <Space
      direction="vertical"
      style={{
        width: '100%',
      }}
      size={[0, 200]}
    >
      <Layout>
        <Header style={headerStyle}>
        <Title level={3} style={{color:'#22545c'}}>Comunication_LTD</Title>
  
        </Header>
        <Content style={contentStyle}>
      <Space wrap>
      <Button type="primary">Login</Button>
      <Button type="primary">Register</Button>
      </Space>
        </Content>
        <Footer style={footerStyle}></Footer>
      </Layout>
      
      </Space>
      
    );
  }