import "../styles/globals.css";
import Head from "next/head";
import AppProvider from "../utils/provider";

function MyApp({ Component, pageProps }) {
  return (
    <AppProvider>
      <Head>
        <title>Quang's Portfolio</title>
        <meta charset="UTF-8" />
        <meta http-equiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width,initial-scale=1.0" />
        <meta name="description" content="Van Quang Bach" />
        <meta name="description" content="D3 - BCIT" />
        <meta name="description" content="Portfolio" />
        {/* This ways to add css on global website use local asset folder withhtml link tag */}
        <link href="/fonts/Celebes-Regular.ttf" rel="stylesheet" />
        <link href="/fonts/Celebes-SemiBold.ttf" rel="stylesheet" />
        <link href="/fonts/Celebes-Thin.ttf" rel="stylesheet" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        {/* <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin/> */}
        <link
          href="https://fonts.googleapis.com/css2?family=EB+Garamond:wght@400;600&family=Pacifico&display=swap"
          rel="stylesheet"
        ></link>
      </Head>
      <Component {...pageProps} />
    </AppProvider>
  );
}

export default MyApp;
