<template>
  <section id="top" class="hero">
    <div class="hero__bg" aria-hidden="true">
      <svg
        class="hero__wave"
        viewBox="0 0 1200 800"
        preserveAspectRatio="xMaxYMax slice"
      >
        <defs>
          <linearGradient id="waveGrad" x1="0" x2="0" y1="0" y2="1">
            <stop offset="0" stop-color="#C9E4F2" stop-opacity="0.95" />
            <stop offset="1" stop-color="#E6F1F8" stop-opacity="0.4" />
          </linearGradient>
          <linearGradient id="waveGrad2" x1="0" x2="0" y1="0" y2="1">
            <stop offset="0" stop-color="#1E88C8" stop-opacity="0.18" />
            <stop offset="1" stop-color="#1E88C8" stop-opacity="0" />
          </linearGradient>
        </defs>
        <path
          d="M0,560 C220,460 420,640 660,540 C880,450 1040,560 1200,500 L1200,800 L0,800 Z"
          fill="url(#waveGrad)"
        />
        <path
          d="M0,640 C260,560 480,720 720,620 C920,540 1060,650 1200,600 L1200,800 L0,800 Z"
          fill="url(#waveGrad2)"
        />
      </svg>
      <div class="hero__grid"></div>
    </div>

    <BaseContainer>
      <div class="hero__content">
        <span class="eyebrow reveal">Software consulting</span>
        <h1 class="hero__headline reveal">{{ site.heroHeadline }}</h1>
        <p class="hero__lede lede reveal">{{ site.heroLede }}</p>
        <div class="hero__cta reveal">
          <a href="#contact" class="btn btn--primary">
            Talk to us
            <Icon icon="lucide:arrow-right" width="16" height="16" />
          </a>
          <a href="#services" class="btn btn--ghost">See what we do</a>
        </div>
        <div class="hero__badge reveal">
          <StatBadge :value="`${site.yearsExperience}+`" label="years of delivery experience" />
        </div>
      </div>
    </BaseContainer>
  </section>
</template>

<script setup>
import { Icon } from '@iconify/vue';
import BaseContainer from '../ui/BaseContainer.vue';
import StatBadge from '../ui/StatBadge.vue';
import site from '../../data/site.js';
</script>

<style scoped>
.hero {
  position: relative;
  min-height: 100vh;
  display: flex;
  align-items: center;
  padding-top: calc(var(--header-h) + var(--space-5));
  padding-bottom: var(--space-7);
  background: linear-gradient(180deg, #ffffff 0%, var(--color-mist) 100%);
  overflow: hidden;
  isolation: isolate;
}

.hero__bg {
  position: absolute;
  inset: 0;
  z-index: -1;
  pointer-events: none;
}

.hero__wave {
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
}

.hero__grid {
  position: absolute;
  inset: 0;
  background-image:
    linear-gradient(to right, rgba(11, 61, 102, 0.06) 1px, transparent 1px),
    linear-gradient(to bottom, rgba(11, 61, 102, 0.06) 1px, transparent 1px);
  background-size: 56px 56px;
  mask-image: radial-gradient(ellipse 80% 60% at 30% 20%, #000 30%, transparent 75%);
  -webkit-mask-image: radial-gradient(ellipse 80% 60% at 30% 20%, #000 30%, transparent 75%);
}

.hero__content {
  max-width: 64ch;
  display: flex;
  flex-direction: column;
  gap: var(--space-3);
}

.hero__headline {
  font-size: clamp(2.5rem, 5.5vw + 1rem, 4rem);
  line-height: 1.05;
  letter-spacing: -0.025em;
}

.hero__lede {
  font-size: clamp(var(--fs-base), 1.2vw + 0.75rem, var(--fs-xl));
  color: var(--color-text-soft);
  max-width: 56ch;
}

.hero__cta {
  display: flex;
  flex-wrap: wrap;
  gap: var(--space-2);
  margin-top: var(--space-2);
}

.hero__badge {
  margin-top: var(--space-3);
}

@media (min-width: 960px) {
  .hero__headline {
    font-size: clamp(3rem, 4.2vw + 1rem, 4.5rem);
  }
}
</style>
