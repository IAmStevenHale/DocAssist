import { Html, Head, Main, NextScript } from 'next/document';

export default function Document() {
    
  return (
    <Html>
      <Head />
      <body>
        <script
          async
          src='https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-1034524975771842'
          crossorigin='anonymous'
        ></script>

        <ins
          class='adsbygoogle'
          style='display:block'
          data-ad-client='ca-pub-1034524975771842'
          data-ad-slot='3468851388'
          data-ad-format='auto'
          data-full-width-responsive='true'
        ></ins>
        <script>(adsbygoogle = window.adsbygoogle || []).push({});</script>
        <Main />
        <NextScript />

        {/* Global Site Tag (gtag.js) - Google Analytics */}
        <script
          dangerouslySetInnerHTML={{
            __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
          `,
          }}
        />
      </body>
    </Html>
  );
}
