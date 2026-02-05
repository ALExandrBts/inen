
<script setup>
import { onMounted, onBeforeUnmount, ref } from 'vue'

const canvas = ref(null)

onMounted(() => {
  const ctx = canvas.value.getContext('2d')
  let width, height, stars = []

  const STAR_COUNT = 1000
  const POLARIS_X = 0.5
  const POLARIS_Y = 0.2 // Higher up
  const ROTATION_SPEED = 0.00005 // Slower, more majestic

  const resize = () => {
    width = window.innerWidth
    height = window.innerHeight
    canvas.value.width = width
    canvas.value.height = height
    initStars()
  }

  const initStars = () => {
    stars = []
    for (let i = 0; i < STAR_COUNT; i++) {
      // Use polar coordinates for more natural circular distribution
      const angle = Math.random() * Math.PI * 2
      const distance = Math.sqrt(Math.random()) * Math.max(width, height) * 1.5

      const star = {
        angle: angle,
        distance: distance,
        radius: Math.random() * 1.5,
        alpha: Math.random(),
        blinkDir: Math.random() > 0.5 ? 1 : -1,
        blinkSpeed: 0.005 + Math.random() * 0.01,
        color: Math.random() > 0.8 ? (Math.random() > 0.5 ? '#93c5fd' : '#fde68a') : '#ffffff'
      }
      stars.push(star)
    }
  }

  const draw = () => {
    const isDark = document.documentElement.classList.contains('dark')
    ctx.clearRect(0, 0, width, height)

    if (!isDark) return;

    // Background Gradient for depth
    const gradient = ctx.createRadialGradient(
      width * POLARIS_X, height * POLARIS_Y, 0,
      width * POLARIS_X, height * POLARIS_Y, Math.max(width, height)
    )
    gradient.addColorStop(0, '#0f172a')
    gradient.addColorStop(0.5, '#020617')
    gradient.addColorStop(1, '#000000')
    ctx.fillStyle = gradient
    ctx.fillRect(0, 0, width, height)

    stars.forEach(star => {
      // Majestic rotation around Polaris
      star.angle += ROTATION_SPEED

      const x = (width * POLARIS_X) + Math.cos(star.angle) * star.distance
      const y = (height * POLARIS_Y) + Math.sin(star.angle) * star.distance

      // Natural twinkling
      star.alpha += star.blinkSpeed * star.blinkDir
      if (star.alpha >= 1 || star.alpha <= 0.2) star.blinkDir *= -1

      ctx.globalAlpha = star.alpha
      ctx.fillStyle = star.color
      ctx.beginPath()
      ctx.arc(x, y, star.radius, 0, Math.PI * 2)
      ctx.fill()
    })

    requestAnimationFrame(draw)
  }

  window.addEventListener('resize', resize)
  resize()
  requestAnimationFrame(draw)

  onBeforeUnmount(() => {
    window.removeEventListener('resize', resize)
  })
})
</script>

<template>
  <canvas ref="canvas" class="starfield"></canvas>
</template>

<style scoped>
.starfield {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: -2;
  pointer-events: none;
}
</style>
