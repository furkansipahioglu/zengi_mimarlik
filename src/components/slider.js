import { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper";
import Image from "next/image";
import Link from "next/link";
import { BsFillCaretLeftFill, BsFillCaretRightFill } from "react-icons/bs";

export default function slider({ slides }) {
const swiperRef = useRef(null);

  return (
    <>
      <Swiper
        ref={swiperRef}
        modules={[Navigation]}
        className="mySwiper h-full"
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
              <div className="item-inner h-full">
                <div className="item-image z-10 relative">
                  <Image
                    src={slide.image}
                    width={1920}
                    height={900}
                    className="h-[600px] md:h-[800px] w-full brightness-75 object-cover"
                  />
                </div>
                <div className="item-content absolute bottom-10 md:bottom-40 px-5 md:px-0 w-96 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-20">
                  <h1 className="text-4xl font-bold text-white uppercase tracking-wide">
                    {slide.title}
                  </h1>
                  <Link
                    href="/"
                    className="uppercase bg-slate-200 flex justify-center items-center h-10 rounded-full my-4 py-6 bg-opacity-75 font-medium tracking-wide"
                  >
                    PROJEYI GÖRÜNTÜLE
                  </Link>
                </div>
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>
      <div>
        <button
          className="absolute bottom-10 md:bottom-1/2 z-40 left-10"
          onClick={() => swiperRef.current?.slidePrev()}
        >
          <BsFillCaretLeftFill className="text-7xl text-white opacity-40 accent-violet-200" />
        </button>
        <button
          className="absolute bottom-10 md:bottom-1/2 z-40 right-10"
          onClick={() => swiperRef.current?.slideNext()}
        >
          <BsFillCaretRightFill className="text-7xl text-white opacity-40 accent-violet-200" />
        </button>
      </div>
    </>
  );
}
