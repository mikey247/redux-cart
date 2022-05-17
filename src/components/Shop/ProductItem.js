import Card from "../UI/Card";
import classes from "./ProductItem.module.css";
import { cartActions } from "../../store/cartSlice";
import { useDispatch } from "react-redux";

const ProductItem = (props) => {
  // const { title, price, description, item } = props;

  const dispatch = useDispatch();

  const addItemToCartHandler = () => {
    dispatch(
      cartActions.cartAddHandler({
        id: props.id,
        title: props.title,
        price: props.price,
      })
    );
  };

  return (
    <li className={classes.item}>
      <Card>
        <header>
          <h3>{props.title}</h3>
          <div className={classes.price}>₦{props.price.toFixed(2)}</div>
        </header>
        <p>{props.description}</p>
        <div className={classes.actions}>
          <button onClick={addItemToCartHandler}>Add to Cart</button>
        </div>
      </Card>
    </li>
  );
};

export default ProductItem;
