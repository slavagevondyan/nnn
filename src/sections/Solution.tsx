import { Container, H2, Lead, Section } from "../lib/ui";
import { RouteLead, LeadLinesPattern } from "../lib/patterns";

const KEY_POINTS = [
  "Единый план работ: иерархия проектов, этапов и задач с зависимостями и вехами",
  "Ресурсы и загрузка: плановая и фактическая трудоёмкость, календари подразделений",
  "Автоматическая отчётность по срокам, отклонениям и освоению бюджета",
  "Работа в контуре заказчика: установка на серверы организации",
];

const SPEC_GROUPS = [
  {
    group: "Платформа",
    rows: [
      ["Операционные системы", "Astra Linux, РЕД ОС, ALT Linux, Windows Server"],
      ["СУБД", "PostgreSQL, включая сертифицированные сборки"],
      ["Развёртывание", "On-premise, частное облако, изолированный сегмент сети"],
      ["Клиент", "Веб-браузер, без установки на рабочие места"],
    ],
  },
  {
    group: "Безопасность и доступ",
    rows: [
      ["Модель прав", "7 предустановленных ролей, гибкая настройка по объектам"],
      ["Аутентификация", "AD / LDAP, SSO, локальные учётные записи"],
      ["Аудит", "Журнал действий пользователей и история изменений объектов"],
      ["Соответствие", "Реестр российского ПО, работа в закрытом контуре"],
    ],
  },
  {
    group: "Интеграции и данные",
    rows: [
      ["1С", "Справочники, договоры, трудозатраты, финансовые показатели"],
      ["Программный интерфейс", "REST API и вебхуки для смежных систем"],
      ["Импорт", "MS Project, таблицы Excel и CSV"],
      ["Экспорт", "Excel, PDF, печатные формы отчётов"],
    ],
  },
];

const SCALE = [
  ["до 5 000", "одновременных пользователей"],
  ["5", "представлений одного проекта"],
  ["1", "база данных на организацию"],
];

export default function Solution() {
  return (
    <Section id="solution" tone="white">
      <Container>
        <div className="max-w-[62ch]">
          <H2>Особенности решения</H2>
          <Lead>
            Планометрика — продукт НИЦ СПб ЭТУ: функциональность корпоративного класса в сочетании
            с требованиями к защищённому контуру обработки данных.
          </Lead>
        </div>

        {/* Верхняя полоса: возможности на синей заливке + параметры масштаба */}
        <div className="mt-10 grid gap-5 lg:grid-cols-[1.1fr_0.9fr]">
          <div className="relative overflow-hidden rounded-[10px] bg-brand p-7 sm:p-9">
            {/* Фоновые линии из фона с точками — прижаты к правому краю блока */}
            <div className="pointer-events-none absolute inset-y-0 right-0 w-[42%]">
              <LeadLinesPattern color="#FFFFFF" opacity={0.28} />
            </div>
            <div className="relative">
              <p className="text-[17px] font-bold leading-snug text-white">Ключевые возможности</p>
              <ul className="mt-6 space-y-5">
                {KEY_POINTS.map((f) => (
                  <li
                    key={f}
                    className="relative pl-[30px] text-[14px] leading-relaxed text-white/85"
                  >
                    <RouteLead color="#FFFFFF" inset={36} top={8} opacity={0.5} />
                    {f}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="flex flex-col justify-between gap-6 rounded-[10px] border border-navy/12 bg-paper p-7 sm:p-9">
            <p className="text-[15px] leading-relaxed text-dim">
              Система рассчитана на постоянную работу подразделений в общей базе: данные проекта
              вводятся один раз и переиспользуются во всех представлениях и отчётах.
            </p>
            <dl className="grid grid-cols-3 gap-4 border-t border-navy/10 pt-6">
              {SCALE.map(([v, c]) => (
                <div key={c}>
                  <dt className="text-[22px] font-extrabold leading-none tracking-tight text-brand">
                    {v}
                  </dt>
                  <dd className="mt-2 text-[12px] leading-snug text-dim">{c}</dd>
                </div>
              ))}
            </dl>
          </div>
        </div>

        {/* Спецификация: три группы построчных характеристик */}
        <div className="mt-5 overflow-hidden rounded-[10px] border border-navy/12">
          {SPEC_GROUPS.map((g, gi) => (
            <div key={g.group} className={gi > 0 ? "border-t border-navy/12" : ""}>
              <div className="bg-mist px-6 py-3 sm:px-8">
                <p className="text-[12px] font-semibold uppercase tracking-[0.12em] text-brand">
                  {g.group}
                </p>
              </div>
              <dl>
                {g.rows.map(([label, value], ri) => (
                  <div
                    key={label}
                    className={`grid gap-1 bg-white px-6 py-3.5 transition-colors hover:bg-paper sm:grid-cols-[260px_1fr] sm:gap-6 sm:px-8 ${
                      ri > 0 ? "border-t border-navy/8" : ""
                    }`}
                  >
                    <dt className="text-[13.5px] font-medium text-dim">{label}</dt>
                    <dd className="text-[14px] leading-snug text-ink/90">{value}</dd>
                  </div>
                ))}
              </dl>
            </div>
          ))}
        </div>

        <p className="mt-5 text-[12.5px] leading-relaxed text-dim">
          Состав поставки и перечень интеграций уточняются на этапе обследования — система
          встраивается в существующий ландшафт без замены смежных сервисов.
        </p>
      </Container>
    </Section>
  );
}
