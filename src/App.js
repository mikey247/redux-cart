import Cart from "./components/Cart/Cart";
import Layout from "./components/Layout/Layout";
import Products from "./components/Shop/Products";
import { useSelector } from "react-redux";

function App() {
  const auth = useSelector((state) => state.cartIsShown);

  return (
    <Layout>
      {auth && <Cart />}
      <Products />
    </Layout>
  );
}

export default App;
