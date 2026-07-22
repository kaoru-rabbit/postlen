import type { Block, Section } from "@/content/types";

function BlockView({ block }: { block: Block }) {
  if (block.type === "p") {
    return <p className="mt-4 leading-relaxed">{block.text}</p>;
  }

  if (block.type === "list") {
    return (
      <ul className="mt-4 space-y-2">
        {block.items.map((item) => (
          <li key={item} className="flex gap-3 leading-relaxed">
            <span
              aria-hidden="true"
              className="text-brand-700 select-none dark:text-zinc-500"
            >
              •
            </span>
            <span>{item}</span>
          </li>
        ))}
      </ul>
    );
  }

  return (
    <div className="mt-4 overflow-x-auto">
      <table className="w-full border-collapse text-sm">
        <thead>
          <tr className="border-b border-zinc-300 dark:border-zinc-700">
            {block.headers.map((h) => (
              <th
                key={h}
                className="whitespace-nowrap py-2 pr-4 text-left font-semibold text-zinc-900 dark:text-zinc-200"
              >
                {h}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {block.rows.map((row) => (
            <tr
              key={row.join("|")}
              className="border-b border-zinc-200 dark:border-zinc-800/70"
            >
              {row.map((cell, i) => (
                <td
                  key={i}
                  className={
                    i === 0
                      ? "whitespace-nowrap py-2 pr-4 text-zinc-800 dark:text-zinc-200"
                      : "py-2 pr-4 text-zinc-600 dark:text-zinc-400"
                  }
                >
                  {cell}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export function ArticleBody({
  sections,
  faq,
  faqHeading,
}: {
  sections: Section[];
  faq: { q: string; a: string }[];
  faqHeading: string;
}) {
  return (
    <>
      {sections.map((section) => (
        <section key={section.heading} className="mt-10">
          <h2 className="text-xl font-semibold text-zinc-900 dark:text-zinc-100">
            {section.heading}
          </h2>
          {section.blocks.map((block, i) => (
            <BlockView key={i} block={block} />
          ))}
        </section>
      ))}

      {faq.length > 0 && (
        <section className="mt-12">
          <h2 className="text-xl font-semibold text-zinc-900 dark:text-zinc-100">
            {faqHeading}
          </h2>
          {faq.map((item) => (
            <div key={item.q} className="mt-6">
              <h3 className="font-medium text-zinc-900 dark:text-zinc-200">
                {item.q}
              </h3>
              <p className="mt-2 leading-relaxed">{item.a}</p>
            </div>
          ))}
        </section>
      )}
    </>
  );
}
