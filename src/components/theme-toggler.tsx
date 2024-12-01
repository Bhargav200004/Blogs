"use client";

import { Switch } from "@/components/ui/switch";
import { useEffect, useState } from "react";

export default function ThemeToggler() {
  const [state, setState] = useState<"light" | "dark">("light");

  // Function to apply the theme
  const applyTheme = (theme: "light" | "dark") => {
    const html = document.querySelector("html");
    if (theme === "dark") {
      html?.classList.add("dark");
    } else {
      html?.classList.remove("dark");
    }
    localStorage.setItem("theme", theme);
    setState(theme);
  };

  // It initiate when website is load first time or reload
  useEffect(() => {
    const savedTheme = localStorage.getItem("theme") as "light" | "dark" | null;
    if (savedTheme) {
      applyTheme(savedTheme);
    } else {
      applyTheme("light");
    }
  },[]);

  return (
    <div className="flex items-center gap-2">
      <Switch
        checked={state === "dark"}
        onCheckedChange={(value) => {
          const newTheme = value ? "dark" : "light";
          // updating
          applyTheme(newTheme);
        }}
      />
      <span>{state}</span>
    </div>
  );
}
