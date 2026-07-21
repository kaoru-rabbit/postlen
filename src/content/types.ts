export type Block =
  | { type: "p"; text: string }
  | { type: "list"; items: string[] }
  | { type: "table"; headers: string[]; rows: string[][] };

export type Section = {
  heading: string;
  blocks: Block[];
};

export type Article = {
  slug: string;
  lang: "en" | "ja";
  title: string;
  description: string;
  date: string;
  sections: Section[];
  faq: { q: string; a: string }[];
};
