import type { Metadata, Viewport } from 'next'
import { Space_Grotesk, Archivo, Geist_Mono } from 'next/font/google'
import Script from 'next/script'
import { Providers } from './providers'
import './globals.css'

const spaceGrotesk = Space_Grotesk({
  variable: '--font-space-grotesk',
  subsets: ['latin'],
  display: 'swap',
  weight: ['300', '400', '500', '600', '700'],
})

const archivo = Archivo({
  variable: '--font-archivo',
  subsets: ['latin'],
  display: 'swap',
  weight: ['400', '500', '600', '700', '800', '900'],
})

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
  display: 'swap',
})

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? 'https://baselkaffoura.com'

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  themeColor: [
    { media: '(prefers-color-scheme: dark)', color: '#080c16' },
    { media: '(prefers-color-scheme: light)', color: '#ffffff' },
  ],
}

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: 'Basel Kaffoura - Senior Software Engineer',
    template: '%s | Basel Kaffoura',
  },
  description:
    'Senior Software Engineer with 8+ years of experience building production-grade fintech platforms, lead management systems, and internal tools. Based in Dubai, UAE. Serving UK and US markets.',
  keywords: [
    'Senior Software Engineer',
    'Senior Web Developer',
    'Fullstack Engineer',
    'Next.js Developer',
    'PHP Laravel Developer',
    'React Developer',
    'Python FastAPI',
    'Dubai UAE',
    'Fintech',
    'Software Engineer',
  ],
  authors: [{ name: 'Basel Kaffoura', url: siteUrl }],
  creator: 'Basel Kaffoura',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: siteUrl,
    siteName: 'Basel Kaffoura',
    title: 'Basel Kaffoura - Senior Software Engineer',
    description:
      'Senior Software Engineer building scalable enterprise systems across UAE, UK & USA markets. 8+ years of experience. Based in Dubai, UAE.',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Basel Kaffoura - Senior Software Engineer',
    description: 'Senior Software Engineer. Next.js · PHP · Python · Dubai, UAE.',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, 'max-image-preview': 'large' },
  },
  alternates: { canonical: siteUrl },
}

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${spaceGrotesk.variable} ${archivo.variable} ${geistMono.variable}`}
    >
      <body className="antialiased">
        <Providers>{children}</Providers>
        {process.env.NEXT_PUBLIC_GA_ID && (
          <>
            <Script
              src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GA_ID}`}
              strategy="lazyOnload"
            />
            <Script id="ga4-init" strategy="lazyOnload">
              {`
                window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                gtag('js', new Date());
                gtag('config', '${process.env.NEXT_PUBLIC_GA_ID}');
              `}
            </Script>
          </>
        )}
        {process.env.NEXT_PUBLIC_CLARITY_ID && (
          <Script id="clarity-init" strategy="lazyOnload">
            {`
              (function(c,l,a,r,i,t,y){
                c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
                c[a]('consentv2',{ad_Storage:'denied',analytics_Storage:'denied'});
                t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
                y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
              })(window,document,"clarity","script","${process.env.NEXT_PUBLIC_CLARITY_ID}");
            `}
          </Script>
        )}
      </body>
    </html>
  )
}
