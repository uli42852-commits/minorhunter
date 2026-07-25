import { C, F } from "../../lib/theme";
import { news } from "../../lib/data";

const KIND_COLOR = (k) => (k === "승격" || k === "데뷔" ? C.stamp : k === "부상" ? C.amber : C.slate);

function Eyebrow({ children }) {
  return <div className="text-xs uppercase mb-3" style={{ fontFamily: F.data, color: C.slate, letterSpacing: "0.18em" }}>{children}</div>;
}

export default function NewsPage() {
  return (
    <div style={{ background: C.paper, color: C.ink, fontFamily: F.body }} className="min-h-screen">
      <header className="flex items-center justify-between px-5 sm:px-10 py-4" style={{ borderBottom: `1px solid ${C.rule}` }}>
        <a href="/" style={{ fontFamily: F.display, fontSize: "1.15rem", letterSpacing: "0.04em" }}>MINOR HUNTER CENTER</a>
        <nav className="flex gap-5 text-sm" style={{ color: C.slate }}>
          <a href="/" className="hover:underline">선수</a><a href="/news" className="hover:underline">소식</a><a href="/guides" className="hover:underline">알아보기</a>
        </nav>
      </header>
      <main className="max-w-4xl mx-auto px-5 sm:px-10 pt-12 pb-16">
        <Eyebrow>소식 · 업데이트 07.25</Eyebrow>
        <h1 className="mb-2" style={{ fontFamily: F.display, fontSize: "clamp(2rem, 6vw, 3.2rem)" }}>누가 움직였나</h1>
        <p className="text-sm mb-10" style={{ color: C.slate }}>승격, 강등, 부상, 데뷔 — 짧게 자주 업데이트합니다.</p>
        <ul>
          {news.map((n, i) => (
            <li key={i} className="py-6" style={{ borderTop: `1px solid ${C.rule}` }}>
              <div className="flex items-center gap-3 mb-2">
                <span className="text-xs" style={{ fontFamily: F.data, color: C.slate }}>{n.date}</span>
                <span className="text-xs px-2 py-1" style={{ color: KIND_COLOR(n.kind), border: `1px solid ${KIND_COLOR(n.kind)}` }}>{n.kind}</span>
              </div>
              <div className="flex items-baseline gap-2 mb-1"><span className="text-lg font-semibold">{n.who}</span><span className="text-xs" style={{ fontFamily: F.data, color: C.slate }}>{n.org}</span></div>
              <p className="text-sm" style={{ color: C.ink }}>{n.detail}</p>
            </li>
          ))}
        </ul>
      </main>
      <footer className="px-5 sm:px-10 py-8 text-xs" style={{ borderTop: `1px solid ${C.rule}`, color: C.slate }}>
        <div className="max-w-4xl mx-auto"><p className="mb-1">기록은 각 리그 공식 자료를 참고해 직접 정리한 것입니다.</p><p style={{ fontFamily: F.data }}>minorhuntercenter.com</p></div>
      </footer>
    </div>
  );
}
