import { Outlet } from "react-router-dom";
import { Layout, Menu } from "antd";
import "../../index.css";

const { Header, Content } = Layout;

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
          backgroundColor: "#fff",
          padding: "0 20px",
        }}
      >
        <div>
          <p className="text-gray-600">Logo</p>
        </div>
        <Menu
          // theme="dark"
          mode="horizontal"
          items={navItems.map(({ route, title }) => ({
            key: route,
            label: title,
          }))}
          style={{ margin: "0" }}
        />
      </Header>
      <Content>
        <div className="">
          <Outlet />
        </div>
      </Content>
      {/* <Footer
        style={{
          textAlign: "center",
          position: "fixed",
          bottom: 0,
          width: "100%",
        }}
      >
        Footer
      </Footer> */}
    </Layout>
  );
};
