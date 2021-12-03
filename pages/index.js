import Head from "next/head";
import Body from "../components/body";
import Header from "../components/header";

export default function Home() {
  return (
    <div className="flex flex-col">
      <Head>
        <title>Company page</title>
        <link rel="icon" href="/images/logo.png" />
      </Head>
      <Header />
      <Body />
    </div>
  );
}
