export const LINKS = {
  github: "https://github.com/PeerAhammad",
  linkedin: "https://www.linkedin.com/in/peerahammad-bagawan-17895b409/",
  orcid: "https://orcid.org/0009-0008-6686-9223",
  openreview: "https://openreview.net/forum?id=pyACmQx0Yt#discussion",
  resume: "/resume.pdf",
};

export type Motif = "pard" | "rapo" | "trace" | "ecg" | "namma" | "threat";
export type Project = {
  slug: string; n: string; name: string; kind: string; motif: Motif; tagline: string;
  question: string; overview: string; approach: string[]; evidence: string[];
  metrics?: [string, string][]; stack: string[]; links: [string, string][];
  caveats: string[]; role: string;
};

export const projects: Project[] = [
  {
    slug: "rapo", n: "01", name: "RAPO / RSD", kind: "Research engineering", motif: "rapo",
    tagline: "Diagnosing replay and testing bounded environment-side memory across four domains.",
    question: "When a temporary intervention suppresses harmful behaviour, why can the environment recreate it—and can bounded memory change that outcome?",
    overview: "A reproducible experimental programme around Replay Suppression Diagnostics (RSD) and Regret-Aware Policy Optimization (RAPO). The work investigates replay under policy-frozen conditions and evaluates a mediator-level, dual-timescale memory mechanism across recommendation, control, social cascades and graph diffusion.",
    approach: ["Built and audited synthetic and dataset-backed environments, then replaced noisy single-trajectory checks with controlled, paired or deterministic evaluations where appropriate.", "Implemented policy-frozen replay comparisons and RAPO conditions, including stationary, persistence-mechanism and RAPO-off-at-replay controls.", "Reworked attribution, random-number pairing, deterministic seeding and metric calculations after execution exposed flaws in earlier implementations.", "Ran parameter sweeps and independently reproduced the final reported outputs."],
    evidence: ["Four domains evaluated: MovieLens-25M recommendation, lightweight Safety-Gym-style grid control, Reddit conversation cascades and Barabási–Albert graph diffusion.", "Reddit cascade experiment: 77.26% reduction in absolute replay harm in the final paired comparison (t = 6.4837, p = 2.01e-08).", "MovieLens selected configuration: 31.98% reduction in replay harm (N = 60, t = 2.4737, p = .0163).", "Graph diffusion and Safety Gym results show metric- and domain-dependent effects; they are not uniformly positive across every metric."],
    metrics: [["4", "experimental domains"], ["77.26%", "Reddit replay-harm reduction"], ["31.98%", "MovieLens reduction · selected config"]],
    stack: ["Python", "Simulation", "Statistical evaluation", "Reproducibility"],
    links: [["GitHub", "https://github.com/PeerAhammad/Regret-Aware-Policy-Optimization"]],
    caveats: ["These are experimental research results, not evidence of deployment readiness.", "The paper draft has not yet been updated with this completed result set.", "The Safety Gym environment is a lightweight 8×8 grid-world, not MuJoCo or the full Safety-Gymnasium benchmark.", "Metrics differ in interpretability across domains; Reddit absolute replay harm is the primary cross-condition outcome for that experiment."],
    role: "Research engineering across implementation, experiment design, debugging, reproducibility, statistical evaluation and results generation."
  },
  {
    slug: "pard-ssm", n: "02", name: "PARD-SSM", kind: "ML research · preprint", motif: "pard",
    tagline: "Probabilistic cyber-attack regime detection with variational switching state-space models.",
    question: "Can network attacks be understood as transitions between latent traffic regimes rather than isolated anomalous flows?",
    overview: "A probabilistic intrusion-detection research project using switching state-space models to infer latent traffic regimes and support early attack detection. The work compares probabilistic temporal modelling with conventional machine-learning baselines and includes experiments on CICIDS2017 and UNSW-NB15.",
    approach: ["Model network traffic as a sequence with latent regime dynamics.", "Use variational inference for switching state-space modelling and infer regime changes over time.", "Compare against Random Forest baselines and run ablations to examine the contribution of temporal and probabilistic components.", "Expose model outputs through an interactive explorer with sample and CSV prediction workflows."],
    evidence: ["Published as an arXiv preprint.", "The paper reports F1, stage-attribution and latency results; these are paper-reported experimental outcomes, not independent clinical or operational guarantees.", "A separate PARD-V2 project focuses on chronological evaluation and unseen attack-family testing on CICIDS2017."],
    metrics: [["2", "datasets in paper"], ["98.2%", "paper-reported F1"], ["<1.2 ms", "paper-reported per-flow latency"]],
    stack: ["Python", "PyTorch", "Variational SSMs", "FastAPI", "React"],
    links: [["GitHub", "https://github.com/PeerAhammad/PARD-SSM-Probabilistic-Attack-Regime-Detection"], ["arXiv", "https://arxiv.org/abs/2604.02299"]],
    caveats: ["Reported metrics depend on the paper's experimental protocol and should not be read as production guarantees.", "The interactive dashboard is a research explorer, not a validated security appliance."],
    role: "Model implementation, training and testing, debugging, experiment execution, result generation and research engineering."
  },
  {
    slug: "tracemind-ai", n: "03", name: "TraceMind AI", kind: "AI systems · deployed", motif: "trace",
    tagline: "Observe. Diagnose. Repair. Verify. An evidence-backed workflow for debugging tool-using AI agents.",
    question: "When an AI agent claims it succeeded, how can we verify what actually happened during execution?",
    overview: "TraceMind analyses execution traces rather than judging only an agent's final answer. It detects suspicious patterns, ties findings to trace evidence, proposes controlled corrections and compares approved replays against a baseline.",
    approach: ["Ingest and validate traces, then apply deterministic detectors for repeated calls, explicit tool errors, unsupported completion claims and configured workflow violations.", "Link findings to event-level evidence and produce correction proposals.", "Require explicit human approval before replaying a task with a proposed configuration change.", "Compare baseline and replay outcomes, check for regressions and evaluate against a labelled synthetic benchmark."],
    evidence: ["Full-stack application deployed: frontend on Vercel and FastAPI backend on Render.", "Held-out synthetic benchmark: precision 0.857, recall 0.75 and FPR 0.019 across 10 held-out scenarios.", "Overall benchmark: precision 0.955, recall 0.913 and FPR 0.007 across 28 synthetic scenarios.", "Controlled task sweep: completion rate increased from 0.667 to 1.000, with tool calls decreasing from 9 to 8."],
    metrics: [["63", "reported tests"], ["0.857", "held-out precision"], ["0.75", "held-out recall"]],
    stack: ["Python", "FastAPI", "SQLite", "React", "TypeScript", "pytest"],
    links: [["Live frontend", "https://tracemind-ai-nu.vercel.app/"], ["API", "https://tracemind-ai-ih8n.onrender.com/docs"], ["GitHub", "https://github.com/PeerAhammad/TraceMind-AI"]],
    caveats: ["The benchmark is small and synthetic; held-out scenarios were authored by the same team, not independently or blindly labelled.", "The runner uses deterministic mock tools, not a live LLM agent; simulated durations are not real latency measurements.", "Only three runnable tasks are currently included. Results do not establish general reliability improvement for arbitrary agents.", "The completed frontend is deployed, but the current GitHub repository does not yet contain its full frontend source."],
    role: "End-to-end project engineering across backend, frontend integration, trace analysis, deterministic evaluation, testing and deployment."
  },
  {
    slug: "threatflow", n: "04", name: "ThreatFlow", kind: "Streaming cybersecurity", motif: "threat",
    tagline: "From flow-level predictions to incident-level cyber-threat alerts.",
    question: "Can a strong classifier and temporal regime awareness produce alerts that are useful at the incident level?",
    overview: "A streaming cyber-threat detection prototype that replays CICIDS traffic, combines Random Forest predictions with switching-SSM regime information, and groups detections into incident-level alerts through a FastAPI/WebSocket dashboard.",
    approach: ["Replay network-flow records chronologically.", "Combine Random Forest classification with switching state-space model outputs.", "Stream scores and alert episodes to a live dashboard.", "Evaluate flow-level classification separately from incident coverage and false alert episodes."],
    evidence: ["In the tested replay configuration, 11 of 11 attack incidents were covered, with 3 alert episodes and 0 false episodes.", "Hybrid v3 reported F1 96.02%, precision 93.35% and recall 98.84% in its stated evaluation.", "A separate 565,576-flow test produced recall 0.816, precision 0.920 and FPR 0.073."],
    metrics: [["11/11", "incidents covered"], ["3", "alert episodes"], ["0", "false episodes in stated replay"]],
    stack: ["Python", "FastAPI", "WebSockets", "Random Forest", "SSMs"],
    links: [["Live demo", "https://threatflow.onrender.com/"], ["GitHub", "https://github.com/PeerAhammad/ThreatFlow"]],
    caveats: ["Metrics come from different evaluation runs and must not be combined as if measured on one split.", "The VAPT lab workflow is experimental and should not be presented as a completed security scanner."],
    role: "Model integration, streaming backend, dashboard engineering, experiment execution and incident-level evaluation."
  },
  {
    slug: "nammasathi", n: "05", name: "NammaSathi", kind: "Language AI · deployed", motif: "namma",
    tagline: "A Kannada communication companion for everyday situations.",
    question: "How can people navigate everyday situations when they do not speak the local language?",
    overview: "An AI-powered multilingual web application designed to make practical Kannada communication easier. It supports English, Hindi and Kannada with contextual translation and scenario-focused learning for healthcare, shopping, transport, education and workplace interactions.",
    approach: ["Context-aware translation powered by Gemini.", "Scenario-based communication flows for common everyday needs.", "Interactive Kannada practice and a reusable phrasebook.", "A React frontend connected to a FastAPI backend."],
    evidence: ["Live application deployed on Vercel with backend hosted on Render.", "A recorded project demonstration is available.", "Built for the Kannada Digital Innovation Hackathon 2026 problem statement, 'Kannada in Everyday Life'."],
    stack: ["React", "TypeScript", "Tailwind CSS", "FastAPI", "Gemini API"],
    links: [["Live app", "https://namma-sathi-bqzn.vercel.app/"], ["Backend", "https://nammasathi.onrender.com/"], ["Demo video", "https://youtu.be/evCSq5hanfo"], ["GitHub", "https://github.com/PeerAhammad/NammaSathi"]],
    caveats: ["Speech-based communication and support for additional Indian languages are future directions, not current features."],
    role: "Full-stack application development, AI integration, API design and deployment."
  },
  {
    slug: "pard-v2", n: "06", name: "PARD-V2", kind: "Network security · evaluation", motif: "pard",
    tagline: "A reproducible CICIDS2017 comparison focused on chronological and unseen-family evaluation.",
    question: "How do intrusion-detection models behave when evaluation respects time and attack-family separation?",
    overview: "A focused rebuild of the PARD evaluation pipeline using CICIDS2017. It compares Random Forest and switching state-space approaches while emphasizing chronological evaluation and unseen attack-family testing rather than relying only on random splits.",
    approach: ["Use CICIDS2017 as the dataset for this rebuild.", "Prepare and audit the processed traffic data.", "Compare Random Forest and SSM-based detection.", "Expose an interactive Streamlit demo with pre-exported model artifacts."],
    evidence: ["Dataset rebuild contains 2,830,743 rows before duplicate removal; 66,945 duplicates were identified.", "Class distribution and data-processing details are documented in the repository.", "A Streamlit demo is deployed."],
    stack: ["Python", "scikit-learn", "SSMs", "Streamlit"],
    links: [["Live demo", "https://pard-v2.streamlit.app/"], ["GitHub", "https://github.com/PeerAhammad/PARD-V2"]],
    caveats: ["This current rebuild uses CICIDS2017 only; do not attribute UNSW-NB15 experiments to PARD-V2.", "Evaluation claims should be tied to the exact chronological or unseen-family protocol described in the repository."],
    role: "Data processing, model comparison, evaluation design, reproducible artifacts and demo engineering."
  },
  {
    slug: "ecg-transnet", n: "07", name: "ECG-TransNet", kind: "Healthcare AI research prototype", motif: "ecg",
    tagline: "An explainable ECG arrhythmia classification model integrated into a full-stack research platform.",
    question: "Can temporal deep learning and explainability make ECG beat classification easier to inspect in a research workflow?",
    overview: "A 1D CNN–Transformer model for five-class AAMI ECG beat classification on the MIT-BIH Arrhythmia Database, with Grad-CAM and SHAP explainability. A companion web platform integrates upload, inference, result visualisation and history workflows.",
    approach: ["Use a 1D CNN to learn local ECG morphology and a Transformer to model temporal dependencies.", "Preprocess signals with filtering, normalization, R-peak detection and beat-centred segmentation.", "Classify into the five AAMI groups: N, S, V, F and Q.", "Use Grad-CAM and SHAP to inspect model explanations and connect the model to a React/FastAPI platform."],
    evidence: ["The project READMEs report approximately 98.2% accuracy, 0.94 average F1 and under 12 ms inference latency.", "The model repository describes a quantized model of approximately 27.4 MB.", "The platform and model are research prototypes."],
    metrics: [["98.2%", "README-reported accuracy"], ["0.94", "README-reported average F1"], ["<12 ms", "README-reported inference latency"]],
    stack: ["PyTorch", "FastAPI", "React", "Vite", "Grad-CAM", "SHAP"],
    links: [["Platform repository", "https://github.com/PeerAhammad/ECG-TransNet-Platform"], ["Model repository", "https://github.com/PeerAhammad/ECG-TransNet-Arrhythmia-Detection"]],
    caveats: ["The README does not fully specify the dataset split, F1 averaging convention, latency hardware/timing procedure or quantization protocol.", "These results are not clinical validation and the system is not a diagnostic medical device.", "No live deployment URL has been supplied for the ECG platform."],
    role: "Model and application engineering, signal-processing workflow, explainability integration and platform development."
  },
  {
    slug: "accesslens", n: "08", name: "AccessLens", kind: "Accessibility engineering", motif: "trace",
    tagline: "Scan, explain, propose a fix, approve it and verify it—without silently changing a live website.",
    question: "Can an accessibility checker move beyond reporting violations and help users verify carefully reviewed fixes?",
    overview: "An AI-assisted accessibility workflow using Playwright and axe-core to find WCAG issues, explain their impact, propose minimal changes and re-run checks on an isolated copy after human approval.",
    approach: ["Scan a page in a real browser and tie axe-core findings to elements and WCAG criteria.", "Use Gemini to explain barriers and suggest content such as image alternative text.", "Present proposed changes for user review and approval; validate generated values before applying them.", "Apply approved changes to an isolated copy and compare resolved, remaining and newly introduced issues."],
    evidence: ["45 pytest tests reported.", "On the W3C intentionally inaccessible demo, 44 issues were found; 42 fixes were applied and verified resolved, with 2 left for human review.", "The fixed W3C page scan returned 0 issues."],
    stack: ["Python", "FastAPI", "Playwright", "axe-core", "Gemini", "React"],
    links: [["Live scanner", "https://accesslens-rd53.onrender.com/"], ["Recorded demo", "https://peerahamad.github.io/AccessLens/"], ["GitHub", "https://github.com/PeerAhammad/AccessLens"]],
    caveats: ["Automated scans cannot detect every accessibility barrier and this is not a WCAG compliance certificate.", "Axe confirms rule-level issue resolution, not the quality of generated wording; human approval remains important.", "The project is a prototype and scans one page at a time."],
    role: "Full-stack pipeline engineering, browser automation, AI integration, validation, verification and testing."
  },
];

export const featured = [projects[0], projects[1], projects[2]];
export const others = projects.slice(3);

export type ResearchItem = { slug: string; title: string; status: string; authors: string; abstract: string; contribution: string; href?: string; linkLabel?: string; note?: string };
export const research: ResearchItem[] = [
  { slug: "sequential-detection", title: "When Does Sequential Detection Collapse to a Scalar? A Necessary and Sufficient Characterisation", status: "Accepted · NeurIPS 2026 poster", authors: "Prakul Sunil Hiremath, Peer Ahammad M. Bagawan, Sahil Bhekane", abstract: "A study of the conditions under which sequential detection can be represented through a scalar quantity, with a necessary-and-sufficient characterisation.", contribution: "Technical implementation and experimental work, including code, model implementation, testing and results.", href: LINKS.openreview, linkLabel: "OpenReview" },
  { slug: "pard-ssm-paper", title: "PARD-SSM: Probabilistic Cyber-Attack Regime Detection via Variational Switching State-Space Models", status: "arXiv preprint", authors: "See arXiv record", abstract: "A probabilistic temporal approach to cyber-attack regime detection using variational switching state-space models, with experiments on network intrusion datasets.", contribution: "Technical implementation and experimental engineering: model implementation, training and testing, debugging, experiment execution and integration of verified results.", href: "https://arxiv.org/abs/2604.02299", linkLabel: "arXiv" },
  { slug: "when-environments-remember", title: "When Environments Remember: Diagnosing and Suppressing Replay", status: "Looking for a venue", authors: "Prakul Sunil Hiremath, PeerAhammad M Bagawan", abstract: "Introduces a policy-frozen diagnostic protocol for examining replay caused by environment-side memory, alongside a bounded dual-timescale mediator mechanism intended to suppress replay under stated conditions. Experiments span recommendation, control, social cascades and graph diffusion.", contribution: "Technical implementation and experimental engineering, including code, model/system implementation where applicable, testing, debugging, experiments and verified result integration.", href: "https://openreview.net/forum?id=V7yQMTXqOZ#discussion", linkLabel: "OpenReview", note: "The completed four-domain experiment set has not yet been incorporated into the manuscript." },
  { slug: "pre-transition-detection", title: "The Information Limit of Pre-Transition Detection", status: "Looking for a venue", authors: "Prakul Sunil Hiremath, Mohammed Kaif, PeerAhammad M Bagawan", abstract: "Studies information-theoretic limits on sequential detection before a latent transition, including a Gaussian linear-drift analysis and causal nonparametric detection experiments.", contribution: "Technical implementation and experimental engineering, including coding, model implementation where applicable, testing, debugging and results generation.", href: "https://openreview.net/forum?id=Jk5OrOq3NO", linkLabel: "OpenReview" },
  { slug: "why-replay-happens", title: "Why Replay Happens: A Diagnostic for Environment-Side Memory and a Bounded Mechanism to Suppress It", status: "Looking for a venue", authors: "Prakul Sunil Hiremath, Peer Ahammad M Bagawan", abstract: "Examines how transient penalties can be followed by replay under stationary dynamics. It proposes a policy-frozen diagnostic protocol and a bounded mediator-memory mechanism, while documenting domain-dependent trade-offs and limitations.", contribution: "Technical implementation and experimental engineering, including code, training/testing where applicable, debugging, experiments and manuscript result integration.", href: "https://openreview.net/forum?id=5W7IHizaKd", linkLabel: "OpenReview", note: "The manuscript explicitly frames the mechanism as research, not a deployment-ready policy-optimization algorithm." },
  { slug: "measure-gap", title: "The Measure Gap: Information-Theoretic Limits of Deterministic Belief Encoders in POMDPs", status: "Looking for a venue", authors: "Prakul Sunil Hiremath, Peer Ahammad M. Bagawan, Sahil Bhekane", abstract: "Investigates information lost when deterministic belief encoders compress posterior distributions in partially observable decision problems, and studies a measure-valued reinforcement-learning alternative.", contribution: "Technical implementation and experimental engineering, including coding, model implementation where applicable, testing, debugging and results generation.", href: "https://openreview.net/forum?id=ZfQS1wGvCc#discussion", linkLabel: "OpenReview", note: "The stated theoretical scope concerns deterministic encoders; stochastic encoders are not covered." },
];

export const internship = {
  organization: "Visvesvaraya Technological University (VTU), Belagavi",
  unit: "IT Infrastructure, Services and Management Unit (ITISMU)",
  role: "Research Intern",
  start: "1 September 2026",
  end: "1 January 2027",
  status: "Ongoing",
  supervisor: "Dr. M. N. Birje, Director, ITISMU",
  officialScope: "The official letter expects theoretical and conceptual study of the proposed research, identification and use of suitable tools for simulation or implementation, and work towards a term/research paper.",
  focus: "Capability Dynamics in AI models and LLMs (proposed direction)",
  stage: "Awaiting guide clarification and approval of the research direction. Literature review and research-gap exploration are preliminary; model experiments have not begun.",
  definition: "A capability is a learned ability to produce a target behaviour on a task class under bounded conditions.",
  distinction: "A proposed distinction between capability acquisition (what a model has learned) and capability expression (what it demonstrates under a particular evaluation or elicitation condition). This framing remains subject to guide clarification.",
  ladder: ["No evidence", "Rare", "Detectable", "Reliable", "Generalizable"],
};

export const pendingStudy = {
  title: "Initial Spectral Competition and the Predictability of Grokking in Transformers",
  status: "Preliminary pilot · awaiting guide verification",
  summary: "A negative-result pilot examining whether initialization-time spectral structure predicts generalization timing in a one-block Transformer trained on modular addition modulo 97. The pilot identified commutativity leakage in the original ordered-pair split, making a symmetry-aware pair-orbit evaluation the necessary next step.",
  note: "This investigation is not yet guide-verified and is not being presented as an approved ITISMU internship deliverable. Its exploratory spectral feature has not demonstrated predictive value.",
};

export const skills: [string, string][] = [
  ["Languages", "Python · JavaScript"],
  ["Machine learning", "PyTorch · JAX · NumPy · Pandas · scikit-learn"],
  ["Web & tools", "FastAPI · WebSockets · React · Git"],
];
export const interests = ["Sequential detection", "State-space models", "Capability dynamics & evaluation", "Grokking and generalization", "Replay in reinforcement learning", "Reliable AI systems"];
