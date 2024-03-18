import React from 'react';
import Image from 'next/image';

export const getStaticProps = async () => {
  try {
    const res = await fetch('http://localhost:3000/api/products');
    if (!res.ok) {
      throw new Error('Failed to fetch products');
    }
    const data = await res.json();
    return {
      props: { products: data },
    };
  } catch (error) {
    console.error('Error fetching products:', error);
    return {
      props: { products: [] }, // Return an empty array if fetching fails
    };
  }
};

// Define the Product interface
interface Product {
  _id: number;
  name: string;
  description: string;
  details: string;
  image: string;
}

// Define the Props interface for the Products component
interface ProductsProps {
  products: Product[];
}

const Options: React.FC<ProductsProps> = ({ products }) => {
  if (!products) {
    return <div>Loading...</div>;
  }
  return (
    <div>
      {products.map((product) => (
        <div
          className=" lg:w-96 bg-base-100 shadow-xl lg:m-10 justify-center"
          key={product._id}
        >
          <figure className="px-10 pt-10">
            <Image
              src={product.image}
              alt="Product"
              width={95}
              height={95}
              className=""
            />
          </figure>
          <div className="card-body items-center text-center">
            <h2 className="card-title">{product.name}</h2>
            <p>{product.description}</p>
            <div className="card-actions">
              <button className="btn btn-primary">Buy Now</button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Options;
