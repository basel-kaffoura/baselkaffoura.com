import { readFile } from 'node:fs/promises'
import { join } from 'node:path'
import { ImageResponse } from 'next/og'
import { profile } from '@/data/profile'

export const ogSize = { width: 1200, height: 630 }
export const ogAlt = `${profile.name} — ${profile.title}`

const headline = `${profile.title} · ${profile.secondaryTitle}`
const status = `${profile.location} · ${profile.availability}`

// Fonts ship in assets/fonts (SIL OFL) so the image never depends on a network fetch at build time.
const loadFont = (file: string) => readFile(join(process.cwd(), 'assets/fonts', file))

export async function renderOgImage() {
  const [archivo, groteskMedium, groteskBold] = await Promise.all([
    loadFont('Archivo-ExtraBold.ttf'),
    loadFont('SpaceGrotesk-Medium.ttf'),
    loadFont('SpaceGrotesk-Bold.ttf'),
  ])
  const fonts = [
    { name: 'Archivo', data: archivo, weight: 800 as const, style: 'normal' as const },
    { name: 'Space Grotesk', data: groteskMedium, weight: 500 as const, style: 'normal' as const },
    { name: 'Space Grotesk', data: groteskBold, weight: 700 as const, style: 'normal' as const },
  ]

  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          padding: '60px 72px',
          backgroundColor: '#080c16',
          backgroundImage:
            'radial-gradient(circle at 8% 0%, rgba(0, 212, 255, 0.22), transparent 42%), radial-gradient(circle at 100% 100%, rgba(124, 58, 237, 0.26), transparent 48%)',
          color: '#e8ecf8',
          fontFamily: 'Space Grotesk',
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 18 }}>
            <div
              style={{
                width: 64,
                height: 64,
                borderRadius: 16,
                backgroundColor: '#00d4ff',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: '#080c16',
                fontFamily: 'Archivo',
                fontSize: 28,
                fontWeight: 800,
              }}
            >
              BK
            </div>
            <div style={{ fontSize: 28, fontWeight: 700, color: '#e8ecf8' }}>{profile.domain}</div>
          </div>
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: 12,
              padding: '10px 22px',
              borderRadius: 999,
              border: '1px solid rgba(255, 255, 255, 0.16)',
              backgroundColor: 'rgba(255, 255, 255, 0.05)',
              fontSize: 22,
              fontWeight: 500,
              color: '#c3cce0',
            }}
          >
            <div style={{ width: 12, height: 12, borderRadius: 6, backgroundColor: '#10b981' }} />
            {status}
          </div>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: 18 }}>
          <div
            style={{
              display: 'flex',
              fontFamily: 'Archivo',
              fontSize: 104,
              fontWeight: 800,
              letterSpacing: '-3px',
              lineHeight: 1,
            }}
          >
            <span style={{ color: '#00d4ff' }}>{profile.firstName}</span>
            <span style={{ marginLeft: 26, color: '#ffffff' }}>{profile.lastName}</span>
          </div>
          <div style={{ fontSize: 40, fontWeight: 700, color: '#ffffff' }}>{headline}</div>
          <div style={{ fontSize: 30, fontWeight: 500, color: '#9aa6c4' }}>{profile.specialty}</div>
        </div>

        <div style={{ display: 'flex', flexWrap: 'wrap', gap: 10 }}>
          {profile.coreStack.map((tech) => (
            <div
              key={tech}
              style={{
                padding: '8px 16px',
                borderRadius: 10,
                border: '1px solid rgba(0, 212, 255, 0.35)',
                backgroundColor: 'rgba(0, 212, 255, 0.07)',
                fontSize: 22,
                fontWeight: 500,
                color: '#cfeaf5',
              }}
            >
              {tech}
            </div>
          ))}
        </div>
      </div>
    ),
    { ...ogSize, fonts }
  )
}
