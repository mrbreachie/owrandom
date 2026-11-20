// ============================================================
// OW Hero Tools — app.js
// Routing, hero roller, counter guide, meta tier list
// ============================================================

const $ = (sel, root = document) => root.querySelector(sel);
const $$ = (sel, root = document) => [...root.querySelectorAll(sel)];

const TIER_ORDER = ["S", "A", "B", "C", "D", "F"];
const ROLES = ["Tank", "Damage", "Support"];

const state = {
  page: "selector",
  playerCount: 5,
  role: "all",
  unique: true,
  perks: false,
  metaOnly: false,
  custom: { Tank: 1, Damage: 2, Support: 2, all: 0 },
  counterRole: "all",
  selected: null,
};

const tierOf = name => META.tiers[name] || "–";
const findHero = name => ALL_HEROES.find(h => h.name === name);
const roleClass = role => "role-" + role.toLowerCase();
const esc = s => String(s).replace(/[&<>"]/g, c => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[c]));

function tierChip(name) {
  const t = tierOf(name);
  return `<span class="tier tier-${t.toLowerCase()}" title="Current tier: ${t}">${t}</span>`;
}


function levelBadge(level) {
  return `<span class="level level-${level.toLowerCase()}">${level}</span>`;
}

// Two ratings: how hard to play, and how hard to counter.
function ratingBlock(name, compact = false) {
  const r = RATINGS[name];
  if (!r) return "";
  const row = (label, level) => `
    <div class="rating" aria-label="${label}: ${level}">
      <span class="rating-label">${label}</span>
      ${levelBadge(level)}
    </div>`;
  return `<div class="ratings${compact ? " compact" : ""}">
    ${row(compact ? "Play" : "Difficulty to play", r.play)}
    ${row(compact ? "Counter" : "Difficulty to counter", r.counter)}
  </div>`;
}

// ─────────────── Routing ───────────────
function showPage(page) {
  if (!document.getElementById("page-" + page)) page = "selector";
  state.page = page;
  $$(".page").forEach(p => p.classList.toggle("active", p.id === "page-" + page));
  $$("[data-page]").forEach(b => {
    if (b.matches(".nav-btn, .tab-btn")) b.setAttribute("aria-current", b.dataset.page === page ? "page" : "false");
  });
  if (location.hash !== "#" + page) history.replaceState(null, "", "#" + page);
  window.scrollTo({ top: 0 });
}

// ─────────────── Segmented controls ───────────────
function bindSeg(el, onChange) {
  el.addEventListener("click", e => {
    const btn = e.target.closest("button[role=radio]");
    if (!btn) return;
    $$("button", el).forEach(b => b.setAttribute("aria-checked", b === btn ? "true" : "false"));
    onChange(btn.dataset.role);
  });
}

// ─────────────── Roller ───────────────
function setPlayers(n) {
  state.playerCount = Math.min(6, Math.max(1, n));
  $("#player-count").textContent = state.playerCount;
  $("#dec-players").disabled = state.playerCount <= 1;
  $("#inc-players").disabled = state.playerCount >= 6;
}

// Custom mode: per-role slot counts, max 6 total, at least 1.
const MAX_SLOTS = 6;
const customTotal = () => Object.values(state.custom).reduce((a, b) => a + b, 0);

function setCustom(slot, n) {
  const others = customTotal() - state.custom[slot];
  state.custom[slot] = Math.max(0, Math.min(n, MAX_SLOTS - others));
  if (customTotal() === 0) state.custom[slot] = 1;
  renderCustom();
}

function renderCustom() {
  const total = customTotal();
  $$("#custom-roles .role-stepper").forEach(el => {
    const n = state.custom[el.dataset.slot];
    $(".stepper-val", el).textContent = n;
    $("[data-step='-1']", el).disabled = n <= 0 || total <= 1;
    $("[data-step='1']", el).disabled = total >= MAX_SLOTS;
    el.classList.toggle("is-zero", n === 0);
  });
  $("#custom-total").textContent = `· ${total} of ${MAX_SLOTS}`;
}

function setRoleMode(role) {
  state.role = role;
  const custom = role === "custom";
  $("#custom-roles").hidden = !custom;
  $("#players-control").hidden = custom;
}

function shuffle(arr) {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}
const pick = arr => arr[Math.floor(Math.random() * arr.length)];

function poolFor(role) {
  return ALL_HEROES.filter(h =>
    (role === "all" || h.role === role) &&
    (!state.metaOnly || ["S", "A"].includes(tierOf(h.name)))
  );
}

function drawFrom(pool, count, used) {
  const out = [];
  if (state.unique) {
    const avail = shuffle(pool.filter(h => !used.has(h.name)));
    for (const h of avail.slice(0, count)) { out.push(h); used.add(h.name); }
  } else {
    for (let i = 0; i < count && pool.length; i++) out.push(pick(pool));
  }
  return out;
}

// The role pool for each slot, in display order.
function slotsToRoll() {
  if (state.role === "5v5") {
    // Fill slots in 1-2-2 order, repeating the pattern for 6 players.
    return ["Tank", "Damage", "Damage", "Support", "Support", "Damage"].slice(0, state.playerCount);
  }
  if (state.role === "custom") {
    // Fixed roles first so "Any" slots don't take heroes a fixed slot needs.
    return ["Tank", "Damage", "Support", "all"].flatMap(r => Array(state.custom[r]).fill(r));
  }
  return Array(state.playerCount).fill(state.role);
}

function rollHeroes() {
  const used = new Set();
  const slots = slotsToRoll();
  const picked = [];
  for (const r of slots) {
    const [h] = drawFrom(poolFor(r), 1, used);
    if (h) picked.push({ hero: h, flex: r === "all" && state.role === "custom" });
  }

  if (!picked.length) {
    $("#results-grid").innerHTML = `<p class="error-msg" role="alert">No heroes match those filters.</p>`;
    return;
  }
  renderResults(picked, slots.length);
  const btn = $("#roll-btn");
  btn.classList.remove("rolling");
  void btn.offsetWidth;
  btn.classList.add("rolling");
}

function renderResults(results, wanted) {
  const short = results.length < wanted;
  $("#results-grid").innerHTML = results.map(({ hero: h, flex }, i) => {
    let perks = "";
    if (state.perks && h.perks) {
      perks = `
        <div class="perks">
          <div class="perk"><span class="perk-tag minor">Minor</span><span>${esc(pick(h.perks.minor))}</span></div>
          <div class="perk"><span class="perk-tag major">Major</span><span>${esc(pick(h.perks.major))}</span></div>
        </div>`;
    }
    return `
      <article class="result-card ${roleClass(h.role)}" style="--i:${i}">
        <header class="rc-head">
          <span class="rc-player">P${i + 1}</span>
          ${tierChip(h.name)}
        </header>
        <div class="rc-icon" aria-hidden="true">${h.icon}</div>
        <h2 class="rc-name">${esc(h.name)}</h2>
        <span class="role-label">${h.role}${flex ? ` <span class="flex-tag">Any</span>` : ""}</span>
        ${ratingBlock(h.name, true)}
        ${perks}
        <button class="rc-link" data-hero="${esc(h.name)}">Counters →</button>
      </article>`;
  }).join("") + (short ? `<p class="error-msg">Only ${results.length} unique heroes match those filters.</p>` : "");
}

// ─────────────── Counters ───────────────
function renderCounterGrid() {
  const q = $("#hero-search").value.trim().toLowerCase();
  const list = ALL_HEROES
    .filter(h => (state.counterRole === "all" || h.role === state.counterRole) && h.name.toLowerCase().includes(q))
    .sort((a, b) => ROLES.indexOf(a.role) - ROLES.indexOf(b.role) || a.name.localeCompare(b.name));

  $("#counter-hero-grid").innerHTML = list.length ? list.map(h => `
    <li>
      <button class="hero-tile ${roleClass(h.role)}" data-hero="${esc(h.name)}" aria-pressed="${state.selected === h.name}">
        <span class="ht-icon" aria-hidden="true">${h.icon}</span>
        <span class="ht-name">${esc(h.name)}</span>
        ${tierChip(h.name)}
      </button>
    </li>`).join("") : `<li class="error-msg">No heroes found.</li>`;
}

function counterList(names, kind) {
  return names.map(n => {
    const h = findHero(n);
    return `<li><button class="ci ${kind}" data-hero="${esc(n)}">
      <span aria-hidden="true">${h ? h.icon : "•"}</span><span>${esc(n)}</span>${h ? tierChip(n) : ""}
    </button></li>`;
  }).join("");
}

function selectHero(name, { scroll = true } = {}) {
  const h = findHero(name);
  if (!h) return;
  state.selected = name;
  $$(".hero-tile").forEach(t => t.setAttribute("aria-pressed", t.dataset.hero === name));

  const wr = META.winrates[name];
  const detail = $("#counter-detail");
  detail.innerHTML = `
    <header class="d-head ${roleClass(h.role)}">
      <span class="d-icon" aria-hidden="true">${h.icon}</span>
      <div>
        <h2 class="d-name">${esc(h.name)}</h2>
        <div class="d-meta">
          <span class="role-label">${h.role}</span>
          ${tierChip(h.name)}
          ${wr ? `<span class="d-wr">${wr.toFixed(1)}% WR</span>` : ""}
        </div>
      </div>
    </header>
    ${ratingBlock(h.name)}
    <div class="d-cols">
      <section>
        <h3 class="d-h good">Strong against</h3>
        <ul class="ci-list">${counterList(h.beats, "good")}</ul>
      </section>
      <section>
        <h3 class="d-h bad">Weak against</h3>
        <ul class="ci-list">${counterList(h.loses, "bad")}</ul>
      </section>
    </div>
    <div class="tip"><strong>How to play</strong><p>${esc(h.tip)}</p></div>
    ${h.perks ? `
    <div class="d-perks">
      <div><span class="perk-tag minor">Minor perks</span><ul>${h.perks.minor.map(p => `<li>${esc(p)}</li>`).join("")}</ul></div>
      <div><span class="perk-tag major">Major perks</span><ul>${h.perks.major.map(p => `<li>${esc(p)}</li>`).join("")}</ul></div>
    </div>` : ""}
  `;
  if (scroll && window.matchMedia("(max-width: 899px)").matches) {
    detail.scrollIntoView({ behavior: "smooth", block: "start" });
  }
}

function openCounters(name) {
  showPage("counters");
  state.counterRole = "all";
  $$("#counter-seg button").forEach(b => b.setAttribute("aria-checked", b.dataset.role === "all"));
  $("#hero-search").value = "";
  renderCounterGrid();
  selectHero(name);
}

// ─────────────── Meta ───────────────
function renderMeta() {
  $("#season-strip").innerHTML = `
    <span><b>${META.season}</b> · ${META.patch}</span>
    <span class="dot" aria-hidden="true"></span>
    <span>${ALL_HEROES.length} heroes</span>
    <span class="dot" aria-hidden="true"></span>
    <span>Next: <b>${META.upcoming.name}</b> (${META.upcoming.role}), Season 6</span>`;

  $("#meta-eyebrow").textContent = `${META.season} · ${META.patch}`;
  $("#meta-sub").textContent = `Ranked by 5v5 win rate across all ranks. Updated ${META.updated}. Tap a hero for counters.`;

  $("#meta-cols").innerHTML = ROLES.map(role => {
    const heroes = ALL_HEROES.filter(h => h.role === role);
    const rows = TIER_ORDER.map(t => {
      const inTier = heroes
        .filter(h => tierOf(h.name) === t)
        .sort((a, b) => (META.winrates[b.name] || 0) - (META.winrates[a.name] || 0));
      if (!inTier.length) return "";
      return `
        <div class="tier-row">
          <span class="tier tier-${t.toLowerCase()} tier-lg">${t}</span>
          <ul class="tier-heroes">
            ${inTier.map(h => `
              <li><button class="th" data-hero="${esc(h.name)}">
                <span aria-hidden="true">${h.icon}</span>
                <span class="th-name">${esc(h.name)}</span>
                <span class="th-wr">${(META.winrates[h.name] || 0).toFixed(1)}%</span>
              </button></li>`).join("")}
          </ul>
        </div>`;
    }).join("");
    return `<section class="panel meta-col ${roleClass(role)}"><h2 class="meta-role">${role}</h2>${rows}</section>`;
  }).join("");

  $("#meta-note").innerHTML = `Source: <a href="${META.sourceUrl}" target="_blank" rel="noopener">${esc(META.source)}</a>. ` +
    `Win rates move every patch, so treat tiers as a guide rather than gospel. ` +
    `Difficulty-to-play and difficulty-to-counter ratings (Easy, Medium, Hard, Expert) are editorial estimates, not official data. ` +
    `${esc(META.upcoming.name)}: ${esc(META.upcoming.note)}`;
}

// ─────────────── Init ───────────────
document.addEventListener("DOMContentLoaded", () => {
  // Navigation
  document.addEventListener("click", e => {
    const nav = e.target.closest("[data-page]");
    if (nav) { e.preventDefault(); showPage(nav.dataset.page); return; }
    const heroBtn = e.target.closest("[data-hero]");
    if (!heroBtn) return;
    if (heroBtn.closest("#counter-hero-grid")) selectHero(heroBtn.dataset.hero);
    else openCounters(heroBtn.dataset.hero);
  });
  window.addEventListener("hashchange", () => showPage(location.hash.slice(1)));

  // Roller controls
  $("#dec-players").addEventListener("click", () => setPlayers(state.playerCount - 1));
  $("#inc-players").addEventListener("click", () => setPlayers(state.playerCount + 1));
  bindSeg($("#role-seg"), setRoleMode);
  $("#custom-roles").addEventListener("click", e => {
    const btn = e.target.closest("[data-step]");
    if (!btn) return;
    const slot = btn.closest(".role-stepper").dataset.slot;
    setCustom(slot, state.custom[slot] + Number(btn.dataset.step));
  });
  renderCustom();
  $("#unique-toggle").addEventListener("change", e => { state.unique = e.target.checked; });
  $("#perks-toggle").addEventListener("change", e => { state.perks = e.target.checked; });
  $("#meta-toggle").addEventListener("change", e => { state.metaOnly = e.target.checked; });
  $("#roll-btn").addEventListener("click", rollHeroes);
  document.addEventListener("keydown", e => {
    if (e.code === "Space" && state.page === "selector" && !e.target.closest("input, button, select, textarea")) {
      e.preventDefault();
      rollHeroes();
    }
  });

  // Counter controls
  bindSeg($("#counter-seg"), r => { state.counterRole = r; renderCounterGrid(); });
  $("#hero-search").addEventListener("input", renderCounterGrid);

  setPlayers(state.playerCount);
  renderCounterGrid();
  renderMeta();
  showPage(location.hash.slice(1) || "selector");
});
