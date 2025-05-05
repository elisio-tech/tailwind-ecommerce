import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.css";
import { products } from "../data/products";
import { useState } from "react";

export default function Trend() {
  // Estado guarda índice do produto e cor ativa
  const [activeColor, setActiveColor] = useState(
    products.map((p) => p.colors[0]) 
  );

  return (
    <section className="pt-24 bg-zinc-200">
      <div className="mx-auto max-w-4xl pb-8">
        <h1 className="text-5xl font-semibold mb-8">Trending Now</h1>
        <Swiper
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
              <div className="cursor-pointer">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-64 object-cover"
                />
                <div className="p-4">
                  <h3 className="text-lg">{product.name}</h3>
                  <h4 className="text-zinc-600 mb-4">
                    ${product.price.toFixed(2)}
                  </h4>
                  <div className="flex gap-x-2">
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
