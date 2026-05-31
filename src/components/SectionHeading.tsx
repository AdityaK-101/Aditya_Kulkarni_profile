export function SectionHeading({ eyebrow, title, description }: { eyebrow: string; title: string; description?: string }) {
  return (
    <section className="px-4 py-8 sm:px-6 lg:px-8 lg:py-10">
      <div className="mx-auto max-w-7xl">
        <div className="mb-8 max-w-3xl space-y-4">
          <p className="text-xs font-semibold uppercase tracking-[0.34em] text-muted">{eyebrow}</p>
          <h2 className="font-display text-4xl leading-[0.95] sm:text-5xl lg:text-6xl">{title}</h2>
          {description && <p className="max-w-2xl text-base leading-7 text-muted sm:text-lg">{description}</p>}
        </div>
      </div>
    </section>
  );
}