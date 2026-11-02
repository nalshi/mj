"use client"

import { ShimmerButton } from "@/components/ui/shimmer-button"
import Link from "next/link"
import {
    MERCHANT_SIGN_IN_URL,
    MERCHANT_SIGN_UP_URL,
} from "@/lib/constants"
import { motion, type Variants } from "motion/react"

// Animation variants for staggered children
const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.15,
            delayChildren: 0.1,
        },
    },
}

const fadeUpVariants: Variants = {
    hidden: {
        opacity: 0,
        y: 20,
    },
    visible: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.5,
            ease: "easeOut",  // Using named easing instead of custom bezier
        },
    },
}

const Hero = () => {
    return (
        <motion.div
            id="home"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
        >
            {/* Hero Text */}
            <div className="text-center mt-8">
                <motion.div
                    className="mb-5 inline-flex items-center gap-2 rounded-full border border-neutral-200 bg-white/80 px-3 py-1.5 text-sm font-medium text-neutral-700 shadow-sm backdrop-blur-sm dark:border-neutral-800 dark:bg-neutral-900/70 dark:text-neutral-200"
                    variants={fadeUpVariants}
                >
                    <span className="h-2 w-2 rounded-full bg-emerald-500" />
                    متجر ذكي • سريع • آمن • مرن
                </motion.div>
                <motion.h1
                    className="text-4xl font-black tracking-tight text-gray-900 dark:text-white sm:text-6xl"
                    variants={fadeUpVariants}
                >
                    منصة نالش الخارقة لبناء متجر إلكتروني مميز
                </motion.h1>
                <motion.p
                    className="mt-6 text-lg leading-8 text-gray-600 dark:text-gray-400 max-w-4xl mx-auto"
                    variants={fadeUpVariants}
                >
                    ابدأ متجرك بشكل احترافي مع أدوات ذكية، إدارة فورية للمنتجات والطلبات، واجهة خفيفة، تجربة مستقرة وآمنة، وإمكانية التوسع السريع بدون تعقيد أو تكاليف إضافية.
                </motion.p>
            </div>

            <motion.div
                className="mt-8 flex flex-wrap items-center justify-center gap-3 text-sm text-neutral-600 dark:text-neutral-300"
                variants={fadeUpVariants}
            >
                {[
                    "ذكاء اصطناعي",
                    "أمان وثقة",
                    "سرعة لا تضاهى",
                    "مرونة عالية",
                    "مجاني ومفتوح",
                ].map((item) => (
                    <span
                        key={item}
                        className="rounded-full border border-neutral-200 bg-neutral-50 px-3 py-1.5 dark:border-neutral-800 dark:bg-neutral-900"
                    >
                        {item}
                    </span>
                ))}
            </motion.div>

            {/* Hero Actions */}
            <motion.div
                className="my-6 mb-12 flex items-center justify-center gap-x-4"
                variants={fadeUpVariants}
            >
                <ShimmerButton onClick={() => window.location.assign(MERCHANT_SIGN_UP_URL)}>
                    أنشئ حسابك وابدأ
                </ShimmerButton>
                <Link
                    href={MERCHANT_SIGN_IN_URL}
                    className="text-sm font-medium text-neutral-700 hover:text-primary dark:text-neutral-200"
                >
                    لديك حساب؟ سجّل الدخول
                </Link>
            </motion.div>
        </motion.div>
    )
}

export default Hero