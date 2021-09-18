import { useEffect } from "react";
import { JssProvider, createGenerateId } from "react-jss";
import Head from "next/head";
import { NotificationsProvider } from "@mantine/notifications";
import { MantineProvider, NormalizeCSS, GlobalStyles } from "@mantine/core";
import "../global.css";
import ProgressBar from "@badrap/bar-of-progress";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import supabase from "../utils/supabase";
import { SupabaseContextProvider } from "use-supabase";
import Router from "next/router";
const progress = new ProgressBar({
  size: 4,
  color: "#FFFFFF",
  className: "z-50",
  delay: 100,
});

Router.events.on("routeChangeStart", progress.start);
Router.events.on("routeChangeComplete", progress.finish);
Router.events.on("routeChangeError", progress.finish);
export default function App(props) {
  const { Component, pageProps } = props;

  useEffect(() => {
    const jssStyles = document.getElementById("mantine-ssr-styles");
    if (jssStyles) {
      jssStyles?.parentElement?.removeChild(jssStyles);
    }
  }, []);

  return (
    <JssProvider generateId={createGenerateId()}>
      <SupabaseContextProvider client={supabase}>
        <Head>
          <title>Classroom Companion</title>
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <MantineProvider
          theme={{
            /** Put your mantine theme override here */
            fontFamily: "Reem kufi",
            colorScheme: "light",
          }}
        >
          {" "}
          <NotificationsProvider>
            <NormalizeCSS />
            <GlobalStyles />
            <Component {...pageProps} />
          </NotificationsProvider>
        </MantineProvider>
      </SupabaseContextProvider>
    </JssProvider>
  );
}
