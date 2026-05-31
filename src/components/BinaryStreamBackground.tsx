const tracks = [
  { left: '6%', top: '8%', width: '18%', lines: 5, delay: -1.5 },
  { left: '18%', top: '18%', width: '14%', lines: 4, delay: -5 },
  { left: '31%', top: '6%', width: '16%', lines: 6, delay: -8 },
  { left: '46%', top: '14%', width: '18%', lines: 5, delay: -3.5 },
  { left: '61%', top: '10%', width: '14%', lines: 4, delay: -7 },
  { left: '74%', top: '22%', width: '16%', lines: 6, delay: -4 },
  { left: '86%', top: '12%', width: '12%', lines: 5, delay: -9 },
  { left: '52%', top: '34%', width: '20%', lines: 4, delay: -6 },
];

const patterns = [
  '0 1 0 1 0 0 1 0 1 1',
  '1 0 1 1 0 1 0 0 1 0',
  '0 0 1 0 1 1 0 1 0 1',
  '1 1 0 0 1 0 1 0 1 0',
  '0 1 1 0 0 1 0 1 1 0',
  '1 0 0 1 0 1 1 0 0 1',
];

export function BinaryStreamBackground() {
  return (
    <div aria-hidden="true" className="pointer-events-none absolute inset-0 overflow-hidden">
      <div className="absolute inset-0 opacity-[0.16] dark:opacity-[0.12]">
        {tracks.map((track, index) => (
          <div
            key={`${track.left}-${track.top}`}
            className="binary-stream absolute flex h-[120%] flex-col whitespace-pre text-[0.65rem] font-medium leading-6 tracking-[0.4em] text-ink/72 dark:text-paper/68"
            style={{
              left: track.left,
              top: track.top,
              width: track.width,
              animationDelay: `${track.delay}s`,
              animationDuration: `${12 + index * 1.2}s`,
            }}
          >
            {Array.from({ length: track.lines }).map((_, lineIndex) => (
              <span key={lineIndex}>{patterns[(index + lineIndex) % patterns.length]}</span>
            ))}
          </div>
        ))}
      </div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(245,244,239,0.24),transparent_40%)] dark:bg-[radial-gradient(circle_at_top,rgba(14,13,11,0.26),transparent_40%)]" />
    </div>
  );
}