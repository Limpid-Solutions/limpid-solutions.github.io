<template>
  <div class="section-heading reveal" :class="{ 'section-heading--center': center }">
    <span v-if="eyebrow" class="eyebrow">{{ eyebrow }}</span>
    <h2 :id="headingId">{{ title }}</h2>
    <p v-if="lede" class="lede">{{ lede }}</p>
  </div>
</template>

<script setup>
defineProps({
  eyebrow: String,
  title: { type: String, required: true },
  lede: String,
  center: { type: Boolean, default: false },
  headingId: String,
});
</script>

<style scoped>
.section-heading {
  margin-bottom: var(--space-5);
  max-width: 60ch;
}

.section-heading--center {
  text-align: center;
  margin-inline: auto;
}

.section-heading h2 {
  margin-bottom: var(--space-2);
}
</style>
