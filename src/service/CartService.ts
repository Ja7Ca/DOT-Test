import CartJson from "../data/Cart.json";
import { CartType } from "../pages/dashboard/Cart";
import { getDetailProduct } from "./ProductService";

const dataCart: { product: string; quantity: number; user: string }[] = CartJson;

export const getCart = (user: string): CartType[] => {
  return dataCart
  .filter((cart: { product: string, quantity: number, user: string }) => cart.user === user)
  .map((cart: { product: string, quantity: number, user: string }) => ({
    ...cart,
    detailProduct: getDetailProduct(cart.product) || null,
  }));
}

export const addCart = (cart: { product: string, user: string }) => {
  const existingCartItem = dataCart.find(
    (item) => item.product === cart.product && item.user === cart.user
  );

  if (existingCartItem) {
    existingCartItem.quantity += 1;
  } else {
    dataCart.push({ ...cart, quantity: 1 });
  }

  return { success: true, message: "Add Cart successfully", data: dataCart };
}

export const decreaseCart = (cart: { product: string, user: string }) => {
  const existingCartItem = dataCart.find(
    (item) => item.product === cart.product && item.user === cart.user
  );

  if (existingCartItem) {
    existingCartItem.quantity -= 1;
    if (existingCartItem.quantity <= 0) {
      const index = dataCart.findIndex(
        (item) => item.product === cart.product && item.user === cart.user
      );
      dataCart.splice(index, 1);
    }
  }

  return { success: true, message: "Decrease Cart successfully", data: dataCart };
}

export const removeCart = (cart: { product: string, user: string }) => {
  const index = dataCart.findIndex(
    (item) => item.product === cart.product && item.user === cart.user
  );
  if (index !== -1) {
    dataCart.splice(index, 1);
  }

  return { success: true, message: "Remove Cart successfully", data: dataCart };
}