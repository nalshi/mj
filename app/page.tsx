import { FaqSection } from "@/components/Blocks/FaqSection";
import { FeaturesSection } from "@/components/Blocks/FeatureSection";
import Hero from "@/components/Blocks/Hero";
import { LogoCarousel } from "@/components/Blocks/LogoCarousel";
import { PricingSection } from "@/components/Blocks/PricingSection";
import { TestimonialSection } from "@/components/Blocks/TestimonialSection";
import { StoreSectionsPreview } from "@/components/Blocks/StoreSectionsPreview";
import { ThemePreviewSection } from "@/components/Blocks/ThemePreviewSection";
import { TeamSection } from "@/components/Blocks/TeamSection";

export default function Home() {
  const softwareSchema = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name: "نالش",
    applicationCategory: "BusinessApplication",
    operatingSystem: "Web",
    description:
      "منصة عربية بواجهة خفيفة وسريعة الاستخدام لإنشاء المتاجر الإلكترونية وإدارة المنتجات والطلبات وتخصيص واجهات المتاجر.",
    offers: {
      "@type": "Offer",
      price: "0",
      priceCurrency: "YER",
    },
    featureList: [
      "إنشاء متجر إلكتروني",
      "إدارة المنتجات والأقسام",
      "تخصيص قوالب المتجر",
      "متابعة الطلبات والمخزون",
      "واجهة خفيفة وسريعة الاستخدام للوصول إلى أدوات المتجر",
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(softwareSchema) }}
      />
      <main className="min-h-screen bg-white dark:bg-black">
        <div className="mx-auto max-w-7xl px-6 pt-40">
          <Hero />
          <LogoCarousel />
          <FeaturesSection />
          <StoreSectionsPreview />
          <TeamSection />
          <TestimonialSection />
          <PricingSection />
          <FaqSection />
          <ThemePreviewSection />
        </div>
      </main>
    </>
  );
}
