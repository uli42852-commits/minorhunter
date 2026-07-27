import { C, F } from "../lib/theme";
import { players, news } from "../lib/data";

function levelBucket() {
  const base = [
    { code: "AAA", ko: "트리플A" },
    { code: "AA", ko: "더블A" },
    { code: "A+", ko: "하이 싱글A" },
    { code: "A", ko: "싱글A" },
    { code: "R", ko: "루키" },
  ];
  return base.map((lv) => ({
    ...lv,
    players: players.filter((p) => p.level === lv.code).map((p) => ({ name: p.name, team: p.team, slug: p.slug })),
  }));
}

function Eyebrow({ children }) {
  return (
    <div className="text-xs uppercase mb-3" style={{ fontFamily: F.data, color: C.slate, letterSpacing: "0.18em" }}>
      {children}
    </div>
  );
}

export default function Home() {
  const levels = levelBucket();
  return (
    <div style={{ background: C.paper, color: C.ink, fontFamily: F.body }} className="min-h-screen">
      <header className="flex items-center justify-between px-5 sm:px-10 py-4" style={{ borderBottom: `1px solid ${C.rule}` }}>
        <div className="flex items-baseline gap-3">
          <span style={{ fontFamily: F.display, fontSize: "1.15rem", letterSpacing: "0.04em" }}>MINOR HUNTER CENTER</span>
          <span className="hidden sm:inline text-xs" style={{ color: C.slate }}>한국인 마이너리거 추적소</span>
        </div>
        <nav className="flex gap-5 text-sm" style={{ color: C.slate }}>
          <a href="/" className="hover:underline">선수</a>
          <a href="/news" className="hover:underline">소식</a>
          <a href="/guides" className="hover:underline">알아보기</a>
        </nav>
      </header>

      <section className="px-5 sm:px-10 pt-12 pb-16 max-w-5xl mx-auto">
        <Eyebrow>2026 시즌 · 업데이트 07.26</Eyebrow>
        <h1 className="leading-tight mb-3" style={{ fontFamily: F.display, fontSize: "clamp(2.2rem, 7vw, 4rem)" }}>지금 어디까지 올라왔나</h1>
        <p className="text-sm sm:text-base mb-10 max-w-lg" style={{ color: C.slate }}>
          미국 마이너리그에서 뛰는 한국 선수들이 어느 단계에 있는지, 이번 주에 누가 움직였는지 한 곳에서 봅니다.
        </p>
        <div style={{ borderBottom: `1px solid ${C.rule}` }}>
          {levels.map((lv) => {
            return (
              <div key={lv.code} className="flex items-stretch border-t" style={{ borderColor: C.rule }}>
                <div className="w-20 sm:w-32 shrink-0 flex flex-col justify-center py-4 pr-3" style={{ borderRight: `1px solid ${C.rule}` }}>
                  <div className="leading-none" style={{ fontFamily: F.display, fontSize: "1.5rem", color: C.slate }}>{lv.code}</div>
                  <div className="text-xs mt-1" style={{ color: C.slate }}>{lv.ko}</div>
                </div>
                <div className="flex-1 flex flex-wrap gap-2 items-center py-4 pl-4">
                  {lv.players.map((p, i) => {
                    const chip = (
                      <div className="flex items-baseline gap-2 px-3 py-2" style={{ background: C.panel, border: `1px solid ${C.rule}` }}>
                        <span className="text-sm font-semibold" style={{ color: C.ink }}>{p.name}</span>
                        <span className="text-xs" style={{ fontFamily: F.data, color: C.slate }}>{p.team}</span>
                      </div>
                    );
                    return p.slug ? <a key={i} href={`/players/${p.slug}`} className="hover:opacity-70">{chip}</a> : <div key={i}>{chip}</div>;
                  })}
                  {lv.players.length === 0 && <span className="text-xs" style={{ color: C.slate }}>아직 없음</span>}
                </div>
              </div>
            );
          })}
        </div>
      </section>

      <section className="px-5 sm:px-10 py-14" style={{ background: C.panel, borderTop: `1px solid ${C.rule}`, borderBottom: `1px solid ${C.rule}` }}>
        <div className="max-w-5xl mx-auto">
          <Eyebrow>이번 주 움직임</Eyebrow>
          <ul>
            {news.slice(0, 3).map((m, i) => (
              <li key={i} className="flex items-center gap-4 py-4" style={{ borderTop: i === 0 ? "none" : `1px solid ${C.rule}` }}>
                <span className="text-xs w-12 shrink-0" style={{ fontFamily: F.data, color: C.slate }}>{m.date.slice(5)}</span>
                <span className="text-xs px-2 py-1 shrink-0" style={{ color: m.kind === "승격" ? C.stamp : m.kind === "부상" ? C.amber : C.slate, border: `1px solid ${m.kind === "승격" ? C.stamp : m.kind === "부상" ? C.amber : C.rule}` }}>{m.kind}</span>
                <span className="text-sm font-semibold">{m.who}</span>
                <span className="text-sm" style={{ color: C.slate, fontFamily: F.data }}>{m.detail}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>
    </div>
  );
}
