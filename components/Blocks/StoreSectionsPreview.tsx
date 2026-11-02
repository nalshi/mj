import Link from "next/link"
import {
  ArrowDown,
  ArrowUp,
  Eye,
  EyeOff,
  Grid2X2,
  LayoutTemplate,
  ListFilter,
  Pencil,
} from "lucide-react"

const layoutModes = [
  {
    label: "أقسام متتابعة حسب الفئة",
    icon: ListFilter,
  },
  {
    label: "تبويبات حسب الفئة",
    icon: LayoutTemplate,
  },
  {
    label: "شبكة منتجات موحدة",
    icon: Grid2X2,
  },
  {
    label: "المنتج المميز أولاً",
    icon: Eye,
  },
]

export function StoreSectionsPreview() {
  return (
    <section
      id="sections"
      className="scroll-mt-24 rounded-3xl bg-muted/50 px-5 py-16 dark:bg-neutral-900 sm:px-8 sm:py-20"
    >
      <div className="grid items-center gap-10 lg:grid-cols-[minmax(0,0.85fr)_minmax(0,1.15fr)]">
        <div>
          <h2 className="text-3xl font-bold tracking-tight text-neutral-900 dark:text-white sm:text-4xl">
            رتّب أقسام متجرك كما تحب
          </h2>
          <p className="mt-4 text-lg leading-8 text-neutral-600 dark:text-neutral-300">
            تحكّم بترتيب أقسام الواجهة وظهورها وعناوينها، ثم اختر طريقة عرض المنتجات والتصنيفات من أدوات لوحة نالش.
          </p>
          <Link
            href="/guide#sections"
            className="mt-6 inline-flex min-h-11 items-center font-semibold text-primary underline-offset-4 hover:underline"
          >
            اقرأ دليل إعداد الأقسام
          </Link>
        </div>

        <div
          data-ui="true"
          className="overflow-hidden rounded-2xl border border-neutral-200 bg-white dark:border-neutral-700 dark:bg-neutral-950"
        >
          <div className="border-b border-neutral-200 px-5 py-4 dark:border-neutral-700">
            <h3 className="text-lg font-bold">أقسام واجهة المتجر</h3>
            <p className="mt-1 text-sm text-muted-foreground">
              نموذج توضيحي لبعض الخيارات المتاحة
            </p>
          </div>

          <div className="space-y-3 p-4 sm:p-5">
            {[
              { label: "واجهة المتجر", note: "العنوان · الوصف · زر الدعوة", visible: true },
              { label: "التصنيفات", note: "شريط تمرير أو شبكة أعمدة", visible: true },
              { label: "المنتجات", note: "عرض المنتجات حسب إعدادات متجرك", visible: false },
            ].map((section, index) => (
              <div
                key={section.label}
                className="flex items-center gap-3 rounded-xl bg-muted/50 px-3 py-3 dark:bg-neutral-900 sm:px-4"
              >
                <div className="flex shrink-0 items-center gap-1 text-muted-foreground" aria-hidden="true">
                  <ArrowUp className="size-4" />
                  <ArrowDown className="size-4" />
                </div>
                <div className="grid size-9 shrink-0 place-items-center rounded-lg bg-background dark:bg-neutral-800" aria-hidden="true">
                  {section.visible ? (
                    <Eye className="size-4" />
                  ) : (
                    <EyeOff className="size-4" />
                  )}
                </div>
                <div className="min-w-0 flex-1">
                  <p className="truncate font-semibold">{section.label}</p>
                  <p className="truncate text-sm text-neutral-700 dark:text-neutral-300">
                    {section.note}
                  </p>
                </div>
                <span className="flex shrink-0 items-center gap-1 text-sm text-muted-foreground">
                  <Pencil className="size-4" aria-hidden="true" />
                  <span className="sr-only">تعديل القسم {index + 1}</span>
                </span>
              </div>
            ))}
          </div>

          <div className="border-t border-neutral-200 px-5 py-4 dark:border-neutral-700">
            <h4 className="mb-3 font-semibold">طرق ترتيب المنتجات</h4>
            <ul className="grid gap-2 sm:grid-cols-2 xl:grid-cols-4">
              {layoutModes.map(({ label, icon: Icon }) => (
                <li
                  key={label}
                  className="flex items-center gap-2 rounded-lg bg-muted/50 px-3 py-2 text-sm dark:bg-neutral-900"
                >
                  <Icon className="size-4 shrink-0 text-primary" aria-hidden="true" />
                  <span>{label}</span>
                </li>
              ))}
            </ul>
            <p className="mt-3 text-sm leading-6 text-muted-foreground">
              ويمكن عرض المنتج المميز أولاً، وتحديد نمط التصنيفات وعدد أعمدة الشبكة.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
