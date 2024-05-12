"use client";
import { SkeletonCard } from "@/components/elements/skeleton-card/skeleton-card";
import Container from "@/components/ui/container/container";
import { NextPage } from "next";
import React from "react";

const Account: NextPage = () => {
  return (
    <Container>
      <div className=" my-10">
        <div className="flex justify-between">
          <div className="w-[400px] bg-white rounded-xl py-10 px-8">
            <h1 className="text-2xl mt-5 font-bold">
              Sizning buyurtmalaringiz
            </h1>
            <div className="mt-7 border-green-500 border-2 py-6 px-5 rounded-xl">
              <div className="flex items-center justify-between">
                <p className="font-semibold">Buyurtma #1160</p>
                <button className="bg-[#FFE2E2] text-red-500 px-3 py-1 rounded-3xl">
                  Bekor qilindi
                </button>
              </div>
              <div className="flex items-center justify-between mt-[43px]">
                <p className="text-[#808080] text-[14px]">#Buyurtma sanasi:</p>
                <p className="font-semibold">02/02/2022</p>
              </div>
              <div className="flex items-center justify-between mt-4">
                <p className="text-[#808080] text-[14px]">
                  Taxminiy yetkazib berish kuni:
                </p>
                <p className="font-semibold">Payshanba</p>
              </div>
              <div className="flex items-center justify-between mt-4">
                <p className="text-[#808080] text-[14px]">Umumiy narx:</p>
                <p className="font-semibold">18 664 000 so’m</p>
              </div>
            </div>
          </div>
          <div className="w-[400px] border-2 rounded-xl bg-white py-10 px-4">
            <div className="flex justify-between ">
              <h1>Buyurtma tafsilotlari</h1>
              <p>Buyurtma #1160</p>
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default Account;
