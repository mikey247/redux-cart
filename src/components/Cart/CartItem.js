import { useDispatch } from "react-redux";
import classes from "./CartItem.module.css";
import { cartActions } from "../../store/cartSlice";
const CartItem = (props) => {
  const dispatch = useDispatch();

  const addItemHandler = () => {
    dispatch(
      cartActions.cartAddHandler({
        id: props.id,
        price: props.price,
        totalPrice: props.price,
        title: props.title,
      })
    );
  };

  const removeItemHandler = () => {
    dispatch(cartActions.cartRemoveHandler(props.id));
  };

  return (
    <li className={classes.item}>
      <header>
        <h3>{props.title}</h3>
        <div className={classes.price}>
          ₦{props.total.toFixed(2)}{" "}
          <span className={classes.itemprice}>
            (₦{props.price.toFixed(2)}/item)
          </span>
        </div>
      </header>
      <div className={classes.details}>
        <div className={classes.quantity}>
          x <span>{props.quantity}</span>
        </div>
        <div className={classes.actions}>
          <button onClick={removeItemHandler}>-</button>
          <button onClick={addItemHandler}>+</button>
        </div>
      </div>
    </li>
  );
};

export default CartItem;
