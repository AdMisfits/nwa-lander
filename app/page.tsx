import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import SectionTabs from "@/components/SectionTabs";
import Promotions from "@/components/Promotions";
import Products from "@/components/Products";
import WhyNwa from "@/components/WhyNwa";
import QuizCta from "@/components/QuizCta";
import Reviews from "@/components/Reviews";
import ContactForm from "@/components/ContactForm";
import Faq from "@/components/Faq";
import ContactInfo from "@/components/ContactInfo";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <SectionTabs />
      <Promotions />
      <Products />
      <WhyNwa />
      <QuizCta />
      <Reviews />
      <ContactForm />
      <Faq />
      <ContactInfo />
      <Footer />
    </>
  );
}
