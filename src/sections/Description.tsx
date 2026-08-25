import { useState } from "react";
import { Container, H2, Lead, Section } from "../lib/ui";
import { ToolPlate, toolIcons } from "../lib/icons";
import { OrbitBadge } from "../lib/patterns";
import { cn } from "../utils/cn";

type Tool = {
  key: keyof typeof toolIcons;
  bg: string;
  title: string;
  text: string;
};

const TOOLS: Tool[] = [
  {
    key: "tasks",
    bg: "var(--color-pastel-sky)",
    title: "Список задач",
    text: "Иерархический перечень работ с фильтрами, ответственными, сроками и приоритетами.",
  },
  {
    key: "gantt",
    bg: "var(--color-pastel-sun)",
    title: "Диаграмма Ганта",
    text: "Сроки, зависимости и критический путь. Сдвиг работы пересчитывает связанные этапы.",
  },
  {
    key: "kanban",
    bg: "var(--color-pastel-rose)",
    title: "Канбан-доска",
    text: "Статусы работ по колонкам, лимиты WIP и перенос задач между стадиями процесса.",
  },
  {
    key: "calendar",
    bg: "var(--color-pastel-lilac)",
    title: "Календарь",
    text: "Загрузка исполнителей по дням, вехи, отпуска и производственный календарь.",
  },
  {
    key: "dashboard",
    bg: "var(--color-pastel-mint)",
    title: "Дашборд",
    text: "Сводные показатели портфеля: отклонения, освоение бюджета, риски и статусы.",
  },
];

const METRICS = [
  { value: "30+", caption: "лет разработки промышленного и корпоративного ПО", angle: -52 },
  { value: "500+", caption: "реализованных проектов автоматизации", angle: -8 },
  { value: "1000+", caption: "организаций работают на решениях центра", angle: 214 },
];

const CARD_W = 272;
const STEP = CARD_W + 20;

function Preview({ kind }: { kind: Tool["key"] }) {
  const bar = "rounded-full";
  if (kind === "tasks")
    return (
      <div className="space-y-2">
        {[80, 62, 70].map((w, i) => (
          <div key={i} className="flex items-center gap-2">
            <span className="h-3 w-3 rounded-[3px] border border-brand/45" />
            <span className={cn(bar, "h-2 bg-brand/20")} style={{ width: `${w}%` }} />
          </div>
        ))}
      </div>
    );
  if (kind === "gantt")
    return (
      <div className="space-y-2">
        {[
          [0, 60],
          [22, 55],
          [40, 45],
        ].map(([o, w], i) => (
          <div key={i} className="h-2.5 w-full">
            <div
              className={cn(bar, "h-2.5", i === 1 ? "bg-gold/70" : "bg-brand/30")}
              style={{ marginLeft: `${o}%`, width: `${w}%` }}
            />
          </div>
        ))}
      </div>
    );
  if (kind === "kanban")
    return (
      <div className="grid grid-cols-3 gap-2">
        {[
          [10, 16],
          [22, 10],
          [14, 0],
        ].map((col, i) => (
          <div key={i} className="space-y-2 rounded-[5px] bg-mist/70 p-1.5">
            {col.map((h, j) =>
              h ? <div key={j} className={cn(bar, "bg-brand/30")} style={{ height: h }} /> : null,
            )}
          </div>
        ))}
      </div>
    );
  if (kind === "calendar")
    return (
      <div className="grid grid-cols-7 gap-1.5">
        {Array.from({ length: 21 }).map((_, i) => (
          <span
            key={i}
            className={cn("h-2.5 rounded-[2px]", [4, 9, 10, 16].includes(i) ? "bg-gold/70" : "bg-brand/15")}
          />
        ))}
      </div>
    );
  return (
    <div className="flex items-end gap-2">
      <span className="block h-10 w-10 shrink-0 rounded-full border-[3px] border-brand/30 border-t-gold" />
      {[14, 26, 20, 32].map((h, i) => (
        <span key={i} className={cn(bar, "w-3 bg-brand/25")} style={{ height: h }} />
      ))}
    </div>
  );
}

function ArrowBtn({
  dir,
  disabled,
  onClick,
}: {
  dir: -1 | 1;
  disabled: boolean;
  onClick: () => void;
}) {
  return (
    <button
      type="button"
      aria-label={dir < 0 ? "Предыдущая карточка" : "Следующая карточка"}
      onClick={onClick}
      disabled={disabled}
      className="flex h-9 w-9 items-center justify-center rounded-full border border-navy/20 text-navy transition-colors hover:border-brand hover:text-brand disabled:opacity-25"
    >
      <svg viewBox="0 0 20 20" className="h-4 w-4" fill="none">
        <path
          d={dir < 0 ? "M12.5 4 6.5 10l6 6" : "M7.5 4l6 6-6 6"}
          stroke="currentColor"
          strokeWidth="1.8"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </button>
  );
}

export default function Description() {
  const [active, setActive] = useState(2);
  const total = TOOLS.length;

  const go = (i: number) => setActive(Math.max(0, Math.min(total - 1, i)));

  return (
    <Section id="description" tone="white">
      <Container>
        <div className="max-w-[62ch]">
          <H2>Описание</H2>
          <Lead>
            Веб-приложение для управления проектами и портфелем проектов организации: план работ,
            ресурсы, фактические трудозатраты и отчётность хранятся в единой базе. Данные проекта
            едины — меняется только способ их читать: руководитель работает в диаграмме Ганта,
            команда — на доске, заказчик смотрит сводный дашборд.
          </Lead>
        </div>
      </Container>

      {/* Карусель: активная карточка всегда по центру */}
      <div className="relative mt-10">
        <div className="overflow-hidden">
          <div
            className="flex gap-5 px-5 pb-10 pt-6 transition-transform duration-500 ease-out"
            style={{
              transform: `translateX(calc(50% - ${CARD_W / 2}px - ${active * STEP}px))`,
            }}
          >
            {TOOLS.map((t, i) => {
              const isActive = i === active;
              return (
                <button
                  key={t.key}
                  type="button"
                  onClick={() => go(i)}
                  aria-pressed={isActive}
                  className={cn(
                    "w-[272px] shrink-0 rounded-[10px] border bg-white p-6 text-left transition-all duration-300",
                    isActive
                      ? "scale-[1.05] border-brand/60 shadow-[0_16px_36px_-18px_rgba(11,26,77,0.45)]"
                      : "border-navy/12 opacity-45 hover:opacity-80",
                  )}
                >
                  <ToolPlate bg={t.bg}>{toolIcons[t.key]}</ToolPlate>
                  <p className="mt-5 text-[16px] font-bold text-navy">{t.title}</p>
                  <p className="mt-2 min-h-[66px] text-[13.5px] leading-relaxed text-dim">{t.text}</p>
                  <div className="mt-4 rounded-[8px] border border-navy/10 bg-paper p-3.5">
                    <Preview kind={t.key} />
                  </div>
                </button>
              );
            })}
          </div>
        </div>

        {/* Мягкие границы-маски по краям полосы */}
        <div className="pointer-events-none absolute inset-y-0 left-0 w-12 bg-gradient-to-r from-white to-transparent sm:w-24" />
        <div className="pointer-events-none absolute inset-y-0 right-0 w-12 bg-gradient-to-l from-white to-transparent sm:w-24" />
      </div>

      {/* Управление: стрелки в одном ряду с кружочками */}
      <div className="mt-1 flex items-center justify-center gap-4">
        <ArrowBtn dir={-1} disabled={active === 0} onClick={() => go(active - 1)} />
        <div className="flex items-center gap-2">
          {TOOLS.map((t, i) => (
            <button
              key={t.key}
              type="button"
              aria-label={t.title}
              onClick={() => go(i)}
              className={cn(
                "h-1.5 rounded-full transition-all",
                i === active ? "w-7 bg-gold" : "w-1.5 bg-navy/20",
              )}
            />
          ))}
        </div>
        <ArrowBtn dir={1} disabled={active === total - 1} onClick={() => go(active + 1)} />
      </div>

      {/* Метрики разработчика — orbit-badge */}
      <Container>
        <div className="mt-14 border-t border-navy/10 pt-10">
          <p className="text-[16px] font-bold text-navy">Опыт разработчика — НИЦ СПб ЭТУ</p>
          <div className="mt-7 flex flex-wrap justify-center gap-x-10 gap-y-8 sm:justify-between">
            {METRICS.map((m) => (
              <OrbitBadge key={m.value} value={m.value} caption={m.caption} angle={m.angle} />
            ))}
          </div>
        </div>
      </Container>
    </Section>
  );
}
