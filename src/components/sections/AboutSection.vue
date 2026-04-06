<template>
  <section id="about" class="section about" aria-labelledby="about-title">
    <BaseContainer>
      <div class="about__grid">
        <SectionHeading
          eyebrow="Who we are"
          title="Clarity through technology."
          headingId="about-title"
        />
        <div class="about__body reveal">
          <p>
            Limpid Solutions is a premier software consulting firm with over
            <strong>40 years of combined expertise</strong> in solution
            consulting, system architecture design and end-to-end implementation
            across mission-critical industries.
          </p>
          <p>
            We partner with organisations to deliver clarity through technology
            — transforming complex business challenges into robust, scalable and
            maintainable software systems.
          </p>
          <ul class="about__quick">
            <li>
              <a href="#services">Our services <Icon icon="lucide:arrow-right" width="14" height="14" /></a>
            </li>
            <li>
              <a href="#industries">Industries we serve <Icon icon="lucide:arrow-right" width="14" height="14" /></a>
            </li>
            <li>
              <a href="#tech">Technology stack <Icon icon="lucide:arrow-right" width="14" height="14" /></a>
            </li>
          </ul>
        </div>
      </div>
    </BaseContainer>
  </section>
</template>

<script setup>
import { Icon } from '@iconify/vue';
import BaseContainer from '../ui/BaseContainer.vue';
import SectionHeading from '../ui/SectionHeading.vue';
</script>

<style scoped>
.about__grid {
  display: grid;
  gap: var(--space-5);
  grid-template-columns: 1fr;
}

.about__body p + p {
  margin-top: var(--space-2);
}

.about__body p {
  font-size: var(--fs-lg);
}

.about__body strong {
  color: var(--color-ink);
  font-weight: 600;
}

.about__quick {
  margin-top: var(--space-4);
  display: flex;
  flex-direction: column;
  gap: 0.625rem;
}

.about__quick a {
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  color: var(--color-deep);
  font-weight: 500;
  font-size: var(--fs-base);
  position: relative;
}

.about__quick a svg {
  transition: transform var(--dur-fast) var(--ease-out);
}

.about__quick a:hover {
  color: var(--color-azure);
}

.about__quick a:hover svg {
  transform: translateX(3px);
}

@media (min-width: 960px) {
  .about__grid {
    grid-template-columns: 1fr 1.4fr;
    gap: var(--space-7);
    align-items: start;
  }
}
</style>
