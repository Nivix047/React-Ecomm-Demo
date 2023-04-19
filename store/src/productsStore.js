const productsArray = [
  {
    id: "price_1MxJTpKNAu1XEff4EINLshVn",
    title: "Coffee",
    price: 4.99,
  },
  {
    id: "price_1MxJVKKNAu1XEff405mOuOHc",
    title: "Sunglasses",
    price: 9.99,
  },
  {
    id: "price_1MxJWIKNAu1XEff4LJ6k1Wr9",
    title: "Camera",
    price: 39.99,
  },
];

function getProductData(id) {
  let productData = productsArray.find((product) => product.id === id);

  if (productData === undefined) {
    console.log("Product data does not exist for ID:" + id);
    return undefined;
  }
  return productData;
}

export { productsArray, getProductData };
