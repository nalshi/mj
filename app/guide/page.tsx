import Link from "next/link"
import type { Metadata } from "next"
import {
  MERCHANT_SIGN_IN_URL,
  MERCHANT_SIGN_UP_URL,
} from "@/lib/constants"

export const metadata: Metadata = {
  title: "دليل استخدام منصة نالش وسياساتها",
  description:
    "دليل تفصيلي لاستخدام لوحة التاجر في نالش: إنشاء المتجر وإدارة المنتجات والأقسام والثيمات والطلبات. يشمل مسودات سياسات الاستخدام والخصوصية.",
}

const guideSections = [
  { href: "#getting-started", label: "البدء وإنشاء الحساب" },
  { href: "#store-setup", label: "إعداد المتجر" },
  { href: "#products", label: "المنتجات والأقسام" },
  { href: "#sections", label: "إعداد أقسام المتجر" },
  { href: "#store-identity", label: "هوية المتجر وخطوطه" },
  { href: "#design", label: "الثيمات وتصميم الواجهة" },
  { href: "#orders", label: "الطلبات والمخزون" },
  { href: "#account-safety", label: "أمان الحساب" },
  { href: "#usage-policy", label: "سياسة الاستخدام" },
  { href: "#privacy-policy", label: "الخصوصية والبيانات" },
]

export default function GuidePage() {
  return (
    <main className="min-h-screen bg-white px-4 pb-20 pt-32 text-right dark:bg-black sm:px-6">
      <article className="mx-auto max-w-5xl">
        <header className="mb-10">
          <h1 className="mb-4 text-4xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-5xl">
            دليل منصة نالش وسياساتها
          </h1>
          <p className="max-w-3xl text-lg leading-8 text-gray-600 dark:text-gray-300">
            مرجع عملي لإنشاء متجرك وإدارة منتجاتك وطلباتك، مع سياسة استخدام وخصوصية أولية
            تحتاج إلى مراجعة واعتماد نالش قبل اعتبارها شروطاً نهائية.
          </p>
        </header>

        <nav aria-label="محتويات الدليل" className="mb-12 rounded-2xl bg-muted/50 p-6">
          <h2 className="mb-4 text-xl font-bold text-foreground">محتويات الدليل</h2>
          <ul className="grid gap-3 sm:grid-cols-2">
            {guideSections.map((section) => (
              <li key={section.href}>
                <Link className="font-medium text-primary underline-offset-4 hover:underline" href={section.href}>
                  {section.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div className="space-y-10">
          <section id="getting-started" className="scroll-mt-28">
            <h2 className="mb-4 text-2xl font-bold text-foreground">البدء وإنشاء الحساب</h2>
            <div className="rounded-2xl bg-muted/40 p-6 leading-8 text-foreground">
              <ol className="list-decimal space-y-3 pe-6">
                <li>
                  اختر <Link className="font-semibold text-primary underline" href={MERCHANT_SIGN_UP_URL}>إنشاء حساب جديد</Link>
                  {" "}ثم أدخل رقم الجوال واسم المتجر واسم المستخدم ونوع النشاط وموقعه وكلمة المرور، بحسب الحقول المطلوبة في بوابة التاجر.
                </li>
                <li>أكمل التحقق من رقم الجوال إذا طلبته صفحة التسجيل، ولا تشارك رمز التحقق أو كلمة المرور مع أي شخص.</li>
                <li>بعد إنشاء الحساب، تابع خطوات اختيار قالب واجهة متجرك الظاهرة في اللوحة.</li>
                <li>لديك حساب؟ انتقل إلى <Link className="font-semibold text-primary underline" href={MERCHANT_SIGN_IN_URL}>تسجيل الدخول</Link> واستخدم رقم الجوال أو اسم المستخدم.</li>
              </ol>
              <p className="mt-5 text-sm text-muted-foreground">
                قد تختلف أسماء الأزرار أو ترتيب الخطوات عند تحديث لوحة التحكم؛ اتبع التعليمات المعروضة في حسابك.
              </p>
            </div>
          </section>

          <section id="store-setup" className="scroll-mt-28">
            <h2 className="mb-4 text-2xl font-bold text-foreground">إعداد المتجر لأول مرة</h2>
            <div className="rounded-2xl bg-muted/40 p-6 leading-8 text-foreground">
              <p>ابدأ بتعريف متجرك حتى يتعرف عملاؤك على نشاطك:</p>
              <ul className="mt-3 list-disc space-y-2 pe-6">
                <li>أدخل اسم المتجر ونوع النشاط، ثم راجع بيانات التواصل وإعدادات المتجر المتاحة.</li>
                <li>اكتب وصفاً موجزاً ودقيقاً يوضح ما يقدمه متجرك، وأضف شعارك إذا كان الخيار متاحاً.</li>
                <li>راجع إعدادات المتجر قبل الحفظ، ثم استخدم المعاينة للتأكد من ظهور الاسم والمعلومات كما تريد.</li>
                <li>لا تضف بيانات شخصية لعملائك في وصف المتجر أو محتوى عام.</li>
              </ul>
            </div>
          </section>

          <section id="products" className="scroll-mt-28">
            <h2 className="mb-4 text-2xl font-bold text-foreground">إضافة المنتجات وتنظيم الأقسام</h2>
            <div className="rounded-2xl bg-muted/40 p-6 leading-8 text-foreground">
              <ol className="list-decimal space-y-3 pe-6">
                <li>افتح إدارة المنتجات واختر إضافة منتج، ثم اكتب اسماً ووصفاً واضحين.</li>
                <li>أدخل السعر والكمية المتاحة والخيارات التي يقدمها المنتج، مثل المقاس أو اللون، إذا كانت مناسبة.</li>
                <li>أضف صوراً تملك حق استخدامها، واجعلها مطابقة للمنتج الفعلي.</li>
                <li>أنشئ أقساماً مناسبة وأدرج كل منتج في القسم الصحيح لتسهيل وصول العملاء إليه.</li>
                <li>تحقق من السعر والتوفر والصور قبل إتاحة المنتج في واجهة المتجر، وحدّث المخزون عند تغيره.</li>
              </ol>
              <p className="mt-5 text-sm text-muted-foreground">
                تعتمد الحقول المتاحة على إعدادات المنتج الحالية في لوحة التحكم؛ لا تنشر معلومات أو عروضاً غير دقيقة.
              </p>
            </div>
          </section>

          <section id="sections" className="scroll-mt-28">
            <h2 className="mb-4 text-2xl font-bold text-foreground">إعداد أقسام واجهة المتجر</h2>
            <div className="rounded-2xl bg-muted/40 p-6 leading-8 text-foreground">
              <p>من أداة تخصيص المتجر يمكنك التحكم في ترتيب الأقسام التي تظهر للزوار، وما تعرضه كلٌّ منها:</p>
              <ul className="mt-3 list-disc space-y-3 pe-6">
                <li>رتّب أقسام الواجهة بتحريكها إلى الأعلى أو الأسفل، وأظهر القسم أو أخفه دون حذف بياناته.</li>
                <li>عدّل عنوان كل قسم ووصفه الفرعي. وفي قسم الواجهة الرئيسية يمكنك تعديل نص زر الدعوة ورابطه ومحاذاة المحتوى، واختيار ارتفاع مناسب للشاشات الصغيرة والكبيرة.</li>
                <li>اعرض التصنيفات كشريط تمرير أفقي أو شبكة أعمدة؛ عند استخدام الشبكة اختر عدد الأعمدة المتاح من ٢ إلى ٦، واضبط حجم أيقونة الفئة.</li>
                <li>اختر طريقة عرض المنتجات: أقسام متتابعة حسب الفئات، أو تبويبات لكل فئة، أو شبكة موحدة، أو إبراز المنتج المميز أولاً.</li>
                <li>عاين الترتيب بعد تعديل العناوين والظهور وطريقة العرض، ثم احفظ إعداداتك وانشر التغييرات من لوحة التحكم عندما تكون جاهزاً.</li>
              </ul>
              <p className="mt-4 text-sm text-muted-foreground">
                تشمل أنواع الأقسام الأساسية الواجهة الرئيسية والتصنيفات والمنتجات. وقد تظهر أقسام إضافية بحسب القالب والإعدادات الحالية.
              </p>
            </div>
          </section>

          <section id="store-identity" className="scroll-mt-28">
            <h2 className="mb-4 text-2xl font-bold text-foreground">هوية المتجر والخطوط</h2>
            <div className="rounded-2xl bg-muted/40 p-6 leading-8 text-foreground">
              <ul className="list-disc space-y-3 pe-6">
                <li>حدّث اسم المتجر والشعار التسويقي ورسالة الترحيب، وأضف شعار علامتك إن كان متاحاً في الإعدادات.</li>
                <li>راجع رمز العملة ورسالة شريط الإعلانات وألوانه قبل عرضها لعملائك.</li>
                <li>من إعدادات الخطوط اختر الخط العربي ووزنه وأحجام العناوين، ثم راجع وضوح الواجهة على الهاتف والحاسوب.</li>
                <li>تتضمن خيارات الخط العربية في الاستوديو، بحسب القالب، Cairo وIBM Plex Sans Arabic وTajawal وAlmarai وAlexandria وEl Messiri وNoto Kufi Arabic وChanga.</li>
              </ul>
            </div>
          </section>

          <section id="design" className="scroll-mt-28">
            <h2 className="mb-4 text-2xl font-bold text-foreground">الثيمات وتصميم الواجهة ونشرها</h2>
            <div className="rounded-2xl bg-muted/40 p-6 leading-8 text-foreground">
              <p className="mb-3">تتضمن القوالب المتاحة حالياً: شفق النجوم، سراب المحيط، سديم الياقوت، جمشت قمري، وردة الجنيات، زمردة مسحورة، ياقوتة التنين، وشمس سماوية.</p>
              <ul className="list-disc space-y-3 pe-6">
                <li>افتح أداة تخصيص واجهة المتجر أو الاستوديو من لوحة التحكم واختر قالباً لتغيير الألوان والتصميم.</li>
                <li>عاين الوضع الفاتح والداكن، وتحقق من ألوان النصوص والبطاقات وعناصر التصفح في كل وضع.</li>
                <li>اختر تخطيط المنتجات ونمط بطاقات المتجر المتاح، ثم راجع مظهر القالب على الهاتف والحاسوب.</li>
                <li>تأكد من اكتمال بيانات المتجر والأقسام والمنتجات قبل النشر.</li>
                <li>استخدم المعاينة أولاً، ثم اختر أمر النشر الظاهر في الأداة عندما تكون مستعداً.</li>
                <li>بعد النشر، افتح رابط متجرك وتحقق من المنتجات والأقسام والروابط على الهاتف والحاسوب.</li>
              </ul>
            </div>
          </section>

          <section id="orders" className="scroll-mt-28">
            <h2 className="mb-4 text-2xl font-bold text-foreground">متابعة الطلبات والمخزون</h2>
            <div className="rounded-2xl bg-muted/40 p-6 leading-8 text-foreground">
              <ul className="list-disc space-y-3 pe-6">
                <li>راجع قائمة الطلبات بانتظام، وافتح تفاصيل كل طلب للتحقق من المنتجات والكميات ومعلومات العميل اللازمة للتنفيذ.</li>
                <li>حدّث حالة الطلب باستخدام الخيارات الظاهرة في اللوحة، ونفّذ الإجراء المناسب وفق طريقة عمل متجرك.</li>
                <li>حدّث كميات المخزون عند وصول منتجات جديدة أو نفادها، وأوقف إتاحة المنتج إذا لم يعد متوفراً.</li>
                <li>احتفظ بسجلات الطلبات والفواتير التي تحتاجها لأعمالك، والتزم بالمتطلبات النظامية ذات الصلة بنشاطك.</li>
                <li>إذا لم يظهر طلب أو تعذر تحديث منتج، أعد تحميل الصفحة وتحقق من الاتصال ثم تواصل مع دعم نالش عبر قناة الدعم الرسمية.</li>
              </ul>
            </div>
          </section>

          <section id="account-safety" className="scroll-mt-28">
            <h2 className="mb-4 text-2xl font-bold text-foreground">أمان الحساب وممارسات المتجر</h2>
            <div className="rounded-2xl bg-muted/40 p-6 leading-8 text-foreground">
              <ul className="list-disc space-y-3 pe-6">
                <li>استخدم كلمة مرور قوية وفريدة، ولا تشارك بيانات الدخول أو رموز التحقق.</li>
                <li>سجّل الخروج عند استخدام جهاز مشترك، وأبلغ الدعم إذا لاحظت نشاطاً غير معتاد.</li>
                <li>استخدم صوراً ونصوصاً تملكها أو تملك ترخيصاً لاستخدامها، واحترم حقوق الملكية الفكرية.</li>
                <li>التزم بالقوانين التي تنطبق على بلدك ونوع نشاطك، ولا تعرض منتجات محظورة أو مضللة.</li>
                <li>لا ترفع معلومات حساسة لا تحتاجها لإدارة الطلبات، ولا تستخدم بيانات العملاء خارج الغرض المرتبط بالطلب.</li>
              </ul>
            </div>
          </section>

          <section id="usage-policy" className="scroll-mt-28">
            <h2 className="mb-4 text-2xl font-bold text-foreground">سياسة الاستخدام</h2>
            <div className="space-y-5 rounded-2xl bg-muted/40 p-6 leading-8 text-foreground">
              <p className="font-semibold text-primary">مسودة أولية للمراجعة والاعتماد من إدارة نالش؛ ليست بديلاً عن الشروط القانونية المعتمدة.</p>
              <div>
                <h3 className="font-bold">الاستخدام المقبول</h3>
                <p>استخدم المنصة لإعداد متجرك وإدارة منتجاتك وطلباتك، وقدّم بيانات صحيحة ولا تنتحل صفة شخص أو نشاط آخر.</p>
              </div>
              <div>
                <h3 className="font-bold">المحتوى والمنتجات</h3>
                <p>تتحمل مسؤولية امتلاك حق نشر محتوى متجرك وصوره، ودقة معلومات المنتجات وأسعارها وتوفرها، ومشروعية السلع أو الخدمات المعروضة.</p>
              </div>
              <div>
                <h3 className="font-bold">سلوك محظور</h3>
                <p>يُمنع استخدام المنصة للاحتيال أو التضليل أو انتهاك حقوق الآخرين أو محاولة الوصول غير المصرح به إلى حسابات أو أنظمة أو بيانات.</p>
              </div>
              <div>
                <h3 className="font-bold">الحساب والأمان</h3>
                <p>أنت مسؤول عن حماية بيانات حسابك والأنشطة التي تتم من خلاله. أبلغ نالش عند الاشتباه باختراق أو استخدام غير مصرح به.</p>
              </div>
              <div>
                <h3 className="font-bold">التعليق أو الإنهاء</h3>
                <p>على إدارة نالش اعتماد إجراءات واضحة للإبلاغ والتحقيق والتعليق وإنهاء الحساب، بما يتوافق مع القانون وإشعار المستخدمين.</p>
              </div>
              <div>
                <h3 className="font-bold">الرسوم والتوافر والدعم</h3>
                <p>تعرض صفحة نالش الحالية جميع الخطط مجاناً ومن دون رسوم اشتراك. يجب أن تعكس هذه المسودة أي تحديث رسمي للأسعار أو شروط الإلغاء والتوافر وقنوات الدعم قبل نشره.</p>
              </div>
              <div>
                <h3 className="font-bold">اعتماد السياسة</h3>
                <p>ينبغي أن تنشر نالش اسم الجهة المشغّلة ووسيلة التواصل الرسمية وتاريخ السريان والقانون المختص وآلية تحديث الشروط قبل اعتبار هذه المسودة سياسة ملزمة.</p>
              </div>
            </div>
          </section>

          <section id="privacy-policy" className="scroll-mt-28">
            <h2 className="mb-4 text-2xl font-bold text-foreground">الخصوصية والبيانات</h2>
            <div className="space-y-5 rounded-2xl bg-muted/40 p-6 leading-8 text-foreground">
              <p className="font-semibold text-primary">إشعار تمهيدي: يجب على نالش استكمال التفاصيل والتحقق منها قبل نشر سياسة خصوصية نهائية.</p>
              <div>
                <h3 className="font-bold">البيانات التي قد تتعامل معها المنصة</h3>
                <p>تشمل بيانات حساب التاجر وإعدادات المتجر والمنتجات والطلبات. وقد تتضمن الطلبات معلومات يقدّمها العميل لإتمام الشراء؛ لذلك اجمع واستخدم الحد اللازم فقط.</p>
              </div>
              <div>
                <h3 className="font-bold">الغرض من الاستخدام</h3>
                <p>استخدم بيانات المتجر لتقديم وظائف الإنشاء والإدارة، وبيانات الطلب لإتمام الطلبات وتشغيل الخدمة. يجب توضيح أي أغراض إضافية للمستخدمين قبل جمع البيانات لها.</p>
              </div>
              <div>
                <h3 className="font-bold">مسؤولية التاجر</h3>
                <p>التزم بحماية بيانات عملائك، ولا تستخدمها للتسويق أو تشاركها خارج الغرض المعلن دون أساس نظامي وموافقة لازمة. احذف النسخ التي لم تعد تحتاجها وفق الأنظمة السارية.</p>
              </div>
              <div>
                <h3 className="font-bold">تفاصيل يلزم نشرها رسمياً</h3>
                <p>على نالش تحديد الجهة المسؤولة عن البيانات، ووسيلة التواصل لطلبات الخصوصية، والبيانات التي تُجمع فعلياً ومصادرها، ومقدمي الخدمة ومواقع المعالجة أو النقل، ومدد الاحتفاظ، وحقوق أصحاب البيانات وطريقة ممارستها، وآلية الإبلاغ عن الحوادث.</p>
              </div>
              <div>
                <h3 className="font-bold">تغييرات السياسة</h3>
                <p>يجب نشر تاريخ آخر تحديث وإبلاغ المستخدمين بالتغييرات الجوهرية بالطريقة المناسبة، والاحتفاظ بنسخ سابقة عند الحاجة القانونية.</p>
              </div>
            </div>
          </section>
        </div>

        <p className="mt-10 text-sm leading-7 text-muted-foreground">
          للحصول على إرشادات تناسب حسابك، سجّل الدخول إلى{" "}
          <Link className="font-semibold text-primary underline" href={MERCHANT_SIGN_IN_URL}>لوحة التحكم</Link>.
          ينبغي اعتماد سياسة الاستخدام والخصوصية من الجهة المسؤولة عن نالش قبل نشرهما باعتبارهما شروطاً نهائية.
        </p>
      </article>
    </main>
  )
}
