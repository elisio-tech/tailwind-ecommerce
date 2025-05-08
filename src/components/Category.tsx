import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore from "swiper";
import { Navigation } from "swiper/modules";
import "swiper/swiper-bundle.css";

import { useRef } from "react";
import type { Swiper as SwiperType } from "swiper";
import { products } from "../data/products";
import { ArrowLeft2, ArrowRight2 } from "iconsax-reactjs";
import { Categories } from "../data/category";

SwiperCore.use([Navigation]);

export default function Category() {
  const swiperRef = useRef<SwiperType | null>(null);

  return (
    <section className="pt-24">
      <div className="mx-auto lg:max-w-4xl xl:max-w-6xl pb-24">
        <div className="flex justify-between items-center mb-4">
          <h1 className="text-5xl font-semibold mb-8">Category</h1>
          <div className="flex gap-2">
            <button
              className="hover:bg-zinc-800 transition-all cursor-pointer w-14 h-14 flex justify-center items-center rounded-full bg-zinc-300"
              onClick={() => swiperRef.current?.slidePrev()}
            >
              <ArrowLeft2 size={20} color="#fff" />
            </button>
            <button
              className="hover:bg-zinc-800 transition-all cursor-pointer w-14 h-14 flex justify-center items-center rounded-full bg-zinc-300"
              onClick={() => swiperRef.current?.slideNext()}
            >
              <ArrowRight2 size={20} color="#fff" />
            </button>
          </div>
        </div>
        <Swiper
          onSwiper={(swiper) => (swiperRef.current = swiper)}
          spaceBetween={20}
          slidesPerView={1.2}
          breakpoints={{
            640: { slidesPerView: 2 },
            768: { slidesPerView: 3 },
          }}
        >
          {Categories.map((category, i) => (
            <SwiperSlide key={i}>
              <div className="cursor-pointer mb-4">
                <img
                  src={category.image}
                  alt={category.name}
                  className="w-full h-full object-cover mb-4"
                />
                <div>
                  <h3 className="text-lg">{category.name}</h3>
                  <h4 className="text-zinc-600 mb-4">
                    Shop
                  </h4>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}
