import React, { createContext, useState, useContext } from 'react';
import { database, DatabaseItem as ProductType } from '../data/products'; // Import the typed DatabaseItem and rename it

interface CartItem {
  product: ProductType & { id: string }; 
  quantity: number;
}

interface CartContextType {
  products: (ProductType & { id: string })[]; // Ensure products have an id
  cart: CartItem[];
  addToCart: (product: ProductType) => void;
  removeFromCart: (productId: string) => void;
  updateQuantity: (productId: string, quantity: number) => void;
  getTotalPrice: () => number;
}

const defaultCartContext: CartContextType = {
  products: [],
  cart: [],
  addToCart: () => {},
  removeFromCart: () => {},
  updateQuantity: () => {},
  getTotalPrice: () => 0,
};

const CartContext = createContext<CartContextType>(defaultCartContext);

export const useCart = () => useContext(CartContext);

export const CartProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [products] = useState<(ProductType & { id: string })[]>(
    database.map((product, index) => ({ ...product, id: String(index) })) // Add a temporary ID
  );

  const [cart, setCart] = useState<CartItem[]>([]);

  const addToCart = (product: ProductType) => {
    // Need to find the product with an ID from the products state
    const productWithId = products.find((p) => p.name === product.name);

    if (productWithId) {
      const itemInCart = cart.find((item) => item.product.id === productWithId.id);

      if (itemInCart) {
        setCart(
          cart.map((item) =>
            item.product.id === productWithId.id
              ? { ...item, quantity: item.quantity + 1 }
              : item
          )
        );
      } else {
        setCart([...cart, { product: productWithId, quantity: 1 }]);
      }
    }
  };

  const removeFromCart = (productId: string) => {
    setCart(cart.filter((item) => item.product.id !== productId));
  };

  const updateQuantity = (productId: string, quantity: number) => {
    if (quantity > 0) {
      setCart(
        cart.map((item) =>
          item.product.id === productId ? { ...item, quantity } : item
        )
      );
    } else {
      removeFromCart(productId);
    }
  };

  const getTotalPrice = () => {
    return cart.reduce(
      (total, item) => total + item.product.price * item.quantity,
      0
    );
  };

  return (
    <CartContext.Provider
      value={{
        products,
        cart,
        addToCart,
        removeFromCart,
        updateQuantity,
        getTotalPrice,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};