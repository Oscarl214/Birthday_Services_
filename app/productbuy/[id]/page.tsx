import BookForm from '../../components/productbuypage/bookform';
import Image from 'next/image';

async function getProductbyId(postId: string) {
  const response = await fetch(`http://localhost:3000/api/products/${postId}`, {
    method: 'GET',
  });

  return response.json();
}

export default async function ProductID({ params }: any) {
  const { product } = await getProductbyId(params.id);

  console.log(product);

  return (
    <div className="pt-[40%] lg:pt-[10%] flex lg:flex-nowrap flex-wrap text-start">
      <div>
        <div className="lg:w-[80%] m-10">
          <div className="flex flex-row justify-center  flex-wrap">
            <div
              className=" bg-white  lg:m-10  border-black  product-card shadow-md shadow-black"
              style={{ marginBottom: '10px', marginRight: '10px' }}
            >
              <figure className=" flex items-center justify-center m-3 ">
                <Image
                  src={product.image}
                  alt="Product"
                  width={400}
                  height={400}
                  className="rounded mt-4 m-3"
                />
              </figure>
              <div className="card-body text-start font-rubik text-black">
                <h2 className="card-title">{product.name}</h2>
                <ul className="max-w-sm space-y-0.5 text-gray-500 list-disc list-inside dark:text-gray-40">
                  <li>{product.description}</li>
                  <li>{product.details}</li>
                  <li className="text-black">{product.price}</li>
                </ul>
                <div className="card-actions"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <BookForm />
    </div>
  );
}
