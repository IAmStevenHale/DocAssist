import '../styles/globals.css';
import type { AppProps } from 'next/app';
import Layout from './Layout';

function MyApp({ Component, pageProps }: AppProps) {
    return (
        <Layout>
            <>
                <head>
                    <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-1034524975771842"
                        crossOrigin="anonymous" />
                </head>
                <Component {...pageProps} />
            </>
        </Layout>
    );
}

export default MyApp;
