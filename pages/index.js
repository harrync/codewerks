import Head from 'next/head'
import Header from '@components/Header'
import Footer from '@components/Footer'

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>Codewerks</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Header title="Something new and shiny coming soon" />
        <p className="description">Hello
        </p>
      </main>

      <Footer />
    </div>
  )
}
