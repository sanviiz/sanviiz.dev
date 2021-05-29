import Head from "next/head";
import * as _ from "../assets/constants";

export default function _Head(props) {
  const { title } = props;

  return (
    <Head>
      <title>
        {`I'm  ${_.AKA}`}
        {title && ` | ${title}`}
      </title>
      <link rel="icon" href="/favicon.svg" />
    </Head>
  );
}
