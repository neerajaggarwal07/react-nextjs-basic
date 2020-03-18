import Document, {Head, Main, NextScript} from "next/document";

export default class MyDocument extends Document {
    render(){
        return (
            <html>
                <Head>
                    <meta name="content" content="A site for my programming portfolio"></meta>
                    <meta charset="utf-8"></meta>
                    <meta name="robots" content="noindex, nofollow"></meta>
                    <meta name="viewport" content="width=device-width"></meta>
                    <link href="https://fonts.googleapis.com/css?family=Roboto+Slab&display=swap" rel="stylesheet"></link>
                 </Head>  

                 <body>
                    <Main />
                    <NextScript />
                </body> 
                <style global jsx>{`
                     body{
                        font-family : 'Roboto Slab', serif; 
                    }
                `}
                </style>
            </html>
        )
    }
}