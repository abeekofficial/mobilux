"use client";

import { all } from "@/exam8-data/db.json";
import { IProduct } from "@/types/product";
import AddToCard from "@/components/AddToCart";
import BackIcon from "@/assets/icons/back";
import HeartIcon from "@/assets/icons/heart";
import { useRouter } from "next/navigation";

type ProductsParams = {
  params: {
    id: number;
  };
};

const Product: React.FC<ProductsParams> = ({ params }) => {
  const productId = params.id;
  const product: IProduct = all[productId - 1];
  const router = useRouter();
  return (
    <div className="container">
      <div>
        <div className="mt-5 flex items-center gap-x-96">
          <button
            className="flex items-center bg-gray-100 rounded-md ml-[-70px] py-[4px] px-3 text-black"
            onClick={() => router.back()}
          >
            <BackIcon />
            Orqaga
          </button>
          <HeartIcon />
        </div>
        <div className="flex items-center gap-x-5 justify-center py-5">
          <div className="w-[500px] py-[24px]">
            <div className="flex items-center justify-between mb-6"></div>

            <img src={product?.img} alt="image" width={400} height={400} />
          </div>
          <div className="flex flex-col justify-end w-[550px]">
            <h1 className="font-bold text-[30px] mb-5">{product?.title}</h1>
            <div className="flex items-center gap-x-2">
              <div className="flex items-center gap-x-2"></div>
              <div className="py-1 px-2 text-[14px] text-white rounded-md bg-red-500 text-center">
                {product?.discount} %
              </div>
            </div>
            <h3 className="text-[#1FBA4A] text-[42px] font-bold">
              {product?.price} so'm
            </h3>
            <div className="flex items-center gap-x-5">
              <AddToCard product={product} />
              <div className="flex items-center mt-3 gap-2 font-semibold">
                <span className="w-5 h-5 bg-green-500 rounded-full pr-2"></span>
                Omborda mavjud
              </div>
            </div>
            <div className="mt-5 flex items-center gap-2 mb-4">
              <p className="font-semibold">Rangi: </p> <p>{product?.color}</p>
            </div>
            <div>
              <div className="py-3 flex items-center gap-x-5 bg-[#e9f8ed] rounded-lg mb-3">
                <div className="rounded-full flex items-center justify-center ml-5 w-[42px] h-[42px] bg-white"></div>
                <h3 className="font-semibold">
                  O’zbekiston bo’ylab yetkazib berish:
                </h3>
                <p>14 ish kuni</p>
              </div>
            </div>
            <div className="flex flex-col gap-y-2">
              <p className="font-semibold">Описание</p>
              <p>{product?.description}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Product;
