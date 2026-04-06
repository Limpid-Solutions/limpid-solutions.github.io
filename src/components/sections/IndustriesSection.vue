<template>
  <section id="industries" class="section" aria-labelledby="industries-title">
    <BaseContainer>
      <SectionHeading
        eyebrow="Industries"
        title="Domain fluency where it matters."
        lede="Our consultants bring deep sector knowledge to every engagement — across regulated, high-stakes, real-time environments."
        headingId="industries-title"
      />
      <div class="industries__grid">
        <IconCard
          v-for="industry in industries"
          :key="industry.title"
          :icon="industry.icon"
          :title="industry.title"
          :body="industry.body"
          :featured="industry.featured"
          :class="{ 'industries__featured': industry.featured }"
        />
      </div>
    </BaseContainer>
  </section>
</template>

<script setup>
import BaseContainer from '../ui/BaseContainer.vue';
import SectionHeading from '../ui/SectionHeading.vue';
import IconCard from '../ui/IconCard.vue';
import industries from '../../data/industries.js';
</script>

<style scoped>
.industries__grid {
  display: grid;
  grid-template-columns: 1fr;
  gap: var(--space-3);
}

@media (min-width: 640px) {
  .industries__grid {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (min-width: 960px) {
  .industries__grid {
    grid-template-columns: repeat(3, 1fr);
    gap: var(--space-4);
  }

  .industries__grid :deep(.industries__featured) {
    grid-column: span 2;
  }
}
</style>
