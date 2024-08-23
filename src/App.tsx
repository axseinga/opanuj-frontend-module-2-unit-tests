import { Cart } from "./components/cart";
import { ProductsList } from "./components/product-list";

const App = () => {
  return (
    <div className="grid gap-6 grid-cols-2 bg-slate-400 h-full p-8">
      <ProductsList title="Books" />
      <Cart />
    </div>
  );
};

export default App;
