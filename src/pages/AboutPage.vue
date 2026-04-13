<template>
  <div class="about-page">

    <!-- Page hero -->
    <section class="about-hero">
      <div class="container about-hero__inner">
        <p class="about-hero__eyebrow">Who we are</p>
        <h1 class="about-hero__title">Built by practitioners,<br />for practitioners.</h1>
        <p class="about-hero__lede">
          Limpid Solutions is a premier software consulting firm founded by two engineers
          who spent decades in the field — and learned that clarity is the most valuable
          thing technology can deliver.
        </p>
      </div>
    </section>

    <!-- Mission -->
    <section class="about-mission section">
      <div class="container about-mission__inner">
        <div class="about-mission__text reveal">
          <h2 class="about-mission__heading">Our mission</h2>
          <p>
            Limpid Solutions partners with organisations to turn complex business
            challenges into <strong>robust, scalable and maintainable software
            systems</strong> — with over <strong>40 years of combined expertise</strong>
            across mission-critical industries including Logistics, Banking,
            Superannuation, Telecommunications and E-Commerce.
          </p>
          <p>
            We believe good architecture should feel invisible to end-users and obvious
            to the engineers who maintain it. That philosophy guides every engagement we
            take on.
          </p>
        </div>
        <div class="about-mission__stats reveal">
          <div class="stat">
            <span class="stat__value">40+</span>
            <span class="stat__label">Years combined expertise</span>
          </div>
          <div class="stat">
            <span class="stat__value">5</span>
            <span class="stat__label">Industries served</span>
          </div>
          <div class="stat">
            <span class="stat__value">2</span>
            <span class="stat__label">Founders, hands-on</span>
          </div>
        </div>
      </div>
    </section>

    <!-- Team -->
    <section class="about-team section">
      <div class="container">
        <div class="about-team__header reveal">
          <p class="eyebrow">Meet the founders</p>
          <h2>The people behind the work.</h2>
        </div>

        <div class="about-team__grid">

          <!-- Peili Zhou -->
          <article class="founder-card reveal">
            <div class="founder-card__avatar founder-card__avatar--photo" aria-hidden="true">
              <img src="/team/peili-zhou.jpg" alt="Peili Zhou" class="founder-card__photo" />
            </div>
            <div class="founder-card__body">
              <div class="founder-card__meta">
                <h3 class="founder-card__name">Peili Zhou</h3>
                <p class="founder-card__role">Co-founder &amp; Solution Architect</p>
              </div>

              <p class="founder-card__bio">
                Peili brings 20+ years of progressive leadership in solution
                architecture and systems integration. Before co-founding Limpid
                Solutions, he led end-to-end delivery of major logistics automation
                programmes — including high-speed carton sortation for Toll, an
                AutoStore fulfilment system for Catch of the Day, and a CarryStar
                automated picking solution for Simplot — and earlier in his career
                held engineering and team-lead roles at Alcatel-Lucent in Beijing.
              </p>

              <ul class="founder-card__skills">
                <li>Solution Architecture</li>
                <li>Systems Integration</li>
                <li>Logistics Automation</li>
                <li>End-to-End Delivery</li>
                <li>Team Leadership</li>
              </ul>

              <div class="founder-card__footer">
                <a
                  href="https://www.linkedin.com/in/peilizhou/"
                  target="_blank"
                  rel="noopener noreferrer"
                  class="founder-card__linkedin"
                  aria-label="Peili Zhou on LinkedIn"
                >
                  <Icon icon="mdi:linkedin" width="18" height="18" />
                  LinkedIn profile
                </a>
              </div>
            </div>
          </article>

          <!-- Dongbo Tang -->
          <article class="founder-card reveal">
            <div class="founder-card__avatar founder-card__avatar--photo" aria-hidden="true">
              <img src="/team/dongbo-tang.jpg" alt="Sandra (Dongbo) Tang" class="founder-card__photo" />
            </div>
            <div class="founder-card__body">
              <div class="founder-card__meta">
                <h3 class="founder-card__name">Sandra (Dongbo) Tang</h3>
                <p class="founder-card__role">Co-founder &amp; Solution Architect</p>
              </div>

              <p class="founder-card__bio">
                Sandra is a principal software engineer with 13+ years of experience building
                scalable, high-quality systems across fintech, healthcare, retail and
                telecommunications. She is the original author of EasyTest — an
                automation testing tool used by 600+ engineers — and has delivered
                software for organisations including ResMed, McDonald's, Macquarie
                Group, Motorola and Nortel. A National Scholarship graduate of
                Tianjin University, she holds a Security Code Black Belt from
                Macquarie Group and a Google Analytics qualification.
              </p>

              <ul class="founder-card__skills">
                <li>Full-Stack Development</li>
                <li>Test Automation</li>
                <li>System Architecture</li>
                <li>Security Engineering</li>
                <li>Fintech &amp; Healthcare</li>
              </ul>

              <div class="founder-card__footer">
                <a
                  href="https://www.linkedin.com/in/dongbotang/"
                  target="_blank"
                  rel="noopener noreferrer"
                  class="founder-card__linkedin"
                  aria-label="Sandra (Dongbo) Tang on LinkedIn"
                >
                  <Icon icon="mdi:linkedin" width="18" height="18" />
                  LinkedIn profile
                </a>
              </div>
            </div>
          </article>

        </div>
      </div>
    </section>

    <!-- CTA -->
    <section class="about-cta section">
      <div class="container about-cta__inner reveal">
        <h2 class="about-cta__heading">Ready to work together?</h2>
        <p class="about-cta__body">
          Tell us about your challenge and we'll show you how we can help.
        </p>
        <a href="/#contact" class="btn btn--primary about-cta__btn">Get in touch</a>
      </div>
    </section>

  </div>
</template>

<script setup>
import { Icon } from '@iconify/vue';
import { useReveal } from '../composables/useReveal.js';

useReveal();
</script>

<style scoped>
/* ── Hero ─────────────────────────────────────────────────── */
.about-hero {
  padding-top: calc(var(--header-h) + var(--space-8));
  padding-bottom: var(--space-7);
  background: linear-gradient(160deg, var(--color-mist) 0%, var(--color-bg) 60%);
  border-bottom: 1px solid var(--color-border);
}

.about-hero__inner {
  max-width: 760px;
}

.about-hero__eyebrow {
  font-family: var(--font-sans);
  font-size: var(--fs-sm);
  font-weight: 600;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  color: var(--color-azure);
  margin-bottom: var(--space-2);
}

.about-hero__title {
  font-family: var(--font-display);
  font-size: clamp(var(--fs-3xl), 5vw, var(--fs-5xl));
  font-weight: 500;
  line-height: 1.12;
  color: var(--color-ink);
  margin-bottom: var(--space-3);
}

.about-hero__lede {
  font-size: var(--fs-lg);
  color: var(--color-text-soft);
  max-width: 60ch;
  line-height: 1.7;
}

/* ── Mission ──────────────────────────────────────────────── */
.about-mission__inner {
  display: grid;
  gap: var(--space-6);
  grid-template-columns: 1fr;
  align-items: start;
}

.about-mission__heading {
  font-family: var(--font-display);
  font-size: var(--fs-2xl);
  font-weight: 500;
  color: var(--color-ink);
  margin-bottom: var(--space-3);
}

.about-mission__text p {
  font-size: var(--fs-lg);
  color: var(--color-text);
  line-height: 1.75;
}

.about-mission__text p + p {
  margin-top: var(--space-2);
}

.about-mission__text strong {
  color: var(--color-ink);
  font-weight: 600;
}

.about-mission__stats {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: var(--space-3);
}

.stat {
  background: var(--color-surface);
  border: 1px solid var(--color-border);
  border-radius: var(--radius-md);
  padding: var(--space-3) var(--space-2);
  text-align: center;
}

.stat__value {
  display: block;
  font-family: var(--font-display);
  font-size: var(--fs-3xl);
  font-weight: 500;
  color: var(--color-deep);
  line-height: 1;
}

.stat__label {
  display: block;
  font-size: var(--fs-xs);
  color: var(--color-text-soft);
  margin-top: 0.375rem;
  font-weight: 500;
}

/* ── Team ─────────────────────────────────────────────────── */
.about-team {
  background: var(--color-surface);
}

.about-team__header {
  margin-bottom: var(--space-5);
}

.about-team__header .eyebrow {
  font-family: var(--font-sans);
  font-size: var(--fs-sm);
  font-weight: 600;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  color: var(--color-azure);
  margin-bottom: 0.75rem;
}

.about-team__header h2 {
  font-family: var(--font-display);
  font-size: clamp(var(--fs-2xl), 3.5vw, var(--fs-4xl));
  font-weight: 500;
  color: var(--color-ink);
  line-height: 1.2;
}

.about-team__grid {
  display: grid;
  gap: var(--space-4);
  grid-template-columns: 1fr;
}

/* ── Founder card ─────────────────────────────────────────── */
.founder-card {
  background: var(--color-bg);
  border: 1px solid var(--color-border);
  border-radius: var(--radius-lg);
  padding: var(--space-4);
  display: flex;
  flex-direction: column;
  gap: var(--space-3);
  box-shadow: var(--shadow-sm);
  transition: box-shadow var(--dur-med) var(--ease-out);
}

.founder-card:hover {
  box-shadow: var(--shadow-md);
}

.founder-card__avatar {
  width: 72px;
  height: 72px;
  border-radius: 50%;
  background: var(--color-deep);
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
}

.founder-card__avatar--alt {
  background: var(--color-accent);
}

.founder-card__avatar span {
  font-family: var(--font-display);
  font-size: var(--fs-xl);
  font-weight: 500;
  color: #fff;
  letter-spacing: 0.02em;
}

.founder-card__avatar--photo {
  background: none;
  overflow: hidden;
}

.founder-card__photo {
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
}

.founder-card__name {
  font-family: var(--font-display);
  font-size: var(--fs-2xl);
  font-weight: 500;
  color: var(--color-ink);
  line-height: 1.2;
}

.founder-card__role {
  font-size: var(--fs-sm);
  font-weight: 600;
  color: var(--color-azure);
  margin-top: 0.25rem;
  text-transform: uppercase;
  letter-spacing: 0.06em;
}

.founder-card__bio {
  font-size: var(--fs-base);
  color: var(--color-text);
  line-height: 1.75;
}

.founder-card__skills {
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  margin-top: var(--space-1);
}

.founder-card__skills li {
  font-size: var(--fs-xs);
  font-weight: 500;
  color: var(--color-deep);
  background: var(--color-mist);
  border: 1px solid var(--color-glacier);
  border-radius: 999px;
  padding: 0.25rem 0.75rem;
}

.founder-card__footer {
  margin-top: auto;
  padding-top: var(--space-2);
  border-top: 1px solid var(--color-border);
}

.founder-card__linkedin {
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  font-size: var(--fs-sm);
  font-weight: 500;
  color: var(--color-deep);
  transition: color var(--dur-fast) var(--ease-out);
}

.founder-card__linkedin:hover {
  color: var(--color-azure);
}

/* ── CTA ──────────────────────────────────────────────────── */
.about-cta {
  background: var(--color-ink);
  color: var(--color-text-invert);
}

.about-cta__inner {
  text-align: center;
  max-width: 560px;
  margin-inline: auto;
}

.about-cta__heading {
  font-family: var(--font-display);
  font-size: clamp(var(--fs-2xl), 3vw, var(--fs-4xl));
  font-weight: 500;
  color: #fff;
  margin-bottom: var(--space-2);
}

.about-cta__body {
  font-size: var(--fs-lg);
  color: rgba(242, 247, 251, 0.72);
  margin-bottom: var(--space-4);
}

.about-cta__btn {
  font-size: var(--fs-base);
}

/* ── Responsive ───────────────────────────────────────────── */
@media (min-width: 720px) {
  .about-team__grid {
    grid-template-columns: 1fr 1fr;
  }

  .founder-card {
    padding: var(--space-5);
  }
}

@media (min-width: 960px) {
  .about-mission__inner {
    grid-template-columns: 1.6fr 1fr;
    gap: var(--space-8);
  }

  .about-mission__stats {
    grid-template-columns: 1fr;
  }

  .stat {
    padding: var(--space-4);
    text-align: left;
  }
}
</style>
