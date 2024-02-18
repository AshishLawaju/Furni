import { createSlice } from "@reduxjs/toolkit";

export const cartSlice = createSlice({
  name: "reduxCart",
  initialState: {
    value: [],
  },
  reducers: {
    setCartRedux: (state, action) => {
      state.value = action.payload;
    },

    addToCart: (state, action) => {
      let product = action.payload;

      let temp = [...state.value];

      if (temp.find((el) => el._id == product._id)) {
        temp = temp.map((el) => {
          if (el._id == product._id) {
            return { ...el, quantity: el.quantity + 1 };
          }
          return el;
        });
      } else {
        temp.push({ ...product, quantity: 1 });
      }

      state.value = temp;

      alert("Add to cart");
      localStorage.setItem("cartItem", JSON.stringify(state.value));
    },

    increment: (state, action) => {
      let temp = [...state.value];

      temp = temp.map((el) => {
        if (el._id == action.payload._id) {
          return { ...el, quantity: el.quantity + 1 };
        }
        return el;
      });

      state.value = temp;
      localStorage.setItem("cartItem", JSON.stringify(state.value));
    },
    decrement: (state, action) => {
      let temp = [...state.value];

      temp = temp.map((el) => {
        if (el._id == action.payload._id) {
          return { ...el, quantity: el.quantity - 1 };
        }
        return el;
      });

      state.value = temp;
      localStorage.setItem("cartItem", JSON.stringify(state.value));
    },

    removeItem: (state, action) => {
      let product = action.payload;

      let temp = [...state.value];

      temp = temp.filter((el) => {
        if (el._id != product._id) return el;
      });

      state.value = temp;
      localStorage.setItem("cartItem", JSON.stringify(state.value));
    },

    clearCart: (state, action) => {
      state.value = [];
      localStorage.removeItem("cartItem");
    },
  },
});

export const { addToCart, increment, decrement, removeItem, setCartRedux,clearCart } =
  cartSlice.actions;
export default cartSlice.reducer;
