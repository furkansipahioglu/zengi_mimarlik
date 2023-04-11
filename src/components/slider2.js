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
        {slides.map((slide, index) => {
          return (
            <SwiperSlide key={index}>
              <div className=" item-inner">
                <div className="relative z-10 item-image">
                  <Image
                    alt={slide.title}
                    src={slide.image}
                    width={1920}
                    height={600}
                    className="h-[600px] md:h-[450px] w-full brightness-75 object-cover "
                  />
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
