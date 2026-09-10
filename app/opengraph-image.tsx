import { ImageResponse } from 'next/og';

import { SITE } from '~/config';

export const alt = SITE.title;
export const size = { width: 1200, height: 630 };
export const contentType = 'image/png';

export default function OpengraphImage() {
  return new ImageResponse(
    <div
      style={{
        width: '100%',
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        padding: 80,
        background: 'linear-gradient(135deg, #0f172a 0%, #1e3a8a 100%)',
        color: 'white',
      }}
    >
      <div style={{ fontSize: 30, opacity: 0.75 }}>{SITE.name}</div>
      <div style={{ fontSize: 68, fontWeight: 700, lineHeight: 1.15, marginTop: 24 }}>{SITE.title}</div>
    </div>,
    size,
  );
}
