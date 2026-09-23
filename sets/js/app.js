/* =========================================================================
 * 影刀 RPA×AI 场景方案库 —— 交互逻辑（v4）
 *  - 搜索 / 筛选 / 详情弹窗（沿用）
 *  - AI 助手：影刀 Agent 直连 SSE 流式渲染
 * ========================================================================= */
(function () {
  "use strict";

  const SCENARIOS = window.SCENARIOS || [];
  const $  = (s, c) => (c || document).querySelector(s);
  const $$ = (s, c) => Array.from((c || document).querySelectorAll(s));

  /* ---------- 工具 ---------- */
  function esc(str) {
    return String(str).replace(/[&<>"']/g, (c) => ({
      "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;",
    }[c]));
  }
  function truncate(text, n) {
    if (!text) return "";
    return text.length > n ? text.slice(0, n) + "…" : text;
  }

  function ratingClass(r) {
    const m = {
      "优质": "rating-excellent",
      "良好": "rating-good",
      "Showcase": "rating-showcase",
      "不建议投入": "rating-skip",
    };
    return m[r] || "rating-good";
  }
  function highlight(text, terms) {
    let out = esc(text);
    terms.filter((t) => t && t.length >= 2).forEach((t) => {
      const safe = t.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
      out = out.replace(new RegExp("(" + safe + ")", "gi"), "<mark>$1</mark>");
    });
    return out;
  }
  function searchableText(s) {
    return [
      s.name, s.industry,
      (s.tags || []).join(" "),
      (s.platforms || []).join(" "),
      s.overview, (s.value || []).join(" "),
      (s.steps || []).join(" "),
    ].join(" ").toLowerCase();
  }
  SCENARIOS.forEach((s) => (s._text = searchableText(s)));

  const state = { query: "", industry: "全部", platform: "全部", tag: "全部" };

  /* ---------- 意图分析与评分（用于搜索排序） ---------- */
  const INTENT = {
    industry: {
      "电商": ["国内电商"], "淘宝": ["国内电商"], "京东": ["国内电商"],
      "拼多多": ["国内电商"], "抖店": ["国内电商"], "抖音": ["内容运营", "国内电商"],
      "小红书": ["内容运营"], "视频号": ["内容运营"], "b站": ["内容运营"], "B站": ["内容运营"],
      "hr": ["人力资源"], "招聘": ["人力资源"], "人事": ["人力资源"], "简历": ["人力资源"],
      "财务": ["财务"], "会计": ["财务"], "报销": ["财务"], "发票": ["财务"],
      "法务": ["法务/财务"], "合同": ["法务/财务"],
      "物流": ["电商物流"], "快递": ["电商物流"], "运单": ["电商物流"], "发货": ["电商物流", "国内电商"],
      "销售": ["销售"], "获客": ["销售"], "线索": ["销售"], "crm": ["销售"],
      "内容": ["内容运营"], "运营": ["内容运营", "国内电商"], "短视频": ["内容运营"],
      "客服": ["国内电商"], "工单": ["全行业"], "邮件": ["全行业"],
    },
    platform: ["淘宝", "京东", "拼多多", "抖音", "小红书", "视频号", "B站", "Boss直聘", "智联", "钉钉", "企业微信", "美团", "抖店"],
    pain: {
      "改地址": ["电商订单批量修改发货地址"], "地址": ["电商订单批量修改发货地址"],
      "发货": ["物流运单号自动回填", "电商订单批量修改发货地址"],
      "发票": ["财务发票自动识别与入账"], "报销": ["财务发票自动识别与入账"],
      "简历": ["招聘简历自动筛选与初筛"], "筛简历": ["招聘简历自动筛选与初筛"], "招聘": ["招聘简历自动筛选与初筛"],
      "上架": ["电商商品信息批量上架"], "铺货": ["电商商品信息批量上架"],
      "发布": ["短视频/小红书内容定时自动发布"], "发视频": ["短视频/小红书内容定时自动发布"], "发笔记": ["短视频/小红书内容定时自动发布"],
      "运单": ["物流运单号自动回填"], "回填": ["物流运单号自动回填"],
      "价格": ["竞品价格与活动监控"], "竞品": ["竞品价格与活动监控"], "监控": ["竞品价格与活动监控", "用户评论情感分析与舆情预警"],
      "线索": ["销售线索自动抓取与清洗"], "获客": ["销售线索自动抓取与清洗"],
      "合同": ["合同关键信息智能抽取"],
      "考勤": ["考勤与薪酬数据自动汇总"], "薪酬": ["考勤与薪酬数据自动汇总"], "工资": ["考勤与薪酬数据自动汇总"],
      "评论": ["用户评论情感分析与舆情预警"], "舆情": ["用户评论情感分析与舆情预警"], "口碑": ["用户评论情感分析与舆情预警"],
      "报表": ["业务报表自动生成与推送"], "数据": ["业务报表自动生成与推送"],
      "邮件": ["邮件与工单智能分类处理"], "工单": ["邮件与工单智能分类处理"],
      "客服": ["电商智能客服自动回复与质检"], "回复": ["电商智能客服自动回复与质检", "邮件与工单智能分类处理"],
    },
  };
  const GENERIC = ["自动", "自动化的", "批量", "重复", "效率", "省时", "省人工", "人工", "加班", "错误", "核对", "汇总", "抓取", "爬", "机器人", "rpa", "ai", "智能", "流程", "手工", "机械"];

  function analyzeIntent(query) {
    const q = query.toLowerCase();
    const found = { industryKw: new Set(), platforms: new Set(), pains: [], roles: [], generic: false };
    Object.keys(INTENT.industry).forEach((k) => { if (q.includes(k.toLowerCase())) found.industryKw.add(k); });
    INTENT.platform.forEach((p) => { if (q.includes(p.toLowerCase())) found.platforms.add(p); });
    Object.keys(INTENT.pain).forEach((k) => { if (q.includes(k.toLowerCase())) found.pains.push(k); });
    ["运营", "客服", "hr", "人事", "财务", "会计", "销售", "法务", "老板", "老板娘", "店长", "主管"].forEach((r) => {
      if (q.includes(r)) found.roles.push(r);
    });
    GENERIC.forEach((g) => { if (q.includes(g)) found.generic = true; });
    return found;
  }

  function scoreScenario(s, intent, terms) {
    let score = 0; const signals = [];
    intent.industryKw.forEach((kw) => {
      if (s.industry.includes(kw)) { score += 30; signals.push("行业匹配"); }
    });
    (s.platforms || []).forEach((p) => { if (intent.platforms.has(p)) { score += 18; signals.push("平台「" + p + "」"); } });
    intent.pains.forEach((p) => {
      if ((INTENT.pain[p] || []).includes(s.name)) { score += 40; signals.push("痛点直击"); }
    });
    terms.forEach((t) => {
      if (t.length >= 2) {
        if ((s.tags || []).some((tag) => tag.toLowerCase().includes(t))) { score += 14; signals.push("标签命中"); }
        if (s.overview && s.overview.toLowerCase().includes(t)) score += 8;
        if (s.name.toLowerCase().includes(t)) score += 12;
      }
    });
    if (intent.generic) score += 4;
    if (intent.roles.length && s.industry !== "全行业") score += 3;
    return { score, signals: Array.from(new Set(signals)) };
  }

  function localRecommend(query) {
    const intent = analyzeIntent(query);
    const terms = query.toLowerCase().split(/\s+|，|,|。|\.|、/).map((t) => t.trim());
    const ranked = SCENARIOS.map((s, i) => {
      const r = scoreScenario(s, intent, terms);
      return { s, i, score: r.score, signals: r.signals };
    }).filter((x) => x.score > 0).sort((a, b) => b.score - a.score).slice(0, 4);
    return { intent, ranked };
  }

  /* ---------- 卡片渲染 ---------- */
  const grid = $("#cardsGrid");
  const emptyState = $("#emptyState");

  function cardHTML(s, idx, terms, visibleIdx) {
    const platforms = (s.platforms || []).slice(0, 3).map(esc).join(" · ");
    const ov = (s.overview && s.overview !== s.name) ? truncate(s.overview, 58) : "";
    const linkTxt = s.link && s.link !== "#" ? "查看方案 ↗" : "了解详情 →";
    const delay = Math.min(visibleIdx || 0, 12);
    return [
      '<article class="card" style="--i:' + delay + '" data-idx="' + idx + '" tabindex="0" role="button" aria-label="' + esc(s.name) + '">',
        '<div class="card-glow"></div>',
        '<div class="card-top"><span class="card-domain">' + esc(s.industry) + '</span>' + (s.rating ? '<span class="card-rating ' + ratingClass(s.rating) + '">' + esc(s.rating) + '</span>' : "") + '</div>',
        '<div class="card-name">' + highlight(s.name, terms) + '</div>',
        ov ? '<div class="card-overview">' + highlight(ov, terms) + '</div>' : "",
        '<div class="card-foot">',
          '<span class="card-platforms">' + (platforms || "通用") + '</span>',
          '<span class="card-link">' + linkTxt + '</span>',
        '</div>',
      '</article>',
    ].join("");
  }

  const PAGE_SIZE = 24;
  let _lastFiltered = [];
  let _shownCount = 0;

  function render() {
    const terms = state.query.trim().split(/\s+/).filter((t) => t.length >= 2);
    const q = state.query.trim().toLowerCase();
    const filtered = SCENARIOS.map((s, i) => ({ s, i })).filter(({ s }) => {
      if (state.industry !== "全部" && s.industry !== state.industry) return false;
      if (state.platform !== "全部" && !(s.platforms || []).includes(state.platform)) return false;
      if (state.tag !== "全部" && !(s.tags || []).includes(state.tag)) return false;
      if (q) {
        const hit = terms.length ? terms.some((t) => s._text.includes(t)) : s._text.includes(q);
        if (!hit) return false;
      }
      return true;
    });

    // 按相关性排序
    if (q) {
      const intent = analyzeIntent(state.query);
      const scoreterms = q.split(/\s+|，|,/).map(t => t.trim());
      filtered.forEach(item => {
        item.score = scoreScenario(item.s, intent, scoreterms).score;
      });
      filtered.sort((a, b) => b.score - a.score);
    }

    _lastFiltered = filtered;
    _shownCount = Math.min(PAGE_SIZE, filtered.length);
    grid.innerHTML = filtered.slice(0, _shownCount).map(({ s, i }, vi) => cardHTML(s, i, terms, vi)).join("");
    emptyState.hidden = filtered.length !== 0;
    updateLoadMore();

    const count = $("#resultCount");
    const hasFilter = q || state.industry !== "全部" || state.platform !== "全部" || state.tag !== "全部";
    count.textContent = hasFilter ? ("匹配到 " + filtered.length + " 个场景") : ("共 " + SCENARIOS.length + " 个场景");

    const chips = $("#activeChips");
    chips.innerHTML = "";
    if (state.industry !== "全部") chips.appendChild(makeChip("领域：" + state.industry, "industry"));
    if (state.platform !== "全部") chips.appendChild(makeChip("平台：" + state.platform, "platform"));
    if (state.tag !== "全部") chips.appendChild(makeChip("标签：" + state.tag, "tag"));
    $("#resetBtn").hidden = !hasFilter;

    bindCardEvents();
  }

  function loadMore() {
    if (_shownCount >= _lastFiltered.length) return;
    const terms = state.query.trim().split(/\s+/).filter((t) => t.length >= 2);
    const next = _lastFiltered.slice(_shownCount, _shownCount + PAGE_SIZE);
    const html = next.map(({ s, i }, vi) => cardHTML(s, i, terms, vi)).join("");
    grid.insertAdjacentHTML("beforeend", html);
    _shownCount += next.length;
    updateLoadMore();
    bindCardEvents();
  }

  function updateLoadMore() {
    let btn = $("#loadMoreBtn");
    if (_shownCount < _lastFiltered.length) {
      if (!btn) {
        btn = document.createElement("button");
        btn.id = "loadMoreBtn";
        btn.className = "load-more-btn";
        btn.addEventListener("click", loadMore);
        grid.parentNode.insertBefore(btn, emptyState);
      }
      btn.hidden = false;
      btn.textContent = "加载更多（已显示 " + _shownCount + " / " + _lastFiltered.length + "）";
    } else if (btn) {
      btn.hidden = true;
    }
  }

  function bindCardEvents() {
    $$(".card", grid).forEach((el) => {
      if (el._bound) return;
      el._bound = true;
      const open = () => openDetail(parseInt(el.dataset.idx, 10));
      el.addEventListener("click", open);
      el.addEventListener("keydown", (e) => {
        if (e.key === "Enter" || e.key === " ") { e.preventDefault(); open(); }
      });
      el.addEventListener("mousemove", (e) => {
        const r = el.getBoundingClientRect();
        el.style.setProperty("--mouse-x", ((e.clientX - r.left) / r.width) * 100 + "%");
        el.style.setProperty("--mouse-y", ((e.clientY - r.top) / r.height) * 100 + "%");
      });
    });
  }

  function makeChip(label, dim) {
    const c = document.createElement("span");
    c.className = "active-chip";
    c.innerHTML = esc(label) + ' <button aria-label="移除">×</button>';
    c.querySelector("button").addEventListener("click", () => {
      state[dim] = "全部";
      syncFilterUI();
      render();
    });
    return c;
  }

  /* ---------- 筛选 ---------- */
  function buildFilters() {
    const industries = ["全部", ...Array.from(new Set(SCENARIOS.map((s) => s.industry)))];
    const indBox = $("#industryFilters");
    industries.forEach((t) => indBox.appendChild(makePill(t, "industry", indBox)));

    const freq = {};
    SCENARIOS.forEach((s) => (s.platforms || []).forEach((p) => (freq[p] = (freq[p] || 0) + 1)));
    const platforms = ["全部", ...Object.keys(freq).sort((a, b) => freq[b] - freq[a]).slice(0, 14)];
    const pfBox = $("#platformFilters");
    platforms.forEach((t) => pfBox.appendChild(makePill(t, "platform", pfBox)));

    const primarySet = new Set(SCENARIOS.map((s) => s.industry));
    const platformSet = new Set(Object.keys(freq));
    const tagFreq = {};
    SCENARIOS.forEach((s) => (s.tags || []).forEach((t) => {
      if (primarySet.has(t) || platformSet.has(t)) return;
      tagFreq[t] = (tagFreq[t] || 0) + 1;
    }));
    const tags = ["全部", ...Object.keys(tagFreq).sort((a, b) => tagFreq[b] - tagFreq[a]).slice(0, 18)];
    const tgBox = $("#tagFilters");
    if (tgBox) tags.forEach((t) => tgBox.appendChild(makePill(t, "tag", tgBox)));
  }
  function makePill(val, dim, box) {
    const b = document.createElement("button");
    b.className = "filter-pill" + (state[dim] === val ? " active" : "");
    b.textContent = val;
    b.dataset.val = val;
    b.dataset.dim = dim;
    b.addEventListener("click", () => {
      state[dim] = val;
      syncFilterUI();
      render();
    });
    return b;
  }
  function syncFilterUI() {
    $$(".filter-pill").forEach((x) => {
      x.classList.toggle("active", state[x.dataset.dim] === x.dataset.val);
    });
  }

  /* ---------- 搜索框 ---------- */
  const searchInput = $("#searchInput");
  const searchClear = $("#searchClear");
  searchInput.addEventListener("input", (e) => {
    state.query = e.target.value;
    searchClear.hidden = !state.query;
    render();
  });
  searchClear.addEventListener("click", () => {
    searchInput.value = ""; state.query = ""; searchClear.hidden = true; render(); searchInput.focus();
  });

  /* ---------- 重置筛选 ---------- */
  const resetBtn = $("#resetBtn");
  if (resetBtn) {
    resetBtn.addEventListener("click", () => {
      state.query = "";
      state.industry = "全部";
      state.platform = "全部";
      state.tag = "全部";
      searchInput.value = "";
      searchClear.hidden = true;
      syncFilterUI();
      render();
    });
  }

  /* ---------- 快捷键：/ 或 Cmd+K 聚焦搜索 ---------- */
  document.addEventListener("keydown", (e) => {
    const inField = ["INPUT", "TEXTAREA"].includes(e.target.tagName);
    if (inField) return;
    if (e.key === "/" || ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === "k")) {
      e.preventDefault();
      searchInput.focus();
      searchInput.select();
    }
  });
  searchInput.addEventListener("focus", () => {
    $("#searchKbd") && ($("#searchKbd").style.opacity = "1");
  });
  searchInput.addEventListener("blur", () => {
    $("#searchKbd") && ($("#searchKbd").style.opacity = "");
  });

  /* ---------- 回到顶部 ---------- */
  const backTop = $("#backTop");
  if (backTop) {
    backTop.addEventListener("click", () => window.scrollTo({ top: 0, behavior: "smooth" }));
    window.addEventListener("scroll", () => {
      backTop.classList.toggle("visible", window.scrollY > 600);
    }, { passive: true });
  }

  /* ============ AI 助手（影刀 Agent 直连） ============ */
  const chat = $("#assistantChat");
  const form = $("#assistantForm");
  const input = $("#assistantInput");
  const sendBtn = $("#assistantSend");
  let conversationId = null;
  let qCount = 0;

  const STORAGE_KEY_CONV = "rpa_ai_convId";
  const STORAGE_KEY_CHAT = "rpa_ai_chatHTML";

  function saveChat() {
    try {
      if (conversationId) localStorage.setItem(STORAGE_KEY_CONV, conversationId);
      else localStorage.removeItem(STORAGE_KEY_CONV);
      localStorage.setItem(STORAGE_KEY_CHAT, chat.innerHTML);
    } catch (_) {}
  }

  function restoreChat() {
    try {
      const savedConv = localStorage.getItem(STORAGE_KEY_CONV);
      const savedHTML = localStorage.getItem(STORAGE_KEY_CHAT);
      if (savedConv && savedHTML) {
        conversationId = savedConv;
        chat.innerHTML = savedHTML;
        chat.scrollTop = chat.scrollHeight;
        return true;
      }
    } catch (_) {}
    return false;
  }

  // 尝试恢复上次对话
  restoreChat();

  const clearBtn = $("#aiClear");
  if (clearBtn) {
    clearBtn.addEventListener("click", () => {
      conversationId = null;
      chat.innerHTML = '';
      addMsg("bot", '你好，我是 <b>影刀·小影</b>，你的 RPA×AI 智能顾问。<br/>告诉我你的需求，我来帮你分析和解答。');
      input.value = "";
      input.focus();
      saveChat();
    });
  }

  function addMsg(cls, html) {
    const el = document.createElement("div");
    el.className = "msg " + cls;
    el.innerHTML = '<div class="msg-avatar">' + (cls === "bot" ? "影" : "我") + '</div><div class="msg-body">' + html + '</div>';
    chat.appendChild(el);
    chat.scrollTop = chat.scrollHeight;
    return el;
  }

  function showTyping() {
    const el = document.createElement("div");
    el.className = "msg bot typing-msg";
    el.innerHTML = '<div class="msg-avatar">影</div><div class="msg-body"><div class="typing"><span></span><span></span><span></span></div></div>';
    chat.appendChild(el);
    chat.scrollTop = chat.scrollHeight;
    return el;
  }

  function setBusy(busy) {
    sendBtn.disabled = busy;
    input.disabled = busy;
    input.placeholder = busy ? "AI 思考中…" : "描述你的需求，如：电商运营如何用 RPA 提效？";
  }

  // Ensure conversation exists
  async function ensureConv() {
    if (conversationId) return conversationId;
    const r = await fetch("/api/chat", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: "{}"
    });
    const j = await r.json();
    if (j.success && j.data && j.data.conversationUuid) {
      conversationId = j.data.conversationUuid;
      saveChat();
      return conversationId;
    }
    if (j.conversationId) {
      conversationId = j.conversationId;
      saveChat();
      return conversationId;
    }
    throw new Error("无法创建会话");
  }

  // Stream from 影刀 Agent (parse native SSE format)
  async function streamAgent(text, onDelta) {
    await ensureConv();
    const resp = await fetch("/api/chat", {
      method: "POST",
      headers: { "Content-Type": "application/json", "Accept": "text/event-stream" },
      body: JSON.stringify({ message: text, conversationId: conversationId })
    });
    if (!resp.ok) {
      let msg = "HTTP " + resp.status;
      try { const e = await resp.json(); if (e.error) msg = e.error; } catch(_) {}
      throw new Error(msg);
    }
    // Update conversationId from response header if available
    const hdr = resp.headers.get("X-Conversation-Id");
    if (hdr) conversationId = hdr;

    const reader = resp.body.getReader();
    const dec = new TextDecoder();
    let buf = "", db = "";
    const pt = {}, seen = new Set();
    let done = false;
    const CONTINUE_REASONS = new Set(["tool_calls","tool-calls","tool_use","tool-use","function_call","function-call","tools"]);

    // Idle timeout: if no data received for 90s, assume connection dropped
    const IDLE_TIMEOUT = 90000;
    let idleTimer = null;
    let hasReceivedText = false;
    const resetIdle = () => {
      if (idleTimer) clearTimeout(idleTimer);
      idleTimer = setTimeout(() => { done = true; try { reader.cancel(); } catch(_){} }, IDLE_TIMEOUT);
    };
    resetIdle();

    try {
    while (!done) {
      const { done: d, value } = await reader.read();
      if (d) break;
      resetIdle();
      buf += dec.decode(value, { stream: true });
      let idx;
      while ((idx = buf.indexOf("\n")) !== -1) {
        const line = buf.slice(0, idx).replace(/\r$/, "");
        buf = buf.slice(idx + 1);
        if (line.startsWith("data:")) db += line.slice(5) + "\n";
        else if (line === "") {
          const p = db.trim(); db = "";
          if (!p) continue;
          let outer; try { outer = JSON.parse(p); } catch { continue; }
          let inner = outer.data;
          if (typeof inner === "string") { try { inner = JSON.parse(inner); } catch { continue; } }
          if (!inner || typeof inner !== "object") continue;
          const t = inner.type;

          if (t === "message.part.updated") {
            const part = (inner.properties && inner.properties.part) || {};
            if (part.id) pt[part.id] = part.type;
            if (part.type === "text" && !seen.has(part.id) && part.text) {
              seen.add(part.id);
              hasReceivedText = true;
              onDelta(part.text);
            }
          } else if (t === "message.part.delta") {
            const pp = inner.properties || {};
            if (pp.field === "text" && pt[pp.partID] === "text") {
              seen.add(pp.partID);
              hasReceivedText = true;
              onDelta(pp.delta || "");
            }
          } else if (t === "message.updated") {
            const info = (inner.properties && inner.properties.info) || {};
            if (info.role === "assistant" && "finish" in info) {
              const reason = String(info.finish || "").toLowerCase();
              if (CONTINUE_REASONS.has(reason)) continue;
              done = true; break;
            }
          } else if (t === "run.terminal" || t === "session.done" || t === "run.completed" || t === "session.idle") {
            done = true; break;
          }
        }
      }
    }
    } finally {
      if (idleTimer) clearTimeout(idleTimer);
    }
  }

  /* ---------- Markdown 渲染 & 问卷表单 ---------- */
  function renderMD(raw) {
    if (!raw) return "";
    var s = raw;
    // code blocks
    s = s.replace(/```(\w*)\n([\s\S]*?)```/g, function(_, lang, code) {
      return '<pre><code>' + esc(code.replace(/\n$/, '')) + '</code></pre>';
    });
    // inline code
    s = s.replace(/`([^`]+?)`/g, '<code>$1</code>');
    // bold + italic
    s = s.replace(/\*\*\*(.+?)\*\*\*/g, '<strong><em>$1</em></strong>');
    s = s.replace(/\*\*(.+?)\*\*/g, '<strong>$1</strong>');
    s = s.replace(/(?<!\*)\*([^*\n]+?)\*(?!\*)/g, '<em>$1</em>');
    // headings
    s = s.replace(/^##### (.+)$/gm, '<h5>$1</h5>');
    s = s.replace(/^#### (.+)$/gm, '<h4>$1</h4>');
    s = s.replace(/^### (.+)$/gm, '<h3>$1</h3>');
    s = s.replace(/^## (.+)$/gm, '<h2>$1</h2>');
    s = s.replace(/^# (.+)$/gm, '<h1>$1</h1>');
    // blockquote
    s = s.replace(/^> (.+)$/gm, '<blockquote>$1</blockquote>');
    // hr
    s = s.replace(/^---+$/gm, '<hr/>');
    // links: 1) markdown [text](url)
    s = s.replace(/\[([^\]]+)\]\((https?:\/\/[^)\s]+)\)/g, '<a href="$2" target="_blank" rel="noopener noreferrer">$1</a>');
    // links: 2) bare URLs → clickable, shortened display
    s = s.replace(/(^|[\s(（【「])(https?:\/\/[^\s)）】」<>"'，,。]+)/g, function(_, pre, url) {
      var clean = url.replace(/&amp;/g, '&');
      var display = clean;
      try {
        var u = new URL(clean);
        var host = u.host.replace(/^www\./, '');
        var path = u.pathname.length > 28 ? u.pathname.slice(0, 28) + '…' : u.pathname;
        display = host + path;
      } catch(_) {}
      return pre + '<a href="' + url + '" target="_blank" rel="noopener noreferrer" title="' + clean + '">' + display + '</a>';
    });
    // unordered lists
    s = s.replace(/(^[\t ]*[-*] .+(?:\n[\t ]*[-*] .+)*)/gm, function(block) {
      var items = block.split('\n').map(function(l) {
        return '<li>' + l.replace(/^[\t ]*[-*] /, '') + '</li>';
      }).join('');
      return '<ul>' + items + '</ul>';
    });
    // ordered lists
    s = s.replace(/(^\d+\. .+(?:\n\d+\. .+)*)/gm, function(block) {
      var items = block.split('\n').map(function(l) {
        return '<li>' + l.replace(/^\d+\. /, '') + '</li>';
      }).join('');
      return '<ol>' + items + '</ol>';
    });
    // paragraphs: wrap remaining lines
    s = s.replace(/^(?!<[a-z])((?!<\/)[^\n]+)$/gm, '<p>$1</p>');
    // clean up empty paragraphs
    s = s.replace(/<p>\s*<\/p>/g, '');
    return s;
  }

  function parseOption(text) {
    var m = (text || '').trim().match(/^\s*([A-Za-z])\s*[.．、\uFF09)]\s*(.+)$/);
    if (!m) return null;
    return { letter: m[1].toUpperCase(), text: m[2].trim() };
  }

  function stripPrefix(text) {
    return text.replace(/^\s*(?:Q?\s*\d+|[①②③④⑤⑥⑦⑧⑨⑩])\s*[.．、|:：)）]\s*/, '').replace(/[?？:：]\s*$/, '').trim();
  }

  function enhanceQuestions(html) {
    var tmp = document.createElement('div');
    tmp.innerHTML = html;
    qCount = 0;

    // Type 1: <ul> with A/B/C/D option items → checkbox form
    var uls = Array.from(tmp.querySelectorAll('ul'));
    uls.forEach(function(ul) {
      var lis = Array.from(ul.querySelectorAll('li'));
      var opts = [];
      lis.forEach(function(li) {
        var parsed = parseOption(li.textContent);
        if (parsed) opts.push(parsed);
      });
      if (opts.length < 2) return;
      // Find question text from previous sibling (p or h*)
      var qText = '';
      var prev = ul.previousElementSibling;
      while (prev && prev.tagName === 'BR') prev = prev.previousElementSibling;
      if (prev && /^(P|H[1-6])$/.test(prev.tagName)) {
        qText = prev.textContent.trim();
        prev.remove();
      }
      qCount++;
      var hasOther = opts.some(function(o) { return /其他|其它|自定义|补充/.test(o.text); });
      var formHtml = '<div class="qform choice-form" data-qidx="' + qCount + '">';
      formHtml += '<div class="qform-head"><span><em class="qnum">Q' + qCount + '</em>' + esc(stripPrefix(qText) || '请选择') + '</span><span class="hint">可多选</span></div>';
      formHtml += '<div class="qform-opts">';
      opts.forEach(function(o) {
        var isOther = /其他|其它|自定义|补充/.test(o.text);
        formHtml += '<label class="opt" data-letter="' + o.letter + '">';
        formHtml += '<input type="checkbox" value="' + esc(o.letter) + '"/>';
        formHtml += '<span class="letter">' + esc(o.letter) + '</span>';
        formHtml += '<span>' + esc(o.text) + '</span>';
        formHtml += '</label>';
        if (isOther) {
          formHtml += '<div class="other-wrap"><input class="other-txt" type="text" placeholder="请补充说明…" disabled/></div>';
        }
      });
      formHtml += '</div></div>';
      var wrapper = document.createElement('div');
      wrapper.innerHTML = formHtml;
      ul.replaceWith(wrapper.firstElementChild);
    });

    // Type 1.5: consecutive <p> with A/B/C/D options → checkbox form
    // Agent often outputs each option as a separate paragraph, not in a <ul>
    var allPs = Array.from(tmp.querySelectorAll('p'));
    var processed = new Set();
    for (var pi = 0; pi < allPs.length; pi++) {
      var p0 = allPs[pi];
      if (processed.has(p0)) continue;
      if (!tmp.contains(p0)) continue;
      var firstOpt = parseOption(p0.textContent.trim());
      if (!firstOpt) continue;

      // Collect consecutive sibling <p> that are also options
      var group = [{ el: p0, opt: firstOpt }];
      var next = p0.nextElementSibling;
      while (next && next.tagName === 'P') {
        var nOpt = parseOption(next.textContent.trim());
        if (!nOpt) break;
        group.push({ el: next, opt: nOpt });
        next = next.nextElementSibling;
      }
      if (group.length < 2) continue;

      // Check we have at least 2 distinct letters
      var letters = new Set(group.map(function(g) { return g.opt.letter; }));
      if (letters.size < 2) continue;

      // Mark as processed
      group.forEach(function(g) { processed.add(g.el); });

      // Find the question: look backwards for a <p> or heading
      var qText = '';
      var qEl = group[0].el.previousElementSibling;
      while (qEl && !qEl.textContent.trim()) qEl = qEl.previousElementSibling;
      if (qEl && /^(P|H[1-6])$/.test(qEl.tagName)) {
        qText = qEl.textContent.trim();
        qEl.remove();
      }

      // Build the form
      qCount++;
      var formHtml = '<div class="qform choice-form" data-qidx="' + qCount + '">';
      formHtml += '<div class="qform-head"><span><em class="qnum">Q' + qCount + '</em>' + esc(stripPrefix(qText) || '请选择') + '</span><span class="hint">可多选</span></div>';
      formHtml += '<div class="qform-opts">';
      group.forEach(function(g) {
        var isOther = /其他|其它|不确定|自定义|补充|没想好/.test(g.opt.text);
        formHtml += '<label class="opt" data-letter="' + g.opt.letter + '">';
        formHtml += '<input type="checkbox" value="' + esc(g.opt.letter) + '"/>';
        formHtml += '<span class="letter">' + esc(g.opt.letter) + '</span>';
        formHtml += '<span>' + esc(g.opt.text) + '</span>';
        formHtml += '</label>';
        if (isOther) {
          formHtml += '<div class="other-wrap"><input class="other-txt" type="text" placeholder="请补充说明…" disabled/></div>';
        }
      });
      formHtml += '</div></div>';

      // Replace the first option <p> with the form, remove the rest
      var wrapper = document.createElement('div');
      wrapper.innerHTML = formHtml;
      group[0].el.replaceWith(wrapper.firstElementChild);
      for (var gi = 1; gi < group.length; gi++) {
        if (group[gi].el.parentNode) group[gi].el.remove();
      }
    }

    // Type 2: standalone <p> ending with ? or ？ → text input form
    var ps = Array.from(tmp.querySelectorAll('p'));
    ps.forEach(function(p) {
      if (!tmp.contains(p)) return;
      var text = p.textContent.trim();
      if (!/[?？]\s*$/.test(text)) return;
      if (text.length < 4) return;
      // Skip if next sibling is an option (handled by Type 1.5/Type 1)
      var nextEl = p.nextElementSibling;
      if (nextEl) {
        if (nextEl.tagName === 'UL') return;
        if (nextEl.tagName === 'P' && parseOption(nextEl.textContent.trim())) return;
      }
      qCount++;
      var formHtml = '<div class="qform text-form" data-qidx="' + qCount + '">';
      formHtml += '<div class="qform-head"><span><em class="qnum">Q' + qCount + '</em>' + esc(stripPrefix(text)) + '</span></div>';
      formHtml += '<textarea class="qform-textarea" rows="2" placeholder="请输入你的回答…"></textarea>';
      formHtml += '</div>';
      var wrapper = document.createElement('div');
      wrapper.innerHTML = formHtml;
      p.replaceWith(wrapper.firstElementChild);
    });

    // Type 3: <ol> with question items → text input forms
    var ols = Array.from(tmp.querySelectorAll('ol'));
    ols.forEach(function(ol) {
      var lis = Array.from(ol.querySelectorAll('li'));
      var questionLis = lis.filter(function(li) { return /[?？]/.test(li.textContent); });
      if (questionLis.length < 1) return;
      var frag = document.createDocumentFragment();
      lis.forEach(function(li) {
        var text = li.textContent.trim();
        if (/[?？]/.test(text)) {
          qCount++;
          var formHtml = '<div class="qform text-form" data-qidx="' + qCount + '">';
          formHtml += '<div class="qform-head"><span><em class="qnum">Q' + qCount + '</em>' + esc(stripPrefix(text)) + '</span></div>';
          formHtml += '<textarea class="qform-textarea" rows="2" placeholder="请输入你的回答…"></textarea>';
          formHtml += '</div>';
          var wrapper = document.createElement('div');
          wrapper.innerHTML = formHtml;
          frag.appendChild(wrapper.firstElementChild);
        } else {
          var p = document.createElement('p');
          p.innerHTML = li.innerHTML;
          frag.appendChild(p);
        }
      });
      ol.replaceWith(frag);
    });

    return tmp.innerHTML;
  }

  function attachQFormEvents(bodyEl) {
    var forms = Array.from(bodyEl.querySelectorAll('.qform'));
    if (!forms.length) return;

    // Checkbox toggle events for choice forms
    forms.forEach(function(qf) {
      if (!qf.classList.contains('choice-form')) return;
      var opts = Array.from(qf.querySelectorAll('.opt'));
      opts.forEach(function(opt) {
        opt.addEventListener('click', function(e) {
          if (e.target.classList.contains('other-txt')) return;
          var cb = opt.querySelector('input[type=checkbox]');
          if (e.target !== cb) cb.checked = !cb.checked;
          opt.classList.toggle('checked', cb.checked);
          // Enable/disable "other" text input
          var otherWrap = opt.nextElementSibling;
          if (otherWrap && otherWrap.classList.contains('other-wrap')) {
            var otherInput = otherWrap.querySelector('.other-txt');
            if (otherInput) {
              otherInput.disabled = !cb.checked;
              if (cb.checked) otherInput.focus();
            }
          }
        });
      });
    });

    // Add "整理答案填入输入框 →" button after the last qform
    var lastForm = forms[forms.length - 1];
    var actionsDiv = document.createElement('div');
    actionsDiv.className = 'qform-actions';
    actionsDiv.innerHTML = '<button class="btn-fill">整理答案填入输入框 →</button>';
    lastForm.after(actionsDiv);

    var fillBtn = actionsDiv.querySelector('.btn-fill');
    fillBtn.addEventListener('click', function() {
      fillAnswersToInput(bodyEl, actionsDiv);
    });
  }

  function fillAnswersToInput(bodyEl, actionsEl) {
    var forms = Array.from(bodyEl.querySelectorAll('.qform'));
    var lines = [];
    forms.forEach(function(qf) {
      var idx = qf.getAttribute('data-qidx');
      var headSpan = qf.querySelector('.qform-head span');
      var qTitle = headSpan ? headSpan.textContent.replace(/^Q\d+/, '').trim() : ('问题' + idx);

      if (qf.classList.contains('choice-form')) {
        var selected = [];
        var opts = Array.from(qf.querySelectorAll('.opt'));
        opts.forEach(function(opt) {
          var cb = opt.querySelector('input[type=checkbox]');
          if (cb && cb.checked) {
            var letter = opt.getAttribute('data-letter') || '';
            var text = opt.querySelector('span:last-child');
            var val = letter + '. ' + (text ? text.textContent : '');
            // Check for "other" text
            var otherWrap = opt.nextElementSibling;
            if (otherWrap && otherWrap.classList.contains('other-wrap')) {
              var otherInput = otherWrap.querySelector('.other-txt');
              if (otherInput && otherInput.value.trim()) {
                val += '（' + otherInput.value.trim() + '）';
              }
            }
            selected.push(val);
          }
        });
        if (selected.length) {
          lines.push(qTitle + '：' + selected.join('、'));
        }
      } else if (qf.classList.contains('text-form')) {
        var textarea = qf.querySelector('.qform-textarea');
        if (textarea && textarea.value.trim()) {
          lines.push(qTitle + '：' + textarea.value.trim());
        }
      }
    });

    if (lines.length) {
      input.value = lines.join('\n');
      input.focus();
      // Mark button as done
      var btn = actionsEl.querySelector('.btn-fill');
      if (btn) {
        btn.classList.add('done');
        btn.textContent = '已填入 ✓';
      }
    }
  }

  async function handleAsk(rawQuery, _retried) {
    const query = (rawQuery || "").trim();
    if (!query) return;
    if (!_retried) addMsg("user", esc(query));
    input.value = "";

    const typing = showTyping();
    setBusy(true);

    let botMsg = null, replyEl = null;
    let fullRaw = "";
    try {
      await streamAgent(query, (delta) => {
        // Check for reasoning_content error in the streamed text
        if (fullRaw.length < 500 && /reasoning_content.*must be passed/i.test(fullRaw + delta)) {
          throw new Error("__REASONING_RETRY__");
        }
        if (typing.parentNode) typing.remove();
        fullRaw += delta;
        if (!botMsg) {
          botMsg = addMsg("bot", '<span class="reply-text streaming"></span>');
          replyEl = botMsg.querySelector(".reply-text");
        }
        // During streaming, render markdown without form enhancement
        replyEl.innerHTML = renderMD(fullRaw);
        chat.scrollTop = chat.scrollHeight;
      });
      if (typing.parentNode) typing.remove();
      if (replyEl) {
        replyEl.classList.remove("streaming");
        // Check if the final content is an error message about reasoning_content
        if (/reasoning_content.*must be passed/i.test(fullRaw)) {
          throw new Error("__REASONING_RETRY__");
        }
        // Final render with form enhancement
        replyEl.innerHTML = enhanceQuestions(renderMD(fullRaw));
        attachQFormEvents(replyEl);
      }
      if (!botMsg) {
        addMsg("bot", "抱歉，暂时无法获取回复，请稍后再试。");
      } else if (!fullRaw.trim()) {
        // Stream ended but no text content received (likely connection dropped during tool calls)
        replyEl.innerHTML = '<span style="color:var(--txt-faint)">AI 正在后台执行复杂任务（可能涉及多个工具调用），连接已中断。<br/>请稍等片刻后发送相同问题重试，Agent 会基于已完成的工作继续回答。</span>';
      }
    } catch (err) {
      if (typing.parentNode) typing.remove();
      if (botMsg && botMsg.parentNode) botMsg.remove();

      // Auto-retry once on reasoning_content error (same conversation)
      if (err.message === "__REASONING_RETRY__" && !_retried) {
        addMsg("bot", '<span style="color:var(--txt-faint);font-size:12px">⟳ 遇到平台内部错误，正在重试…</span>');
        chat.scrollTop = chat.scrollHeight;
        setBusy(false);
        return handleAsk(query, true);
      }

      var isReasoningErr = err.message === "__REASONING_RETRY__";
      if (isReasoningErr) {
        addMsg("bot", '抱歉，影刀 Agent 平台当前存在内部异常（thinking mode + tool_calls 的 reasoning_content 未正确回传），这是平台侧的问题，暂时无法通过前端解决。<br/><span style="font-size:12px;color:var(--txt-faint)">建议稍后再试，或换一种方式描述你的问题。</span>');
      } else {
        addMsg("bot", "连接异常：" + esc(err.message) + '<br/><span style="font-size:12px;color:var(--txt-faint)">可尝试点击「新对话」重新开始。</span>');
      }
    } finally {
      setBusy(false);
      input.focus();
      saveChat();
    }
  }

  form.addEventListener("submit", (e) => { e.preventDefault(); handleAsk(input.value); });

  /* ---------- 详情弹窗 ---------- */
  const modal = $("#detailModal");
  const modalBody = $("#modalBody");
  function openDetail(idx) {
    const s = SCENARIOS[idx];
    if (!s) return;
    const list = (arr) => (arr && arr.length ? '<ul class="detail-list">' + arr.map((x) => '<li>' + esc(x) + '</li>').join("") + '</ul>' : "");
    const linkBtn = s.link && s.link !== "#"
      ? '<a class="detail-link-btn" href="' + esc(s.link) + '" target="_blank" rel="noopener">前往场景落地链接 ↗</a>'
      : '<button class="detail-link-btn" disabled style="opacity:.6;cursor:not-allowed">链接待补充</button>';
    const ovHtml = (s.overview && s.overview !== s.name) ? '<div class="detail-section"><h4>场景概述</h4><p>' + esc(s.overview) + '</p></div>' : "";
    const valHtml = (s.value && s.value.length) ? '<div class="detail-section"><h4>价值亮点</h4>' + list(s.value) + '</div>' : "";
    const stepHtml = (s.steps && s.steps.length) ? '<div class="detail-section"><h4>流程步骤</h4>' + list(s.steps) + '</div>' : "";
    const platHtml = (s.platforms && s.platforms.length) ? '<div class="modal-meta"><span>涉及平台：<b>' + s.platforms.join("、") + '</b></span></div>' : "";
    const rateHtml = (s.rating || s.value_class || s.business_score || s.reuse_score) ?
      '<div class="modal-meta">' +
        (s.rating ? '<span class="card-rating ' + ratingClass(s.rating) + '">' + esc(s.rating) + '</span>' : "") +
        (s.value_class ? '<span>价值分类：<b>' + esc(s.value_class) + '</b></span>' : "") +
        (s.business_score ? '<span>业务价值：<b>' + esc(s.business_score) + '</b></span>' : "") +
        (s.reuse_score ? '<span>复用价值：<b>' + esc(s.reuse_score) + '</b></span>' : "") +
      '</div>' : "";

    modalBody.innerHTML = [
      '<div class="modal-head">',
        '<h3 class="modal-name" id="modalTitle">' + esc(s.name) + '</h3>',
        '<div class="modal-meta"><span>所属领域：<b>' + esc(s.industry) + '</b></span></div>',
        platHtml,
        rateHtml,
      '</div>',
      ovHtml, valHtml, stepHtml,
      '<div class="detail-section"><h4>落地链接</h4>' + linkBtn + '</div>',
    ].join("");
    modal.hidden = false;
    document.body.style.overflow = "hidden";
  }
  function closeModal() { modal.hidden = true; document.body.style.overflow = ""; }
  $$("[data-close]", modal).forEach((el) => el.addEventListener("click", closeModal));
  document.addEventListener("keydown", (e) => { if (e.key === "Escape" && !modal.hidden) closeModal(); });

  /* ---------- 统计 ---------- */
  function setupStats() {
    const total = SCENARIOS.length;
    const indCount = new Set(SCENARIOS.map((s) => s.industry)).size;
    const linked = SCENARIOS.filter((s) => s.link && s.link !== "#").length;
    $("#topTotal").textContent = total;
    $("#topLinked").textContent = linked;
    $("#statTotal").textContent = total;
    $("#statIndustry").textContent = indCount;
    $("#statLinked").textContent = linked;
  }

  /* ---------- 光标光晕 ---------- */
  function bindCursorGlow() {
    const glow = $("#cursorGlow");
    if (!glow) return;
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    let tx = innerWidth / 2, ty = innerHeight / 2, rx = tx, ry = ty;
    document.addEventListener("mousemove", (e) => { tx = e.clientX; ty = e.clientY; glow.style.opacity = "1"; });
    document.addEventListener("mouseleave", () => (glow.style.opacity = "0"));
    const interactive = "button, a, .card, input, .filter-pill, .reco, .discover-btn, .discover-card";
    document.addEventListener("mouseover", (e) => { if (e.target.closest(interactive)) glow.classList.add("active"); });
    document.addEventListener("mouseout", (e) => { if (e.target.closest(interactive)) glow.classList.remove("active"); });
    if (reduce) {
      document.addEventListener("mousemove", (e) => {
        glow.style.transform = "translate(" + e.clientX + "px," + e.clientY + "px) translate(-50%,-50%)";
      });
      return;
    }
    (function loop() {
      rx += (tx - rx) * 0.16; ry += (ty - ry) * 0.16;
      glow.style.transform = "translate(" + rx + "px," + ry + "px) translate(-50%,-50%)";
      requestAnimationFrame(loop);
    })();
  }

  /* ---------- 初始化 ---------- */
  buildFilters();
  setupStats();
  render();
  bindCursorGlow();
})();
