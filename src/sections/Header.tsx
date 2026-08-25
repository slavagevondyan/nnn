import { Button, Container } from "../lib/ui";

const NAV = [
  { label: "Описание", href: "#description" },
  { label: "Назначение", href: "#purpose" },
  { label: "Задачи", href: "#tasks" },
  { label: "Этапы", href: "#stages" },
  { label: "Особенности", href: "#solution" },
  { label: "Применение", href: "#usage" },
  { label: "Версии", href: "#pricing" },
];

export function LogoMark({ className = "h-8 w-8" }: { className?: string }) {
  return (
    <svg viewBox="0 0 32 32" className={className} fill="none" aria-hidden="true">
      <rect width="32" height="32" rx="6" fill="#185ADB" />
      <rect x="7" y="7" width="7" height="7" rx="1.4" fill="#FFFFFF" />
      <rect x="7" y="17.5" width="7" height="7.5" rx="1.4" fill="#FFFFFF" fillOpacity="0.5" />
      <rect x="17.5" y="7" width="7.5" height="18" rx="1.4" fill="#FFFFFF" fillOpacity="0.8" />
    </svg>
  );
}

export default function Header() {
  return (
    /* 6.1 Хедер: белый фон, тонкая нижняя граница, без эффектов */
    <header className="sticky top-0 z-50 border-b border-navy/10 bg-white">
      <Container className="flex h-[68px] items-center justify-between gap-6">
        <a href="#top" className="flex items-center gap-3">
          <LogoMark />
          <span className="text-[19px] font-bold tracking-tight text-brand">Планометрика</span>
          <span className="hidden text-[10px] font-medium tracking-[0.14em] text-dim sm:inline">
            НИЦ СПБ ЭТУ
          </span>
        </a>

        <nav className="hidden items-center gap-5 text-[13px] xl:flex">
          {NAV.map((n) => (
            <a
              key={n.href}
              href={n.href}
              className="font-medium text-dim transition-colors hover:text-brand"
            >
              {n.label}
            </a>
          ))}
        </nav>

        <Button size="sm" href="#cta" className="px-4 py-2.5 sm:px-5">
          <span className="hidden sm:inline">Запросить демонстрацию</span>
          <span className="sm:hidden">Демонстрация</span>
        </Button>
      </Container>
    </header>
  );
}
