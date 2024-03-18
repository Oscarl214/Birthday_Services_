const getProducts = async () => {
  const res = await fetch('http://localhost:3000/api/products');
  if (!res.ok) {
    throw new Error('Failed to fetch data');
  }
  return res.json();
};

const getSingleProduct = async (_id: number) => {
  const item = await getProducts();

  const singleItem = await item.find((product: any) => product._id === _id);

  return singleItem;
};

export { getProducts, getSingleProduct };
