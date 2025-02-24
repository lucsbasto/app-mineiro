"use client"
import { Card } from "@/components/ui/card";
import AppHeader from "./AppHeader/AppHeader";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import AppTable from "./AppTable/AppTable";

export default function Home() {
  const { theme } = useTheme()
  const [isClient, setIsClient] = useState(false)
  const bgColor = theme === "dark" ? "bg-gray-900" : "bg-white"

  useEffect(() => {
    setIsClient(true)
  }, [])

  return (
    <div className={`poppins p-5 ${bgColor} border w-full min-h-screen`}>
      <Card className="flex flex-col shadow-none p-2">
        <AppHeader/>
        <AppTable/>
      </Card>
    </div>
  );
}
