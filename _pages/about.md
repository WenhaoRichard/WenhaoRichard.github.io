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

  .hero-panel::after {
    content: "";
    position: absolute;
    inset: -40% -10% auto auto;
    width: 220px;
    height: 220px;
    background: rgba(255, 255, 255, 0.18);
    border-radius: 50%;
    filter: blur(3px);
  }

  .hero-title {
    font-size: 2rem;
    margin: 0 0 0.5rem;
  }

  .hero-subtitle {
    margin: 0;
    font-size: 1rem;
    line-height: 1.8;
    max-width: 760px;
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

  .cool-card h3 {
    margin-top: 0;
    margin-bottom: 0.5rem;
    color: #8ec5ff;
  }

  .stats-box {
    margin: 1.2rem 0;
    padding: 1rem;
    border-radius: 14px;
    background: #f8faff;
    border: 1px solid #e5edff;
  }

  .stats-list {
    display: flex;
    gap: 1.2rem;
    flex-wrap: wrap;
    font-weight: 600;
  }

  .message-board {
    margin-top: 1.2rem;
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
    transition: opacity 0.2s ease;
  }

  .message-board button:hover {
    opacity: 0.9;
  }

  .msg-item {
    border: 1px solid #ebedf5;
    border-radius: 10px;
    padding: 0.7rem;
    margin-bottom: 0.6rem;
    background: #fafcff;
  }

  .msg-meta {
    color: #6b7280;
    font-size: 0.82rem;
  }

  .message-hint {
    margin-top: 0.5rem;
    color: #6b7280;
    font-size: 0.85rem;
  }

  .project-banner {
    width: 100%;
    max-height: 280px;
    object-fit: contain;
    border-radius: 14px;
    background: #f4f6fb;
    padding: 0.4rem;
  }
</style>

<section class="hero-panel">
  <h1 class="hero-title">👋 你好，我是文豪（Hao Wen）</h1>
  <p class="hero-subtitle">
    Machine Learning + Backend Developer，专注于 AI 系统、视觉模型鲁棒性与效率优化。
    欢迎来到我升级后的主页：更酷炫的视觉风格、实时访客统计，以及可互动留言板。
  </p>
</section>

<div class="card-grid">
  <article class="cool-card">
    <h3>🚀 当前方向</h3>
    <p>在招商银行从事机器学习与后端研发，关注大模型在系统可用性与可靠性中的落地。</p>
  </article>
  <article class="cool-card">
    <h3>🧠 研究兴趣</h3>
    <p>Large Vision Models、模型安全与鲁棒性、AI for Systems，以及 AI + IoT 融合应用。</p>
  </article>
  <article class="cool-card">
    <h3>🎓 教育背景</h3>
    <p>University of Florida（M.Sc., ECE）与 South China University of Technology（B.Eng.）。</p>
  </article>
</div>

## 📊 浏览人次统计

<div class="stats-box">
  <div class="stats-list">
    <span>总访问量（PV）：<strong id="busuanzi_value_site_pv">加载中...</strong></span>
    <span>访客数（UV）：<strong id="busuanzi_value_site_uv">加载中...</strong></span>
  </div>
  <div class="message-hint">统计由 Busuanzi 提供，部署到 GitHub Pages 后会自动生效。</div>
</div>

## 📝 留言板

<div class="message-board">
  <form id="guestbook-form">
    <input id="guest-name" type="text" maxlength="30" placeholder="你的昵称（必填）" required>
    <textarea id="guest-message" rows="4" maxlength="280" placeholder="留下点什么吧（最多 280 字）" required></textarea>
    <button type="submit">发布留言</button>
  </form>
  <div id="guestbook-list"></div>
  <div class="message-hint">当前为轻量本地留言板（浏览器本地存储）。如需跨设备/公开同步，可再升级为 GitHub Issues 或 Supabase 版本。</div>
</div>

## 🔬 Featured Project

<img src="../images/design.png" alt="Vision-Language Model design" class="project-banner">

- **Efficient In-context Visual Learning**  
  设计高效视觉 in-context learning 架构，在图像去噪、去雨等任务上兼顾速度与精度。
- **Model Compression**  
  通过剪枝与量化提升模型简洁性，同时尽可能保持精度。

## 📎 Documents

- [CV](./files/CV_research.pdf)
- [Transcript (Graduate)](./files/transcript_graduate.pdf)
- [Certificate (Graduate)](./files/Diploma.pdf)
- [Transcript (Undergraduate)](./files/Transcript_Undergraduate.pdf)
- [Certificate (Undergraduate)](./files/undergraduateTranscript.pdf)

<script async src="//busuanzi.ibruce.info/busuanzi/2.3/busuanzi.pure.mini.js"></script>
<script>
  (function() {
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
  })();
</script>
