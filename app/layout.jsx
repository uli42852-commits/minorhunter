import "./globals.css";

export const metadata = {
  title: "MINOR HUNTER CENTER — 한국인 마이너리거 추적소",
  description:
    "미국 마이너리그에서 뛰는 한국 선수들이 지금 어느 단계에 있는지, 이번 주에 누가 움직였는지 한 곳에서 정리합니다.",
  openGraph: {
    title: "MINOR HUNTER CENTER",
    description: "한국인 마이너리거 추적소",
    type: "website",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="ko">
      <body>{children}</body>
    </html>
  );
}
