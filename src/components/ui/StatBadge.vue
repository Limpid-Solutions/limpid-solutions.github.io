<template>
  <div class="stat-badge">
    <span class="stat-badge__value">{{ value }}</span>
    <span class="stat-badge__label">{{ label }}</span>
  </div>
</template>

<script setup>
defineProps({
  value: { type: [String, Number], required: true },
  label: { type: String, required: true },
});
</script>

<style scoped>
.stat-badge {
  display: inline-flex;
  align-items: center;
  gap: var(--space-2);
  padding: 0.625rem 1.25rem 0.625rem 0.875rem;
  background: rgba(255, 255, 255, 0.7);
  backdrop-filter: blur(8px);
  border: 1px solid var(--color-border);
  border-radius: 999px;
  box-shadow: var(--shadow-sm);
}

.stat-badge__value {
  font-family: var(--font-display);
  font-weight: 600;
  font-size: var(--fs-2xl);
  color: var(--color-deep);
  line-height: 1;
}

.stat-badge__label {
  font-size: var(--fs-sm);
  color: var(--color-text-soft);
  font-weight: 500;
}
</style>
