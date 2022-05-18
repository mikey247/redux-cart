import Cart from "./components/Cart/Cart";
import Layout from "./components/Layout/Layout";
import Products from "./components/Shop/Products";
import Notification from "./components/UI/Notificaton";
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import { uiActions } from "./store/uiSlice";

let isInitial = true;

function App() {
  const dispatch = useDispatch();
  const auth = useSelector((state) => state.ui.cartIsShown);
  const cart = useSelector((state) => state.cart);
  console.log(cart);
  const notification = useSelector((state) => state.ui.notification);

  useEffect(() => {
    const sendCartData = async () => {
      dispatch(
        uiActions.showNotification({
          status: "pending",
          title: "Sending..",
          message: "Sending cart data🔃",
        })
      );
      const response = await fetch(
        "https://redux-cart-508ea-default-rtdb.firebaseio.com/cart.json",
        {
          method: "PUT",
          body: JSON.stringify(cart),
        }
      );
      if (!response.ok) {
        throw new Error("sending cart data failed🚫");
      }

      // const responseData = await response.json();
      dispatch(
        uiActions.showNotification({
          status: "success",
          title: "Success",
          message: "Sent cart data👍🏾",
        })
      );
    };

    if (isInitial) {
      isInitial = false;
      return;
    }
    sendCartData().catch((error) => {
      dispatch(
        uiActions.showNotification({
          status: "error",
          title: "Error",
          message: "Sending cart data failed🚫",
        })
      );
    });
  }, [cart, dispatch]);

  return (
    <>
      {notification && (
        <Notification
          title={notification.title}
          message={notification.message}
          status={notification.status}
        />
      )}
      <Layout>
        {auth && <Cart />}
        <Products />
      </Layout>
    </>
  );
}

// let isInitial = true;

// function App() {
//   const dispatch = useDispatch();
//   const auth = useSelector((state) => state.ui.cartIsShown);
//   const cart = useSelector((state) => state.cart);
//   console.log(cart);
//   const notification = useSelector((state) => state.ui.notification);

//   useEffect(() => {
//     const sendCartData = async () => {
//       dispatch(
//         uiActions.showNotification({
//           status: "pending",
//           title: "Sending..",
//           message: "Sending cart data🔃",
//         })
//       );
//       const response = await fetch(
//         "https://redux-cart-508ea-default-rtdb.firebaseio.com/cart.json",
//         {
//           method: "PUT",
//           body: JSON.stringify(cart),
//         }
//       );
//       if (!response.ok) {
//         throw new Error("sending cart data failed🚫");
//       }

//       // const responseData = await response.json();
//       dispatch(
//         uiActions.showNotification({
//           status: "success",
//           title: "Success",
//           message: "Sent cart data👍🏾",
//         })
//       );
//     };

//     if (isInitial) {
//       isInitial = false;
//       return;
//     }
//     sendCartData().catch((error) => {
//       dispatch(
//         uiActions.showNotification({
//           status: "error",
//           title: "Error",
//           message: "Sending cart data failed🚫",
//         })
//       );
//     });
//   }, [cart, dispatch]);

//   return (
//     <>
//       {notification && (
//         <Notification
//           title={notification.title}
//           message={notification.message}
//           status={notification.status}
//         />
//       )}
//       <Layout>
//         {auth && <Cart />}
//         <Products />
//       </Layout>
//     </>
//   );
// }

export default App;
