// Minimal SPA router — no dependency on vue-router.
// currentPath is a module-level reactive ref shared across all components.
import { ref } from 'vue';

export const currentPath = ref(window.location.pathname);

export function navigate(path) {
  if (currentPath.value === path) return;
  history.pushState(null, '', path);
  currentPath.value = path;
  window.scrollTo({ top: 0, behavior: 'instant' });
}

// Keep in sync when the user presses the browser back/forward buttons.
window.addEventListener('popstate', () => {
  currentPath.value = window.location.pathname;
});
