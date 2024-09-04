import { useMemo } from "react";
import { data } from "../../data";
import { Link, useParams } from "react-router-dom";

export const ProductPage = () => {
  const { itemId } = useParams();

  const item = useMemo(() => {
    return data.find((item) => item.id === itemId);
  }, [itemId]);

  if (!item) return <></>;

  return (
    <main className="gap-6 bg-slate-400 h-screen p-8">
      <Link to="/" className="p-4 underline">Back to main page</Link>
      <div className="p-4">
        <p data-testid="product-item-name" className="text-lg font-bold">
          {item.name}
        </p>
        <p className="text-sm">by {item.author}</p>
        <p>£{item.price.toFixed(2)}</p>
      </div>
      <p className="p-4">{item.description}</p>
    </main>
  );
};
