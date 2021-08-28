import { useEffect } from "react";
import { JssProvider, createGenerateId } from "react-jss";
import { Provider } from "next-auth/client";
import Head from "next/head";
import { MantineProvider, NormalizeCSS, GlobalStyles } from "@mantine/core";
import "../global.css";
export default function App(props) {
  const { Component, pageProps } = props;

  useEffect(() => {
    const jssStyles = document.getElementById("mantine-ssr-styles");
    if (jssStyles) {
      jssStyles?.parentElement?.removeChild(jssStyles);
    }
  }, []);

  return (
    <>
      <Provider session={pageProps.session}>
        <JssProvider generateId={createGenerateId()}>
          <Head>
            <title>Classroom Companion</title>
            <link rel="icon" href="/favicon.ico" />
          </Head>
          <MantineProvider
            theme={{
              /** Put your mantine theme override here */
              colorScheme: "light",
            }}
          >
            <NormalizeCSS />
            <GlobalStyles />
            <Component {...pageProps} />
          </MantineProvider>
        </JssProvider>
      </Provider>
    </>
  );
}
