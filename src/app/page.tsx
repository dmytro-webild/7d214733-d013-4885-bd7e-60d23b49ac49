"use client";

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import ReactLenis from "lenis/react";
import BlogCardOne from '@/components/sections/blog/BlogCardOne';
import ContactSplitForm from '@/components/sections/contact/ContactSplitForm';
import FaqBase from '@/components/sections/faq/FaqBase';
import FeatureCardTwentyEight from '@/components/sections/feature/FeatureCardTwentyEight';
import FooterBaseReveal from '@/components/sections/footer/FooterBaseReveal';
import HeroBillboardCarousel from '@/components/sections/hero/HeroBillboardCarousel';
import InlineImageSplitTextAbout from '@/components/sections/about/InlineImageSplitTextAbout';
import MetricCardEleven from '@/components/sections/metrics/MetricCardEleven';
import NavbarStyleApple from '@/components/navbar/NavbarStyleApple/NavbarStyleApple';
import TestimonialCardTen from '@/components/sections/testimonial/TestimonialCardTen';

export default function LandingPage() {
  return (
    <ThemeProvider
        defaultButtonVariant="bounce-effect"
        defaultTextAnimation="entrance-slide"
        borderRadius="pill"
        contentWidth="compact"
        sizing="largeSizeMediumTitles"
        background="circleGradient"
        cardStyle="glass-elevated"
        primaryButtonStyle="gradient"
        secondaryButtonStyle="glass"
        headingFontWeight="normal"
    >
      <ReactLenis root>
  <div id="nav" data-section="nav">
      <NavbarStyleApple
      navItems={[
        { name: "Home", id: "hero" },
        { name: "Work", id: "features" },
        { name: "About", id: "about" },
        { name: "Contact", id: "contact" }
      ]}
      brandName="Tawfiq Abdallah's Portfolio"
    />
  </div>

  <div id="hero" data-section="hero">
      <HeroBillboardCarousel
      background={{ variant: "radial-gradient" }}
      title="Design that tells your story"
      description="Explore bold, purposeful creative work. From concept to execution, every project reflects strategic thinking and meticulous craft."
      buttons={[
        { text: "View My Work", href: "#features" },
      ]}
      mediaItems={[
        { imageSrc: "http://img.b2bpic.net/free-photo/professional-studio-setup-ai-generated-content-photography-editing_482257-126882.jpg", imageAlt: "Creative workspace" },
        { imageSrc: "http://img.b2bpic.net/free-photo/representations-user-experience-interface-design_23-2150104519.jpg", imageAlt: "Digital design interface" },
        { imageSrc: "http://img.b2bpic.net/free-photo/abstract-banner-lego-art-poster-transparent-psd-file_460848-6828.jpg", imageAlt: "Geometric abstract art" },
        { imageSrc: "http://img.b2bpic.net/free-photo/flat-lay-assortment-with-drawings_23-2148577674.jpg", imageAlt: "Design sketch process" },
        { imageSrc: "http://img.b2bpic.net/free-photo/surreal-geometric-shapes-barren-desert_23-2151296377.jpg", imageAlt: "Architecture design concept" },
        { imageSrc: "http://img.b2bpic.net/free-photo/customer-feedback-concept-with-hand-holding-ball_23-2150030243.jpg", imageAlt: "Branding materials" },
      ]}
    />
  </div>

  <div id="about" data-section="about">
      <InlineImageSplitTextAbout
      useInvertedBackground={true}
      heading={[
        { type: "text", content: "Crafting digital experiences with " },
        { type: "image", src: "http://img.b2bpic.net/free-photo/asian-architect-woman_53876-31462.jpg", alt: "Creative focus" },
        { type: "text", content: " passion and purpose." },
      ]}
    />
  </div>

  <div id="features" data-section="features">
      <FeatureCardTwentyEight
      animationType="slide-up"
      textboxLayout="split"
      useInvertedBackground={false}
      features={[
        { id: "f1", title: "Brand Strategy", subtitle: "Full identity design", category: "Branding", value: "2023" },
        { id: "f2", title: "UX Research", subtitle: "User testing and wireframing", category: "UI/UX", value: "2024" },
        { id: "f3", title: "Web Platform", subtitle: "Front-end dev and design", category: "Web", value: "2024" },
      ]}
      title="Selected Works"
      description="A curated collection of design and development projects."
    />
  </div>

  <div id="metrics" data-section="metrics">
      <MetricCardEleven
      animationType="slide-up"
      textboxLayout="default"
      useInvertedBackground={true}
      metrics={[
        { id: "m1", value: "50+", title: "Projects", description: "Completed globally", imageSrc: "http://img.b2bpic.net/free-photo/still-life-graphic-design-studio_23-2151320710.jpg" },
        { id: "m2", value: "15+", title: "Brands", description: "Successfully launched", imageSrc: "http://img.b2bpic.net/free-photo/people-working-office_329181-13532.jpg" },
        { id: "m3", value: "100%", title: "Satisfaction", description: "Client rating", imageSrc: "http://img.b2bpic.net/free-photo/stationery-concept_23-2147800658.jpg" },
      ]}
      title="Impact by Numbers"
      description="Quantifiable results from my recent collaborations."
    />
  </div>

  <div id="testimonials" data-section="testimonials">
      <TestimonialCardTen
      textboxLayout="split"
      useInvertedBackground={false}
      testimonials={[
        { id: "t1", title: "Exceptional Work", quote: "Incredible attention to detail.", name: "Sarah Miller", role: "Director", imageSrc: "http://img.b2bpic.net/free-photo/young-woman-model-holding-book-red-wall_114579-56021.jpg" },
        { id: "t2", title: "Creative Genius", quote: "Transformed our identity perfectly.", name: "John Doe", role: "CEO", imageSrc: "http://img.b2bpic.net/free-photo/close-up-shot-happy-cute-interracial-young-couple-having-fun-cafe-breakfast_273609-9731.jpg" },
        { id: "t3", title: "Delivered Results", quote: "Exceeded all performance goals.", name: "Emma Wilson", role: "Manager", imageSrc: "http://img.b2bpic.net/free-photo/young-businessman-happy-expression_1194-1647.jpg" },
        { id: "t4", title: "Professionalism", quote: "Clear, concise, and talented.", name: "Mark Evans", role: "Founder", imageSrc: "http://img.b2bpic.net/free-photo/colleagues-smiling-speaking-discussing-drawings-new-ideas_176420-1674.jpg" },
        { id: "t5", title: "Highly Recommend", quote: "Best creative partner ever.", name: "Lucy Chen", role: "Designer", imageSrc: "http://img.b2bpic.net/free-photo/smiling-senior-engineer-solar-panels-plant-reading-documentation_482257-120499.jpg" },
      ]}
      title="Client Feedback"
      description="What partners say about the work."
    />
  </div>

  <div id="faq" data-section="faq">
      <FaqBase
      textboxLayout="split"
      useInvertedBackground={true}
      faqs={[
        { id: "q1", title: "Availability", content: "I am currently accepting new creative work." },
        { id: "q2", title: "Pricing", content: "Prices vary based on project scope." },
        { id: "q3", title: "Collaboration", content: "Happy to discuss new partnerships." },
      ]}
      title="Common Questions"
      description="Need more information about the process?"
      faqsAnimation="slide-up"
    />
  </div>

  <div id="blog" data-section="blog">
      <BlogCardOne
      animationType="slide-up"
      textboxLayout="split"
      useInvertedBackground={false}
      title="Creative Insights"
      description="Articles on design, strategy, and tech."
      blogs={[
        { id: "b1", category: "Design", title: "Future of UI", excerpt: "Exploring emerging trends.", imageSrc: "http://img.b2bpic.net/free-photo/digital-art-style-illustration-graphic-designer_23-2151536941.jpg", authorName: "Creative Portfolio", authorAvatar: "http://img.b2bpic.net/free-photo/pretty-woman-suit-posing-white-background-portrait-attractive-lady-black-jacket-laughing-isolated-backdrop_197531-18494.jpg", date: "2024-05" },
        { id: "b2", category: "Branding", title: "Identity Strategy", excerpt: "How to build brands.", imageSrc: "http://img.b2bpic.net/free-photo/documents-paperwork-business-strategy-concept_53876-124265.jpg", authorName: "Creative Portfolio", authorAvatar: "http://img.b2bpic.net/free-photo/businessman-with-his-partner-working-office_1157-33258.jpg", date: "2024-06" },
        { id: "b3", category: "Tech", title: "Design Trends", excerpt: "Visual styles for 2025.", imageSrc: "http://img.b2bpic.net/free-photo/music-equalizer-button-multimedia-icon_53876-21281.jpg", authorName: "Creative Portfolio", authorAvatar: "http://img.b2bpic.net/free-photo/smiling-woman-black-blazer-portrait_23-2152009548.jpg", date: "2024-07" },
      ]}
    />
  </div>

  <div id="contact" data-section="contact">
      <ContactSplitForm
      useInvertedBackground={true}
      title="Let's Connect"
      description="Ready to start your next creative project? Reach out below."
      inputs={[
        { name: "name", type: "text", placeholder: "Name" },
        { name: "email", type: "email", placeholder: "Email Address" },
      ]}
      textarea={{
        name: "message",        placeholder: "Your Project Details",        rows: 4,
      }}
      imageSrc="http://img.b2bpic.net/free-photo/scissor-book-twig-white-table-against-gray-backdrop_23-2147924482.jpg"
    />
  </div>

  <div id="footer" data-section="footer">
      <FooterBaseReveal
      logoText="PORTFOLIO"
      columns={[
        {
          title: "Pages",          items: [
            { label: "Work", href: "#features" },
            { label: "About", href: "#about" },
          ],
        },
        {
          title: "Social",          items: [
            { label: "Twitter", href: "#" },
            { label: "LinkedIn", href: "#" },
          ],
        },
      ]}
      copyrightText="© 2024 Portfolio. All rights reserved."
    />
  </div>
      </ReactLenis>
    </ThemeProvider>
  );
}
