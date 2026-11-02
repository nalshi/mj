"use client"

import { useState } from "react"
import {
  ArrowUpLeft,
  Gem,
  Moon,
  ShoppingBag,
  Sparkles,
  Sun,
} from "lucide-react"
import { MERCHANT_SIGN_UP_URL } from "@/lib/constants"

type ThemeColors = {
  primary: string
  accent: string
  background: string
  card: string
  text: string
}

type ThemePreset = {
  name: string
  category: string
  font: string
  light: ThemeColors
  dark: ThemeColors
}

const themes: ThemePreset[] = [
  {
    name: "شفق النجوم",
    category: "خيال ونجوم",
    font: "Cairo",
    light: { primary: "#6D28D9", accent: "#0891B2", background: "#F7F4FF", card: "#FFFFFF", text: "#24114A" },
    dark: { primary: "#C4B5FD", accent: "#67E8F9", background: "#10091F", card: "#1C1233", text: "#F5F3FF" },
  },
  {
    name: "سراب المحيط",
    category: "محيط ونسيم",
    font: "Cairo",
    light: { primary: "#0F766E", accent: "#2563EB", background: "#F0FDFA", card: "#FFFFFF", text: "#123B3A" },
    dark: { primary: "#5EEAD4", accent: "#93C5FD", background: "#061816", card: "#0D2926", text: "#ECFEFF" },
  },
  {
    name: "سديم الياقوت",
    category: "فضاء وتقنية",
    font: "Cairo",
    light: { primary: "#1D4ED8", accent: "#7C3AED", background: "#F2F7FF", card: "#FFFFFF", text: "#14264B" },
    dark: { primary: "#93C5FD", accent: "#C4B5FD", background: "#081326", card: "#10213D", text: "#EFF6FF" },
  },
  {
    name: "جمشت قمري",
    category: "سحر وأحجار كريمة",
    font: "Cairo",
    light: { primary: "#7E22CE", accent: "#C026D3", background: "#FCF7FF", card: "#FFFFFF", text: "#3B0764" },
    dark: { primary: "#D8B4FE", accent: "#F0ABFC", background: "#170B20", card: "#291436", text: "#FDF4FF" },
  },
  {
    name: "وردة الجنيات",
    category: "خيال وزهور",
    font: "Cairo",
    light: { primary: "#BE185D", accent: "#7C3AED", background: "#FFF7FB", card: "#FFFFFF", text: "#45152E" },
    dark: { primary: "#F9A8D4", accent: "#C4B5FD", background: "#1E0B17", card: "#351528", text: "#FFF1F8" },
  },
  {
    name: "زمردة مسحورة",
    category: "غابات وأحجار كريمة",
    font: "Cairo",
    light: { primary: "#047857", accent: "#B7791F", background: "#F2FBF5", card: "#FFFFFF", text: "#123526" },
    dark: { primary: "#6EE7B7", accent: "#FCD34D", background: "#071A13", card: "#10291E", text: "#ECFDF5" },
  },
  {
    name: "ياقوتة التنين",
    category: "نار وجرأة",
    font: "Cairo",
    light: { primary: "#BE123C", accent: "#EA580C", background: "#FFF7F5", card: "#FFFFFF", text: "#3F1020" },
    dark: { primary: "#FDA4AF", accent: "#FDBA74", background: "#1D0A10", card: "#34131D", text: "#FFF1F2" },
  },
  {
    name: "شمس سماوية",
    category: "شمس ودفء",
    font: "Cairo",
    light: { primary: "#A16207", accent: "#0F766E", background: "#FFFCF2", card: "#FFFFFF", text: "#38240A" },
    dark: { primary: "#FCD34D", accent: "#5EEAD4", background: "#1B1407", card: "#30240D", text: "#FFFBEB" },
  },
]

const previewItems = [
  { title: "منتج تجريبي", icon: Sparkles },
  { title: "منتج تجريبي", icon: Gem },
  { title: "منتج تجريبي", icon: ShoppingBag },
]

export function ThemePreviewSection() {
  const [selectedTheme, setSelectedTheme] = useState(themes[0])
  const [mode, setMode] = useState<"light" | "dark">("light")
  const colors = selectedTheme[mode]

  return (
    <section id="themes" className="scroll-mt-24 py-20 sm:py-28">
      <header className="mx-auto mb-10 max-w-3xl text-center">
        <h2 className="text-3xl font-bold tracking-tight text-neutral-900 dark:text-white sm:text-4xl">
          اختر مظهراً يناسب متجرك
        </h2>
        <p className="mt-4 text-lg leading-8 text-neutral-600 dark:text-neutral-300">
          بدّل بين قوالب نالش الحقيقية وشاهد كيف تتغير ألوان واجهة متجرك في الوضعين الفاتح والداكن.
        </p>
      </header>

      <div className="grid items-start gap-8 xl:grid-cols-[minmax(0,1.15fr)_minmax(300px,0.85fr)]">
        <div
          data-ui="true"
          aria-label={`معاينة توضيحية لقالب ${selectedTheme.name}`}
          className="min-w-0 overflow-hidden rounded-2xl border border-neutral-200 dark:border-neutral-700"
          style={{ backgroundColor: colors.background, color: colors.text }}
        >
          <div
            className="flex items-center justify-between gap-3 px-5 py-4"
            style={{ backgroundColor: colors.card }}
          >
            <div className="flex min-w-0 items-center gap-3">
              <span
                className="grid size-10 shrink-0 place-items-center rounded-xl text-white"
                style={{ backgroundColor: colors.primary }}
                aria-hidden="true"
              >
                <ShoppingBag className="size-5" />
              </span>
              <span className="truncate font-bold">متجري الإلكتروني</span>
            </div>
            <span className="text-sm" style={{ color: colors.primary }}>
              المنتجات · الأقسام
            </span>
          </div>

          <div className="space-y-5 p-5 sm:p-7">
            <div className="flex flex-wrap items-end justify-between gap-4">
              <div>
                <p className="text-sm" style={{ color: colors.primary }}>
                  واجهة متجرك
                </p>
                <h3 className="mt-1 text-2xl font-bold">تسوق حسب الأقسام</h3>
              </div>
              <span className="text-sm">{selectedTheme.name}</span>
            </div>

            <div className="flex flex-wrap gap-2" aria-label="أقسام تجريبية">
              {["الكل", "الأكثر مشاهدة", "وصل حديثاً"].map((category, index) => (
                <span
                  key={category}
                  className="rounded-full px-3 py-1.5 text-sm"
                  style={{
                    backgroundColor: index === 0 ? colors.primary : colors.card,
                    color: index === 0 ? "#fff" : colors.text,
                  }}
                >
                  {category}
                </span>
              ))}
            </div>

            <div className="grid grid-cols-3 gap-3">
              {previewItems.map(({ title, icon: Icon }, index) => (
                <article
                  key={`${title}-${index}`}
                  className="min-w-0 overflow-hidden rounded-xl p-3"
                  style={{ backgroundColor: colors.card }}
                >
                  <span
                    className="mb-3 grid aspect-square place-items-center rounded-lg"
                    style={{
                      backgroundColor: `${colors.primary}1A`,
                      color: colors.primary,
                    }}
                    aria-hidden="true"
                  >
                    <Icon className="size-8" />
                  </span>
                  <p className="truncate text-sm font-semibold">{title}</p>
                </article>
              ))}
            </div>

            <p className="text-sm leading-6 opacity-80">
              معاينة توضيحية للألوان ومكوّنات الواجهة، وليست متجراً منشوراً.
            </p>
          </div>
        </div>

        <div className="space-y-5">
          <div>
            <h3 className="mb-3 text-lg font-bold text-neutral-900 dark:text-white">
              القوالب المتاحة
            </h3>
            <div
              data-ui="true"
              className="grid grid-cols-2 gap-2 sm:grid-cols-4 xl:grid-cols-2"
            >
              {themes.map((theme) => (
                <button
                  key={theme.name}
                  type="button"
                  aria-pressed={selectedTheme.name === theme.name}
                  onClick={() => setSelectedTheme(theme)}
                  className="flex min-h-14 items-center gap-2 rounded-xl border border-neutral-200 bg-white px-3 py-2 text-start text-sm transition hover:border-neutral-400 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary dark:border-neutral-700 dark:bg-neutral-900"
                >
                  <span className="flex shrink-0 gap-1" aria-hidden="true">
                    <span
                      className="size-4 rounded-full"
                      style={{ backgroundColor: theme.light.primary }}
                    />
                    <span
                      className="size-4 rounded-full"
                      style={{ backgroundColor: theme.light.accent }}
                    />
                  </span>
                  <span className="min-w-0">
                    <span className="block truncate font-semibold">
                      {theme.name}
                    </span>
                    <span className="block truncate text-sm text-neutral-600 dark:text-neutral-300">
                      {theme.category}
                    </span>
                  </span>
                </button>
              ))}
            </div>
          </div>

          <div>
            <h3 className="mb-3 text-lg font-bold text-neutral-900 dark:text-white">
              وضع العرض
            </h3>
            <div data-ui="true" className="flex flex-wrap gap-3">
              {(["light", "dark"] as const).map((themeMode) => (
                <button
                  key={themeMode}
                  type="button"
                  aria-pressed={mode === themeMode}
                  onClick={() => setMode(themeMode)}
                  className="inline-flex min-h-11 items-center gap-2 rounded-full border border-neutral-300 px-4 text-sm font-semibold transition hover:border-neutral-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary dark:border-neutral-700"
                >
                  {themeMode === "light" ? (
                    <Sun className="size-4" aria-hidden="true" />
                  ) : (
                    <Moon className="size-4" aria-hidden="true" />
                  )}
                  {themeMode === "light" ? "فاتح" : "داكن"}
                </button>
              ))}
            </div>
            <p className="mt-3 text-sm text-neutral-600 dark:text-neutral-300">
              {selectedTheme.category} · خط {selectedTheme.font}
            </p>
          </div>

          <a
            href={MERCHANT_SIGN_UP_URL}
            className="inline-flex min-h-11 items-center gap-2 font-semibold text-primary underline-offset-4 hover:underline"
          >
            اختر قالب متجرك من لوحة التحكم
            <ArrowUpLeft className="size-4" aria-hidden="true" />
          </a>
        </div>
      </div>
    </section>
  )
}
