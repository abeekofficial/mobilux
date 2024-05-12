"use client";

import React, { useState, useEffect } from "react";
import Logo from "@/assets/logo.png";
import tune from "@/assets/icons/tune.png";
import Search from "@/assets/icons/search .png";
import { useSearchInputContext } from "@/utils/search/search-context";
import { useRouter } from "next/navigation";
import { useSession } from "next-auth/react";
import Container from "./ui/container/container";
import Image from "next/image";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import NotificationIcon from "@/assets/icons/notification";
import UserIcon from "@/assets/icons/user";
import SwitchLanguage from "./elements/select/switch-lang";

const Header: React.FC = () => {
  const { searchProductsByBrand, searchProducts, searchResults } =
    useSearchInputContext();
  const [userEmail, setUserEmail] = useState<string>("");
  const [query, setQuery] = useState("");

  const router = useRouter();

  const handleSearch = () => {
    searchProductsByBrand(query);
    console.log({
      searchResults: searchResults,
    });
  };

  const { data: session } = useSession();

  useEffect(() => {
    if (session) {
      setUserEmail(session?.user?.email as string);
    }

    console.log({
      session: session,
    });
  }, [session]);

  return (
    <header className="shadow-custom shadow-custom z-20 sticky top-0 bg-white">
      <Container>
        <nav className="top-0 py-8 flex items-center justify-between mt-5 md:flex">
          <div onClick={() => router.push("/")} className="mr-10">
            <Image src={Logo} alt="logo" />
          </div>
          <div className="w-[800px] flex items-center relative mr-10">
            <Image src={Search} alt="searchs" className="absolute left-2" />
            <Input
              onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                setQuery(e.target.value)
              }
              value={query}
              type="text"
              placeholder="Qidirish..."
              className="pl-11 border-green-500"
            />
            <Button
              onClick={handleSearch}
              className="rounded-tr-md rounded-br-md px-7"
            >
              <Image src={tune} alt="tune" className="mr-2" />
              Filter
            </Button>
          </div>
          <div className="flex items-center gap-x-4">
            <SwitchLanguage />
            <NotificationIcon />
            <h3 onClick={() => router.push("/login")}>Kirish</h3>
            <div
              className="cursor-pointer flex items-center gap-x-2"
              onClick={() => {
                router.push("/account");
              }}
            >
              <UserIcon />
            </div>
          </div>
        </nav>
      </Container>
      {/* Mobile header */}
      <div className="md:hidden container mx-auto">
        <Image src={Logo} alt="logo" width={90} height={24} />
        <SwitchLanguage />
        <Image src={Search} alt="searchs" />
      </div>
    </header>
  );
};

export default Header;
