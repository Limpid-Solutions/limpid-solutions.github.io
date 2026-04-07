<template>
  <footer class="site-footer">
    <div class="container site-footer__inner">
      <div class="site-footer__brand">
        <a href="#top" class="site-footer__logo">
          <img src="/logos/limpidsolutions.png" alt="" class="site-footer__logo-img" aria-hidden="true" />
          {{ site.shortName }}
        </a>
        <p>{{ site.tagline }}</p>
      </div>

      <nav class="site-footer__nav" aria-label="Footer">
        <h4>Explore</h4>
        <ul>
          <li v-for="link in site.navLinks" :key="link.href">
            <a :href="link.href">{{ link.label }}</a>
          </li>
          <li><a href="#contact">Contact</a></li>
        </ul>
      </nav>

      <div class="site-footer__contact">
        <h4>Get in touch</h4>
        <ul>
          <li>
            <a :href="`mailto:${site.email}`">{{ site.email }}</a>
          </li>
          <li>{{ site.location }}</li>
        </ul>
      </div>
    </div>

    <div class="container site-footer__bottom">
      <span>&copy; {{ year }} {{ site.company }}. All rights reserved.</span>
    </div>
  </footer>
</template>

<script setup>
import site from '../../data/site.js';
const year = new Date().getFullYear();
</script>

<style scoped>
.site-footer {
  background: var(--color-ink);
  color: rgba(242, 247, 251, 0.7);
  padding-top: var(--space-7);
}

.site-footer__inner {
  display: grid;
  grid-template-columns: 1fr;
  gap: var(--space-5);
  padding-bottom: var(--space-6);
}

.site-footer__brand p {
  margin-top: var(--space-2);
  color: rgba(242, 247, 251, 0.6);
  max-width: 32ch;
}

.site-footer__logo {
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  font-family: var(--font-display);
  font-size: var(--fs-xl);
  font-weight: 600;
  color: #fff;
}

.site-footer__logo-img {
  height: 28px;
  width: auto;
  object-fit: contain;
  filter: brightness(0) invert(1);
  opacity: 0.9;
}

.site-footer h4 {
  font-family: var(--font-sans);
  color: #fff;
  font-size: var(--fs-sm);
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.12em;
  margin-bottom: var(--space-2);
}

.site-footer ul {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}

.site-footer a {
  color: rgba(242, 247, 251, 0.78);
  font-size: var(--fs-sm);
}

.site-footer a:hover {
  color: var(--color-glacier);
}

.site-footer__bottom {
  display: flex;
  flex-wrap: wrap;
  gap: var(--space-2);
  justify-content: space-between;
  align-items: center;
  padding-block: var(--space-3);
  border-top: 1px solid rgba(242, 247, 251, 0.12);
  font-size: var(--fs-xs);
  color: rgba(242, 247, 251, 0.5);
}

@media (min-width: 720px) {
  .site-footer__inner {
    grid-template-columns: 2fr 1fr 1fr;
    gap: var(--space-6);
  }
}
</style>
