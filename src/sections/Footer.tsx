import { Container } from "../lib/ui";
import { LeadLinesPattern } from "../lib/patterns";
import { LogoMark } from "./Header";

const COLS = [
  {
    title: "Разделы",
    links: [
      { label: "Описание", href: "#description" },
      { label: "Назначение", href: "#purpose" },
      { label: "Решаемые задачи", href: "#tasks" },
      { label: "Этапы", href: "#stages" },
      { label: "Особенности решения", href: "#solution" },
    ],
  },
  {
    title: "Продукт",
    links: [
      { label: "Применение", href: "#usage" },
      { label: "Версии системы", href: "#pricing" },
      { label: "Контакты", href: "#cta" },
      { label: "НИЦ СПб ЭТУ", href: "#top" },
    ],
  },
];

export default function Footer() {
  return (
    <footer className="relative overflow-hidden bg-brand text-white">
      {/* 4.2, применение №2 — фоновые линии из фона с точками, как в пунктах */}
      <div className="pointer-events-none absolute inset-y-0 right-0 hidden w-[48%] lg:block">
        <LeadLinesPattern color="#FFFFFF" opacity={0.4} />
      </div>

      <Container className="relative py-14">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-[1.4fr_0.8fr_0.8fr]">
          <div>
            <div className="flex items-center gap-3">
              <span className="rounded-[6px] bg-white/12 p-1">
                <LogoMark className="h-7 w-7" />
              </span>
              <span className="text-[18px] font-bold tracking-tight text-white">Планометрика</span>
            </div>
            <p className="mt-4 max-w-[42ch] text-[13.5px] leading-relaxed text-white/70">
              Система управления проектами организации. Разработка Научно-исследовательского центра
              Санкт-Петербургского государственного электротехнического университета «ЛЭТИ».
            </p>
            <p className="mt-5 text-[13px] text-white/70">
              planometrika@nicetu.spb.ru
              <br />
              +7 (812) 234-56-78
            </p>
          </div>

          {COLS.map((col) => (
            <div key={col.title}>
              <p className="text-[13px] font-semibold text-white/75">{col.title}</p>
              <ul className="mt-4 space-y-2.5">
                {col.links.map((l) => (
                  <li key={l.label}>
                    <a
                      href={l.href}
                      className="text-[13.5px] text-white/80 transition-colors hover:text-white"
                    >
                      {l.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-12 flex flex-wrap items-center justify-between gap-4 border-t border-white/15 pt-6 text-[12px] text-white/60">
          <span>© {new Date().getFullYear()} НИЦ СПб ЭТУ. Все права защищены.</span>
          <span>Политика конфиденциальности · Реестр российского ПО</span>
        </div>
      </Container>
    </footer>
  );
}
