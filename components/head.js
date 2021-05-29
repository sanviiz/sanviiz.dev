import Head from "next/head";

export default function _Head(props) {
  const { title } = props;

  return (
    <Head>
      <title>{title}</title>
      <link rel="icon" href="/favicon.svg" />
    </Head>
  );
}
