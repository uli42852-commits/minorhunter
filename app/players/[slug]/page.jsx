import { C, F, LEVEL_ORDER } from "../../../lib/theme";
import { players } from "../../../lib/data";
import { notFound } from "next/navigation";

export function generateStaticParams() {
  return players.map((p) => ({ slug: p.slug }));
}

function Eyebrow({ children }) {
  return <div className="text-xs uppercase mb-3" style={{ fontFamily: F.data, color: C.slate, letterSpacing: "0.18em" }}>{children}</div>;
}

export default function PlayerPage({ params }) {
  const player = players.find((p) => p.slug === params.slug);
  if (!player) return notFound();
  const currentIdx = LEVEL_ORDER.indexOf(player.level);

  return (
    <div style={{ background: C.paper, color: C.ink, fontFamily: F.body }} className="min-h-screen">
      <header className="flex items-center justify-between px-5 sm:px-10 py-4" style={{ borderBottom: `1px solid ${C.rule}` }}>
        <a href="/" style={{ fontFamily: F.display, fontSize: "1.15rem", letterSpacing: "0.04em" }}>MINOR HUNTER CENTER</a>
        <a href="/" className="text-sm hover:underline" style={{ color: C.slate }}>← 전체 선수</a>
      </header>

      <main className="max-w-4xl mx-auto px-5 sm:px-10">
        <section className="pt-12 pb-8">
          <Eyebrow>{player.season} 시즌 · {player.org}</Eyebrow>
          <div className="flex flex-wrap items-end gap-x-4 gap-y-2 mb-4">
            <h1 style={{ fontFamily: F.display, fontSize: "clamp(2.4rem, 8vw, 4rem)", lineHeight: 1 }}>{player.name}</h1>
            <span className="text-sm pb-1" style={{ fontFamily: F.data, color: C.slate }}>{player.nameEn}</span>
          </div>
          <div className="flex flex-wrap gap-x-5 gap-y-1 text-sm" style={{ color: C.slate }}>
            <span>{player.position}</span><span>{player.bats}</span>
            <span className="px-2" style={{ color: C.stamp, border: `1px solid ${C.stamp}`, fontFamily: F.data }}>{player.status}</span>
          </div>
        </section>

        <section className="pb-12">
          <Eyebrow>현재 위치</Eyebrow>
          <div className="flex items-stretch" style={{ border: `1px solid ${C.rule}`, background: C.panel }}>
            {LEVEL_ORDER.map((lv, i) => {
              const reached = i <= currentIdx, isNow = i === currentIdx;
              return (
                <div key={lv} className="flex-1 flex flex-col items-center justify-center py-5" style={{ borderLeft: i === 0 ? "none" : `1px solid ${C.rule}`, background: isNow ? C.ink : "transparent" }}>
                  <span style={{ fontFamily: F.display, fontSize: "1.15rem", color: isNow ? C.paper : reached ? C.ink : C.rule }}>{lv}</span>
                  {isNow && <span className="text-xs mt-1" style={{ fontFamily: F.data, color: C.paper }}>현재</span>}
                </div>
              );
            })}
          </div>
        </section>

        <section className="pb-12">
          <Eyebrow>{player.season} 시즌 성적</Eyebrow>
          <div className="grid grid-cols-3 sm:grid-cols-7 gap-px" style={{ background: C.rule }}>
            {player.line.map((s) => (
              <div key={s.k} className="p-4 text-center" style={{ background: C.panel }}>
                <div className="text-xs mb-1" style={{ color: C.slate }}>{s.k}</div>
                <div style={{ fontFamily: F.data, fontSize: "1.1rem" }}>{s.v}</div>
              </div>
            ))}
          </div>
        </section>

        <section className="pb-12">
          <Eyebrow>이동 기록</Eyebrow>
          <ul>
            {player.timeline.map((t, i) => (
              <li key={i} className="flex items-center gap-4 py-4" style={{ borderTop: `1px solid ${C.rule}` }}>
                <span className="text-xs w-24 shrink-0" style={{ fontFamily: F.data, color: C.slate }}>{t.date}</span>
                <span className="text-xs px-2 py-1 w-14 text-center shrink-0" style={{ border: `1px solid ${C.rule}`, fontFamily: F.data }}>{t.level}</span>
                <span className="text-sm">{t.note}</span>
              </li>
            ))}
          </ul>
        </section>

        <section className="pb-16">
          <Eyebrow>관찰 메모</Eyebrow>
          <p className="text-sm leading-relaxed p-6" style={{ background: C.panel, border: `1px solid ${C.rule}`, color: C.ink }}>{player.note}</p>
        </section>
      </main>

      <footer className="px-5 sm:px-10 py-8 text-xs" style={{ borderTop: `1px solid ${C.rule}`, color: C.slate }}>
        <div className="max-w-4xl mx-auto"><p className="mb-1">기록은 각 리그 공식 자료를 참고해 직접 정리한 것입니다.</p><p style={{ fontFamily: F.data }}>minorhuntercenter.com</p></div>
      </footer>
    </div>
  );
}
