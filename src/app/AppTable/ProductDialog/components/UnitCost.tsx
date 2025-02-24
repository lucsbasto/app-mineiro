import { Input } from "@/components/ui/input";
import { Label } from "@radix-ui/react-dropdown-menu";
import { NumericFormat } from "react-number-format";

export default function UnitCost(){
    return (
        <div className="flex flex-col gap-2 mt-5">
            <Label>
                {"Preço Unitário"}
            </Label>
            <NumericFormat
                value={0}
                customInput={Input}
                thousandSeparator
                placeholder="Price"
            />
        </div>  
    )
}