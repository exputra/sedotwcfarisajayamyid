import { ReactNode } from 'react';
import { Inter } from 'next/font/google';
import { cn } from '@/lib/utils';
import { Metadata } from 'next';
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
  description: `${siteConfig.description}. Hubungi kami di ${siteConfig.phone}`,
  keywords: siteConfig.keywords,
  icons: {
    icon: '/logo.png',
  },
  openGraph: {
    title: 'Jasa Sedot WC Farisa Jaya',
    description: `${siteConfig.description}. Hubungi kami di ${siteConfig.phone}`,
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
        {/* Google Tag Manager */}
        <script
          dangerouslySetInnerHTML={{
            __html: siteConfig.analytics.googleTagManagerScript,
          }}
        />
        {/* End Google Tag Manager */}
      </head>
      <body
        className={cn(
          'antialiased text-base text-foreground bg-background overflow-x-hidden',
          inter.className,
        )}
      >
        {/* Google Tag Manager (noscript) */}
        <noscript>
          <iframe
            src={`https://www.googletagmanager.com/ns.html?id=${siteConfig.analytics.googleTagManagerId}`}
            height="0"
            width="0"
            style={{ display: 'none', visibility: 'hidden' }}
          />
        </noscript>
        {/* End Google Tag Manager (noscript) */}
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
