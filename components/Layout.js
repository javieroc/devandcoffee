import Head from "next/head";

export default class Layout extends React.Component {
  render() {
    const { children, title } = this.props;

    return (
      <div>
        <Head>
          <title>{title}</title>
          <meta
            name="viewport"
            content="width=device-width, initial-scale=1.0"
          />
        </Head>
        {children}
        <style jsx global>{`
          body {
            margin: 0;
            font-family: system-ui;
            background: white;
          }
        `}</style>
      </div>
    );
  }
}
