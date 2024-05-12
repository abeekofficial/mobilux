import ShoppingBasket from "@/assets/icons/shopping";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";
import React from "react";

export default function Korzinka({ className }: { className?: string }) {
  const router = useRouter();

  const routeToShopCard = () => {
    router.push("/card");
  };
  return (
    <div className={className} onClick={routeToShopCard}>
      <div className="px-4 py-3 bg-black rounded-md">
        <div className="flex items-center gap-2 justify-between mb-2">
          <div>
            <ShoppingBasket />
          </div>
          <h3 className="text-white gap-2 flex items-center">
            <p></p> Mahsulot
          </h3>
        </div>
        <Button className="w-full py-2 px-4 rounded-md" variant="outline">
          0
        </Button>
      </div>
    </div>
  );
}
