import ProductItem from "./ProductItem";
import classes from "./Products.module.css";

const products = [
  {
    id: "p1",
    title: "Test1",
    price: 2000,
    description: "This is a first product - amazing!",
    quantity: 1,
  },
  {
    id: "p2",
    title: "Test2",
    price: 5000,
    description: "This is a second product - amazing!",
    quantity: 1,
  },
  {
    id: "p3",
    title: "Test3",
    price: 6000,
    description: "This is a third product - amazing!",
    quantity: 1,
  },
  {
    id: "p4",
    title: "Test4",
    price: 4000,
    description: "This is a fourth product - amazing!",
    quantity: 1,
  },
];

const Products = (props) => {
  return (
    <section className={classes.products}>
      <h2>Buy your favorite products</h2>
      <ul>
        {products.map((product) => (
          <ProductItem
            key={product.id}
            id={product.id}
            item={product}
            title={product.title}
            price={product.price}
            description={product.description}
          />
        ))}
      </ul>
    </section>
  );
};

export default Products;
