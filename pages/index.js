import Home from './components/Home'
import Head from 'next/head'

export default function App() {
  return (
    <>
      <Head>
        <title>Ana's site</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <link rel="preconnect" href="https://fonts.gstatic.com" key="font" />
        <link
          href="https://fonts.googleapis.com/css2?family=Roboto:wght@100&display=swap"
          rel="stylesheet"
          key="font-family"
        />
      </Head>
      <Home />
    </>
  )
}
