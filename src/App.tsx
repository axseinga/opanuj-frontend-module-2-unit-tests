import { BookShop } from "./pages/book-shop/book-shop";
import { data } from "./data";
import { Route, Routes, HashRouter as Router } from "react-router-dom";
import { ProductPage } from "./pages/product/product";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<BookShop data={data} />} />
        <Route path="/info/:itemId" element={<ProductPage />} />
      </Routes>
    </Router>
  );
};

export default App;
