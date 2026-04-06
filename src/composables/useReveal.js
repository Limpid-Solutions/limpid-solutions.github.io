import { onMounted, onBeforeUnmount } from 'vue';

// Mounts a single shared IntersectionObserver and watches all elements
// with the `.reveal` class inside the document. Once an element enters the
// viewport, it gains `.is-visible` and is unobserved.
let observer = null;
let refCount = 0;

function getObserver() {
  if (observer) return observer;
  observer = new IntersectionObserver(
    (entries) => {
      for (const entry of entries) {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          observer.unobserve(entry.target);
        }
      }
    },
    {
      rootMargin: '0px 0px -10% 0px',
      threshold: 0.15,
    }
  );
  return observer;
}

export function useReveal() {
  onMounted(() => {
    refCount += 1;
    // requestAnimationFrame ensures DOM is painted before query
    requestAnimationFrame(() => {
      const obs = getObserver();
      const els = document.querySelectorAll('.reveal:not(.is-visible)');
      els.forEach((el) => obs.observe(el));
    });
  });

  onBeforeUnmount(() => {
    refCount -= 1;
    if (refCount <= 0 && observer) {
      observer.disconnect();
      observer = null;
      refCount = 0;
    }
  });
}
