import Head from 'next/head'
import Link from 'next/link'
import Image from 'next/image'

const NotFound = () => {
    return (
        <>
            <Head>
                <title>Page Not Found</title>
                <meta name="description" content="Page Not found"></meta>
                <meta name="author" content="Eduard Krivovyashchuk"></meta>
                <meta name="viewport" content="width=device-width, initial-scale=1.0"></meta>
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <div className="w-full h-full md:pt-24 flex flex-col items-center justify-center">
                <Image
                    src="/img/404.png"
                    alt="Page Not Found"
                    width={300}
                    height={300}
                />
                <div className="text-9xl font-extrabold main-text-color pt-8">
                    404
                </div>
                <div className="text-xl text-gray-700 dark:text-gray-400">
                    Do you see page? I too...
                </div>
            </div >
        </>
    )
}

export default NotFound