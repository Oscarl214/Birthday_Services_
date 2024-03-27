import { NextResponse } from 'next/server';

const products: any = [
  {
    id: 1,
    name: 'Black Chair',
    description: 'Steel Foldable Chair',
    price: '$4.00',
    details: 'Price is per day (8 hours)',
    image: 'https://partyservices.s3.us-east-2.amazonaws.com/BlackChair.webp',
  },
  {
    id: 2,
    name: 'White table',
    description: 'Foldable, Comfortably sits 6 adults!',
    price: '$10.00',
    details: 'Price is per day (8 hours)',
    image: 'https://partyservices.s3.us-east-2.amazonaws.com/WhiteTable.webp',
  },
  {
    id: 3,
    name: "Sports Themed Bounce House | (17' X 13' ft)",
    description: 'Limit is 8 children or 800 pounds at one time.',
    price: '$200.00',
    details: 'Rental price is per day (8 hours)',
    image:
      'https://partyservices.s3.us-east-2.amazonaws.com/BounceHouseProduct.webp',
  },
];

export async function GET(request: Request, context: any) {
  const { params } = context;

  return NextResponse.json({
    product: products.find((x: any) => x.id.toString() === params.id),
  });
}
