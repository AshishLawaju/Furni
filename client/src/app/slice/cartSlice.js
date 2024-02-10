import { createSlice } from "@reduxjs/toolkit";

export const cartSlice = createSlice({
  name: "reduxCart",
  initialState: {
    value: [],
  },
  reducers: {
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
      console.log(state.value);

      alert("Add to cart");
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
    },

    removeItem: (state, action) => {
      let product = action.payload;

      let temp = [...state.value];

      temp = temp.filter((el) => {
        if (el._id != product._id) return el;
      });

      state.value = temp;
    },
  },
});

export const { addToCart, increment, decrement, removeItem } =
  cartSlice.actions;
export default cartSlice.reducer;
