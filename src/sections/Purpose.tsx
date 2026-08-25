import { Container, H2, Lead, Section } from "../lib/ui";
import { RouteLead, OrbitPattern } from "../lib/patterns";

const PURPOSE_ITEMS = [
  {
    title: "Централизация данных",
    text: "Проекты, планы работ и загрузка исполнителей — в единой базе, а не в разрозненных файлах.",
  },
  {
    title: "Планирование работ и сроков",
    text: "Иерархия этапов и задач, вехи, зависимости, плановая трудоёмкость и бюджет проекта.",
  },
  {
    title: "Контроль исполнения",
    text: "Учёт факта, выявление отклонений по срокам и ресурсам, светофоры статусов портфеля.",
  },
  {
    title: "Отчётность для руководства",
    text: "Автоматические сводки по портфелю без ручного сбора данных у руководителей проектов.",
  },
];

const STATS = [
  ["до 5 000", "одновременных пользователей системы"],
  ["7 ролей", "в модели прав доступа"],
  ["On-premise", "или частное облако заказчика"],
];

export default function Purpose() {
  return (
    <Section id="purpose" tone="paper">
      <Container>
        <div className="max-w-[64ch]">
          <H2>Назначение</H2>
          <Lead>
            Планометрика предназначена для автоматизации всего цикла управления проектной
            деятельностью — от инициации проекта до его завершения и архива. Система ориентирована
            на проектные организации, конструкторские бюро, ИТ-подразделения и научные центры, где
            важны прослеживаемость решений, дисциплина сроков и защищённый контур обработки данных.
          </Lead>
        </div>

        {/* Четыре направления назначения — карточки с маршрутными маркерами */}
        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {PURPOSE_ITEMS.map((item) => (
            <div
              key={item.title}
              className="relative flex flex-col overflow-hidden rounded-[10px] border border-navy/12 bg-white p-6 transition-colors hover:border-brand/45"
            >
              <div className="relative pl-[26px]">
                <RouteLead color="#185ADB" inset={24} top={7} opacity={0.45} />
                <p className="text-[15px] font-bold leading-snug text-navy">{item.title}</p>
              </div>
              <p className="mt-3 text-[13.5px] leading-relaxed text-dim">{item.text}</p>
            </div>
          ))}
        </div>

        {/* Тёмная плашка с ключевыми параметрами + орбитальная текстура (4.1) */}
        <div className="relative mt-5 overflow-hidden rounded-[10px] bg-navy px-7 py-8 sm:px-10">
          <OrbitPattern compact focus={[50, 46]} fade={78} />
          <dl className="relative grid gap-6 sm:grid-cols-3 sm:gap-4">
            {STATS.map(([value, caption], i) => (
              <div
                key={caption}
                className={i > 0 ? "sm:border-l sm:border-white/12 sm:pl-6" : ""}
              >
                <dt className="text-[24px] font-extrabold leading-none tracking-tight text-white">
                  {value}
                </dt>
                <dd className="mt-2 text-[13px] leading-snug text-mist/65">{caption}</dd>
              </div>
            ))}
          </dl>
        </div>
      </Container>
    </Section>
  );
}
