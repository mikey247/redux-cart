import classes from "./CartButton.module.css";
import { useDispatch, useSelector } from "react-redux";
import { uiActions } from "../../store/uiSlice";

const CartButton = (props) => {
  const dispatch = useDispatch();
  const cardQuantity = useSelector((state) => state.cart.totalQuantity);

  const cartShowHandler = () => {
    dispatch(uiActions.cartIsShownHandler());
  };

  return (
    <button className={classes.button} onClick={cartShowHandler}>
      <span>My Cart</span>
      <span className={classes.badge}>{cardQuantity}</span>
    </button>
  );
};

export default CartButton;
