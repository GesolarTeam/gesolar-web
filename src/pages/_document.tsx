import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  function GoogleTagManagerScript() {
    return {__html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
      new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
      j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
      'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
      })(window,document,'script','dataLayer','GTM-WXB5W9D');`}
  }

  return (
    <Html>
      <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700&display=swap" rel="stylesheet"/>

        <script dangerouslySetInnerHTML={GoogleTagManagerScript()} />
      </Head>
      <body>
        <noscript>
          <iframe 
            src="https://www.googletagmanager.com/ns.html?id=GTM-WXB5W9D"
            height="0" 
            width="0" 
            style={{ display: 'none', visibility: 'hidden' }}>
          </iframe>
        </noscript>

        <Main />
        <NextScript />
      </body>
    </Html>
  )
}