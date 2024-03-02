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

type Email = {
  name: string;
  email: string;
  phone?: string;
  message: string;
};

export function escapeHtml(data: Email) {
  function replace(html: string) {
    return html
      .replaceAll("&", "&amp;")
      .replaceAll("<", "&lt;")
      .replaceAll(">", "&gt;")
      .replaceAll('"', "&quot;")
      .replaceAll("'", "&#039;");
  }

  return Object.fromEntries(
    Object.entries(data).map(([key, value]) => [key, replace(value)]),
  ) as Email;
}

export function getEmailTemplate({ name, email, message, phone }: Email) {
  return `
    <p>Hallo!</p>  
    <p>Sie haben Sie eine Nachricht von <b>${name}</b> über die <a href="https://leo-club-weilamrhein.com">Leo Club Weil am Rhein Webseite</a> erhalten:</p>
    <p>"${message}"</p>
    <p>Die Kontaktdaten des Absenders sind wie folgt:</p>
    <ul>
      <li><b>Name:</b> ${name}</li>
      <li><b>E-Mail:</b> ${email}</li>
      ${phone ? `<li><b>Telefon:</b> ${phone}</li>` : ""}
    </ul>
    <p>Sie können dem Absender schreiben in dem Sie direkt auf diese E-Mail antworten.</p>
  `;
}
