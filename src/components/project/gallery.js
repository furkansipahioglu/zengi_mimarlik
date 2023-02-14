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
      location: 'İstanbul',
      year: '2020',
      project_name: 'E.A Villa Projesi',
    },
  ];

  return (
    <section className="project-page px-5 lg:px-0 py-10">
      <div className="container mx-auto text-center py-10">
        <div className="project-item">
          <h2 className="text-2xl text-center pb-10 text-red-700 uppercase font-medium tracking-wider">projeler</h2>
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
                    <div className="flex flex-col items-center justify-between">
                    <Image
                      src={item.src}
                      alt={item.alt}
                      data-lightboxjs="lightbox1"
                      width={700}
                      height={400}
                    />

                  <div className="w-full p-1">
                    <div className="flex w-full justify-between items-center border-b-2 border-gray-200">
                        <p className="text-sm text-gray-500">{item.location}</p>
                        <p className="text-sm text-gray-500">{item.year}</p>
                      </div>
                      <p className="text-sm text-gray-500 text-start">{item.project_name}</p>
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
