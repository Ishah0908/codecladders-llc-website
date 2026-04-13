type InfoItem = {
  title: string;
  text: string;
};

type InfoGridProps = {
  items: InfoItem[];
};

export function InfoGrid({ items }: InfoGridProps) {
  return (
    <div className="mt-10 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
      {items.map((item, index) => (
        <article
          key={item.title}
          className="card rounded-[18px] bg-[#f5f5f7] p-7 animate-fade-up"
          style={{ animationDelay: `${index * 60}ms` }}
        >
          <h3 className="text-[21px] font-semibold text-[#1d1d1f]">{item.title}</h3>
          <p className="mt-3 text-[15px] leading-6 text-[#6e6e73]">{item.text}</p>
        </article>
      ))}
    </div>
  );
}

