import Link from 'next/link';

export default function DownloadCV({
  title,
  downloadEs,
  downloadEn
}: {
  title: string;
  downloadEs: string;
  downloadEn: string;
}) {
  return (
    <div className="rounded-2xl border bg-white/60 p-6 shadow-sm backdrop-blur dark:bg-white/5">
      <h2 className="mb-4 text-lg font-semibold tracking-tight">{title}</h2>

      <div className="flex flex-col gap-3 sm:flex-row">
        <a
          className="rounded-xl border px-4 py-3 text-sm hover:bg-black/5 dark:hover:bg-white/10"
          href="/documents/CV%20Alberto%20Guadron.pdf"
          download
        >
          ⬇️ {downloadEs}
        </a>

        <a
          className="rounded-xl border px-4 py-3 text-sm hover:bg-black/5 dark:hover:bg-white/10"
          href="/documents/CV%20Alberto%20Guadron%20English.pdf"
          download
        >
          ⬇️ {downloadEn}
        </a>

        <Link
          className="rounded-xl border px-4 py-3 text-sm hover:bg-black/5 dark:hover:bg-white/10"
          href="mailto:albertoguadron@gmail.com"
        >
          ✉️ Contacto
        </Link>
      </div>
    </div>
  );
}
