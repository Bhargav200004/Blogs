"use client";

import { Switch } from "@/components/ui/switch";
import { useState } from "react";

export default function ThemeToggler() {
  const [state, setState] = useState<"light" | "dark">("light");

  return (
    <div className="flex items-center gap-2">
      <Switch
        onCheckedChange={(value) => {
          if (value) document.querySelector("html")?.classList.add("dark");
          else document.querySelector("html")?.classList.remove("dark");
          setState(value ? "dark" : "light");
        }}
      />
      <span>{state}</span>
    </div>
  );
}
