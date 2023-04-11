import Image from "next/image";
import { Grid } from "@nextui-org/react";
import "lightbox.js-react/dist/index.css";
import { SlideshowLightbox } from "lightbox.js-react";

export default function gallery() {
  
  const projectImage = [
    {
      src: "/images/1.jpg",
      alt: "Zengi Mimarlık Gallery Image 1",
      location: 'İstanbul',
      year: '2020',
      project_name: 'S.E Villa Projesi',
    },
    {
      src: "/images/2.jpg",
      alt: "Zengi Mimarlık Gallery Image 2",
      location: 'İstanbul3',
      year: '2020',
      project_name: 'E.A Villa Projesi',
    },
    {
      src: "/images/3.jpg",
      alt: "Zengi Mimarlık Gallery Image 3",
      location: 'İstanbul2',
      year: '2020',
      project_name: 'E.A Villa Projesi',
    },
    {
      src: "/images/4.jpg",
      alt: "Zengi Mimarlık Gallery Image 4",
      location: 'İstanbuls',
      year: '2020',
      project_name: 'E.A Villa Projesi',
    },
    {
      src: "/images/5.jpg",
      alt: "Zengi Mimarlık Gallery Image 5",
      location: 'İstanbul',
      year: '2020',
      project_name: 'E.A Villa Projesi',
    },
    {
      src: "/images/6.jpg",
      alt: "Zengi Mimarlık Gallery Image 6",
      location: 'İstanbul',
      year: '2020',
      project_name: 'E.A Villa Projesi',
    },
  ];

  return (
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
            key={projectImage}
            iconColor="silver"
            thumbnailBorder="silver"
            thumbnail={true}
          >
            <Grid.Container gap={2} justify="center" className="lg:px-20">
              {projectImage.map((item, index) => {
                return (
                  <Grid xs={12} sm={6} lg={4} key={index}>
                    <div className="relative flex flex-col items-center justify-between overflow-hidden duration-300 ease-in-out group">
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
                      <p className="text-sm text-white text-start">{item.project_name}</p>
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
  );
}
