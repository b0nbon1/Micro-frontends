import { Html, Head, Main, NextScript } from 'next/document'
import '@module-federation/nextjs-mf/src/include-defaults';

export default function Document() {
  return (
    <Html lang="en">
      <Head />
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
