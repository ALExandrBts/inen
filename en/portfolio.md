---
layout: doc
title: Engineering Portfolio
---

# Engineering Portfolio

<div class="portfolio-intro">
  <p class="lead">Building the infrastructure for a sovereign, sustainable future.</p>
</div>

<div class="project-grid">

  <div class="project-card ucts">
    <div class="project-header">
      <span class="badgeb">Clean Energy</span>
      <h2>UCTS</h2>
    </div>
    <p class="desc"><b>Upcycled Ceramic Thermal Storage.</b> Turning toxic industrial waste (Red Mud) into high-performance thermal energy storage.</p>
    <ul class="specs">
      <li>🌡️ <b>1000°C</b> Storage Temp</li>
      <li>💰 <b>$13.6/kWh</b> Levelized Cost</li>
      <li>♻️ <b>100%</b> Recycled Material</li>
    </ul>
    <a href="https://ucts.solutions" target="_blank" class="btn">View Project →</a>
  </div>

  <div class="project-card h2gen">
    <div class="project-header">
      <span class="badgeg">Transport</span>
      <h2>Solar-H₂ Boost</h2>
    </div>
    <p class="desc"><b>Hybrid Maritime Propulsion.</b> A retrofit kit for river barges combining onsite hydrogen generation with flexible solar arrays.</p>
    <ul class="specs">
      <li>🚢 <b>-30%</b> Fuel Consumption</li>
      <li>⚡ <b>+7%</b> Torque Boost</li>
      <li>📉 <b>-80%</b> Emissions</li>
    </ul>
    <a href="https://h2gen.legalgreenplanet.tech" target="_blank" class="btn">View Project →</a>
  </div>

  <div class="project-card moss">
    <div class="project-header">
      <span class="badgeq">Construction</span>
      <h2>Moss Tile</h2>
    </div>
    <p class="desc"><b>Living Roof System.</b> Bio-composite lightweight tiles that insulate homes and capture carbon using local moss species.</p>
    <ul class="specs">
      <li>🏠 <b>Lightweight</b> Bio-composite</li>
      <li>🌿 <b>Carbon</b> Negative</li>
      <li>❄️ <b>Nordic</b> Optimized</li>
    </ul>
    <a href="https://moss.legalgreenplanet.tech" target="_blank" class="btn">View Project →</a>
  </div>

</div>

<style>
.lead { font-size: 1.4rem; color: var(--vp-c-text-2); margin-bottom: 3rem; }

.project-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
  margin-top: 2rem;
}

.project-card {
  background: var(--vp-c-bg-soft);
  border: 1px solid var(--vp-c-divider);
  border-radius: 16px;
  padding: 2rem;
  transition: all 0.3s ease;
  display: flex;
  flex-direction: column;
}

.project-card:hover {
  transform: translateY(-5px);
  border-color: var(--vp-c-brand);
  box-shadow: 0 8px 30px rgba(0,0,0,0.1);
}

.project-header {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  margin-bottom: 1rem;
}

.project-header h2 { margin: 0; border: none; }

.badgeb { color: #3b82f6; font-weight: bold; text-transform: uppercase; font-size: 0.8rem; letter-spacing: 1px; }
.badgeg { color: #10b981; font-weight: bold; text-transform: uppercase; font-size: 0.8rem; letter-spacing: 1px; }
.badgeq { color: #a855f7; font-weight: bold; text-transform: uppercase; font-size: 0.8rem; letter-spacing: 1px; }

.desc { margin-bottom: 1.5rem; flex-grow: 1; }

.specs {
  list-style: none;
  padding: 0;
  margin: 0 0 2rem 0;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  color: var(--vp-c-text-2);
}

.btn {
  display: inline-block;
  background: var(--vp-c-brand);
  color: white !important;
  text-decoration: none !important;
  padding: 0.8rem 1.5rem;
  border-radius: 8px;
  text-align: center;
  font-weight: 600;
  transition: background 0.2s;
}

.btn:hover {
  background: var(--vp-c-brand-dark);
}
</style>
