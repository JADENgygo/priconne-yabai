import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html>
      <Head>
        <meta charSet="utf-8" />
        <meta name="description" content="プリコネRのやばいですね画像表示ツール" />
        <meta name="twitter:card" content="summary" />
        <meta name="twitter:site" content="@JADENgygo" />
        <meta property="og:url" content="https://priconne-yabai.vercel.app" />
        <meta property="og:title" content="プリコネヤバイ" />
        <meta property="og:description" content="プリコネRのやばいですね画像表示ツール" />
        <meta property="og:image" content="https://priconne-yabai.vercel.app/peko.png" />
        <link rel="icon" href="/peko.png" />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
