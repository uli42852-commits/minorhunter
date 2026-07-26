import { guides } from "../lib/data";

const BASE = "https://minorhuntercenter.com";

export default function sitemap() {
  const staticPages = ["", "/news", "/guides"].map((path) => ({
    url: `${BASE}${path}`,
    lastModified: new Date(),
  }));

  const guidePages = guides.map((g) => ({
    url: `${BASE}/guides/${g.slug}`,
    lastModified: new Date(),
  }));

  return [...staticPages, ...guidePages];
}
