import Home from "./components/Home";
import Head from "next/head";

export default function App() {
  return (
    <>
      <Head>
        <title>Ana Vale - Frontend Engineer</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <link rel="preconnect" href="https://fonts.gstatic.com" key="font" />
      </Head>
      <Home />
    </>
  );
}
