import type { Motif as M } from "../data";
const S = { fill: "none", stroke: "currentColor", strokeWidth: 1.5, strokeLinecap: "round", strokeLinejoin: "round" } as const;
export default function Motif({ kind }: { kind: M }) {
  return (
    <svg viewBox="0 0 320 220" aria-hidden="true" focusable="false" className="motif">
      {kind === "access" && <g {...S}>
        {[0, 1, 2].map(r => [0, 1, 2, 3].map(c => <rect key={r + "" + c} x={30 + c * 62} y={30 + r * 48} width="50" height="36" rx="3" className={r === 1 && c === 2 ? "hot" : ""} />))}
        <path d="M205 120l10 10 20-24" className="hot" strokeWidth="3" /></g>}
      {kind === "pard" && <g {...S}>
        <rect x="20" y="40" width="90" height="140" className="band" /><rect x="200" y="40" width="100" height="140" className="band hotfill" />
        <path d="M20 130 L50 110 L80 125 L110 100 L140 70 L170 150 L200 90 L230 60 L260 95 L300 55" strokeWidth="2.5" />
        <path d="M20 190H300" /></g>}
      {kind === "trace" && <g {...S}>
        {[40, 110, 180, 250].map((x, i) => <circle key={x} cx={x} cy={i % 2 ? 150 : 70} r="18" className={i === 2 ? "hot" : ""} />)}
        <path d="M58 70L92 150M128 150L162 150M198 150L232 150M268 150C300 150 300 40 180 40S40 40 40 52" />
        <path d="M180 40l8 -6M180 40l8 6" /></g>}
      {kind === "threat" && <g {...S}>
        {Array.from({ length: 16 }).map((_, i) => { const h = [30, 45, 28, 50, 35, 40, 120, 130, 48, 32, 38, 44, 110, 36, 30, 42][i]; return <rect key={i} x={20 + i * 18} y={190 - h} width="11" height={h} className={h > 100 ? "hotfill" : ""} />; })}
        <path d="M14 105H306" strokeDasharray="5 5" className="hot" /></g>}
    </svg>
  );
}
