<template>
  <section
    id="why"
    class="section section--ink"
    aria-labelledby="why-title"
  >
    <BaseContainer>
      <div class="why__grid">
        <div class="why__intro">
          <span class="eyebrow">Why Limpid Solutions</span>
          <h2 id="why-title">A partner that delivers — and stays clear.</h2>
          <p>
            We work as an extension of your team. Our consultants combine deep
            engineering experience with the kind of plain communication that
            keeps complex programmes on track.
          </p>
        </div>
        <ul class="why__list">
          <li v-for="(item, i) in differentiators" :key="i" class="reveal">
            <Icon icon="lucide:check" width="18" height="18" />
            <span>{{ item }}</span>
          </li>
        </ul>
      </div>
    </BaseContainer>
  </section>
</template>

<script setup>
import { Icon } from '@iconify/vue';
import BaseContainer from '../ui/BaseContainer.vue';
import differentiators from '../../data/differentiators.js';
</script>

<style scoped>
.why__grid {
  display: grid;
  grid-template-columns: 1fr;
  gap: var(--space-5);
}

.why__intro h2 {
  margin-top: var(--space-2);
  margin-bottom: var(--space-3);
  max-width: 18ch;
}

.why__intro p {
  max-width: 42ch;
}

.why__list {
  display: flex;
  flex-direction: column;
  gap: var(--space-2);
}

.why__list li {
  display: flex;
  align-items: flex-start;
  gap: 0.875rem;
  padding: var(--space-2) 0;
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);
  font-size: var(--fs-lg);
  color: rgba(242, 247, 251, 0.92);
}

.why__list li:last-child {
  border-bottom: none;
}

.why__list svg {
  flex-shrink: 0;
  margin-top: 0.45rem;
  color: var(--color-azure);
  background: rgba(30, 136, 200, 0.18);
  border-radius: 999px;
  padding: 0.35rem;
  width: 28px;
  height: 28px;
  box-sizing: content-box;
  padding: 4px;
}

@media (min-width: 960px) {
  .why__grid {
    grid-template-columns: 1fr 1.3fr;
    gap: var(--space-7);
    align-items: start;
  }
}
</style>
