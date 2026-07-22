import Link from "next/link";

type LegalContent = {
  title: string;
  lastUpdated: string;
  intro: string;
  sections: { heading: string; body: string }[];
};

export function LegalPage({
  lang,
  content,
  backLabel,
}: {
  lang: string;
  content: LegalContent;
  backLabel: string;
}) {
  return (
    <div className="min-h-screen bg-zinc-50 text-zinc-700 dark:bg-zinc-950 dark:text-zinc-300">
      <div className="mx-auto max-w-2xl px-6 py-16">
        <Link
          href={`/${lang}`}
          className="inline-block py-2 text-sm text-zinc-600 transition-colors hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-zinc-200"
        >
          ← {backLabel}
        </Link>
        <h1 className="mt-6 text-3xl font-bold text-zinc-900 dark:text-zinc-100">
          {content.title}
        </h1>
        <p className="mt-2 text-sm text-zinc-500 dark:text-zinc-400">
          {content.lastUpdated}
        </p>
        <p className="mt-6 leading-relaxed">{content.intro}</p>
        {content.sections.map((section) => (
          <section key={section.heading} className="mt-8">
            <h2 className="text-lg font-semibold text-zinc-900 dark:text-zinc-100">
              {section.heading}
            </h2>
            <p className="mt-2 leading-relaxed">{section.body}</p>
          </section>
        ))}
      </div>
    </div>
  );
}
