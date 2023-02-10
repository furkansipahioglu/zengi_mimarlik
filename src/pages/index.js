import Head from 'next/head'
import Navbar from '../../components/navbar'
import Footer from '../../components/footer'
import Hero from '../../components/home/hero'
import Project from '../../components/home/project'

export default function Home() {
  return (
    <>
      <Head>
        <title>Zengi Mimarlık</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar />
      <main>
          <Hero/>
          <Project/>
      </main>
      <Footer/>
    </>
  )
}

