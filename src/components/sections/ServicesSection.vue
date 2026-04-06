<template>
  <section
    id="services"
    class="section section--surface"
    aria-labelledby="services-title"
  >
    <BaseContainer>
      <SectionHeading
        eyebrow="What we do"
        title="From strategy to shipped software."
        lede="We provide deep technical consulting and hands-on delivery across the full software lifecycle."
        center
        headingId="services-title"
      />
      <div class="services__grid">
        <IconCard
          v-for="service in services"
          :key="service.title"
          :icon="service.icon"
          :title="service.title"
          :body="service.body"
        />
      </div>
    </BaseContainer>
  </section>
</template>

<script setup>
import BaseContainer from '../ui/BaseContainer.vue';
import SectionHeading from '../ui/SectionHeading.vue';
import IconCard from '../ui/IconCard.vue';
import services from '../../data/services.js';
</script>

<style scoped>
.services__grid {
  display: grid;
  grid-template-columns: 1fr;
  gap: var(--space-3);
}

@media (min-width: 640px) {
  .services__grid {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (min-width: 960px) {
  .services__grid {
    grid-template-columns: repeat(3, 1fr);
    gap: var(--space-4);
  }
}
</style>
