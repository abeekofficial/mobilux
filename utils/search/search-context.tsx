"use client";
import React, { createContext, useContext, Dispatch, SetStateAction, useState, ReactNode } from "react";
import { all as productsData } from "@/exam8-data/db.json";
import { IProduct } from "@/types/product";

interface SearchInputContextProps {
  searchQuery: string;
  setSearchQuery: Dispatch<SetStateAction<string>>;
  searchResults: IProduct[];
  setSearchResults: Dispatch<SetStateAction<IProduct[]>>;
  searchProductsByBrand: (brand: string) => void;
  searchProducts : (  query : string ) => void 
};


const SearchInputContext = createContext<SearchInputContextProps>({
  searchQuery: "",
  setSearchQuery: () => {},
  searchResults: [],
  setSearchResults: () => {},
  searchProductsByBrand: () => {},
  searchProducts: ( ) =>{}
});

interface SearchContextProps  {
  children: ReactNode;
}

const SearchInputContextProvider: React.FC<SearchContextProps> = ( {children} ) => {
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [searchResults, setSearchResults] = useState<IProduct[]>([]);

  const searchProducts = ( query : string ) => {
    const results: IProduct[] = [];
    
    const nameResults = productsData.filter(product =>
      product.title.toLowerCase().includes(query)
    );

    const brandResults = productsData.filter(product =>
      product.brand.toLowerCase() === query
    );

    
    const mergedResults = [...nameResults, ...brandResults].reduce((acc: IProduct[], product: IProduct) => {
      if (!acc.some(p => p.id === product.id)) {
        acc.push(product);
      };

      return acc;
    }, []);

    setSearchResults(mergedResults);
  };

  const searchProductsByBrand = (brand: string) => {
    const brandQuery = brand.toLowerCase().trim();
    const brandResults = productsData.filter(product =>
      product.brand.toLowerCase() === brandQuery
    );
    setSearchResults(brandResults);

    console.log({
         searchResults :  searchResults
    })


    return brandResults

  };

 
  return (
    <SearchInputContext.Provider
      value={{
        searchQuery,
        setSearchQuery,
        searchResults,
        setSearchResults,
        searchProductsByBrand,
        searchProducts
      }}
    >
      {children}
    </SearchInputContext.Provider>
  );
};

export const useSearchInputContext = () => useContext(SearchInputContext);
export default SearchInputContextProvider;
