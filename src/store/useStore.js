import { create } from "zustand";

const useStore = create((set) => ({
  cartItems: [],
  addToCart: (item) =>
    set((state) => {
      if (state.cartItems.some((cartItem) => cartItem.id === item.id)) {
        return {};
      }
      return { cartItems: [...state.cartItems, item] };
    }),
  removeFromCart: (id) =>
    set((state) => ({
      cartItems: state.cartItems.filter((item) => item.id !== id),
    })),
  clearCart: () => set((state) => ({ cartItems: [] })),
}));

export { useStore };
