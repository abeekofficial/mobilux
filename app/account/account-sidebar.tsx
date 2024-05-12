import RightArrowIcon from "@/assets/icons/arrow";
import Link from "next/link";
import React from "react";

const AccountSidebar = () => {
  return (
    <div className="w-[250px] flex flex-col gap-y-4 px-4 py-2 border-2 rounded-md">
      <Link href={"/account"}>
        <div className="flex items-center justify-between text-gray-700 hover:text-gray-900 py-2">
          <p className="text-semibold">Account</p>
          <RightArrowIcon />
        </div>
      </Link>
      <Link href={"/account/order"}>
        <div className="flex items-center justify-between text-gray-700 hover:text-gray-900 py-2">
          <p className="text-semibold">Sizning buyurtmalaringiz</p>
          <RightArrowIcon />
        </div>
      </Link>
      <Link href={"/account/devices"}>
        <div className="flex items-center justify-between text-gray-700 hover:text-gray-900 py-2">
          <p className="text-semibold">Sizning qurilmalaringiz</p>
          <RightArrowIcon />
        </div>
      </Link>
      <Link href={"/account/help"}>
        <div className="flex items-center justify-between text-gray-700 hover:text-gray-900 py-2">
          <p className="text-semibold">Yordam kerakmi ?</p>
          <RightArrowIcon />
        </div>
      </Link>
      <Link href={"/account"}>
        <div className="flex items-center justify-between hover:text-gray-900 py-2">
          <p className="text-semibold text-red-500">Chiqish</p>
          <RightArrowIcon />
        </div>
      </Link>
    </div>
  );
};

export default AccountSidebar;
