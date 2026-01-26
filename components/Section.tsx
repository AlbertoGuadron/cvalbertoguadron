
export default function Section({
  title,
  children
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <section className="rounded-2xl border bg-white/60 p-6 shadow-sm backdrop-blur dark:bg-white/5">
      <h2 className="mb-4 text-lg font-semibold tracking-tight">{title}</h2>
      {children}
    </section>
  );
}
