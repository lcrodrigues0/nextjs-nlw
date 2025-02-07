import Document, { Html, Head, Main, NextScript } from 'next/document';

export default class MyDocument extends Document {
    render() {
        return(
            <Html>
                <Head>
                    <link rel="icon" href="/icons/m-icon.png" />
                    <link rel="preconnect" href="https://fonts.googleapis.com"/>
                    <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin=''/>
                    <link href="https://fonts.googleapis.com/css2?family=Inter:wght@100..900&family=Rajdhani:wght@300;400;500;600;700&display=swap" rel="stylesheet"/>
                </Head>

                <body>
                    <Main/>
                    <NextScript/>
                </body>
            </Html>
        )
    }
}