import { Outlet } from "react-router-dom";
import { Layout, Menu } from "antd";

const { Header, Footer, Content } = Layout;

export const AppLayout = () => {
  const navItems = [{ title: "Profile", route: "/profile" }];

  return (
    <Layout>
      <Header
        style={{
          position: "sticky",
          top: 0,
          zIndex: 1,
          width: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          padding: "0 20px",
        }}
      >
        <div>
          <span
            style={{ color: "white", fontSize: "20px", fontWeight: "bold" }}
          >
            Logo
          </span>
        </div>
        <Menu
          theme="dark"
          mode="horizontal"
          defaultSelectedKeys={["1"]}
          items={navItems.map(({ route, title }) => ({
            key: route,
            label: title,
          }))}
          style={{ margin: "0" }}
        />
      </Header>
      <Content>
        <Outlet />
      </Content>
      <Footer
        style={{
          textAlign: "center",
          position: "fixed",
          bottom: 0,
          width: "100%",
        }}
      >
        Footer
      </Footer>
    </Layout>
  );
};
