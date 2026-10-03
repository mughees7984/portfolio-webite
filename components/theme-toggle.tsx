"use client";
import { useEffect, useState } from "react";
import { useTheme } from "next-themes";
import { Moon, Sun } from "lucide-react";

export function ThemeToggle() {
  const { resolvedTheme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);

  const isDark = resolvedTheme === "dark";
  return (
    <button
      type="button"
      onClick={() => setTheme(isDark ? "light" : "dark")}
      aria-label="Toggle light and dark theme"
      className="flex h-9 w-9 items-center justify-center rounded-full border border-border bg-card text-muted transition hover:border-primary hover:text-foreground"
    >
      {mounted ? isDark ? <Sun size={18} /> : <Moon size={18} /> : null}
    </button>
  );
}