export const LINKS = {
  github: "https://github.com/PeerAhammad",
  linkedin: "https://www.linkedin.com/in/peerahammad-bagawan-17895b409/",
  orcid: "https://orcid.org/0009-0008-6686-9223",
  openreview: "https://openreview.net/forum?id=pyACmQx0Yt",
  resume: "/resume.pdf",
};

export type Motif = "access" | "pard" | "trace" | "threat";
export const featured = [
  { n: "01", name: "AccessLens", kind: "AI Engineering", motif: "access" as Motif, 
    q: "Can an accessibility audit close the loop: find a barrier, explain it, fix it, and prove it is gone?",
    a: "A scanner detects WCAG issues, an explainer states who is affected, a fixer proposes code changes, and a verifier re-scans to confirm the improvement.",
    e: "Every proposed fix is re-checked against the same rules that flagged it.", stats: [] as [string, string][], stack: ["Python", "WCAG", "LLMs"], links: [["GitHub", "https://github.com/PeerAhammad/AccessLens"]] as [string, string][] },
  { n: "02", name: "PARD-SSM", kind: "ML Research", motif: "pard" as Motif, 
    q: "Can network attacks be understood as shifts between hidden traffic regimes?",
    a: "Switching state-space models with probabilistic regime inference, compared against baselines and probed with ablation studies.",
    e: "Variational switching state-space models evaluated on CICIDS2017 and UNSW-NB15 against baselines and ablations. Published as an arXiv preprint.", stats: [], stack: ["Python", "PyTorch", "Variational SSMs"], links: [["GitHub", "https://github.com/PeerAhammad/PARD-in-Network-Traffic-using-Switching-State-Space-Models"], ["arXiv", "https://arxiv.org/abs/2604.02299"]] },
  { n: "03", name: "TraceMind AI", kind: "AI Systems", motif: "trace" as Motif, 
    q: "When an AI agent says it succeeded, how do we know it did?",
    a: "Execution traces are analysed for failed steps, repeated tool calls, unsupported success claims and workflow errors, served through a FastAPI backend.",
    e: "Backend health endpoint verified during development.", stats: [["63", "tests passing"]], stack: ["Python", "FastAPI", "Agent evaluation"], links: [["GitHub", "https://github.com/PeerAhammad/TraceMind-AI"]] },
  { n: "04", name: "ThreatFlow", kind: "Cybersecurity", motif: "threat" as Motif, 
    q: "Can a streaming detector combine a strong classifier with regime awareness and still raise usable incident alerts?",
    a: "A hybrid of Random Forest and switching SSMs scores network flows as they stream and groups detections into incident-level alerts.",
    e: "On chronological CICIDS2017 replay in the tested configuration, alerts covered every attack incident with no false episodes. Flow-level results come from separate evaluation runs.",
    stats: [["11/11", "attack incidents covered"], ["0", "false alert episodes (3 total)"], ["96.02%", "F1 · 50k-flow eval"], ["7.3%", "FPR · 565k-flow eval"]], stack: ["Python", "FastAPI", "WebSockets"], links: [["GitHub", "https://github.com/PeerAhammad/ThreatFlow"], ["Live demo", "https://threatflow.onrender.com/"]] },
];

export const others = [
  ["05", "NammaSathi", "Language AI", "Kannada communication companion: contextual translation, voice assistance and interactive learning.", "TypeScript · React", "https://github.com/PeerAhammad/NammaSathi"],
  ["06", "PARD-V2", "Network Security", "Intrusion detection on CICIDS2017 with temporal and leave-family-out testing.", "Python · SSMs", "https://github.com/PeerAhammad/PARD-V2"],
  ["07", "EchoJudge", "Speech Intelligence", "Compares participant speech against a reference to evaluate delivery and acoustic differences.", "Python · Audio", "https://github.com/PeerAhammad/EchoJudge"],
  ["08", "ECG-TransNet", "Deep Learning", "1D CNN-Transformer for five-class AAMI beat classification on MIT-BIH, with Grad-CAM/SHAP explainability, under 12 ms inference on an RTX 3050, and a web platform.", "PyTorch · FastAPI · React", "https://github.com/PeerAhammad/ECG-TransNet-Arrhythmia-Detection"],
];

export const timeline = [
  { when: "2023", title: "B.Tech, Computer Science and Engineering", body: "Visvesvaraya Technological University, Belagavi. Expected 2027.", tag: "Education" },
  { when: "2026", title: "NeurIPS 2026 poster (accepted)", body: "When Does Sequential Detection Collapse to a Scalar? A Necessary and Sufficient Characterisation. My contribution: implementation and experiments.", tag: "Publication", href: LINKS.openreview, cta: "View on OpenReview" },
  { when: "Sep 2026", title: "Research Intern, Capability Dynamics", body: "Reviewing literature on emergent and hidden capabilities, elicitation and evaluation during model learning, and identifying gaps in separating capability acquisition from observable expression.", tag: "Research · VTU", live: true },
  { when: "Next", title: "A controlled study plan", body: "Designing experiments that tell what a model has learned apart from what it shows under a given evaluation condition.", tag: "In development" },
];
export const interests = ["Sequential detection", "State-space models", "Replay in reinforcement learning", "Capability dynamics & evaluation"];
export const pubs: [string, string, string, string?, string?][] = [
  ["Accepted · NeurIPS 2026 (Poster)", "When Does Sequential Detection Collapse to a Scalar? A Necessary and Sufficient Characterisation", "Implementation and experiments", LINKS.openreview, "OpenReview"],
  ["arXiv preprint", "PARD-SSM: Probabilistic Cyber-Attack Regime Detection via Variational Switching State-Space Models", "Model implementation and experiments", "https://arxiv.org/abs/2604.02299", "arXiv"],
  ["Manuscript in preparation", "Early Detection is an Information Problem", "Co-author"],
  ["Manuscript in preparation", "The Measure Gap: Information-Theoretic Limits of Deterministic Belief Encoders in POMDPs", "Co-author"],
];

export const skills: [string, string][] = [
  ["Languages", "Python · JavaScript"],
  ["Machine learning", "PyTorch · JAX · NumPy · Pandas · scikit-learn"],
  ["Web & tools", "FastAPI · WebSockets · React · Git"],
];