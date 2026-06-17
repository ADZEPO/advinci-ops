import { useState } from "react";

// fonts
const _fontImport = (() => { const l = document.createElement("link"); l.rel = "stylesheet"; l.href = "https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500;600;700&family=DM+Mono:wght@400;500&display=swap"; document.head.appendChild(l); })();

const pipelines = [
  { id: "domain", code: "01", label: "Domain Setup", color: "#F5761A", accent: "#0288D1", icon: "🌐", objective: "Create deliverability-optimized domains and inboxes ready for cold email campaigns.", steps: [ { id: 1, title: "Domain Acquisition", detail: "Buy secondary domains (not client's main domain). Keep names natural and similar.", rules: ["Avoid spammy names", "Avoid too many hyphens", "1 domain = 2–3 inboxes"], checklist: ["Domains purchased", "Names are readable & professional"] }, { id: 2, title: "DNS Configuration", detail: "Set up SPF, DKIM, and DMARC records for each domain.", rules: ["SPF: v=spf1 include:_spf.google.com ~all", "DMARC: p=none + rua email"], checklist: ["SPF added", "DKIM verified", "DMARC configured"] }, { id: 3, title: "Inbox Creation", detail: "Create 2–3 inboxes per domain using real first names (not info@ or sales@).", rules: ["Use realistic names e.g. john@, emma@", "Store credentials securely"], checklist: ["Inboxes created", "Credentials stored"] }, { id: 4, title: "Inbox Configuration", detail: "Set up profile picture, realistic name, and email signature per inbox.", rules: ["Match timezone with target audience", "Signature must look human"], checklist: ["Profile picture set", "Signature configured", "Timezone matched"] }, { id: 5, title: "Domain Health Check", detail: "Verify DNS propagation, blacklist status, and deliverability readiness.", rules: ["Check for SPF/DKIM errors", "Confirm not blacklisted"], checklist: ["DNS propagated", "Not blacklisted", "Ready for warmup"] } ], mistakes: ["Using main domain", "Too many inboxes per domain", "Skipping DNS setup", "Fake inbox names", "Sending too early"], nextStep: "warmup" },
  { id: "warmup", code: "02", label: "Warmup Phase", color: "#FFB74D", accent: "#F57C00", icon: "🔥", objective: "Gradually build sender reputation for new domains and inboxes to ensure high deliverability.", tools: ["Zapmail — initial warmup & health checks", "Lemwarm — ongoing interaction-based warmup"], steps: [ { id: 1, title: "Initial Warmup (Zapmail)", detail: "Activate warmup immediately after inbox creation. Monitor spam placement.", rules: ["Never skip this step", "Ensure DNS fully working first"], checklist: ["Warmup activated", "No DNS errors", "Not landing in spam"] }, { id: 2, title: "Progressive Volume Ramp", detail: "Increase sending volume gradually over 2–3 weeks.", rules: ["Day 1–3: 5–10/day", "Day 4–7: 10–20/day", "Week 2+: 20–40/day", "Never spike volume suddenly"], checklist: ["Volume schedule defined", "No sudden spikes"] }, { id: 3, title: "Lemwarm Integration", detail: "Connect inboxes to Lemwarm to simulate real interactions.", rules: ["Must be active throughout warmup", "Confirm replies are happening"], checklist: ["Lemwarm active", "Replies happening", "Emails auto-removed from spam"] }, { id: 4, title: "Manual Activity Simulation", detail: "Perform light manual actions to mimic human behavior.", rules: ["Send real emails between inboxes", "Reply manually", "Open emails"], checklist: ["Manual sends done", "Replies sent"] }, { id: 5, title: "Monitoring & Health Checks", detail: "Monitor spam rate, open rate, and reply activity daily.", rules: ["Red flag: emails in spam", "Red flag: no replies", "Red flag: sudden drops"], checklist: ["Daily monitoring active", "No spam flags", "Performance stable"] }, { id: 6, title: "Warmup Completion", detail: "Inboxes are ready when placement is stable, volume consistent, and no spam flags.", rules: ["Typical duration: 2–3 weeks", "Do NOT rush this step"], checklist: ["Consistent inbox placement", "Stable volume", "No spam flags", "Ready for campaigns"] } ], mistakes: ["Sending too early", "Increasing volume too fast", "Skipping Lemwarm", "No monitoring", "Ignoring spam signals"], nextStep: "icp" },
  { id: "icp", code: "03", label: "ICP & Enrichment", color: "#CE93D8", accent: "#7B1FA2", icon: "🎯", objective: "Identify the right target audience and build a high-quality enriched lead list ready for outreach.", steps: [ { id: 0, title: "Pre-Work (MANDATORY)", detail: "Review onboarding notes, CRM docs, and align with Sales before defining ICP.", rules: ["Do NOT define ICP blindly", "Escalate if unclear", "Align with Sales team first"], checklist: ["Onboarding notes reviewed", "CRM checked", "Sales team aligned"], mandatory: true }, { id: 1, title: "ICP Definition", detail: "Define industry, company size, geography, and job titles.", rules: ["Must be approved internally", "Based on existing data — not assumptions"], checklist: ["ICP defined", "Approved internally"] }, { id: 2, title: "Lead Sourcing", detail: "Source only leads that strictly match the ICP.", rules: ["Zero tolerance for irrelevant companies", "Quality > quantity"], checklist: ["Leads match ICP", "No irrelevant companies included"] }, { id: 3, title: "Data Enrichment", detail: "Enrich leads with name, company, job title, and email.", rules: ["Enrichment logic must be approved", "Data must be consistent"], checklist: ["All fields filled", "Data consistent and clean"] }, { id: 4, title: "Personalization Layers", detail: "Add personalization: Basic (name/company), Medium (role/industry), Advanced (custom insights).", rules: ["Must be accurate", "Must feel natural — not robotic"], checklist: ["Variables added", "No broken fields"] }, { id: 5, title: "Data Cleaning", detail: "Remove duplicates, missing emails, and bad fits.", checklist: ["No duplicates", "No missing emails", "Clean dataset ready"] }, { id: 6, title: "Pre-Export Review", detail: "Check formatting and completeness before passing to validation.", checklist: ["Formatting verified", "Ready for email validation"] } ], mistakes: ["Bad ICP definition", "Poor personalization", "Dirty data", "Over-enrichment"], nextStep: "validation" },
  { id: "validation", code: "04", label: "Email Validation", color: "#80CBC4", accent: "#00796B", icon: "✅", objective: "Ensure all email addresses are valid and safe to contact to protect deliverability.", tools: ["NeverBounce — email verification & list cleaning", "Clay — enrichment + built-in validation workflows"], steps: [ { id: 0, title: "Choose Validation Scenario", detail: "Scenario 1: Leads from Clay → validate in Clay. Scenario 2: Client-provided list → validate in NeverBounce.", rules: ["If data originates in Clay → validate in Clay", "If data comes from outside → validate in NeverBounce", "NEVER skip validation"], checklist: ["Scenario identified", "Correct tool selected"], mandatory: true }, { id: 1, title: "Import Lead List", detail: "Upload enriched lead list into NeverBounce (if applicable).", rules: ["CSV format required", "All required fields must be present"], checklist: ["File uploaded", "Correct format (CSV)", "All fields present"] }, { id: 2, title: "Run Verification", detail: "Start verification. Emails categorized as: Valid, Invalid, Catch-all, Risky/Unknown.", checklist: ["Verification complete", "Results categorized"] }, { id: 3, title: "Filter Results", detail: "Keep Valid emails. Catch-all is optional based on policy. Remove Invalid and Risky/Unknown.", rules: ["Always remove Invalid", "Remove Risky/Unknown unless explicitly approved"], checklist: ["Valid emails kept", "Invalid removed", "Policy applied to catch-all"] }, { id: 4, title: "Export Clean List", detail: "Export only approved emails into a clean dataset.", checklist: ["Clean dataset exported", "No invalid emails included"] }, { id: 5, title: "Quality Check", detail: "Final check on bounce risk, formatting, and random samples.", checklist: ["Bounce risk acceptable", "Formatting verified", "Random samples spot-checked", "Ready for campaign import"] } ], mistakes: ["Skipping validation", "Keeping risky emails", "Not filtering properly", "Uploading wrong dataset"], nextStep: "campaign" },
  { id: "campaign", code: "05", label: "Campaign Creation", color: "#EF9A9A", accent: "#C62828", icon: "📧", objective: "Create, launch, and continuously optimize cold email campaigns to generate replies and meetings.", steps: [ { id: 0, title: "Pre-Work Check (MANDATORY)", detail: "Verify all upstream steps are complete before starting campaign.", rules: ["ICP defined ✓", "Leads enriched ✓", "Emails validated ✓", "Domains warmed ✓", "If ANY missing — STOP and fix upstream"], checklist: ["ICP confirmed", "Leads ready", "Validation done", "Domains warmed"], mandatory: true }, { id: 1, title: "Campaign Structure", detail: "Build a sequence of 3–5 emails spaced 2–4 days apart.", rules: ["Email 1: Initial outreach", "Email 2: Follow-up", "Email 3: Value add", "Email 4+: Breakup", "Each email must stand alone"], checklist: ["Sequence created", "Timing set"] }, { id: 2, title: "Copywriting", detail: "Write copy following: Relevance > Creativity. Clarity > Cleverness. Short > Long (50–120 words).", rules: ["Structure: Personalization → Reason → Value → CTA", "Simple language", "Easy to read"], checklist: ["Clear value prop", "Simple language", "50–120 words per email"] }, { id: 3, title: "Personalization", detail: "Apply personalization layers: Basic (name/company), Medium (role/industry), Advanced (custom insights).", rules: ["Must be accurate", "Must feel natural"], checklist: ["Variables working", "No broken fields"] }, { id: 4, title: "Campaign Setup (Lemlist)", detail: "Configure sending limits (start low), schedule (business hours), and inbox rotation.", checklist: ["Sending limits set", "Schedule configured", "Inboxes assigned"] }, { id: 5, title: "Internal Validation", detail: "Review copy, personalization, links, and tone internally before client.", checklist: ["Copy reviewed", "Links checked", "Tone approved", "Feedback applied"] }, { id: 6, title: "Client Validation", detail: "Send draft to client and obtain explicit written approval.", rules: ["DO NOT launch without client approval — non-negotiable"], checklist: ["Draft sent to client", "Approval received"] }, { id: 7, title: "Final Pre-Launch Check", detail: "Final verification: leads imported correctly, variables working, domains still warmed.", checklist: ["Leads imported correctly", "Variables working", "Domains confirmed warm"] }, { id: 8, title: "Launch & Monitor", detail: "Launch and monitor closely for first 48 hours. Watch bounce rate (<3%), reply rate, and spam signals.", checklist: ["Campaign launched", "48h monitoring active"] }, { id: 9, title: "Ongoing Optimization", detail: "Daily monitoring first week. Weekly analysis. A/B test one variable at a time.", rules: ["Never ignore poor performance", "Never scale failing campaigns", "Double down on winners"], checklist: ["Daily monitoring", "Weekly analysis", "A/B tests running", "Winners identified"] } ], mistakes: ["Long emails", "Generic messaging", "Aggressive CTAs", "No follow-ups", "Broken variables", "Launching without approval"], nextStep: null },
];

const statusColors = {
  "not-started": { bg: "#f9fafb", border: "#e5e7eb", label: "Not Started", dot: "#9ca3af" },
  "in-progress": { bg: "#f0fdf4", border: "#22c55e", label: "In Progress", dot: "#22c55e" },
  "blocked": { bg: "#fff5f5", border: "#ef4444", label: "Blocked", dot: "#ef4444" },
  "complete": { bg: "#eff6ff", border: "#3b82f6", label: "Complete", dot: "#3b82f6" },
};

export default function App() {
  const [activeTab, setActiveTab] = useState("macro");
  const [selectedPipeline, setSelectedPipeline] = useState(null);
  const [pipelineStatus, setPipelineStatus] = useState({ domain: "not-started", warmup: "not-started", icp: "not-started", validation: "not-started", campaign: "not-started" });
  const [checkedItems, setCheckedItems] = useState({});
  const [expandedStep, setExpandedStep] = useState(null);

  const [campaigns, setCampaigns] = useState([
    { id: 1, client: "WeKount", account: "WeKount", status: "active", stage: "campaign", assignee: "Anthony", startDate: "2026-03-20", endDate: "2026-06-02", bounce: 1.2, openRate: 38, replyRate: 4.1, notes: "P1 — Évènementiel", emailsSent: 1240, totalLeads: 1800, leadsContacted: 1240, booked: 3, interested: 8 },
  ]);
  const [clientPipelineStatus, setClientPipelineStatus] = useState({});
  const [clientPipelineSelected, setClientPipelineSelected] = useState({});
  const [showAddModal, setShowAddModal] = useState(false);
  const [editingCampaign, setEditingCampaign] = useState(null);
  const [newCampaign, setNewCampaign] = useState({ client: "", account: "", status: "active", stage: "warmup", assignee: "", startDate: "", endDate: "", bounce: "", openRate: "", replyRate: "", notes: "", emailsSent: "", totalLeads: "", leadsContacted: "", booked: "", interested: "" });
  const [campaignClientFilter, setCampaignClientFilter] = useState("all");

  const [domains, setDomains] = useState([
    { id: 1, client: "WeKount", domain: "wekount-mail.com", inboxes: 2, lemwarmActive: true, warmupStatus: "warmed", lastBounce: 1.2, blacklisted: false, notes: "" },
    { id: 2, client: "Quantoom", domain: "quantoom-send.com", inboxes: 3, lemwarmActive: true, warmupStatus: "warmed", lastBounce: 0.8, blacklisted: false, notes: "" },
  ]);
  const [showDomainModal, setShowDomainModal] = useState(false);
  const [editingDomain, setEditingDomain] = useState(null);
  const [newDomain, setNewDomain] = useState({ client: "", domain: "", inboxes: 2, lemwarmActive: true, warmupStatus: "warming", lastBounce: "", blacklisted: false, notes: "" });
  const saveDomain = () => { if (!newDomain.domain.trim()) return; if (editingDomain !== null) { setDomains(prev => prev.map(d => d.id === editingDomain ? { ...newDomain, id: editingDomain } : d)); } else { setDomains(prev => [...prev, { ...newDomain, id: Date.now() }]); } setNewDomain({ client: "", domain: "", inboxes: 2, lemwarmActive: true, warmupStatus: "warming", lastBounce: "", blacklisted: false, notes: "" }); setEditingDomain(null); setShowDomainModal(false); };
  const deleteDomain = (id) => setDomains(prev => prev.filter(d => d.id !== id));
  const openEditDomain = (d) => { setNewDomain({ ...d }); setEditingDomain(d.id); setShowDomainModal(true); };

  const [leadscores, setLeadscores] = useState({ 1: { hot: 1, warm: 4, active: 12, lastAlert: "2026-06-15", lemlistUrl: "" } });
  const [editingLeadscore, setEditingLeadscore] = useState(null);
  const [lsEdit, setLsEdit] = useState({});
  const openLsEdit = (id) => { setLsEdit(leadscores[id] || { hot: 0, warm: 0, active: 0, lastAlert: "", lemlistUrl: "" }); setEditingLeadscore(id); };
  const saveLs = () => { setLeadscores(prev => ({ ...prev, [editingLeadscore]: { ...lsEdit } })); setEditingLeadscore(null); };

  const MONTHS = ["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"];
  const currentMonth = new Date().getMonth();
  const [reportingData, setReportingData] = useState({ "WeKount-2": "done", "WeKount-3": "done", "WeKount-4": "done", "Quantoom-2": "done", "Quantoom-3": "review", "Quantoom-4": "pending", "Pareto-2": "done", "Pareto-3": "done", "Pareto-4": "pending" });
  const reportClients = [...new Set(campaigns.map(c => c.account || c.client))];
  const reportStatuses = { done: { label: "✓ Done", bg: "#f0fdf4", border: "#22c55e", text: "#16a34a" }, review: { label: "⏳ Review", bg: "#fffbeb", border: "#f59e0b", text: "#b45309" }, pending: { label: "· Pending", bg: "#f9fafb", border: "#e5e7eb", text: "#9ca3af" } };
  const cycleReportStatus = (client, monthIdx) => { const key = `${client}-${monthIdx}`; const cur = reportingData[key] || "pending"; const next = cur === "pending" ? "review" : cur === "review" ? "done" : "pending"; setReportingData(prev => ({ ...prev, [key]: next })); };

  const APPROVAL_ITEMS = ["ICP approved", "Copy approved", "Launch approved"];
  const [approvals, setApprovals] = useState({});
  const toggleApproval = (campaignId, itemIdx) => { const key = `${campaignId}-${itemIdx}`; setApprovals(prev => { const cur = prev[key]; if (cur?.done) return { ...prev, [key]: { done: false, date: "", by: "" } }; return { ...prev, [key]: { done: true, date: new Date().toISOString().slice(0,10), by: "Anthony" } }; }); };

  const [campaignNextSteps, setCampaignNextSteps] = useState({});
  const [expandedNextSteps, setExpandedNextSteps] = useState({});
  const [newNextStepText, setNewNextStepText] = useState({});
  const toggleNextSteps = (id) => setExpandedNextSteps(prev => ({ ...prev, [id]: !prev[id] }));
  const addNextStep = (campaignId) => { const text = (newNextStepText[campaignId] || "").trim(); if (!text) return; setCampaignNextSteps(prev => { const e = prev[campaignId] || { note: "", items: [] }; return { ...prev, [campaignId]: { ...e, items: [...e.items, { id: Date.now(), text, done: false }] } }; }); setNewNextStepText(prev => ({ ...prev, [campaignId]: "" })); };
  const toggleNextStepItem = (campaignId, itemId) => { setCampaignNextSteps(prev => { const e = prev[campaignId] || { note: "", items: [] }; return { ...prev, [campaignId]: { ...e, items: e.items.map(it => it.id === itemId ? { ...it, done: !it.done } : it) } }; }); };
  const deleteNextStepItem = (campaignId, itemId) => { setCampaignNextSteps(prev => { const e = prev[campaignId] || { note: "", items: [] }; return { ...prev, [campaignId]: { ...e, items: e.items.filter(it => it.id !== itemId) } }; }); };
  const updateNextStepNote = (campaignId, note) => { setCampaignNextSteps(prev => { const e = prev[campaignId] || { note: "", items: [] }; return { ...prev, [campaignId]: { ...e, note } }; }); };

  const campaignStages = ["domain", "warmup", "icp", "validation", "campaign"];
  const campaignStatuses = ["active", "paused", "complete", "blocked"];
  const campaignStatusColors = { active: { bg: "#f0fdf4", border: "#22c55e", text: "#16a34a", dot: "#22c55e" }, paused: { bg: "#fffbeb", border: "#f59e0b", text: "#b45309", dot: "#f59e0b" }, complete: { bg: "#eff6ff", border: "#3b82f6", text: "#1d4ed8", dot: "#3b82f6" }, blocked: { bg: "#fff5f5", border: "#ef4444", text: "#dc2626", dot: "#ef4444" } };

  const saveCampaign = () => { if (!newCampaign.client.trim()) return; if (editingCampaign !== null) { setCampaigns(prev => prev.map(c => c.id === editingCampaign ? { ...newCampaign, id: editingCampaign } : c)); } else { setCampaigns(prev => [...prev, { ...newCampaign, id: Date.now() }]); } setNewCampaign({ client: "", account: "", status: "active", stage: "warmup", assignee: "", startDate: "", endDate: "", bounce: "", openRate: "", replyRate: "", notes: "", emailsSent: "", totalLeads: "", leadsContacted: "", booked: "", interested: "" }); setEditingCampaign(null); setShowAddModal(false); };
  const deleteCampaign = (id) => setCampaigns(prev => prev.filter(c => c.id !== id));
  const openEdit = (c) => { setNewCampaign({ ...c }); setEditingCampaign(c.id); setShowAddModal(true); };
  const toggleCheck = (key) => setCheckedItems(prev => ({ ...prev, [key]: !prev[key] }));
  const setStatus = (id, status) => setPipelineStatus(prev => ({ ...prev, [id]: status }));
  const completedCount = Object.values(pipelineStatus).filter(s => s === "complete").length;
  const inProgressCount = Object.values(pipelineStatus).filter(s => s === "in-progress").length;

  // ── Macro signal logic ───────────────────────────────────────────────────
  const computeSignals = (c) => {
    const flags = [];
    const bounceVal = parseFloat(c.bounce), openVal = parseFloat(c.openRate), replyVal = parseFloat(c.replyRate);
    const totalL = parseFloat(c.totalLeads) || 0, contacted = parseFloat(c.leadsContacted) || 0;
    const remaining = totalL - contacted, pctLeft = totalL > 0 ? (remaining / totalL) * 100 : null;
    const ls = leadscores[c.id];
    if (c.status === "paused") flags.push({ level: "warn", msg: "Campaign paused", action: "Resume or investigate block", owner: c.assignee || "—" });
    if (c.status === "blocked") flags.push({ level: "red", msg: "Campaign blocked", action: "Identify and unblock immediately", owner: c.assignee || "—" });
    if (!isNaN(bounceVal) && bounceVal > 3) flags.push({ level: "red", msg: `Bounce rate critical (${bounceVal}%)`, action: "Pause campaign, audit list quality", owner: c.assignee || "—" });
    else if (!isNaN(bounceVal) && bounceVal > 1.5) flags.push({ level: "warn", msg: `Bounce rate elevated (${bounceVal}%)`, action: "Monitor daily, consider list cleanup", owner: c.assignee || "—" });
    if (!isNaN(openVal) && openVal < 20) flags.push({ level: "warn", msg: `Open rate low (${openVal}%)`, action: "Review subject lines and sender reputation", owner: c.assignee || "—" });
    if (!isNaN(replyVal) && replyVal < 2) flags.push({ level: "warn", msg: `Reply rate low (${replyVal}%)`, action: "Rework copy — test new angle or CTA", owner: c.assignee || "—" });
    if (pctLeft !== null && pctLeft < 10 && remaining > 0) flags.push({ level: "red", msg: `Running out of leads (${Math.round(pctLeft)}% left)`, action: "Start new Clay enrichment / ICP sourcing now", owner: "Anthony" });
    else if (pctLeft !== null && pctLeft < 25) flags.push({ level: "warn", msg: `Leads running low (${Math.round(pctLeft)}% left)`, action: "Plan next batch of leads", owner: "Anthony" });
    if (ls && ls.hot > 0) flags.push({ level: "info", msg: `${ls.hot} hot lead${ls.hot > 1 ? "s" : ""} waiting`, action: "Follow up with hot leads now", owner: c.assignee || "—" });
    const clientDomains = domains.filter(d => d.client === (c.account || c.client));
    if (clientDomains.some(d => d.blacklisted)) flags.push({ level: "red", msg: "Sending domain blacklisted", action: "Switch to clean domain immediately", owner: "Anthony" });
    if (clientDomains.some(d => !d.lemwarmActive)) flags.push({ level: "warn", msg: "Lemwarm inactive on a domain", action: "Reactivate Lemwarm", owner: "Anthony" });
    const health = flags.some(f => f.level === "red") ? "red" : flags.some(f => f.level === "warn") ? "warn" : flags.length === 0 && c.status === "active" ? "green" : "neutral";
    return { flags, health };
  };
  const healthMeta = { green: { color: "#16a34a", bg: "#f0fdf4", border: "#22c55e", label: "Running well" }, warn: { color: "#d97706", bg: "#fffbeb", border: "#f59e0b", label: "Needs attention" }, red: { color: "#dc2626", bg: "#fff5f5", border: "#fecaca", label: "Action required" }, neutral: { color: "#9ca3af", bg: "#f9fafb", border: "#e5e7eb", label: "Inactive" } };
  const flagColors = { red: { dot: "#ef4444", border: "#fecaca" }, warn: { dot: "#f59e0b", border: "#fde68a" }, info: { dot: "#3b82f6", border: "#bfdbfe" } };

  const S = { fontFamily: "'DM Sans', sans-serif" };

  return (
    <div style={{ minHeight: "100vh", background: "#f9fafb", color: "#111827", fontFamily: "'DM Sans', sans-serif", fontSize: "13px" }}>
      {/* Top bar */}
      <div style={{ background: "white", borderBottom: "1px solid #e5e7eb", padding: "0 24px", display: "flex", alignItems: "center", gap: "32px", height: "52px" }}>
        <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
          <div style={{ width: 8, height: 8, borderRadius: "50%", background: "#F5761A" }} />
          <span style={{ color: "#F5761A", fontWeight: "bold", letterSpacing: "0.12em", fontSize: "12px" }}>OPS SYSTEM v1.0</span>
        </div>
        <div style={{ flex: 1 }} />
        <div style={{ display: "flex", gap: "4px", fontSize: "11px", color: "#9ca3af" }}>
          <span style={{ color: "#4CAF50" }}>■</span> {completedCount} COMPLETE
          <span style={{ marginLeft: 12, color: "#FFB74D" }}>■</span> {inProgressCount} ACTIVE
          <span style={{ marginLeft: 12, color: "#9ca3af" }}>■</span> {5 - completedCount - inProgressCount} PENDING
        </div>
      </div>

      {/* Nav */}
      <div style={{ background: "#f3f4f6", borderBottom: "1px solid #e5e7eb", padding: "0 24px", display: "flex", gap: "0", overflowX: "auto" }}>
        {["macro", "overview", "pipeline", "campaigns", "health", "reporting", "reference"].map(tab => (
          <button key={tab} onClick={() => { setActiveTab(tab); if (tab !== "pipeline") setSelectedPipeline(null); }}
            style={{ background: "none", border: "none", cursor: "pointer", padding: "12px 16px", color: activeTab === tab ? "#F5761A" : "#9ca3af", borderBottom: activeTab === tab ? "2px solid #F5761A" : "2px solid transparent", fontFamily: "inherit", fontSize: "11px", letterSpacing: "0.1em", fontWeight: activeTab === tab ? "600" : "400", textTransform: "uppercase", transition: "all 0.15s", whiteSpace: "nowrap" }}>
            {tab}
          </button>
        ))}
      </div>

      <div style={{ padding: "24px", maxWidth: 1100, margin: "0 auto" }}>

        {/* ═══════════════ MACRO TAB ═══════════════ */}
        {activeTab === "macro" && (() => {
          const clientNames = [...new Set(campaigns.map(c => c.account || c.client))];
          const allSignals = campaigns.flatMap(c => computeSignals(c).flags);
          const redCount = allSignals.filter(f => f.level === "red").length;
          const warnCount = allSignals.filter(f => f.level === "warn").length;

          const globalStatus = redCount > 0
            ? { emoji: "🔴", label: "Action Required", sub: "Some campaigns need immediate attention", color: "#dc2626", bg: "#fff5f5", border: "#fecaca" }
            : warnCount > 0
            ? { emoji: "🟡", label: "Needs Attention", sub: "A few things to keep an eye on", color: "#d97706", bg: "#fffbeb", border: "#fde68a" }
            : { emoji: "🟢", label: "All Good", sub: "Everything is running smoothly", color: "#16a34a", bg: "#f0fdf4", border: "#bbf7d0" };

          return (
            <div style={{ maxWidth: 780, margin: "0 auto" }}>
              {/* Global status — big and obvious */}
              <div style={{ background: globalStatus.bg, border: `2px solid ${globalStatus.border}`, borderRadius: 20, padding: "40px 48px", marginBottom: 32, textAlign: "center" }}>
                <div style={{ fontSize: 64, marginBottom: 16, lineHeight: 1 }}>{globalStatus.emoji}</div>
                <div style={{ fontSize: 36, fontWeight: "800", color: globalStatus.color, marginBottom: 8, letterSpacing: "-0.02em" }}>{globalStatus.label}</div>
                <div style={{ fontSize: 16, color: "#6b7280" }}>{globalStatus.sub}</div>
              </div>

              {/* Per-client cards — one per row, large and clear */}
              {campaigns.length === 0 ? (
                <div style={{ background: "white", border: "1px dashed #e5e7eb", borderRadius: 16, padding: "60px 24px", textAlign: "center" }}>
                  <div style={{ fontSize: 40, marginBottom: 12 }}>📡</div>
                  <div style={{ fontSize: 18, color: "#374151", fontWeight: "700" }}>No campaigns yet</div>
                  <div style={{ color: "#9ca3af", fontSize: "14px", marginTop: 6 }}>Add campaigns to see the health overview</div>
                </div>
              ) : (
                <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
                  {clientNames.map(clientName => {
                    const clientCampaigns = campaigns.filter(c => (c.account || c.client) === clientName);
                    // Worst health across all campaigns for this client
                    const allClientFlags = clientCampaigns.flatMap(c => computeSignals(c).flags);
                    const clientHealth = allClientFlags.some(f => f.level === "red") ? "red"
                      : allClientFlags.some(f => f.level === "warn") ? "warn"
                      : "green";
                    const hm = healthMeta[clientHealth];

                    // Top priority action — just the most critical flag across all campaigns
                    const topFlag = allClientFlags.find(f => f.level === "red") || allClientFlags.find(f => f.level === "warn") || allClientFlags.find(f => f.level === "info");

                    return (
                      <div key={clientName} style={{ background: "white", border: `2px solid ${hm.border}`, borderRadius: 16, padding: "28px 32px", display: "flex", alignItems: "center", gap: 28 }}>
                        {/* Status dot */}
                        <div style={{ width: 18, height: 18, borderRadius: "50%", background: hm.color, flexShrink: 0 }} />

                        {/* Client name + campaign count */}
                        <div style={{ flex: 1, minWidth: 0 }}>
                          <div style={{ fontSize: 22, fontWeight: "800", color: "#111827", marginBottom: 4 }}>{clientName}</div>
                          <div style={{ fontSize: 14, color: "#9ca3af" }}>
                            {clientCampaigns.length} campaign{clientCampaigns.length !== 1 ? "s" : ""}
                            {clientCampaigns.filter(c => c.status === "active").length > 0 && <span style={{ color: "#16a34a", marginLeft: 6 }}>· {clientCampaigns.filter(c => c.status === "active").length} active</span>}
                          </div>
                        </div>

                        {/* Status label */}
                        <div style={{ textAlign: "center", flexShrink: 0 }}>
                          <div style={{ fontSize: 15, fontWeight: "700", color: hm.color }}>{hm.label}</div>
                        </div>

                        {/* Top action — only if something needs doing */}
                        {topFlag && (
                          <div style={{ background: clientHealth === "red" ? "#fff5f5" : "#fffbeb", border: `1px solid ${hm.border}`, borderRadius: 10, padding: "12px 18px", maxWidth: 340, flexShrink: 0 }}>
                            <div style={{ fontSize: 13, color: "#374151", marginBottom: 4 }}>{topFlag.msg}</div>
                            <div style={{ fontSize: 14, fontWeight: "700", color: "#111827" }}>→ {topFlag.action}</div>
                            <div style={{ fontSize: 12, color: "#9ca3af", marginTop: 4 }}>👤 {topFlag.owner}</div>
                          </div>
                        )}
                      </div>
                    );
                  })}
                </div>
              )}
            </div>
          );
        })()}

        {/* ═══════════════ OVERVIEW TAB ═══════════════ */}
        {activeTab === "overview" && (
          <div>
            <div style={{ display: "flex", alignItems: "flex-end", justifyContent: "space-between", marginBottom: 24 }}>
              <div>
                <div style={{ color: "#9ca3af", fontSize: "11px", letterSpacing: "0.1em", marginBottom: 4 }}>OPERATIONAL OVERVIEW</div>
                <div style={{ color: "#111827", fontSize: "18px", fontWeight: "bold" }}>Account Status</div>
                <div style={{ color: "#9ca3af", marginTop: 4, fontSize: "12px" }}>{[...new Set(campaigns.map(c => c.account || c.client))].length} accounts · {campaigns.filter(c => c.status === "active").length} active campaigns</div>
              </div>
              <button onClick={() => { setEditingCampaign(null); setNewCampaign({ client: "", account: "", status: "active", stage: "warmup", assignee: "", startDate: "", endDate: "", bounce: "", openRate: "", replyRate: "", notes: "", emailsSent: "", totalLeads: "", leadsContacted: "", booked: "", interested: "" }); setShowAddModal(true); }} style={{ background: "#F5761A", color: "white", border: "none", borderRadius: 7, padding: "9px 16px", cursor: "pointer", fontFamily: "inherit", fontSize: "12px", fontWeight: "600" }}>+ Add Campaign</button>
            </div>
            {campaigns.length === 0 ? (
              <div style={{ background: "white", border: "1px dashed #e5e7eb", borderRadius: 10, padding: "48px 24px", textAlign: "center" }}><div style={{ fontSize: 32, marginBottom: 10 }}>📋</div><div style={{ color: "#374151", fontWeight: "600" }}>No accounts yet</div><div style={{ color: "#9ca3af", fontSize: "12px" }}>Click "Add Campaign" to get started</div></div>
            ) : (() => {
              const accountNames = [...new Set(campaigns.map(c => c.account || c.client))];
              return (
                <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
                  {accountNames.map(accountName => {
                    const ac = campaigns.filter(c => (c.account || c.client) === accountName);
                    const activeCampaigns = ac.filter(c => c.status === "active");
                    const totalSent = ac.reduce((s, c) => s + (parseFloat(c.emailsSent) || 0), 0);
                    const totalLeads = ac.reduce((s, c) => s + (parseFloat(c.totalLeads) || 0), 0);
                    const totalContacted = ac.reduce((s, c) => s + (parseFloat(c.leadsContacted) || 0), 0);
                    const leadsRemaining = totalLeads - totalContacted;
                    const totalBooked = ac.reduce((s, c) => s + (parseFloat(c.booked) || 0), 0);
                    const totalInterested = ac.reduce((s, c) => s + (parseFloat(c.interested) || 0), 0);
                    const sent = ac.filter(c => parseFloat(c.emailsSent) > 0);
                    const avgOpen = sent.length > 0 ? sent.reduce((s, c) => s + (parseFloat(c.openRate) || 0), 0) / sent.length : null;
                    const avgReply = sent.length > 0 ? sent.reduce((s, c) => s + (parseFloat(c.replyRate) || 0), 0) / sent.length : null;
                    return (
                      <div key={accountName} style={{ background: "white", border: "1px solid #e5e7eb", borderRadius: 12, overflow: "hidden" }}>
                        <div style={{ padding: "16px 20px", borderBottom: "1px solid #f3f4f6", display: "flex", alignItems: "center", justifyContent: "space-between" }}>
                          <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
                            <div style={{ width: 40, height: 40, borderRadius: 10, background: "#F5761A", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "16px", fontWeight: "800", color: "white" }}>{accountName.charAt(0).toUpperCase()}</div>
                            <div>
                              <div style={{ fontWeight: "700", fontSize: "16px", color: "#111827" }}>{accountName}</div>
                              <div style={{ fontSize: "11px", color: "#9ca3af", marginTop: 1 }}>{ac.length} campaign{ac.length !== 1 ? "s" : ""}{activeCampaigns.length > 0 && <span style={{ color: "#16a34a" }}> · {activeCampaigns.length} active</span>}</div>
                            </div>
                          </div>
                          <div style={{ display: "flex", gap: 5, flexWrap: "wrap", justifyContent: "flex-end", maxWidth: 400 }}>
                            {ac.map(c => { const sc = campaignStatusColors[c.status] || campaignStatusColors.active; return (<div key={c.id} style={{ background: sc.bg, border: `1px solid ${sc.border}`, borderRadius: 5, padding: "3px 9px", fontSize: "10px", color: sc.text, fontWeight: "600" }}>{c.notes || c.client} · <span style={{ textTransform: "capitalize" }}>{c.status}</span></div>); })}
                          </div>
                        </div>
                        <div style={{ padding: "14px 20px" }}>
                          <div style={{ display: "grid", gridTemplateColumns: "repeat(6, 1fr)", gap: 8, marginBottom: 16 }}>
                            {[
                              { label: "Emails Sent", value: totalSent > 0 ? totalSent.toLocaleString() : "—" },
                              { label: "Total Leads", value: totalLeads > 0 ? totalLeads.toLocaleString() : "—" },
                              { label: "Leads Left", value: totalLeads > 0 ? (leadsRemaining > 0 ? leadsRemaining.toLocaleString() : "0") : "—", highlight: leadsRemaining > 0 },
                              { label: "Open Rate", value: avgOpen !== null ? `${avgOpen.toFixed(1)}%` : "—", warn: avgOpen !== null && avgOpen < 20, good: avgOpen !== null && avgOpen >= 35 },
                              { label: "Reply Rate", value: avgReply !== null ? `${avgReply.toFixed(1)}%` : "—", warn: avgReply !== null && avgReply < 2, good: avgReply !== null && avgReply >= 5 },
                              { label: totalBooked > 0 ? "Booked" : "Interested", value: totalBooked > 0 ? String(totalBooked) : (totalInterested > 0 ? String(totalInterested) : "—"), good: totalBooked > 0 || totalInterested > 0 },
                            ].map(({ label, value, warn, good, highlight }) => (
                              <div key={label} style={{ background: "#f9fafb", borderRadius: 8, padding: "10px 8px", textAlign: "center", border: "1px solid #f3f4f6" }}>
                                <div style={{ fontSize: "17px", fontWeight: "700", fontFamily: "'DM Mono', monospace", color: warn ? "#ef4444" : good ? "#16a34a" : highlight ? "#F5761A" : "#111827" }}>{value}</div>
                                <div style={{ fontSize: "10px", color: "#9ca3af", marginTop: 2 }}>{label}</div>
                              </div>
                            ))}
                          </div>
                          <div style={{ fontSize: "10px", color: "#9ca3af", letterSpacing: "0.08em", marginBottom: 7 }}>CAMPAIGNS</div>
                          <div style={{ display: "flex", flexDirection: "column", gap: 5 }}>
                            {ac.map(c => { const csc = campaignStatusColors[c.status] || campaignStatusColors.active; const stageObj = pipelines.find(p => p.id === c.stage); return (<div key={c.id} style={{ display: "flex", alignItems: "center", gap: 10, background: "#fafafa", borderRadius: 7, padding: "8px 12px", border: "1px solid #f3f4f6" }}><div style={{ width: 7, height: 7, borderRadius: "50%", flexShrink: 0, background: csc.dot }} /><div style={{ flex: 1, minWidth: 0 }}><span style={{ fontWeight: "600", fontSize: "12px", color: "#111827" }}>{c.notes || "—"}</span>{c.assignee && <span style={{ fontSize: "11px", color: "#9ca3af", marginLeft: 8 }}>👤 {c.assignee}</span>}</div>{stageObj && <div style={{ background: stageObj.color + "15", border: `1px solid ${stageObj.color}33`, borderRadius: 5, padding: "2px 8px", fontSize: "10px", color: stageObj.color, fontWeight: "600", whiteSpace: "nowrap" }}>{stageObj.icon} {stageObj.label}</div>}<button onClick={() => openEdit(c)} style={{ background: "none", border: "1px solid #e5e7eb", borderRadius: 5, padding: "3px 8px", cursor: "pointer", fontSize: "10px", color: "#6b7280", fontFamily: "inherit", flexShrink: 0 }}>Edit</button></div>); })}
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>
              );
            })()}
          </div>
        )}

        {/* ═══════════════ PIPELINE TAB ═══════════════ */}
        {activeTab === "pipeline" && (
          <div>
            <div style={{ display: "flex", alignItems: "flex-end", justifyContent: "space-between", marginBottom: 24 }}>
              <div><div style={{ color: "#9ca3af", fontSize: "11px", letterSpacing: "0.1em", marginBottom: 4 }}>PIPELINE</div><div style={{ color: "#111827", fontSize: "18px", fontWeight: "bold" }}>Client Checklists</div></div>
              <button onClick={() => { setEditingCampaign(null); setNewCampaign({ client: "", account: "", status: "active", stage: "warmup", assignee: "", startDate: "", endDate: "", bounce: "", openRate: "", replyRate: "", notes: "", emailsSent: "", totalLeads: "", leadsContacted: "", booked: "", interested: "" }); setShowAddModal(true); }} style={{ background: "#F5761A", color: "white", border: "none", borderRadius: 7, padding: "9px 16px", cursor: "pointer", fontFamily: "inherit", fontSize: "12px", fontWeight: "600" }}>+ Add Client</button>
            </div>
            {campaigns.length === 0 ? (<div style={{ background: "white", border: "1px dashed #e5e7eb", borderRadius: 10, padding: "48px 24px", textAlign: "center" }}><div style={{ fontSize: 32, marginBottom: 10 }}>📋</div><div style={{ color: "#374151", fontWeight: "600" }}>No clients yet</div></div>) : (
              <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
                {campaigns.map(c => {
                  const csc = campaignStatusColors[c.status] || campaignStatusColors.active;
                  const expandedKey = `pipelineClient-${c.id}`;
                  const isClientExpanded = expandedStep === expandedKey || campaigns.length === 1;
                  const activePipelineId = clientPipelineSelected[c.id] || c.stage || pipelines[0].id;
                  const activePipeline = pipelines.find(p => p.id === activePipelineId);
                  return (
                    <div key={c.id} style={{ background: "white", border: "1px solid #e5e7eb", borderRadius: 12, overflow: "hidden" }}>
                      <div onClick={() => setExpandedStep(isClientExpanded ? null : expandedKey)} style={{ padding: "14px 18px", cursor: "pointer", borderBottom: isClientExpanded ? "1px solid #f3f4f6" : "none", display: "flex", alignItems: "center", justifyContent: "space-between" }}>
                        <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
                          <div style={{ width: 34, height: 34, borderRadius: 8, background: "#F5761A22", border: "1px solid #F5761A44", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "14px", fontWeight: "800", color: "#F5761A" }}>{c.client.charAt(0).toUpperCase()}</div>
                          <div><div style={{ fontWeight: "700", fontSize: "15px", color: "#111827" }}>{c.client}</div><div style={{ fontSize: "11px", color: "#9ca3af", marginTop: 1 }}>{c.notes && <span>{c.notes} · </span>}{c.assignee && <span>👤 {c.assignee}</span>}</div></div>
                          <div style={{ background: csc.bg, border: `1px solid ${csc.border}`, borderRadius: 99, padding: "3px 10px", fontSize: "10px", color: csc.text, fontWeight: "600", textTransform: "capitalize" }}>{c.status}</div>
                        </div>
                        <span style={{ color: "#9ca3af", fontSize: "12px" }}>{isClientExpanded ? "▲" : "▼"}</span>
                      </div>
                      {isClientExpanded && (
                        <div style={{ padding: "0 18px 18px" }}>
                          <div style={{ display: "flex", gap: 4, paddingTop: 14, paddingBottom: 14, overflowX: "auto" }}>
                            {pipelines.map(p => { const isActive = activePipelineId === p.id; const ss = (clientPipelineStatus[c.id] || {})[p.id] || "not-started"; const ssc = statusColors[ss]; return (<button key={p.id} onClick={() => setClientPipelineSelected(prev => ({ ...prev, [c.id]: p.id }))} style={{ padding: "6px 12px", borderRadius: 7, cursor: "pointer", border: isActive ? `1px solid ${p.color}` : "1px solid #e5e7eb", background: isActive ? p.color + "12" : "#f9fafb", fontFamily: "inherit", fontSize: "11px", fontWeight: isActive ? "600" : "400", color: isActive ? p.color : "#6b7280", display: "flex", alignItems: "center", gap: 6, whiteSpace: "nowrap", flexShrink: 0 }}><span>{p.icon}</span><span>{p.label}</span><div style={{ width: 6, height: 6, borderRadius: "50%", background: ssc.dot, flexShrink: 0 }} /></button>); })}
                          </div>
                          {activePipeline && (
                            <div>
                              <div style={{ background: "#f9fafb", border: `1px solid ${activePipeline.color}33`, borderLeft: `3px solid ${activePipeline.color}`, borderRadius: 8, padding: "10px 14px", marginBottom: 14, fontSize: "12px", color: "#6b7280" }}><span style={{ color: activePipeline.color, fontSize: "10px", letterSpacing: "0.1em" }}>OBJECTIVE — </span>{activePipeline.objective}</div>
                              {activePipeline.tools && <div style={{ display: "flex", gap: 6, marginBottom: 14, flexWrap: "wrap" }}>{activePipeline.tools.map(t => (<div key={t} style={{ background: "#f3f4f6", border: "1px solid #e5e7eb", borderRadius: 4, padding: "4px 10px", fontSize: "11px", color: "#6b7280" }}>🔧 {t}</div>))}</div>}
                              <div style={{ display: "flex", flexDirection: "column", gap: 6 }}>
                                {activePipeline.steps.map((step, idx) => {
                                  const key = `${c.id}-${activePipeline.id}-${step.id}`;
                                  const isExpanded = expandedStep === key;
                                  const totalChecks = step.checklist?.length || 0;
                                  const doneChecks = step.checklist?.filter((_, ci) => checkedItems[`${key}-${ci}`]).length || 0;
                                  const allDone = totalChecks > 0 && doneChecks === totalChecks;
                                  return (
                                    <div key={key} style={{ background: allDone ? "#f0fdf4" : "white", border: `1px solid ${allDone ? "#bbf7d0" : step.mandatory ? activePipeline.color + "33" : "#e5e7eb"}`, borderLeft: `3px solid ${allDone ? "#22c55e" : step.mandatory ? activePipeline.color : "#e5e7eb"}`, borderRadius: 8, overflow: "hidden" }}>
                                      <div onClick={() => setExpandedStep(isExpanded ? null : key)} style={{ padding: "11px 14px", cursor: "pointer", display: "flex", alignItems: "center", gap: 10 }}>
                                        <div style={{ width: 22, height: 22, borderRadius: "50%", flexShrink: 0, background: allDone ? "#22c55e" : "#f3f4f6", border: `1px solid ${allDone ? "#22c55e" : "#d1d5db"}`, display: "flex", alignItems: "center", justifyContent: "center", fontSize: "10px", color: allDone ? "white" : "#9ca3af", fontWeight: "bold" }}>{allDone ? "✓" : (idx + 1)}</div>
                                        <div style={{ flex: 1 }}>
                                          <div style={{ display: "flex", alignItems: "center", gap: 8 }}><span style={{ color: allDone ? "#16a34a" : "#111827", fontWeight: "600", fontSize: "13px" }}>{step.title}</span>{step.mandatory && <span style={{ background: activePipeline.color + "22", color: activePipeline.color, fontSize: "9px", padding: "1px 5px", borderRadius: 3 }}>MANDATORY</span>}</div>
                                          {!isExpanded && <div style={{ color: "#9ca3af", fontSize: "11px", marginTop: 2 }}>{step.detail}</div>}
                                        </div>
                                        <div style={{ display: "flex", alignItems: "center", gap: 8 }}>{totalChecks > 0 && <span style={{ color: allDone ? "#16a34a" : "#9ca3af", fontSize: "10px" }}>{doneChecks}/{totalChecks}</span>}<span style={{ color: "#9ca3af", fontSize: "12px" }}>{isExpanded ? "▲" : "▼"}</span></div>
                                      </div>
                                      {isExpanded && (
                                        <div style={{ padding: "0 14px 14px 46px", borderTop: "1px solid #f3f4f6" }}>
                                          <div style={{ paddingTop: 12, color: "#6b7280", fontSize: "12px", marginBottom: 12, lineHeight: 1.6 }}>{step.detail}</div>
                                          {step.rules && <div style={{ marginBottom: 12 }}><div style={{ color: "#9ca3af", fontSize: "10px", letterSpacing: "0.1em", marginBottom: 6 }}>RULES</div>{step.rules.map((r, i) => <div key={i} style={{ color: "#6b7280", fontSize: "11px", marginBottom: 3, paddingLeft: 8, borderLeft: "2px solid #e5e7eb" }}>{r}</div>)}</div>}
                                          {step.checklist && <div><div style={{ color: "#9ca3af", fontSize: "10px", letterSpacing: "0.1em", marginBottom: 6 }}>CHECKLIST</div>{step.checklist.map((item, ci) => { const ck = `${key}-${ci}`; const checked = !!checkedItems[ck]; return (<div key={ci} onClick={() => toggleCheck(ck)} style={{ display: "flex", alignItems: "center", gap: 8, padding: "5px 0", cursor: "pointer" }}><div style={{ width: 14, height: 14, borderRadius: 3, flexShrink: 0, background: checked ? "#22c55e" : "white", border: `1px solid ${checked ? "#22c55e" : "#d1d5db"}`, display: "flex", alignItems: "center", justifyContent: "center", fontSize: "9px", color: "white" }}>{checked ? "✓" : ""}</div><span style={{ color: checked ? "#16a34a" : "#374151", fontSize: "12px", textDecoration: checked ? "line-through" : "none" }}>{item}</span></div>); })}</div>}
                                        </div>
                                      )}
                                    </div>
                                  );
                                })}
                              </div>
                              <div style={{ background: "#fff5f5", border: "1px solid #fecaca", borderRadius: 8, padding: "12px 14px", marginTop: 14 }}>
                                <div style={{ color: "#ef4444", fontSize: "10px", letterSpacing: "0.1em", marginBottom: 8 }}>⚠ COMMON MISTAKES</div>
                                <div style={{ display: "flex", gap: 6, flexWrap: "wrap" }}>{activePipeline.mistakes.map((m, i) => <span key={i} style={{ background: "#fee2e2", border: "1px solid #fecaca", color: "#dc2626", fontSize: "11px", padding: "3px 8px", borderRadius: 4 }}>{m}</span>)}</div>
                              </div>
                              {activePipeline.nextStep && (
                                <div style={{ marginTop: 12, textAlign: "right" }}>
                                  <button onClick={() => setClientPipelineSelected(prev => ({ ...prev, [c.id]: activePipeline.nextStep }))} style={{ background: "white", border: `1px solid ${pipelines.find(p => p.id === activePipeline.nextStep)?.color}`, color: pipelines.find(p => p.id === activePipeline.nextStep)?.color, padding: "7px 14px", borderRadius: 6, cursor: "pointer", fontFamily: "inherit", fontSize: "11px" }}>Next: {pipelines.find(p => p.id === activePipeline.nextStep)?.label} →</button>
                                </div>
                              )}
                            </div>
                          )}
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            )}
          </div>
        )}

        {/* ═══════════════ CAMPAIGNS TAB ═══════════════ */}
        {activeTab === "campaigns" && (
          <div>
            <div style={{ display: "flex", alignItems: "flex-end", justifyContent: "space-between", marginBottom: 16 }}>
              <div><div style={{ color: "#9ca3af", fontSize: "11px", letterSpacing: "0.1em", marginBottom: 4 }}>ONGOING CAMPAIGNS</div><div style={{ color: "#111827", fontSize: "18px", fontWeight: "bold" }}>Campaign Tracker</div><div style={{ color: "#9ca3af", fontSize: "12px", marginTop: 4 }}>{campaigns.filter(c => c.status === "active").length} active · {campaigns.length} total</div></div>
              <button onClick={() => { setEditingCampaign(null); setNewCampaign({ client: "", account: "", status: "active", stage: "warmup", assignee: "", startDate: "", endDate: "", bounce: "", openRate: "", replyRate: "", notes: "", emailsSent: "", totalLeads: "", leadsContacted: "", booked: "", interested: "" }); setShowAddModal(true); }} style={{ background: "#F5761A", color: "white", border: "none", borderRadius: 7, padding: "9px 16px", cursor: "pointer", fontFamily: "inherit", fontSize: "12px", fontWeight: "600" }}>+ Add Campaign</button>
            </div>
            {campaigns.length > 0 && (() => { const accountNames = [...new Set(campaigns.map(c => c.account || c.client))]; return (<div style={{ display: "flex", gap: 0, marginBottom: 16, background: "white", border: "1px solid #e5e7eb", borderRadius: 8, overflow: "hidden" }}>{["all", ...accountNames].map(name => { const isActive = campaignClientFilter === name; const count = name === "all" ? campaigns.length : campaigns.filter(c => (c.account || c.client) === name).length; return (<button key={name} onClick={() => setCampaignClientFilter(name)} style={{ background: isActive ? "#F5761A" : "white", color: isActive ? "white" : "#6b7280", border: "none", borderRight: "1px solid #e5e7eb", padding: "9px 16px", cursor: "pointer", fontFamily: "inherit", fontSize: "11px", fontWeight: isActive ? "600" : "400", display: "flex", alignItems: "center", gap: 6 }}>{name === "all" ? "All" : name}<span style={{ background: isActive ? "rgba(255,255,255,0.25)" : "#f3f4f6", color: isActive ? "white" : "#9ca3af", borderRadius: 99, padding: "1px 7px", fontSize: "10px", fontWeight: "600" }}>{count}</span></button>); })}</div>); })()}
            {campaigns.length === 0 ? (<div style={{ background: "white", border: "1px dashed #e5e7eb", borderRadius: 10, padding: "48px 24px", textAlign: "center" }}><div style={{ fontSize: 32, marginBottom: 10 }}>📋</div><div style={{ color: "#374151", fontWeight: "600" }}>No campaigns yet</div></div>) : (() => {
              const filtered = campaigns.filter(c => campaignClientFilter === "all" || (c.account || c.client) === campaignClientFilter);
              const clientNames = [...new Set(filtered.map(c => c.account || c.client))];
              return (
                <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
                  {clientNames.map(clientName => {
                    const clientCampaigns = filtered.filter(c => (c.account || c.client) === clientName);
                    const activeCount = clientCampaigns.filter(c => c.status === "active").length;
                    return (
                      <div key={clientName} style={{ background: "white", border: "1px solid #e5e7eb", borderRadius: 12, overflow: "hidden" }}>
                        <div style={{ padding: "12px 18px", background: "#fafafa", borderBottom: "1px solid #f3f4f6", display: "flex", alignItems: "center", gap: 12 }}>
                          <div style={{ width: 32, height: 32, borderRadius: 8, background: "#F5761A", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "13px", fontWeight: "800", color: "white", flexShrink: 0 }}>{clientName.charAt(0).toUpperCase()}</div>
                          <div><div style={{ fontWeight: "700", fontSize: "14px", color: "#111827" }}>{clientName}</div><div style={{ fontSize: "11px", color: "#9ca3af" }}>{clientCampaigns.length} campaign{clientCampaigns.length !== 1 ? "s" : ""}{activeCount > 0 && <span style={{ color: "#16a34a" }}> · {activeCount} active</span>}</div></div>
                        </div>
                        <div style={{ display: "flex", flexDirection: "column" }}>
                          {clientCampaigns.map((c, cIdx) => {
                            const sc = campaignStatusColors[c.status] || campaignStatusColors.active;
                            const stageObj = pipelines.find(p => p.id === c.stage);
                            const bounceVal = parseFloat(c.bounce), openVal = parseFloat(c.openRate), replyVal = parseFloat(c.replyRate);
                            const sentVal = parseFloat(c.emailsSent) || 0, totalLeadsVal = parseFloat(c.totalLeads) || 0, contactedVal = parseFloat(c.leadsContacted) || 0;
                            const remainingVal = totalLeadsVal - contactedVal, pctContacted = totalLeadsVal > 0 ? Math.round((contactedVal / totalLeadsVal) * 100) : null;
                            const ls = leadscores[c.id];
                            const ns = campaignNextSteps[c.id] || { note: "", items: [] };
                            const isNSOpen = expandedNextSteps[c.id];
                            const nsDone = ns.items.filter(it => it.done).length;
                            return (
                              <div key={c.id} style={{ borderTop: cIdx > 0 ? "1px solid #f3f4f6" : "none", padding: "16px 18px", borderLeft: `3px solid ${sc.dot}` }}>
                                <div style={{ display: "flex", alignItems: "flex-start", justifyContent: "space-between", marginBottom: 10 }}>
                                  <div style={{ display: "flex", alignItems: "center", gap: 10, flexWrap: "wrap" }}>
                                    <div><div style={{ fontWeight: "700", fontSize: "15px", color: "#111827" }}>{c.client}</div>{c.notes && <div style={{ fontSize: "11px", color: "#9ca3af", marginTop: 2 }}>{c.notes}</div>}</div>
                                    <div style={{ background: sc.bg, border: `1px solid ${sc.border}`, borderRadius: 99, padding: "2px 10px", fontSize: "10px", color: sc.text, fontWeight: "600", textTransform: "capitalize" }}>{c.status}</div>
                                    {stageObj && <div style={{ background: stageObj.color + "15", border: `1px solid ${stageObj.color}33`, borderRadius: 99, padding: "2px 10px", fontSize: "10px", color: stageObj.color, fontWeight: "500" }}>{stageObj.icon} {stageObj.label}</div>}
                                  </div>
                                  <div style={{ display: "flex", gap: 6, flexShrink: 0 }}>
                                    <button onClick={() => openEdit(c)} style={{ background: "none", border: "1px solid #e5e7eb", borderRadius: 5, padding: "4px 10px", cursor: "pointer", fontSize: "11px", color: "#6b7280", fontFamily: "inherit" }}>Edit</button>
                                    <button onClick={() => deleteCampaign(c.id)} style={{ background: "none", border: "1px solid #fecaca", borderRadius: 5, padding: "4px 10px", cursor: "pointer", fontSize: "11px", color: "#ef4444", fontFamily: "inherit" }}>✕</button>
                                  </div>
                                </div>
                                {c.assignee && <div style={{ display: "flex", alignItems: "center", gap: 6, marginBottom: 10 }}><div style={{ width: 22, height: 22, borderRadius: "50%", background: "#F5761A22", border: "1px solid #F5761A55", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "10px", fontWeight: "700", color: "#F5761A" }}>{c.assignee.charAt(0).toUpperCase()}</div><span style={{ fontSize: "12px", color: "#374151" }}>{c.assignee}</span>{c.startDate && <span style={{ fontSize: "11px", color: "#9ca3af", marginLeft: 8 }}>📅 {c.startDate}{c.endDate ? ` → ${c.endDate}` : ""}</span>}</div>}
                                {(c.bounce !== "" || c.openRate !== "" || c.replyRate !== "" || c.emailsSent !== "" || c.totalLeads !== "" || c.booked !== "") && (
                                  <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr) repeat(3, 1fr)", gap: 8, background: "#f9fafb", borderRadius: 8, padding: "12px", marginBottom: 10 }}>
                                    {[
                                      { label: "Emails Sent", value: sentVal > 0 ? sentVal.toLocaleString() : null, sub: pctContacted !== null ? `${pctContacted}% of list` : null, color: "#374151" },
                                      { label: "Total Leads", value: totalLeadsVal > 0 ? totalLeadsVal.toLocaleString() : null, sub: "in list", color: "#374151" },
                                      { label: "Leads Left", value: totalLeadsVal > 0 ? remainingVal.toLocaleString() : null, sub: "to contact", color: remainingVal > 0 ? "#F5761A" : "#16a34a" },
                                      { label: "Booked / Int.", value: (parseFloat(c.booked) > 0 || parseFloat(c.interested) > 0) ? `${parseFloat(c.booked) || 0} / ${parseFloat(c.interested) || 0}` : null, sub: "booked / interested", color: parseFloat(c.booked) > 0 ? "#16a34a" : "#374151" },
                                      { label: "Bounce Rate", value: c.bounce !== "" ? c.bounce : null, unit: "%", sub: bounceVal > 3 ? "⚠ Review" : bounceVal <= 1.5 ? "✓ Good" : "—", warn: bounceVal > 3, good: bounceVal <= 1.5 },
                                      { label: "Open Rate", value: c.openRate !== "" ? c.openRate : null, unit: "%", sub: openVal < 20 ? "⚠ Low" : openVal >= 35 ? "✓ Good" : "—", warn: openVal < 20, good: openVal >= 35 },
                                      { label: "Reply Rate", value: c.replyRate !== "" ? c.replyRate : null, unit: "%", sub: replyVal < 2 ? "⚠ Low" : replyVal >= 5 ? "✓ Good" : "—", warn: replyVal < 2, good: replyVal >= 5 },
                                    ].filter(m => m.value !== null).map(({ label, value, unit, sub, warn, good, color }) => (
                                      <div key={label} style={{ textAlign: "center" }}>
                                        <div style={{ fontSize: "17px", fontWeight: "700", fontFamily: "'DM Mono', monospace", color: warn ? "#ef4444" : good ? "#16a34a" : (color || "#374151") }}>{value}{unit || ""}</div>
                                        <div style={{ fontSize: "10px", color: "#9ca3af", marginTop: 1 }}>{label}</div>
                                        {sub && <div style={{ fontSize: "9px", marginTop: 1, color: warn ? "#ef4444" : good ? "#16a34a" : "#b0b8c4" }}>{sub}</div>}
                                      </div>
                                    ))}
                                  </div>
                                )}
                                {totalLeadsVal > 0 && contactedVal > 0 && (
                                  <div style={{ marginBottom: 10 }}>
                                    <div style={{ display: "flex", justifyContent: "space-between", marginBottom: 3 }}><span style={{ fontSize: "10px", color: "#9ca3af" }}>List progress</span><span style={{ fontSize: "10px", color: "#9ca3af" }}>{contactedVal.toLocaleString()} / {totalLeadsVal.toLocaleString()}</span></div>
                                    <div style={{ height: 4, background: "#f3f4f6", borderRadius: 2, overflow: "hidden" }}><div style={{ height: "100%", width: `${Math.min(pctContacted, 100)}%`, background: "#F5761A", borderRadius: 2 }} /></div>
                                  </div>
                                )}
                                {/* Leadscore strip */}
                                <div style={{ marginBottom: 8, display: "flex", alignItems: "center", gap: 8, flexWrap: "wrap" }}>
                                  <span style={{ fontSize: "10px", color: "#9ca3af", letterSpacing: "0.06em" }}>LEADSCORE</span>
                                  {ls ? (<>{[{ label: "🔴 Hot", value: ls.hot, color: "#ef4444", bg: "#fef2f2" }, { label: "🟠 Warm", value: ls.warm, color: "#f59e0b", bg: "#fffbeb" }, { label: "🟡 Active", value: ls.active, color: "#d97706", bg: "#fefce8" }].map(({ label, value, color, bg }) => (<div key={label} style={{ background: bg, borderRadius: 5, padding: "3px 9px", fontSize: "11px", fontWeight: "600", color, fontFamily: "'DM Mono', monospace" }}>{label} {value}</div>))}{ls.lastAlert && <span style={{ fontSize: "10px", color: "#9ca3af" }}>· {ls.lastAlert}</span>}</>) : (<span style={{ fontSize: "11px", color: "#d1d5db" }}>No data yet</span>)}
                                  <button onClick={() => openLsEdit(c.id)} style={{ marginLeft: "auto", background: "none", border: "1px solid #e5e7eb", borderRadius: 5, padding: "2px 8px", cursor: "pointer", fontSize: "10px", color: "#9ca3af", fontFamily: "inherit" }}>Update</button>
                                </div>
                                {/* Approvals */}
                                <div style={{ marginBottom: 10, display: "flex", alignItems: "center", gap: 6, flexWrap: "wrap" }}>
                                  <span style={{ fontSize: "10px", color: "#9ca3af", letterSpacing: "0.06em", marginRight: 2 }}>APPROVALS</span>
                                  {APPROVAL_ITEMS.map((item, idx) => { const key = `${c.id}-${idx}`; const ap = approvals[key]; return (<button key={idx} onClick={() => toggleApproval(c.id, idx)} style={{ display: "flex", alignItems: "center", gap: 4, background: ap?.done ? "#f0fdf4" : "#f9fafb", border: `1px solid ${ap?.done ? "#22c55e" : "#e5e7eb"}`, borderRadius: 5, padding: "3px 9px", cursor: "pointer", fontSize: "10px", color: ap?.done ? "#16a34a" : "#9ca3af", fontFamily: "inherit", fontWeight: ap?.done ? "600" : "400" }}><span>{ap?.done ? "✓" : "○"}</span><span>{item}</span>{ap?.done && ap.date && <span style={{ opacity: 0.6 }}>· {ap.date}</span>}</button>); })}
                                </div>
                                {/* Next Steps */}
                                <div>
                                  <button onClick={() => toggleNextSteps(c.id)} style={{ background: "none", border: "1px solid #e5e7eb", borderRadius: 6, padding: "5px 12px", cursor: "pointer", fontFamily: "inherit", fontSize: "11px", color: "#6b7280", display: "flex", alignItems: "center", gap: 6 }}>
                                    <span>📌</span><span style={{ fontWeight: "600", letterSpacing: "0.04em" }}>NEXT STEPS</span>
                                    {ns.items.length > 0 && <span style={{ background: nsDone === ns.items.length ? "#dcfce7" : "#f3f4f6", color: nsDone === ns.items.length ? "#16a34a" : "#9ca3af", borderRadius: 99, padding: "1px 7px", fontSize: "10px", fontWeight: "600" }}>{nsDone}/{ns.items.length}</span>}
                                    <span style={{ marginLeft: "auto", color: "#9ca3af", fontSize: "10px" }}>{isNSOpen ? "▲" : "▼"}</span>
                                  </button>
                                  {isNSOpen && (
                                    <div style={{ background: "#fafafa", border: "1px solid #f3f4f6", borderRadius: 8, padding: "12px 14px", marginTop: 8 }}>
                                      <div style={{ marginBottom: 12 }}>
                                        <div style={{ fontSize: "10px", color: "#9ca3af", letterSpacing: "0.08em", marginBottom: 5 }}>NOTES</div>
                                        <textarea value={ns.note} onChange={e => updateNextStepNote(c.id, e.target.value)} placeholder="Context, blockers, strategy notes…" rows={2} style={{ width: "100%", padding: "8px 10px", borderRadius: 6, border: "1px solid #e5e7eb", fontFamily: "inherit", fontSize: "12px", color: "#374151", resize: "vertical", outline: "none", boxSizing: "border-box", background: "white" }} />
                                      </div>
                                      <div style={{ fontSize: "10px", color: "#9ca3af", letterSpacing: "0.08em", marginBottom: 8 }}>ACTION ITEMS</div>
                                      {ns.items.length > 0 && <div style={{ display: "flex", flexDirection: "column", gap: 5, marginBottom: 10 }}>{ns.items.map(item => (<div key={item.id} style={{ display: "flex", alignItems: "center", gap: 8 }}><input type="checkbox" checked={item.done} onChange={() => toggleNextStepItem(c.id, item.id)} style={{ accentColor: "#F5761A", width: 14, height: 14, flexShrink: 0, cursor: "pointer" }} /><span style={{ flex: 1, fontSize: "12px", color: item.done ? "#9ca3af" : "#374151", textDecoration: item.done ? "line-through" : "none" }}>{item.text}</span><button onClick={() => deleteNextStepItem(c.id, item.id)} style={{ background: "none", border: "none", cursor: "pointer", color: "#d1d5db", fontSize: "12px", padding: "0 2px" }}>✕</button></div>))}</div>}
                                      <div style={{ display: "flex", gap: 6 }}>
                                        <input type="text" placeholder="Add action item…" value={newNextStepText[c.id] || ""} onChange={e => setNewNextStepText(prev => ({ ...prev, [c.id]: e.target.value }))} onKeyDown={e => { if (e.key === "Enter") addNextStep(c.id); }} style={{ flex: 1, padding: "7px 10px", borderRadius: 6, border: "1px solid #e5e7eb", fontFamily: "inherit", fontSize: "12px", color: "#374151", outline: "none" }} />
                                        <button onClick={() => addNextStep(c.id)} style={{ background: "#F5761A", color: "white", border: "none", borderRadius: 6, padding: "7px 12px", cursor: "pointer", fontFamily: "inherit", fontSize: "12px", fontWeight: "600" }}>+</button>
                                      </div>
                                    </div>
                                  )}
                                </div>
                              </div>
                            );
                          })}
                        </div>
                      </div>
                    );
                  })}
                </div>
              );
            })()}

            {/* Add/Edit Modal */}
            {showAddModal && (
              <div style={{ position: "fixed", inset: 0, background: "rgba(0,0,0,0.3)", display: "flex", alignItems: "center", justifyContent: "center", zIndex: 1000 }}>
                <div style={{ background: "white", borderRadius: 12, padding: 24, width: 480, maxHeight: "90vh", overflowY: "auto", boxShadow: "0 20px 60px rgba(0,0,0,0.15)" }}>
                  <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 20 }}><span style={{ fontWeight: "700", fontSize: "15px", color: "#111827" }}>{editingCampaign !== null ? "Edit Campaign" : "Add Campaign"}</span><button onClick={() => setShowAddModal(false)} style={{ background: "none", border: "none", cursor: "pointer", fontSize: 18, color: "#9ca3af" }}>✕</button></div>
                  {[{ label: "Client / Campaign Name *", key: "client", type: "text", placeholder: "e.g. P1 — Évènementiel" }, { label: "Account (Client Name)", key: "account", type: "text", placeholder: "e.g. WeKount" }, { label: "Assignee", key: "assignee", type: "text", placeholder: "e.g. Anthony" }, { label: "Notes", key: "notes", type: "text", placeholder: "Additional notes" }, { label: "Start Date", key: "startDate", type: "date" }, { label: "End Date", key: "endDate", type: "date" }].map(({ label, key, type, placeholder }) => (<div key={key} style={{ marginBottom: 12 }}><label style={{ display: "block", fontSize: "11px", color: "#6b7280", marginBottom: 4, fontWeight: "500" }}>{label.toUpperCase()}</label><input type={type} placeholder={placeholder} value={newCampaign[key]} onChange={e => setNewCampaign(prev => ({ ...prev, [key]: e.target.value }))} style={{ width: "100%", padding: "8px 10px", borderRadius: 6, border: "1px solid #e5e7eb", fontFamily: "inherit", fontSize: "13px", color: "#111827", outline: "none", boxSizing: "border-box" }} /></div>))}
                  <div style={{ fontSize: "11px", color: "#F5761A", fontWeight: "600", marginBottom: 10, marginTop: 4 }}>VOLUME</div>
                  <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: 10, marginBottom: 12 }}>{[{ label: "Total Leads", key: "totalLeads", placeholder: "e.g. 1800" }, { label: "Leads Contacted", key: "leadsContacted", placeholder: "e.g. 1240" }, { label: "Emails Sent", key: "emailsSent", placeholder: "e.g. 1240" }].map(({ label, key, placeholder }) => (<div key={key}><label style={{ display: "block", fontSize: "11px", color: "#6b7280", marginBottom: 4, fontWeight: "500" }}>{label.toUpperCase()}</label><input type="number" placeholder={placeholder} value={newCampaign[key]} onChange={e => setNewCampaign(prev => ({ ...prev, [key]: e.target.value }))} style={{ width: "100%", padding: "8px 10px", borderRadius: 6, border: "1px solid #e5e7eb", fontFamily: "inherit", fontSize: "13px", outline: "none", boxSizing: "border-box" }} /></div>))}</div>
                  <div style={{ fontSize: "11px", color: "#F5761A", fontWeight: "600", marginBottom: 10 }}>RESULTS</div>
                  <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 10, marginBottom: 12 }}>{[{ label: "Booked Meetings", key: "booked", placeholder: "e.g. 3" }, { label: "Interested", key: "interested", placeholder: "e.g. 8" }].map(({ label, key, placeholder }) => (<div key={key}><label style={{ display: "block", fontSize: "11px", color: "#6b7280", marginBottom: 4, fontWeight: "500" }}>{label.toUpperCase()}</label><input type="number" placeholder={placeholder} value={newCampaign[key]} onChange={e => setNewCampaign(prev => ({ ...prev, [key]: e.target.value }))} style={{ width: "100%", padding: "8px 10px", borderRadius: 6, border: "1px solid #e5e7eb", fontFamily: "inherit", fontSize: "13px", outline: "none", boxSizing: "border-box" }} /></div>))}</div>
                  <div style={{ fontSize: "11px", color: "#F5761A", fontWeight: "600", marginBottom: 10 }}>PERFORMANCE (%)</div>
                  <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: 10, marginBottom: 12 }}>{[{ label: "Bounce Rate", key: "bounce", placeholder: "e.g. 1.2" }, { label: "Open Rate", key: "openRate", placeholder: "e.g. 38" }, { label: "Reply Rate", key: "replyRate", placeholder: "e.g. 4.1" }].map(({ label, key, placeholder }) => (<div key={key}><label style={{ display: "block", fontSize: "11px", color: "#6b7280", marginBottom: 4, fontWeight: "500" }}>{label.toUpperCase()}</label><input type="number" placeholder={placeholder} value={newCampaign[key]} onChange={e => setNewCampaign(prev => ({ ...prev, [key]: e.target.value }))} style={{ width: "100%", padding: "8px 10px", borderRadius: 6, border: "1px solid #e5e7eb", fontFamily: "inherit", fontSize: "13px", outline: "none", boxSizing: "border-box" }} /></div>))}</div>
                  <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 12, marginBottom: 12 }}>
                    <div><label style={{ display: "block", fontSize: "11px", color: "#6b7280", marginBottom: 4, fontWeight: "500" }}>STATUS</label><select value={newCampaign.status} onChange={e => setNewCampaign(p => ({ ...p, status: e.target.value }))} style={{ width: "100%", padding: "8px 10px", borderRadius: 6, border: "1px solid #e5e7eb", fontFamily: "inherit", fontSize: "13px", color: "#111827", background: "white" }}>{campaignStatuses.map(s => <option key={s} value={s}>{s.charAt(0).toUpperCase() + s.slice(1)}</option>)}</select></div>
                    <div><label style={{ display: "block", fontSize: "11px", color: "#6b7280", marginBottom: 4, fontWeight: "500" }}>PIPELINE STAGE</label><select value={newCampaign.stage} onChange={e => setNewCampaign(p => ({ ...p, stage: e.target.value }))} style={{ width: "100%", padding: "8px 10px", borderRadius: 6, border: "1px solid #e5e7eb", fontFamily: "inherit", fontSize: "13px", color: "#111827", background: "white" }}>{campaignStages.map(s => { const p = pipelines.find(p => p.id === s); return <option key={s} value={s}>{p?.code} — {p?.label}</option>; })}</select></div>
                  </div>
                  <div style={{ display: "flex", gap: 8, marginTop: 20 }}>
                    <button onClick={() => setShowAddModal(false)} style={{ flex: 1, padding: "10px", border: "1px solid #e5e7eb", borderRadius: 7, background: "none", cursor: "pointer", fontFamily: "inherit", fontSize: "13px", color: "#6b7280" }}>Cancel</button>
                    <button onClick={saveCampaign} style={{ flex: 2, padding: "10px", border: "none", borderRadius: 7, background: "#F5761A", cursor: "pointer", fontFamily: "inherit", fontSize: "13px", fontWeight: "600", color: "white" }}>{editingCampaign !== null ? "Save Changes" : "Add Campaign"}</button>
                  </div>
                </div>
              </div>
            )}
            {/* Leadscore modal */}
            {editingLeadscore !== null && (
              <div style={{ position: "fixed", inset: 0, background: "rgba(0,0,0,0.3)", display: "flex", alignItems: "center", justifyContent: "center", zIndex: 1100 }}>
                <div style={{ background: "white", borderRadius: 12, padding: 24, width: 380, boxShadow: "0 20px 60px rgba(0,0,0,0.15)" }}>
                  <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 16 }}><span style={{ fontWeight: "700", fontSize: "14px", color: "#111827" }}>Update Leadscore</span><button onClick={() => setEditingLeadscore(null)} style={{ background: "none", border: "none", cursor: "pointer", fontSize: 18, color: "#9ca3af" }}>✕</button></div>
                  <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: 10, marginBottom: 14 }}>{[{ key: "hot", label: "🔴 Hot (≥80)" }, { key: "warm", label: "🟠 Warm (≥50)" }, { key: "active", label: "🟡 Active (≥10)" }].map(({ key, label }) => (<div key={key}><label style={{ display: "block", fontSize: "10px", color: "#6b7280", marginBottom: 4 }}>{label}</label><input type="number" value={lsEdit[key] || 0} onChange={e => setLsEdit(p => ({ ...p, [key]: parseInt(e.target.value) || 0 }))} style={{ width: "100%", padding: "7px 10px", borderRadius: 6, border: "1px solid #e5e7eb", fontFamily: "inherit", fontSize: "13px", outline: "none", boxSizing: "border-box" }} /></div>))}</div>
                  <div style={{ marginBottom: 10 }}><label style={{ display: "block", fontSize: "10px", color: "#6b7280", marginBottom: 4 }}>LAST ALERT DATE</label><input type="date" value={lsEdit.lastAlert || ""} onChange={e => setLsEdit(p => ({ ...p, lastAlert: e.target.value }))} style={{ width: "100%", padding: "7px 10px", borderRadius: 6, border: "1px solid #e5e7eb", fontFamily: "inherit", fontSize: "13px", outline: "none", boxSizing: "border-box" }} /></div>
                  <div style={{ marginBottom: 16 }}><label style={{ display: "block", fontSize: "10px", color: "#6b7280", marginBottom: 4 }}>LEMLIST URL</label><input type="text" placeholder="https://app.lemlist.com/..." value={lsEdit.lemlistUrl || ""} onChange={e => setLsEdit(p => ({ ...p, lemlistUrl: e.target.value }))} style={{ width: "100%", padding: "7px 10px", borderRadius: 6, border: "1px solid #e5e7eb", fontFamily: "inherit", fontSize: "13px", outline: "none", boxSizing: "border-box" }} /></div>
                  <div style={{ display: "flex", gap: 8 }}><button onClick={() => setEditingLeadscore(null)} style={{ flex: 1, padding: "9px", border: "1px solid #e5e7eb", borderRadius: 7, background: "none", cursor: "pointer", fontFamily: "inherit", fontSize: "13px", color: "#6b7280" }}>Cancel</button><button onClick={saveLs} style={{ flex: 2, padding: "9px", border: "none", borderRadius: 7, background: "#F5761A", cursor: "pointer", fontFamily: "inherit", fontSize: "13px", fontWeight: "600", color: "white" }}>Save</button></div>
                </div>
              </div>
            )}
          </div>
        )}

        {/* ═══════════════ HEALTH TAB ═══════════════ */}
        {activeTab === "health" && (
          <div>
            <div style={{ display: "flex", alignItems: "flex-end", justifyContent: "space-between", marginBottom: 24 }}>
              <div><div style={{ color: "#9ca3af", fontSize: "11px", letterSpacing: "0.1em", marginBottom: 4 }}>INFRASTRUCTURE</div><div style={{ color: "#111827", fontSize: "18px", fontWeight: "bold" }}>Inbox & Domain Health</div><div style={{ color: "#9ca3af", fontSize: "12px", marginTop: 4 }}>{domains.length} domain{domains.length !== 1 ? "s" : ""} · {domains.filter(d => d.lemwarmActive).length} Lemwarm active · {domains.filter(d => d.blacklisted).length > 0 ? <span style={{ color: "#ef4444" }}>{domains.filter(d => d.blacklisted).length} blacklisted ⚠</span> : "no issues"}</div></div>
              <button onClick={() => { setEditingDomain(null); setNewDomain({ client: "", domain: "", inboxes: 2, lemwarmActive: true, warmupStatus: "warming", lastBounce: "", blacklisted: false, notes: "" }); setShowDomainModal(true); }} style={{ background: "#F5761A", color: "white", border: "none", borderRadius: 7, padding: "9px 16px", cursor: "pointer", fontFamily: "inherit", fontSize: "12px", fontWeight: "600" }}>+ Add Domain</button>
            </div>
            {domains.some(d => d.blacklisted || parseFloat(d.lastBounce) > 3 || !d.lemwarmActive) && <div style={{ background: "#fff5f5", border: "1px solid #fecaca", borderRadius: 8, padding: "10px 14px", marginBottom: 16, display: "flex", gap: 8, alignItems: "center" }}><span style={{ color: "#ef4444", fontSize: "14px" }}>⚠</span><span style={{ fontSize: "12px", color: "#dc2626" }}>{[domains.filter(d => d.blacklisted).length > 0 && `${domains.filter(d => d.blacklisted).length} domain(s) blacklisted`, domains.filter(d => parseFloat(d.lastBounce) > 3).length > 0 && `${domains.filter(d => parseFloat(d.lastBounce) > 3).length} domain(s) bounce >3%`, domains.filter(d => !d.lemwarmActive).length > 0 && `${domains.filter(d => !d.lemwarmActive).length} domain(s) Lemwarm off`].filter(Boolean).join(" · ")}</span></div>}
            {domains.length === 0 ? (<div style={{ background: "white", border: "1px dashed #e5e7eb", borderRadius: 10, padding: "48px 24px", textAlign: "center" }}><div style={{ fontSize: 32, marginBottom: 10 }}>🌐</div><div style={{ color: "#374151", fontWeight: "600" }}>No domains tracked yet</div><div style={{ color: "#9ca3af", fontSize: "12px" }}>Click "Add Domain" to start</div></div>) : (
              <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
                <div style={{ display: "grid", gridTemplateColumns: "140px 1fr 70px 90px 80px 80px 80px 80px", gap: 8, padding: "0 14px", marginBottom: 2 }}>{["CLIENT", "DOMAIN", "INBOXES", "WARMUP", "LEMWARM", "BOUNCE", "BLACKLIST", ""].map(h => <div key={h} style={{ fontSize: "10px", color: "#9ca3af", letterSpacing: "0.08em" }}>{h}</div>)}</div>
                {domains.map(d => {
                  const bounceVal = parseFloat(d.lastBounce), bounceWarn = bounceVal > 3, bounceGood = bounceVal <= 1.5;
                  const warmupColors = { warmed: { bg: "#f0fdf4", text: "#16a34a", border: "#22c55e" }, warming: { bg: "#fffbeb", text: "#b45309", border: "#f59e0b" }, paused: { bg: "#f9fafb", text: "#6b7280", border: "#e5e7eb" } };
                  const wc = warmupColors[d.warmupStatus] || warmupColors.paused;
                  return (
                    <div key={d.id} style={{ background: "white", border: `1px solid ${d.blacklisted ? "#fecaca" : "#e5e7eb"}`, borderLeft: `3px solid ${d.blacklisted ? "#ef4444" : bounceWarn ? "#f59e0b" : "#22c55e"}`, borderRadius: 8, padding: "12px 14px", display: "grid", gridTemplateColumns: "140px 1fr 70px 90px 80px 80px 80px 80px", gap: 8, alignItems: "center" }}>
                      <div style={{ fontSize: "12px", fontWeight: "600", color: "#374151" }}>{d.client || "—"}</div>
                      <div><div style={{ fontSize: "12px", fontFamily: "'DM Mono', monospace", color: "#111827" }}>{d.domain}</div>{d.notes && <div style={{ fontSize: "10px", color: "#9ca3af", marginTop: 1 }}>{d.notes}</div>}</div>
                      <div style={{ fontFamily: "'DM Mono', monospace", fontSize: "13px", fontWeight: "700", color: "#374151", textAlign: "center" }}>{d.inboxes}</div>
                      <div style={{ background: wc.bg, border: `1px solid ${wc.border}`, borderRadius: 5, padding: "2px 8px", fontSize: "10px", color: wc.text, fontWeight: "600", textAlign: "center" }}>{d.warmupStatus === "warmed" ? "✓ Warmed" : d.warmupStatus === "warming" ? "🔥 Warming" : "⏸ Paused"}</div>
                      <div style={{ textAlign: "center" }}><span style={{ fontSize: "13px" }}>{d.lemwarmActive ? "✅" : "❌"}</span><div style={{ fontSize: "10px", color: "#9ca3af", marginTop: 1 }}>{d.lemwarmActive ? "Active" : "Off"}</div></div>
                      <div style={{ textAlign: "center" }}>{d.lastBounce !== "" ? (<><div style={{ fontFamily: "'DM Mono', monospace", fontSize: "13px", fontWeight: "700", color: bounceWarn ? "#ef4444" : bounceGood ? "#16a34a" : "#374151" }}>{d.lastBounce}%</div><div style={{ fontSize: "9px", color: bounceWarn ? "#ef4444" : "#9ca3af" }}>{bounceWarn ? "⚠ High" : bounceGood ? "✓ Good" : "—"}</div></>) : <span style={{ color: "#d1d5db", fontSize: "11px" }}>—</span>}</div>
                      <div style={{ textAlign: "center" }}><span style={{ fontSize: "13px" }}>{d.blacklisted ? "🚫" : "✅"}</span><div style={{ fontSize: "10px", color: d.blacklisted ? "#ef4444" : "#9ca3af" }}>{d.blacklisted ? "Listed" : "Clean"}</div></div>
                      <div style={{ display: "flex", gap: 4, justifyContent: "flex-end" }}><button onClick={() => openEditDomain(d)} style={{ background: "none", border: "1px solid #e5e7eb", borderRadius: 5, padding: "3px 8px", cursor: "pointer", fontSize: "10px", color: "#6b7280", fontFamily: "inherit" }}>Edit</button><button onClick={() => deleteDomain(d.id)} style={{ background: "none", border: "1px solid #fecaca", borderRadius: 5, padding: "3px 6px", cursor: "pointer", fontSize: "10px", color: "#ef4444", fontFamily: "inherit" }}>✕</button></div>
                    </div>
                  );
                })}
              </div>
            )}
            {showDomainModal && (
              <div style={{ position: "fixed", inset: 0, background: "rgba(0,0,0,0.3)", display: "flex", alignItems: "center", justifyContent: "center", zIndex: 1000 }}>
                <div style={{ background: "white", borderRadius: 12, padding: 24, width: 440, boxShadow: "0 20px 60px rgba(0,0,0,0.15)" }}>
                  <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 16 }}><span style={{ fontWeight: "700", fontSize: "14px", color: "#111827" }}>{editingDomain ? "Edit Domain" : "Add Domain"}</span><button onClick={() => setShowDomainModal(false)} style={{ background: "none", border: "none", cursor: "pointer", fontSize: 18, color: "#9ca3af" }}>✕</button></div>
                  {[{ label: "Client", key: "client", placeholder: "e.g. WeKount" }, { label: "Domain", key: "domain", placeholder: "e.g. wekount-mail.com" }, { label: "Notes", key: "notes", placeholder: "Optional notes" }].map(({ label, key, placeholder }) => (<div key={key} style={{ marginBottom: 10 }}><label style={{ display: "block", fontSize: "10px", color: "#6b7280", marginBottom: 4 }}>{label.toUpperCase()}</label><input value={newDomain[key] || ""} onChange={e => setNewDomain(p => ({ ...p, [key]: e.target.value }))} placeholder={placeholder} style={{ width: "100%", padding: "8px 10px", borderRadius: 6, border: "1px solid #e5e7eb", fontFamily: "inherit", fontSize: "13px", outline: "none", boxSizing: "border-box" }} /></div>))}
                  <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: 10, marginBottom: 10 }}>
                    <div><label style={{ display: "block", fontSize: "10px", color: "#6b7280", marginBottom: 4 }}>INBOXES</label><input type="number" value={newDomain.inboxes} onChange={e => setNewDomain(p => ({ ...p, inboxes: parseInt(e.target.value) || 0 }))} style={{ width: "100%", padding: "8px 10px", borderRadius: 6, border: "1px solid #e5e7eb", fontFamily: "inherit", fontSize: "13px", outline: "none", boxSizing: "border-box" }} /></div>
                    <div><label style={{ display: "block", fontSize: "10px", color: "#6b7280", marginBottom: 4 }}>LAST BOUNCE %</label><input type="number" step="0.1" value={newDomain.lastBounce} onChange={e => setNewDomain(p => ({ ...p, lastBounce: e.target.value }))} style={{ width: "100%", padding: "8px 10px", borderRadius: 6, border: "1px solid #e5e7eb", fontFamily: "inherit", fontSize: "13px", outline: "none", boxSizing: "border-box" }} /></div>
                    <div><label style={{ display: "block", fontSize: "10px", color: "#6b7280", marginBottom: 4 }}>WARMUP</label><select value={newDomain.warmupStatus} onChange={e => setNewDomain(p => ({ ...p, warmupStatus: e.target.value }))} style={{ width: "100%", padding: "8px 10px", borderRadius: 6, border: "1px solid #e5e7eb", fontFamily: "inherit", fontSize: "13px", background: "white" }}><option value="warmed">Warmed</option><option value="warming">Warming</option><option value="paused">Paused</option></select></div>
                  </div>
                  <div style={{ display: "flex", gap: 16, marginBottom: 16 }}>
                    <label style={{ display: "flex", alignItems: "center", gap: 6, fontSize: "12px", color: "#374151", cursor: "pointer" }}><input type="checkbox" checked={newDomain.lemwarmActive} onChange={e => setNewDomain(p => ({ ...p, lemwarmActive: e.target.checked }))} style={{ accentColor: "#F5761A" }} />Lemwarm active</label>
                    <label style={{ display: "flex", alignItems: "center", gap: 6, fontSize: "12px", color: "#374151", cursor: "pointer" }}><input type="checkbox" checked={newDomain.blacklisted} onChange={e => setNewDomain(p => ({ ...p, blacklisted: e.target.checked }))} style={{ accentColor: "#ef4444" }} />Blacklisted</label>
                  </div>
                  <div style={{ display: "flex", gap: 8 }}><button onClick={() => setShowDomainModal(false)} style={{ flex: 1, padding: "9px", border: "1px solid #e5e7eb", borderRadius: 7, background: "none", cursor: "pointer", fontFamily: "inherit", fontSize: "13px", color: "#6b7280" }}>Cancel</button><button onClick={saveDomain} style={{ flex: 2, padding: "9px", border: "none", borderRadius: 7, background: "#F5761A", cursor: "pointer", fontFamily: "inherit", fontSize: "13px", fontWeight: "600", color: "white" }}>Save Domain</button></div>
                </div>
              </div>
            )}
          </div>
        )}

        {/* ═══════════════ REPORTING TAB ═══════════════ */}
        {activeTab === "reporting" && (
          <div>
            <div style={{ marginBottom: 24 }}><div style={{ color: "#9ca3af", fontSize: "11px", letterSpacing: "0.1em", marginBottom: 4 }}>CLIENT REPORTING</div><div style={{ color: "#111827", fontSize: "18px", fontWeight: "bold" }}>Monthly Report Tracker</div><div style={{ color: "#9ca3af", fontSize: "12px", marginTop: 4 }}>Click a cell to cycle: Pending → Review → Done</div></div>
            <div style={{ display: "flex", gap: 10, marginBottom: 16, flexWrap: "wrap" }}>{Object.entries(reportStatuses).map(([k, v]) => (<div key={k} style={{ background: v.bg, border: `1px solid ${v.border}`, borderRadius: 5, padding: "3px 10px", fontSize: "11px", color: v.text, fontWeight: "600" }}>{v.label}</div>))}</div>
            {reportClients.length === 0 ? (<div style={{ background: "white", border: "1px dashed #e5e7eb", borderRadius: 10, padding: "48px 24px", textAlign: "center" }}><div style={{ fontSize: 32, marginBottom: 10 }}>📊</div><div style={{ color: "#374151", fontWeight: "600" }}>No clients yet — add campaigns first</div></div>) : (
              <div style={{ background: "white", border: "1px solid #e5e7eb", borderRadius: 12, overflow: "hidden" }}>
                <div style={{ display: "grid", gridTemplateColumns: `160px repeat(${Math.min(currentMonth + 1, 12)}, 1fr)`, borderBottom: "1px solid #f3f4f6" }}>
                  <div style={{ padding: "10px 16px", fontSize: "10px", color: "#9ca3af", letterSpacing: "0.08em", borderRight: "1px solid #f3f4f6" }}>CLIENT</div>
                  {MONTHS.slice(0, currentMonth + 1).map((m, i) => (<div key={m} style={{ padding: "10px 8px", fontSize: "10px", textAlign: "center", letterSpacing: "0.06em", color: i === currentMonth ? "#F5761A" : "#9ca3af", fontWeight: i === currentMonth ? "700" : "400", borderRight: "1px solid #f3f4f6" }}>{m.toUpperCase()}</div>))}
                </div>
                {reportClients.map((client, ri) => (
                  <div key={client} style={{ display: "grid", gridTemplateColumns: `160px repeat(${Math.min(currentMonth + 1, 12)}, 1fr)`, borderBottom: ri < reportClients.length - 1 ? "1px solid #f9fafb" : "none" }}>
                    <div style={{ padding: "12px 16px", display: "flex", alignItems: "center", gap: 8, borderRight: "1px solid #f3f4f6" }}><div style={{ width: 26, height: 26, borderRadius: 6, background: "#F5761A", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "11px", fontWeight: "800", color: "white", flexShrink: 0 }}>{client.charAt(0)}</div><span style={{ fontWeight: "600", fontSize: "13px", color: "#111827" }}>{client}</span></div>
                    {MONTHS.slice(0, currentMonth + 1).map((m, mi) => { const key = `${client}-${mi}`; const status = reportingData[key] || "pending"; const s = reportStatuses[status]; const isCurrent = mi === currentMonth; return (<div key={mi} onClick={() => cycleReportStatus(client, mi)} style={{ padding: "10px 8px", textAlign: "center", cursor: "pointer", borderRight: "1px solid #f3f4f6", background: isCurrent && status === "pending" ? "#fffbeb" : "transparent" }}><div style={{ background: s.bg, border: `1px solid ${s.border}`, borderRadius: 5, padding: "3px 6px", fontSize: "10px", color: s.text, fontWeight: "600", display: "inline-block" }}>{s.label}</div></div>); })}
                  </div>
                ))}
              </div>
            )}
            {(() => { const overdueClients = reportClients.filter(c => (reportingData[`${c}-${currentMonth}`] || "pending") === "pending"); if (overdueClients.length === 0) return null; return (<div style={{ marginTop: 16, background: "#fffbeb", border: "1px solid #fcd34d", borderRadius: 8, padding: "10px 14px" }}><span style={{ fontSize: "12px", color: "#b45309", fontWeight: "600" }}>⚠ Pending this month: </span><span style={{ fontSize: "12px", color: "#92400e" }}>{overdueClients.join(", ")}</span></div>); })()}
          </div>
        )}

        {/* ═══════════════ REFERENCE TAB ═══════════════ */}
        {activeTab === "reference" && (
          <div>
            <div style={{ color: "#9ca3af", fontSize: "11px", letterSpacing: "0.1em", marginBottom: 16 }}>QUICK REFERENCE</div>
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16 }}>
              <div style={{ background: "white", border: "1px solid #e5e7eb", borderRadius: 8, padding: 16 }}>
                <div style={{ color: "#F5761A", fontSize: "10px", letterSpacing: "0.1em", marginBottom: 10 }}>PIPELINE SEQUENCE</div>
                {pipelines.map((p, i) => (<div key={p.id} style={{ display: "flex", alignItems: "center", gap: "8px", marginBottom: 8 }}><span style={{ color: p.color, fontSize: "11px", minWidth: 20 }}>{p.code}</span><span style={{ fontSize: "12px" }}>{p.icon}</span><span style={{ color: "#6b7280", fontSize: "12px" }}>{p.label}</span>{i < pipelines.length - 1 && <span style={{ color: "#d1d5db", marginLeft: "auto" }}>↓</span>}</div>))}
              </div>
              <div style={{ background: "white", border: "1px solid #e5e7eb", borderRadius: 8, padding: 16 }}>
                <div style={{ color: "#FFB74D", fontSize: "10px", letterSpacing: "0.1em", marginBottom: 10 }}>KEY TOOLS</div>
                {[{ tool: "Clay", use: "ICP enrichment & validation" }, { tool: "NeverBounce", use: "Email list verification" }, { tool: "Lemlist", use: "Campaign sending & sequences" }, { tool: "Zapmail", use: "Initial inbox warmup" }, { tool: "Lemwarm", use: "Ongoing warmup interactions" }].map(({ tool, use }) => (<div key={tool} style={{ marginBottom: 7, display: "flex", gap: "8px" }}><span style={{ color: "#FFB74D", fontSize: "12px", minWidth: 90 }}>{tool}</span><span style={{ color: "#9ca3af", fontSize: "12px" }}>{use}</span></div>))}
              </div>
              <div style={{ background: "white", border: "1px solid #e5e7eb", borderRadius: 8, padding: 16 }}>
                <div style={{ color: "#80CBC4", fontSize: "10px", letterSpacing: "0.1em", marginBottom: 10 }}>CRITICAL RULES</div>
                {["Never launch without client approval", "Never send to unvalidated lists", "Never use the client's main domain", "Never skip warmup phase", "Never define ICP blindly — align with Sales", "Never scale failing campaigns", "Never spike sending volume suddenly"].map((rule, i) => (<div key={i} style={{ display: "flex", gap: "6px", marginBottom: 5 }}><span style={{ color: "#f44336", fontSize: "11px" }}>✗</span><span style={{ color: "#6b7280", fontSize: "11px" }}>{rule}</span></div>))}
              </div>
              <div style={{ background: "white", border: "1px solid #e5e7eb", borderRadius: 8, padding: 16 }}>
                <div style={{ color: "#CE93D8", fontSize: "10px", letterSpacing: "0.1em", marginBottom: 10 }}>PERFORMANCE THRESHOLDS</div>
                {[{ metric: "Bounce Rate", target: "< 3%", note: "Pause if exceeded" }, { metric: "Warmup Duration", target: "2–3 weeks", note: "Do not rush" }, { metric: "Email Length", target: "50–120 words", note: "Per email in sequence" }, { metric: "Sequence Length", target: "3–5 emails", note: "Spaced 2–4 days apart" }, { metric: "Inboxes per Domain", target: "2–3 max", note: "Scale with domains" }, { metric: "Warmup Day 1–3", target: "5–10 emails/day", note: "Per inbox" }].map(({ metric, target, note }) => (<div key={metric} style={{ marginBottom: 8 }}><div style={{ display: "flex", justifyContent: "space-between" }}><span style={{ color: "#6b7280", fontSize: "11px" }}>{metric}</span><span style={{ color: "#CE93D8", fontSize: "11px", fontWeight: "bold" }}>{target}</span></div><div style={{ color: "#9ca3af", fontSize: "10px" }}>{note}</div></div>))}
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
