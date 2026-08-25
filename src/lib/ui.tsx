import type { ReactNode } from "react";
import { cn } from "../utils/cn";

/* --- 3. Сетка: центрированная колонка, консервативная ширина --- */
export function Container({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  return <div className={cn("mx-auto w-full max-w-[1160px] px-5 sm:px-8", className)}>{children}</div>;
}

/* --- 6.7 Секции-фоны: три чередующихся состояния --- */
export function Section({
  id,
  tone = "paper",
  children,
  className,
}: {
  id?: string;
  tone?: "paper" | "mist" | "navy" | "white";
  children: ReactNode;
  className?: string;
}) {
  const tones: Record<string, string> = {
    paper: "bg-paper text-ink",
    white: "bg-white text-ink",
    mist: "bg-mist text-ink",
    navy: "bg-navy text-white",
  };
  return (
    <section
      id={id}
      className={cn("relative overflow-hidden py-16 sm:py-20", tones[tone], className)}
    >
      {children}
    </section>
  );
}

export function H2({
  children,
  tone = "dark",
  className,
}: {
  children: ReactNode;
  tone?: "dark" | "light";
  className?: string;
}) {
  return (
    <h2
      className={cn(
        "display text-[26px] leading-[1.1] sm:text-[34px]",
        tone === "light" ? "text-white" : "text-navy",
        className,
      )}
    >
      {children}
    </h2>
  );
}

export function Lead({
  children,
  tone = "dark",
  className,
}: {
  children: ReactNode;
  tone?: "dark" | "light";
  className?: string;
}) {
  return (
    <p
      className={cn(
        "mt-4 max-w-[62ch] text-[15px] leading-[1.7] sm:text-base",
        tone === "light" ? "text-mist/75" : "text-dim",
        className,
      )}
    >
      {children}
    </p>
  );
}

/* --- 6.2 Кнопки --- */
type BtnProps = {
  children: ReactNode;
  href?: string;
  variant?: "primary" | "secondary";
  tone?: "dark" | "light"; // фон, на котором стоит кнопка
  size?: "md" | "sm";
  className?: string;
  onClick?: () => void;
};

export function Button({
  children,
  href = "#cta",
  variant = "primary",
  tone = "light",
  size = "md",
  className,
  onClick,
}: BtnProps) {
  const base =
    "inline-flex items-center justify-center gap-2 rounded-full font-semibold transition-colors duration-150 whitespace-nowrap";
  const sizes = {
    md: "px-6 py-3 text-[15px]",
    sm: "px-4 py-2 text-[13px]",
  };
  const variants = {
    primary: "bg-gold text-navy hover:bg-gold-400",
    secondary:
      tone === "dark"
        ? "border border-white/45 text-white hover:border-white hover:bg-white/10"
        : "border border-navy/30 text-navy hover:border-navy hover:bg-navy/5",
  };
  return (
    <a
      href={href}
      onClick={onClick}
      className={cn(base, sizes[size], variants[variant], className)}
    >
      {children}
    </a>
  );
}

/* --- 6.3 Бейджи и теги --- */
export function Pill({
  children,
  tone = "light",
  className,
}: {
  children: ReactNode;
  tone?: "light" | "gold" | "outline-light";
  className?: string;
}) {
  const tones = {
    light: "bg-mist text-brand",
    gold: "bg-gold/20 text-[#8a5a00]",
    "outline-light": "border border-white/25 bg-white/8 text-mist/90",
  };
  return (
    <span
      className={cn(
        "inline-flex items-center gap-1.5 rounded-full px-3 py-1 text-[11px] font-semibold tracking-wide",
        tones[tone],
        className,
      )}
    >
      {children}
    </span>
  );
}

/* --- 6.6 Списки с иконками-статусами --- */
export function CheckIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 20 20" className={cn("h-[18px] w-[18px] shrink-0", className)} fill="none">
      <path
        d="M4 10.5 8 14.5 16 5.5"
        stroke="#FFA803"
        strokeWidth="2.4"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function CheckItem({ children }: { children: ReactNode }) {
  return (
    <li className="flex gap-3 text-[14.5px] leading-relaxed text-ink/85">
      <CheckIcon className="mt-[3px]" />
      <span>{children}</span>
    </li>
  );
}


