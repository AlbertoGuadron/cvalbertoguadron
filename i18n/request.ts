import {getRequestConfig} from 'next-intl/server';
import {notFound} from 'next/navigation';

const locales = ['es', 'en'] as const;
type AppLocale = (typeof locales)[number];

export default getRequestConfig(async ({locale}) => {
  // Fallback seguro por si llega undefined
  const resolvedLocale = (locale ?? 'es') as AppLocale;

  // Si viene un locale no soportado, 404
  if (!locales.includes(resolvedLocale)) notFound();

  return {
    locale: resolvedLocale,
    messages: (await import(`../messages/${resolvedLocale}.json`)).default
  };
});
