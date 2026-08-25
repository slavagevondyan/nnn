import { Container, H2, Lead, Section } from "../lib/ui";
import { lineIcons } from "../lib/icons";

const STEPS = [
  {
    n: "01",
    title: "Инициализация",
    text: "Заявка на проект, паспорт, назначение руководителя и согласование по маршруту.",
  },
  {
    n: "02",
    title: "Планирование",
    text: "Иерархия работ, сроки, зависимости, вехи, плановая трудоёмкость и бюджет.",
  },
  {
    n: "03",
    title: "Исполнение",
    text: "Выдача задач, учёт факта, вложения и обсуждения в контексте каждой работы.",
  },
  {
    n: "04",
    title: "Мониторинг",
    text: "Отклонения по срокам и ресурсам, светофоры статусов, сводка по портфелю.",
  },
  {
    n: "05",
    title: "Завершение",
    text: "Закрытие работ, итоговые отчёты, архив документов и накопленный опыт.",
  },
];

const CHAIN = [
  "Лицензирование",
  "Настройка",
  "Миграция данных",
  "Интеграция",
  "Обучение",
  "Поддержка",
];

const SUPPORT = [
  {
    icon: "clock" as const,
    title: "Пилот за 2–4 недели",
    text: "Развёртывание тестового контура на инфраструктуре заказчика и настройка одного реального проекта.",
  },
  {
    icon: "users" as const,
    title: "Обучение ролей",
    text: "Отдельные программы для руководителей проектов, исполнителей и администраторов системы.",
  },
  {
    icon: "shield" as const,
    title: "Регламент поддержки",
    text: "Линия сопровождения с фиксированным временем реакции и плановыми обновлениями версий.",
  },
];

export default function Stages() {
  return (
    <Section id="stages" tone="paper">
      <Container>
        <div className="max-w-[62ch]">
          <H2>Этапы</H2>
          <Lead>
            Система поддерживает полный жизненный цикл проекта — от инициации до архива. Переход
            между этапами фиксируется в системе, история изменений сохраняется целиком.
          </Lead>
        </div>

        <ol className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
          {STEPS.map((s, i) => (
            <li
              key={s.n}
              className="rounded-[10px] border border-navy/12 bg-white p-5 transition-colors hover:border-brand/45"
            >
              <span
                className={`block text-[30px] font-extrabold leading-none tracking-tight ${
                  i === 0 || i === 4 ? "text-gold" : "text-brand"
                }`}
              >
                {s.n}
              </span>
              <p className="mt-3 text-[15px] font-bold text-navy">{s.title}</p>
              <p className="mt-2 text-[13px] leading-relaxed text-dim">{s.text}</p>
            </li>
          ))}
        </ol>

        {/* Этапы внедрения — горизонтальная pill-цепочка без номеров */}
        <div className="mt-12">
          <h3 className="text-[19px] font-bold text-navy">Этапы внедрения</h3>
          <p className="mt-2 max-w-[62ch] text-[14px] leading-relaxed text-dim">
            Последовательность шагов от поставки лицензий до постоянной эксплуатации. Этапы могут
            выполняться параллельно — состав работ фиксируется на старте проекта.
          </p>

          <div className="no-scrollbar -mx-5 mt-6 overflow-x-auto px-5 sm:mx-0 sm:px-0">
            <div className="flex min-w-max items-center gap-1.5 sm:min-w-0 sm:flex-wrap sm:gap-2">
              {CHAIN.map((step, i) => (
                <div key={step} className="flex items-center gap-1.5 sm:gap-2">
                  <span className="whitespace-nowrap rounded-full bg-mist px-4 py-2 text-[13.5px] font-medium text-navy">
                    {step}
                  </span>
                  {i < CHAIN.length - 1 && (
                    <svg
                      viewBox="0 0 20 20"
                      className="h-3.5 w-3.5 shrink-0 text-brand/45"
                      fill="none"
                    >
                      <path
                        d="M4 10h11M11 5.5 15.5 10 11 14.5"
                        stroke="currentColor"
                        strokeWidth="1.8"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  )}
                </div>
              ))}
            </div>
          </div>

          <div className="mt-8 grid gap-4 sm:grid-cols-3">
            {SUPPORT.map((s) => {
              const Icon = lineIcons[s.icon];
              return (
                <div key={s.title} className="rounded-[10px] border border-navy/12 bg-white p-6">
                  <Icon className="h-7 w-7 text-brand" />
                  <p className="mt-4 text-[15px] font-bold text-navy">{s.title}</p>
                  <p className="mt-2 text-[13.5px] leading-relaxed text-dim">{s.text}</p>
                </div>
              );
            })}
          </div>
        </div>
      </Container>
    </Section>
  );
}
