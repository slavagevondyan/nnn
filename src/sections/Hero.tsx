import { useEffect, useRef } from "react";
import { Button, Container, CheckIcon } from "../lib/ui";
import { OrbitDecor, OrbitPattern } from "../lib/patterns";

const TRUST = ["В реестре российского ПО", "Развёртывание в контуре заказчика"];

/* Экран 1 (задний план) — сводный дашборд портфеля, флэт-стиль */
function ScreenDashboard() {
  return (
    <div className="w-[280px] overflow-hidden rounded-[10px] bg-white sm:w-[310px]">
      <div className="flex items-center gap-2 bg-brand px-4 py-2.5">
        <span className="h-2 w-2 rounded-full bg-white/80" />
        <span className="h-2 w-2 rounded-full bg-white/50" />
        <span className="ml-2 text-[10.5px] font-semibold text-white">Портфель проектов</span>
      </div>

      <div className="space-y-3 p-4">
        <div className="grid grid-cols-3 gap-2">
          {[
            ["128", "проектов", "bg-mist text-brand"],
            ["94%", "в графике", "bg-[#FFF0D1] text-[#8a5a00]"],
            ["12", "рисков", "bg-[#FFE4EE] text-[#B23A48]"],
          ].map(([v, c, cls]) => (
            <div key={c} className={`rounded-[6px] px-2 py-2 ${cls}`}>
              <p className="text-[15px] font-extrabold leading-none">{v}</p>
              <p className="mt-1 text-[9px] font-medium opacity-80">{c}</p>
            </div>
          ))}
        </div>

        <div className="rounded-[6px] bg-paper p-3">
          <div className="flex h-[62px] items-end gap-1.5">
            {[38, 54, 30, 66, 44, 72, 50].map((h, i) => (
              <span
                key={i}
                className={`flex-1 rounded-[2px] ${i === 5 ? "bg-gold" : "bg-brand/30"}`}
                style={{ height: `${h}%` }}
              />
            ))}
          </div>
        </div>

        <div className="space-y-1.5">
          {[
            ["Модернизация линии", 82],
            ["НИОКР «Вектор»", 56],
          ].map(([label, val]) => (
            <div key={label as string}>
              <div className="flex items-center justify-between text-[9.5px]">
                <span className="font-medium text-navy">{label}</span>
                <span className="text-dim">{val}%</span>
              </div>
              <div className="mt-1 h-1.5 rounded-full bg-mist">
                <div
                  className="h-full rounded-full bg-brand"
                  style={{ width: `${val}%` }}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

/* Экран 2 (передний план) — план работ / диаграмма Ганта, флэт-стиль */
function ScreenGantt() {
  const rows: [string, number, number, string][] = [
    ["Обследование", 0, 42, "bg-brand"],
    ["Проектирование", 18, 46, "bg-azure"],
    ["Разработка", 38, 52, "bg-brand"],
    ["Испытания", 62, 32, "bg-gold"],
  ];
  return (
    <div className="w-[254px] overflow-hidden rounded-[10px] bg-white sm:w-[276px]">
      <div className="flex items-center justify-between border-b border-navy/10 px-4 py-2.5">
        <span className="text-[10.5px] font-bold text-navy">План работ</span>
        <span className="rounded-full bg-gold px-2 py-0.5 text-[8.5px] font-semibold text-navy">
          Q3
        </span>
      </div>

      <div className="space-y-2.5 p-4">
        <div className="flex gap-1">
          {["Июл", "Авг", "Сен"].map((m) => (
            <span key={m} className="flex-1 text-[8.5px] font-medium text-dim">
              {m}
            </span>
          ))}
        </div>

        {rows.map(([label, off, w, color]) => (
          <div key={label}>
            <p className="text-[9.5px] font-medium text-navy">{label}</p>
            <div className="mt-1 h-2 w-full rounded-full bg-paper">
              <div
                className={`h-full rounded-full ${color}`}
                style={{ marginLeft: `${off}%`, width: `${w}%` }}
              />
            </div>
          </div>
        ))}

        <div className="mt-1 flex items-center gap-2 rounded-[6px] bg-mist px-2.5 py-2">
          <span className="h-1.5 w-1.5 rounded-full bg-gold" />
          <span className="text-[9px] font-medium text-navy">Веха: приёмка этапа 15.09</span>
        </div>
      </div>
    </div>
  );
}

export default function Hero() {
  const layerRef = useRef<HTMLDivElement>(null);
  const decorRef = useRef<HTMLDivElement>(null);

  /* 4.1 — лёгкий параллакс/дрейф линий при скролле допустим только в hero */
  useEffect(() => {
    let frame = 0;
    const onScroll = () => {
      if (frame) return;
      frame = requestAnimationFrame(() => {
        frame = 0;
        const y = window.scrollY;
        if (layerRef.current) layerRef.current.style.transform = `translate3d(0, ${y * 0.14}px, 0)`;
        if (decorRef.current) decorRef.current.style.transform = `translate3d(0, ${y * -0.05}px, 0)`;
      });
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", onScroll);
      if (frame) cancelAnimationFrame(frame);
    };
  }, []);

  return (
    <section id="top" className="relative overflow-hidden bg-navy">
      <div className="absolute inset-0 bg-[radial-gradient(120%_100%_at_20%_0%,rgba(0,54,163,0.55),transparent_65%)]" />
      <div ref={layerRef} className="absolute inset-0 will-change-transform">
        <OrbitPattern focus={[30, 50]} fade={60} />
      </div>

      <Container className="relative grid items-center gap-14 py-16 sm:py-24 lg:grid-cols-[1fr_1fr]">
        <div>
          <h1 className="display text-[34px] text-white sm:text-[52px] sm:leading-[1.03]">
            Планометрика — система управления проектами организации
          </h1>

          <p className="mt-6 max-w-[54ch] text-[16px] leading-[1.75] text-mist/75">
            Единая среда для планирования работ, контроля исполнения и аналитики портфеля проектов.
            Российская разработка Научно-исследовательского центра СПб ЭТУ «ЛЭТИ» — для организаций,
            где счёт проектов идёт на десятки и сотни.
          </p>

          <div className="mt-9 flex flex-wrap gap-3">
            <Button href="#cta">Запросить демонстрацию</Button>
            <Button href="#pricing" variant="secondary" tone="dark">
              Версии системы
            </Button>
          </div>

          <ul className="mt-9 flex flex-wrap gap-x-8 gap-y-3">
            {TRUST.map((t) => (
              <li key={t} className="flex items-center gap-2 text-[13px] text-mist/70">
                <CheckIcon className="h-4 w-4" />
                {t}
              </li>
            ))}
          </ul>
        </div>

        {/* Два флэт-экрана продукта на орбитальной подложке */}
        <div ref={decorRef} className="relative hidden min-h-[440px] items-center justify-center will-change-transform lg:flex">
          <div className="absolute h-[430px] w-[430px] opacity-90">
            <OrbitDecor />
          </div>

          <div className="relative flex items-center">
            <div className="translate-y-[-30px]">
              <ScreenDashboard />
            </div>
            <div className="-ml-14 translate-y-[54px]">
              <ScreenGantt />
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
