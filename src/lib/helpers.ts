export function formatDate(date: string) {
  return new Intl.DateTimeFormat("de-DE", {
    month: "long",
    day: "numeric",
    year: "numeric",
  }).format(new Date(date));
}

export function getCategoryFromUrl(url: string) {
  return url.split("/")[2] as string;
}

export function removeFileExtension(filename: string) {
  return filename.substring(0, filename.lastIndexOf(".")) || filename;
}

export function getPostExcerpt(post: Record<string, any>) {
  return post.rawContent().substr(0, 255);
}

export function getPostThumbnail(post: Record<string, any>) {
  return post.data.images?.[0].src;
}

export function getCloudinaryUrl(
  src: string,
  extension: string,
  width: number,
  height?: number,
) {
  return `https://res.cloudinary.com/leoclub/image/upload/c_fill,g_center,w_${width},${
    height ? `h_${height},` : ""
  }q_65/${removeFileExtension(src)}.${extension}`;
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
