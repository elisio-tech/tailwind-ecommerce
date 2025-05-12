import { Trash } from "iconsax-reactjs";
import { useCart } from "../../context/ShopContext";

export default function ShoppingCart() {
  const {
    isCartOpen,
    toggleCart,
    cart,
    removeFromCart,
    updateQuantity,
    getTotalPrice,
  } = useCart();

  const handleRemoveFromCart = (productId: string) => {
    removeFromCart(productId);
  };

  const handleQuantityChange = (productId: string, quantity: number) => {
    updateQuantity(productId, quantity);
  };

  return (
    <div
      className={`transition-all fixed top-0 right-0 left-0 z-50 h-full ${
        isCartOpen ? "" : "hidden"
      }`}
    >
      <div className="grid grid-cols-[2fr_1fr] h-full">
        <div className="bg-zinc-700/50 w-full h-full " onClick={toggleCart} />
        <div className="bg-white pt-6 px-6 relative overflow-y-auto order-1 right-0">
          <div className="flex justify-between items-center w-full mb-4">
            <h3 className="text-md text-zinc-600">Your Bag</h3>
            <button
              onClick={toggleCart}
              className="relative cursor-pointer flex justify-center items-center bg-zinc-400 w-10 h-10 rounded-full"
            >
              <div className="absolute w-5 h-[1px] bg-white rotate-45" />
              <div className="absolute w-5 h-[1px] bg-white -rotate-45" />
            </button>
          </div>

          {cart.length === 0 ? (
            <p className="text-gray-600">Your bag is currently empty.</p>
          ) : (
            <div className="overflow-y-auto">
              <ul>
                {cart.map((item) => (
                  <li key={item.product.id} className="py-4  flex items-center">
                    <img
                      src={item.product.image}
                      alt={item.product.name}
                      className="w-20 h-20 object-cover rounded mr-4"
                    />
                    <div className="flex-grow">
                      <h5 className="text-zinc-600 xl:text-xl">
                        {item.product.name}
                      </h5>

                      <p className="text-md text-zinc-600">
                        ${item.product.price}
                      </p>
                      <div className="flex items-center mt-2">
                        <label
                          htmlFor={`quantity-${item.product.id}`}
                          className="mr-2 text-sm"
                        >
                          Qty:
                        </label>
                        <input
                          type="number"
                          id={`quantity-${item.product.id}`}
                          className="w-16 text-center rounded text-sm"
                          value={item.quantity}
                          min="1"
                          onChange={(e) =>
                            handleQuantityChange(
                              item.product.id,
                              parseInt(e.target.value, 10)
                            )
                          }
                        />
                      </div>
                    </div>
                    <button
                      onClick={() => handleRemoveFromCart(item.product.id)}
                      className="cursor-pointer mr-2"
                    >
                      <Trash size={24} color="#000" />
                    </button>
                  </li>
                ))}
              </ul>

              <div className=" absolute bottom-0 right-0 left-0 pt-6 border-t border-gray-300 mt-4">
                <div className="flex flex-col mx-8 ">
                  <div className="flex justify-between items-center">
                    <span className="text-zinc-600">Subtotal</span>
                    <span className="text-lg">
                      ${getTotalPrice().toFixed(2)}
                    </span>
                  </div>
                  <p className="text-sm text-gray-600 mb-4">
                    Shipping & taxes calculated at checkout
                  </p>
                  <button className="cursor-pointer mb-6 bg-zinc-900 text-white py-3 px-6 rounded-4xl w-full hover:bg-zinc-800 focus:outline-none focus:ring-2 focus:ring-zinc-500">
                    Proceed to Checkout
                  </button>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
