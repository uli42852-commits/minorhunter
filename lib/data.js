// ================================================================
//  데이터 한 곳에서 관리. 여기만 고치면 사이트 전체에 반영됩니다.
//  새 선수 추가: players 배열에 항목 하나 추가.
//  새 소식 추가: news 배열 맨 위에 항목 하나 추가.
// ================================================================

export const players = [
  // 예시. 실제 선수로 갈아끼우세요. slug는 URL이 됩니다 (/players/slug).
  {
    slug: "sample-1",
    name: "선수명",
    nameEn: "PLAYER NAME",
    position: "외야수",
    bats: "좌투좌타",
    org: "구단명",
    level: "AA",            // R / A / A+ / AA / AAA / MLB
    status: "정상 출전",
    season: "2026",
    team: "AA소속",          // 홈 사다리 칩에 뜨는 짧은 표기
    line: [
      { k: "경기", v: "68" },
      { k: "타율", v: ".281" },
      { k: "출루율", v: ".364" },
      { k: "장타율", v: ".442" },
      { k: "홈런", v: "9" },
      { k: "타점", v: "41" },
      { k: "도루", v: "12" },
    ],
    timeline: [
      { date: "2026.06.02", level: "AA", note: "더블A 승격" },
      { date: "2026.04.01", level: "A+", note: "시즌 시작" },
      { date: "2025.03.10", level: "R", note: "루키 리그 데뷔" },
    ],
    note: "여기에 직접 정리한 관찰 메모가 들어갑니다.",
  },
];

// 메이저리그 선수는 별도로 (사다리 최상단 표시용)
export const mlbPlayers = [
  { name: "김하성", team: "ATL" },
  { name: "이정후", team: "SF" },
  { name: "김혜성", team: "LAD" },
  { name: "송성문", team: "SD" },
];

export const news = [
  { date: "2026.07.21", kind: "승격", who: "선수명", org: "구단명", detail: "AA에서 AAA로 승격." },
  { date: "2026.07.18", kind: "부상", who: "선수명", org: "구단명", detail: "부상자 명단 등재." },
  { date: "2026.07.14", kind: "강등", who: "선수명", org: "구단명", detail: "빅리그 로스터 정리로 재배정." },
];

export const guides = [
  {
    slug: "minor-levels",
    tag: "기초",
    title: "마이너리그 등급 체계, 루키부터 AAA까지",
    lead: "메이저리그 아래에는 네 개의 정식 단계가 있습니다.",
    updated: "2026.07.25",
    body: [
      { h: "왜 단계가 나뉘어 있나", p: "여기에 직접 쓴 설명이 들어갑니다." },
      { h: "AAA — 메이저 코앞", p: "본문." },
      { h: "AA — 유망주의 시험대", p: "본문." },
      { h: "A / A+ — 첫 풀시즌", p: "본문." },
      { h: "루키 — 출발선", p: "본문." },
    ],
    related: ["40인 로스터가 뭔지부터", "MLB 승격은 어떻게 결정되나"],
  },
];
