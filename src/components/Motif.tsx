import type { Motif as M } from "../data";
const S = { fill: "none", stroke: "currentColor", strokeWidth: 1.5, strokeLinecap: "round", strokeLinejoin: "round" } as const;
export default function Motif({ kind }: { kind: M }) {
  return <svg viewBox="0 0 320 220" aria-hidden="true" focusable="false" className="motif">
    {kind === "pard" && <g {...S}><rect x="20" y="40" width="90" height="140" className="band"/><rect x="200" y="40" width="100" height="140" className="band hotfill"/><path d="M20 130 L50 110 L80 125 L110 100 L140 70 L170 150 L200 90 L230 60 L260 95 L300 55" strokeWidth="2.5"/><path d="M20 190H300"/></g>}
    {kind === "rapo" && <g {...S}><circle cx="160" cy="108" r="76"/><circle cx="160" cy="108" r="48" className="band"/><circle cx="160" cy="108" r="18" className="hotfill"/><path d="M160 20V58M160 158V196M72 108H112M208 108H248"/><path d="M160 20l-8 10m8-10 8 10M248 108l-10-8m10 8-10 8" className="hot"/><path d="M80 55c22-22 44-31 80-35M240 162c-22 22-44 31-80 35" strokeDasharray="5 6"/></g>}
    {kind === "trace" && <g {...S}>{[40,110,180,250].map((x,i)=><circle key={x} cx={x} cy={i%2?150:70} r="18" className={i===2?"hot":""}/>)}<path d="M58 70L92 150M128 150L162 150M198 150L232 150M268 150C300 150 300 40 180 40S40 40 40 52"/><path d="M180 40l8 -6M180 40l8 6"/></g>}
    {kind === "threat" && <g {...S}>{Array.from({length:16}).map((_,i)=>{const h=[30,45,28,50,35,40,120,130,48,32,38,44,110,36,30,42][i];return <rect key={i} x={20+i*18} y={190-h} width="11" height={h} className={h>100?"hotfill":""}/>;})}<path d="M14 105H306" strokeDasharray="5 5" className="hot"/></g>}
    {kind === "ecg" && <g {...S}><path d="M10 116H70L90 116L108 72L128 166L148 94L166 116H210L228 116L246 52L266 176L282 116H310" strokeWidth="2.5" className="hot"/><path d="M10 190H310" strokeDasharray="3 7"/></g>}
    {kind === "namma" && <g {...S}><path d="M54 48h212a14 14 0 0 1 14 14v92a14 14 0 0 1-14 14H150l-48 34v-34H54a14 14 0 0 1-14-14V62a14 14 0 0 1 14-14Z"/><path d="M84 92h150M84 122h112"/><circle cx="250" cy="122" r="8" className="hotfill"/></g>}
  </svg>;
}
