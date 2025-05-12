import { useState } from "react";
import { useCart } from "../context/ShopContext";
import { Bag2 } from "iconsax-reactjs";

export default function ProductsPage() {
  const { products, addToCart } = useCart();

  const [activeColor, setActiveColor] = useState(
    products.map((p) => p.colors[0])
  );

  const [filter, setFilter] = useState("all");

  const filteredProducts =
    filter === "all"
      ? products
      : products.filter((product) => product.category.includes(filter));

  return (
    <section className=" mx-auto pt-44 lg:max-w-4xl xl:max-w-6xl relative">
      <div className="grid grid-cols-[200px_3fr] gap-8 ">
        <div>
          <div className="sticky left-0 top-44">
            <h2 className="text-xl text-zinc-400 mb-8 ">Filter by Category</h2>
            <div className="flex flex-col gap-2 text-left ">
              {["all", ...new Set(products.map((p) => p.category))].map(
                (category, index) => (
                  <h2
                    key={index}
                    className={`text-xl xl:text-2xl cursor-pointer ${
                      filter === category ? "text-zinc-900" : "text-zinc-400"
                    }`}
                    onClick={() => setFilter(category)}
                  >
                    {category}
                  </h2>
                )
              )}
            </div>
          </div>
        </div>

        <div className="grid grid-cols-3 gap-4">
          {filteredProducts.map((product, productIndex) => (
            <div key={productIndex}>
              <div className="mb-4 relative">
               <button onClick={()=> addToCart(product)} className="cursor-pointer">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover mb-4"
                />
                </button>
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
                    <div className="w-8 h-8 bg-white rounded-md flex justify-center items-center shadow-2xl cursor-pointer absolute top-3 left-3 ">
                      <Bag2 size="20" color="#000" variant="Bold" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
