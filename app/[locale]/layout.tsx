import {NextIntlClientProvider} from 'next-intl';
import {notFound} from 'next/navigation';

const locales = ['es', 'en'] as const;
type Locale = (typeof locales)[number];

type Props = {
  children: React.ReactNode;
  params: {locale: string} | Promise<{locale: string}>;
};

export default async function LocaleLayout({children, params}: Props) {
  // Soporta params sync o Promise (Next 16 dev vs build)
  const resolvedParams = await Promise.resolve(params);
  const locale = resolvedParams.locale;

  if (!locales.includes(locale as Locale)) notFound();

  const messages = (await import(`../../messages/${locale}.json`)).default;

  return (
    <NextIntlClientProvider locale={locale} messages={messages}>
      {children}
    </NextIntlClientProvider>
  );
}

