import "@/styles/globals.css";
import type { AppProps } from "next/app";
import Script from "next/script";
import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
    @font-face {
    font-family: 'Brice Regular SemiExpanded';
    src: url('/fonts/Brice-RegularSemiExpanded.woff') format('woff');
    font-style: normal;
    font-weight: 400;
    font-display: swap;
  }
  @font-face {
    font-family: 'Brice SemiBold SemiExpanded';
    src: url('/fonts/Brice-SemiBoldSemiExpanded.woff') format('woff');
    font-style: normal;
    font-weight: 600;
    font-display: swap;
  }

`;

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Script async src="https://www.googletagmanager.com/gtag/js?id=G-MWK8WVG5KZ"></Script>
      <Script id='google-analytics' >
        {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());

            gtag('config', 'G-MWK8WVG5KZ');
            `}
      </Script>
      <GlobalStyle />
      <Component {...pageProps} />
    </>

  );
}
