<template>
  <a href="#main" class="skip-link">Skip to main content</a>
  <SiteHeader />
  <main id="main">
    <AboutPage v-if="currentPath === '/about'" />
    <template v-else>
      <HeroSection />
      <ServicesSection />
      <IndustriesSection />
      <TechStackSection />
      <WhyUsSection />
      <CustomersSection />
      <ContactSection />
    </template>
  </main>
  <SiteFooter />
</template>

<script setup>
import SiteHeader from './components/layout/SiteHeader.vue';
import SiteFooter from './components/layout/SiteFooter.vue';
import HeroSection from './components/sections/HeroSection.vue';
import ServicesSection from './components/sections/ServicesSection.vue';
import IndustriesSection from './components/sections/IndustriesSection.vue';
import TechStackSection from './components/sections/TechStackSection.vue';
import WhyUsSection from './components/sections/WhyUsSection.vue';
import CustomersSection from './components/sections/CustomersSection.vue';
import ContactSection from './components/sections/ContactSection.vue';
import AboutPage from './pages/AboutPage.vue';
import { useReveal } from './composables/useReveal.js';
import { currentPath } from './composables/useRouter.js';

useReveal();
</script>
