import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Textarea } from "@/components/ui/textarea";
import { MapPin, X } from "lucide-react";
import { useState } from "react";

export const HeaderAddressSelectButton = () => {
  const [addressDialogOpen, setAddressDialogOpen] = useState(false);

  const textAreaPlaceholder =
    "Please provide specific address details such as building number, entrance, and apartment number";

  return (
    <Dialog open={addressDialogOpen} onOpenChange={setAddressDialogOpen}>
      <DialogTrigger className="flex items-center h-full gap-1 px-3 py-2 transition-colors bg-white rounded-full cursor-pointer w-72 hover:bg-white/90">
        <MapPin color="#EF4444" size={20} />
        <div className="flex items-center w-full gap-1"></div>
      </DialogTrigger>
      <DialogContent className="w-[480px]">
        <DialogHeader className="flex flex-row items-center justify-between space-y-0">
          <DialogTitle className="mt-1 text-lg font-semibold">
            Delivery address
          </DialogTitle>
          <DialogClose asChild>
            <Button
              type="button"
              className="px-2 py-2 -mt-2 rounded-full bg-muted w-7 h-7"
              variant="secondary"
            >
              <X size={12} strokeWidth={1.2} className="text-border/" />
            </Button>
          </DialogClose>
        </DialogHeader>
        <div className="flex flex-col gap-1">
          <Textarea placeholder={textAreaPlaceholder} className="min-h-28" />
        </div>
        <DialogFooter className="pt-6">
          <DialogClose asChild>
            <Button variant="secondary">Cancel</Button>
          </DialogClose>
          <Button>Deliver here</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};
