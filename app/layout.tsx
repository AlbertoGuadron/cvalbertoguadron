import './globals.css';
import ThemeProvider from '@/components/ThemeProvider';

export default function RootLayout({children}: {children: React.ReactNode}) {
  return (
    <html lang="es" suppressHydrationWarning>
      <body>
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
}
