import React from "react";

const Container = ({ children }: { children: React.ReactNode }) => {
  return <div className="container max-w-7xl mx-auto">{children}</div>;
};

export default Container;
