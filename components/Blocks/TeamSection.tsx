"use client";

import { Card, CardContent } from "@/components/ui/card";
import { ClipboardList, PackagePlus, Palette, Store } from "lucide-react";
import { motion } from "motion/react";

export function TeamSection() {
    const teamMembers = [
        {
            name: "أنشئ متجرك",
            role: "مساحة خاصة بنشاطك",
            description: "ابدأ واجهة متجرك الإلكتروني وجهّزها لعرض منتجاتك.",
            icon: Store,
        },
        {
            name: "أضف منتجاتك",
            role: "كتالوج منظّم",
            description: "أدخل المنتجات وتفاصيلها وصنّفها ضمن أقسام متجرك.",
            icon: PackagePlus,
        },
        {
            name: "خصّص الواجهة",
            role: "بهوية علامتك",
            description: "رتّب واجهة المتجر واختر مظهراً يناسب نشاطك التجاري.",
            icon: Palette,
        },
        {
            name: "أدِر الطلبات",
            role: "من لوحة التحكم",
            description: "تابع الطلبات والمنتجات ومخزون متجرك من مكان واحد.",
            icon: ClipboardList,
        },
    ];

    return (
        <div id="team" className="max-w-7xl mx-auto py-16 px-4">
            <motion.div
                className="text-center mb-16"
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.5 }}
                transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
            >
                <h2 className="text-4xl md:text-5xl font-bold mb-4 text-neutral-800 dark:text-neutral-100">
                    خطوات إنشاء متجرك الإلكتروني
                </h2>
                <p className="text-lg md:text-xl text-neutral-600 dark:text-neutral-400 max-w-3xl mx-auto">
                    جهّز متجرك، أضف منتجاتك، ثم تابع الطلبات من لوحة تحكم نالش.
                </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {teamMembers.map((member, index) => (
                    <motion.div
                        key={member.name}
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, amount: 0.3 }}
                        transition={{
                            duration: 0.6,
                            delay: index * 0.15,
                            ease: [0.22, 1, 0.36, 1],
                        }}
                    >
                        <Card className="group hover:shadow-lg transition-all duration-300 border border-neutral-200 dark:border-neutral-800 h-full">
                            <CardContent className="p-6 text-center">
                                <span className="mx-auto mb-4 grid size-20 place-items-center rounded-full bg-neutral-100 text-neutral-800 dark:bg-neutral-800 dark:text-neutral-100">
                                    <member.icon className="size-9" aria-hidden="true" />
                                </span>

                                <h3 className="text-xl font-bold mb-1 text-neutral-800 dark:text-neutral-100">
                                    {member.name}
                                </h3>

                                <p className="text-sm font-medium text-neutral-600 dark:text-neutral-400 mb-3">
                                    {member.role}
                                </p>

                                <p className="text-sm text-neutral-600 dark:text-neutral-300 mb-4">
                                    {member.description}
                                </p>

                            </CardContent>
                        </Card>
                    </motion.div>
                ))}
            </div>
        </div>
    );
}
