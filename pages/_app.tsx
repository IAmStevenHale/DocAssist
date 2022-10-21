import '../styles/globals.css';
import type { AppProps } from 'next/app';
import Layout from './Layout';

function MyApp({ Component, pageProps }: AppProps) {
    return (
        <Layout>
            <body>
                <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-1034524975771842"
                    crossOrigin="anonymous" />
            <Component {...pageProps} />
            </body>
        </Layout>
    );
}

export default MyApp;
