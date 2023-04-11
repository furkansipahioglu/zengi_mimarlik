import Slider from "../slider";
import { useState } from "react";

export default function Hero() {

  // this state determines whether box B is shown or not
  const [isShown, setIsShown] = useState(false);

  // this function is called when the mouse hovers over box A
  const handleMouseOver = () => {
    setIsShown(true);
  }

  // this function is called when the mouse out box A
  const handleMouseOut = () => {
    setIsShown(false);
  }

  const slides = [
    {
      id: 2,
      title: "DÜŞLER VADİSİ A.N.N VİLLA",
      image: "/images/1.jpg",
    },
    {
      id: 1,
      title: "K.A VİLLA PROJESİ",
      image: "/images/ankara-villa/ankaravilla001.jpg",
    },
    {
      id: 3,
      title: "S.T.K YÖNETİM OFİSİ",
      image: "/images/proje-5/stk1.jpg",
    },
    {
      id: 4,
      title: "S.T.K YÖNETİM OFİSİ",
      image: "/images/proje-7/studyo001.jpg",
    },
  ];

  return (
    <section className="relative home-slider h-[600px] md:h-screen" onMouseOver={handleMouseOver} onMouseOut={handleMouseOut}>
        <Slider slides={slides} shown={isShown} className="h-5/6"  />
    </section>
  );
}
