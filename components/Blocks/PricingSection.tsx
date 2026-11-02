import { Check } from "lucide-react"
import { MERCHANT_SIGN_UP_URL } from "@/lib/constants"

const includedFeatures = [
  "إنشاء متجر إلكتروني وإعداد بياناته الأساسية",
  "إضافة المنتجات والصور وإدارة المخزون",
  "إنشاء الفئات وتنظيم المنتجات",
  "استقبال الطلبات وتحديث حالتها ومتابعتها",
  "تخصيص واجهة المتجر واختيار القالب والوضع الفاتح أو الداكن",
  "تعديل أقسام المتجر وترتيبها وإظهارها أو إخفاؤها",
  "ضبط هوية المتجر والإعلانات والخطوط المتاحة",
]

export function PricingSection() {
  return (
    <section
      id="pricing"
      aria-labelledby="pricing-heading"
      className="scroll-mt-24 py-24 sm:py-32"
    >
      <header className="mx-auto mb-10 max-w-3xl text-center">
        <h2
          id="pricing-heading"
          className="text-3xl font-bold tracking-tight text-neutral-900 dark:text-white sm:text-4xl"
        >
          تكلفة إنشاء متجر إلكتروني مع نالش
        </h2>
        <p className="mt-4 text-lg leading-8 text-neutral-700 dark:text-neutral-300">
          ابدأ بمتجرك الإلكتروني مجاناً، واستفد من أدوات الإدارة المتاحة في لوحة التحكم.
        </p>
      </header>

      <article
        data-ui="true"
        className="mx-auto grid max-w-5xl gap-8 rounded-3xl bg-muted/50 p-6 dark:bg-neutral-900 sm:p-10 lg:grid-cols-[minmax(0,0.8fr)_minmax(0,1.2fr)] lg:items-center"
      >
        <div>
          <h3 className="text-2xl font-bold text-neutral-900 dark:text-white">
            الخطة المجانية
          </h3>
          <p className="mt-2 text-base leading-7 text-neutral-700 dark:text-neutral-300">
            الأدوات الأساسية لإنشاء متجرك وإدارة منتجاتك وطلباتك.
          </p>
          <p className="mt-6 text-5xl font-bold tracking-tight text-neutral-950 dark:text-white">
            مجاناً
          </p>
          <p className="mt-1 text-base text-neutral-700 dark:text-neutral-300">
            السعر المعروض حالياً
          </p>
          <a
            href={MERCHANT_SIGN_UP_URL}
            className="mt-6 inline-flex min-h-12 items-center justify-center rounded-full bg-neutral-950 px-6 font-semibold text-white transition-colors hover:bg-neutral-800 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary dark:bg-white dark:text-neutral-950 dark:hover:bg-neutral-200"
          >
            أنشئ متجرك مجاناً
          </a>
        </div>

        <div>
          <h3 className="mb-5 text-lg font-bold text-neutral-900 dark:text-white">
            الأدوات المتاحة في لوحة التحكم
          </h3>
          <ul className="grid gap-4 sm:grid-cols-2">
            {includedFeatures.map((feature) => (
              <li key={feature} className="flex items-start gap-3">
                <Check
                  className="mt-1 size-5 shrink-0 text-emerald-700 dark:text-emerald-300"
                  aria-hidden="true"
                />
                <span className="text-base leading-7 text-neutral-800 dark:text-neutral-200">
                  {feature}
                </span>
              </li>
            ))}
          </ul>
        </div>
      </article>
    </section>
  )
}
