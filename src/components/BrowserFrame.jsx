export default function BrowserFrame({ label, children, className = '', actions }) {
  return (
    <div className={`overflow-hidden rounded-xl border border-line bg-panel shadow-[0_30px_80px_-40px_rgba(0,0,0,0.8)] ${className}`}>
      <div className="flex h-10 items-center gap-3 border-b border-line bg-bg-2 px-4">
        <div className="flex gap-1.5" aria-hidden="true">
          <span className="h-2.5 w-2.5 rounded-full bg-line-2" />
          <span className="h-2.5 w-2.5 rounded-full bg-line-2" />
          <span className="h-2.5 w-2.5 rounded-full bg-line-2" />
        </div>
        <div className="mx-auto flex h-6 min-w-0 max-w-[60%] items-center rounded-md border border-line bg-panel px-3 font-mono text-[0.6875rem] text-muted">
          <span className="truncate">{label}</span>
        </div>
        <div className="flex w-[42px] justify-end">{actions}</div>
      </div>
      {children}
    </div>
  )
}
