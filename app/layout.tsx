import './globals.css';
import ThemeProvider from '@/components/ThemeProvider';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Alberto Guadron | Full Stack Developer',
  description: 'Curriculum Vitae de Alberto René Guadron Ramos',
  icons: {
    icon: '/favicon.ico', // aquí va tu AG
  },
};

export default function RootLayout({children}: {children: React.ReactNode}) {
  return (
    <html lang="es" suppressHydrationWarning>
      <body>
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
}
