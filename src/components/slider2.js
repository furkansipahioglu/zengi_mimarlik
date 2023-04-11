import { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper";
import Image from "next/image";
import Link from "next/link";
import { BsFillCaretLeftFill, BsFillCaretRightFill,BsArrowLeftCircleFill,BsArrowRightCircleFill,BsArrowLeftCircle,BsArrowRightCircle } from "react-icons/bs";


export default function slider2({ slides, shown }) {
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
              <div className=" item-inner">
                <div className="relative z-10 item-image">
                  <Image
                    src={slide.image}
                    width={1920}
                    height={600}
                    className="h-[600px] md:h-[450px] w-full brightness-75 object-cover "
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
