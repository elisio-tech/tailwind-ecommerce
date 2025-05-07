import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore from "swiper";
import { Navigation } from "swiper/modules";
import "swiper/swiper-bundle.css";

import { useState, useRef } from "react";
import type { Swiper as SwiperType } from "swiper";
import { products } from "../data/products";
import { ArrowLeft2, ArrowRight2 } from "iconsax-reactjs";

// Ativa os módulos que você for usar
SwiperCore.use([Navigation]);

export default function Trend() {
  const swiperRef = useRef<SwiperType | null>(null);

  const [activeColor, setActiveColor] = useState(
    products.map((p) => p.colors[0])
  );

  return (
    <section className="pt-24 bg-zinc-100">
      <div className="mx-auto lg:max-w-4xl xl:max-w-6xl pb-8">
        <div className="flex justify-between items-center mb-4">
          <h1 className="text-5xl font-semibold mb-8">Trending Now</h1>
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
            1024: { slidesPerView: 4 },
          }}
        >
          {products.map((product, productIndex) => (
            <SwiperSlide key={productIndex}>
              <div className="cursor-pointer mb-4">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover mb-4"
                />
                <div>
                  <h3 className="text-lg">{product.name}</h3>
                  <h4 className="text-zinc-600 mb-4">
                    ${product.price.toFixed(2)}
                  </h4>
                  <div className="flex gap-x-2 ">
                    {product.colors.map((color, colorIndex) => {
                      const isActive = activeColor[productIndex] === color;
                      return (
                        <div
                          key={colorIndex}
                          onClick={() => {
                            const newColors = [...activeColor];
                            newColors[productIndex] = color;
                            setActiveColor(newColors);
                          }}
                          className={`w-5 h-5 flex justify-center items-center rounded-full border-2 transition 
                            ${
                              isActive
                                ? "border-black scale-110"
                                : "border-gray-300"
                            }`}
                        >
                          <button
                            className="w-3 h-3 rounded-full"
                            style={{ backgroundColor: color.toLowerCase() }}
                            aria-label={color}
                          />
                        </div>
                      );
                    })}
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}
