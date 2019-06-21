import Head from "next/head";
import { Layout, Menu } from "antd";

const { Header, Footer, Content } = Layout;

export default class LayoutComponent extends React.Component {
  render() {
    const { children, title } = this.props;

    return (
      <div>
        <Head>
          <title>{title}</title>
        </Head>
        <Header>
          <div className="logo" />
          <Menu
            mode="horizontal"
            theme="dark"
            style={{ lineHeight: "64px" }}
            defaultSelectedKeys={["2"]}
          >
            <Menu.Item theme="dark" key="1">
              nav 1
            </Menu.Item>
            <Menu.Item key="2">nav 2</Menu.Item>
            <Menu.Item key="3">nav 3</Menu.Item>
          </Menu>
        </Header>
        <Content>{children}</Content>
        <Footer>Footer</Footer>
      </div>
    );
  }
}
