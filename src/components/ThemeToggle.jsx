import { Moon, Sun } from "lucide-react"
import { toggleTheme } from "../utils/theme"

export default function ThemeToggle() {
  return (
    <button type="button" onClick={() => toggleTheme()} className="inline-flex items-center gap-2 rounded-xl border px-3 py-2">
      <Sun className="h-4 w-4 hidden dark:block" />
      <Moon className="h-4 w-4 dark:hidden" />
      <span className="text-sm">Theme</span>
    </button>
  )
}
