import { Button, Container, H2 } from "../lib/ui";
import { OrbitPattern } from "../lib/patterns";

const CONTACTS = [
  { label: "Телефон", value: "+7 (812) 234-56-78" },
  { label: "Почта", value: "planometrika@nicetu.spb.ru" },
  { label: "Адрес", value: "Санкт-Петербург, ул. Профессора Попова, 5" },
];

export default function FinalCta() {
  return (
    <section id="cta" className="relative overflow-hidden bg-navy py-18 sm:py-24">
      <div className="absolute inset-0 bg-[radial-gradient(110%_120%_at_85%_15%,rgba(0,54,163,0.5),transparent_60%)]" />
      {/* Приглушённая текстура: линии не должны конкурировать с текстом */}
      <OrbitPattern focus={[40, 50]} fade={58} intensity={0.45} />

      <Container className="relative grid gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
        <div>
          <H2 tone="light">Контакты</H2>
          <p className="mt-5 max-w-[54ch] text-[15.5px] leading-[1.75] text-mist/70">
            Демонстрация системы занимает 40 минут: разбираем текущий контур управления проектами
            и показываем, как те же данные выглядят в Планометрике. По итогам присылаем описание
            подходящей редакции и план пилотного внедрения.
          </p>

          <div className="mt-9 flex flex-wrap gap-3">
            <Button href="#cta">Запросить демонстрацию</Button>
            <Button href="#pricing" variant="secondary" tone="dark">
              Версии системы
            </Button>
          </div>
        </div>

        {/* Карточка контактов на тёмном фоне — компактная версия орбитального паттерна */}
        <div className="relative overflow-hidden rounded-[10px] border border-white/12 bg-white/[0.05] p-7 sm:p-8">
          <OrbitPattern compact focus={[50, 50]} fade={62} intensity={0.4} />
          <div className="relative">
            <dl className="space-y-5">
              {CONTACTS.map((c) => (
                <div key={c.label}>
                  <dt className="text-[12px] font-semibold text-mist/50">{c.label}</dt>
                  <dd className="mt-1 text-[15px] font-medium text-white">{c.value}</dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </Container>
    </section>
  );
}
