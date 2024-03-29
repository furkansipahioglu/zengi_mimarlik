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
                  alt='Post Data'
                    src={postData[0][0].image}
                    width={1920}
                    height={600}
                    className="h-[600px] md:h-[450px] w-full brightness-75 object-cover hidden sm:block"
                  />
                  
                  <Image
                    alt='Post Data'
                    src={postData[0][0].imagemobile}
                    width={1920}
                    height={600}
                    className="h-[600px] md:h-[450px] w-full brightness-75 object-cover sm:hidden  "
                  />
                </div>
              </div>
          
          
     
    
              <section className="px-5 py-10 project-page lg:px-0">
      <div className="container py-10 mx-auto text-center">
      <h1 className="pb-10 text-4xl font-medium tracking-wider text-center text-red-700 ">{postData[0][0].title}</h1>
      <div className="px-10 pb-20">
                  <p>İstanbul Riva'da, Düşler Vadisi içerisinde bulunan konut projesi ihtiyaçları, yapının hacimsel ve çevresel özellikleri baz alıarak tasarlanmıştır.</p>
                  <p>Özellikle zemin katta iç içe geçmiş mekanların birbiri ile olan ilişkisinde kullanıcıya akıcı ve örtlük bir yön verilmeye çalışılmıştır.</p>
                  <p>Kullanıcıyı yormayan renk ve malzemeler tercih edilmesinin yanı sıra estetik algıyı yükseltecek modern çizgide dekoratif elemanlar tercih edilmiş, hacimsel detaylarla zenginleştirilmeye çalışılmıştır.</p>
                </div>
        <div className="project-item">
        <h2 className="pb-10 text-3xl font-medium tracking-wider text-center text-red-700 ">Resimler</h2>
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
              {postData[1].map((item, index) => {
                return (
                  <Grid xs={12} sm={6} lg={4} key={index}>
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


