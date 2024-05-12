"use client";

import React, { useState, useEffect } from "react";
import { ICatagory, IProduct } from "@/types/product";
import ProductCard from "@/components/products/ProductCard";
import {
  categories,
  tablets,
  phones,
  earphones,
  accessories,
  flashDrive,
  chargers,
  gadgets,
} from "@/exam8-data/db.json";
import { SkeletonCard } from "@/components/elements/skeleton-card/skeleton-card";
import TitleIcon from "@/assets/icons/title";

type CategoryProps = {
  params: {
    id: number;
  };
};

const DataCategory: React.FC<CategoryProps> = ({ params }) => {
  const [loading, setLoading] = useState<boolean>(true);
  const [type, setType] = useState<string>("");
  const [categoryProducts, setCategoryProducts] = useState<IProduct[]>([]);

  const catagoryId = params.id;
  const category: ICatagory = categories[catagoryId - 42];

  useEffect(() => {
    setType(category.type);
    const timer = setTimeout(() => {
      switch (category.type) {
        case "phones":
          setCategoryProducts(phones);
          break;
        case "accessories":
          setCategoryProducts(accessories);
          break;
        case "tablets":
          setCategoryProducts(tablets);
          break;
        case "earphones":
          setCategoryProducts(earphones);
          break;
        case "flashDrive":
          setCategoryProducts(flashDrive);
          break;
        case "gadgets":
          setCategoryProducts(gadgets);
          break;
        case "chargers":
          setCategoryProducts(chargers);
          break;
        default:
          setCategoryProducts([]);
          break;
      }
      setLoading(false);
    }, 1000);
    return () => clearTimeout(timer);
  }, [category]);

  return (
    <div className="container mx-auto px-4 pt-8">
      <h1 className="text-3xl font-bold gap-x-2 flex items-center mb-3">
        <TitleIcon />
        {category.title}
      </h1>
      {loading ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mb-7">
          <SkeletonCard />
          <SkeletonCard />
          <SkeletonCard />
          <SkeletonCard />
          <SkeletonCard />
          <SkeletonCard />
          <SkeletonCard />
          <SkeletonCard />
        </div>
      ) : (
        <div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {categoryProducts.map((product, index) => (
              <ProductCard key={index} product={product} />
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default DataCategory;
