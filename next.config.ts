import type { NextConfig } from 'next'

// Third parties: analytics (GA4, Clarity), the phone input's flag images (cdnjs) and the Vercel preview toolbar.
const contentSecurityPolicy = [
  "default-src 'self'",
  "script-src 'self' 'unsafe-inline' https://www.googletagmanager.com https://*.clarity.ms https://vercel.live",
  "style-src 'self' 'unsafe-inline'",
  "img-src 'self' data: blob: https://cdnjs.cloudflare.com https://*.google-analytics.com https://*.googletagmanager.com https://*.clarity.ms https://c.bing.com",
  "font-src 'self' data:",
  "connect-src 'self' https://*.google-analytics.com https://*.analytics.google.com https://*.googletagmanager.com https://*.clarity.ms https://c.bing.com https://vercel.live",
  'frame-src https://vercel.live',
  "frame-ancestors 'none'",
  "base-uri 'self'",
  "form-action 'self'",
  "object-src 'none'",
  'upgrade-insecure-requests',
].join('; ')

// The dev server needs eval for fast refresh, so the CSP only applies to production builds.
const isProduction = process.env.NODE_ENV === 'production'

const nextConfig: NextConfig = {
  images: {
    formats: ['image/webp'],
    remotePatterns: [],
  },
  async headers() {
    return [
      {
        source: '/(.*)',
        headers: [
          { key: 'X-Content-Type-Options', value: 'nosniff' },
          { key: 'X-Frame-Options', value: 'DENY' },
          { key: 'Referrer-Policy', value: 'strict-origin-when-cross-origin' },
          { key: 'Permissions-Policy', value: 'camera=(), microphone=(), geolocation=(), browsing-topics=()' },
          ...(isProduction ? [{ key: 'Content-Security-Policy', value: contentSecurityPolicy }] : []),
        ],
      },
    ]
  },
}

export default nextConfig
