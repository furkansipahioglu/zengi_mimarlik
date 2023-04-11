import Image from "next/image";
import { Grid } from "@nextui-org/react";
import "lightbox.js-react/dist/index.css";
import { SlideshowLightbox } from "lightbox.js-react";
import Link from "next/link";

export default function galleryHome() {
  
  const projectImage = [
    
    {
      id:2,
      src: "/images/ann-villa/annvilla001.jpg",
      alt: "Zengi Mimarlık Gallery Image 2",
      location: 'İstanbul / Riva',
      year: '2022',
      project_name: 'Düşler Vadisi A.N.N Villa',
    },
    {
      id:1,
      src: "/images/ankara-villa/ankaravilla001.jpg",
      alt: "Zengi Mimarlık Gallery Image 1",
      location: 'Ankara',
      year: '2021',
      project_name: 'K.A Villa Projesi',
      
    },
    {
      id:3,
      src: "/images/proje-5/STK(2).JPG",
      alt: "Zengi Mimarlık Gallery Image 3",
      location: 'İstanbul/Eyüp',
      year: '2021',
      project_name: 'S.T.K Yönetim Ofisi',
    },
    {
      id:4,
      src: "/images/proje-7/studyo001.jpg",
      alt: "Zengi Mimarlık Gallery Image 4",
      location: 'İstanbul/Eyüp',
      year: '2021',
      project_name: 'S.T.K Yönetim Ofisi',
    },
    {
      id:5,
      src: "/images/comingsoon.jpg",
      alt: "Zengi Mimarlık Gallery Image 5",
      location: 'İstanbul',
      year: '2021',
      project_name: 'E.A Villa Projesi',
    },
    {
      id:6,
      src: "/images/comingsoon.jpg",
      alt: "Zengi Mimarlık Gallery Image 6",
      location: 'İstanbul',
      year: '2020',
      location: 'İstanbul',
      year: '2020',
      project_name: 'E.A Villa Projesi',
    },
  ];

  return (
    <section className="px-5 py-10 project-page lg:px-0">
      <div className="container py-10 mx-auto text-center">
        
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
              {projectImage.map((item) => {
                return (
                  <Grid xs={12} sm={6} lg={4} key={item}>
                    <div className="flex flex-col items-center justify-center ">
                      <div className="overflow-hidden duration-300 ease-in-out">
                       <Link href={`/project/${item.id}`}>
                      <Image
                      src={item.src}
                      alt={item.alt}
                      
                      width={700}
                      height={400}
                      className="duration-500 ease hover:scale-125"
                      
                    />
                    </Link>
                      </div>
                    

                  <div className="w-full p-1 bottom-5">
                    <div className="flex items-center justify-between w-full border-b-2 border-gray-200">
                        <p className="text-sm text-gray-500">{item.location}</p>
                        <p className="text-sm text-gray-500">{item.year}</p>
                      </div>
                      <div className="flex items-center justify-between w-full">
                      <p className="text-sm text-gray-500 text-start">{item.project_name}</p>
                      <p className="text-sm text-gray-500 text-start">{item.project_location}</p>
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
