<template>
  <section
    id="contact"
    class="section section--mist contact"
    aria-labelledby="contact-title"
  >
    <BaseContainer>
      <div class="contact__card reveal">
        <span class="eyebrow">Contact us</span>
        <h2 id="contact-title">Ready to bring clarity to your next project?</h2>
        <p>
          Get in touch with the Limpid Solutions team to discuss how we can
          help your organisation build better systems.
        </p>
        <div class="contact__actions">
          <a :href="`mailto:${site.email}`" class="btn btn--accent">
            <Icon icon="lucide:mail" width="16" height="16" />
            {{ site.email }}
          </a>
          <span class="contact__sep" aria-hidden="true">·</span>
          <span class="contact__loc">
            <Icon icon="lucide:map-pin" width="16" height="16" />
            {{ site.location }}
          </span>
        </div>
      </div>
    </BaseContainer>
  </section>
</template>

<script setup>
import { Icon } from '@iconify/vue';
import BaseContainer from '../ui/BaseContainer.vue';
import site from '../../data/site.js';
</script>

<style scoped>
.contact__card {
  background: var(--color-bg);
  border-radius: var(--radius-lg);
  box-shadow: var(--shadow-lg);
  padding: var(--space-5) var(--space-4);
  text-align: center;
  max-width: 720px;
  margin-inline: auto;
}

.contact__card h2 {
  margin-top: var(--space-2);
  margin-bottom: var(--space-3);
}

.contact__card p {
  max-width: 52ch;
  margin-inline: auto;
}

.contact__actions {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  gap: var(--space-2);
  margin-top: var(--space-4);
}

.contact__sep {
  color: var(--color-border);
  font-size: var(--fs-xl);
}

.contact__loc {
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  color: var(--color-text-soft);
  font-size: var(--fs-sm);
}

@media (min-width: 720px) {
  .contact__card {
    padding: var(--space-6) var(--space-6);
  }
}
</style>
