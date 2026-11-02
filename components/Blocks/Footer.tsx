import Link from 'next/link';
import {
    MERCHANT_SIGN_IN_URL,
    MERCHANT_SIGN_UP_URL,
} from '@/lib/constants';
import { NalshBrand } from '@/components/nalsh-brand';

export const Footer = () => {
    return (
        <footer className="border-t border-gray-200 dark:border-gray-800 mt-24">
            <div className="mx-auto max-w-7xl px-6 py-12">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                    {/* Brand Section */}
                    <div className="col-span-1 md:col-span-1">
                        <NalshBrand className="mb-4" />
                        <p className="text-sm text-gray-600 dark:text-gray-400">
                            منصة تساعدك على إنشاء متجرك الإلكتروني وإدارة منتجاتك وطلباتك من لوحة واحدة، مع خطط مجانية.
                        </p>
                    </div>

                    {/* Product Links */}
                    <div>
                        <h4 className="text-sm font-semibold text-gray-900 dark:text-white mb-4">
                            المنصة والدليل
                        </h4>
                        <ul className="space-y-2">
                            <li>
                                <Link href="/#features" className="text-sm text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors">
                                    مزايا المنصة
                                </Link>
                            </li>
                            <li>
                                <Link href="/#sections" className="text-sm text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors">
                                إعداد الأقسام
                                </Link>
                            </li>
                            <li>
                                <Link href="/#themes" className="text-sm text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors">
                                معاينة الثيمات
                                </Link>
                            </li>
                            <li>
                                <Link href="/guide" className="text-sm text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors">
                                    دليل استخدام لوحة التحكم
                                </Link>
                            </li>
                        </ul>
                    </div>

                    {/* Company Links */}
                    <div>
                        <h4 className="text-sm font-semibold text-gray-900 dark:text-white mb-4">
                            ابدأ مع نالش
                        </h4>
                        <ul className="space-y-2">
                            <li>
                                <Link href="/#pricing" className="text-sm text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors">
                                    إنشاء متجرك
                                </Link>
                            </li>
                            <li>
                                <Link href="/guide#sections" className="text-sm text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors">
                                    إعداد واجهة المتجر
                                </Link>
                            </li>
                            <li>
                                <Link href="/#features" className="text-sm text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors">
                                    إدارة الطلبات
                                </Link>
                            </li>
                        </ul>
                    </div>

                    {/* Legal Links */}
                    <div>
                        <h4 className="text-sm font-semibold text-gray-900 dark:text-white mb-4">
                            حسابك
                        </h4>
                        <ul className="space-y-2">
                            <li>
                                <Link href="/guide#usage-policy" className="text-sm text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors">
                                    سياسة الاستخدام
                                </Link>
                            </li>
                            <li>
                                <Link href="/guide#privacy-policy" className="text-sm text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors">
                                    سياسة الخصوصية
                                </Link>
                            </li>
                            <li>
                                <Link href={MERCHANT_SIGN_UP_URL} className="text-sm text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors">
                                    إنشاء حساب جديد
                                </Link>
                            </li>
                            <li>
                                <Link href={MERCHANT_SIGN_IN_URL} className="text-sm text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors">
                                    تسجيل الدخول
                                </Link>
                            </li>
                            <li>
                                <Link href="/#faq" className="text-sm text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors">
                                    الأسئلة الشائعة
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>

                {/* Copyright */}
                <div className="mt-12 pt-8 border-t border-gray-200 dark:border-gray-800">
                    <p className="text-sm text-gray-600 dark:text-gray-400 text-center">
                        © {new Date().getFullYear()} نالش. جميع الحقوق محفوظة.
                    </p>
                </div>
            </div>
        </footer>
    );
};
