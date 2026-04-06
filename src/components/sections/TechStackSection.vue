<template>
  <section
    id="tech"
    class="section section--surface"
    aria-labelledby="tech-title"
  >
    <BaseContainer>
      <SectionHeading
        eyebrow="Our stack"
        title="Pragmatic technology choices."
        lede="We are language-agnostic pragmatists who match the right technology to the problem. Our competencies span systems, services, cloud, security and interfaces — designed cloud-first and secure-by-default."
        headingId="tech-title"
      />
      <ul class="tech-list reveal">
        <li v-for="row in techStack" :key="row.domain" class="tech-row">
          <span class="tech-row__domain">{{ row.domain }}</span>
          <span class="tech-row__techs">
            <span v-for="(t, i) in row.techs" :key="t" class="tech-pill">
              {{ t }}<template v-if="i < row.techs.length - 1">,&nbsp;</template>
            </span>
          </span>
        </li>
      </ul>
    </BaseContainer>
  </section>
</template>

<script setup>
import BaseContainer from '../ui/BaseContainer.vue';
import SectionHeading from '../ui/SectionHeading.vue';
import techStack from '../../data/techStack.js';
</script>

<style scoped>
.tech-list {
  border-top: 1px solid var(--color-border);
}

.tech-row {
  display: grid;
  grid-template-columns: 1fr;
  gap: 0.25rem;
  padding: var(--space-3) 0;
  border-bottom: 1px solid var(--color-border);
  transition: background var(--dur-fast) var(--ease-out);
}

.tech-row:hover {
  background: rgba(30, 136, 200, 0.04);
}

.tech-row__domain {
  font-family: var(--font-display);
  font-size: var(--fs-xl);
  font-weight: 500;
  color: var(--color-ink);
  letter-spacing: -0.01em;
}

.tech-row__techs {
  font-size: var(--fs-base);
  color: var(--color-text-soft);
  display: flex;
  flex-wrap: wrap;
}

@media (min-width: 720px) {
  .tech-row {
    grid-template-columns: 280px 1fr;
    align-items: baseline;
    gap: var(--space-3);
  }
}
</style>
