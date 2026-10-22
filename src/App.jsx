import { useState } from "react";

const lime = "text-[#aeb6ad]";
const mono = "font-mono text-[11px] tracking-[0.09em] uppercase";
const ONBOARDING_URL = "https://app.strix.ai/onboarding";

function Mark() {
  return <span className="mr-1.5 text-[23px] text-[#b8beb7]">✳</span>;
}

function Wordmark() {
  return <a href="#" className="text-[19px] font-semibold tracking-[-0.06em] text-[#f0f1e9]"><Mark />crackers</a>;
}

function Button({ children, light = false }) {
  return (
    <a href="#contact" className={`inline-flex items-center gap-6 px-[18px] py-[15px] font-mono text-xs font-medium transition hover:-translate-y-0.5 ${light ? "bg-[#e8e9e1] text-[#101311] hover:bg-[#aeb6ad]" : "bg-[#aeb6ad] text-[#101311] hover:bg-[#f0f1e9]"}`}>
      {children}<span className="text-base">↗</span>
    </a>
  );
}

function Header({ open, setOpen }) {
  return (
    <header className="sticky top-0 z-20 px-[3vw] pt-4 max-[800px]:px-4 max-[800px]:pt-3">
      <div className="relative mx-auto flex h-[68px] max-w-[1440px] items-center justify-between rounded-2xl border border-white/10 bg-[#101311]/85 px-5 shadow-[0_18px_50px_rgba(0,0,0,.22)] backdrop-blur-xl md:px-7">
        <Wordmark />
        <nav className={`${open ? "flex" : "hidden"} absolute left-0 right-0 top-[76px] flex-col gap-1 rounded-2xl border border-white/10 bg-[#151a16]/95 p-3 shadow-2xl backdrop-blur-xl md:static md:flex md:flex-row md:items-center md:gap-1 md:border-0 md:bg-transparent md:p-0 md:shadow-none`} aria-label="Main navigation">
        <a href="#platform" className="rounded-lg px-4 py-2.5 font-mono text-[11px] text-[#9ba497] transition hover:bg-white/5 hover:text-[#f0f1e9]">Platform</a>
        <a href="#workflow" className="rounded-lg px-4 py-2.5 font-mono text-[11px] text-[#9ba497] transition hover:bg-white/5 hover:text-[#f0f1e9]">How it works</a>
        <a href="#teams" className="rounded-lg px-4 py-2.5 font-mono text-[11px] text-[#9ba497] transition hover:bg-white/5 hover:text-[#f0f1e9]">For teams</a>
        <a href="#resources" className="rounded-lg px-4 py-2.5 font-mono text-[11px] text-[#9ba497] transition hover:bg-white/5 hover:text-[#f0f1e9]">Resources</a>
      </nav>
      <div className="hidden items-center gap-5 md:flex"><a href="#contact" className="font-mono text-[11px] text-[#9ba497] transition hover:text-[#f0f1e9]">Log in</a><a href={ONBOARDING_URL} className="group inline-flex items-center gap-3 rounded-lg border border-white/15 px-4 py-2.5 font-mono text-[11px] text-[#f0f1e9] transition hover:border-white/35 hover:bg-white/5">Get started <span className="transition-transform group-hover:translate-x-0.5">↗</span></a></div>
      <button className="flex flex-col gap-1.5 rounded-lg border border-white/10 bg-white/5 p-2.5 md:hidden" aria-label="Toggle menu" aria-expanded={open} onClick={() => setOpen(!open)}><span className="h-px w-5 bg-[#e8e9e1]" /><span className="h-px w-5 bg-[#e8e9e1]" /></button>
      </div>
    </header>
  );
}

function Radar() {
  return (
    <div className="relative h-[310px] overflow-hidden bg-[radial-gradient(circle_at_center,rgba(180,186,180,.11),transparent_40%)] max-[800px]:h-[230px]">
      <i className="absolute left-1/2 top-1/2 h-[120px] w-[120px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-[#aeb6ad]/20" />
      <i className="absolute left-1/2 top-1/2 h-[220px] w-[220px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-[#aeb6ad]/20" />
      <i className="absolute left-1/2 top-1/2 h-[315px] w-[315px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-[#aeb6ad]/20" />
      <i className="absolute left-0 top-1/2 h-px w-full bg-[#aeb6ad]/10" /><i className="absolute left-1/2 top-0 h-full w-px bg-[#aeb6ad]/10" />
      <i className="absolute left-1/2 top-1/2 h-px w-1/2 origin-left -rotate-[33deg] bg-gradient-to-r from-[#aeb6ad] to-transparent shadow-[0_0_18px_#aeb6ad]" />
      <b className="absolute left-[57%] top-[30%] h-2 w-2 rounded-full bg-[#aeb6ad] shadow-[0_0_11px_#aeb6ad]" /><b className="absolute left-[28%] top-[54%] h-2 w-2 rounded-full bg-[#ff735b] shadow-[0_0_11px_#ff735b]" /><b className="absolute left-[75%] top-[64%] h-2 w-2 rounded-full bg-[#aeb6ad] shadow-[0_0_11px_#aeb6ad]" />
      <span className="absolute left-[61%] top-[24%] border-l border-[#aeb6ad] pl-2 font-mono text-[9px] text-[#9ca99a]">api / v2</span><span className="absolute left-[17%] top-[49%] border-l border-[#aeb6ad] pl-2 font-mono text-[9px] text-[#9ca99a]">auth</span>
    </div>
  );
}

function Hero() {
  return (
    <section className="relative flex min-h-[calc(100vh-88px)] flex-col items-center justify-center overflow-hidden px-[7vw] py-24 text-center max-[800px]:min-h-[calc(100vh-72px)] max-[800px]:px-5">
      <div className="pointer-events-none absolute right-[-12%] top-[-25%] h-[650px] w-[650px] rounded-full bg-[radial-gradient(circle,rgba(70,78,70,.18),transparent_68%)] blur-2xl" />
      <div className="relative z-10 max-w-[1000px]">
        <div className="mb-8 font-mono text-[10px] uppercase tracking-[.22em] text-[#68736a]">Autonomous security for every deploy</div>
        <h1 className="m-0 text-[clamp(54px,7.4vw,112px)] font-normal leading-[.9] tracking-[-.08em] text-[#f0f1e9]">Continuous Security<br />On Every Deploy.</h1>
        <p className="mx-auto mt-10 max-w-[650px] text-[18px] leading-8 text-[#a5ada6] max-[800px]:mt-7 max-[800px]:text-[16px] max-[800px]:leading-7">Secure your entire stack with autonomous pentesting.<br className="max-[600px]:hidden" /> Find and fix vulnerabilities 24/7.</p>
        <form className="mx-auto mt-24 flex w-full max-w-[680px] gap-5 max-[650px]:mt-14 max-[650px]:flex-col" onSubmit={(event) => { event.preventDefault(); window.location.assign(ONBOARDING_URL); }}>
          <input aria-label="Domain for pentest" placeholder="Enter your domain for a pentest" className="h-16 min-w-0 flex-1 rounded-xl border border-[#343a35] bg-[#111412] px-6 text-left text-[17px] text-[#f0f1e9] outline-none placeholder:text-[#e4e8e2] focus:border-[#b8beb7]" />
          <button type="submit" className="h-16 rounded-xl bg-[#f0f1e9] px-8 text-[16px] font-semibold text-[#080b09] transition hover:bg-[#b8beb7]">Start testing</button>
        </form>
      </div>
    </section>
  );
}

function Platform() {
  const cards = [["{ }", "01", "Web & APIs", "Autonomous pentesting for every endpoint, flow, and business logic edge case."], ["⌘", "02", "Code & PRs", "Catch vulnerabilities at the source before they make it to main."], ["◈", "03", "Cloud & infra", "Find the paths attackers see across your infrastructure."]];
  return <section id="platform" className="grid grid-cols-[.8fr_1.2fr] gap-[10vw] px-[10vw] py-40 max-[800px]:block max-[800px]:px-[7vw] max-[800px]:py-24"><div className="mb-16"><div className={`${mono} ${lime}`}>01 / The platform</div><h2 className="my-6 text-[clamp(48px,5.5vw,78px)] font-medium leading-[.93] tracking-[-.075em]">One mind.<br /><span className={lime}>Every surface.</span></h2><p className="max-w-[340px] text-[15px] leading-6 text-[#aab0a7]">From first commit to production traffic, crackers continuously thinks like an attacker so your team can build with confidence.</p><a href="#contact" className="mt-8 inline-block border-b border-[#aeb6ad] pb-1.5 font-mono text-xs">Explore the platform <span className={lime}>↗</span></a></div><div className="grid grid-cols-2 gap-4 max-[800px]:grid-cols-1">{cards.map(([icon, number, title, description], index) => <article className={`relative min-h-[280px] border border-white/15 bg-[#171b18] p-6 ${index === 0 ? "col-span-2 max-[800px]:col-span-1" : ""}`} key={number}><div className={`font-mono text-[27px] ${lime}`}>{icon}</div><span className="absolute right-6 top-7 font-mono text-[10px] text-[#5b665b]">{number}</span><h3 className="mt-8 text-2xl font-medium tracking-[-.05em]">{title}</h3><p className="max-w-[240px] text-[13px] leading-5 text-[#889289]">{description}</p><span className="absolute bottom-6 right-6 font-mono text-[9px] text-[#879285]">{index === 0 ? "✓ 847 endpoints mapped" : index === 1 ? "▂ ▅ ▃ ▆ ▄" : "○ ─ ○ ─ ○"}</span></article>)}</div></section>;
}

function Workflow() {
  const steps = [["01", "DISCOVER", "Map the unknown", "crackers learns your stack, maps your attack surface, and uncovers what scanners miss."], ["02", "VALIDATE", "Prove the impact", "Each vulnerability is reproduced safely with a proof-of-exploit your team can trust."], ["03", "REMEDIATE", "Ship the fix", "Get context-aware remediation and merge-ready pull requests in minutes, not weeks."]];
  return (
    <section id="workflow" className="border-t border-white/[0.08] bg-[#080b09] px-0 py-32 text-[#f0f1e9] max-[800px]:py-24">
      <div className="grid grid-cols-[.7fr_1.25fr_1fr] gap-[5vw] px-[10vw] max-[800px]:block max-[800px]:px-[7vw]">
        <div className="pt-1 font-mono text-[11px] tracking-[.12em] text-[#7f8981]">02 / THE ADVANTAGE</div>
        <h2 className="m-0 text-[clamp(58px,6.1vw,92px)] font-normal leading-[.88] tracking-[-.085em] max-[800px]:my-7">Find. Prove.<br /><span className="text-[#69716b]">Fix.</span></h2>
        <p className="max-w-[390px] text-[17px] leading-8 text-[#9ba49d]">Not another list of theoretical issues. Every finding comes with a working exploit, a clear explanation, and a fix your team can ship.</p>
      </div>
      <div className="mt-28 grid grid-cols-3 px-[10vw] max-[800px]:mt-20 max-[800px]:block max-[800px]:px-[7vw]">
        {steps.map(([number, tag, title, description], index) => (
          <article className={`min-h-[275px] border-t border-white/15 pt-7 ${index > 0 ? "border-l border-white/10 pl-8 max-[800px]:border-l-0 max-[800px]:pl-0 max-[800px]:pt-10" : ""}`} key={number}>
            <div className="flex justify-between pr-8 font-mono text-[10px] tracking-[.08em] text-[#7f8981]"><span>{number}</span><span>{tag}</span></div>
            <h3 className="mt-16 text-[32px] font-normal tracking-[-.065em] max-[800px]:mt-10">{title}</h3>
            <p className="mt-3 max-w-[310px] text-[16px] leading-6 text-[#9ba49d]">{description}</p>
          </article>
        ))}
      </div>
    </section>
  );
}

function EnterpriseSecurity() {
  const features = [
    {
      icon: "▥",
      title: "Self-Hosted Deployment",
      description: "Deploy in your own VPC, on-premise, or air-gapped environment with complete control over your infrastructure.",
    },
    {
      icon: "⌘",
      title: "Internal Infrastructure Pentesting",
      description: "Go beyond external attack surfaces. Test internal networks, services, and infrastructure from inside your environment.",
    },
    {
      icon: "⌧",
      title: "Zero Data Retention",
      description: "Your source code is never stored or used for model training. All model providers operate under zero data retention agreements.",
    },
    {
      icon: "◉",
      title: "Dedicated Support & SLA",
      description: "Dedicated support, custom SLAs, priority Slack channel, and hands-on onboarding. SOC 2 Type II and ISO 27001 compliant.",
    },
  ];

  return (
    <section className="border-t border-white/[0.08] bg-black px-[3.7vw] py-24 text-[#f0f1e9] md:py-32">
      <div className="max-w-[760px]">
        <h2 className="m-0 text-[clamp(54px,6vw,86px)] font-normal leading-[.93] tracking-[-.075em]">
          Enterprise-grade<br />security
        </h2>
        <p className="mt-7 max-w-[700px] text-[18px] leading-8 text-[#a5ada6]">
          Built for teams that need full control over deployment, data privacy, and compliance.
        </p>
      </div>
      <div className="mt-20 grid grid-cols-1 gap-9 md:grid-cols-2">
        {features.map((feature) => (
          <article
            className="min-h-[255px] rounded-[28px] border border-[#29302b] px-9 py-9 transition-colors hover:border-[#5d695e] md:min-h-[270px]"
            key={feature.title}
          >
            <div className="text-[25px] leading-none text-[#f0f1e9]">{feature.icon}</div>
            <h3 className="mt-6 text-[23px] font-normal tracking-[-.045em] text-[#eef0e9]">{feature.title}</h3>
            <p className="mt-5 max-w-[620px] text-[16px] leading-6 text-[#9ba49d]">{feature.description}</p>
          </article>
        ))}
      </div>
    </section>
  );
}

function DeployConfidence() {
  const features = [
    ["▣", "Every PR reviewed", "Catches vulnerabilities at the source. Every pull request is reviewed before it can be merged."],
    ["⬡", "Blocks vulnerable deploys", "Plugs into your CI/CD pipeline. Vulnerable code never reaches production."],
    ["◎", "Monitors your attack surface", "New CVEs tested against your systems. Latest threats flagged instantly."],
    ["◉", "Runtime validation", "Each finding ships with a PoC and reproduction steps. Proven against your live environment."],
    ["❖", "Context-aware pentesting", "Knows your stack, architecture, and business logic. Tests tailored to your environment."],
    ["◐", "Continuous learning", "Learns from past findings and how you fixed them. Every pentest builds on the last."],
  ];

  return (
    <section className="border-t border-white/[0.08] bg-black px-[3.7vw] py-24 text-[#f0f1e9] md:py-32">
      <h2 className="m-0 text-[clamp(54px,6vw,86px)] font-normal leading-[.93] tracking-[-.075em]">Deploy with confidence</h2>
      <p className="mt-6 max-w-[1200px] text-[18px] leading-8 text-[#a5ada6]">
        Ensure nothing vulnerable reaches production. Every vulnerability discovered, validated, and resolved before it reaches production.
      </p>
      <div className="mt-16 grid grid-cols-1 gap-9 md:grid-cols-3">
        {features.map(([icon, title, description]) => (
          <article className="min-h-[245px] rounded-[28px] border border-[#29302b] px-9 py-9 transition-colors hover:border-[#5d695e] md:min-h-[270px]" key={title}>
            <div className="text-[25px] leading-none text-[#f0f1e9]">{icon}</div>
            <h3 className="mt-6 text-[23px] font-normal tracking-[-.045em] text-[#eef0e9]">{title}</h3>
            <p className="mt-5 max-w-[370px] text-[16px] leading-6 text-[#9ba49d]">{description}</p>
          </article>
        ))}
      </div>
      <div className="mt-16 flex items-center gap-10">
        <a href="#contact" className="rounded-xl bg-[#f0f1e9] px-7 py-4 text-sm font-semibold text-black transition hover:bg-[#b8beb7]">Get started</a>
        <a href="#contact" className="text-sm text-[#a5ada6] transition hover:text-[#f0f1e9]">Get a demo <span className="ml-1">→</span></a>
      </div>
    </section>
  );
}

function IssueToFix() {
  return (
    <section className="border-t border-white/[0.08] bg-black px-[3.7vw] py-24 text-[#f0f1e9] md:py-32">
      <h2 className="m-0 text-[clamp(54px,6vw,86px)] font-normal leading-[.93] tracking-[-.075em]">From issue to fix in seconds</h2>
      <p className="mt-6 text-[18px] leading-8 text-[#a5ada6]">Find critical issues, auto-validate, and auto-fix with merge-ready PRs.</p>
      <div className="mt-16 grid grid-cols-1 gap-9 lg:grid-cols-2">
        <article className="min-h-[410px] rounded-[28px] border border-[#29302b] p-6 md:p-7">
          <div className="font-mono text-[11px] text-[#677168]">← Issues&nbsp; / &nbsp;<span className="text-[#9ba49d]">STR-00847</span></div>
          <h3 className="mt-5 text-[16px] font-semibold">SSRF via URL Parameter in /api/proxy</h3>
          <div className="mt-4 flex gap-2 font-mono text-[10px]"><span className="rounded border border-red-900 bg-red-950/60 px-2 py-1 text-red-300">● Open</span><span className="rounded border border-amber-800 bg-amber-950/60 px-2 py-1 text-amber-300">High · 8.6</span><span className="py-1 text-[#677168]">CWE-918</span></div>
          <div className="mt-7 grid grid-cols-[1fr_92px] gap-8 text-[11px] leading-5 text-[#9ba49d]">
            <div><span className="font-mono text-[9px] text-[#677168]">TL;DR</span><p className="mt-2">The <code className="text-[#d8ddd5]">/api/proxy</code> endpoint accepts a user-supplied URL without validation. An attacker can access internal services, read cloud metadata, and exfiltrate credentials.</p><span className="font-mono text-[9px] text-[#677168]">IMPACT</span><p className="mt-2">Access to cloud metadata at <code className="text-[#d8ddd5]">169.254.169.254</code>, potential credential theft, and internal network scanning.</p><span className="font-mono text-[9px] text-[#677168]">LOCATION</span><p className="mt-2 text-[#738078]">◉ acme/api · proxy-handler.ts:23</p></div>
            <div className="font-mono text-[9px] text-[#677168]"><span className="block text-[#677168]">SEVERITY</span><strong className="mt-2 block font-normal text-orange-400">● High</strong><span className="mt-5 block">CVSS</span><strong className="block text-sm font-normal text-[#eef0e9]">8.6</strong><span className="mt-5 block">FIX EFFORT</span><strong className="mt-2 inline-block rounded border border-blue-800 px-1.5 font-normal text-blue-400">Low</strong><span className="mt-5 block">DISCOVERED</span><strong className="block font-normal">2h ago</strong></div>
          </div>
        </article>
        <article className="min-h-[410px] rounded-[28px] border border-[#29302b] p-6 md:p-7">
          <div className="flex gap-5 border-b border-[#29302b] pb-3 font-mono text-[11px]"><b className="border-b-2 border-[#f0f1e9] pb-3 text-[#f0f1e9]">Fix</b><span className="text-[#677168]">Reproduction</span></div>
          <span className="mt-4 block font-mono text-[9px] text-[#677168]">HOW DO I FIX IT?</span>
          <p className="mt-2 text-[11px] leading-5 text-[#9ba49d]">Validate and restrict the target URL using an allowlist of permitted hostnames. Reject private/internal IP ranges and enforce HTTPS-only.</p>
          <div className="mt-4 overflow-hidden rounded-lg border border-[#29302b] bg-[#090c0a] font-mono text-[10px] leading-6 text-[#9ba49d]">
            <div className="border-b border-[#29302b] px-3 py-2 text-[#899389]">proxy-handler.ts:23-29 <span className="float-right">Copy</span></div>
            <div className="px-3 py-2"><div className="text-[#677168]">23&nbsp;&nbsp; const targetUrl = req.query.url;</div><div className="bg-red-950/50 text-red-300">24&nbsp;&nbsp; const resp = await fetch(targetUrl);</div><div className="bg-blue-950/40 text-blue-300">25&nbsp;&nbsp; const parsed = new URL(targetUrl);</div><div className="bg-blue-950/40 text-blue-300">26&nbsp;&nbsp; if (!ALLOWED_HOSTS.has(parsed.hostname)) {"{"}</div><div className="bg-blue-950/40 text-blue-300">27&nbsp;&nbsp;&nbsp;&nbsp; throw new ForbiddenError("blocked");</div><div className="bg-blue-950/40 text-blue-300">28&nbsp;&nbsp; {"}"}</div><div className="text-[#677168]">29&nbsp;&nbsp; return res.json(await resp.json());</div></div>
          </div>
          <div className="mt-4 font-mono text-[10px] text-[#6e806f]">✓ Fix verified — vulnerability no longer exploitable</div>
        </article>
      </div>
      <div className="mt-14 grid grid-cols-1 gap-12 md:grid-cols-2">
        <div><div className="text-3xl text-[#f0f1e9]">⌕</div><h3 className="mt-5 text-[27px] font-normal tracking-[-.05em]">Discover & Validate</h3><p className="mt-5 max-w-[610px] text-[16px] leading-6 text-[#a5ada6]">Pentests your entire attack surface continuously. Reproduces each finding, confirms exploitability with proof, and prioritizes by real impact.</p></div>
        <div><div className="text-3xl text-[#f0f1e9]">♧</div><h3 className="mt-5 text-[27px] font-normal tracking-[-.05em]">Auto-Fix</h3><p className="mt-5 max-w-[610px] text-[16px] leading-6 text-[#a5ada6]">Generates a fix, retests to confirm the vulnerability is gone, and delivers a merge-ready PR. Review, merge, done.</p></div>
      </div>
    </section>
  );
}

function App() {
  const [open, setOpen] = useState(false);
  const points = [
    ["↯", "Always-on coverage", "New code, new CVEs, new attack paths. crackers never clocks out."],
    ["◎", "Context, not noise", "Prioritized findings with the business impact and evidence to act now."],
    ["↗", "Fits your workflow", "Meet your team in GitHub, Slack, CI/CD, and wherever work gets done."],
  ];

  return (
    <>
      <div className="pointer-events-none fixed inset-0 z-50 opacity-[.04] [background-image:url('data:image/svg+xml,%3Csvg_viewBox=%220_0_180_180%22_xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cfilter_id=%22n%22%3E%3CfeTurbulence_type=%22fractalNoise%22_baseFrequency=%22.9%22_numOctaves=%223%22_stitchTiles=%22stitch%22/%3E%3C/filter%3E%3Crect_width=%22100%25%22_height=%22100%25%22_filter=%22url(%23n)%22_opacity=%22.5%22/%3E%3C/svg%3E')]" />
      <Header open={open} setOpen={setOpen} />
      <main>
        <Hero />
        <div className="flex items-center gap-[7vw] border-y border-white/15 px-[10vw] py-5 font-mono text-[9px] tracking-[.06em] text-[#667066] max-[800px]:block max-[800px]:px-[7vw]">
          <span className="max-[800px]:mb-5 max-[800px]:block">SECURITY THAT MOVES AT YOUR SPEED</span>
          <div className="flex flex-1 justify-between gap-5 text-[17px] text-[#818c7f] max-[800px]:flex-wrap max-[800px]:text-sm"><b>northstar</b><b className="font-mono">LATTICE<span className={lime}>°</span></b><b>vertex</b><b>ARCADIA</b><b className="font-mono">KINETIQ</b></div>
        </div>
        <Platform />
        <Workflow />
        <IssueToFix />
        <DeployConfidence />
        <EnterpriseSecurity />
        <section className="grid grid-cols-[1fr_2fr_1fr] items-end border-b border-white/15 px-[10vw] py-36 max-[800px]:block max-[800px]:px-[7vw] max-[800px]:py-24">
          <div className="mb-8 text-5xl text-[#b8beb7]">✳</div>
          <p className="m-0 text-[clamp(42px,5.4vw,76px)] leading-[.92] tracking-[-.08em]">Security shouldn’t be a<br /><em className={lime}>speed limit.</em></p>
          <div className="justify-self-end max-w-[155px] font-mono text-[11px] leading-5 text-[#798477] max-[800px]:mt-10">Move from reactive security to a continuous advantage.</div>
        </section>
        <section id="teams" className="grid grid-cols-2 gap-[15vw] px-[10vw] py-36 max-[800px]:block max-[800px]:px-[7vw] max-[800px]:py-24">
          <div className="mb-14"><div className={`${mono} ${lime}`}>03 / Built for momentum</div><h2 className="my-6 text-[clamp(48px,5.5vw,78px)] font-medium leading-[.93] tracking-[-.075em]">More signal.<br /><span className={lime}>Less noise.</span></h2></div>
          <div className="border-t border-white/15">{points.map(([icon, title, text]) => <div className="grid grid-cols-[48px_1fr] gap-4 border-b border-white/15 py-7" key={title}><span className="text-2xl text-[#b8beb7]">{icon}</span><div><h3 className="mb-2 text-xl font-medium tracking-[-.04em]">{title}</h3><p className="m-0 max-w-[360px] text-[13px] leading-5 text-[#aab0a7]">{text}</p></div></div>)}</div>
        </section>
        <section id="contact" className="mx-[5vw] mb-36 grid grid-cols-2 gap-[9vw] border border-white/15 bg-[#151d17] px-[10vw] py-20 max-[800px]:mx-0 max-[800px]:mb-24 max-[800px]:block max-[800px]:px-[7vw]">
          <div><div className={`${mono} ${lime}`}>04 / Ready when you are</div><h2 className="my-6 text-[clamp(48px,5.5vw,78px)] font-medium leading-[.93] tracking-[-.075em]">Ship boldly.<br /><span className={lime}>We’ll break it.</span></h2></div>
          <div className="flex flex-col items-start justify-center border-l border-white/15 pl-[5vw] max-[800px]:mt-12 max-[800px]:border-l-0 max-[800px]:border-t max-[800px]:pl-0 max-[800px]:pt-9"><p className="text-xl tracking-[-.04em]">See what crackers can uncover in your stack.</p><Button>Talk to our team</Button><small className="mt-5 max-w-[290px] font-mono text-[10px] leading-5 text-[#778177]">No sales maze. Just a 20-minute conversation with a security engineer.</small></div>
        </section>
      </main>
      <footer id="resources" className="grid grid-cols-2 gap-16 border-t border-white/15 px-[10vw] pb-9 pt-16 max-[800px]:block max-[800px]:px-[7vw]">
        <div><Wordmark /><p className="mt-5 text-[13px] leading-5 text-[#778177]">Autonomous security for the ones<br />building the future.</p></div>
        <div className="flex justify-end gap-24 max-[800px]:mt-12 max-[800px]:justify-start"><div className="flex flex-col gap-3"><b className="font-mono text-[10px] text-[#b8beb7]">Explore</b><a href="#platform" className="font-mono text-[11px] text-[#899389]">Platform</a><a href="#workflow" className="font-mono text-[11px] text-[#899389]">How it works</a><a href="#teams" className="font-mono text-[11px] text-[#899389]">For teams</a></div><div className="flex flex-col gap-3"><b className="font-mono text-[10px] text-[#b8beb7]">Connect</b><a href="#contact" className="font-mono text-[11px] text-[#899389]">Contact</a><a href="#" className="font-mono text-[11px] text-[#899389]">LinkedIn ↗</a><a href="#" className="font-mono text-[11px] text-[#899389]">X / Twitter ↗</a></div></div>
        <div className="col-span-full mt-10 flex justify-between border-t border-white/15 pt-6 font-mono text-[9px] text-[#5c665c] max-[800px]:flex-wrap max-[800px]:gap-3"><span>© 2025 crackers, inc.</span><span>Built for the bold <span className={lime}>✳</span></span><span className="max-[800px]:hidden">Privacy · Terms</span></div>
      </footer>
    </>
  );
}

export default App;
