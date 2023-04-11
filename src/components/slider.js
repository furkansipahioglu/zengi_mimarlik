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
        {slides.map((slide, index) => {
          return (
            <SwiperSlide key={index}>
              <div className="lg:h-full item-inner">
                <div className="relative z-10 item-image">
                  <Image
                    alt={slide.title}
                    src={slide.image}
                    width={1920}
                    height={900}
                    className="h-[600px] md:h-screen w-full brightness-75 object-cover"
                  />
                </div>
                <div className="absolute z-20 flex flex-col items-center justify-center w-full px-5 text-center transform -translate-x-1/2 -translate-y-1/2 md:w-1/3 top-2/3 lg:top-2/3 item-content md:bottom-40 md:px-0 left-1/2 ">
                  <h1 className="text-3xl font-bold text-white uppercase texttracking-wide lg:text-5xl">
                    {slide.title}
                  </h1>
                  <Link
                    href={`/project/${slide.id}`}
                    className="flex items-center justify-center w-4/6 h-10 py-6 my-4 font-medium tracking-wide uppercase duration-500 ease-in-out bg-opacity-75 rounded-full bg-slate-200 hover:text-slate-200 hover:bg-black md:w1/2"
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
          className="absolute z-40 hidden bottom-10 md:bottom-1/2 left-10 xl:block"
          onClick={() => swiperRef.current?.slidePrev()}
        >
          <BsArrowLeftCircle className="text-white text-7xl opacity-40 accent-violet-200" />
        </button>
        <button
          className="absolute z-40 hidden bottom-10 md:bottom-1/2 right-10 xl:block"
          onClick={() => swiperRef.current?.slideNext()}
        >
          <BsArrowRightCircle className="text-white text-7xl opacity-40 accent-violet-200" />
        </button>
      </div>}
    </>
  );
}
