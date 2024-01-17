import React from 'react';
import Head from 'next/head';
import Link from 'next/link';
import Footer from '../components/footer';
import Header from '../components/header';

export default function App({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>My Hotel Website</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>
      <Header />
      <main>
        <Component {...pageProps} />
      </main>
      <Footer />
    </>
  );
}

