import rss from "@astrojs/rss";

export const get = () =>
  rss({
    title: "Leo-Club Weil am Rhein",
    description:
      "Wir sind Jugendliche und Erwachsene und engagieren uns für das Wohl von benachteiligten Menschen, etwa aus Kinder- oder Pflegeheimen.",
    site: import.meta.env.SITE,
    items: import.meta.glob("./blog/**/*.md"),
  });
