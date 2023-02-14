import Slider from "../slider";

export default function Hero() {
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
    <section className="relative home-slider h-[600px] md:h-[800px]">
        <Slider slides={slides} />
    </section>
  );
}
