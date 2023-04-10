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
      id: 1,
      title: "RIVA VILLA PROJESİ",
      image: "/images/1.jpg",
    },
    {
      id: 2,
      title: "RIVA VILLA PROJESİ2",
      image: "/images/2.jpg",
    },
    {
      id: 3,
      title: "RIVA VILLA PROJESİ3",
      image: "/images/3.jpg",
    },
    {
      id: 4,
      title: "RIVA VILLA PROJESİ4",
      image: "/images/4.jpg",
    },
  ];

  return (
    <section className="relative home-slider h-[600px] md: h-screen" onMouseOver={handleMouseOver} onMouseOut={handleMouseOut}>
        <Slider slides={slides} shown={isShown} className="h-5/6"  />
    </section>
  );
}
