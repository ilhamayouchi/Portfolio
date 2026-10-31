import type { ReactNode } from "react";

export default function Timeline({ children }: { children: ReactNode }) {
  return <ol className="relative border-s-2 border-primary/40">{children}</ol>;
}

export function TimelineItem({ children }: { children: ReactNode }) {
  return (
    <li className="ms-8 pb-10 last:pb-0">
      <span className="absolute -start-[9px] mt-1.5 h-4 w-4 rounded-full border-4 border-background bg-primary" />
      {children}
    </li>
  );
}
