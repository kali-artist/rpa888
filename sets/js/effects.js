/**
 * effects.js —— 视觉特效与氛围增强（仅动效，不改动 app.js 核心逻辑与数据协议）
 * 所有新增特效通过注入 style + 创建独立 DOM 层实现，不触碰业务选择器。
 */
(function () {
  "use strict";

  const SCENARIOS = window.SCENARIOS || [];
  const $  = (s, c) => (c || document).querySelector(s);
  const $$ = (s, c) => Array.from((c || document).querySelectorAll(s));
  const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  /* ---------- 注入特效样式（不修改 style.css） ---------- */
  function injectStyles() {
    if (document.getElementById("fx-injected-styles")) return;
    const style = document.createElement("style");
    style.id = "fx-injected-styles";
    style.textContent = `
      /* ===== Hero 区极光层 ===== */
      .hero { position: relative; overflow: visible; }
      .hero-aurora {
        position: absolute;
        pointer-events: none;
        z-index: -1;
        top: -8%;
        right: -6%;
        width: 72%;
        height: 92%;
        overflow: visible;
      }
      .hero-aurora::before,
      .hero-aurora::after {
        content: "";
        position: absolute;
        border-radius: 50%;
        filter: blur(110px);
        opacity: 0.14;
        will-change: transform;
        animation: heroAurora1 18s ease-in-out infinite alternate;
      }
      .hero-aurora::before {
        width: 58%;
        height: 62%;
        top: 12%;
        left: 22%;
        background: radial-gradient(circle, rgba(139, 92, 246, 0.55), transparent 64%);
      }
      .hero-aurora::after {
        width: 46%;
        height: 52%;
        top: 26%;
        left: 46%;
        background: radial-gradient(circle, rgba(0, 240, 255, 0.48), transparent 60%);
        animation-name: heroAurora2;
        animation-duration: 22s;
      }
      @keyframes heroAurora1 {
        0%   { transform: translate(0, 0) scale(1); }
        100% { transform: translate(4%, 3%) scale(1.08); }
      }
      @keyframes heroAurora2 {
        0%   { transform: translate(0, 0) scale(1); }
        100% { transform: translate(-3%, 5%) scale(1.06); }
      }

      /* ===== 微网格纹理层 ===== */
      .hero-grid {
        position: absolute;
        pointer-events: none;
        z-index: -1;
        left: 0;
        right: 0;
        top: 56%;
        height: 280px;
        opacity: 0.05;
        background-image:
          linear-gradient(rgba(255,255,255,0.24) 1px, transparent 1px),
          linear-gradient(90deg, rgba(255,255,255,0.24) 1px, transparent 1px);
        background-size: 36px 36px;
        -webkit-mask-image: linear-gradient(180deg, transparent, #000 22%, #000 78%, transparent);
        mask-image: linear-gradient(180deg, transparent, #000 22%, #000 78%, transparent);
        transform: translate(0,0);
        transition: transform 0.15s ease-out;
      }

      /* ===== 统计卡扫光 ===== */
      .hero-stat { position: relative; overflow: hidden; }
      .hero-stat::after {
        content: "";
        position: absolute;
        inset: 0;
        background: linear-gradient(120deg, transparent 30%, rgba(255,255,255,0.16) 50%, transparent 70%);
        transform: translateX(-110%);
        pointer-events: none;
      }
      .hero-stat.sweep::after { animation: statSweep 0.85s ease-out forwards; }
      @keyframes statSweep { to { transform: translateX(110%); } }

      /* ===== 卡片 hover 流光边框 ===== */
      .card { position: relative; }
      .card::after {
        content: "";
        position: absolute;
        inset: 0;
        border-radius: inherit;
        padding: 1px;
        background: conic-gradient(from 0deg, transparent 0deg, rgba(0,240,255,0.9) 60deg, rgba(255,43,214,0.9) 150deg, rgba(255,184,0,0.8) 240deg, rgba(139,92,246,0.8) 320deg, transparent 360deg);
        -webkit-mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
        -webkit-mask-composite: xor;
        mask-composite: exclude;
        opacity: 0;
        transition: opacity 0.28s ease;
        animation: borderRotate 3.2s linear infinite;
        pointer-events: none;
      }
      .card:hover::after { opacity: 0.85; }
      @keyframes borderRotate { to { transform: rotate(360deg); } }

      /* ===== 左侧栏小影头像呼吸光环 ===== */
      .ai-avatar { position: relative; }
      .ai-avatar::before {
        content: "";
        position: absolute;
        inset: -5px;
        border-radius: 50%;
        background: conic-gradient(from 0deg, var(--cyan), var(--violet), var(--cyan));
        filter: blur(7px);
        opacity: 0.35;
        z-index: -1;
        animation: avatarBreath 2.4s ease-in-out infinite;
      }
      @keyframes avatarBreath {
        0%, 100% { opacity: 0.25; transform: scale(0.95); }
        50% { opacity: 0.55; transform: scale(1.08); }
      }

      /* ===== AI 输入框光标闪烁增强 ===== */
      .ai-form input { caret-color: var(--cyan); }
      .ai-form input:focus { animation: caretPulse 1.1s ease-in-out infinite; }
      @keyframes caretPulse {
        0%, 100% { caret-color: var(--cyan); }
        50% { caret-color: var(--magenta); }
      }

      /* ===== 页脚上方柔光收尾 ===== */
      .footer { position: relative; }
      .footer-glow {
        position: absolute;
        left: 50%;
        bottom: 100%;
        width: 82%;
        height: 160px;
        transform: translateX(-50%);
        pointer-events: none;
        background: radial-gradient(ellipse at center, rgba(139,92,246,0.16), transparent 70%);
        filter: blur(70px);
        opacity: 0.75;
        z-index: -1;
      }

      /* ===== 全局现有极光透明度统一到 5-18% 区间 ===== */
      .aurora-blob { opacity: 0.16; }

      /* ===== 减少动效 ===== */
      @media (prefers-reduced-motion: reduce) {
        .hero-aurora::before,
        .hero-aurora::after,
        .ai-avatar::before,
        .card::after,
        .hero-stat.sweep::after,
        .ticker-track { animation: none !important; }
        .fx-canvas,
        .hero-grid { display: none !important; }
      }
    `;
    document.head.appendChild(style);
  }

  /* ---------- 1. Hero 极光层 ---------- */
  function initHeroAurora() {
    const hero = $(".hero");
    if (!hero || $(".hero-aurora", hero)) return;
    const div = document.createElement("div");
    div.className = "hero-aurora";
    div.setAttribute("aria-hidden", "true");
    hero.appendChild(div);
  }

  /* ---------- 2. 微网格纹理 + 鼠标视差 ---------- */
  function initMicroGrid() {
    const hero = $(".hero");
    if (!hero || $(".hero-grid", hero)) return;
    const grid = document.createElement("div");
    grid.className = "hero-grid";
    grid.setAttribute("aria-hidden", "true");
    hero.appendChild(grid);

    if (reduceMotion) return;
    let raf;
    document.addEventListener("mousemove", (e) => {
      cancelAnimationFrame(raf);
      raf = requestAnimationFrame(() => {
        const x = (e.clientX / window.innerWidth - 0.5) * 10;
        const y = (e.clientY / window.innerHeight - 0.5) * 8;
        grid.style.transform = `translate(${x.toFixed(2)}px, ${y.toFixed(2)}px)`;
      });
    }, { passive: true });
  }

  /* ---------- 3. 统计卡数字滚动 + 扫光 ---------- */
  function initStats() {
    const statEls = $$(".hero-stat");
    if (!statEls.length) return;

    statEls.forEach((wrap) => {
      const b = $("b", wrap);
      if (!b) return;
      const target = parseInt(b.textContent.replace(/\D/g, ""), 10) || 0;
      b.dataset.target = target;
      b.textContent = "0";
    });

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        const b = $("b", entry.target);
        if (!b || b.dataset.animated) return;
        b.dataset.animated = "1";
        entry.target.classList.add("sweep");

        const target = parseInt(b.dataset.target, 10) || 0;
        const start = performance.now();
        const duration = 800;
        const tick = (now) => {
          const t = Math.min(1, (now - start) / duration);
          const eased = 1 - Math.pow(1 - t, 3);
          b.textContent = String(Math.round(target * eased));
          if (t < 1) requestAnimationFrame(tick);
        };
        requestAnimationFrame(tick);
      });
    }, { threshold: 0.2, rootMargin: "0px 0px -20px 0px" });

    statEls.forEach((el) => observer.observe(el));
  }

  /* ---------- 4. 全页 canvas 粒子网络 ---------- */
  function initParticles() {
    const canvas = $("#fxCanvas");
    if (!canvas) return;
    if (reduceMotion) {
      canvas.style.display = "none";
      return;
    }

    const ctx = canvas.getContext("2d");
    let particles = [];
    let width, height;
    let rafId;
    let isActive = true;
    let isVisible = true;

    function resize() {
      width = window.innerWidth;
      height = window.innerHeight;
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      canvas.width = Math.floor(width * dpr);
      canvas.height = Math.floor(height * dpr);
      canvas.style.width = width + "px";
      canvas.style.height = height + "px";
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      createParticles();
    }

    function createParticles() {
      const count = Math.min(60, Math.max(30, Math.floor((width * height) / 26000)));
      particles = [];
      for (let i = 0; i < count; i++) {
        particles.push({
          x: Math.random() * width,
          y: Math.random() * height,
          vx: (Math.random() - 0.5) * 0.28,
          vy: (Math.random() - 0.5) * 0.28,
          r: Math.random() * 1.4 + 0.6,
          alpha: Math.random() * 0.2 + 0.2,
          pulse: Math.random() * Math.PI * 2,
          colorIdx: Math.floor(Math.random() * 5),
        });
      }
    }

    const colors = [
      [0, 240, 255],
      [255, 43, 214],
      [255, 184, 0],
      [139, 92, 246],
      [0, 212, 170],
    ];

    function draw() {
      if (!isActive || !isVisible) return;
      ctx.clearRect(0, 0, width, height);

      const windY = (window.scrollY || 0) * 0.00008;

      for (let i = 0; i < particles.length; i++) {
        const p = particles[i];
        p.x += p.vx;
        p.y += p.vy + windY;
        if (p.x < 0) p.x = width;
        if (p.x > width) p.x = 0;
        if (p.y < 0) p.y = height;
        if (p.y > height) p.y = 0;
        p.pulse += 0.012;
        const a = p.alpha + Math.sin(p.pulse) * 0.06;
        const c = colors[p.colorIdx];

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(${c[0]},${c[1]},${c[2]},${Math.max(0.12, Math.min(0.5, a)).toFixed(3)})`;
        ctx.fill();
      }

      ctx.lineWidth = 0.5;
      for (let i = 0; i < particles.length; i++) {
        let connections = 0;
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x;
          const dy = particles[i].y - particles[j].y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < 110 && connections < 3) {
            const alpha = (0.09 * (1 - dist / 110)).toFixed(4);
            ctx.strokeStyle = `rgba(255,255,255,${alpha})`;
            ctx.beginPath();
            ctx.moveTo(particles[i].x, particles[i].y);
            ctx.lineTo(particles[j].x, particles[j].y);
            ctx.stroke();
            connections++;
          }
        }
      }

      rafId = requestAnimationFrame(draw);
    }

    function start() {
      cancelAnimationFrame(rafId);
      isActive = true;
      draw();
    }
    function stop() {
      isActive = false;
      cancelAnimationFrame(rafId);
      rafId = null;
    }

    window.addEventListener("resize", resize, { passive: true });
    document.addEventListener("visibilitychange", () => {
      if (document.hidden) stop();
      else if (isVisible) start();
    });

    const io = new IntersectionObserver((entries) => {
      isVisible = entries[0].isIntersecting;
      if (isVisible && !document.hidden) start();
      else stop();
    }, { threshold: 0 });
    io.observe(canvas);

    resize();
    start();
  }

  /* ---------- 5. 页脚上方柔光收尾 ---------- */
  function initFooterGlow() {
    const footer = $(".footer");
    if (!footer || $(".footer-glow", footer)) return;
    const div = document.createElement("div");
    div.className = "footer-glow";
    div.setAttribute("aria-hidden", "true");
    footer.appendChild(div);
  }

  /* ---------- 6. 跑马灯无缝循环兜底 ---------- */
  function initTickerSeamless() {
    $$(".ticker").forEach((ticker) => {
      const track = $(".ticker-track", ticker);
      if (!track || track.dataset.cloned === "1") return;

      const ensure = () => {
        const cw = ticker.clientWidth;
        let loops = 0;
        while (track.scrollWidth < cw * 2.2 && loops < 3) {
          const items = Array.from(track.children);
          if (!items.length) break;
          items.forEach((item) => track.appendChild(item.cloneNode(true)));
          loops++;
        }
      };
      ensure();
      track.dataset.cloned = "1";
    });
  }

  /* ---------- 7. 顶栏滚动强化 ---------- */
  function initTopbarScroll() {
    const topbar = $("#topbar");
    if (!topbar) return;
    const onScroll = () => topbar.classList.toggle("scrolled", window.scrollY > 10);
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
  }

  /* ---------- 8. 卡片能力徽章 / 操作按钮增强 ---------- */
  const TYPE_STYLES = {
    AI: "#00f0ff",
    RPA: "#ff2bd6",
    "RPA+AI": "#ffb800",
  };

  function askAI(question) {
    const input = $("#assistantInput");
    const panel = $(".ai-panel");
    if (!input) return;
    input.value = question;
    input.focus();
    if (panel) {
      panel.classList.add("active");
      panel.scrollIntoView({ behavior: "smooth", block: "nearest" });
    }
  }

  function enhanceCards() {
    const grid = $("#cardsGrid");
    if (!grid) return;

    $$(".card", grid).forEach((card) => {
      if (card.dataset.enhanced === "1") return;
      card.dataset.enhanced = "1";

      const idx = parseInt(card.dataset.idx, 10);
      const s = SCENARIOS[idx];
      if (!s) return;

      const top = card.querySelector(".card-top");
      if (top && s.type) {
        const badge = document.createElement("span");
        badge.className = "card-type-badge";
        badge.textContent = s.type;
        badge.style.setProperty("--type-color", TYPE_STYLES[s.type] || "#a78bfa");
        top.appendChild(badge);
      }

      const foot = card.querySelector(".card-foot");
      if (foot) {
        const actions = document.createElement("div");
        actions.className = "card-actions";

        if (s.link && s.link !== "#") {
          const link = document.createElement("a");
          link.className = "card-action primary";
          link.href = s.link;
          link.target = "_blank";
          link.rel = "noopener noreferrer";
          link.textContent = "飞书方案 ↗";
          link.addEventListener("click", (e) => e.stopPropagation());
          actions.appendChild(link);
        } else {
          const span = document.createElement("span");
          span.className = "card-action disabled";
          span.textContent = "链接待补";
          actions.appendChild(span);
        }

        const askBtn = document.createElement("button");
        askBtn.className = "card-action ask";
        askBtn.type = "button";
        askBtn.textContent = "问 AI";
        askBtn.addEventListener("click", (e) => {
          e.stopPropagation();
          askAI("介绍一下「" + s.name + "」这个场景");
        });
        actions.appendChild(askBtn);

        foot.before(actions);
      }
    });
  }

  function observeCards() {
    const grid = $("#cardsGrid");
    if (!grid) return;
    const observer = new MutationObserver(enhanceCards);
    observer.observe(grid, { childList: true });
  }

  /* ---------- 9. AI 触发器 ---------- */
  function initAITrigger() {
    const trigger = $("#aiTrigger");
    if (!trigger) return;
    trigger.addEventListener("click", () => askAI(""));
  }

  /* ---------- 10. 跑马灯悬停暂停 ---------- */
  function initTickerPause() {
    $$(".ticker").forEach((t) => {
      const track = $(".ticker-track", t);
      if (!track) return;
      t.addEventListener("mouseenter", () => (track.style.animationPlayState = "paused"));
      t.addEventListener("mouseleave", () => (track.style.animationPlayState = ""));
    });
  }

  /* ---------- 初始化 ---------- */
  injectStyles();
  initHeroAurora();
  initMicroGrid();
  initStats();
  initParticles();
  initFooterGlow();
  initTickerSeamless();
  initTopbarScroll();
  enhanceCards();
  observeCards();
  initAITrigger();
  initTickerPause();
})();
