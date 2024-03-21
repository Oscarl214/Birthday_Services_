import { getProducts } from '.';

export async function getServerSideProps() {
  const data = await getProducts();

  console.log(data);
  return {
    props: {
      initialData: data,
    },
  };
}
