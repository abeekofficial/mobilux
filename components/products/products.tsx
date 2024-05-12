"use client";

import Sidebar from "./Sidebar";
import ProductCard from "./ProductCard";
import { all } from "@/exam8-data/db.json";
import { useState, useEffect } from "react";
import { useSearchInputContext } from "@/utils/search/search-context";
import { IProduct } from "@/types/product";
import Container from "../ui/container/container";
import CarouselBanner from "../Slider";
import { SkeletonBanner } from "../elements/skeleton-card/skeletonBanner";
import Korzinka from "../elements/Korzinka/korzinka";
import Spinner from "../Skeleton";

const Products = () => {
  const [isLoading, setIsLoading] = useState(true);
  const { searchResults } = useSearchInputContext();
  const [res, setRes] = useState<IProduct[]>([]);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 1000);

    setRes(searchResults);
  }, [searchResults]);

  return (
    <Container>
      <div className="flex">
        <Sidebar className="sticky top-0" />
        <div className="w-full ml-4 mt-2 p-4">
          {isLoading ? (
            <div className="h-64 flex justify-center items-center mt-20">
              <Spinner />
            </div>
          ) : (
            <div>
              <div>
                <CarouselBanner />
              </div>
              <div className="flex justify-end relative">
                <Korzinka className=" right-0 top-96 fixed " />
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mt-6">
                {/* Conditional Rendering */}
                {res.length > 0
                  ? res.map((product) => (
                      <ProductCard key={product.id} product={product} />
                    ))
                  : all.map((product) => (
                      <ProductCard key={product.id} product={product} />
                    ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </Container>
  );
};

export default Products;
