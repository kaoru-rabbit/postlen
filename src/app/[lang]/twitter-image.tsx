export const dynamic = "force-static";
export { default, size, contentType } from "./opengraph-image";
export function generateStaticParams() {
  return [{ lang: "en" }, { lang: "ja" }];
}
