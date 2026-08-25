import { Button, CheckItem, Container, H2, Lead, Pill, Section } from "../lib/ui";
import { cn } from "../utils/cn";

const PLANS = [
  {
    name: "Базовая",
    summary:
      "Для проектных команд и подразделений, которым нужен единый план работ и прозрачный статус исполнения.",
    features: [
      "Проекты, этапы, задачи и вехи",
      "Список задач, Гантт, канбан, календарь",
      "Учёт трудозатрат и загрузки",
      "Базовые отчёты и выгрузка в Excel",
      "До 100 активных пользователей",
      "Обновления в течение года",
    ],
    recommended: false,
  },
  {
    name: "Корпоративная",
    summary:
      "Для организаций с портфелем проектов, несколькими подразделениями и требованиями к защищённому контуру.",
    features: [
      "Всё из базовой версии",
      "Портфели проектов и сводные дашборды",
      "Настраиваемые маршруты согласования",
      "Интеграции: 1С, AD/LDAP, почта, API",
      "Развёртывание в закрытом контуре",
      "Персональный регламент поддержки и SLA",
    ],
    recommended: true,
  },
];

export default function Pricing() {
  return (
    <Section id="pricing" tone="white">
      <Container>
        <div className="max-w-[62ch]">
          <H2>Версии системы</H2>
          <Lead>
            Система поставляется в двух редакциях. Лицензия приобретается на организацию и не
            зависит от числа проектов. Состав поставки и условия определяются после короткого
            обследования процессов.
          </Lead>
        </div>

        <div className="mt-10 grid gap-5 lg:grid-cols-2">
          {PLANS.map((p) => (
            <div
              key={p.name}
              className={cn(
                "relative flex flex-col rounded-[10px] border bg-white p-7 sm:p-9",
                p.recommended
                  ? "border-gold shadow-[0_16px_38px_-22px_rgba(11,26,77,0.4)]"
                  : "border-navy/12",
              )}
            >
              {p.recommended && (
                <Pill tone="gold" className="absolute right-6 top-6">
                  Рекомендуется
                </Pill>
              )}

              <p className="text-[13px] font-semibold uppercase tracking-[0.14em] text-brand">
                {p.name}
              </p>
              <p className="mt-3 text-[22px] font-bold leading-snug text-navy sm:text-[25px]">
                Редакция «{p.name}»
              </p>
              <p className="mt-4 border-t border-navy/10 pt-5 text-[14px] leading-relaxed text-dim">
                {p.summary}
              </p>

              <ul className="mt-6 flex-1 space-y-3">
                {p.features.map((f) => (
                  <CheckItem key={f}>{f}</CheckItem>
                ))}
              </ul>

              <div className="mt-8">
                {p.recommended ? (
                  <Button href="#cta" className="w-full">
                    Запросить демонстрацию
                  </Button>
                ) : (
                  <Button href="#cta" variant="secondary" className="w-full">
                    Задать вопрос
                  </Button>
                )}
              </div>
            </div>
          ))}
        </div>

        <p className="mt-6 text-[12.5px] leading-relaxed text-dim">
          Возможна поставка через реестр российского ПО, а также предоставление лицензий на срок
          проекта.
        </p>
      </Container>
    </Section>
  );
}
