/* ============================================================
   DATA — edit this section to update site content
   ============================================================ */

const SKILLS = [
  { name: "AWS / Cloud Infrastructure", pct: 92 },
  { name: "Terraform / CloudFormation (IaC)", pct: 90 },
  { name: "Kubernetes & Docker", pct: 88 },
  { name: "CI/CD (Jenkins)", pct: 90 },
  { name: "DevSecOps (SAST / DAST / CSPM)", pct: 90 },
  { name: "Python / Automation", pct: 85 },
  { name: "Monitoring (Prometheus / Grafana / CloudWatch)", pct: 80 },
];

const TOOLS = [
  "Wiz", "SonarQube", "Snyk", "Checkmarx", "Aqua",
  "AWS Inspector", "Nessus", "Jenkins", "Git"
];

const PROJECTS = [
  {
    name: "Wiz CSPM Auto-Remediation",
    tag: "Security · AWS",
    desc: "An auto-remediation framework built on Wiz CSPM findings that proactively resolves critical AWS misconfigurations, cutting Mean Time to Remediation across the org.",
    tags: ["AWS", "Wiz", "Python", "IAM"]
  },
  {
    name: "Rootless Docker Framework",
    tag: "Containers · Compliance",
    desc: "A modular Docker base-image framework for rootless containers, streamlining release cycles and hardening microservice security compliance org-wide.",
    tags: ["Docker", "Kubernetes", "Security"]
  },
  {
    name: "CI Security Tollgates",
    tag: "Platform · Python",
    desc: "A Python REST API enforcing automated security and compliance tollgates inside CI pipelines — blocking 20% of applications from reaching vulnerable data in production.",
    tags: ["Python", "CI/CD", "SAST/SCA"]
  },
  {
    name: "Self-Hosted SonarQube Platform",
    tag: "Code Quality · Infra",
    desc: "A single-instance, PostgreSQL-backed SonarQube server providing code-quality scanning across 1,000+ repositories organization-wide.",
    tags: ["SonarQube", "PostgreSQL", "DevOps"]
  },
];

const TIMELINE = [
  {
    date: "Feb 2025 — Present",
    title: "Software Engineer II, JPMorgan Chase",
    desc: "Auto-remediation with Wiz CSPM, shift-left DevSecOps, and least-privilege access across 47 AWS accounts."
  },
  {
    date: "Jul 2022 — Jan 2025",
    title: "Software Engineer I, JPMorgan Chase",
    desc: "IaC-based CI/CD for Lambda, SonarQube-integrated pipelines, and a Jira-validation gatekeeper — cut build times 50%."
  },
  {
    date: "Mar 2021 — May 2021",
    title: "Research Intern, NIT Tiruchirappalli",
    desc: "Co-authored 'Ontospammer' on hybrid bagging for spam detection; prototyped a metadata-driven course recommender."
  },
  {
    date: "Aug 2018 — Jun 2022",
    title: "B.Tech, Computer Science",
    desc: "Jaypee Institute of Information Technology, Noida.",
    academy: true
  },
];

const TROPHIES = [
  { name: "AWS Certified DevOps Engineer — Professional", meta: "2026 – 2029" },
  { name: "HashiCorp Terraform Associate", meta: "2024 – 2026" },
  { name: "AWS Certified Cloud Practitioner", meta: "2023 – 2029" },
  { name: "Shout-Out & Kudos Award", meta: "JPMorgan Chase & Co." },
];

const SCREEN_META = [
  { objective: "Start the session", quote: "Infrastructure is my battlefield. Automation is my weapon." },
  { objective: "Learn who you're dealing with", quote: "Four years in, still reading logs like bedtime stories." },
  { objective: "Review unlocked abilities", quote: "Every bar below was earned on an incident call, not a course." },
  { objective: "Inspect completed builds", quote: "Four systems, one theme: fewer humans in the loop, fewer fires." },
  { objective: "Trace the full career path", quote: "Every rotation on this list left the pipeline better than it found it." },
  { objective: "Collect every unlocked trophy", quote: "Certifications are proof the panic eventually became a process." },
  { objective: "Open a secure line of contact", quote: "Fastest way to reach me: email. Second fastest: a PagerDuty alert." },
];

/* ============================================================
   BOOT SEQUENCE
   ============================================================ */
const BOOT_LINES = [
  { text: "$ whoami", cls: "prompt" },
  { text: "dev_agrawal", cls: "out" },
  { text: "$ ./init_portfolio.sh", cls: "prompt" },
  { text: "loading environment ... done", cls: "out" },
];

function typeBoot(){
  const el = document.getElementById("boot-lines");
  const overlay = document.getElementById("boot-overlay");
  let i = 0, j = 0;
  const speed = 22;

  function typeLine(){
    if (i >= BOOT_LINES.length){
      setTimeout(() => overlay.classList.add("done"), 350);
      return;
    }
    const line = BOOT_LINES[i];
    if (j === 0){
      const span = document.createElement("div");
      span.className = line.cls;
      span.dataset.full = line.text;
      el.appendChild(span);
    }
    const span = el.lastChild;
    if (j <= line.text.length){
      span.textContent = line.text.slice(0, j);
      j++;
      setTimeout(typeLine, speed);
    } else {
      i++; j = 0;
      setTimeout(typeLine, 180);
    }
  }
  typeLine();
}

/* Hero terminal (start screen) — loops a short status readout */
const HERO_LINES = [
  { text: "$ whoami", cls: "prompt" },
  { text: "dev_agrawal — devops / cloud / devsecops", cls: "out" },
  { text: "$ aws sts get-caller-identity --accounts", cls: "prompt" },
  { text: "47 accounts under least-privilege policy", cls: "out" },
  { text: "$ ./deploy.sh --env=production", cls: "prompt" },
  { text: "tollgates passed · scans clean · shipped ✓", cls: "out" },
];

function typeHero(){
  const el = document.getElementById("hero-term-lines");
  if (!el) return;
  el.innerHTML = "";
  let i = 0, j = 0;
  const speed = 18;
  function typeLine(){
    if (i >= HERO_LINES.length) return;
    const line = HERO_LINES[i];
    if (j === 0){
      const span = document.createElement("div");
      span.className = line.cls;
      el.appendChild(span);
    }
    const span = el.lastChild;
    if (j <= line.text.length){
      span.textContent = line.text.slice(0, j);
      j++;
      setTimeout(typeLine, speed);
    } else {
      i++; j = 0;
      setTimeout(typeLine, 260);
    }
  }
  typeLine();
}

/* ============================================================
   CONTENT POPULATION
   ============================================================ */
function populateSkills(){
  const wrap = document.getElementById("skill-bars");
  wrap.innerHTML = SKILLS.map(s => `
    <div class="skill-row">
      <div class="skill-top"><span class="skill-name">${s.name}</span><span class="skill-pct">${s.pct}%</span></div>
      <div class="skill-track"><div class="skill-fill" data-pct="${s.pct}"></div></div>
    </div>
  `).join("");

  const grid = document.getElementById("tool-grid");
  grid.innerHTML = TOOLS.map(t => `<div class="tool-chip">${t}</div>`).join("");
}

function animateSkillBars(){
  document.querySelectorAll(".skill-fill").forEach(el => {
    el.style.width = el.dataset.pct + "%";
  });
}

function populateProjects(){
  const list = document.getElementById("project-list");
  list.innerHTML = PROJECTS.map((p, idx) => `
    <button class="project-item ${idx===0?'active':''}" data-idx="${idx}">
      <span class="p-name">${p.name}</span>
      <span class="p-tag">${p.tag}</span>
    </button>
  `).join("");

  function renderDetail(idx){
    const p = PROJECTS[idx];
    document.getElementById("project-detail").innerHTML = `
      <h3>${p.name}</h3>
      <p>${p.desc}</p>
      <div class="project-tags">${p.tags.map(t => `<span>${t}</span>`).join("")}</div>
    `;
  }
  renderDetail(0);

  list.querySelectorAll(".project-item").forEach(btn => {
    btn.addEventListener("click", () => {
      list.querySelectorAll(".project-item").forEach(b => b.classList.remove("active"));
      btn.classList.add("active");
      renderDetail(Number(btn.dataset.idx));
    });
  });
}

function populateTimeline(){
  const el = document.getElementById("timeline");
  el.innerHTML = TIMELINE.map(t => `
    <li class="${t.academy ? 'is-academy' : ''}">
      <span class="t-date">${t.date}</span>
      <div class="t-title">${t.title}</div>
      <div class="t-desc">${t.desc}</div>
    </li>
  `).join("");
}

function populateTrophies(){
  const el = document.getElementById("trophy-grid");
  el.innerHTML = TROPHIES.map(t => `
    <div class="trophy-card">
      <div class="trophy-icon"></div>
      <h4>${t.name}</h4>
      <p>${t.meta}</p>
    </div>
  `).join("");
}

/* ============================================================
   NAVIGATION / HUD
   ============================================================ */
const screens = Array.from(document.querySelectorAll(".screen"));
const totalScreens = screens.length;
let current = 0;

const dotsWrap = document.getElementById("dots");
dotsWrap.innerHTML = screens.map((_, i) => `<button class="dot ${i===0?'active':''}" data-idx="${i}" aria-label="Go to section ${i+1}"></button>`).join("");
const dots = Array.from(dotsWrap.querySelectorAll(".dot"));

const menuItems = Array.from(document.querySelectorAll(".menu-item[data-goto]"));
const arrowPrev = document.getElementById("arrow-prev");
const arrowNext = document.getElementById("arrow-next");
const escBtn = document.getElementById("btn-esc");
const objectiveTitle = document.getElementById("objective-title");
const signatureQuote = document.getElementById("signature-quote");
const minimapDot = document.getElementById("minimap-dot");
const hudXp = document.getElementById("hud-xp");
const hudLifeVal = document.getElementById("hud-life-val");
const stars = document.querySelectorAll(".star");

let xp = 0;
let xpAnimFrame;

function animateXp(target){
  cancelAnimationFrame(xpAnimFrame);
  const start = xp;
  const duration = 700;
  const t0 = performance.now();
  function step(t){
    const p = Math.min(1, (t - t0) / duration);
    xp = Math.round(start + (target - start) * p);
    hudXp.textContent = "$" + xp.toLocaleString("en-US");
    if (p < 1) xpAnimFrame = requestAnimationFrame(step);
  }
  xpAnimFrame = requestAnimationFrame(step);
}

function goTo(idx){
  idx = Math.max(0, Math.min(totalScreens - 1, idx));
  screens[current].classList.remove("active");
  screens[idx].classList.add("active");
  current = idx;

  dots.forEach((d, i) => d.classList.toggle("active", i === idx));
  menuItems.forEach(m => m.classList.toggle("active", Number(m.dataset.goto) === idx));

  arrowPrev.classList.toggle("hidden", idx === 0);
  arrowNext.classList.toggle("hidden", idx === totalScreens - 1);
  escBtn.classList.toggle("visible", idx !== 0);

  const meta = SCREEN_META[idx];
  objectiveTitle.textContent = meta.objective.toUpperCase();
  signatureQuote.textContent = `"${meta.quote}"`;

  // minimap dot travels diagonally with progress
  const p = idx / (totalScreens - 1);
  minimapDot.setAttribute("cx", 6 + p * 88);
  minimapDot.setAttribute("cy", 54 - p * 48);

  // HUD stats
  animateXp(idx * 480000 + (idx > 0 ? 950000 : 0));
  hudLifeVal.textContent = String(100 - idx * 2);
  const litCount = Math.min(5, idx);
  stars.forEach((s, i) => s.classList.toggle("lit", i < litCount));

  if (idx === 2) requestAnimationFrame(() => setTimeout(animateSkillBars, 80));

  window.scrollTo(0,0);
}

dots.forEach(d => d.addEventListener("click", () => goTo(Number(d.dataset.idx))));
menuItems.forEach(m => m.addEventListener("click", () => goTo(Number(m.dataset.goto))));
arrowPrev.addEventListener("click", () => goTo(current - 1));
arrowNext.addEventListener("click", () => goTo(current + 1));
escBtn.addEventListener("click", () => goTo(0));

document.addEventListener("keydown", (e) => {
  if (document.getElementById("exit-modal").classList.contains("open")) return;
  if (e.key === "ArrowRight") goTo(current + 1);
  else if (e.key === "ArrowLeft") goTo(current - 1);
  else if (e.key === "Escape") goTo(0);
  else if (/^[1-7]$/.test(e.key)) goTo(Number(e.key) - 1);
});

/* swipe support (touch) */
let touchStartX = null;
document.addEventListener("touchstart", (e) => { touchStartX = e.touches[0].clientX; }, {passive:true});
document.addEventListener("touchend", (e) => {
  if (touchStartX === null) return;
  const dx = e.changedTouches[0].clientX - touchStartX;
  if (Math.abs(dx) > 60) goTo(current + (dx < 0 ? 1 : -1));
  touchStartX = null;
}, {passive:true});

/* ============================================================
   EXIT MODAL
   ============================================================ */
const exitModal = document.getElementById("exit-modal");
document.getElementById("btn-exit").addEventListener("click", () => exitModal.classList.add("open"));
document.getElementById("modal-cancel").addEventListener("click", () => exitModal.classList.remove("open"));
exitModal.addEventListener("click", (e) => { if (e.target === exitModal) exitModal.classList.remove("open"); });

/* ============================================================
   CLOCK
   ============================================================ */
const hudClock = document.getElementById("hud-clock");

function tick(){
  const now = new Date();
  hudClock.textContent = now.toLocaleTimeString([], { hour12:false, hour:'2-digit', minute:'2-digit' });
}
tick();
setInterval(tick, 1000);

/* ============================================================
   PHOTO CROSSFADE (hero + experience backgrounds)
   ============================================================ */
function initPhotoCrossfade(containerId, intervalMs){
  const container = document.getElementById(containerId);
  if (!container) return;
  const layers = Array.from(container.querySelectorAll(".photo-layer"));
  if (layers.length < 2) return;
  let idx = 0;
  setInterval(() => {
    layers[idx].classList.remove("active");
    idx = (idx + 1) % layers.length;
    layers[idx].classList.add("active");
  }, intervalMs);
}

/* ============================================================
   INIT
   ============================================================ */
populateSkills();
populateProjects();
populateTimeline();
populateTrophies();
typeBoot();
typeHero();
initPhotoCrossfade("hero-photobg", 5500);
initPhotoCrossfade("exp-photobg", 6000);
goTo(0);
