import { getCollection } from "astro:content";

export function formatDate(date: Date) {
  return new Intl.DateTimeFormat("de-DE", {
    day: "2-digit",
    month: "long",
    year: "numeric",
  }).format(date);
}

export async function getPosts(limit = Infinity) {
  let posts = await getCollection("posts");

  return posts
    .sort((a, b) => b.data.created_at.getTime() - a.data.created_at.getTime())
    .slice(0, limit);
}

export function getCategory(slug: string) {
  return slug.split("/").at(0);
}

export function getPostThumbnail(post: Record<string, any>) {
  return post.data.images?.[0].src;
}

export const CATEGORIES = [
  {
    slug: "/aktionen/begegnungen/",
    title: "Begegnungen mit Menschen",
  },
  {
    slug: "/aktionen/pflegeheim/",
    title: "Besuche im Pflegeheim",
  },
  {
    slug: "/aktionen/kinder/",
    title: "Ausflüge mit Kindern",
  },
  {
    slug: "/aktionen/weitere/",
    title: "Weitere Aktionen",
  },
  {
    slug: "/aktionen/neuigkeiten/",
    title: "Aktuelle Neuigkeiten",
  },
];
