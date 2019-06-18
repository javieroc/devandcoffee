import Head from "next/head";
import { Layout } from "antd";

const { Header, Footer, Content } = Layout;

export default class LayoutComponent extends React.Component {
  render() {
    const { children, title } = this.props;

    return (
      <div>
        <Head>
          <title>{title}</title>
        </Head>
        <Header>Header</Header>
        <Content>{children}</Content>
        <Footer>Footer</Footer>
      </div>
    );
  }
}
