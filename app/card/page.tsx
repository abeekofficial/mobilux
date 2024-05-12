"use client";
import ProductCard from "@/components/products/ProductCard";
import React from "react";
import { TotalPriceSelector } from "@/store/features/createSlice";
import { useAppSelector } from "@/store/store";
import { IProduct } from "@/types/product";
import Container from "@/components/ui/container/container";
const CartPage = () => {
  const cartItems = useAppSelector((state) => state.cart.cartItems);

  const totalPrice = useAppSelector(TotalPriceSelector);
  return (
    <Container>
      <div className="flex justify-end my-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {cartItems.map((item) => (
            <ProductCard key={item.product.id} product={item.product} />
          ))}
          <div className="flex justify-end"></div>
        </div>
        <div className="w-1/3 p-3 border-2 rounded-md ">
          <p className="text-slate-600">
            Jami summa:{" "}
            <span className="text-slate-900 font-bold">{totalPrice} so'm</span>
          </p>
        </div>
      </div>
    </Container>
  );
};

export default CartPage;
