import { Cart } from "../../components/cart";
import { ProductsList } from "../../components/product-list";
import { useState } from "react";
import { CartItemT, CartOperationT, ProductItemT } from "../../types";

type BookShopProps = {
  data: ProductItemT[];
};

export const BookShop = ({ data }: BookShopProps) => {
  const [cartItems, setCartItems] = useState<CartItemT[]>([]);

  const addItemToCart = (item: CartItemT) => {
    const existingItem = cartItems.find(
      (existingItem) => existingItem.id === item.id
    );
    if (!existingItem) {
      setCartItems([...cartItems, item]);
    } else {
      const updatedCartItems = cartItems.map((existingItem) => {
        if (existingItem.id === item.id) {
          return {
            ...existingItem,
            count: existingItem.count + item.count,
          };
        }
        return existingItem;
      });
      setCartItems(updatedCartItems);
    }
  };

  const updateCartItemCount = (item: CartItemT, operation: string) => {
    const existingItem = cartItems.find(
      (existingItem) => existingItem.id === item.id
    );
    if (!existingItem) {
      setCartItems([...cartItems, item]);
    } else {
      const updatedCartItems = cartItems.map((existingItem) => {
        if (existingItem.id === item.id) {
          if (operation === CartOperationT.increase) {
            return { ...existingItem, count: existingItem.count + 1 };
          } else {
            return { ...existingItem, count: existingItem.count - 1 };
          }
        }
        return existingItem;
      });
      setCartItems(updatedCartItems);
    }
  };

  const removeItemFromCart = (id: string) => {
    const updatedTodoItems = cartItems.filter((item) => item.id !== id);
    setCartItems(updatedTodoItems);
  };

  return (
    <div className="grid gap-6 grid-cols-2 bg-slate-400 h-full p-8">
      <ProductsList
        title="Books"
        data={data}
        cartItems={cartItems}
        addItemToCart={addItemToCart}
        updateItemCount={updateCartItemCount}
        removeItemFromCart={removeItemFromCart}
      />
      <Cart items={cartItems} removeItemFromCart={removeItemFromCart} />
      <p>v6</p>
    </div>
  );
};
