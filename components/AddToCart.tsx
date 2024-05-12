"use client";
import { IProduct } from "@/types/product";
import React from "react";
import {
  decrement,
  increment,
  productQtyInCartSelector,
} from "@/store/features/createSlice";

import { useAppDispatch, useAppSelector } from "@/store/store";
import { Button } from "./elements/Button";

import QtyBtn from "./Btn";
import BasketIcon from "@/assets/icons/basket";

interface Props {
  product: IProduct;
}

const AddToCartBtn = (props: Props) => {
  const qty = useAppSelector((state) =>
    productQtyInCartSelector(state, props.product.id)
  );
  const dispatch = useAppDispatch();
  if (!qty)
    return (
      <div className="flex justify-center">
        <Button
          className="flex items-center justify-center gap-x-2 w-full"
          onClick={() => dispatch(increment(props.product))}
        >
          <BasketIcon />
          Savatchaga
        </Button>
      </div>
    );

  return (
    <QtyBtn
      onDecrease={() => dispatch(decrement(props.product))}
      onIncrease={() => dispatch(increment(props.product))}
      qty={qty}
    />
  );
};

export default AddToCartBtn;
