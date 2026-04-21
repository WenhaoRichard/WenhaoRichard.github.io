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
  .intro-overlay {
    position: fixed;
    inset: 0;
    z-index: 9999;
    display: flex;
    align-items: center;
    justify-content: center;
    background: radial-gradient(circle at center, #080d1f 0%, #02030a 70%);
    perspective: 900px;
    animation: introFadeOut 0.9s ease 3.8s forwards;
  }

  .galaxy {
    position: relative;
    width: 300px;
    height: 300px;
    transform-style: preserve-3d;
    animation: galaxySpin 5s linear infinite;
  }

  .galaxy::before {
    content: "";
    position: absolute;
    left: 50%;
    top: 50%;
    width: 16px;
    height: 16px;
    border-radius: 50%;
    transform: translate(-50%, -50%);
    background: #fff8c7;
    box-shadow: 0 0 25px #fff4a8;
  }

  .star {
    position: absolute;
    left: 50%;
    top: 50%;
    width: 4px;
    height: 4px;
    border-radius: 50%;
    transform-style: preserve-3d;
    background: #8fd3ff;
    box-shadow: 0 0 7px rgba(143, 211, 255, 0.9);
    animation: twinkle 1.6s ease-in-out infinite;
  }

  .intro-text {
    position: absolute;
    bottom: 11vh;
    text-align: center;
    color: #e2ebff;
    letter-spacing: 0.8px;
    font-size: 0.95rem;
  }

  .page-shell {
    opacity: 0;
    transform: translateY(20px) scale(0.98);
    animation: contentIn 0.9s ease 3.95s forwards;
  }

  .hero-panel {
    position: relative;
    overflow: hidden;
    border-radius: 20px;
    padding: 2rem;
    margin-bottom: 1.6rem;
    background: radial-gradient(circle at 20% 20%, #4facfe 0%, #00f2fe 35%, #4b3df8 100%);
    color: #fff;
    box-shadow: 0 12px 35px rgba(0, 0, 0, 0.22);
  }

  .hero-title {
    font-size: 2rem;
    margin: 0 0 0.5rem;
  }

  .hero-subtitle {
    margin: 0;
    font-size: 1rem;
    line-height: 1.8;
    max-width: 800px;
  }

  .card-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
    gap: 1rem;
    margin: 1.2rem 0 2rem;
  }

  .cool-card {
    border-radius: 16px;
    padding: 1rem 1.1rem;
    background: linear-gradient(145deg, #1f2635, #2f3a52);
    color: #e6ecff;
    box-shadow: 0 8px 20px rgba(33, 45, 78, 0.25);
    transition: transform 0.22s ease, box-shadow 0.22s ease;
  }

  .cool-card:hover {
    transform: translateY(-3px);
    box-shadow: 0 14px 28px rgba(33, 45, 78, 0.38);
  }

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

  .message-board {
    margin-top: 1rem;
    border-radius: 14px;
    border: 1px solid #e7e7e7;
    padding: 1rem;
    background: #fff;
  }

  .message-board form {
    display: grid;
    gap: 0.6rem;
    margin-bottom: 1rem;
  }

  .message-board input,
  .message-board textarea,
  .message-board button {
    border-radius: 10px;
    border: 1px solid #d0d7e8;
    padding: 0.68rem 0.75rem;
    font-size: 0.95rem;
  }

  .message-board button {
    border: none;
    background: #3b82f6;
    color: #fff;
    font-weight: 700;
    cursor: pointer;
  }

  .msg-item {
    border: 1px solid #ebedf5;
    border-radius: 10px;
    padding: 0.7rem;
    margin-bottom: 0.6rem;
    background: #fafcff;
  }

  .msg-meta,
  .message-hint {
    color: #6b7280;
    font-size: 0.82rem;
  }

  .footer-stats {
    margin-top: 2.2rem;
    text-align: right;
    opacity: 0.6;
    font-size: 0.78rem;
    color: #6b7280;
  }

  .footer-stats span + span {
    margin-left: 0.8rem;
  }

  @keyframes galaxySpin {
    from { transform: rotateX(64deg) rotateZ(0deg); }
    to { transform: rotateX(64deg) rotateZ(360deg); }
  }

  @keyframes twinkle {
    50% { opacity: 0.35; transform: scale(0.65); }
  }

  @keyframes introFadeOut {
    to { opacity: 0; visibility: hidden; }
  }

  @keyframes contentIn {
    to { opacity: 1; transform: translateY(0) scale(1); }
  }
</style>

<div class="intro-overlay" id="intro-overlay">
  <div class="galaxy" id="galaxy"></div>
  <p class="intro-text">Entering Hao Wen Universe · AI for ISP + Deep Learning</p>
</div>

<div class="page-shell">
  <section class="hero-panel">
    <h1 class="hero-title">👋 你好，我是文豪（Hao Wen）</h1>
    <p class="hero-subtitle">
      <strong>AI for ISP + Deep Learning.</strong><br>
      我专注于把 AI 算法真正推到 production：从 research prototype 到 robust deployment。<br>
      Building fascinating, reliable intelligence for real-world systems — <em>from pixels to platforms</em>.
    </p>
  </section>

  <div class="card-grid">
    <article class="cool-card">
      <h3>🚀 Focus Now</h3>
      <p>面向真实业务场景，持续推进 AI 在系统可靠性、可观测性与自动化中的落地。</p>
    </article>
    <article class="cool-card">
      <h3>🧠 Research Interests</h3>
      <p>Vision-Language Models、模型鲁棒性与安全、AI for Systems、AIGC + IoT。</p>
    </article>
    <article class="cool-card">
      <h3>🎯 Style</h3>
      <p>Data-driven + engineering-first。重视 latency、cost、stability，也重视“wow effect”。</p>
    </article>
  </div>

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

  <section class="message-board">
    <h2>📝 留言板</h2>
    <form id="guestbook-form">
      <input id="guest-name" type="text" maxlength="30" placeholder="你的昵称（必填）" required>
      <textarea id="guest-message" rows="4" maxlength="280" placeholder="留下点什么吧（最多 280 字）" required></textarea>
      <button type="submit">发布留言</button>
    </form>
    <div id="guestbook-list"></div>
    <div class="message-hint">当前为轻量本地留言板（浏览器本地存储）。</div>
  </section>

  <div class="footer-stats">
    <span>PV: <strong id="busuanzi_value_site_pv">...</strong></span>
    <span>UV: <strong id="busuanzi_value_site_uv">...</strong></span>
  </div>
</div>

<script async src="//busuanzi.ibruce.info/busuanzi/2.3/busuanzi.pure.mini.js"></script>
<script>
  (function() {
    const galaxy = document.getElementById("galaxy");
    for (let i = 0; i < 120; i += 1) {
      const star = document.createElement("span");
      star.className = "star";
      const angle = i * 0.35;
      const radius = 8 + i * 1.05;
      const x = Math.cos(angle) * radius;
      const y = Math.sin(angle) * radius;
      const z = (i % 9) * 6 - 24;
      const size = 2 + (i % 3);
      star.style.width = `${size}px`;
      star.style.height = `${size}px`;
      star.style.transform = `translate3d(${x}px, ${y}px, ${z}px)`;
      star.style.animationDelay = `${(i % 17) * 0.09}s`;
      galaxy.appendChild(star);
    }

    const storageKey = "hao_wen_guestbook_v1";
    const listEl = document.getElementById("guestbook-list");
    const formEl = document.getElementById("guestbook-form");
    const nameEl = document.getElementById("guest-name");
    const msgEl = document.getElementById("guest-message");

    function escapeHtml(str) {
      return str
        .replace(/&/g, "&amp;")
        .replace(/</g, "&lt;")
        .replace(/>/g, "&gt;")
        .replace(/\"/g, "&quot;")
        .replace(/'/g, "&#039;");
    }

    function loadMessages() {
      try {
        return JSON.parse(localStorage.getItem(storageKey) || "[]");
      } catch (e) {
        return [];
      }
    }

    function saveMessages(messages) {
      localStorage.setItem(storageKey, JSON.stringify(messages));
    }

    function renderMessages() {
      const messages = loadMessages();
      if (!messages.length) {
        listEl.innerHTML = "<p class='message-hint'>还没有留言，来抢个沙发吧 🎉</p>";
        return;
      }

      listEl.innerHTML = messages
        .slice()
        .reverse()
        .map(({ name, message, date }) => {
          return `
            <article class="msg-item">
              <strong>${escapeHtml(name)}</strong>
              <p>${escapeHtml(message)}</p>
              <div class="msg-meta">${new Date(date).toLocaleString()}</div>
            </article>
          `;
        })
        .join("");
    }

    formEl.addEventListener("submit", function(event) {
      event.preventDefault();
      const name = nameEl.value.trim();
      const message = msgEl.value.trim();
      if (!name || !message) return;

      const messages = loadMessages();
      messages.push({ name, message, date: new Date().toISOString() });
      saveMessages(messages.slice(-50));
      formEl.reset();
      renderMessages();
    });

    renderMessages();

    setTimeout(function() {
      const overlay = document.getElementById("intro-overlay");
      if (overlay) {
        overlay.style.pointerEvents = "none";
      }
    }, 4000);
  })();
</script>
