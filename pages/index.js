import Head from "next/head";
import Body from "../components/body";
import Header from "../components/header";
import Layout from "../components/layout";

export default function Home() {
  return (
    <div className="flex flex-col">
      <Head>
        <title>Company page</title>
        <link rel="icon" href="/images/logo.ico" />
      </Head>
      <Body />
    </div>
  );
}
