import React from "react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { SelectGroup, SelectLabel } from "@radix-ui/react-select";
import FlagIcon from "@/assets/icons/flag";

export default function SwitchLanguage() {
  return (
    <Select>
      <SelectTrigger className="w-[120px]">
        <div className="flex items-center gap-1">
          <FlagIcon className={`rounded-sm`} />
          <SelectValue placeholder="UZ" />
        </div>
      </SelectTrigger>
      <SelectContent className="w-[120px]">
        <SelectGroup className="w-[120px]">
          <SelectLabel className="w-[120px]"></SelectLabel>
          <SelectItem className="w-[120px] items-center flex gap-1" value="UZ">
            UZ
          </SelectItem>
          <SelectItem className="w-[120px] items-center flex gap-1" value="ENG">
            ENG
          </SelectItem>
          <SelectItem className="w-[120px] items-center flex gap-1" value="RU">
            RU
          </SelectItem>
        </SelectGroup>
      </SelectContent>
    </Select>
  );
}
