import { Input } from "@/components/ui/input";
import { Label } from "@radix-ui/react-dropdown-menu";
import { NumericFormat } from "react-number-format";

export default function QuantitySold(){
    return (
        <div className="flex flex-col gap-2 mt-5">
            <Label>
                {"Vendido"}
            </Label>
            <Input
                type="number"
                placeholder="Vendido"
            />
        </div>  
    )
}