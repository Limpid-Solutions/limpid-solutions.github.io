<template>
  <article class="icon-card reveal" :class="{ 'icon-card--featured': featured }">
    <div class="icon-card__icon" aria-hidden="true">
      <Icon :icon="icon" width="22" height="22" />
    </div>
    <h3 class="icon-card__title">{{ title }}</h3>
    <p class="icon-card__body">{{ body }}</p>
  </article>
</template>

<script setup>
import { Icon } from '@iconify/vue';

defineProps({
  icon: { type: String, required: true },
  title: { type: String, required: true },
  body: { type: String, required: true },
  featured: { type: Boolean, default: false },
});
</script>

<style scoped>
.icon-card {
  background: var(--color-bg);
  border: 1px solid var(--color-border);
  border-radius: var(--radius-md);
  padding: var(--space-4);
  display: flex;
  flex-direction: column;
  gap: var(--space-2);
  transition:
    transform var(--dur-med) var(--ease-out),
    border-color var(--dur-med) var(--ease-out),
    box-shadow var(--dur-med) var(--ease-out);
}

.icon-card:hover {
  transform: translateY(-4px);
  border-color: var(--color-azure);
  box-shadow: var(--shadow-md);
}

.icon-card:hover .icon-card__icon {
  background: var(--color-azure);
  color: #fff;
}

.icon-card__icon {
  width: 44px;
  height: 44px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  background: var(--color-mist);
  color: var(--color-deep);
  border-radius: var(--radius-sm);
  transition:
    background var(--dur-med) var(--ease-out),
    color var(--dur-med) var(--ease-out);
}

.icon-card__title {
  font-size: var(--fs-xl);
  margin-top: var(--space-1);
}

.icon-card__body {
  font-size: var(--fs-base);
  color: var(--color-text-soft);
  line-height: 1.65;
}

.icon-card--featured {
  background: linear-gradient(180deg, var(--color-bg) 0%, var(--color-mist) 140%);
}
</style>
