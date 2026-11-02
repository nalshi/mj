import { HeadsetIcon, LinkIcon, PlusIcon, SettingsIcon, ShieldCheckIcon, SparklesIcon } from 'lucide-react'

import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion'

export function FaqSection() {
    const items = [
        {
            icon: SparklesIcon,
            title: 'ما هي منصة نالش؟',
            content:
                'نالش منصة تساعدك على إنشاء متجرك الإلكتروني وإدارة منتجاتك وأقسامك وطلباتك من لوحة تحكم واحدة.'
        },
        {
            icon: LinkIcon,
            title: 'كيف أبدأ بإنشاء متجري؟',
            content:
                'أنشئ حساباً جديداً من خلال زر «إنشاء حساب جديد»، ثم اتبع خطوات إعداد متجرك من لوحة التحكم.'
        },
        {
            icon: SettingsIcon,
            title: 'هل أستطيع تخصيص شكل المتجر؟',
            content:
                'تتيح لك المنصة إعداد واجهة متجرك واختيار مظهرها بما يناسب علامتك التجارية.'
        },
        {
            icon: SparklesIcon,
            title: 'هل استخدام نالش مجاني؟',
            content:
                'تعرض صفحة الأسعار حالياً خطة مجانية بأدوات إدارة المتجر المتاحة. راجع الصفحة نفسها إذا أعلنت نالش عن أي تحديث في الأسعار أو المزايا.',
        },
        {
            icon: ShieldCheckIcon,
            title: 'كيف أضيف منتجاتي؟',
            content:
                'أضف منتجاتك وتفاصيلها وصورها من لوحة التحكم، ثم رتّبها ضمن أقسام متجرك.'
        },
        {
            icon: HeadsetIcon,
            title: 'أين أتابع الطلبات والمخزون؟',
            content:
                'سجّل الدخول إلى لوحة التحكم لمراجعة الطلبات وإدارة المنتجات ومتابعة المخزون.'
        }
    ]
    return (
        <div id="faq" className='py-24 sm:py-32'>
            <div className="text-center mb-16">
                <h2 className="text-4xl md:text-5xl font-bold mb-4 text-neutral-800 dark:text-neutral-100">
                    أسئلة شائعة عن إنشاء متجر إلكتروني
                </h2>
                <p className="text-lg md:text-xl text-neutral-600 dark:text-neutral-400 max-w-3xl mx-auto">
                    تعرّف على إنشاء المتجر وإدارته عبر منصة نالش.
                </p>
            </div>
            <Accordion className='max-w-4xl mx-auto' defaultValue={['item-1']}>
                {items.map((item, index) => (
                    <AccordionItem key={index} value={`item-${index + 1}`}>
                        <AccordionTrigger className='py-4 **:data-[slot=accordion-trigger-icon]:hidden'>
                            <span className='flex items-center gap-4'>
                                <item.icon className='size-4 shrink-0' />
                                <span>{item.title}</span>
                            </span>
                            <PlusIcon className='text-muted-foreground pointer-events-none ml-auto size-4 shrink-0 transition-transform duration-200 group-aria-expanded/accordion-trigger:rotate-45' />
                        </AccordionTrigger>
                        <AccordionContent className='text-muted-foreground'>{item.content}</AccordionContent>
                    </AccordionItem>
                ))}
            </Accordion>
        </div>
    )
}
