
<script setup>
import { onMounted, onUnmounted, ref, watch } from 'vue'
import { useData } from 'vitepress'

const { isDark } = useData()
const canvasRef = ref(null)
let ctx, w, h, animationFrame
let stars = []

const createStars = () => {
    stars = []
    const count = 150
    for (let i = 0; i < count; i++) {
        stars.push({
            x: Math.random() * w,
            y: Math.random() * h,
            size: Math.random() * 2,
            opacity: Math.random(),
            speed: Math.random() * 0.05 + 0.01
        })
    }
}

const draw = () => {
    ctx.clearRect(0, 0, w, h)

    // Select color based on theme
    const color = isDark.value ? '255, 255, 255' : '79, 70, 229' // White or Indigo

    stars.forEach(s => {
        ctx.beginPath()
        ctx.arc(s.x, s.y, s.size, 0, Math.PI * 2)
        ctx.fillStyle = `rgba(${color}, ${s.opacity})`
        ctx.fill()

        s.opacity += s.speed
        if (s.opacity > 1 || s.opacity < 0.1) s.speed = -s.speed
    })
    animationFrame = requestAnimationFrame(draw)
}

const handleResize = () => {
    w = canvasRef.value.width = window.innerWidth
    h = canvasRef.value.height = window.innerHeight
    createStars()
}

onMounted(() => {
    ctx = canvasRef.value.getContext('2d')
    handleResize()
    window.addEventListener('resize', handleResize)
    draw()
})

onUnmounted(() => {
    window.removeEventListener('resize', handleResize)
    cancelAnimationFrame(animationFrame)
})
</script>

<template>
    <canvas ref="canvasRef" class="starfield"></canvas>
</template>

<style scoped>
.starfield {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: -1;
    pointer-events: none;
    transition: background 0.5s ease;
}
</style>
