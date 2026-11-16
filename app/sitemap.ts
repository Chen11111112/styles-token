import type { MetadataRoute } from "next";
import { site } from "@/lib/site";
import { styles } from "@/lib/styles";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    { url: site.url, changeFrequency: "weekly", priority: 1 },
    ...styles.map((s) => ({
      url: `${site.url}/styles/${s.slug}`,
      changeFrequency: "monthly" as const,
      priority: 0.8,
    })),
    { url: `${site.url}/reset`, changeFrequency: "yearly", priority: 0.6 },
  ];
}
