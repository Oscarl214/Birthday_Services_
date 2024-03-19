import { getSingleProduct } from '../helpers';
import Image from 'next/image';

import BookForm from '../components/productbuypage/bookform';
type Props = {
  searchParams: { [key: string]: string | string[] | any };
};
const ProductBuy = async ({ searchParams }: Props) => {
  const productId = searchParams?.id;

  const product = await getSingleProduct(productId);

  console.log(product);
  return (
    <div className="pt-[40%] lg:pt-[10%] flex lg:flex-nowrap flex-wrap flex-row justify-around">
      <div className="lg:w-[50%] m-10">
        <div className="flex flex-row justify-center  flex-wrap">
          <div className=" bg-white  shadow-xl lg:m-10  border-black  product-card">
            <figure className="object-fill flex items-center justify-center m-5">
              <Image
                src={product.image}
                alt="Product"
                width={400}
                height={400}
                className=""
              />
            </figure>
            <div className="card-body items-center text-center font-rubik text-black">
              <h2 className="card-title">{product.name}</h2>
              <p>{product.description}</p>
              <p>{product.details}</p>
              <div className="card-actions"></div>
            </div>
          </div>
        </div>
      </div>
      <BookForm />
    </div>
  );
};

export default ProductBuy;
