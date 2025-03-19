import { Card } from '@/components/ui/card'
import { DeleteDialog } from '../Products/DeleteDialog'
import AppHeader from '../AppHeader/AppHeader'
import AppTable from '../AppTable/AppTable'

export function SalePage() {
  return (
    <div>
      <Card className="flex flex-col shadow-none p-2">
        <DeleteDialog />
        <AppHeader />
        <AppTable />
      </Card>
    </div>
  )
}
