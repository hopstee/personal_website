import React from 'react'
import Document, { Html, Head, Main, NextScript } from 'next/document'

class EDocument extends Document {
    render() {
        return (
            <Html>
                <Head />
                <body className="bg-gray-100 dark:bg-gray-900">
                    <Main />
                    <NextScript />
                </body>
            </Html>
        );
    }
}

export default EDocument;