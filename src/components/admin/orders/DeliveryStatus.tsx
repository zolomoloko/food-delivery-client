"use client";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { ChevronsUpDown } from "lucide-react";
import { useState } from "react";

const DeliveryStatus = ({ status, orderId, setFoodOrders }: never) => {
  const [popoverOpen, setPopoverOpen] = useState(false);

  const handleSaveStatus = (option: never) => async () => {
    if (status === option) return;

    setPopoverOpen(false);
  };

  return (
    <Popover open={popoverOpen} onOpenChange={setPopoverOpen}>
      <PopoverTrigger>
        <div
          className={`border rounded-full px-2.5 flex items-center text-primary h-8 text-xs font-semibold gap-2.5 `}
        >
          <p className="text-">{status}</p>
          <ChevronsUpDown size={16} />
        </div>
      </PopoverTrigger>
      <PopoverContent className="flex flex-col p-1 w-[140px]" align="start">
        {/* status will be here */}
      </PopoverContent>
    </Popover>
  );
};

export default DeliveryStatus;
