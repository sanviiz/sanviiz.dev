import Head from "next/head";
import * as _ from "../assets/constants";
import { useAppContext } from "../contexts/state";

export default function _Head() {
  const sharedState = useAppContext();

  return (
    <Head>
      <title>
        {sharedState.windowTitle[0] && `${sharedState.windowTitle[0]}`}
        {` | ${_.WINDOW_TITLE}`}
      </title>
      <link rel="icon" href="/favicon.svg" />
    </Head>
  );
}
