import ProductJson from "../data/Product.json";

const dataProduct = ProductJson;

export const getProduct = () => {
  return dataProduct;
}

export const getDetailProduct = (id: string) => {
  return dataProduct.find((product) => product.id === id);
}