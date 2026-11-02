import Image from "next/image"
import Link from "next/link"

export function NalshBrand({ className = "" }: { className?: string }) {
  return (
    <Link
      href="/"
      aria-label="نالش — الصفحة الرئيسية"
      className={`inline-flex items-center gap-2 ${className}`}
    >
      <span className="grid size-[38px] shrink-0 place-items-center overflow-hidden rounded-xl bg-white dark:bg-neutral-950">
        <Image
          src="/nalsh-mark-light.svg"
          alt=""
          width={38}
          height={38}
          className="dark:hidden"
          priority
        />
        <Image
          src="/nalsh-mark-dark.svg"
          alt=""
          width={38}
          height={38}
          className="hidden dark:block"
          priority
        />
      </span>
      <span className="flex flex-col leading-tight">
        <span className="text-lg font-bold text-gray-900 dark:text-white">نالش</span>
        <span className="text-xs font-medium text-muted-foreground" dir="ltr">Nalsh</span>
      </span>
    </Link>
  )
}
