<template>
  <section id="customers" class="section" aria-labelledby="customers-title">
    <BaseContainer>
      <SectionHeading
        eyebrow="Trusted by"
        title="Industry leaders we work with."
        lede="We are proud to support organisations whose systems carry real operational and commercial weight."
        center
        headingId="customers-title"
      />
      <div class="customers__grid">
        <a
          v-for="customer in customers"
          :key="customer.name"
          :href="customer.url"
          target="_blank"
          rel="noopener noreferrer"
          class="customer-card reveal"
          :class="{ 'customer-card--dark': customer.darkBg }"
          :aria-label="`${customer.name} — opens in a new tab`"
        >
          <Icon
            class="customer-card__arrow"
            icon="lucide:arrow-up-right"
            width="18"
            height="18"
          />
          <div class="customer-card__logo">
            <img
              v-if="customer.logo"
              :src="customer.logo"
              :alt="customer.name"
              loading="lazy"
              :style="customer.logoFilter ? { filter: customer.logoFilter } : {}"
            />
            <span v-else class="customer-card__name-fallback">{{ customer.name }}</span>
          </div>
          <span class="customer-card__industry">{{ customer.industry }}</span>
        </a>
      </div>
    </BaseContainer>
  </section>
</template>

<script setup>
import { Icon } from '@iconify/vue';
import BaseContainer from '../ui/BaseContainer.vue';
import SectionHeading from '../ui/SectionHeading.vue';
import customers from '../../data/customers.js';
</script>

<style scoped>
.customers__grid {
  display: grid;
  grid-template-columns: 1fr;
  gap: var(--space-3);
}

.customer-card {
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-between;
  gap: var(--space-3);
  padding: var(--space-4);
  background: var(--color-bg);
  border: 1px solid var(--color-border);
  border-radius: var(--radius-md);
  color: var(--color-ink);
  min-height: 160px;
  transition:
    transform var(--dur-med) var(--ease-out),
    border-color var(--dur-med) var(--ease-out),
    box-shadow var(--dur-med) var(--ease-out);
}

.customer-card:hover {
  transform: translateY(-4px);
  border-color: var(--color-azure);
  box-shadow: var(--shadow-md);
  color: var(--color-ink);
}

.customer-card__arrow {
  position: absolute;
  top: var(--space-3);
  right: var(--space-3);
  color: var(--color-text-soft);
  transition:
    transform var(--dur-fast) var(--ease-out),
    color var(--dur-fast) var(--ease-out);
}

.customer-card:hover .customer-card__arrow {
  transform: translate(2px, -2px);
  color: var(--color-azure);
}

.customer-card__logo {
  flex: 1;
  display: flex;
  align-items: center;
}

.customer-card__logo img {
  max-height: 52px;
  max-width: 180px;
  width: auto;
  object-fit: contain;
  filter: none;
  transition: filter var(--dur-med) var(--ease-out), opacity var(--dur-med) var(--ease-out);
  opacity: 0.85;
}

.customer-card:hover .customer-card__logo img {
  opacity: 1;
}


.customer-card__name-fallback {
  font-family: var(--font-display);
  font-size: var(--fs-lg);
  font-weight: 600;
  color: var(--color-ink);
}

.customer-card__industry {
  font-size: var(--fs-xs);
  text-transform: uppercase;
  letter-spacing: 0.12em;
  color: var(--color-text-soft);
  font-weight: 600;
}

@media (min-width: 720px) {
  .customers__grid {
    grid-template-columns: repeat(3, 1fr);
    gap: var(--space-4);
  }
}
</style>
