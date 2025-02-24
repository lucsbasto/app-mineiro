import { Input } from "@/components/ui/input";
import { Label } from "@radix-ui/react-dropdown-menu";
import { NumericFormat } from "react-number-format";

export default function Price(){
    return (
        <div className="flex flex-col gap-2 pt-[6px]">
            <Label>
                {"Preço"}
            </Label>
            <NumericFormat
                value={0}
                className="h-11"
                customInput={Input}
                thousandSeparator
                placeholder="Price"
            />
        </div>  
    )
}