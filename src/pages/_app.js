import React from "react";
import PropTypes from "prop-types";
import { Provider } from "react-redux";
import { CacheProvider } from "@emotion/react";
import { StyledEngineProvider, useTheme } from "@mui/material/styles";
import App from "next/app";
import Head from "next/head";
import { useRouter } from "next/router";
import useMediaQuery from "@mui/material/useMediaQuery";
import "../../styles/globals.css";
import createEmotionCache from "../theme/createEmotionCache";
import { store } from "../redux/store";
import ThemeProvider from "../theme";

const clientSideEmotionCache = createEmotionCache();

function MyApp({ Component, pageProps, emotionCache }) {
  const [devLoaded, setDevLoaded] = React.useState(false);
  const [image, setImage] = React.useState("");
  const location = useRouter();
  const theme = useTheme();
  const isMobileTablet = useMediaQuery(theme.breakpoints.down("md"));
  const { asPath } = location;
  React.useEffect(() => {
    // Remove the server-side injected CSS.
    const jssStyles = document.querySelector("#jss-server-side");
    if (jssStyles) {
      jssStyles.parentElement.removeChild(jssStyles);
    }
    if (process.env.NEXT_PUBLIC_ENVIRONMENT === "dev") {
      setDevLoaded(true);
    }
  }, [asPath, devLoaded]);
  if (process.env.NEXT_PUBLIC_ENVIRONMENT === "dev" && !devLoaded) {
    return null;
  }
  return (
    <>
      <Provider store={store}>
        <Head>
          <title>Jumia Test Evaluation App</title>
          <meta
            name="viewport"
            content="minimum-scale=1, initial-scale=1, width=device-width, shrink-to-fit=no"
          />
        </Head>
        <CacheProvider value={emotionCache}>
          <StyledEngineProvider injectFirst>
            <ThemeProvider>
              <Component
                {...pageProps}
                isMobileTablet={isMobileTablet}
                image={image}
                setImage={setImage}
              />
            </ThemeProvider>
          </StyledEngineProvider>
        </CacheProvider>
      </Provider>
    </>
  );
}
MyApp.getInitialProps = async (appContext) => {
  const appProps = await App.getInitialProps(appContext);
  const emotionCache = clientSideEmotionCache;
  return { ...appProps, emotionCache };
};

export default MyApp;

MyApp.propTypes = {
  Component: PropTypes.elementType.isRequired,
  pageProps: PropTypes.object.isRequired,
  emotionCache: PropTypes.object.isRequired,
};
