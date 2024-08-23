import { data } from "../data";
import { ProductItem } from "./product-item";

type ProductListProps = {
  title: string;
};

export const ProductsList = ({ title }: ProductListProps) => {
  return (
    <div className="w-full">
      <h1 className="mb-7 text-3xl font-bold">{title}</h1>
      <div className="flex flex-col w-full gap-3">
        {data.map((item, index) => (
          <ProductItem key={`${index}_${item.name}`} item={item} />
        ))}
      </div>
    </div>
  );
};
