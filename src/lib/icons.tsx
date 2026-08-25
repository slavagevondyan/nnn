import type { ReactNode } from "react";
import { cn } from "../utils/cn";

/* ================================================================== *
 * 5. ИКОНОГРАФИЯ — слой 1: плоские двухцветные иконки в пастельных
 * плашках. Только для функциональных/инструментальных блоков.
 * ================================================================== */

export function ToolPlate({
  bg,
  children,
  className,
}: {
  bg: string;
  children: ReactNode;
  className?: string;
}) {
  return (
    <div
      className={cn("flex h-12 w-12 items-center justify-center rounded-[10px]", className)}
      style={{ backgroundColor: bg }}
    >
      {children}
    </div>
  );
}

export const toolIcons = {
  tasks: (
    <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none">
      <rect x="3" y="4" width="18" height="16" rx="2.5" stroke="#185ADB" strokeWidth="1.6" />
      <path d="M7 9h4M7 13h6M7 17h3" stroke="#185ADB" strokeWidth="1.6" strokeLinecap="round" />
      <path d="M15.4 8.6l1.5 1.5 3-3.2" stroke="#E4572E" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  ),
  gantt: (
    <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none">
      <path d="M3 4v16h18" stroke="#185ADB" strokeWidth="1.6" strokeLinecap="round" />
      <rect x="6" y="6" width="9" height="2.6" rx="1.3" fill="#185ADB" />
      <rect x="9" y="10.7" width="10" height="2.6" rx="1.3" fill="#3FA9F5" />
      <rect x="6.5" y="15.4" width="6" height="2.6" rx="1.3" fill="#185ADB" opacity="0.55" />
    </svg>
  ),
  kanban: (
    <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none">
      <rect x="2.5" y="3.5" width="5.6" height="17" rx="1.6" stroke="#185ADB" strokeWidth="1.5" />
      <rect x="9.2" y="3.5" width="5.6" height="17" rx="1.6" stroke="#185ADB" strokeWidth="1.5" />
      <rect x="15.9" y="3.5" width="5.6" height="17" rx="1.6" stroke="#185ADB" strokeWidth="1.5" />
      <rect x="4" y="6" width="2.6" height="4" rx="1" fill="#FFA803" />
      <rect x="10.7" y="6" width="2.6" height="6.5" rx="1" fill="#3FA9F5" />
      <rect x="17.4" y="6" width="2.6" height="3" rx="1" fill="#185ADB" />
    </svg>
  ),
  calendar: (
    <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none">
      <rect x="3" y="5" width="18" height="16" rx="2.4" stroke="#185ADB" strokeWidth="1.6" />
      <path d="M3 9.6h18M8 3v4M16 3v4" stroke="#185ADB" strokeWidth="1.6" strokeLinecap="round" />
      <rect x="6.5" y="12.4" width="4" height="3.4" rx="1" fill="#3FA9F5" />
      <rect x="13" y="12.4" width="4.5" height="3.4" rx="1" fill="#185ADB" opacity="0.4" />
    </svg>
  ),
  dashboard: (
    <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none">
      <circle cx="12" cy="12" r="8.6" stroke="#185ADB" strokeWidth="1.6" />
      <path d="M12 12l4.6-3.4" stroke="#E4572E" strokeWidth="1.8" strokeLinecap="round" />
      <path d="M5.2 14.4a7.4 7.4 0 0 1 3-8.2" stroke="#3FA9F5" strokeWidth="1.8" strokeLinecap="round" />
      <circle cx="12" cy="12" r="1.6" fill="#185ADB" />
    </svg>
  ),
} as const;

/* ================================================================== *
 * 5. ИКОНОГРАФИЯ — слой 2: монохромные outline-иконки (единый синий
 * контур, без заливки) — для табов и однородных списков.
 * ================================================================== */

type LineIconProps = { className?: string };
const S = 1.5;

export const lineIcons = {
  it: ({ className }: LineIconProps) => (
    <svg viewBox="0 0 28 28" className={cn("h-7 w-7", className)} fill="none" stroke="currentColor" strokeWidth={S}>
      <rect x="2.6" y="4.4" width="22.8" height="15" rx="2.2" />
      <path d="M9 23.6h10M14 19.4v4.2" strokeLinecap="round" />
      <path d="M10.4 9.4 7.6 12l2.8 2.6M17.6 9.4 20.4 12l-2.8 2.6" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  ),
  factory: ({ className }: LineIconProps) => (
    <svg viewBox="0 0 28 28" className={cn("h-7 w-7", className)} fill="none" stroke="currentColor" strokeWidth={S}>
      <path d="M3 23.5V11.4l6.6 3.9V11.4l6.6 3.9V6.4h3.4l1.4 17.1H3Z" strokeLinejoin="round" />
      <path d="M7.6 19.6h2.6M14 19.6h2.6" strokeLinecap="round" />
    </svg>
  ),
  build: ({ className }: LineIconProps) => (
    <svg viewBox="0 0 28 28" className={cn("h-7 w-7", className)} fill="none" stroke="currentColor" strokeWidth={S}>
      <path d="M4 24V8.6l9-4.2 9 4.2V24" strokeLinejoin="round" />
      <path d="M9.4 24v-6.4h9V24" strokeLinejoin="round" />
      <path d="M11.6 11.4h4.4" strokeLinecap="round" />
      <path d="M2 24h24" strokeLinecap="round" />
    </svg>
  ),
  energy: ({ className }: LineIconProps) => (
    <svg viewBox="0 0 28 28" className={cn("h-7 w-7", className)} fill="none" stroke="currentColor" strokeWidth={S}>
      <path d="M15.6 3 6.4 15.6h6L12 25l9.6-12.8h-6.4L15.6 3Z" strokeLinejoin="round" />
    </svg>
  ),
  gov: ({ className }: LineIconProps) => (
    <svg viewBox="0 0 28 28" className={cn("h-7 w-7", className)} fill="none" stroke="currentColor" strokeWidth={S}>
      <path d="M3 11.2 14 4.6l11 6.6" strokeLinejoin="round" />
      <path d="M5.8 11.6v10M11.2 11.6v10M16.8 11.6v10M22.2 11.6v10" strokeLinecap="round" />
      <path d="M2.6 24.4h22.8" strokeLinecap="round" />
    </svg>
  ),
  science: ({ className }: LineIconProps) => (
    <svg viewBox="0 0 28 28" className={cn("h-7 w-7", className)} fill="none" stroke="currentColor" strokeWidth={S}>
      <path d="M11.4 3.4v7L5 21.2a2.2 2.2 0 0 0 1.9 3.3h14.2a2.2 2.2 0 0 0 1.9-3.3l-6.4-10.8v-7" strokeLinejoin="round" />
      <path d="M9.6 3.4h8.8" strokeLinecap="round" />
      <path d="M8.4 17.4h11.2" strokeLinecap="round" />
    </svg>
  ),
  shield: ({ className }: LineIconProps) => (
    <svg viewBox="0 0 28 28" className={cn("h-7 w-7", className)} fill="none" stroke="currentColor" strokeWidth={S}>
      <path d="M14 3.2 24 7v7.4c0 5.4-4.2 9-10 10.4-5.8-1.4-10-5-10-10.4V7l10-3.8Z" strokeLinejoin="round" />
      <path d="m9.8 13.8 3 3 5.4-5.6" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  ),
  server: ({ className }: LineIconProps) => (
    <svg viewBox="0 0 28 28" className={cn("h-7 w-7", className)} fill="none" stroke="currentColor" strokeWidth={S}>
      <rect x="3.4" y="4" width="21.2" height="8" rx="2" />
      <rect x="3.4" y="16" width="21.2" height="8" rx="2" />
      <path d="M7.4 8h.02M7.4 20h.02" strokeLinecap="round" strokeWidth="2.4" />
    </svg>
  ),
  users: ({ className }: LineIconProps) => (
    <svg viewBox="0 0 28 28" className={cn("h-7 w-7", className)} fill="none" stroke="currentColor" strokeWidth={S}>
      <circle cx="11" cy="9.6" r="4.2" />
      <path d="M3.4 23.4c0-4.2 3.4-6.8 7.6-6.8s7.6 2.6 7.6 6.8" strokeLinecap="round" />
      <path d="M19.2 6.2a4 4 0 0 1 0 7.6M21 16.9c2.4.8 4 2.9 4 6.5" strokeLinecap="round" />
    </svg>
  ),
  clock: ({ className }: LineIconProps) => (
    <svg viewBox="0 0 28 28" className={cn("h-7 w-7", className)} fill="none" stroke="currentColor" strokeWidth={S}>
      <circle cx="14" cy="14" r="10.6" />
      <path d="M14 7.8V14l4.4 2.8" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  ),
} as const;

export function ArrowRight({ className }: LineIconProps) {
  return (
    <svg viewBox="0 0 20 20" className={cn("h-4 w-4", className)} fill="none">
      <path
        d="M3.5 10h12M11 5.2 15.8 10 11 14.8"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
