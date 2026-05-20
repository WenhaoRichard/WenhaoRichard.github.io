---
permalink: /
title: "About me"
excerpt: ""
author_profile: true
redirect_from:
  - /about/
  - /about.html
---

<style>
  :root {
    --bg: #020305;
    --bg-glow: #0a1024;
    --line-a: #62d0ff;
    --line-b: #b985ff;
    --line-c: #63ffa5;
    --text: #e9ecf8;
    --subtle: #aeb6cf;
    --btn-a: #4b5cff;
    --btn-b: #8a43ff;
  }

  .entry-stage {
    position: fixed;
    inset: 0;
    z-index: 9999;
    display: grid;
    place-items: center;
    background:
      radial-gradient(circle at 50% 30%, rgba(14, 24, 58, 0.45) 0%, transparent 45%),
      radial-gradient(circle at 50% 50%, var(--bg-glow) 0%, var(--bg) 72%);
    color: var(--text);
    transition: opacity .55s ease, visibility .55s ease;
  }

  .entry-stage.hidden { opacity: 0; visibility: hidden; pointer-events: none; }

  .stage-wrap { width: min(94vw, 980px); text-align: center; }

  #oloid-canvas {
    width: min(90vw, 900px);
    height: min(62vh, 560px);
    border-radius: 20px;
    border: 1px solid rgba(255,255,255,.12);
    background: #000;
    box-shadow: 0 30px 80px rgba(0,0,0,.55), inset 0 0 80px rgba(98,208,255,.08);
    cursor: grab;
    touch-action: none;
  }

  #oloid-canvas.dragging { cursor: grabbing; }

  .stage-name {
    margin: .95rem 0 .2rem;
    font-size: clamp(1.35rem, 2.8vw, 2.2rem);
    letter-spacing: .2em;
    font-weight: 700;
  }

  .stage-sub { margin: 0 0 1rem; color: var(--subtle); }

  .enter-btn {
    border: 1px solid rgba(138,67,255,.65);
    border-radius: 999px;
    padding: .72rem 1.45rem;
    font-weight: 700;
    color: #fff;
    background: linear-gradient(135deg, var(--btn-a), var(--btn-b));
    cursor: pointer;
  }

  .page-shell { opacity: 0; transform: translateY(16px); transition: all .6s ease; }
  .page-shell.ready { opacity: 1; transform: translateY(0); }

  .hero-panel {
    margin-bottom: 1.3rem;
    padding: 1.65rem;
    border-radius: 18px;
    color: #fff;
    background: linear-gradient(145deg, #11182f 0%, #223a8a 48%, #412a8f 100%);
  }

  .core-zone {
    border: 1px solid #e8edf8;
    background: #fcfdff;
    border-radius: 16px;
    padding: 1.08rem;
    margin-bottom: 1.12rem;
  }

  .project-banner {
    width: 100%;
    max-height: 280px;
    object-fit: contain;
    border-radius: 12px;
    background: #f4f6fb;
    padding: .35rem;
  }

  .mini-stats {
    margin-top: .75rem;
    text-align: right;
    font-size: .68rem;
    opacity: .55;
    color: #d8def3;
  }

  .mini-stats span + span { margin-left: .45rem; }
</style>

<div class="entry-stage" id="entry-stage" aria-label="Draggable Oloid entry stage">
  <div class="stage-wrap">
    <canvas id="oloid-canvas" width="1100" height="700"></canvas>
    <h1 class="stage-name">RichardWWHH</h1>
    <p class="stage-sub">Oloid geometry · drag to rotate view</p>
    <button class="enter-btn" id="enter-home">进入个人主页</button>
  </div>
</div>

<div class="page-shell" id="page-shell">
  <section class="hero-panel">
    <h1>👋 你好，我是文豪（Hao Wen）</h1>
    <p><strong>AI for ISP + Deep Learning.</strong><br>
    我专注于把 AI 算法推到 production：从 research prototype 到 robust deployment。<br>
    Building fascinating, reliable intelligence for real-world systems — <em>from pixels to platforms</em>.</p>
    <div class="mini-stats">
    <span>PV <strong id="busuanzi_value_site_pv">…</strong></span>
    <span>UV <strong id="busuanzi_value_site_uv">…</strong></span>
  </div>
  </section>

  <section class="core-zone">
    <h2>🔬 Featured Project</h2>
    <img src="../images/design.png" alt="Vision-Language Model design" class="project-banner">
  </section>

  <section class="core-zone">
    <h2>📎 Documents</h2>
    <ul>
      <li><a href="./files/CV_research.pdf">CV</a></li>
      <li><a href="./files/transcript_graduate.pdf">Transcript (Graduate)</a></li>
      <li><a href="./files/Diploma.pdf">Certificate (Graduate)</a></li>
      <li><a href="./files/Transcript_Undergraduate.pdf">Transcript (Undergraduate)</a></li>
      <li><a href="./files/undergraduateTranscript.pdf">Certificate (Undergraduate)</a></li>
    </ul>
  </section>
</div>


<script async src="//busuanzi.ibruce.info/busuanzi/2.3/busuanzi.pure.mini.js"></script>
<script>
(function () {
  const canvas = document.getElementById('oloid-canvas');
  const ctx = canvas.getContext('2d');
  const stage = document.getElementById('entry-stage');
  const shell = document.getElementById('page-shell');
  const btn = document.getElementById('enter-home');

  const state = { ax: -0.5, ay: 0.84, dragging: false, lx: 0, ly: 0, spin: 0.0035 };

  function circle(radius, center, normal, count) {
    const pts = [];
    const [cx, cy, cz] = center;
    let u = [1, 0, 0], v = [0, 1, 0];
    if (normal[0] === 1) { u = [0,1,0]; v = [0,0,1]; }
    if (normal[1] === 1) { u = [1,0,0]; v = [0,0,1]; }
    if (normal[2] === 1) { u = [1,0,0]; v = [0,1,0]; }
    for (let i = 0; i < count; i += 1) {
      const t = (i / count) * Math.PI * 2;
      pts.push([
        cx + radius * (Math.cos(t) * u[0] + Math.sin(t) * v[0]),
        cy + radius * (Math.cos(t) * u[1] + Math.sin(t) * v[1]),
        cz + radius * (Math.cos(t) * u[2] + Math.sin(t) * v[2])
      ]);
    }
    return pts;
  }

  const r = 1;
  const c1 = circle(r, [0.5, 0, 0], [0, 0, 1], 220);
  const c2 = circle(r, [-0.5, 0, 0], [1, 0, 0], 220);

  function rot(p) {
    const [x0, y0, z0] = p;
    const cx = Math.cos(state.ax), sx = Math.sin(state.ax);
    const cy = Math.cos(state.ay), sy = Math.sin(state.ay);
    const y1 = y0 * cx - z0 * sx;
    const z1 = y0 * sx + z0 * cx;
    const x2 = x0 * cy + z1 * sy;
    const z2 = -x0 * sy + z1 * cy;
    return [x2, y1, z2];
  }

  function proj(p) {
    const [x, y, z] = p;
    const k = 210 / (z + 5.7);
    return [canvas.width / 2 + x * k * 130, canvas.height / 2 + y * k * 130];
  }

  function drawCurve(points, color, width, glow) {
    ctx.beginPath();
    points.forEach((p, i) => {
      const q = proj(rot(p));
      if (i === 0) ctx.moveTo(q[0], q[1]); else ctx.lineTo(q[0], q[1]);
    });
    ctx.closePath();
    ctx.strokeStyle = color;
    ctx.lineWidth = width;
    ctx.shadowColor = color;
    ctx.shadowBlur = glow;
    ctx.stroke();
    ctx.shadowBlur = 0;
  }

  function drawGenerators() {
    ctx.strokeStyle = 'rgba(99,255,165,.5)';
    ctx.lineWidth = 1.2;
    for (let i = 0; i < 36; i += 1) {
      const t = (i / 36) * Math.PI * 2;
      const p1 = [0.5 + Math.cos(t), Math.sin(t), 0];
      const p2 = [-0.5, Math.cos(t), Math.sin(t)];
      const a = proj(rot(p1));
      const b = proj(rot(p2));
      ctx.beginPath();
      ctx.moveTo(a[0], a[1]);
      ctx.lineTo(b[0], b[1]);
      ctx.stroke();
    }
  }


  function drawEnvelopeSurface() {
    for (let i = 0; i < 56; i += 1) {
      const t = (i / 56) * Math.PI * 2;
      const p1 = [0.5 + Math.cos(t), Math.sin(t), 0];
      const p2 = [-0.5, Math.cos(t), Math.sin(t)];
      const a = proj(rot(p1));
      const b = proj(rot(p2));
      const alpha = 0.08 + 0.06 * Math.sin(t * 2);
      ctx.strokeStyle = `rgba(120, 190, 255, ${alpha.toFixed(3)})`;
      ctx.lineWidth = 3;
      ctx.beginPath();
      ctx.moveTo(a[0], a[1]);
      ctx.lineTo(b[0], b[1]);
      ctx.stroke();
    }
  }

  function stars() {
    ctx.fillStyle = 'rgba(255,255,255,.68)';
    for (let i = 0; i < 95; i += 1) {
      const x = (i * 97 + 17) % canvas.width;
      const y = (i * 53 + 19) % canvas.height;
      ctx.fillRect(x, y, 1.3, 1.3);
    }
  }

  function loop() {
    if (!state.dragging) state.ay += state.spin;
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    stars();
    drawGenerators();
    drawEnvelopeSurface();
    drawCurve(c1, '#62d0ff', 2.2, 14);
    drawCurve(c2, '#b985ff', 2.2, 14);
    requestAnimationFrame(loop);
  }

  function start(x, y) { state.dragging = true; state.lx = x; state.ly = y; canvas.classList.add('dragging'); }
  function move(x, y) {
    if (!state.dragging) return;
    const dx = x - state.lx;
    const dy = y - state.ly;
    state.lx = x; state.ly = y;
    state.ay += dx * 0.007;
    state.ax += dy * 0.007;
  }
  function end() { state.dragging = false; canvas.classList.remove('dragging'); }

  canvas.addEventListener('mousedown', (e) => start(e.clientX, e.clientY));
  window.addEventListener('mousemove', (e) => move(e.clientX, e.clientY));
  window.addEventListener('mouseup', end);
  canvas.addEventListener('touchstart', (e) => { const t = e.touches[0]; start(t.clientX, t.clientY); }, { passive: true });
  window.addEventListener('touchmove', (e) => { const t = e.touches[0]; if (t) move(t.clientX, t.clientY); }, { passive: true });
  window.addEventListener('touchend', end, { passive: true });

  btn.addEventListener('click', function () { stage.classList.add('hidden'); shell.classList.add('ready'); });

  loop();
})();
</script>
