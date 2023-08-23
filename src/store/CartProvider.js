import { useReducer } from "react";
import CartContext from "./cart-context";

const cartReducer = (state, action) => {
  let existingCartItemIndex;
  let existingCartItem;
  let updatedItems;
  let updatedTotalAmount;
  switch (action.type) {
    case "ADD":
       updatedTotalAmount =
        state.totalAmount + action.item.price * action.item.amount;
      existingCartItemIndex = state.items.findIndex(
        (item) => item.id === action.item.id
      );      
      existingCartItem = state.items[existingCartItemIndex];
      if (existingCartItemIndex !== -1) {
        const updatedItem = {
          ...existingCartItem,
          amount: existingCartItem.amount + action.item.amount,
        };
        updatedItems = [...state.items];
        updatedItems[existingCartItemIndex] = updatedItem;
      } else {
        updatedItems = state.items.concat(action.item);
      }

      return {
        items: updatedItems,
        totalAmount: updatedTotalAmount,
      };
    case "REMOVE":
      existingCartItemIndex = state.items.findIndex(
        (item) => item.id === action.id
      );
      existingCartItem = state.items[existingCartItemIndex];
      updatedTotalAmount = state.totalAmount - existingCartItem.price;
      if (existingCartItem.amount === 1) {
        updatedItems = state.items.filter((item) => item.id !== action.id);
      } else {
       const updatedItem =  {...existingCartItem, amount : existingCartItem.amount-1};
       updatedItems = [...state.items];
       updatedItems[existingCartItemIndex] = updatedItem
      }
      return {
        items : updatedItems,
        totalAmount : updatedTotalAmount
      }
    default:
      return INITIAL_CURRENT_STATE;
  }
};

const CartProvider = (props) => {
  const [cartState, dispatchCartAction] = useReducer(
    cartReducer,
    INITIAL_CURRENT_STATE
  );

  const addItemToCartHandler = (item) => {
    dispatchCartAction({ type: "ADD", item: item });
  };
  const removeItemFromCartHandler = (id) => {
    dispatchCartAction({ type: "REMOVE", id: id });
  };
  const cartContext = {
    items: cartState.items,
    totalAmount: cartState.totalAmount,
    addItem: addItemToCartHandler,
    removeItem: removeItemFromCartHandler,
  };
  return (
    <CartContext.Provider value={cartContext}>
      {props.children}
    </CartContext.Provider>
  );
};

export default CartProvider;

const INITIAL_CURRENT_STATE = {
  items: [],
  totalAmount: 0,
};
