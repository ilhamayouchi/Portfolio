export default function SectionTitle({ eyebrow, title }: { eyebrow: string; title: string }) {
  return (
    <div className="mb-8">
      <p className="text-xs font-bold uppercase tracking-[0.18em] text-link">{eyebrow}</p>
      <h2 className="mt-2 text-3xl font-extrabold tracking-tight md:text-4xl">{title}</h2>
    </div>
  );
}
