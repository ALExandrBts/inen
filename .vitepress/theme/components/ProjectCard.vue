<template>
  <div class="projects-grid">
    <a
      v-for="(project, index) in projects"
      :key="index"
      :href="project.link"
      target="_blank"
      rel="noopener noreferrer"
      class="project-card"
      :style="{ animationDelay: `${index * 0.15}s` }"
    >
      <h3>{{ project.title }}</h3>
      <p>{{ project.description }}</p>
      <span class="arrow">→</span>
    </a>
  </div>
</template>

<script setup>
import { computed } from 'vue'
import { useData } from 'vitepress'
import projectsData from '../../data/projects.json'

const { lang } = useData()

const projects = computed(() => {
  return projectsData[lang.value] || projectsData['uk']
})
</script>

<style scoped>
.projects-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
  margin: 2rem 0;
}

@media (max-width: 768px) {
  .projects-grid {
    grid-template-columns: 1fr;
  }
}

.project-card {
  background: var(--vp-c-bg-soft);
  border: 2px solid var(--vp-c-divider);
  border-radius: 16px;
  padding: 2rem;
  text-decoration: none;
  color: inherit;
  position: relative;
  overflow: hidden;
  opacity: 0;
  animation: fadeInScale 0.6s ease-out forwards;
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
}

@keyframes fadeInScale {
  from {
    opacity: 0;
    transform: scale(0.95) translateY(20px);
  }
  to {
    opacity: 1;
    transform: scale(1) translateY(0);
  }
}

.project-card::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 4px;
  background: linear-gradient(90deg, var(--vp-c-brand), var(--vp-c-brand-dark));
  transform: scaleX(0);
  transform-origin: left;
  transition: transform 0.4s ease;
}

.project-card:hover::before {
  transform: scaleX(1);
}

.project-card:hover {
  transform: translateY(-8px);
  border-color: var(--vp-c-brand);
  box-shadow: 0 12px 40px rgba(0, 0, 0, 0.15);
}

.project-card h3 {
  margin: 0 0 1rem 0;
  font-size: 1.5rem;
  color: var(--vp-c-brand);
  white-space: nowrap;
  transition: color 0.3s ease;
}

.project-card:hover h3 {
  color: var(--vp-c-brand-dark);
}

.project-card p {
  margin: 0;
  color: var(--vp-c-text-2);
  line-height: 1.6;
  flex-grow: 1;
}

.arrow {
  position: absolute;
  bottom: 1.5rem;
  right: 2rem;
  font-size: 1.5rem;
  color: var(--vp-c-brand);
  opacity: 0;
  transform: translateX(-10px);
  transition: all 0.3s ease;
}

.project-card:hover .arrow {
  opacity: 1;
  transform: translateX(0);
}
</style>
