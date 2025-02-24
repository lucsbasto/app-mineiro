import { Input } from "@/components/ui/input";
import { Label } from "@radix-ui/react-dropdown-menu";
import { MdError } from "react-icons/md";

export default function ProductType() {
  return (
    <div className="mt-5 flex flex-col gap-2">
      <Label className="whitespace-nowrap">
        {'Nome do Produto'}
      </Label>
      <div className="flex gap-2 items-center">
        <Input type='text' id="product-name" className="h-11 shadow-none" placeholder="Costela" />
      </div>
      <div className="text-red-500 flex gap-1 items-center text-[13px]">
        <MdError />
        <p>O tipo do produto é obrigatório</p>
      </div>
    </div>
  );
}
