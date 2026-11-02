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
                <motion.h1
                    className="text-4xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-6xl"
                    variants={fadeUpVariants}
                >
                    منصة نالش لإنشاء متجرك الإلكتروني
                </motion.h1>
                <motion.p
                    className="mt-6 text-lg leading-8 text-gray-600 dark:text-gray-400 max-w-3xl mx-auto"
                    variants={fadeUpVariants}
                >
                    أنشئ متجرك الإلكتروني، أضف منتجاتك ونظّم أقسامها، وتابع الطلبات من لوحة تحكم واحدة.
                </motion.p>
            </div>

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