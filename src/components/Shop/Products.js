import ProductItem from "./ProductItem";
import classes from "./Products.module.css";
const DUMMY_PRODUCTS = [
  { id: "p1", price: 6, title: "A Book", description: "A new book" },
  { id: "p2", price: 7, title: "A Toy", description: "A new toy" },
  { id: "p3", price: 11, title: "A Game", description: "A new game" },
];
const Products = (props) => {
  return (
    <section className={classes.products}>
      <h2>Buy your favorite products</h2>
      <ul>
        {DUMMY_PRODUCTS.map((product) => (
          <ProductItem
            key={product.id}
            id={product.id}
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
