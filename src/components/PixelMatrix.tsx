const gridStyle = {
  backgroundImage: `
    repeating-linear-gradient(0deg, transparent, transparent 19px, black 19px, black 20px),
    repeating-linear-gradient(90deg, transparent, transparent 19px, black 19px, black 20px)
  `,
  backgroundSize: '20px 20px',
} as const;

const gridStyleWithMask = {
  ...gridStyle,
  maskImage: 'linear-gradient(to bottom, transparent 0%, black 100%)',
  WebkitMaskImage: 'linear-gradient(to bottom, transparent 0%, black 100%)',
} as const;

export function PixelMatrix({ withMask = false }: { withMask?: boolean }) {
  return (
    <div className="absolute inset-0 pointer-events-none opacity-[0.03] z-0">
      <div className="absolute inset-0" style={withMask ? gridStyleWithMask : gridStyle} />
    </div>
  );
}
