import { NextRequest, NextResponse } from "next/server";

const data = [
  {
    id: 1,
    title: "Product 1",
    price: 654,
    img: "https://www.nike.com/id/t/air-max-tl-2-5-shoes-mFumxy6c/IM6647-030",
  },
  {
    id: 2,
    title: "Product 2",
    price: 711,
    img: "https://www.nike.com/id/t/air-max-plus-iii-shoes-Qw64gh/CJ9684-002",
  },
  {
    id: 3,
    title: "Product 3",
    price: 991,
    img: "https://www.nike.com/id/t/sb-air-jordan-4-shoes-Pmb442/DR5415-100",
  },
];

export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url);

  const id = searchParams.get("id");
  if (id) {
    const detailProduct = data.find((item) => item.id == Number(id));
    if (detailProduct) {
      return NextResponse.json({
        status: 200,
        message: "Success",
        detailProduct,
      });
    }
  }
  return NextResponse.json({
    status: 404,
    message: "id not found",
    data: {},
  });
}
