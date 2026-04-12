type InfoItem = {
  title: string;
  text: string;
};

type InfoGridProps = {
  items: InfoItem[];
};

export function InfoGrid({ items }: InfoGridProps) {
  return (
    <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
      {items.map((item, index) => (
        <article
          key={item.title}
          className="card-surface animate-fade-up p-6"
          style={{ animationDelay: `${index * 80}ms` }}
        >
          <h3 className="font-display text-xl text-[var(--color-ink-900)]">{item.title}</h3>
          <p className="mt-3 text-sm leading-7 text-[var(--color-ink-600)]">{item.text}</p>
        </article>
      ))}
    </div>
  );
}
