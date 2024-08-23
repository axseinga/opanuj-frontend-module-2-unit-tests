import { data } from "../data";
import { CartItemT, ProductItemT } from "../types";
import { ProductItem } from "./product-item";

type ProductListProps = {
  title: string;
  data: ProductItemT[];
  cartItems: CartItemT[];
  addItemToCart: (item: CartItemT) => void;
  removeItemFromCart: (id: string) => void;
  updateItemCount: (item: CartItemT, operation: string) => void;
};

export const ProductsList = ({
  title,
  cartItems: items,
  addItemToCart,
  removeItemFromCart,
  updateItemCount,
}: ProductListProps) => {
  return (
    <div className="w-full">
      <h1 className="mb-7 text-3xl font-bold">{title}</h1>
      <ul className="flex flex-col w-full gap-3" data-testid="list">
        {data.map((item, index) => (
          <ProductItem
            key={`${index}_${item.name}`}
            item={item}
            items={items}
            addItemToCart={addItemToCart}
            removeItemFromCart={removeItemFromCart}
            updateItemCount={updateItemCount}
          />
        ))}
      </ul>
    </div>
  );
};
