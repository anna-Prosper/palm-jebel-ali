import { isAuthed, isConfigured } from "@/lib/admin-auth";
import { eventsCollection, hasDb, leadsCollection, type EventDoc, type LeadDoc } from "@/lib/db";
import { WithId } from "mongodb";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

export const metadata = {
  title: "Admin · Palm Jebel Ali",
  robots: { index: false, follow: false },
};

const INK = "#0C2E35";
const GOLD = "#A8814A";

function fmt(d: Date) {
  // Gulf Standard Time, no external deps.
  return new Intl.DateTimeFormat("en-GB", {
    day: "2-digit", month: "short", hour: "2-digit", minute: "2-digit",
    timeZone: "Asia/Dubai", hour12: false,
  }).format(d);
}

function LoginScreen({ error }: { error?: boolean }) {
  return (
    <main style={{ minHeight: "100vh", display: "grid", placeItems: "center", background: "#F4EEE2", fontFamily: "system-ui, sans-serif", padding: 24 }}>
      <form action="/api/admin/login" method="post" style={{ width: "100%", maxWidth: 360, background: "#F7F2EA", padding: 32, borderRadius: 16, boxShadow: "0 20px 50px -20px rgba(12,46,53,0.35)" }}>
        <h1 style={{ fontSize: 20, color: INK, margin: "0 0 4px", fontWeight: 700 }}>Palm Jebel Ali</h1>
        <p style={{ fontSize: 13, color: "#6B7782", margin: "0 0 20px" }}>Admin — leads &amp; events</p>
        <input
          name="password" type="password" placeholder="Password" autoFocus required
          style={{ width: "100%", boxSizing: "border-box", padding: "11px 14px", borderRadius: 10, border: "1px solid rgba(12,46,53,0.15)", fontSize: 14, marginBottom: 12 }}
        />
        {error && <p style={{ color: "#C0392B", fontSize: 13, margin: "0 0 12px" }}>Incorrect password.</p>}
        <button type="submit" style={{ width: "100%", padding: "11px 14px", borderRadius: 999, border: "none", cursor: "pointer", fontSize: 13, fontWeight: 600, color: "#06232E", background: "linear-gradient(to right,#E7C989,#C9A26A 55%,#A8814A)" }}>
          Sign in
        </button>
      </form>
    </main>
  );
}

function Stat({ label, value }: { label: string; value: number | string }) {
  return (
    <div style={{ background: "#fff", border: "1px solid rgba(12,46,53,0.08)", borderRadius: 14, padding: "16px 18px", minWidth: 130 }}>
      <div style={{ fontSize: 26, fontWeight: 700, color: INK, lineHeight: 1.1 }}>{value}</div>
      <div style={{ fontSize: 11, textTransform: "uppercase", letterSpacing: "0.08em", color: "#6B7782", marginTop: 4 }}>{label}</div>
    </div>
  );
}

const th: React.CSSProperties = { textAlign: "left", fontSize: 11, textTransform: "uppercase", letterSpacing: "0.06em", color: "#6B7782", padding: "8px 12px", borderBottom: "1px solid rgba(12,46,53,0.1)", whiteSpace: "nowrap" };
const td: React.CSSProperties = { fontSize: 13, color: INK, padding: "9px 12px", borderBottom: "1px solid rgba(12,46,53,0.06)", verticalAlign: "top" };

export default async function AdminPage({ searchParams }: { searchParams: Promise<{ e?: string }> }) {
  const sp = await searchParams;

  if (!isConfigured() || !hasDb()) {
    return (
      <main style={{ minHeight: "100vh", display: "grid", placeItems: "center", background: "#F4EEE2", fontFamily: "system-ui, sans-serif", padding: 24 }}>
        <p style={{ color: INK, maxWidth: 460, textAlign: "center" }}>
          Admin is not configured. Set <code>ADMIN_PASSWORD</code>{!hasDb() ? " and MONGODB_URI" : ""} in the environment.
        </p>
      </main>
    );
  }

  if (!(await isAuthed())) return <LoginScreen error={sp?.e === "1"} />;

  const since = new Date(Date.now() - 1000 * 60 * 60 * 24 * 30);
  const [leadsCol, eventsCol] = await Promise.all([leadsCollection(), eventsCollection()]);
  const [leads, events, totalLeads, totalEvents] = await Promise.all([
    leadsCol.find({}).sort({ createdAt: -1 }).limit(200).toArray(),
    eventsCol.find({ createdAt: { $gte: since } }).sort({ createdAt: -1 }).limit(500).toArray(),
    leadsCol.countDocuments({}),
    eventsCol.countDocuments({}),
  ]);

  const dayAgo = Date.now() - 1000 * 60 * 60 * 24 * 2;
  const recentEvents = events.filter((e) => new Date(e.createdAt).getTime() >= dayAgo);

  // Tally events by name, and whatsapp_click by location.
  const byName = new Map<string, number>();
  const byWaLoc = new Map<string, number>();
  for (const e of events) {
    byName.set(e.name, (byName.get(e.name) || 0) + 1);
    if (e.name === "whatsapp_click") {
      const loc = String((e.props as Record<string, unknown>)?.location || "unknown");
      byWaLoc.set(loc, (byWaLoc.get(loc) || 0) + 1);
    }
  }
  const nameRows = [...byName.entries()].sort((a, b) => b[1] - a[1]);
  const waRows = [...byWaLoc.entries()].sort((a, b) => b[1] - a[1]);

  const waTotal = byName.get("whatsapp_click") || 0;

  return (
    <main style={{ minHeight: "100vh", background: "#F4EEE2", fontFamily: "system-ui, sans-serif", padding: "28px clamp(16px,4vw,44px) 80px", color: INK }}>
      <header style={{ display: "flex", alignItems: "center", justifyContent: "space-between", flexWrap: "wrap", gap: 12, marginBottom: 24 }}>
        <div>
          <h1 style={{ fontSize: 22, fontWeight: 700, margin: 0 }}>Palm Jebel Ali — Admin</h1>
          <p style={{ fontSize: 12, color: "#6B7782", margin: "4px 0 0" }}>Events shown for the last 30 days · times in GST (Asia/Dubai)</p>
        </div>
        <form action="/api/admin/logout" method="post">
          <button type="submit" style={{ padding: "8px 16px", borderRadius: 999, border: `1px solid ${GOLD}`, background: "transparent", color: GOLD, fontSize: 12, fontWeight: 600, cursor: "pointer" }}>Sign out</button>
        </form>
      </header>

      <section style={{ display: "flex", gap: 12, flexWrap: "wrap", marginBottom: 32 }}>
        <Stat label="Total leads" value={totalLeads} />
        <Stat label="Leads shown" value={leads.length} />
        <Stat label="WhatsApp clicks (30d)" value={waTotal} />
        <Stat label="Events (48h)" value={recentEvents.length} />
        <Stat label="Total events" value={totalEvents} />
      </section>

      <div style={{ display: "grid", gap: 32, gridTemplateColumns: "repeat(auto-fit,minmax(280px,1fr))", marginBottom: 40 }}>
        <Panel title={`Events by type (30d)`}>
          <table style={{ width: "100%", borderCollapse: "collapse" }}>
            <thead><tr><th style={th}>Event</th><th style={{ ...th, textAlign: "right" }}>Count</th></tr></thead>
            <tbody>
              {nameRows.length === 0 && <tr><td style={td} colSpan={2}>No events yet.</td></tr>}
              {nameRows.map(([n, c]) => (
                <tr key={n}><td style={td}>{n}</td><td style={{ ...td, textAlign: "right", fontWeight: 600 }}>{c}</td></tr>
              ))}
            </tbody>
          </table>
        </Panel>

        <Panel title="WhatsApp clicks by location (30d)">
          <table style={{ width: "100%", borderCollapse: "collapse" }}>
            <thead><tr><th style={th}>Location</th><th style={{ ...th, textAlign: "right" }}>Count</th></tr></thead>
            <tbody>
              {waRows.length === 0 && <tr><td style={td} colSpan={2}>No WhatsApp clicks yet.</td></tr>}
              {waRows.map(([n, c]) => (
                <tr key={n}><td style={td}>{n}</td><td style={{ ...td, textAlign: "right", fontWeight: 600 }}>{c}</td></tr>
              ))}
            </tbody>
          </table>
        </Panel>
      </div>

      <Panel title={`Leads (${leads.length})`}>
        <div style={{ overflowX: "auto" }}>
          <table style={{ width: "100%", borderCollapse: "collapse", minWidth: 720 }}>
            <thead>
              <tr>
                <th style={th}>When</th><th style={th}>Name</th><th style={th}>Phone</th>
                <th style={th}>Email</th><th style={th}>Interest</th><th style={th}>Message</th><th style={th}>Sent</th>
              </tr>
            </thead>
            <tbody>
              {leads.length === 0 && <tr><td style={td} colSpan={7}>No leads captured yet.</td></tr>}
              {leads.map((l: WithId<LeadDoc>) => (
                <tr key={String(l._id)}>
                  <td style={{ ...td, whiteSpace: "nowrap", color: "#6B7782" }}>{fmt(new Date(l.createdAt))}</td>
                  <td style={{ ...td, fontWeight: 600 }}>{l.name}</td>
                  <td style={{ ...td, whiteSpace: "nowrap" }}><a href={`tel:${l.phone}`} style={{ color: INK }}>{l.phone}</a></td>
                  <td style={td}><a href={`mailto:${l.email}`} style={{ color: GOLD }}>{l.email}</a></td>
                  <td style={td}>{l.interest}</td>
                  <td style={{ ...td, maxWidth: 260 }}>{l.message}</td>
                  <td style={td}>{l.emailed ? "✓" : "—"}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </Panel>

      <div style={{ height: 32 }} />

      <Panel title={`Recent events (${events.length})`}>
        <div style={{ overflowX: "auto" }}>
          <table style={{ width: "100%", borderCollapse: "collapse", minWidth: 640 }}>
            <thead><tr><th style={th}>When</th><th style={th}>Event</th><th style={th}>Details</th><th style={th}>Page</th></tr></thead>
            <tbody>
              {events.length === 0 && <tr><td style={td} colSpan={4}>No events yet.</td></tr>}
              {events.slice(0, 200).map((e: WithId<EventDoc>) => {
                let path = "";
                try { path = e.pageUrl ? new URL(e.pageUrl).pathname : ""; } catch { path = e.pageUrl || ""; }
                const details = Object.entries(e.props || {}).map(([k, v]) => `${k}: ${v}`).join(", ");
                return (
                  <tr key={String(e._id)}>
                    <td style={{ ...td, whiteSpace: "nowrap", color: "#6B7782" }}>{fmt(new Date(e.createdAt))}</td>
                    <td style={{ ...td, fontWeight: 600 }}>{e.name}</td>
                    <td style={td}>{details}</td>
                    <td style={{ ...td, color: "#6B7782" }}>{path}</td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </Panel>
    </main>
  );
}

function Panel({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <section style={{ background: "#F7F2EA", border: "1px solid rgba(12,46,53,0.08)", borderRadius: 16, overflow: "hidden" }}>
      <h2 style={{ fontSize: 13, fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.08em", color: INK, margin: 0, padding: "14px 16px", borderBottom: "1px solid rgba(12,46,53,0.08)" }}>{title}</h2>
      <div style={{ padding: 4 }}>{children}</div>
    </section>
  );
}
