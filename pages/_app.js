// Next
import Head from "next/head";

// Styles
import "@/styles/globals.css";

// Layout
import Theme from "@/components/atoms/Theme";

// i18n
import { useTranslation } from "react-i18next";
import "/i18n";

export default function App(props) {
  const { Component, pageProps } = props;

  const { t } = useTranslation();
  const translations = t("app", { returnObjects: true });

  return (
    <>
      <Head>
        <title>Page title</title>
        <meta
          name="viewport"
          content="minimum-scale=1, initial-scale=1, width=device-width"
        />
      </Head>

      <Theme>
        <Component {...pageProps} t={translations} />
      </Theme>
    </>
  );
}
