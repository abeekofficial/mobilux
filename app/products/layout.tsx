import Sidebar from "@/components/products/Sidebar";
import Container from "@/components/ui/container/container";
import React from "react";

const ProductLayot: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  return <Container>{children}</Container>;
};

export default ProductLayot;
