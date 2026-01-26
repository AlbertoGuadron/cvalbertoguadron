'use client';

import {usePathname} from 'next/navigation';
import Link from 'next/link';

export default function LanguageSwitcher({locale}: {locale: 'es' | 'en'}) {
  const pathname = usePathname();
  // pathname: /es/... o /en/...
  const other = locale === 'es' ? 'en' : 'es';
  const nextPath = pathname.replace(`/${locale}`, `/${other}`);

  return (
    <Link
      href={nextPath}
      className="rounded-xl border px-3 py-2 text-sm hover:bg-black/5 dark:hover:bg-white/10"
    >
      {other.toUpperCase()}
    </Link>
  );
}
