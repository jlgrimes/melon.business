import { font } from '@/styles/fonts';
import './globals.css';

export const metadata = {
  title: 'melon',
  description: 'melon business',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='en'>
      <meta
        name='viewport'
        content='width=device-width, initial-scale=1.0, viewport-fit=cover'
      ></meta>
      <body className={font.className}>{children}</body>
    </html>
  );
}
