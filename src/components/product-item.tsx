import React from 'react';
import { ProductItemT } from '../types';
import { useCartStateStore, CartOperationT } from '../store/cart-store';
type ProductItemProps = {
  item: ProductItemT;
};

export const ProductItem = ({ item }: ProductItemProps) => {
  const { cart, addItemToCart, updateItemCount, removeItemFromCart } =
    useCartStateStore();
  const [count, setCount] = React.useState(0);

  React.useEffect(() => {
    const productCount = cart.filter((cartItem) => cartItem.id === item.id)[0]
      ?.count;

    if (productCount) {
      setCount(productCount);
    } else {
      setCount(0);
    }
  }, [cart, item.id]);

  const product = {
    id: item.id,
    name: item.name,
    author: item.author,
    description: item.description,
    price: item.price,
    count: 1,
  };

  return (
    <div className="bg-slate-100 rounded-md grid  grid-cols-[30%_50%_20%] gap-2 overflow-hidden">
      <div>
        <div className="p-4">
          <p className="text-lg font-bold">{item.name}</p>
          <p className="text-sm">by {item.author}</p>
          <p>£{item.price.toFixed(2)}</p>
        </div>
      </div>
      <p className="p-4">{item.description}</p>
      <div className="bg-slate-500 p-4 flex items-center justify-center gap-5 text-white">
        <button
          className="bg-slate-400 text-white p-2 rounded-md"
          onClick={() => {
            if (count === 0) return;
            if (count === 1) {
              removeItemFromCart(item.id);
            } else {
              updateItemCount(product, CartOperationT.descrease);
            }
            setCount((prev) => prev - 1);
          }}
        >
          -
        </button>{' '}
        <span>{count}</span>{' '}
        <button
          className="bg-slate-400 text-white p-2 rounded-md"
          onClick={() => {
            if (count === 100) return;
            if (count === 0) {
              addItemToCart(product);
            } else {
              updateItemCount(product, CartOperationT.increase);
            }
            setCount((prev) => prev + 1);
          }}
        >
          +
        </button>
      </div>
    </div>
  );
};
