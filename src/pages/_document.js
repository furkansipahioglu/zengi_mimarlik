import { Html, Head, Main, NextScript } from 'next/document'
import { CssBaseline } from '@nextui-org/react';
export default function Document() {
  return (
    <Html lang="en">
      <Head>
          {CssBaseline.flush()}
          <script
              dangerouslySetInnerHTML={{
                  __html: `
                if (document.location.pathname.startsWith('/_next/')) {
                  document.location.href = document.location.href.replace('/_next/', './_next/')
                }
              `,
              }}
          ></script>
      </Head>
      <body className='relative'>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
