import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { banners as data } from "@/exam8-data/db.json";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "./ui/carousel";

interface SlideData {
  title: string;
  img: string;
  type: string;
}

const CarouselBanner: React.FC<SlideData> = () => {
  return (
    <Carousel className="w-[900px]">
      <CarouselContent>
        {data.map((item, index) => (
          <CarouselItem
            key={index}
            className={index === Math.floor(data.length / 2) ? "center" : ""}
          >
            <div className="flex w-full justify-center items-center">
              <div className="mt-5">
                <img
                  className="center-image"
                  src={item.img}
                  alt={item.title}
                  width={800}
                  height={350}
                />
              </div>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  );
};

export default CarouselBanner;
