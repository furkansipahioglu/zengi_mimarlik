import Image from "next/image";
import { Grid } from "@nextui-org/react";
import "lightbox.js-react/dist/index.css";
import { SlideshowLightbox } from "lightbox.js-react";

export default function index() {

  const projectImage = [
    {
      src: "/images/1.jpg",
      alt: "Zengi Mimarlık Gallery Image 1",
    },
    {
      src: "/images/2.jpg",
      alt: "Zengi Mimarlık Gallery Image 2",
    },
    {
      src: "/images/3.jpg",
      alt: "Zengi Mimarlık Gallery Image 3",
    },
    {
      src: "/images/4.jpg",
      alt: "Zengi Mimarlık Gallery Image 4",
    },
    {
      src: "/images/5.jpg",
      alt: "Zengi Mimarlık Gallery Image 5",
    },
    {
      src: "/images/6.jpg",
      alt: "Zengi Mimarlık Gallery Image 6",
    },
  ];


  return (
    <section className='project'>
        <div className='container py-10 mx-auto text-center'>
            <div className='project-description'>
                <div className="px-10">
                  <p>İstanbul Riva'da, Düşler Vadisi içerisinde bulunan konut projesi ihtiyaçları, yapının hacimsel ve çevresel özellikleri baz alıarak tasarlanmıştır.</p>
                  <p>Özellikle zemin katta iç içe geçmiş mekanların birbiri ile olan ilişkisinde kullanıcıya akıcı ve örtlük bir yön verilmeye çalışılmıştır.</p>
                  <p>Kullanıcıyı yormayan renk ve malzemeler tercih edilmesinin yanı sıra estetik algıyı yükseltecek modern çizgide dekoratif elemanlar tercih edilmiş, hacimsel detaylarla zenginleştirilmeye çalışılmıştır.</p>
                </div>
                <div className="pt-20 project-wrapper">
                  <div className="project-item">
                    <h2 className="pb-10 text-3xl text-center">S.E Villa Projesi</h2>
                    <SlideshowLightbox
                      theme="day"
                      lightboxIdentifier="lightbox1"
                      animateThumbnails={true}
                      framework="next"
                      imgAnimation="fade"
                      showThumbnails="true"
                      backgroundColor="white"
                      key={projectImage}
                      iconColor="silver"
                      thumbnailBorder="silver"
                      thumbnail={true}
                      
                    >
                      <Grid.Container justify="center" className="overflow-hidden lg:px-20">
                        {projectImage.map((image) => {
                          return (
                            <Grid xs={12} sm={6} key={index} className='p-3 overflow-hidden '>
                              <Image
                                src={image.src}
                                alt={image.alt}
                                data-lightboxjs="lightbox1"
                                width={700}
                                height={500}
                                className="max-w-full overflow-hidden duration-300 ease-in hover:scale-105"
                              />
                            </Grid>
                          );
                        })}
                      </Grid.Container>
                    </SlideshowLightbox>
                  </div>
                </div>
            </div>
        </div>
    </section>
  )
}
