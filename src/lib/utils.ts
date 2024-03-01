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
