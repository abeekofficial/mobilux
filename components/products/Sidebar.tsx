"use client";
import React from "react";
import Link from "next/link";
import { categories } from "@/exam8-data/db.json";
import { ICatagory } from "@/types/product";
import { useRouter } from "next/navigation";
import ShoppingBasket from "@/assets/icons/shopping";
import RightArrowIcon from "@/assets/icons/arrow";
import Container from "../ui/container/container";
import { Button } from "../ui/button";

const Sidebar: React.FC<{ className?: string }> = ({ className }) => {
  return (
    <div className={className}>
      <div className=" pr-3 sticky bg-white mt-3 mb-10 rounded-md w-[250px]">
        <Button className="flex rounded-md w-full">
          <ShoppingBasket />
          Maxsus buyurtma
        </Button>

        <nav className="flex flex-col mt-2 gap-y-6 ">
          {categories.map((each: ICatagory) => {
            return (
              <>
                <MenuItem href={`products/${each.id}`} title={each.title} />
              </>
            );
          })}
        </nav>
      </div>
    </div>
  );
};

const MenuItem = ({ href, title }: any) => {
  return (
    <Link href={href}>
      <div className="flex items-center justify-between text-gray-700 hover:text-gray-900 py-2">
        <p>{title}</p>
        <RightArrowIcon />
      </div>
    </Link>
  );
};

export default Sidebar;
