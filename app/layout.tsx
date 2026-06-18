import { ReactNode } from 'react';
import { Inter } from 'next/font/google';
import { cn } from '@/lib/utils';
import { Metadata } from 'next';
import Script from 'next/script';
import { ThemeProvider } from 'next-themes';
import { TooltipProvider } from '@radix-ui/react-tooltip';
import { siteConfig } from '@/config/site';

const inter = Inter({ subsets: ['latin'] });

import '@/styles/globals.css';

export const metadata: Metadata = {
  title: {
    template: '%s | Jasa Sedot WC Farisa Jaya',
    default: 'Jasa Sedot WC Farisa Jaya - Layanan Profesional 24 Jam',
  },
  description: `Layanan penyedotan WC profesional, cepat, dan terpercaya 24 jam. Bersih, Cepat, Profesional. Hubungi kami di ${siteConfig.phone}`,
  keywords: 'sedot WC, sedot limbah, sedot lumpur, cuci tangki air, layanan WC Pontianak',
  icons: {
    icon: '/logo.png',
  },
  openGraph: {
    title: 'Jasa Sedot WC Farisa Jaya',
    description: `Layanan penyedotan WC profesional 24 jam. Hubungi kami di ${siteConfig.phone}`,
    type: 'website',
  },
};

export default async function RootLayout({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <html className="h-full" suppressHydrationWarning>
      <head>
        <Script id="google-tag-manager" strategy="beforeInteractive">
          {siteConfig.analytics.googleTagManagerScript}
        </Script>
      </head>
      <body
        className={cn(
          'antialiased text-base text-foreground bg-background overflow-x-hidden',
          inter.className,
        )}
      >
        <noscript>
          <iframe
            src={`https://www.googletagmanager.com/ns.html?id=${siteConfig.analytics.googleTagManagerId}`}
            height="0"
            width="0"
            style={{ display: 'none', visibility: 'hidden' }}
          />
        </noscript>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          storageKey="saas-theme"
          enableSystem
          disableTransitionOnChange
          enableColorScheme
        >
          <TooltipProvider>
            {children}
          </TooltipProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
