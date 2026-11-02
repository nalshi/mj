"use client"

import { useState } from 'react'
import {
  BadgePercent,
  Boxes,
  CirclePause,
  CirclePlay,
  Gauge,
  PackageCheck,
  Palette,
  ShoppingBag,
  ShoppingBasket,
  Store,
  Tags,
} from 'lucide-react'

const shoppingFeatures = [
  { name: 'إنشاء متجر إلكتروني', icon: Store },
  { name: 'إدارة المنتجات', icon: ShoppingBag },
  { name: 'تنظيم فئات المنتجات', icon: Tags },
  { name: 'متابعة المخزون', icon: PackageCheck },
  { name: 'متابعة الطلبات', icon: ShoppingBasket },
  { name: 'تخصيص تصميم المتجر', icon: Palette },
  { name: 'إدارة العروض', icon: BadgePercent },
  { name: 'تنظيم الأقسام', icon: Boxes },
  { name: 'واجهة خفيفة وسريعة الاستخدام', icon: Gauge },
]

export function LogoCarousel() {
  const [isPausedByUser, setIsPausedByUser] = useState(false)
  const [isInteracting, setIsInteracting] = useState(false)
  const isPaused = isPausedByUser || isInteracting

  return (
    <section
      id="store-tools"
      aria-labelledby="store-tools-heading"
      className="pb-12 pt-24 sm:pb-16 lg:pb-20"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-6 flex items-center justify-between gap-4">
          <h2
            id="store-tools-heading"
            className="text-xl font-bold text-neutral-900 dark:text-white sm:text-2xl"
          >
            أدوات إدارة المتجر الإلكتروني
          </h2>
          <button
            type="button"
            onClick={() => setIsPausedByUser((paused) => !paused)}
            aria-label={
              isPausedByUser
                ? 'تشغيل شريط أدوات المتجر'
                : 'إيقاف شريط أدوات المتجر'
            }
            aria-pressed={isPausedByUser}
            className="grid size-11 shrink-0 place-items-center rounded-full text-neutral-700 transition-colors hover:bg-muted focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary dark:text-neutral-200"
          >
            {isPaused ? (
              <CirclePlay className="size-5" aria-hidden="true" />
            ) : (
              <CirclePause className="size-5" aria-hidden="true" />
            )}
          </button>
        </div>

        <div
          className="store-tools-scroll overflow-hidden"
          dir="ltr"
          role="region"
          aria-label="شريط متحرك لمزايا منصة نالش"
          onMouseEnter={() => setIsInteracting(true)}
          onMouseLeave={() => setIsInteracting(false)}
          onFocus={() => setIsInteracting(true)}
          onBlur={(event) => {
            if (!event.currentTarget.contains(event.relatedTarget)) {
              setIsInteracting(false)
            }
          }}
        >
          <div className={`flex w-max ${isPaused ? 'animate-logo-scroll-paused' : 'animate-logo-scroll'}`}>
            {[0, 1].map((row) => (
              <ul
                key={row}
                aria-hidden={row === 1}
                className="flex w-max shrink-0 items-center gap-8 pe-8 sm:gap-12 sm:pe-12"
              >
                {shoppingFeatures.map(({ name, icon: Icon }) => (
                  <li
                    key={name}
                    className="flex h-16 shrink-0 items-center gap-3"
                    dir="rtl"
                  >
                    <Icon
                      className="size-6 shrink-0 text-primary"
                      aria-hidden="true"
                    />
                    <span className="whitespace-nowrap text-base font-semibold text-neutral-800 dark:text-neutral-100 sm:text-lg">
                      {name}
                    </span>
                  </li>
                ))}
              </ul>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
