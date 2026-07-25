import { C, F } from "../../../lib/theme";
import { guides } from "../../../lib/data";
import { notFound } from "next/navigation";

export function generateStaticParams() {
  return guides.map((g) => ({ slug: g.slug }));
}

function Eyebrow({ children }) {
  return <div className="text-xs uppercase mb-3" style={{ fontFamily: F.data, color: C.slate, letterSpacing: "0.18em" }}>{children}</div>;
}

export default function GuideArticle({ params }) {
  const guide = guides.find((g) => g.slug === params.slug);
  if (!guide) return notFound();
  return (
    <div style={{ background: C.paper, color: C.ink, fontFamily: F.body }} className="min-h-screen">
      <header className="flex items-center justify-between px-5 sm:px-10 py-4" style={{ borderBottom: `1px solid ${C.rule}` }}>
        <a href="/" style={{ fontFamily: F.display, fontSize: "1.15rem", letterSpacing: "0.04em" }}>MINOR HUNTER CENTER</a>
        <a href="/guides" className="text-sm hover:underline" style={{ color: C.slate }}>← 목록</a>
      </header>
      <article className="max-w-2xl mx-auto px-5 sm:px-10 pt-12 pb-16">
        <Eyebrow>알아보기 · {guide.tag}</Eyebrow>
        <h1 className="mb-4" style={{ fontFamily: F.display, fontSize: "clamp(1.9rem, 5.5vw, 3rem)", lineHeight: 1.1 }}>{guide.title}</h1>
        <p className="text-base leading-relaxed mb-2" style={{ color: C.slate }}>{guide.lead}</p>
        <div className="text-xs mb-10" style={{ fontFamily: F.data, color: C.slate }}>업데이트 {guide.updated}</div>
        <div style={{ borderTop: `2px solid ${C.ink}` }} className="pt-8">
          {guide.body.map((sec, i) => (
            <section key={i} className="mb-8">
              <h2 className="text-lg font-semibold mb-3" style={{ color: C.ink }}>{sec.h}</h2>
              <p className="text-[15px] leading-[1.8]" style={{ color: C.ink }}>{sec.p}</p>
            </section>
          ))}
        </div>
        <div className="mt-12 pt-6" style={{ borderTop: `1px solid ${C.rule}` }}>
          <Eyebrow>이어서 읽기</Eyebrow>
          <div className="flex flex-col gap-2">
            {guide.related.map((r) => (<span key={r} className="text-sm" style={{ color: C.stamp }}>→ {r}</span>))}
          </div>
        </div>
      </article>
      <footer className="px-5 sm:px-10 py-8 text-xs" style={{ borderTop: `1px solid ${C.rule}`, color: C.slate }}>
        <div className="max-w-2xl mx-auto"><p className="mb-1">기록은 각 리그 공식 자료를 참고해 직접 정리한 것입니다.</p><p style={{ fontFamily: F.data }}>minorhuntercenter.com</p></div>
      </footer>
    </div>
  );
}
