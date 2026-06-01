import { ImageResponse } from 'next/og';

export const runtime = 'edge';
export const alt = 'Donald Edinam | Frontend Engineer';
export const size = {
  width: 1200,
  height: 630,
};
export const contentType = 'image/png';

export default async function Image() {
  // Fetch Satoshi fonts from the repository files
  const satoshiBold = await fetch(
    new URL('../public/fonts/satoshi/Satoshi-Bold.otf', import.meta.url)
  ).then((res) => res.arrayBuffer());

  const satoshiRegular = await fetch(
    new URL('../public/fonts/satoshi/Satoshi-Regular.otf', import.meta.url)
  ).then((res) => res.arrayBuffer());

  return new ImageResponse(
    (
      <div
        style={{
          background: '#1e1e1e',
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          fontFamily: 'Satoshi, sans-serif',
          color: '#f2f2f0',
          padding: '80px',
          boxSizing: 'border-box',
          position: 'relative',
        }}
      >
        {/* Accent dot in the background to match theme design */}
        <div
          style={{
            position: 'absolute',
            top: '80px',
            right: '80px',
            width: '24px',
            height: '24px',
            borderRadius: '50%',
            background: '#ffb347',
          }}
        />

        {/* Brand / Logo */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            fontSize: '20px',
            fontWeight: 700,
            letterSpacing: '0.05em',
            textTransform: 'uppercase',
            color: '#f2f2f0',
          }}
        >
          Donald Edinam
        </div>

        {/* Content Section */}
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            gap: '24px',
            maxWidth: '960px',
            marginTop: 'auto',
            marginBottom: 'auto',
          }}
        >
          <h1
            style={{
              fontSize: '52px',
              fontWeight: 700,
              lineHeight: 1.2,
              margin: 0,
              color: '#f2f2f0',
            }}
          >
            Frontend engineer designing{' '}
            <span style={{ color: '#ffb347' }}>calm, scalable digital systems</span>.
          </h1>
          <p
            style={{
              fontSize: '24px',
              lineHeight: 1.5,
              color: '#9ca3af',
              margin: 0,
            }}
          >
            I focus on clarity, structure, and longevity, building interfaces that feel inevitable, not improvised.
          </p>
        </div>

        {/* Footer Area */}
        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            borderTop: '1px solid #2d2d2d',
            paddingTop: '32px',
            fontSize: '18px',
            color: '#9ca3af',
          }}
        >
          <div style={{ display: 'flex', gap: '32px' }}>
            <span>Systems</span>
            <span>Interfaces</span>
            <span>Architecture</span>
          </div>
          <div
            style={{
              fontWeight: 500,
              color: '#ffb347',
            }}
          >
            donaldedinam.me
          </div>
        </div>
      </div>
    ),
    {
      ...size,
      fonts: [
        {
          name: 'Satoshi',
          data: satoshiRegular,
          weight: 400,
          style: 'normal',
        },
        {
          name: 'Satoshi',
          data: satoshiBold,
          weight: 700,
          style: 'normal',
        },
      ],
    }
  );
}
