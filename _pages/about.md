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
    --bg: #030303;
    --panel: rgba(14, 14, 18, 0.82);
    --line: rgba(255, 255, 255, 0.14);
    --text: #f3f4f8;
    --subtle: #b6bdd1;
    --accent: #7c9cff;
  }

  .entry-stage {
    position: fixed;
    inset: 0;
    z-index: 9999;
    background: radial-gradient(circle at 50% 30%, #111 0%, #000 70%);
    color: var(--text);
    display: grid;
    place-items: center;
    transition: opacity 0.65s ease, visibility 0.65s ease;
  }

  .entry-stage.hidden {
    opacity: 0;
    visibility: hidden;
    pointer-events: none;
  }

  .stage-wrap {
    text-align: center;
    width: min(92vw, 860px);
  }

  #oloid-canvas {
    width: min(92vw, 720px);
    height: min(62vh, 480px);
    border: 1px solid var(--line);
    border-radius: 18px;
    background: #000;
    box-shadow: 0 24px 60px rgba(0, 0, 0, 0.45), inset 0 0 40px rgba(124, 156, 255, 0.08);
    cursor: grab;
    touch-action: none;
  }

  #oloid-canvas.dragging { cursor: grabbing; }

  .stage-name {
    margin: 1rem 0 0.3rem;
    font-size: clamp(1.1rem, 2.2vw, 1.6rem);
    letter-spacing: 0.16em;
    text-transform: uppercase;
  }

  .stage-sub {
    margin: 0 0 1rem;
    color: var(--subtle);
  }

  .enter-btn {
    border: 1px solid rgba(124, 156, 255, 0.6);
    color: #fff;
    background: linear-gradient(130deg, #4e6fff 0%, #7b4dff 100%);
    padding: 0.7rem 1.4rem;
    border-radius: 999px;
    font-weight: 700;
    letter-spacing: 0.03em;
    cursor: pointer;
  }

  .page-shell {
    opacity: 0;
    transform: translateY(20px);
    transition: opacity 0.65s ease, transform 0.65s ease;
  }

  .page-shell.ready {
    opacity: 1;
    transform: translateY(0);
  }

  .hero-panel {
    margin-bottom: 1.4rem;
    padding: 1.7rem;
    border-radius: 18px;
    color: #fff;
    background: linear-gradient(145deg, #121a33 0%, #283f92 50%, #3b2e80 100%);
    box-shadow: 0 14px 40px rgba(0, 0, 0, 0.22);
  }

  .hero-title { margin: 0 0 0.4rem; }
  .hero-subtitle { margin: 0; line-height: 1.8; }

  .core-zone {
    border: 1px solid #e7edf8;
    background: #fcfdff;
    border-radius: 16px;
    padding: 1.1rem;
    margin-bottom: 1.2rem;
  }

  .project-banner {
    width: 100%;
    max-height: 280px;
    object-fit: contain;
    border-radius: 14px;
    background: #f4f6fb;
    padding: 0.4rem;
  }

  .footer-stats {
    margin-top: 2rem;
    text-align: right;
    opacity: 0.56;
    font-size: 0.78rem;
    color: #6b7280;
  }
</style>

<div class="entry-stage" id="entry-stage" aria-label="Oloid entry animation">
  <div class="stage-wrap">
    <canvas id="oloid-canvas" width="900" height="600"></canvas>
    <h1 class="stage-name">RichardWWHH</h1>
    <p class="stage-sub">Drag to rotate view · Oloid Geometry Portal</p>
    <button class="enter-btn" id="enter-home">Enter Homepage</button>
  </div>
</div>

<div class="page-shell" id="page-shell">
  <section class="hero-panel">
    <h1 class="hero-title">👋 你好，我是文豪（Hao Wen）</h1>
    <p class="hero-subtitle">
      <strong>AI for ISP + Deep Learning.</strong><br>
      我专注于把 AI 算法真正推到 production：从 research prototype 到 robust deployment。<br>
      Building fascinating, reliable intelligence for real-world systems — <em>from pixels to platforms</em>.
    </p>
  </section>

  <section class="core-zone">
    <h2>🔬 Featured Project</h2>
    <img src="../images/design.png" alt="Vision-Language Model design" class="project-banner">
    <ul>
      <li><strong>Efficient In-context Visual Learning</strong>：在图像去噪、去雨等任务兼顾速度与精度。</li>
      <li><strong>Model Compression</strong>：通过剪枝与量化减少开销并尽可能保持性能。</li>
    </ul>
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

  <div class="footer-stats">
    <span>PV: <strong id="busuanzi_value_site_pv">...</strong></span>
    <span>UV: <strong id="busuanzi_value_site_uv">...</strong></span>
  </div>
</div>

<script async src="//busuanzi.ibruce.info/busuanzi/2.3/busuanzi.pure.mini.js"></script>
<script>
  (function() {
    const canvas = document.getElementById("oloid-canvas");
    const ctx = canvas.getContext("2d");
    const stage = document.getElementById("entry-stage");
    const enterBtn = document.getElementById("enter-home");
    const shell = document.getElementById("page-shell");

    const state = { rotX: -0.5, rotY: 0.8, dragging: false, lastX: 0, lastY: 0, autoSpin: 0.004 };

    function makeCirclePoints(offsetX, rotZ, count) {
      const pts = [];
      for (let i = 0; i < count; i += 1) {
        const t = (Math.PI * 2 * i) / count;
        const x = Math.cos(t);
        const y = Math.sin(t);
        const z = 0;
        const xr = x * Math.cos(rotZ) - y * Math.sin(rotZ) + offsetX;
        const yr = x * Math.sin(rotZ) + y * Math.cos(rotZ);
        pts.push([xr, yr, z]);
      }
      return pts;
    }

    const ringA = makeCirclePoints(0.5, 0, 160);
    const ringB = makeCirclePoints(-0.5, Math.PI / 2, 160);

    function rotate3D(p, ax, ay) {
      const [x0, y0, z0] = p;
      const cx = Math.cos(ax), sx = Math.sin(ax);
      const cy = Math.cos(ay), sy = Math.sin(ay);
      const y1 = y0 * cx - z0 * sx;
      const z1 = y0 * sx + z0 * cx;
      const x2 = x0 * cy + z1 * sy;
      const z2 = -x0 * sy + z1 * cy;
      return [x2, y1, z2];
    }

    function project(p) {
      const [x, y, z] = p;
      const scale = 210 / (z + 5.5);
      return [canvas.width / 2 + x * scale, canvas.height / 2 + y * scale, scale];
    }

    function drawRing(points, color) {
      ctx.beginPath();
      points.forEach((pt, idx) => {
        const r = rotate3D(pt, state.rotX, state.rotY);
        const [sx, sy] = project(r);
        if (idx === 0) ctx.moveTo(sx, sy);
        else ctx.lineTo(sx, sy);
      });
      ctx.closePath();
      ctx.strokeStyle = color;
      ctx.lineWidth = 2;
      ctx.shadowColor = color;
      ctx.shadowBlur = 12;
      ctx.stroke();
      ctx.shadowBlur = 0;
    }

    function frame() {
      if (!state.dragging) state.rotY += state.autoSpin;
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      drawRing(ringA, "#7ea8ff");
      drawRing(ringB, "#a78bfa");

      ctx.fillStyle = "rgba(255,255,255,0.88)";
      for (let i = 0; i < 80; i += 1) {
        const x = (i * 97) % canvas.width;
        const y = (i * 53) % canvas.height;
        ctx.fillRect(x, y, 1.3, 1.3);
      }
      requestAnimationFrame(frame);
    }

    function startDrag(clientX, clientY) {
      state.dragging = true;
      state.lastX = clientX;
      state.lastY = clientY;
      canvas.classList.add("dragging");
    }

    function moveDrag(clientX, clientY) {
      if (!state.dragging) return;
      const dx = clientX - state.lastX;
      const dy = clientY - state.lastY;
      state.lastX = clientX;
      state.lastY = clientY;
      state.rotY += dx * 0.007;
      state.rotX += dy * 0.007;
    }

    function endDrag() {
      state.dragging = false;
      canvas.classList.remove("dragging");
    }

    canvas.addEventListener("mousedown", (e) => startDrag(e.clientX, e.clientY));
    window.addEventListener("mousemove", (e) => moveDrag(e.clientX, e.clientY));
    window.addEventListener("mouseup", endDrag);

    canvas.addEventListener("touchstart", (e) => {
      const t = e.touches[0];
      startDrag(t.clientX, t.clientY);
    }, { passive: true });
    window.addEventListener("touchmove", (e) => {
      const t = e.touches[0];
      if (t) moveDrag(t.clientX, t.clientY);
    }, { passive: true });
    window.addEventListener("touchend", endDrag, { passive: true });

    enterBtn.addEventListener("click", () => {
      stage.classList.add("hidden");
      shell.classList.add("ready");
    });

    frame();
  })();
</script>
