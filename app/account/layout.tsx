import { NextPage } from "next";
import React from "react";
import AccountSidebar from "./account-sidebar";
import Container from "@/components/ui/container/container";

const AccountLayout: NextPage<{ children: React.ReactNode }> = ({
  children,
}) => {
  return (
    <Container>
      <div className="flex">
        <AccountSidebar />
        {children}
      </div>
    </Container>
  );
};

export default AccountLayout;
