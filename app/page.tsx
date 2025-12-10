import Header from '@/components/header';
import HeroSection from '@/components/hero-section';
import ServicesSection from '@/components/services-section';
import InvestmentSection from '@/components/investment-section';
import ProcessSection from '@/components/process-section';
import PortfolioSection from '@/components/portfolio-section';
import InvestmentCalculator from '@/components/investment-calculator';
import RequirementsSection from '@/components/requirements-section';
import AdvisorySection from '@/components/advisory-section';
import TeamSection from '@/components/team-section';
import PartnersSection from '@/components/partners-section';
import PitchForm from '@/components/pitch-form';
import ResourcesSection from '@/components/resources-section';
import FAQSection from '@/components/faq-section';
import NewsletterSection from '@/components/newsletter-section';
import BlogSection from '@/components/blog-section';
import Footer from '@/components/footer';

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />
      <HeroSection />
      <ServicesSection />
      <InvestmentSection />
      <ProcessSection />
      <PortfolioSection />
      <InvestmentCalculator />
      <RequirementsSection />
      <AdvisorySection />
      <TeamSection />
      <PartnersSection />
      <PitchForm />
      <ResourcesSection />
      <FAQSection />
      <NewsletterSection />
      <BlogSection />
      <Footer />
    </main>
  );
}
