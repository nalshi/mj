import { Marquee } from "@/components/ui/marquee"
import { cn } from "@/lib/utils"
import {
    Boxes,
    ClipboardList,
    PackagePlus,
    Palette,
    Store,
    Warehouse,
    type LucideIcon,
} from "lucide-react"

const storeCapabilities = [
    {
        name: "إنشاء المتجر",
        username: "ابدأ نشاطك",
        body: "أنشئ واجهة متجرك الإلكتروني وجهّزها لعرض نشاطك التجاري.",
        icon: Store,
    },
    {
        name: "إضافة المنتجات",
        username: "جهّز الكتالوج",
        body: "أضف منتجاتك وصورها وتفاصيلها لتعرضها في متجرك.",
        icon: PackagePlus,
    },
    {
        name: "تنظيم الأقسام",
        username: "رتّب منتجاتك",
        body: "صنّف المنتجات في أقسام تساعد عملاءك على تصفح المتجر.",
        icon: Boxes,
    },
    {
        name: "تخصيص المتجر",
        username: "عبّر عن علامتك",
        body: "اختر مظهر واجهة متجرك ورتّبها بما يناسب علامتك.",
        icon: Palette,
    },
    {
        name: "متابعة الطلبات",
        username: "نظّم المبيعات",
        body: "تابع الطلبات الواردة وأدر عمليات البيع من لوحة التحكم.",
        icon: ClipboardList,
    },
    {
        name: "إدارة المخزون",
        username: "تابع منتجاتك",
        body: "راجع توفر المنتجات وكمياتها ضمن أدوات إدارة متجرك.",
        icon: Warehouse,
    },
]

const firstRow = storeCapabilities.slice(0, storeCapabilities.length / 2)
const secondRow = storeCapabilities.slice(storeCapabilities.length / 2)

const CapabilityCard = ({
    name,
    username,
    body,
    icon: Icon,
}: {
    name: string
    username: string
    body: string
    icon: LucideIcon
}) => {
    return (
        <article
            className={cn(
                "relative h-full w-64 cursor-pointer overflow-hidden rounded-xl border p-4",
                // light styles
                "border-gray-950/10 bg-muted/40",
                // dark styles
                "dark:border-gray-50/10 dark:bg-gray-50/10"
            )}
        >
            <div className="flex flex-row items-center gap-3">
                <span className="grid size-12 shrink-0 place-items-center rounded-full bg-muted">
                    <Icon className="size-6" aria-hidden="true" />
                </span>
                <div className="min-w-0">
                    <h3 className="truncate text-sm font-medium dark:text-white">
                        {name}
                    </h3>
                    <p className="text-sm font-medium text-neutral-700 dark:text-neutral-300">
                        {username}
                    </p>
                </div>
            </div>
            <p className="mt-2 text-base leading-6">{body}</p>
        </article>
    )
}

export function TestimonialSection() {
    return (
        <div id="testimonials" className="max-w-7xl mx-auto py-24 sm:py-32">
            <div className="text-center mb-16">
                <h2 className="text-4xl md:text-5xl font-bold mb-4 text-neutral-800 dark:text-neutral-100">
                    أدوات إدارة المتجر الإلكتروني
                </h2>
                <p className="text-lg md:text-xl text-neutral-600 dark:text-neutral-400 max-w-3xl mx-auto">
                    جهّز واجهة متجرك ومنتجاتك، ثم تابع الطلبات والمخزون عبر أدوات نالش.
                </p>
            </div>
            <div className="relative flex w-full flex-col items-center justify-center overflow-hidden gap-2">
                <Marquee pauseOnHover className="[--duration:20s]">
                    {firstRow.map((capability) => (
                        <CapabilityCard key={capability.username} {...capability} />
                    ))}
                </Marquee>
                <Marquee reverse pauseOnHover className="[--duration:20s]">
                    {secondRow.map((capability) => (
                        <CapabilityCard key={capability.username} {...capability} />
                    ))}
                </Marquee>
                <div className="from-background pointer-events-none absolute inset-y-0 left-0 w-1/4 bg-linear-to-r"></div>
                <div className="from-background pointer-events-none absolute inset-y-0 right-0 w-1/4 bg-linear-to-l"></div>
            </div>
        </div>
    )
}
