import { useState } from "react";
import { Container, H2, Lead, Section, CheckIcon } from "../lib/ui";
import { RouteLead } from "../lib/patterns";
import {
  SceneScatter,
  SceneDrift,
  SceneReport,
  SceneHistory,
  SceneClosed,
  SceneHub,
} from "../lib/scenes";
import { cn } from "../utils/cn";

const PROBLEMS = [
  {
    title: "Данные о проектах разрознены",
    text: "Статус собирается вручную по почте и таблицам: у каждого подразделения своя версия плана, сводной картины по организации нет.",
    solution: "Единая база проектов, этапов и задач — статус портфеля виден в реальном времени.",
    Scene: SceneScatter,
  },
  {
    title: "Планы теряют актуальность",
    text: "Сроки, загрузка и приоритеты живут в разных файлах: через неделю после планирования документ уже не отражает реальность.",
    solution: "Изменение работы автоматически пересчитывает связанные этапы и критический путь.",
    Scene: SceneDrift,
  },
  {
    title: "Отчётность отнимает часы",
    text: "Сводки для руководства готовятся «под запрос»: руководители проектов тратят время на сбор цифр вместо управления работами.",
    solution: "Отчёты формируются из данных системы по расписанию или по одному клику.",
    Scene: SceneReport,
  },
  {
    title: "Нет истории решений",
    text: "Сложно проследить, кто и когда менял сроки, состав работ и ответственных — спорные ситуации разбираются по переписке.",
    solution: "Полный журнал изменений с базовым планом для сравнения «план — факт».",
    Scene: SceneHistory,
  },
  {
    title: "Требуется закрытый контур",
    text: "Облачные зарубежные сервисы недоступны или не проходят по требованиям информационной безопасности организации.",
    solution: "Развёртывание на серверах заказчика, в том числе в изолированном сегменте сети.",
    Scene: SceneClosed,
  },
];

export default function Problem() {
  const [open, setOpen] = useState(0);

  return (
    <Section id="tasks" tone="white">
      <Container>
        <div className="max-w-[62ch]">
          <H2>Решаемые задачи</H2>
          <Lead>
            Типовые потери организации без единого контура управления проектами. Раскройте пункт,
            чтобы увидеть, как задача закрывается в Планометрике.
          </Lead>
        </div>

        <div className="mt-10 grid gap-5 lg:grid-cols-[1.15fr_0.85fr] lg:items-start">
          {/* Аккордеон: краткий пункт → раскрытая подробность */}
          <div className="overflow-hidden rounded-[10px] border border-navy/12 bg-white">
            {PROBLEMS.map((p, i) => {
              const isOpen = i === open;
              return (
                <div key={p.title} className={cn(i > 0 && "border-t border-navy/10")}>
                  <button
                    type="button"
                    onClick={() => setOpen(isOpen ? -1 : i)}
                    aria-expanded={isOpen}
                    className={cn(
                      "flex w-full items-center gap-4 px-6 py-4 text-left transition-colors sm:px-7",
                      isOpen ? "bg-paper" : "hover:bg-paper/70",
                    )}
                  >
                    <span className="w-7 shrink-0 text-[19px] font-extrabold leading-none tracking-tight text-brand/30">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <span className="flex-1 text-[15px] font-semibold leading-snug text-navy">
                      {p.title}
                    </span>
                    <svg
                      viewBox="0 0 20 20"
                      className={cn(
                        "h-4 w-4 shrink-0 text-brand transition-transform duration-300",
                        isOpen && "rotate-180",
                      )}
                      fill="none"
                    >
                      <path
                        d="M5 7.5 10 12.5 15 7.5"
                        stroke="currentColor"
                        strokeWidth="1.8"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </button>

                  <div
                    className={cn(
                      "grid transition-all duration-300 ease-out",
                      isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0",
                    )}
                  >
                    <div className="overflow-hidden">
                      <div className="flex flex-col gap-5 bg-paper px-6 pb-6 sm:flex-row sm:items-center sm:px-7">
                        <div className="flex-1">
                          <p className="text-[14px] leading-relaxed text-dim">{p.text}</p>
                          <p className="mt-4 flex gap-2.5 text-[13.5px] font-medium leading-snug text-ink">
                            <CheckIcon className="mt-[2px]" />
                            {p.solution}
                          </p>
                        </div>
                        <div className="h-[104px] w-full shrink-0 rounded-[8px] border border-navy/10 bg-white p-3 sm:w-[190px]">
                          <p.Scene />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Тёмная плашка-ответ: линии приходят из-за края блока */}
          <div className="relative overflow-hidden rounded-[10px] bg-navy p-8 sm:p-9">
            <div className="relative">
              <p className="text-[21px] font-bold leading-[1.3] text-white sm:text-[24px]">
                Один контур вместо десятка таблиц
              </p>
              <ul className="mt-6 space-y-4">
                {[
                  "Планы, факт и отчётность в общей базе",
                  "Актуальный статус без ручного сбора",
                  "Прослеживаемость всех изменений",
                  "Работа внутри периметра организации",
                ].map((t) => (
                  <li
                    key={t}
                    className="relative pl-[30px] text-[14px] leading-snug text-mist/80"
                  >
                    <RouteLead color="#FFFFFF" inset={36} top={8} opacity={0.35} />
                    {t}
                  </li>
                ))}
              </ul>

              <div className="mt-7 rounded-[8px] border border-white/12 bg-white/[0.04] p-3">
                <SceneHub />
              </div>
            </div>
          </div>
        </div>
      </Container>
    </Section>
  );
}
