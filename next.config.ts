import createNextIntlPlugin from 'next-intl/plugin';

const withNextIntl = createNextIntlPlugin('./i18n/request.ts');

const nextConfig = {
  // aquí puedes dejar tu config existente si ya tienes cosas
};

export default withNextIntl(nextConfig);
