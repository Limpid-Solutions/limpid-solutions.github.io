<template>
  <header
    class="site-header"
    :class="{ 'site-header--scrolled': scrolled, 'site-header--menu-open': menuOpen }"
  >
    <div class="container site-header__inner">
      <a href="#top" class="site-header__brand" @click="closeMenu">
        <span class="site-header__mark" aria-hidden="true">
          <svg viewBox="0 0 24 24" width="22" height="22" fill="none">
            <path
              d="M12 2C12 2 4 11 4 16a8 8 0 1 0 16 0c0-5-8-14-8-14Z"
              stroke="currentColor"
              stroke-width="1.6"
              stroke-linejoin="round"
            />
          </svg>
        </span>
        <span class="site-header__name">{{ site.shortName }}</span>
      </a>

      <nav class="site-header__nav" aria-label="Primary">
        <ul>
          <li v-for="link in site.navLinks" :key="link.href">
            <a :href="link.href" @click="closeMenu">{{ link.label }}</a>
          </li>
          <li>
            <a href="#contact" @click="closeMenu">Contact</a>
          </li>
        </ul>
      </nav>

      <button
        class="site-header__toggle"
        type="button"
        :aria-expanded="menuOpen"
        aria-controls="primary-mobile-nav"
        aria-label="Toggle navigation menu"
        @click="toggleMenu"
      >
        <Icon :icon="menuOpen ? 'lucide:x' : 'lucide:menu'" width="24" height="24" />
      </button>
    </div>

    <div
      id="primary-mobile-nav"
      class="site-header__mobile"
      :hidden="!menuOpen"
      role="dialog"
      aria-label="Mobile navigation"
    >
      <ul>
        <li v-for="link in site.navLinks" :key="link.href">
          <a :href="link.href" @click="closeMenu">{{ link.label }}</a>
        </li>
        <li>
          <a href="#contact" class="btn btn--primary" @click="closeMenu">Contact</a>
        </li>
      </ul>
    </div>
  </header>
</template>

<script setup>
import { ref, onMounted, onBeforeUnmount } from 'vue';
import { Icon } from '@iconify/vue';
import site from '../../data/site.js';
import { useScrolled } from '../../composables/useScrolled.js';

const scrolled = useScrolled(24);
const menuOpen = ref(false);

function toggleMenu() {
  menuOpen.value = !menuOpen.value;
}
function closeMenu() {
  menuOpen.value = false;
}
function onKey(e) {
  if (e.key === 'Escape') closeMenu();
}

onMounted(() => window.addEventListener('keydown', onKey));
onBeforeUnmount(() => window.removeEventListener('keydown', onKey));
</script>

<style scoped>
.site-header {
  position: fixed;
  inset: 0 0 auto 0;
  z-index: 50;
  height: var(--header-h);
  background: transparent;
  color: var(--color-ink);
  transition:
    background var(--dur-med) var(--ease-out),
    color var(--dur-med) var(--ease-out),
    box-shadow var(--dur-med) var(--ease-out),
    border-color var(--dur-med) var(--ease-out);
  border-bottom: 1px solid transparent;
}

.site-header--scrolled {
  background: rgba(255, 255, 255, 0.92);
  backdrop-filter: saturate(180%) blur(14px);
  -webkit-backdrop-filter: saturate(180%) blur(14px);
  color: var(--color-ink);
  box-shadow: var(--shadow-sm);
  border-bottom-color: var(--color-border);
}

.site-header__inner {
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: var(--space-3);
}

.site-header__brand {
  display: inline-flex;
  align-items: center;
  gap: 0.625rem;
  color: inherit;
  font-family: var(--font-display);
  font-size: var(--fs-xl);
  font-weight: 600;
  letter-spacing: -0.01em;
}

.site-header__brand:hover {
  color: inherit;
}

.site-header__mark {
  display: inline-flex;
  color: var(--color-deep);
}

.site-header__nav {
  display: none;
  align-items: center;
  gap: var(--space-4);
}

.site-header__nav ul {
  display: flex;
  align-items: center;
  gap: var(--space-4);
}

.site-header__nav a {
  position: relative;
  color: inherit;
  font-size: var(--fs-sm);
  font-weight: 500;
  padding: 0.25rem 0;
}

.site-header__nav a::after {
  content: '';
  position: absolute;
  left: 0;
  bottom: -2px;
  width: 0;
  height: 1.5px;
  background: currentColor;
  transition: width var(--dur-med) var(--ease-out);
}

.site-header__nav a:hover {
  color: inherit;
}

.site-header__nav a:hover::after {
  width: 100%;
}


.site-header__toggle {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 44px;
  height: 44px;
  border-radius: var(--radius-sm);
  color: inherit;
  transition: background var(--dur-fast) var(--ease-out);
}

.site-header__toggle:hover {
  background: var(--color-mist);
}

.site-header__mobile {
  background: var(--color-bg);
  border-top: 1px solid var(--color-border);
  box-shadow: var(--shadow-md);
  color: var(--color-ink);
}

.site-header__mobile ul {
  display: flex;
  flex-direction: column;
  padding: var(--space-3);
  gap: var(--space-2);
}

.site-header__mobile a {
  display: block;
  padding: 0.875rem 1rem;
  color: var(--color-ink);
  font-weight: 500;
  border-radius: var(--radius-sm);
}

.site-header__mobile a:hover {
  background: var(--color-mist);
  color: var(--color-deep);
}

.site-header__mobile .btn--primary {
  color: #fff;
}

@media (min-width: 960px) {
  .site-header__nav {
    display: flex;
  }
  .site-header__toggle {
    display: none;
  }
  .site-header__mobile {
    display: none;
  }
}
</style>
