import classes from "./CartButton.module.css";
import { useDispatch, useSelector } from "react-redux";
import { cartActions } from "../../store/cartSlice";

const CartButton = (props) => {
  const dispatch = useDispatch();
  const cardQuantity = useSelector((state) => state.totalQuantity);

  const cartShowHandler = () => {
    dispatch(cartActions.cartIsShownHandler());
  };

  return (
    <button className={classes.button} onClick={cartShowHandler}>
      <span>My Cart</span>
      <span className={classes.badge}>{cardQuantity}</span>
    </button>
  );
};

export default CartButton;
