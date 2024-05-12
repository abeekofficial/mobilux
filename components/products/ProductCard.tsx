"use client";

import React, { useState } from "react";
import { useShoppingCartContext } from "@/utils/cart/context";
import { IProduct as ProductsType } from "@/types/product";
import { useRouter } from "next/navigation";
import AddToCartBtn from "../AddToCart";
import Sidebar from "./Sidebar";
import Container from "../ui/container/container";
import StarIcon from "@/assets/icons/star";

type ProductCardProps = {
  product: ProductsType;
};
const ProductCard = ({ product }: ProductCardProps) => {
  const [isAdded, setIsAdded] = useState(false);
  const router = useRouter();

  const routeToProduct = () => {
    router.push(`/products/product/${product.id}`);
  };

  return (
    <Container>
      {" "}
      {/* Main container is flex-col */}
      <div className="border border-gray-200 rounded-md p-4 shadow-md mb-4 min-w-[250px] min-h-[350px] flex flex-col">
        <div className="w-[220px] h-[220px]">
          <img
            onClick={routeToProduct}
            src={product.img}
            alt={product.title}
            width={200}
            height={200}
          />
          {product.discount && (
            <div className="absolute top-2 right-2 bg-red-500 text-white px-2 py-1 rounded text-xs font-medium">
              {product.discount}
            </div>
          )}
        </div>
        <div onClick={routeToProduct} className="mt-4 flex-grow">
          <h3 className="mt-2 text-[14px] line-clamp-1 gap-x-3">
            {product.title}
          </h3>
          <div className="flex items-center gap-x-4">
            {" "}
            <div className="flex items-center gap-x-1">
              <StarIcon />
              <StarIcon />
              <StarIcon />
              <StarIcon />
              <StarIcon />
              <p>(36)</p>
            </div>
            {product.discount && (
              <div className="text-gray-500 text-xs line-through">
                {product.discount} so'm
              </div>
            )}
          </div>
          <p className="text-sm text-gray-600">
            {product.brand ? product.brand : "No brand found"}
          </p>
          <p className="my-2 text-[17px] font-black">{product.price} so'm</p>
        </div>
        {!isAdded && <AddToCartBtn product={product} />}
      </div>
    </Container>
  );
};

export default ProductCard;
