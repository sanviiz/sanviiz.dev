import Document, { Html, Head, Main, NextScript } from "next/document";

class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx);
    return { ...initialProps };
  }

  render() {
    return (
      <Html lang="en">
        <Head>
          <meta name="theme-color" content="#10b981" />
          <meta property="og:type" content="website" />
          <meta
            property="og:image"
            content={`https://${
              process.env.NEXT_PUBLIC_VERCEL_URL +
              require("../public/images/SEO_banner.png")
            }`}
          />
          <meta property="twitter:card" content="summary_large_image" />
          <meta
            property="twitter:image"
            content={`https://${
              process.env.NEXT_PUBLIC_VERCEL_URL +
              require("../public/images/SEO_banner.png")
            }`}
          />

          <script
            async
            src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS}`}
          />
          <script
            dangerouslySetInnerHTML={{
              __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS}', {
              page_path: window.location.pathname,
            });
          `,
            }}
          />
        </Head>
        <body className="font-inter bg-white dark:bg-gray-800 transition-all">
          <script
            dangerouslySetInnerHTML={{
              __html: blockingSetInitialColorMode,
            }}
          ></script>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

const blockingSetInitialColorMode = `(function() {
	${setInitialColorMode.toString()}
	setInitialColorMode();
})()
`;

function setInitialColorMode() {
  function getInitialColorMode() {
    const persistedColorPreference = window.localStorage.getItem("theme");
    const hasPersistedPreference = typeof persistedColorPreference === "string";

    if (hasPersistedPreference) {
      return persistedColorPreference;
    }

    const mql = window.matchMedia("(prefers-color-scheme: dark)");
    const hasMediaQueryPreference = typeof mql.matches === "boolean";

    if (hasMediaQueryPreference) {
      return mql.matches ? "dark" : "light";
    }

    return "light";
  }

  const colorMode = getInitialColorMode();
  const root = document.documentElement;
  root.style.setProperty("--initial-color-mode", colorMode);

  if (colorMode === "dark") document.documentElement.className = "dark";
}

export default MyDocument;
