
import FAQSection from "@/components/Home/FAQSection";
import { Features } from "@/components/Home/Feature";
import HeroSection from "@/components/Home/HeroSection";
import { Steps } from "@/components/Home/HowItWork";
import { Partners } from "@/components/Home/Partners";
import { Pricing } from "@/components/Home/Pricing";
import ProblemSection from "@/components/Home/ProblemSection";
import SecuritySection from "@/components/Home/SecuritySection";
import SolutionSection from "@/components/Home/SolutionSection";
import { Testimonial } from "@/components/Home/Testimonial";
import { Footer } from "@/components/shared/Foo";
import Image from "next/image";

export default function Home() {
  return (
    <div>
      <HeroSection />
      <Features />
      <Steps />
      <Testimonial />
      <Pricing />
      <Partners />

      <ProblemSection />
      <SolutionSection />

      <FAQSection />
      <SecuritySection />

      <Footer />
    </div>
  );
}
