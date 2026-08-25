import { cn } from "../utils/cn";

/* Плоские (flat) мини-иллюстрации: только заливки брендовой палитры,
   без градиентов, теней и объёма. Используются в блоках «Решаемые задачи»
   и «Особенности решения». */

const W = "h-full w-full";

/** Разрозненные данные: несвязанные файлы/таблицы */
export function SceneScatter({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 200 120" className={cn(W, className)} fill="none">
      <rect x="8" y="16" width="52" height="40" rx="4" fill="#E5EEFF" />
      <rect x="16" y="26" width="30" height="4" rx="2" fill="#185ADB" opacity=".5" />
      <rect x="16" y="36" width="22" height="4" rx="2" fill="#185ADB" opacity=".3" />
      <rect x="76" y="46" width="52" height="40" rx="4" fill="#E5EEFF" />
      <rect x="84" y="56" width="34" height="4" rx="2" fill="#185ADB" opacity=".5" />
      <rect x="84" y="66" width="18" height="4" rx="2" fill="#185ADB" opacity=".3" />
      <rect x="140" y="12" width="52" height="40" rx="4" fill="#E5EEFF" />
      <rect x="148" y="22" width="26" height="4" rx="2" fill="#185ADB" opacity=".5" />
      <rect x="148" y="32" width="34" height="4" rx="2" fill="#185ADB" opacity=".3" />
      <path d="M60 40h16M128 62h12M112 34l24-8" stroke="#E4572E" strokeWidth="2" strokeDasharray="4 5" strokeLinecap="round" />
      <circle cx="100" cy="104" r="8" fill="#FFA803" />
      <path d="M97 104h6" stroke="#0B1A4D" strokeWidth="2" strokeLinecap="round" />
    </svg>
  );
}

/** Устаревший план: график с расхождением плана и факта */
export function SceneDrift({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 200 120" className={cn(W, className)} fill="none">
      <rect x="8" y="10" width="184" height="100" rx="6" fill="#F3F8FF" />
      <path d="M20 92h160" stroke="#185ADB" strokeWidth="1.5" opacity=".3" />
      <path d="M20 92 60 70l40-14 40-18 20-8" stroke="#185ADB" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M20 92 60 82l40 4 40-8 20 12" stroke="#E4572E" strokeWidth="2.5" strokeDasharray="5 5" strokeLinecap="round" strokeLinejoin="round" />
      <circle cx="180" cy="30" r="4" fill="#FFA803" />
      <circle cx="180" cy="82" r="4" fill="#E4572E" />
    </svg>
  );
}

/** Ручная отчётность: стопка документов и часы */
export function SceneReport({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 200 120" className={cn(W, className)} fill="none">
      <rect x="24" y="14" width="76" height="94" rx="5" fill="#E5EEFF" />
      <rect x="36" y="28" width="52" height="5" rx="2.5" fill="#185ADB" opacity=".55" />
      <rect x="36" y="42" width="40" height="5" rx="2.5" fill="#185ADB" opacity=".35" />
      <rect x="36" y="56" width="48" height="5" rx="2.5" fill="#185ADB" opacity=".35" />
      <rect x="36" y="70" width="30" height="5" rx="2.5" fill="#185ADB" opacity=".2" />
      <circle cx="146" cy="62" r="34" fill="#FFF0D1" />
      <circle cx="146" cy="62" r="24" fill="none" stroke="#FFA803" strokeWidth="3" />
      <path d="M146 46v16l11 7" stroke="#0B1A4D" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

/** История изменений: цепочка версий */
export function SceneHistory({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 200 120" className={cn(W, className)} fill="none">
      <path d="M28 60h144" stroke="#185ADB" strokeWidth="2" opacity=".28" />
      {[28, 76, 124, 172].map((x, i) => (
        <g key={x}>
          <circle cx={x} cy="60" r={i === 3 ? 11 : 8} fill={i === 3 ? "#FFA803" : "#E5EEFF"} />
          {i !== 3 && <circle cx={x} cy="60" r="3.5" fill="#185ADB" opacity=".6" />}
        </g>
      ))}
      <rect x="12" y="82" width="32" height="6" rx="3" fill="#185ADB" opacity=".25" />
      <rect x="60" y="82" width="32" height="6" rx="3" fill="#185ADB" opacity=".25" />
      <rect x="108" y="82" width="32" height="6" rx="3" fill="#185ADB" opacity=".25" />
      <rect x="152" y="82" width="40" height="6" rx="3" fill="#185ADB" opacity=".45" />
      <path d="M96 30h16m-8-8v16" stroke="#E4572E" strokeWidth="2.5" strokeLinecap="round" />
    </svg>
  );
}

/** Закрытый контур: щит и сервер */
export function SceneClosed({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 200 120" className={cn(W, className)} fill="none">
      <rect x="18" y="26" width="62" height="24" rx="4" fill="#E5EEFF" />
      <rect x="18" y="58" width="62" height="24" rx="4" fill="#E5EEFF" />
      <circle cx="30" cy="38" r="4" fill="#3FA9F5" />
      <circle cx="30" cy="70" r="4" fill="#3FA9F5" />
      <path d="M140 18l38 14v26c0 21-16 34-38 40-22-6-38-19-38-40V32l38-14Z" fill="#185ADB" />
      <path d="m126 58 11 11 20-21" stroke="#FFA803" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M84 54h18" stroke="#185ADB" strokeWidth="2" strokeLinecap="round" />
    </svg>
  );
}

/** Единый контур: экран с планом и сводкой */
export function SceneHub({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 240 140" className={cn(W, className)} fill="none">
      <rect x="10" y="12" width="220" height="116" rx="8" fill="#F3F8FF" />
      <rect x="10" y="12" width="220" height="20" rx="8" fill="#185ADB" />
      <circle cx="24" cy="22" r="3.5" fill="#FFFFFF" opacity=".8" />
      <circle cx="36" cy="22" r="3.5" fill="#FFFFFF" opacity=".5" />
      <rect x="22" y="44" width="60" height="72" rx="5" fill="#E5EEFF" />
      <rect x="32" y="56" width="40" height="5" rx="2.5" fill="#185ADB" opacity=".5" />
      <rect x="32" y="68" width="28" height="5" rx="2.5" fill="#185ADB" opacity=".3" />
      <rect x="32" y="80" width="34" height="5" rx="2.5" fill="#185ADB" opacity=".3" />
      <rect x="94" y="44" width="124" height="30" rx="5" fill="#FFFFFF" />
      <rect x="104" y="54" width="60" height="6" rx="3" fill="#3FA9F5" />
      <rect x="104" y="64" width="90" height="4" rx="2" fill="#185ADB" opacity=".2" />
      <rect x="94" y="84" width="58" height="32" rx="5" fill="#FFFFFF" />
      <rect x="160" y="84" width="58" height="32" rx="5" fill="#FFA803" />
      <rect x="104" y="96" width="34" height="6" rx="3" fill="#185ADB" opacity=".45" />
      <rect x="170" y="96" width="34" height="6" rx="3" fill="#0B1A4D" opacity=".55" />
    </svg>
  );
}

/** Интеграции: узлы вокруг ядра */
export function SceneIntegrations({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 200 120" className={cn(W, className)} fill="none">
      <path d="M100 60 40 28M100 60l60-32M100 60l-60 32M100 60l60 32" stroke="#185ADB" strokeWidth="1.6" opacity=".35" />
      <circle cx="100" cy="60" r="24" fill="#185ADB" />
      <rect x="90" y="52" width="20" height="16" rx="3" fill="#FFFFFF" opacity=".9" />
      {[
        [40, 28],
        [160, 28],
        [40, 92],
        [160, 92],
      ].map(([x, y], i) => (
        <circle key={i} cx={x} cy={y} r="12" fill={i === 1 ? "#FFA803" : "#E5EEFF"} />
      ))}
    </svg>
  );
}
