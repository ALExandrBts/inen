<template>
  <div class="timeline-container">
    <div class="timeline">
      <div
        v-for="(event, index) in events"
        :key="index"
        class="event"
        :style="{ animationDelay: `${index * 0.1}s` }"
      >
        <div class="year">{{ event.year }}</div>
        <h3>{{ event.title }}</h3>
        <p>{{ event.description }}</p>
      </div>
    </div>
  </div>
</template>

<script setup>
import { computed } from 'vue'
import { useData } from 'vitepress'
import eventsData from '../../data/events.json'

const { lang } = useData()

const events = computed(() => {
  return eventsData[lang.value] || eventsData['uk']
})
</script>

<style scoped>
.timeline-container {
  margin: 2rem 0;
}

.timeline {
  border-left: 3px solid var(--vp-c-brand);
  margin-left: 1rem;
  padding-left: 2rem;
  padding-top: 1rem;
  padding-bottom: 1rem;
}

.event {
  position: relative;
  margin-bottom: 2rem;
  opacity: 0;
  animation: fadeInUp 0.6s ease-out forwards;
  transition: transform 0.3s ease;
}

.event:hover {
  transform: translateX(8px);
}

@keyframes fadeInUp {
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.event::before {
  content: "";
  position: absolute;
  left: -2.6rem;
  top: 0.5rem;
  width: 1.2rem;
  height: 1.2rem;
  background: var(--vp-c-brand);
  border-radius: 50%;
  border: 3px solid var(--vp-c-bg);
  z-index: 2;
  transition: all 0.3s ease;
}

.event:hover::before {
  transform: scale(1.3);
  box-shadow: 0 0 15px var(--vp-c-brand);
}

.year {
  font-weight: bold;
  color: var(--vp-c-brand);
  margin-bottom: 0.5rem;
  font-size: 1.1rem;
}

.event h3 {
  margin: 0.5rem 0;
  font-size: 1.3rem;
  transition: color 0.3s ease;
}

.event:hover h3 {
  color: var(--vp-c-brand);
}

.event p {
  margin: 0.5rem 0 0 0;
  color: var(--vp-c-text-2);
  line-height: 1.6;
}

@media (max-width: 768px) {
  .timeline {
    margin-left: 0.5rem;
    padding-left: 1.5rem;
  }

  .event::before {
    left: -2rem;
  }
}
</style>
