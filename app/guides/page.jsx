import { C, F } from "../../lib/theme";
import { guides } from "../../lib/data";

function Eyebrow({ children }) {
  return <div className="text-xs uppercase mb-3" style={{ fontFamily: F.data, color: C.slate, letterSpacing: "0.18em" }}>{children}</div>;
}

const TAG_ORDER = ["기초", "심화", "이야기", "실용"];

export default function GuidesIndex() {
  return (
    <div style={{ background: C.paper, color: C.ink, fontFamily: F.body }} className="min-h-screen">
      <header className="flex items-center justify-between px-5 sm:px-10 py-4" style={{ borderBottom: `1px solid ${C.rule}` }}>
        <a href="/" style={{ fontFamily: F.display, fontSize: "1.15rem", letterSpacing: "0.04em" }}>MINOR HUNTER CENTER</a>
        <nav className="flex gap-5 text-sm" style={{ color: C.slate }}>
          <a href="/" className="hover:underline">선수</a><a href="/news" className="hover:underline">소식</a><a href="/guides" className="hover:underline">알아보기</a>
        </nav>
      </header>
      <main className="max-w-5xl mx-auto px-5 sm:px-10 pt-12 pb-16">
        <Eyebrow>마이너 정보</Eyebrow>
        <h1 className="text-xl mb-8 font-semibold">마이너리그, 용어부터 막힐 때</h1>
        {TAG_ORDER.map((tag) => {
          const items = guides.filter((g) => g.tag === tag);
          if (items.length === 0) return null;
          return (
            <section key={tag} className="mb-10">
              <div className="text-sm mb-3 font-semibold" style={{ fontFamily: F.data, color: C.stamp }}>{tag}</div>
              <div className="grid gap-px sm:grid-cols-2" style={{ background: C.rule }}>
                {items.map((g) => (
                  <a key={g.slug} href={`/guides/${g.slug}`} className="block p-5 hover:opacity-70" style={{ background: C.paper }}>
                    <div className="text-sm mb-1">{g.title}</div>
                    <div className="text-xs" style={{ color: C.slate }}>{g.lead}</div>
                  </a>
                ))}
              </div>
            </section>
          );
        })}
      </main>
      <footer className="px-5 sm:px-10 py-8 text-xs" style={{ borderTop: `1px solid ${C.rule}`, color: C.slate }}>
        <div className="max-w-5xl mx-auto"><p className="mb-1">기록은 각 리그 공식 자료를 참고해 직접 정리한 것입니다.</p><p style={{ fontFamily: F.data }}>minorhuntercenter.com</p></div>
      </footer>
    </div>
  );
}
