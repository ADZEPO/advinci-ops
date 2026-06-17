import { useState } from "react";

// fonts
const _fontImport = (() => { const l = document.createElement("link"); l.rel = "stylesheet"; l.href = "https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500;600;700&family=DM+Mono:wght@400;500&display=swap"; document.head.appendChild(l); })();


const pipelines = [
  {
    id: "domain",
    code: "01",
    label: "Domain Setup",
    color: "#F5761A",
    accent: "#0288D1",
    icon: "🌐",
    objective: "Create deliverability-optimized domains and inboxes ready for cold email campaigns.",
    steps: [
      {
        id: 1,
        title: "Domain Acquisition",
        detail: "Buy secondary domains (not client's main domain). Keep names natural and similar.",
        rules: ["Avoid spammy names", "Avoid too many hyphens", "1 domain = 2–3 inboxes"],
        checklist: ["Domains purchased", "Names are readable & professional"],
      },
      {
        id: 2,
        title: "DNS Configuration",
        detail: "Set up SPF, DKIM, and DMARC records for each domain.",
        rules: ["SPF: v=spf1 include:_spf.google.com ~all", "DMARC: p=none + rua email"],
        checklist: ["SPF added", "DKIM verified", "DMARC configured"],
      },
      {
        id: 3,
        title: "Inbox Creation",
        detail: "Create 2–3 inboxes per domain using real first names (not info@ or sales@).",
        rules: ["Use realistic names e.g. john@, emma@", "Store credentials securely"],
        checklist: ["Inboxes created", "Credentials stored"],
      },
      {
        id: 4,
        title: "Inbox Configuration",
        detail: "Set up profile picture, realistic name, and email signature per inbox.",
        rules: ["Match timezone with target audience", "Signature must look human"],
        checklist: ["Profile picture set", "Signature configured", "Timezone matched"],
      },
      {
        id: 5,
        title: "Domain Health Check",
        detail: "Verify DNS propagation, blacklist status, and deliverability readiness.",
        rules: ["Check for SPF/DKIM errors", "Confirm not blacklisted"],
        checklist: ["DNS propagated", "Not blacklisted", "Ready for warmup"],
      },
    ],
    mistakes: ["Using main domain", "Too many inboxes per domain", "Skipping DNS setup", "Fake inbox names", "Sending too early"],
    nextStep: "warmup",
  },
  {
    id: "warmup",
    code: "02",
    label: "Warmup Phase",
    color: "#FFB74D",
    accent: "#F57C00",
    icon: "🔥",
    objective: "Gradually build sender reputation for new domains and inboxes to ensure high deliverability.",
    tools: ["Zapmail — initial warmup & health checks", "Lemwarm — ongoing interaction-based warmup"],
    steps: [
      {
        id: 1,
        title: "Initial Warmup (Zapmail)",
        detail: "Activate warmup immediately after inbox creation. Monitor spam placement.",
        rules: ["Never skip this step", "Ensure DNS fully working first"],
        checklist: ["Warmup activated", "No DNS errors", "Not landing in spam"],
      },
      {
        id: 2,
        title: "Progressive Volume Ramp",
        detail: "Increase sending volume gradually over 2–3 weeks.",
        rules: ["Day 1–3: 5–10/day", "Day 4–7: 10–20/day", "Week 2+: 20–40/day", "Never spike volume suddenly"],
        checklist: ["Volume schedule defined", "No sudden spikes"],
      },
      {
        id: 3,
        title: "Lemwarm Integration",
        detail: "Connect inboxes to Lemwarm to simulate real interactions (opens, replies, mark important).",
        rules: ["Must be active throughout warmup", "Confirm replies are happening"],
        checklist: ["Lemwarm active", "Replies happening", "Emails auto-removed from spam"],
      },
      {
        id: 4,
        title: "Manual Activity Simulation",
        detail: "Perform light manual actions to mimic human behavior.",
        rules: ["Send real emails between inboxes", "Reply manually", "Open emails"],
        checklist: ["Manual sends done", "Replies sent"],
      },
      {
        id: 5,
        title: "Monitoring & Health Checks",
        detail: "Monitor spam rate, open rate, and reply activity daily.",
        rules: ["Red flag: emails in spam", "Red flag: no replies", "Red flag: sudden drops"],
        checklist: ["Daily monitoring active", "No spam flags", "Performance stable"],
      },
      {
        id: 6,
        title: "Warmup Completion",
        detail: "Inboxes are ready when placement is stable, volume consistent, and no spam flags.",
        rules: ["Typical duration: 2–3 weeks", "Do NOT rush this step"],
        checklist: ["Consistent inbox placement", "Stable volume", "No spam flags", "Ready for campaigns"],
      },
    ],
    mistakes: ["Sending too early", "Increasing volume too fast", "Skipping Lemwarm", "No monitoring", "Ignoring spam signals"],
    nextStep: "icp",
  },
  {
    id: "icp",
    code: "03",
    label: "ICP & Enrichment",
    color: "#CE93D8",
    accent: "#7B1FA2",
    icon: "🎯",
    objective: "Identify the right target audience and build a high-quality enriched lead list ready for outreach.",
    steps: [
      {
        id: 0,
        title: "Pre-Work (MANDATORY)",
        detail: "Review onboarding notes, CRM docs, and align with Sales before defining ICP.",
        rules: ["Do NOT define ICP blindly", "Escalate if unclear", "Align with Sales team first"],
        checklist: ["Onboarding notes reviewed", "CRM checked", "Sales team aligned"],
        mandatory: true,
      },
      {
        id: 1,
        title: "ICP Definition",
        detail: "Define industry, company size, geography, and job titles.",
        rules: ["Must be approved internally", "Based on existing data — not assumptions"],
        checklist: ["ICP defined", "Approved internally"],
      },
      {
        id: 2,
        title: "Lead Sourcing",
        detail: "Source only leads that strictly match the ICP.",
        rules: ["Zero tolerance for irrelevant companies", "Quality > quantity"],
        checklist: ["Leads match ICP", "No irrelevant companies included"],
      },
      {
        id: 3,
        title: "Data Enrichment",
        detail: "Enrich leads with name, company, job title, and email.",
        rules: ["Enrichment logic must be approved", "Data must be consistent"],
        checklist: ["All fields filled", "Data consistent and clean"],
      },
      {
        id: 4,
        title: "Personalization Layers",
        detail: "Add personalization: Basic (name/company), Medium (role/industry), Advanced (custom insights).",
        rules: ["Must be accurate", "Must feel natural — not robotic"],
        checklist: ["Variables added", "No broken fields"],
      },
      {
        id: 5,
        title: "Data Cleaning",
        detail: "Remove duplicates, missing emails, and bad fits.",
        checklist: ["No duplicates", "No missing emails", "Clean dataset ready"],
      },
      {
        id: 6,
        title: "Pre-Export Review",
        detail: "Check formatting and completeness before passing to validation.",
        checklist: ["Formatting verified", "Ready for email validation"],
      },
    ],
    mistakes: ["Bad ICP definition", "Poor personalization", "Dirty data", "Over-enrichment"],
    nextStep: "validation",
  },
  {
    id: "validation",
    code: "04",
    label: "Email Validation",
    color: "#80CBC4",
    accent: "#00796B",
    icon: "✅",
    objective: "Ensure all email addresses are valid and safe to contact to protect deliverability.",
    tools: ["NeverBounce — email verification & list cleaning", "Clay — enrichment + built-in validation workflows"],
    steps: [
      {
        id: 0,
        title: "Choose Validation Scenario",
        detail: "Scenario 1: Leads from Clay → validate in Clay. Scenario 2: Client-provided list → validate in NeverBounce.",
        rules: ["If data originates in Clay → validate in Clay", "If data comes from outside → validate in NeverBounce", "NEVER skip validation"],
        checklist: ["Scenario identified", "Correct tool selected"],
        mandatory: true,
      },
      {
        id: 1,
        title: "Import Lead List",
        detail: "Upload enriched lead list into NeverBounce (if applicable).",
        rules: ["CSV format required", "All required fields must be present"],
        checklist: ["File uploaded", "Correct format (CSV)", "All fields present"],
      },
      {
        id: 2,
        title: "Run Verification",
        detail: "Start verification. Emails categorized as: Valid, Invalid, Catch-all, Risky/Unknown.",
        checklist: ["Verification complete", "Results categorized"],
      },
      {
        id: 3,
        title: "Filter Results",
        detail: "Keep Valid emails. Catch-all is optional based on policy. Remove Invalid and Risky/Unknown.",
        rules: ["Always remove Invalid", "Remove Risky/Unknown unless explicitly approved"],
        checklist: ["Valid emails kept", "Invalid removed", "Policy applied to catch-all"],
      },
      {
        id: 4,
        title: "Export Clean List",
        detail: "Export only approved emails into a clean dataset.",
        checklist: ["Clean dataset exported", "No invalid emails included"],
      },
      {
        id: 5,
        title: "Quality Check",
        detail: "Final check on bounce risk, formatting, and random samples.",
        checklist: ["Bounce risk acceptable", "Formatting verified", "Random samples spot-checked", "Ready for campaign import"],
      },
    ],
    mistakes: ["Skipping validation", "Keeping risky emails", "Not filtering properly", "Uploading wrong dataset"],
    nextStep: "campaign",
  },
  {
    id: "campaign",
    code: "05",
    label: "Campaign Creation",
    color: "#EF9A9A",
    accent: "#C62828",
    icon: "📧",
    objective: "Create, launch, and continuously optimize cold email campaigns to generate replies and meetings.",
    steps: [
      {
        id: 0,
        title: "Pre-Work Check (MANDATORY)",
        detail: "Verify all upstream steps are complete before starting campaign.",
        rules: ["ICP defined ✓", "Leads enriched ✓", "Emails validated ✓", "Domains warmed ✓", "If ANY missing — STOP and fix upstream"],
        checklist: ["ICP confirmed", "Leads ready", "Validation done", "Domains warmed"],
        mandatory: true,
      },
      {
        id: 1,
        title: "Campaign Structure",
        detail: "Build a sequence of 3–5 emails spaced 2–4 days apart.",
        rules: ["Email 1: Initial outreach", "Email 2: Follow-up", "Email 3: Value add", "Email 4+: Breakup", "Each email must stand alone"],
        checklist: ["Sequence created", "Timing set"],
      },
      {
        id: 2,
        title: "Copywriting",
        detail: "Write copy following: Relevance > Creativity. Clarity > Cleverness. Short > Long (50–120 words).",
        rules: ["Structure: Personalization → Reason → Value → CTA", "Simple language", "Easy to read"],
        checklist: ["Clear value prop", "Simple language", "50–120 words per email"],
      },
      {
        id: 3,
        title: "Personalization",
        detail: "Apply personalization layers: Basic (name/company), Medium (role/industry), Advanced (custom insights).",
        rules: ["Must be accurate", "Must feel natural"],
        checklist: ["Variables working", "No broken fields"],
      },
      {
        id: 4,
        title: "Campaign Setup (Lemlist)",
        detail: "Configure sending limits (start low), schedule (business hours), and inbox rotation.",
        checklist: ["Sending limits set", "Schedule configured", "Inboxes assigned"],
      },
      {
        id: 5,
        title: "Internal Validation",
        detail: "Review copy, personalization, links, and tone internally before client.",
        checklist: ["Copy reviewed", "Links checked", "Tone approved", "Feedback applied"],
      },
      {
        id: 6,
        title: "Client Validation",
        detail: "Send draft to client and obtain explicit written approval.",
        rules: ["DO NOT launch without client approval — non-negotiable"],
        checklist: ["Draft sent to client", "Approval received"],
      },
      {
        id: 7,
        title: "Final Pre-Launch Check",
        detail: "Final verification: leads imported correctly, variables working, domains still warmed.",
        checklist: ["Leads imported correctly", "Variables working", "Domains confirmed warm"],
      },
      {
        id: 8,
        title: "Launch & Monitor",
        detail: "Launch and monitor closely for first 48 hours. Watch bounce rate (<3%), reply rate, and spam signals.",
        checklist: ["Campaign launched", "48h monitoring active"],
      },
      {
        id: 9,
        title: "Ongoing Optimization",
        detail: "Daily monitoring first week. Weekly analysis. A/B test one variable at a time.",
        rules: ["Never ignore poor performance", "Never scale failing campaigns", "Double down on winners"],
        checklist: ["Daily monitoring", "Weekly analysis", "A/B tests running", "Winners identified"],
      },
    ],
    mistakes: ["Long emails", "Generic messaging", "Aggressive CTAs", "No follow-ups", "Broken variables", "Launching without approval"],
    nextStep: null,
  },
];

const statusColors = {
  "not-started": { bg: "#f9fafb", border: "#e5e7eb", label: "Not Started", dot: "#9ca3af" },
  "in-progress": { bg: "#f0fdf4", border: "#22c55e", label: "In Progress", dot: "#22c55e" },
  "blocked": { bg: "#fff5f5", border: "#ef4444", label: "Blocked", dot: "#ef4444" },
  "complete": { bg: "#eff6ff", border: "#3b82f6", label: "Complete", dot: "#3b82f6" },
};

export default function POS() {
  const [activeTab, setActiveTab] = useState("overview");
  const [selectedPipeline, setSelectedPipeline] = useState(null);
  const [pipelineStatus, setPipelineStatus] = useState({
    domain: "not-started", warmup: "not-started", icp: "not-started",
    validation: "not-started", campaign: "not-started",
  });
  const [checkedItems, setCheckedItems] = useState({});
  const [expandedStep, setExpandedStep] = useState(null);

  // Campaigns tab state
  const [campaigns, setCampaigns] = useState([
    {
      id: 1, client: "WeKount", account: "WeKount", status: "active", stage: "campaign",
      assignee: "Anthony", startDate: "2026-03-20", endDate: "2026-06-02",
      bounce: 1.2, openRate: 38, replyRate: 4.1, notes: "P1 — Évènementiel",
      emailsSent: 1240, totalLeads: 1800, leadsContacted: 1240, booked: 3, interested: 8,
    },
  ]);
  const [clientPipelineStatus, setClientPipelineStatus] = useState({});
  const [clientPipelineSelected, setClientPipelineSelected] = useState({});
  const [showAddModal, setShowAddModal] = useState(false);
  const [editingCampaign, setEditingCampaign] = useState(null);
  const [newCampaign, setNewCampaign] = useState({
    client: "", account: "", status: "active", stage: "warmup",
    assignee: "", startDate: "", endDate: "",
    bounce: "", openRate: "", replyRate: "", notes: "",
    emailsSent: "", totalLeads: "", leadsContacted: "", booked: "", interested: "",
  });
  const [campaignClientFilter, setCampaignClientFilter] = useState("all");

  const campaignStages = ["domain", "warmup", "icp", "validation", "campaign"];
  const campaignStatuses = ["active", "paused", "complete", "blocked"];
  const campaignStatusColors = {
    active: { bg: "#f0fdf4", border: "#22c55e", text: "#16a34a", dot: "#22c55e" },
    paused: { bg: "#fffbeb", border: "#f59e0b", text: "#b45309", dot: "#f59e0b" },
    complete: { bg: "#eff6ff", border: "#3b82f6", text: "#1d4ed8", dot: "#3b82f6" },
    blocked: { bg: "#fff5f5", border: "#ef4444", text: "#dc2626", dot: "#ef4444" },
  };

  const saveCampaign = () => {
    if (!newCampaign.client.trim()) return;
    if (editingCampaign !== null) {
      setCampaigns(prev => prev.map(c => c.id === editingCampaign ? { ...newCampaign, id: editingCampaign } : c));
    } else {
      setCampaigns(prev => [...prev, { ...newCampaign, id: Date.now() }]);
    }
    setNewCampaign({ client: "", account: "", status: "active", stage: "warmup", assignee: "", startDate: "", endDate: "", bounce: "", openRate: "", replyRate: "", notes: "", emailsSent: "", totalLeads: "", leadsContacted: "", booked: "", interested: "" });
    setEditingCampaign(null);
    setShowAddModal(false);
  };

  const deleteCampaign = (id) => setCampaigns(prev => prev.filter(c => c.id !== id));

  const openEdit = (c) => {
    setNewCampaign({ ...c });
    setEditingCampaign(c.id);
    setShowAddModal(true);
  };

  const toggleCheck = (key) => {
    setCheckedItems(prev => ({ ...prev, [key]: !prev[key] }));
  };

  const setStatus = (id, status) => {
    setPipelineStatus(prev => ({ ...prev, [id]: status }));
  };

  const pipeline = pipelines.find(p => p.id === selectedPipeline);

  const completedCount = Object.values(pipelineStatus).filter(s => s === "complete").length;
  const inProgressCount = Object.values(pipelineStatus).filter(s => s === "in-progress").length;

  return (
    <div style={{
      minHeight: "100vh",
      background: "#f9fafb",
      color: "#111827",
      fontFamily: "'DM Sans', sans-serif",
      fontSize: "13px",
    }}>
      {/* Top bar */}
      <div style={{
        background: "white",
        borderBottom: "1px solid #e5e7eb",
        padding: "0 24px",
        display: "flex",
        alignItems: "center",
        gap: "32px",
        height: "52px",
      }}>
        <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
          <div style={{
            width: 8, height: 8, borderRadius: "50%",
            background: "#F5761A",
          }} />
          <span style={{ color: "#F5761A", fontWeight: "bold", letterSpacing: "0.12em", fontSize: "12px" }}>
            OPS SYSTEM v1.0
          </span>
        </div>
        <div style={{ flex: 1 }} />
        <div style={{ display: "flex", gap: "4px", fontSize: "11px", color: "#9ca3af" }}>
          <span style={{ color: "#4CAF50" }}>■</span> {completedCount} COMPLETE
          <span style={{ marginLeft: 12, color: "#FFB74D" }}>■</span> {inProgressCount} ACTIVE
          <span style={{ marginLeft: 12, color: "#9ca3af" }}>■</span> {5 - completedCount - inProgressCount} PENDING
        </div>
      </div>

      {/* Nav */}
      <div style={{
        background: "#f3f4f6",
        borderBottom: "1px solid #e5e7eb",
        padding: "0 24px",
        display: "flex",
        gap: "0",
      }}>
        {["overview", "pipeline", "campaigns", "reference"].map(tab => (
          <button key={tab} onClick={() => { setActiveTab(tab); if (tab !== "pipeline") setSelectedPipeline(null); }}
            style={{
              background: "none", border: "none", cursor: "pointer",
              padding: "12px 20px",
              color: activeTab === tab ? "#F5761A" : "#9ca3af",
              borderBottom: activeTab === tab ? "2px solid #F5761A" : "2px solid transparent",
              fontFamily: "inherit", fontSize: "11px", letterSpacing: "0.1em",
              fontWeight: activeTab === tab ? "600" : "400",
              textTransform: "uppercase", transition: "all 0.15s",
            }}>
            {tab}
          </button>
        ))}
      </div>

      <div style={{ padding: "24px", maxWidth: 1100, margin: "0 auto" }}>

        {/* OVERVIEW TAB */}
        {activeTab === "overview" && (
          <div>
            <div style={{ display: "flex", alignItems: "flex-end", justifyContent: "space-between", marginBottom: 24 }}>
              <div>
                <div style={{ color: "#9ca3af", fontSize: "11px", letterSpacing: "0.1em", marginBottom: 4 }}>OPERATIONAL OVERVIEW</div>
                <div style={{ color: "#111827", fontSize: "18px", fontWeight: "bold" }}>Account Status</div>
                <div style={{ color: "#9ca3af", marginTop: 4, fontSize: "12px" }}>
                  {[...new Set(campaigns.map(c => c.account || c.client))].length} accounts · {campaigns.filter(c => c.status === "active").length} active campaigns
                </div>
              </div>
              <button
                onClick={() => { setEditingCampaign(null); setNewCampaign({ client: "", account: "", status: "active", stage: "warmup", assignee: "", startDate: "", endDate: "", bounce: "", openRate: "", replyRate: "", notes: "", emailsSent: "", totalLeads: "", leadsContacted: "", booked: "", interested: "" }); setShowAddModal(true); }}
                style={{
                  background: "#F5761A", color: "white", border: "none",
                  borderRadius: 7, padding: "9px 16px", cursor: "pointer",
                  fontFamily: "inherit", fontSize: "12px", fontWeight: "600",
                }}
              >
                + Add Campaign
              </button>
            </div>

            {campaigns.length === 0 ? (
              <div style={{
                background: "white", border: "1px dashed #e5e7eb", borderRadius: 10,
                padding: "48px 24px", textAlign: "center",
              }}>
                <div style={{ fontSize: 32, marginBottom: 10 }}>📋</div>
                <div style={{ color: "#374151", fontWeight: "600", marginBottom: 4 }}>No accounts yet</div>
                <div style={{ color: "#9ca3af", fontSize: "12px" }}>Click "Add Campaign" to get started</div>
              </div>
            ) : (() => {
              const accountNames = [...new Set(campaigns.map(c => c.account || c.client))];
              return (
                <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
                  {accountNames.map(accountName => {
                    const accountCampaigns = campaigns.filter(c => (c.account || c.client) === accountName);
                    const activeCampaigns = accountCampaigns.filter(c => c.status === "active");
                    const totalSent = accountCampaigns.reduce((sum, c) => sum + (parseFloat(c.emailsSent) || 0), 0);
                    const totalLeads = accountCampaigns.reduce((sum, c) => sum + (parseFloat(c.totalLeads) || 0), 0);
                    const totalContacted = accountCampaigns.reduce((sum, c) => sum + (parseFloat(c.leadsContacted) || 0), 0);
                    const leadsRemaining = totalLeads - totalContacted;
                    const totalBooked = accountCampaigns.reduce((sum, c) => sum + (parseFloat(c.booked) || 0), 0);
                    const totalInterested = accountCampaigns.reduce((sum, c) => sum + (parseFloat(c.interested) || 0), 0);
                    const sentCampaigns = accountCampaigns.filter(c => parseFloat(c.emailsSent) > 0);
                    const avgOpen = sentCampaigns.length > 0 ? sentCampaigns.reduce((s, c) => s + (parseFloat(c.openRate) || 0), 0) / sentCampaigns.length : null;
                    const avgReply = sentCampaigns.length > 0 ? sentCampaigns.reduce((s, c) => s + (parseFloat(c.replyRate) || 0), 0) / sentCampaigns.length : null;
                    const avgBounce = sentCampaigns.length > 0 ? sentCampaigns.reduce((s, c) => s + (parseFloat(c.bounce) || 0), 0) / sentCampaigns.length : null;

                    return (
                      <div key={accountName} style={{ background: "white", border: "1px solid #e5e7eb", borderRadius: 12, overflow: "hidden" }}>
                        {/* Account header */}
                        <div style={{
                          padding: "16px 20px", borderBottom: "1px solid #f3f4f6",
                          display: "flex", alignItems: "center", justifyContent: "space-between",
                        }}>
                          <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
                            <div style={{
                              width: 40, height: 40, borderRadius: 10, background: "#F5761A",
                              display: "flex", alignItems: "center", justifyContent: "center",
                              fontSize: "16px", fontWeight: "800", color: "white",
                            }}>
                              {accountName.charAt(0).toUpperCase()}
                            </div>
                            <div>
                              <div style={{ fontWeight: "700", fontSize: "16px", color: "#111827" }}>{accountName}</div>
                              <div style={{ fontSize: "11px", color: "#9ca3af", marginTop: 1 }}>
                                {accountCampaigns.length} campaign{accountCampaigns.length !== 1 ? "s" : ""}
                                {activeCampaigns.length > 0 && <span style={{ color: "#16a34a" }}> · {activeCampaigns.length} active</span>}
                              </div>
                            </div>
                          </div>
                          <div style={{ display: "flex", gap: 5, flexWrap: "wrap", justifyContent: "flex-end", maxWidth: 400 }}>
                            {accountCampaigns.map(c => {
                              const sc = campaignStatusColors[c.status] || campaignStatusColors.active;
                              return (
                                <div key={c.id} style={{
                                  background: sc.bg, border: `1px solid ${sc.border}`,
                                  borderRadius: 5, padding: "3px 9px",
                                  fontSize: "10px", color: sc.text, fontWeight: "600",
                                }}>
                                  {c.notes || c.client} · <span style={{ textTransform: "capitalize" }}>{c.status}</span>
                                </div>
                              );
                            })}
                          </div>
                        </div>

                        {/* Aggregate KPI stats */}
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
                              <div key={label} style={{
                                background: "#f9fafb", borderRadius: 8, padding: "10px 8px",
                                textAlign: "center", border: "1px solid #f3f4f6",
                              }}>
                                <div style={{
                                  fontSize: "17px", fontWeight: "700",
                                  fontFamily: "'DM Mono', monospace",
                                  color: warn ? "#ef4444" : good ? "#16a34a" : highlight ? "#F5761A" : "#111827",
                                }}>{value}</div>
                                <div style={{ fontSize: "10px", color: "#9ca3af", marginTop: 2 }}>{label}</div>
                              </div>
                            ))}
                          </div>

                          {/* Campaign rows */}
                          <div style={{ fontSize: "10px", color: "#9ca3af", letterSpacing: "0.08em", marginBottom: 7 }}>CAMPAIGNS</div>
                          <div style={{ display: "flex", flexDirection: "column", gap: 5 }}>
                            {accountCampaigns.map(c => {
                              const csc = campaignStatusColors[c.status] || campaignStatusColors.active;
                              const stageObj = pipelines.find(p => p.id === c.stage);
                              return (
                                <div key={c.id} style={{
                                  display: "flex", alignItems: "center", gap: 10,
                                  background: "#fafafa", borderRadius: 7, padding: "8px 12px",
                                  border: "1px solid #f3f4f6",
                                }}>
                                  <div style={{ width: 7, height: 7, borderRadius: "50%", flexShrink: 0, background: csc.dot }} />
                                  <div style={{ flex: 1, minWidth: 0 }}>
                                    <span style={{ fontWeight: "600", fontSize: "12px", color: "#111827" }}>{c.notes || "—"}</span>
                                    {c.assignee && <span style={{ fontSize: "11px", color: "#9ca3af", marginLeft: 8 }}>👤 {c.assignee}</span>}
                                    {c.startDate && <span style={{ fontSize: "11px", color: "#9ca3af", marginLeft: 8 }}>📅 {c.startDate}{c.endDate ? ` → ${c.endDate}` : ""}</span>}
                                  </div>
                                  {stageObj && (
                                    <div style={{
                                      background: stageObj.color + "15", border: `1px solid ${stageObj.color}33`,
                                      borderRadius: 5, padding: "2px 8px",
                                      fontSize: "10px", color: stageObj.color, fontWeight: "600", whiteSpace: "nowrap",
                                    }}>
                                      {stageObj.icon} {stageObj.label}
                                    </div>
                                  )}
                                  <div style={{ display: "flex", gap: 8, flexShrink: 0 }}>
                                    {c.emailsSent !== "" && <span style={{ fontFamily: "'DM Mono', monospace", fontSize: "11px", color: "#374151" }}>{Number(c.emailsSent).toLocaleString()} sent</span>}
                                    {c.openRate !== "" && <span style={{ fontFamily: "'DM Mono', monospace", fontSize: "11px", color: parseFloat(c.openRate) >= 35 ? "#16a34a" : parseFloat(c.openRate) < 20 ? "#ef4444" : "#374151" }}>{c.openRate}% open</span>}
                                    {c.replyRate !== "" && <span style={{ fontFamily: "'DM Mono', monospace", fontSize: "11px", color: parseFloat(c.replyRate) >= 5 ? "#16a34a" : parseFloat(c.replyRate) < 2 ? "#ef4444" : "#374151" }}>{c.replyRate}% reply</span>}
                                  </div>
                                  <button onClick={() => openEdit(c)} style={{
                                    background: "none", border: "1px solid #e5e7eb", borderRadius: 5,
                                    padding: "3px 8px", cursor: "pointer", fontSize: "10px",
                                    color: "#6b7280", fontFamily: "inherit", flexShrink: 0,
                                  }}>Edit</button>
                                </div>
                              );
                            })}
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

        {/* PIPELINE TAB */}
        {activeTab === "pipeline" && (
          <div>
            <div style={{ display: "flex", alignItems: "flex-end", justifyContent: "space-between", marginBottom: 24 }}>
              <div>
                <div style={{ color: "#9ca3af", fontSize: "11px", letterSpacing: "0.1em", marginBottom: 4 }}>PIPELINE</div>
                <div style={{ color: "#111827", fontSize: "18px", fontWeight: "bold" }}>Client Checklists</div>
                <div style={{ color: "#9ca3af", marginTop: 4, fontSize: "12px" }}>
                  Step-by-step pipeline checklists per client campaign.
                </div>
              </div>
              <button
                onClick={() => { setEditingCampaign(null); setNewCampaign({ client: "", account: "", status: "active", stage: "warmup", assignee: "", startDate: "", endDate: "", bounce: "", openRate: "", replyRate: "", notes: "", emailsSent: "", totalLeads: "", leadsContacted: "", booked: "", interested: "" }); setShowAddModal(true); }}
                style={{
                  background: "#F5761A", color: "white", border: "none",
                  borderRadius: 7, padding: "9px 16px", cursor: "pointer",
                  fontFamily: "inherit", fontSize: "12px", fontWeight: "600",
                }}
              >
                + Add Client
              </button>
            </div>

            {campaigns.length === 0 ? (
              <div style={{
                background: "white", border: "1px dashed #e5e7eb", borderRadius: 10,
                padding: "48px 24px", textAlign: "center",
              }}>
                <div style={{ fontSize: 32, marginBottom: 10 }}>📋</div>
                <div style={{ color: "#374151", fontWeight: "600", marginBottom: 4 }}>No clients yet</div>
                <div style={{ color: "#9ca3af", fontSize: "12px" }}>Click "Add Client" to get started</div>
              </div>
            ) : (
              <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
                {campaigns.map(c => {
                  const csc = campaignStatusColors[c.status] || campaignStatusColors.active;
                  const expandedKey = `pipelineClient-${c.id}`;
                  const isClientExpanded = expandedStep === expandedKey || campaigns.length === 1;
                  const activePipelineId = clientPipelineSelected[c.id] || c.stage || pipelines[0].id;
                  const activePipeline = pipelines.find(p => p.id === activePipelineId);

                  return (
                    <div key={c.id} style={{
                      background: "white", border: "1px solid #e5e7eb",
                      borderRadius: 12, overflow: "hidden",
                    }}>
                      {/* Client header — click to collapse/expand */}
                      <div
                        onClick={() => setExpandedStep(isClientExpanded ? null : expandedKey)}
                        style={{
                          padding: "14px 18px", cursor: "pointer",
                          borderBottom: isClientExpanded ? "1px solid #f3f4f6" : "none",
                          display: "flex", alignItems: "center", justifyContent: "space-between",
                        }}
                      >
                        <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
                          <div style={{
                            width: 34, height: 34, borderRadius: 8,
                            background: "#F5761A22", border: "1px solid #F5761A44",
                            display: "flex", alignItems: "center", justifyContent: "center",
                            fontSize: "14px", fontWeight: "800", color: "#F5761A",
                          }}>
                            {c.client.charAt(0).toUpperCase()}
                          </div>
                          <div>
                            <div style={{ fontWeight: "700", fontSize: "15px", color: "#111827" }}>{c.client}</div>
                            <div style={{ fontSize: "11px", color: "#9ca3af", marginTop: 1 }}>
                              {c.notes && <span>{c.notes} · </span>}
                              {c.assignee && <span>👤 {c.assignee}</span>}
                            </div>
                          </div>
                          <div style={{
                            background: csc.bg, border: `1px solid ${csc.border}`,
                            borderRadius: 99, padding: "3px 10px",
                            fontSize: "10px", color: csc.text, fontWeight: "600", textTransform: "capitalize",
                          }}>{c.status}</div>
                        </div>
                        <span style={{ color: "#9ca3af", fontSize: "12px" }}>{isClientExpanded ? "▲" : "▼"}</span>
                      </div>

                      {isClientExpanded && (
                        <div style={{ padding: "0 18px 18px" }}>
                          {/* Stage selector tabs */}
                          <div style={{
                            display: "flex", gap: 4, paddingTop: 14, paddingBottom: 14,
                            overflowX: "auto",
                          }}>
                            {pipelines.map(p => {
                              const isActive = activePipelineId === p.id;
                              const clientStages = clientPipelineStatus[c.id] || {};
                              const stageStatus = clientStages[p.id] || "not-started";
                              const ssc = statusColors[stageStatus];
                              return (
                                <button
                                  key={p.id}
                                  onClick={() => setClientPipelineSelected(prev => ({ ...prev, [c.id]: p.id }))}
                                  style={{
                                    padding: "6px 12px", borderRadius: 7, cursor: "pointer",
                                    border: isActive ? `1px solid ${p.color}` : "1px solid #e5e7eb",
                                    background: isActive ? p.color + "12" : "#f9fafb",
                                    fontFamily: "inherit", fontSize: "11px", fontWeight: isActive ? "600" : "400",
                                    color: isActive ? p.color : "#6b7280",
                                    display: "flex", alignItems: "center", gap: 6,
                                    whiteSpace: "nowrap", flexShrink: 0,
                                    transition: "all 0.15s",
                                  }}
                                >
                                  <span>{p.icon}</span>
                                  <span>{p.label}</span>
                                  <div style={{
                                    width: 6, height: 6, borderRadius: "50%",
                                    background: ssc.dot, flexShrink: 0,
                                  }} />
                                </button>
                              );
                            })}
                          </div>

                          {/* Active stage detail */}
                          {activePipeline && (
                            <div>
                              {/* Objective */}
                              <div style={{
                                background: "#f9fafb", border: `1px solid ${activePipeline.color}33`,
                                borderLeft: `3px solid ${activePipeline.color}`,
                                borderRadius: 8, padding: "10px 14px", marginBottom: 14,
                                fontSize: "12px", color: "#6b7280",
                              }}>
                                <span style={{ color: activePipeline.color, fontSize: "10px", letterSpacing: "0.1em" }}>OBJECTIVE — </span>
                                {activePipeline.objective}
                              </div>

                              {/* Tools */}
                              {activePipeline.tools && (
                                <div style={{ display: "flex", gap: 6, marginBottom: 14, flexWrap: "wrap" }}>
                                  {activePipeline.tools.map(t => (
                                    <div key={t} style={{
                                      background: "#f3f4f6", border: "1px solid #e5e7eb",
                                      borderRadius: 4, padding: "4px 10px", fontSize: "11px", color: "#6b7280",
                                    }}>🔧 {t}</div>
                                  ))}
                                </div>
                              )}

                              {/* Steps */}
                              <div style={{ display: "flex", flexDirection: "column", gap: 6 }}>
                                {activePipeline.steps.map((step, idx) => {
                                  const key = `${c.id}-${activePipeline.id}-${step.id}`;
                                  const isExpanded = expandedStep === key;
                                  const totalChecks = step.checklist?.length || 0;
                                  const doneChecks = step.checklist?.filter((_, ci) => checkedItems[`${key}-${ci}`]).length || 0;
                                  const allDone = totalChecks > 0 && doneChecks === totalChecks;

                                  return (
                                    <div key={key} style={{
                                      background: allDone ? "#f0fdf4" : "white",
                                      border: `1px solid ${allDone ? "#bbf7d0" : step.mandatory ? activePipeline.color + "33" : "#e5e7eb"}`,
                                      borderLeft: `3px solid ${allDone ? "#22c55e" : step.mandatory ? activePipeline.color : "#e5e7eb"}`,
                                      borderRadius: 8, overflow: "hidden",
                                    }}>
                                      <div
                                        onClick={() => setExpandedStep(isExpanded ? null : key)}
                                        style={{ padding: "11px 14px", cursor: "pointer", display: "flex", alignItems: "center", gap: 10 }}
                                      >
                                        <div style={{
                                          width: 22, height: 22, borderRadius: "50%", flexShrink: 0,
                                          background: allDone ? "#22c55e" : "#f3f4f6",
                                          border: `1px solid ${allDone ? "#22c55e" : "#d1d5db"}`,
                                          display: "flex", alignItems: "center", justifyContent: "center",
                                          fontSize: "10px", color: allDone ? "white" : "#9ca3af", fontWeight: "bold",
                                        }}>
                                          {allDone ? "✓" : (idx + 1)}
                                        </div>
                                        <div style={{ flex: 1 }}>
                                          <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
                                            <span style={{ color: allDone ? "#16a34a" : "#111827", fontWeight: "600", fontSize: "13px" }}>
                                              {step.title}
                                            </span>
                                            {step.mandatory && (
                                              <span style={{
                                                background: activePipeline.color + "22", color: activePipeline.color,
                                                fontSize: "9px", padding: "1px 5px", borderRadius: 3, letterSpacing: "0.08em",
                                              }}>MANDATORY</span>
                                            )}
                                          </div>
                                          {!isExpanded && <div style={{ color: "#9ca3af", fontSize: "11px", marginTop: 2 }}>{step.detail}</div>}
                                        </div>
                                        <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
                                          {totalChecks > 0 && (
                                            <span style={{ color: allDone ? "#16a34a" : "#9ca3af", fontSize: "10px" }}>{doneChecks}/{totalChecks}</span>
                                          )}
                                          <span style={{ color: "#9ca3af", fontSize: "12px" }}>{isExpanded ? "▲" : "▼"}</span>
                                        </div>
                                      </div>

                                      {isExpanded && (
                                        <div style={{ padding: "0 14px 14px 46px", borderTop: "1px solid #f3f4f6" }}>
                                          <div style={{ paddingTop: 12, color: "#6b7280", fontSize: "12px", marginBottom: 12, lineHeight: 1.6 }}>
                                            {step.detail}
                                          </div>
                                          {step.rules && (
                                            <div style={{ marginBottom: 12 }}>
                                              <div style={{ color: "#9ca3af", fontSize: "10px", letterSpacing: "0.1em", marginBottom: 6 }}>RULES</div>
                                              {step.rules.map((r, i) => (
                                                <div key={i} style={{ color: "#6b7280", fontSize: "11px", marginBottom: 3, paddingLeft: 8, borderLeft: "2px solid #e5e7eb" }}>{r}</div>
                                              ))}
                                            </div>
                                          )}
                                          {step.checklist && (
                                            <div>
                                              <div style={{ color: "#9ca3af", fontSize: "10px", letterSpacing: "0.1em", marginBottom: 6 }}>CHECKLIST</div>
                                              {step.checklist.map((item, ci) => {
                                                const ck = `${key}-${ci}`;
                                                const checked = !!checkedItems[ck];
                                                return (
                                                  <div key={ci} onClick={() => toggleCheck(ck)}
                                                    style={{ display: "flex", alignItems: "center", gap: 8, padding: "5px 0", cursor: "pointer" }}>
                                                    <div style={{
                                                      width: 14, height: 14, borderRadius: 3, flexShrink: 0,
                                                      background: checked ? "#22c55e" : "white",
                                                      border: `1px solid ${checked ? "#22c55e" : "#d1d5db"}`,
                                                      display: "flex", alignItems: "center", justifyContent: "center",
                                                      fontSize: "9px", color: "white",
                                                    }}>
                                                      {checked ? "✓" : ""}
                                                    </div>
                                                    <span style={{ color: checked ? "#16a34a" : "#374151", fontSize: "12px", textDecoration: checked ? "line-through" : "none" }}>
                                                      {item}
                                                    </span>
                                                  </div>
                                                );
                                              })}
                                            </div>
                                          )}
                                        </div>
                                      )}
                                    </div>
                                  );
                                })}
                              </div>

                              {/* Common mistakes */}
                              <div style={{
                                background: "#fff5f5", border: "1px solid #fecaca",
                                borderRadius: 8, padding: "12px 14px", marginTop: 14,
                              }}>
                                <div style={{ color: "#ef4444", fontSize: "10px", letterSpacing: "0.1em", marginBottom: 8 }}>⚠ COMMON MISTAKES</div>
                                <div style={{ display: "flex", gap: 6, flexWrap: "wrap" }}>
                                  {activePipeline.mistakes.map((m, i) => (
                                    <span key={i} style={{
                                      background: "#fee2e2", border: "1px solid #fecaca",
                                      color: "#dc2626", fontSize: "11px", padding: "3px 8px", borderRadius: 4,
                                    }}>{m}</span>
                                  ))}
                                </div>
                              </div>

                              {/* Next stage */}
                              {activePipeline.nextStep && (
                                <div style={{ marginTop: 12, textAlign: "right" }}>
                                  <button
                                    onClick={() => setClientPipelineSelected(prev => ({ ...prev, [c.id]: activePipeline.nextStep }))}
                                    style={{
                                      background: "white",
                                      border: `1px solid ${pipelines.find(p => p.id === activePipeline.nextStep)?.color}`,
                                      color: pipelines.find(p => p.id === activePipeline.nextStep)?.color,
                                      padding: "7px 14px", borderRadius: 6, cursor: "pointer",
                                      fontFamily: "inherit", fontSize: "11px", letterSpacing: "0.06em",
                                    }}>
                                    Next: {pipelines.find(p => p.id === activePipeline.nextStep)?.label} →
                                  </button>
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

        {/* CAMPAIGNS TAB */}
        {activeTab === "campaigns" && (
          <div>
            {/* Header row */}
            <div style={{ display: "flex", alignItems: "flex-end", justifyContent: "space-between", marginBottom: 16 }}>
              <div>
                <div style={{ color: "#9ca3af", fontSize: "11px", letterSpacing: "0.1em", marginBottom: 4 }}>ONGOING CAMPAIGNS</div>
                <div style={{ color: "#111827", fontSize: "18px", fontWeight: "bold" }}>Campaign Tracker</div>
                <div style={{ color: "#9ca3af", fontSize: "12px", marginTop: 4 }}>
                  {campaigns.filter(c => c.status === "active").length} active · {campaigns.length} total
                </div>
              </div>
              <button
                onClick={() => { setEditingCampaign(null); setNewCampaign({ client: "", account: "", status: "active", stage: "warmup", assignee: "", startDate: "", endDate: "", bounce: "", openRate: "", replyRate: "", notes: "", emailsSent: "", totalLeads: "", leadsContacted: "", booked: "", interested: "" }); setShowAddModal(true); }}
                style={{
                  background: "#F5761A", color: "white", border: "none",
                  borderRadius: 7, padding: "9px 16px", cursor: "pointer",
                  fontFamily: "inherit", fontSize: "12px", fontWeight: "600",
                  display: "flex", alignItems: "center", gap: 6,
                }}
              >
                + Add Campaign
              </button>
            </div>

            {/* Client filter tabs */}
            {campaigns.length > 0 && (() => {
              const accountNames = [...new Set(campaigns.map(c => c.account || c.client))];
              return (
                <div style={{ display: "flex", gap: 0, marginBottom: 16, background: "white", border: "1px solid #e5e7eb", borderRadius: 8, overflow: "hidden" }}>
                  {["all", ...accountNames].map(name => {
                    const isActive = campaignClientFilter === name;
                    const count = name === "all" ? campaigns.length : campaigns.filter(c => (c.account || c.client) === name).length;
                    return (
                      <button key={name} onClick={() => setCampaignClientFilter(name)} style={{
                        background: isActive ? "#F5761A" : "white",
                        color: isActive ? "white" : "#6b7280",
                        border: "none", borderRight: "1px solid #e5e7eb",
                        padding: "9px 16px", cursor: "pointer",
                        fontFamily: "inherit", fontSize: "11px",
                        fontWeight: isActive ? "600" : "400",
                        letterSpacing: "0.04em",
                        display: "flex", alignItems: "center", gap: 6,
                        transition: "all 0.1s",
                      }}>
                        {name === "all" ? "All Campaigns" : name}
                        <span style={{
                          background: isActive ? "rgba(255,255,255,0.25)" : "#f3f4f6",
                          color: isActive ? "white" : "#9ca3af",
                          borderRadius: 99, padding: "1px 7px", fontSize: "10px", fontWeight: "600",
                        }}>{count}</span>
                      </button>
                    );
                  })}
                </div>
              );
            })()}

            {/* Summary chips */}
            <div style={{ display: "flex", gap: 8, marginBottom: 16, flexWrap: "wrap" }}>
              {campaignStatuses.map(st => {
                const filtered = campaigns.filter(c => {
                  const matchAccount = campaignClientFilter === "all" || (c.account || c.client) === campaignClientFilter;
                  return matchAccount && c.status === st;
                });
                if (filtered.length === 0) return null;
                const sc = campaignStatusColors[st];
                return (
                  <div key={st} style={{
                    background: sc.bg, border: `1px solid ${sc.border}`,
                    borderRadius: 99, padding: "4px 12px",
                    display: "flex", alignItems: "center", gap: 6,
                  }}>
                    <div style={{ width: 6, height: 6, borderRadius: "50%", background: sc.dot }} />
                    <span style={{ fontSize: "11px", color: sc.text, fontWeight: "600", textTransform: "capitalize" }}>{st}</span>
                    <span style={{ fontSize: "11px", color: sc.text, opacity: 0.7 }}>{filtered.length}</span>
                  </div>
                );
              })}
            </div>

            {/* Campaign cards */}
            {campaigns.length === 0 ? (
              <div style={{
                background: "white", border: "1px dashed #e5e7eb", borderRadius: 10,
                padding: "48px 24px", textAlign: "center",
              }}>
                <div style={{ fontSize: 32, marginBottom: 10 }}>📋</div>
                <div style={{ color: "#374151", fontWeight: "600", marginBottom: 4 }}>No campaigns yet</div>
                <div style={{ color: "#9ca3af", fontSize: "12px" }}>Click "Add Campaign" to get started</div>
              </div>
            ) : (
              <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
                {campaigns.filter(c => campaignClientFilter === "all" || (c.account || c.client) === campaignClientFilter).map(c => {
                  const sc = campaignStatusColors[c.status] || campaignStatusColors.active;
                  const stageObj = pipelines.find(p => p.id === c.stage);
                  const bounceVal = parseFloat(c.bounce);
                  const openVal = parseFloat(c.openRate);
                  const replyVal = parseFloat(c.replyRate);
                  const sentVal = parseFloat(c.emailsSent) || 0;
                  const totalLeadsVal = parseFloat(c.totalLeads) || 0;
                  const contactedVal = parseFloat(c.leadsContacted) || 0;
                  const remainingVal = totalLeadsVal - contactedVal;
                  const pctContacted = totalLeadsVal > 0 ? Math.round((contactedVal / totalLeadsVal) * 100) : null;
                  const accountLabel = c.account && c.account !== c.client ? c.account : null;
                  return (
                    <div key={c.id} style={{
                      background: "white", border: "1px solid #e5e7eb",
                      borderLeft: `3px solid ${sc.dot}`,
                      borderRadius: 10, padding: "16px 18px",
                    }}>
                      {/* Top row */}
                      <div style={{ display: "flex", alignItems: "flex-start", justifyContent: "space-between", marginBottom: 10 }}>
                        <div style={{ display: "flex", alignItems: "center", gap: 10, flexWrap: "wrap" }}>
                          <div>
                            <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
                              <span style={{ fontWeight: "700", fontSize: "15px", color: "#111827" }}>{c.client}</span>
                              {accountLabel && (
                                <span style={{
                                  background: "#F5761A15", border: "1px solid #F5761A33",
                                  borderRadius: 5, padding: "1px 7px",
                                  fontSize: "10px", color: "#F5761A", fontWeight: "600",
                                }}>
                                  {accountLabel}
                                </span>
                              )}
                            </div>
                            {c.notes && <div style={{ fontSize: "11px", color: "#9ca3af", marginTop: 2 }}>{c.notes}</div>}
                          </div>
                          <div style={{
                            background: sc.bg, border: `1px solid ${sc.border}`,
                            borderRadius: 99, padding: "2px 10px",
                            fontSize: "10px", color: sc.text, fontWeight: "600", textTransform: "capitalize",
                          }}>{c.status}</div>
                          {stageObj && (
                            <div style={{
                              background: stageObj.color + "15", border: `1px solid ${stageObj.color}33`,
                              borderRadius: 99, padding: "2px 10px",
                              fontSize: "10px", color: stageObj.color, fontWeight: "500",
                            }}>
                              {stageObj.icon} {stageObj.label}
                            </div>
                          )}
                        </div>
                        <div style={{ display: "flex", gap: 6, flexShrink: 0 }}>
                          <button onClick={() => openEdit(c)} style={{
                            background: "none", border: "1px solid #e5e7eb", borderRadius: 5,
                            padding: "4px 10px", cursor: "pointer", fontSize: "11px",
                            color: "#6b7280", fontFamily: "inherit",
                          }}>Edit</button>
                          <button onClick={() => deleteCampaign(c.id)} style={{
                            background: "none", border: "1px solid #fecaca", borderRadius: 5,
                            padding: "4px 10px", cursor: "pointer", fontSize: "11px",
                            color: "#ef4444", fontFamily: "inherit",
                          }}>✕</button>
                        </div>
                      </div>

                      {/* Meta row */}
                      <div style={{ display: "flex", gap: 16, marginBottom: 12, flexWrap: "wrap" }}>
                        {c.assignee && (
                          <div style={{ display: "flex", alignItems: "center", gap: 6 }}>
                            <div style={{
                              width: 22, height: 22, borderRadius: "50%",
                              background: "#F5761A22", border: "1px solid #F5761A55",
                              display: "flex", alignItems: "center", justifyContent: "center",
                              fontSize: "10px", fontWeight: "700", color: "#F5761A",
                            }}>
                              {c.assignee.charAt(0).toUpperCase()}
                            </div>
                            <span style={{ fontSize: "12px", color: "#374151" }}>{c.assignee}</span>
                          </div>
                        )}
                        {c.startDate && (
                          <div style={{ fontSize: "12px", color: "#6b7280", display: "flex", alignItems: "center", gap: 4 }}>
                            <span>📅</span>
                            {c.startDate}{c.endDate ? ` → ${c.endDate}` : ""}
                          </div>
                        )}
                      </div>

                      {/* Expanded stats grid */}
                      {(c.bounce !== "" || c.openRate !== "" || c.replyRate !== "" || c.emailsSent !== "" || c.totalLeads !== "" || c.booked !== "") && (
                        <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr) repeat(3, 1fr)", gap: 8, background: "#f9fafb", borderRadius: 8, padding: "12px" }}>
                          {/* Volume group */}
                          {[
                            {
                              label: "Emails Sent", value: sentVal > 0 ? sentVal.toLocaleString() : null, unit: "",
                              sub: totalLeadsVal > 0 && pctContacted !== null ? `${pctContacted}% of list` : null,
                              color: "#374151",
                            },
                            {
                              label: "Total Leads", value: totalLeadsVal > 0 ? totalLeadsVal.toLocaleString() : null, unit: "",
                              sub: "in list", color: "#374151",
                            },
                            {
                              label: "Leads Left", value: totalLeadsVal > 0 ? remainingVal.toLocaleString() : null, unit: "",
                              sub: "to contact",
                              color: remainingVal > 0 ? "#F5761A" : "#16a34a",
                            },
                            {
                              label: "Booked / Int.", value: (parseFloat(c.booked) > 0 || parseFloat(c.interested) > 0)
                                ? `${parseFloat(c.booked) || 0} / ${parseFloat(c.interested) || 0}` : null, unit: "",
                              sub: "booked / interested", color: parseFloat(c.booked) > 0 ? "#16a34a" : "#374151",
                            },
                            {
                              label: "Bounce Rate", value: c.bounce !== "" ? c.bounce : null, unit: "%",
                              sub: bounceVal > 3 ? "⚠ Review" : bounceVal <= 1.5 ? "✓ Good" : "—",
                              warn: bounceVal > 3, good: bounceVal <= 1.5,
                            },
                            {
                              label: "Open Rate", value: c.openRate !== "" ? c.openRate : null, unit: "%",
                              sub: openVal < 20 ? "⚠ Low" : openVal >= 35 ? "✓ Good" : "—",
                              warn: openVal < 20, good: openVal >= 35,
                            },
                            {
                              label: "Reply Rate", value: c.replyRate !== "" ? c.replyRate : null, unit: "%",
                              sub: replyVal < 2 ? "⚠ Low" : replyVal >= 5 ? "✓ Good" : "—",
                              warn: replyVal < 2, good: replyVal >= 5,
                            },
                          ].filter(m => m.value !== null).map(({ label, value, unit, sub, warn, good, color }) => (
                            <div key={label} style={{ textAlign: "center" }}>
                              <div style={{
                                fontSize: "17px", fontWeight: "700",
                                fontFamily: "'DM Mono', monospace",
                                color: warn ? "#ef4444" : good ? "#16a34a" : (color || "#374151"),
                              }}>
                                {value}{unit}
                              </div>
                              <div style={{ fontSize: "10px", color: "#9ca3af", marginTop: 1 }}>{label}</div>
                              {sub && <div style={{ fontSize: "9px", marginTop: 1, color: warn ? "#ef4444" : good ? "#16a34a" : "#b0b8c4" }}>{sub}</div>}
                            </div>
                          ))}
                        </div>
                      )}

                      {/* Progress bar if we have lead data */}
                      {totalLeadsVal > 0 && contactedVal > 0 && (
                        <div style={{ marginTop: 10 }}>
                          <div style={{ display: "flex", justifyContent: "space-between", marginBottom: 3 }}>
                            <span style={{ fontSize: "10px", color: "#9ca3af" }}>List progress</span>
                            <span style={{ fontSize: "10px", color: "#9ca3af" }}>{contactedVal.toLocaleString()} / {totalLeadsVal.toLocaleString()}</span>
                          </div>
                          <div style={{ height: 4, background: "#f3f4f6", borderRadius: 2, overflow: "hidden" }}>
                            <div style={{
                              height: "100%", width: `${Math.min(pctContacted, 100)}%`,
                              background: "#F5761A", borderRadius: 2,
                              transition: "width 0.3s",
                            }} />
                          </div>
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            )}

            {/* Add / Edit Modal */}
            {showAddModal && (
              <div style={{
                position: "fixed", inset: 0, background: "rgba(0,0,0,0.3)",
                display: "flex", alignItems: "center", justifyContent: "center", zIndex: 1000,
              }}>
                <div style={{
                  background: "white", borderRadius: 12, padding: 24, width: 480,
                  maxHeight: "90vh", overflowY: "auto",
                  boxShadow: "0 20px 60px rgba(0,0,0,0.15)",
                }}>
                  <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 20 }}>
                    <span style={{ fontWeight: "700", fontSize: "15px", color: "#111827" }}>
                      {editingCampaign !== null ? "Edit Campaign" : "Add Campaign"}
                    </span>
                    <button onClick={() => setShowAddModal(false)} style={{ background: "none", border: "none", cursor: "pointer", fontSize: 18, color: "#9ca3af" }}>✕</button>
                  </div>

                  {[
                    { label: "Client / Campaign Name *", key: "client", type: "text", placeholder: "e.g. P1 — Évènementiel" },
                    { label: "Account (Client Name)", key: "account", type: "text", placeholder: "e.g. WeKount" },
                    { label: "Assignee", key: "assignee", type: "text", placeholder: "e.g. Anthony" },
                    { label: "Notes", key: "notes", type: "text", placeholder: "Additional notes" },
                    { label: "Start Date", key: "startDate", type: "date" },
                    { label: "End Date", key: "endDate", type: "date" },
                  ].map(({ label, key, type, placeholder }) => (
                    <div key={key} style={{ marginBottom: 12 }}>
                      <label style={{ display: "block", fontSize: "11px", color: "#6b7280", marginBottom: 4, fontWeight: "500", letterSpacing: "0.05em" }}>{label.toUpperCase()}</label>
                      <input
                        type={type}
                        placeholder={placeholder}
                        value={newCampaign[key]}
                        onChange={e => setNewCampaign(prev => ({ ...prev, [key]: e.target.value }))}
                        style={{
                          width: "100%", padding: "8px 10px", borderRadius: 6,
                          border: "1px solid #e5e7eb", fontFamily: "inherit",
                          fontSize: "13px", color: "#111827", outline: "none",
                          boxSizing: "border-box",
                        }}
                      />
                    </div>
                  ))}

                  <div style={{ fontSize: "11px", color: "#F5761A", letterSpacing: "0.08em", fontWeight: "600", marginBottom: 10, marginTop: 4 }}>VOLUME</div>
                  <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: 10, marginBottom: 12 }}>
                    {[
                      { label: "Total Leads", key: "totalLeads", placeholder: "e.g. 1800" },
                      { label: "Leads Contacted", key: "leadsContacted", placeholder: "e.g. 1240" },
                      { label: "Emails Sent", key: "emailsSent", placeholder: "e.g. 1240" },
                    ].map(({ label, key, placeholder }) => (
                      <div key={key}>
                        <label style={{ display: "block", fontSize: "11px", color: "#6b7280", marginBottom: 4, fontWeight: "500", letterSpacing: "0.05em" }}>{label.toUpperCase()}</label>
                        <input type="number" placeholder={placeholder} value={newCampaign[key]}
                          onChange={e => setNewCampaign(prev => ({ ...prev, [key]: e.target.value }))}
                          style={{ width: "100%", padding: "8px 10px", borderRadius: 6, border: "1px solid #e5e7eb", fontFamily: "inherit", fontSize: "13px", color: "#111827", outline: "none", boxSizing: "border-box" }}
                        />
                      </div>
                    ))}
                  </div>

                  <div style={{ fontSize: "11px", color: "#F5761A", letterSpacing: "0.08em", fontWeight: "600", marginBottom: 10 }}>RESULTS</div>
                  <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 10, marginBottom: 12 }}>
                    {[
                      { label: "Booked Meetings", key: "booked", placeholder: "e.g. 3" },
                      { label: "Interested", key: "interested", placeholder: "e.g. 8" },
                    ].map(({ label, key, placeholder }) => (
                      <div key={key}>
                        <label style={{ display: "block", fontSize: "11px", color: "#6b7280", marginBottom: 4, fontWeight: "500", letterSpacing: "0.05em" }}>{label.toUpperCase()}</label>
                        <input type="number" placeholder={placeholder} value={newCampaign[key]}
                          onChange={e => setNewCampaign(prev => ({ ...prev, [key]: e.target.value }))}
                          style={{ width: "100%", padding: "8px 10px", borderRadius: 6, border: "1px solid #e5e7eb", fontFamily: "inherit", fontSize: "13px", color: "#111827", outline: "none", boxSizing: "border-box" }}
                        />
                      </div>
                    ))}
                  </div>

                  <div style={{ fontSize: "11px", color: "#F5761A", letterSpacing: "0.08em", fontWeight: "600", marginBottom: 10 }}>PERFORMANCE (%)</div>
                  <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: 10, marginBottom: 12 }}>
                    {[
                      { label: "Bounce Rate", key: "bounce", placeholder: "e.g. 1.2" },
                      { label: "Open Rate", key: "openRate", placeholder: "e.g. 38" },
                      { label: "Reply Rate", key: "replyRate", placeholder: "e.g. 4.1" },
                    ].map(({ label, key, placeholder }) => (
                      <div key={key}>
                        <label style={{ display: "block", fontSize: "11px", color: "#6b7280", marginBottom: 4, fontWeight: "500", letterSpacing: "0.05em" }}>{label.toUpperCase()}</label>
                        <input type="number" placeholder={placeholder} value={newCampaign[key]}
                          onChange={e => setNewCampaign(prev => ({ ...prev, [key]: e.target.value }))}
                          style={{ width: "100%", padding: "8px 10px", borderRadius: 6, border: "1px solid #e5e7eb", fontFamily: "inherit", fontSize: "13px", color: "#111827", outline: "none", boxSizing: "border-box" }}
                        />
                      </div>
                    ))}
                  </div>

                  <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 12, marginBottom: 12 }}>
                    <div>
                      <label style={{ display: "block", fontSize: "11px", color: "#6b7280", marginBottom: 4, fontWeight: "500", letterSpacing: "0.05em" }}>STATUS</label>
                      <select value={newCampaign.status} onChange={e => setNewCampaign(p => ({ ...p, status: e.target.value }))}
                        style={{ width: "100%", padding: "8px 10px", borderRadius: 6, border: "1px solid #e5e7eb", fontFamily: "inherit", fontSize: "13px", color: "#111827", background: "white" }}>
                        {campaignStatuses.map(s => <option key={s} value={s}>{s.charAt(0).toUpperCase() + s.slice(1)}</option>)}
                      </select>
                    </div>
                    <div>
                      <label style={{ display: "block", fontSize: "11px", color: "#6b7280", marginBottom: 4, fontWeight: "500", letterSpacing: "0.05em" }}>PIPELINE STAGE</label>
                      <select value={newCampaign.stage} onChange={e => setNewCampaign(p => ({ ...p, stage: e.target.value }))}
                        style={{ width: "100%", padding: "8px 10px", borderRadius: 6, border: "1px solid #e5e7eb", fontFamily: "inherit", fontSize: "13px", color: "#111827", background: "white" }}>
                        {campaignStages.map(s => {
                          const p = pipelines.find(p => p.id === s);
                          return <option key={s} value={s}>{p?.code} — {p?.label}</option>;
                        })}
                      </select>
                    </div>
                  </div>

                  <div style={{ display: "flex", gap: 8, marginTop: 20 }}>
                    <button onClick={() => setShowAddModal(false)} style={{
                      flex: 1, padding: "10px", border: "1px solid #e5e7eb", borderRadius: 7,
                      background: "none", cursor: "pointer", fontFamily: "inherit", fontSize: "13px", color: "#6b7280",
                    }}>Cancel</button>
                    <button onClick={saveCampaign} style={{
                      flex: 2, padding: "10px", border: "none", borderRadius: 7,
                      background: "#F5761A", cursor: "pointer", fontFamily: "inherit",
                      fontSize: "13px", fontWeight: "600", color: "white",
                    }}>
                      {editingCampaign !== null ? "Save Changes" : "Add Campaign"}
                    </button>
                  </div>
                </div>
              </div>
            )}
          </div>
        )}

        {/* REFERENCE TAB */}
        {activeTab === "reference" && (
          <div>
            <div style={{ color: "#9ca3af", fontSize: "11px", letterSpacing: "0.1em", marginBottom: 16 }}>QUICK REFERENCE</div>

            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16 }}>
              <div style={{ background: "white", border: "1px solid #e5e7eb", borderRadius: 8, padding: 16 }}>
                <div style={{ color: "#F5761A", fontSize: "10px", letterSpacing: "0.1em", marginBottom: 10 }}>PIPELINE SEQUENCE</div>
                {pipelines.map((p, i) => (
                  <div key={p.id} style={{ display: "flex", alignItems: "center", gap: "8px", marginBottom: 8 }}>
                    <span style={{ color: p.color, fontSize: "11px", minWidth: 20 }}>{p.code}</span>
                    <span style={{ fontSize: "12px" }}>{p.icon}</span>
                    <span style={{ color: "#6b7280", fontSize: "12px" }}>{p.label}</span>
                    {i < pipelines.length - 1 && <span style={{ color: "#d1d5db", marginLeft: "auto" }}>↓</span>}
                  </div>
                ))}
              </div>

              <div style={{ background: "white", border: "1px solid #e5e7eb", borderRadius: 8, padding: 16 }}>
                <div style={{ color: "#FFB74D", fontSize: "10px", letterSpacing: "0.1em", marginBottom: 10 }}>KEY TOOLS</div>
                {[
                  { tool: "Clay", use: "ICP enrichment & validation" },
                  { tool: "NeverBounce", use: "Email list verification" },
                  { tool: "Lemlist", use: "Campaign sending & sequences" },
                  { tool: "Zapmail", use: "Initial inbox warmup" },
                  { tool: "Lemwarm", use: "Ongoing warmup interactions" },
                ].map(({ tool, use }) => (
                  <div key={tool} style={{ marginBottom: 7, display: "flex", gap: "8px" }}>
                    <span style={{ color: "#FFB74D", fontSize: "12px", minWidth: 90 }}>{tool}</span>
                    <span style={{ color: "#9ca3af", fontSize: "12px" }}>{use}</span>
                  </div>
                ))}
              </div>

              <div style={{ background: "white", border: "1px solid #e5e7eb", borderRadius: 8, padding: 16 }}>
                <div style={{ color: "#80CBC4", fontSize: "10px", letterSpacing: "0.1em", marginBottom: 10 }}>CRITICAL RULES</div>
                {[
                  "Never launch without client approval",
                  "Never send to unvalidated lists",
                  "Never use the client's main domain",
                  "Never skip warmup phase",
                  "Never define ICP blindly — align with Sales",
                  "Never scale failing campaigns",
                  "Never spike sending volume suddenly",
                ].map((rule, i) => (
                  <div key={i} style={{ display: "flex", gap: "6px", marginBottom: 5 }}>
                    <span style={{ color: "#f44336", fontSize: "11px" }}>✗</span>
                    <span style={{ color: "#6b7280", fontSize: "11px" }}>{rule}</span>
                  </div>
                ))}
              </div>

              <div style={{ background: "white", border: "1px solid #e5e7eb", borderRadius: 8, padding: 16 }}>
                <div style={{ color: "#CE93D8", fontSize: "10px", letterSpacing: "0.1em", marginBottom: 10 }}>PERFORMANCE THRESHOLDS</div>
                {[
                  { metric: "Bounce Rate", target: "< 3%", note: "Pause if exceeded" },
                  { metric: "Warmup Duration", target: "2–3 weeks", note: "Do not rush" },
                  { metric: "Email Length", target: "50–120 words", note: "Per email in sequence" },
                  { metric: "Sequence Length", target: "3–5 emails", note: "Spaced 2–4 days apart" },
                  { metric: "Inboxes per Domain", target: "2–3 max", note: "Scale with domains" },
                  { metric: "Warmup Day 1–3", target: "5–10 emails/day", note: "Per inbox" },
                ].map(({ metric, target, note }) => (
                  <div key={metric} style={{ marginBottom: 8 }}>
                    <div style={{ display: "flex", justifyContent: "space-between" }}>
                      <span style={{ color: "#6b7280", fontSize: "11px" }}>{metric}</span>
                      <span style={{ color: "#CE93D8", fontSize: "11px", fontWeight: "bold" }}>{target}</span>
                    </div>
                    <div style={{ color: "#9ca3af", fontSize: "10px" }}>{note}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
