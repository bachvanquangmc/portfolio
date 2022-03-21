import '../styles/globals.css'
import Head from "next/head";
import AppProvider from '../utils/provider'



function MyApp({ Component, pageProps }) {
  return <AppProvider>
  <Head>
   {/* This ways to add css on global website use local asset folder withhtml link tag */}
    <link
       href="/fonts/Celebes-Regular.ttf"
       rel="stylesheet"
     />
    <link
       href="/fonts/Celebes-SemiBold.ttf"
       rel="stylesheet"
      />
    <link
      href="/fonts/Celebes-Thin.ttf"
      rel="stylesheet"
    />
    <link rel="preconnect" href="https://fonts.googleapis.com"/>
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin/>
<link href="https://fonts.googleapis.com/css2?family=EB+Garamond:wght@400;600&family=Pacifico&display=swap" rel="stylesheet"></link>
 </Head>
  <Component {...pageProps} 
  />
  </AppProvider>
}

export default MyApp
