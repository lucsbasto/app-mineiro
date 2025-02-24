import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import ProductType from "./components/ProductType"
import Price from "./components/Price"
import UnitCost from "./components/UnitCost"
import Quantity from "./components/Quantity"
import QuantitySold from "./components/QuantitySold"
import QuantityRetuned from "./components/QuantityReturned"

export function ProductDialog() {
    return (
      <Dialog>
        <DialogTrigger asChild>
          <Button>Adicionar Produto</Button>
        </DialogTrigger>
        <DialogContent className="p-7 px-8 poppins">
          <DialogHeader>
            <DialogTitle className="text-[22px]">Adicionar Produto</DialogTitle>
            <DialogDescription>
              Preencha o formulario com os dados do produto
            </DialogDescription>
          </DialogHeader>
          <div className="flex flex-col gap-2 mt-1">
            <div className="grid grid-cols-3 gap-7">
              <ProductType />
              <Quantity />
              <UnitCost />
            </div>
            <div className="grid grid-cols-2 gap-5 items-center">
              <QuantitySold />
              <QuantityRetuned />
            </div>
            <div className="grid grid-cols-2 gap-5 items-center">
            </div>
          </div>
          <DialogFooter>
            <DialogClose>
              <Button variant={"secondary"} className="h-11 px-11">
                  Cancelar
              </Button>
            </DialogClose>
            <Button variant={"secondary"} className="h-11 px-11">
                  Adicionar Produto
              </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    );
  }
  