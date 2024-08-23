import { CartItemT } from "../store/cart-store";

type CartProps = {
  items: CartItemT[];
  removeItemFromCart: (id: string) => void;
};

export const Cart = ({ items, removeItemFromCart }: CartProps) => {
  const calcSubtotalPrice = () => {
    let total = 0;
    items.forEach((product) => {
      const totalItemsPrice = product.count * product.price;
      total += totalItemsPrice;
    });
    return total;
  };

  return (
    <div className="mx-auto mt-10 rounded-xl bg-white p-4 w-[30rem] h-min">
      <h2 className="mb-4 text-2xl font-bold text-customRed">
        Your Cart ({items.length})
      </h2>
      <div className="flex flex-col gap-7">
        <ul className="flex flex-col gap-2 divide-y-2 divide-gray-100 border-b-2 border-gray-100">
          {items.map((item, index) => (
            <li
              key={`${index}_${item.id}`}
              className="flex justify-between items-center"
            >
              <div className="my-2 mb-2 flex flex-col gap-1">
                <h3 className="font-semibold">{item.name}</h3>
                <div className="flex space-x-2">
                  <p className="mr-2 font-semibold text-customRed">
                    {item.count} x
                  </p>
                  <p className="flex items-center gap-1">
                    <span>@ ${item.price.toFixed(2)}</span>
                    <span className="font-semibold">
                      ${(item.price * item.count).toFixed(2)}
                    </span>
                  </p>
                </div>
              </div>
              <button
                className="rounded-full p-1 bg-slate-500 text-white w-8"
                onClick={() => removeItemFromCart(item.id)}
              >
                x
              </button>
            </li>
          ))}
        </ul>
        <div className="flex items-center justify-between">
          <p>Order Total</p>
          <p
            data-testid="order-total"
            className="text-2xl font-bold text-black"
          >
            ${calcSubtotalPrice().toFixed(2)}
          </p>
        </div>
        <button className="bg-slate-600 rounded-md text-white p-2">
          Confirm Order
        </button>
      </div>
    </div>
  );
};