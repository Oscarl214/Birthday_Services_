import React from 'react';
import Image from 'next/image';

export default async function ProductList() {
  const getProducts = async () => {
    const res = await fetch('http://localhost:3000/api/products');

    return res.json();
  };

  const data = await getProducts();
  console.log(data);

  return (
    <div>
      <div className="flex flex-row justify-center  flex-wrap">
        {data.map((product: any) => (
          <div
            className=" lg:w-[25%] bg-white  shadow-xl lg:m-10 justify-center border-black  product-card"
            key={product._id}
          >
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
              <div className="card-actions">
                <button className="btn btn-primary">Buy Now</button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
