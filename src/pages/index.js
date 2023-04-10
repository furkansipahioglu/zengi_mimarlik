import Head from 'next/head'
import Layout from '../components/layout'
import Hero from '../components/home/hero'
import Project from '../components/home/project'
import GalleryHome from '../components/home/galleryHome'

export default function Home() {
  return (
    <Layout>
        <Head>
          <title>Zengi Mimarlık | Anasayfa</title>
          <meta name="description" content="Generated by create next app" />
          <link rel="icon" href="/favicon.ico" />
          <link rel="preconnect" href="https://fonts.googleapis.com"/>
          <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin/>
          <link href="https://fonts.googleapis.com/css2?family=Raleway:wght@300;400;500&display=swap" rel="stylesheet"/>
        </Head>
          <Hero/>
          <GalleryHome/>
    </Layout>
  )
}
