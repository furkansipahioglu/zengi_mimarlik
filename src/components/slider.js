import { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper";
import Image from "next/image";
import Link from "next/link";
import { BsFillCaretLeftFill, BsFillCaretRightFill,BsArrowLeftCircleFill,BsArrowRightCircleFill,BsArrowLeftCircle,BsArrowRightCircle } from "react-icons/bs";


export default function slider({ slides, shown }) {
const swiperRef = useRef(null);

  return (
    <>
      <Swiper
        ref={swiperRef}
        modules={[Navigation]}
        className="h-full mySwiper"
        spaceBetween={50}
        slidesPerView={1}
        onSlideChange={() => console.log("slide change")}
        onSwiper={(swiper) => console.log(swiper)}
        onBeforeInit={(swiper) => {
          swiperRef.current = swiper;
        }}
      >
        {slides.map((slide) => {
          return (
            <SwiperSlide key={slide.id}>
              <div className="h-full item-inner">
                <div className="relative z-10 item-image">
                  <Image
                    src={slide.image}
                    width={1920}
                    height={900}
                    className="h-[600px] md:h-screen w-full brightness-75 object-cover"
                  />
                </div>
                <div className="absolute z-20 flex flex-col items-center justify-center px-5 transform -translate-x-1/2 -translate-y-1/2 item-content bottom-10 md:bottom-40 md:px-0 left-1/2 w-100">
                  <h1 className="text-5xl font-bold tracking-wide text-white uppercase">
                    {slide.title}
                  </h1>
                  <Link
                    href={`/project/${slide.id}`}
                    className="flex items-center justify-center w-1/2 h-10 py-6 my-4 font-medium tracking-wide uppercase duration-500 ease-in-out bg-opacity-75 rounded-full bg-slate-200 hover:text-slate-200 hover:bg-black"
                  >
                    PROJEYI GÖRÜNTÜLE
                  </Link>
                </div>
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>
      {shown &&<div>
        <button
          className="absolute z-40 bottom-10 md:bottom-1/2 left-10 "
          onClick={() => swiperRef.current?.slidePrev()}
        >
          <BsArrowLeftCircle className="text-white text-7xl opacity-40 accent-violet-200" />
        </button>
        <button
          className="absolute z-40 bottom-10 md:bottom-1/2 right-10"
          onClick={() => swiperRef.current?.slideNext()}
        >
          <BsArrowRightCircle className="text-white text-7xl opacity-40 accent-violet-200" />
        </button>
      </div>}
    </>
  );
}
