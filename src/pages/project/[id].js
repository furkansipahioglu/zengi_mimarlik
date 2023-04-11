import { getPostDetails, getPostIdList } from '../../lib/project';
import Layout from "@/components/layout"
import Head from "next/head"
import { useRef } from "react";
import "swiper/css";
import "swiper/css/navigation";
import Image from "next/image";
import { Grid } from "@nextui-org/react";
import "lightbox.js-react/dist/index.css";
import { SlideshowLightbox } from "lightbox.js-react";

export async function getStaticPaths() {
    const paths = await getPostIdList();
    return {
      paths,
      fallback: false,
    };
  }

  export async function getStaticProps({ params }) {
    const postData = await getPostDetails(params.id);
    return {
      props: {
        postData,
      },
    };
  }

  // const slides = [
  //   {
  //     id: 1,
  //     title: "RIVA VILLA PROJESİ",
  //     image: "/images/detail.jpg",
  //   },
    // {
    //   id: 2,
    //   title: "RIVA VILLA PROJESİ2",
    //   image: "/images/2.jpg",
    // },
    // {
    //   id: 3,
    //   title: "RIVA VILLA PROJESİ3",
    //   image: "/images/3.jpg",
    // },
    // {
    //   id: 4,
    //   title: "RIVA VILLA PROJESİ4",
    //   image: "/images/4.jpg",
    // },
  // ];

export default function Post({ postData }) {

  const swiperRef = useRef(null);
    return (
      <Layout>
      <Head>
          <title>Zengi Mimarlık | Proje</title>
          <meta name="description" content="Generated by create next app" />
          <link rel="icon" href="/favicon.ico" />
          <link rel="preconnect" href="https://fonts.googleapis.com"/>
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin/>
        <link href="https://fonts.googleapis.com/css2?family=Raleway:wght@300;400;500&display=swap" rel="stylesheet"/>
      </Head>
      
     
       
        
              <div className=" item-inner">
                <div className="relative z-10 item-image">
                  <Image
                    src={postData[0][0].image}
                    width={1920}
                    height={600}
                    className="h-[600px] md:h-[450px] w-full brightness-75 object-cover hidden sm:block"
                  />
                  
                  <Image
                    src={postData[0][0].imagemobile}
                    width={1920}
                    height={600}
                    className="h-[600px] md:h-[450px] w-full brightness-75 object-cover sm:hidden  "
                  />
                </div>
                {/* <div className="absolute z-20 px-5 transform -translate-x-1/2 -translate-y-1/2 item-content bottom-10 md:bottom-40 md:px-0 w-96 left-1/2">
                  <h1 className="text-4xl font-bold tracking-wide text-white uppercase">
                    {slide.title}
                  </h1>
                  <Link
                    href="/"
                    className="flex items-center justify-center h-10 py-6 my-4 font-medium tracking-wide uppercase bg-opacity-75 rounded-full bg-slate-200"
                  >
                    PROJEYI GÖRÜNTÜLE
                  </Link>
                </div> */}
              </div>
          
          
     
    
              <section className="px-5 py-10 project-page lg:px-0">
      <div className="container py-10 mx-auto text-center">
      <div className="px-10 pb-20">
                  <p>İstanbul Riva'da, Düşler Vadisi içerisinde bulunan konut projesi ihtiyaçları, yapının hacimsel ve çevresel özellikleri baz alıarak tasarlanmıştır.</p>
                  <p>Özellikle zemin katta iç içe geçmiş mekanların birbiri ile olan ilişkisinde kullanıcıya akıcı ve örtlük bir yön verilmeye çalışılmıştır.</p>
                  <p>Kullanıcıyı yormayan renk ve malzemeler tercih edilmesinin yanı sıra estetik algıyı yükseltecek modern çizgide dekoratif elemanlar tercih edilmiş, hacimsel detaylarla zenginleştirilmeye çalışılmıştır.</p>
                </div>
        <div className="project-item">
          <h2 className="pb-10 text-2xl font-medium tracking-wider text-center text-red-700 uppercase">projeler</h2>
          <SlideshowLightbox
            theme="day"
            lightboxIdentifier="lightbox1"
            animateThumbnails={true}
            framework="next"
            imgAnimation="fade"
            showThumbnails="true"
            backgroundColor="white"
            key={postData}
            iconColor="silver"
            thumbnailBorder="silver"
            thumbnail={true}
          >
            <Grid.Container gap={2} justify="center" className="lg:px-20">
              {postData[1].map((item) => {
                return (
                  <Grid xs={12} sm={6} lg={4} key={item}>
                    <div className="relative flex flex-col items-center justify-between w-full overflow-hidden duration-300 ease-in-out group" style={{maxHeight:"250px"}}>
                    
                    <Image
                      src={item.src}
                      alt={item.alt}
                      data-lightboxjs="lightbox1"
                      width={700}
                      height={400}
                      className="duration-700 ease-in-out group-hover:scale-110 group-hover:brightness-75"
                      
                    />
                   {/* <div   className="absolute hidden w-full h-full overlay group-hover:block" style={{backgroundColor:" rgba(0,0,0,.4)"}}></div> */}
                  <div className="absolute bottom-0 w-full duration-300 ease-in-out group-hover:bottom-5">
                  <div className="hidden p-1 group-hover:block">
                    <div className="flex items-center justify-between w-full border-b-2 border-gray-200">
                        <p className="text-sm text-white">{item.location}</p>
                        <p className="text-sm text-white">{item.year}</p>
                      </div>
                      <div className="flex items-center justify-between w-full">
                      <p className="text-sm text-white text-start">{item.project_name}</p>
                      <p className="text-sm text-white text-start">{item.project_location}</p>
                      </div>
                    </div>
                  </div>
                  
                  </div>

                  </Grid>
                );
              })}
            </Grid.Container>
          </SlideshowLightbox>
        </div>
      </div>
    </section>


  </Layout>
    );
  }


