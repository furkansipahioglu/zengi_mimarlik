import Layout from "@/components/layout"
import Head from "next/head"
import Slider from "@/components/slider"
import Project from "@/components/project/gallery"


export default function project() {

  const slides = [
    {
      id: 1,
      title: "RIVA VILLA PROJESİ",
      image: "/images/1.jpg",
    },
    {
      id: 2,
      title: "RIVA VILLA PROJESİ2",
      image: "/images/2.jpg",
    },
    {
      id: 3,
      title: "RIVA VILLA PROJESİ3",
      image: "/images/3.jpg",
    },
    {
      id: 4,
      title: "RIVA VILLA PROJESİ4",
      image: "/images/4.jpg",
    },
  ];

  return (
    <Layout>
        <Head>
            <title>Zengi Mimarlık | Proje</title>
            <meta name="description" content="Generated by create next app" />
            <link rel="icon" href="/favicon.ico" />
        </Head>
        <Slider slides={slides} />
        <Project/>  


    </Layout>
  )
}
