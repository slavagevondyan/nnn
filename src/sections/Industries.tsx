import { useState } from "react";
import { Container, H2, Lead, Section } from "../lib/ui";
import { lineIcons } from "../lib/icons";
import { cn } from "../utils/cn";

type Industry = {
  key: string;
  label: string;
  icon: keyof typeof lineIcons;
  title: string;
  text: string;
  points: string[];
};

const INDUSTRIES: Industry[] = [
  {
    key: "it",
    label: "ИТ и разработка",
    icon: "it",
    title: "ИТ-подразделения и разработка ПО",
    text: "Спринты, релизы и поддержка в одном контуре с классическим планом работ по договору.",
    points: ["Доска задач и бэклог", "Учёт трудозатрат по задачам", "Связь релизов с этапами договора"],
  },
  {
    key: "prod",
    label: "Производство",
    icon: "factory",
    title: "Промышленное производство",
    text: "Планирование освоения изделий, технологической подготовки и опытных партий.",
    points: ["Сетевые графики подготовки", "Загрузка цехов и участков", "Контроль сроков поставок"],
  },
  {
    key: "build",
    label: "Строительство",
    icon: "build",
    title: "Строительство и проектирование",
    text: "Календарно-сетевые графики объектов, контроль подрядчиков и выпуск проектной документации.",
    points: ["График по объектам и очередям", "Реестр замечаний и согласований", "Контроль КС-2 / КС-3 по этапам"],
  },
  {
    key: "energy",
    label: "Энергетика",
    icon: "energy",
    title: "Энергетика и инфраструктура",
    text: "Ремонтные кампании, инвестпрограммы и техприсоединение с жёсткими нормативными сроками.",
    points: ["Годовая ремонтная программа", "Приоритизация инвестпроектов", "Отчётность по регламентам"],
  },
  {
    key: "gov",
    label: "Госсектор и НИИ",
    icon: "gov",
    title: "Государственные заказчики и НИИ",
    text: "Работы по госконтрактам и НИОКР с прослеживаемостью решений и защищённым контуром данных.",
    points: ["Этапы по календарному плану ГК", "Учёт отчётных документов", "Развёртывание в закрытом контуре"],
  },
  {
    key: "science",
    label: "Наука и образование",
    icon: "science",
    title: "Научные центры и вузы",
    text: "Гранты, хоздоговорные темы и лабораторные проекты с общим реестром исполнителей.",
    points: ["Реестр тем и грантов", "Занятость научных сотрудников", "Отчёты по этапам финансирования"],
  },
];

export default function Industries() {
  const [active, setActive] = useState(0);
  const item = INDUSTRIES[active];
  const Icon = lineIcons[item.icon];

  return (
    /* 6.7 — light blue: визуально отделяет интерактивный блок от соседних */
    <Section id="usage" tone="mist">
      <Container>
        <div className="max-w-[60ch]">
          <H2>Применение</H2>
          <Lead>
            Система применяется в организациях с проектным типом деятельности. Ядро одинаково для
            всех отраслей, отличаются справочники, шаблоны проектов и формы отчётов. Выберите
            отрасль, чтобы увидеть характерный сценарий работы.
          </Lead>
        </div>

        <div className="mt-10 grid gap-5 lg:grid-cols-[320px_1fr]">
          {/* Вертикальные строки-кнопки: активная залита жёлтым целиком */}
          <div className="flex flex-col gap-2">
            {INDUSTRIES.map((ind, i) => {
              const isActive = i === active;
              const RowIcon = lineIcons[ind.icon];
              return (
                <button
                  key={ind.key}
                  type="button"
                  onClick={() => setActive(i)}
                  className={cn(
                    "flex items-center gap-3 rounded-[10px] px-4 py-3.5 text-left text-[14.5px] font-semibold transition-colors",
                    isActive
                      ? "bg-gold text-navy"
                      : "border border-navy/12 bg-white text-navy/80 hover:border-brand/40 hover:text-brand",
                  )}
                >
                  <RowIcon className={cn("h-5 w-5 shrink-0", isActive ? "text-navy" : "text-brand")} />
                  {ind.label}
                </button>
              );
            })}
          </div>

          {/* Раскрытая карточка выбранной отрасли */}
          <div className="rounded-[10px] border border-navy/12 bg-white p-7 sm:p-9">
            <div className="flex items-start gap-5">
              <span className="flex h-14 w-14 shrink-0 items-center justify-center rounded-[10px] border border-brand/25 text-brand">
                <Icon className="h-7 w-7" />
              </span>
              <div>
                <h3 className="text-[20px] font-bold leading-snug text-navy sm:text-[23px]">
                  {item.title}
                </h3>
                <p className="mt-3 max-w-[60ch] text-[14.5px] leading-[1.75] text-dim">{item.text}</p>
              </div>
            </div>

            <ul className="mt-7 grid gap-3 border-t border-navy/10 pt-6 sm:grid-cols-3">
              {item.points.map((p) => (
                <li key={p} className="flex gap-2.5 text-[13.5px] leading-snug text-ink/85">
                  <span className="mt-[7px] h-1.5 w-1.5 shrink-0 rounded-full bg-gold" />
                  {p}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Container>
    </Section>
  );
}
