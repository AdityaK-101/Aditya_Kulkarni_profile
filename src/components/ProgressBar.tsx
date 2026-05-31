export function ProgressBar({ label, value }: { label: string; value: number }) {
  return (
    <div>
      <div className="mb-2 flex items-center justify-between text-sm">
        <span className="font-medium">{label}</span>
        <span className="text-muted">{value}%</span>
      </div>
      <div className="h-2 rounded-full bg-black/8 dark:bg-white/10">
        <div className="h-2 rounded-full bg-ink dark:bg-paper" style={{ width: `${value}%` }} />
      </div>
    </div>
  );
}