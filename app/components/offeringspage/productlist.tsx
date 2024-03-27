import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

import ProductsData from '../../productsData.json';

import Stars from '../../../public/stars.svg';

export default function ProductList() {
  return (
    <div className="flex flex-row  flex-start flex-wrap m-10 items-start text-start ">
      <div className="carousel ">
        {ProductsData.map((product) => (
          <div
            className=" lg:w-[25%] items-start text-start  bg-white  shadow-md shadow-black lg:m-10 justify-center border-black  product-card carousel-item w-full "
            style={{ marginBottom: '10px', marginRight: '10px' }}
            key={product.id}
          >
            <figure className="object-fill flex items-start  m-3 ">
              <Image
                src={product.image}
                alt="Product"
                width={400}
                height={400}
                className="rounded"
              />
            </figure>
            <div className="card-body font-rubik text-black">
              <h2 className="card-title">{product.name}</h2>
              <p>{product.price}</p>
              <div className="card-actions">
                <Link href={`/productbuy/${product.id}`}>
                  <button className="border-red-700 border-2 text-black border-solid  p-2 lg:text-md text-sm font-semibold text-black hover:bg-red-400 rounded-md hook-button">
                    BUY NOW
                  </button>
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

// Look into Embla Carousel package to be able to have a carousel for the products!
// https://www.youtube.com/watch?v=pfZx8y74KE4&ab_channel=HamedBahram
