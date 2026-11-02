'use client'
import { AnimatedThemeToggler } from '@/components/ui/animated-theme-toggler'
import { Button } from '@/components/ui/button'
import { cn } from '@/lib/utils'
import {
    MERCHANT_SIGN_IN_URL,
    MERCHANT_SIGN_UP_URL,
} from '@/lib/constants'
import { NalshBrand } from '@/components/nalsh-brand'
import { Menu, X } from 'lucide-react'
import Link from 'next/link'
import React from 'react'

const menuItems = [
    { name: 'المزايا', href: '/#features' },
    { name: 'أدوات المتجر', href: '/#store-tools' },
    { name: 'إعداد الأقسام', href: '/#sections' },
    { name: 'خطوات البدء', href: '/#team' },
    { name: 'أدوات الإدارة', href: '/#testimonials' },
    { name: 'الخطة المجانية', href: '/#pricing' },
    { name: 'الأسئلة الشائعة', href: '/#faq' },
    { name: 'الثيمات', href: '/#themes' },
    { name: 'دليل الاستخدام', href: '/guide' },
]

export const Navbar = () => {
    const [menuState, setMenuState] = React.useState(false)
    const [isScrolled, setIsScrolled] = React.useState(false)

    React.useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50)
        }
        window.addEventListener('scroll', handleScroll)
        return () => window.removeEventListener('scroll', handleScroll)
    }, [])
    return (
        <nav
            data-state={menuState && 'active'}
            aria-label="التنقل الرئيسي"
            className="fixed z-20 w-full px-2">
            <div className={cn('mx-auto mt-2 max-w-7xl px-4 transition-all duration-300 sm:px-6 2xl:px-8', isScrolled && 'rounded-3xl border bg-background/90 backdrop-blur-lg')}>
                <div className="relative flex flex-wrap items-center justify-between gap-4 py-2 lg:py-2.5 xl:flex-nowrap">
                    <div className="flex w-full justify-between xl:w-auto xl:shrink-0">
                        <NalshBrand />

                        <button
                            onClick={() => setMenuState(!menuState)}
                            aria-label={menuState ? 'إغلاق القائمة' : 'فتح القائمة'}
                            aria-expanded={menuState}
                            className="relative z-20 -m-2.5 -mr-4 block cursor-pointer p-2.5 xl:hidden">
                            <Menu className="in-data-[state=active]:rotate-180 in-data-[state=active]:scale-0 in-data-[state=active]:opacity-0 m-auto size-6 duration-200" />
                            <X className="in-data-[state=active]:rotate-0 in-data-[state=active]:scale-100 in-data-[state=active]:opacity-100 absolute inset-0 m-auto size-6 -rotate-180 scale-0 opacity-0 duration-200" />
                        </button>
                    </div>

                    <div className="hidden min-w-0 flex-1 xl:block">
                        <ul className="flex flex-wrap items-center justify-center gap-x-3 gap-y-2 2xl:gap-x-4">
                            {menuItems.map((item) => (
                                <li key={item.href}>
                                    <Link
                                        href={item.href}
                                        className="block whitespace-nowrap text-sm text-muted-foreground duration-150 hover:text-accent-foreground 2xl:text-[0.9375rem]">
                                        <span>{item.name}</span>
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div className="in-data-[state=active]:flex mb-6 hidden w-full flex-wrap items-center justify-end space-y-8 rounded-3xl border bg-background p-6 shadow-2xl shadow-zinc-300/20 md:flex-nowrap xl:m-0 xl:flex xl:w-fit xl:shrink-0 xl:gap-3 xl:space-y-0 xl:border-transparent xl:bg-transparent xl:p-0 xl:shadow-none dark:shadow-none dark:xl:bg-transparent">
                        <div className="w-full xl:hidden">
                            <ul className="grid gap-4 text-base sm:grid-cols-2">
                                {menuItems.map((item) => (
                                    <li key={item.href}>
                                        <Link
                                            href={item.href}
                                            onClick={() => setMenuState(false)}
                                            className="text-muted-foreground hover:text-accent-foreground block duration-150">
                                            <span>{item.name}</span>
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </div>
                        <div className="flex w-full flex-col space-y-3 sm:flex-row sm:gap-3 sm:space-y-0 md:w-fit">
                            <AnimatedThemeToggler />
                            <Button
                                size="sm"
                                variant="outline"
                                className="rounded-full px-3 text-sm xl:inline-flex"
                                render={<Link href={MERCHANT_SIGN_IN_URL} />}
                                nativeButton={false}
                            >
                                <span>تسجيل الدخول</span>
                            </Button>
                            <Button
                                size="sm"
                                className="rounded-full px-3 text-sm xl:inline-flex"
                                render={<Link href={MERCHANT_SIGN_UP_URL} />}
                                nativeButton={false}
                            >
                                <span>إنشاء حساب جديد</span>
                            </Button>
                        </div>
                    </div>
                </div>
            </div>
        </nav>
    )
}