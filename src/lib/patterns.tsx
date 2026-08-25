import { useId } from "react";
import { cn } from "../utils/cn";

/* ------------------------------------------------------------------ *
 * 4.1 — ОРБИТАЛЬНЫЙ ПАТТЕРН (текстура под текст на тёмном фоне)
 * Дуги/окружности, пересекаются. Толщина вариативна (2–3 градации).
 * Непрозрачность приглушённая: толстые ~15%, тонкие ~8%.
 * Узлы: 1–2 точки, 20–30%, вне зоны текста.
 * Радиальная маска — затухание паттерна в зоне текста.
 * ------------------------------------------------------------------ */

type OrbitPatternProps = {
  /** Центр «окна» под текст (в % ширины/высоты) — там паттерн затухает */
  focus?: [number, number];
  /** Радиус зоны затухания, % */
  fade?: number;
  className?: string;
  style?: React.CSSProperties;
  /** Компактная композиция для небольших плашек/карточек */
  compact?: boolean;
  /** Множитель заметности линий: 1 — базовые 8/15%, ниже — приглушённее */
  intensity?: number;
};

export function OrbitPattern({
  focus = [50, 52],
  fade = 68,
  className,
  style,
  compact = false,
  intensity = 1,
}: OrbitPatternProps) {
  const uid = useId().replace(/:/g, "");
  const maskId = `orbit-mask-${uid}`;
  const gradId = `orbit-grad-${uid}`;

  // 3–5 пересекающихся окружностей разного радиуса, нерегулярно,
  // с выходом за края блока (обрезаются границами).
  const thin = compact
    ? [
        { cx: 92, cy: 18, r: 78 },
        { cx: 12, cy: 96, r: 92 },
        { cx: 78, cy: 104, r: 60 },
      ]
    : [
        { cx: 118, cy: 44, r: 232 },
        { cx: 1096, cy: 372, r: 318 },
        { cx: 640, cy: 470, r: 402 },
      ];

  const thick = compact
    ? [
        { cx: 108, cy: 6, r: 44 },
        { cx: -6, cy: 70, r: 52 },
      ]
    : [
        { cx: 986, cy: 62, r: 150 },
        { cx: 156, cy: 348, r: 196 },
      ];

  const nodes = compact
    ? [
        { cx: 122, cy: 44, r: 2.4, o: 0.3 },
        { cx: 24, cy: 122, r: 2 , o: 0.22 },
      ]
    : [
        { cx: 1048, cy: 176, r: 4, o: 0.28 },
        { cx: 128, cy: 152, r: 3.2, o: 0.22 },
      ];

  const vb = compact ? "0 0 140 140" : "0 0 1280 480";

  return (
    <svg
      aria-hidden="true"
      className={cn("pointer-events-none absolute inset-0 h-full w-full", className)}
      style={style}
      viewBox={vb}
      preserveAspectRatio="xMidYMid slice"
      fill="none"
    >
      <defs>
        <radialGradient id={gradId} cx={`${focus[0]}%`} cy={`${focus[1]}%`} r={`${fade}%`}>
          <stop offset="0%" stopColor="#000000" />
          <stop offset="34%" stopColor="#1a1a1a" />
          <stop offset="72%" stopColor="#c8c8c8" />
          <stop offset="100%" stopColor="#ffffff" />
        </radialGradient>
        <mask id={maskId}>
          <rect x="0" y="0" width="100%" height="100%" fill={`url(#${gradId})`} />
        </mask>
      </defs>

      <g mask={`url(#${maskId})`} stroke="#ffffff" fill="none">
        {thin.map((c, i) => (
          <circle
            key={`t${i}`}
            cx={c.cx}
            cy={c.cy}
            r={c.r}
            strokeWidth={compact ? 0.7 : 1}
            strokeOpacity={0.08 * intensity}
          />
        ))}
        {thick.map((c, i) => (
          <circle
            key={`k${i}`}
            cx={c.cx}
            cy={c.cy}
            r={c.r}
            strokeWidth={compact ? 1.6 : 2.6}
            strokeOpacity={0.15 * intensity}
          />
        ))}
        {nodes.map((n, i) => (
          <circle
            key={`n${i}`}
            cx={n.cx}
            cy={n.cy}
            r={n.r}
            fill="#ffffff"
            fillOpacity={n.o * intensity}
            stroke="none"
          />
        ))}
      </g>
    </svg>
  );
}

/* ------------------------------------------------------------------ *
 * Декоративная (крупноплановая) версия орбиты — только там, где поверх
 * нет текста: иллюстративная колонка hero. Современный стиль: сплошные
 * кольца почти прозрачны, поверх — дуги с градиентным «хвостом»,
 * растворяющимся в фоне, и точкой-узлом на конце (мотив линий пунктов).
 * ------------------------------------------------------------------ */

function trailArc(
  cx: number,
  cy: number,
  r: number,
  startDeg: number,
  endDeg: number,
  sweep: 0 | 1,
) {
  const rad = (d: number) => (d * Math.PI) / 180;
  const x0 = +(cx + r * Math.cos(rad(startDeg))).toFixed(2);
  const y0 = +(cy + r * Math.sin(rad(startDeg))).toFixed(2);
  const x1 = +(cx + r * Math.cos(rad(endDeg))).toFixed(2);
  const y1 = +(cy + r * Math.sin(rad(endDeg))).toFixed(2);
  const large = Math.abs(endDeg - startDeg) > 180 ? 1 : 0;
  return { d: `M ${x0} ${y0} A ${r} ${r} 0 ${large} ${sweep} ${x1} ${y1}`, x0, y0, x1, y1 };
}

type TrailProps = {
  cx: number;
  cy: number;
  r: number;
  /** Угол, где стоит точка-узел (и конец градиентного хвоста) */
  endAngle: number;
  /** Длина дуги-хвоста, градусы */
  span: number;
  color: string;
  nodeR: number;
  duration: number;
  dir?: "cw" | "ccw";
  opacity?: number;
  width?: number;
};

function OrbitTrail({
  cx,
  cy,
  r,
  endAngle,
  span,
  color,
  nodeR,
  duration,
  dir = "cw",
  opacity = 1,
  width = 1.6,
}: TrailProps) {
  const uid = useId().replace(/:/g, "");
  const gid = `trail-${uid}`;
  const startAngle = dir === "cw" ? endAngle - span : endAngle + span;
  const path = trailArc(cx, cy, r, startAngle, endAngle, dir === "cw" ? 1 : 0);
  const rad = (endAngle * Math.PI) / 180;
  const nx = cx + r * Math.cos(rad);
  const ny = cy + r * Math.sin(rad);

  return (
    <g
      className={dir === "cw" ? "orbit-cw" : "orbit-ccw"}
      style={{
        transformBox: "view-box",
        transformOrigin: `${cx}px ${cy}px`,
        animationDuration: `${duration}s`,
      }}
    >
      <defs>
        <linearGradient
          id={gid}
          gradientUnits="userSpaceOnUse"
          x1={path.x0}
          y1={path.y0}
          x2={path.x1}
          y2={path.y1}
        >
          <stop offset="0" stopColor={color} stopOpacity="0" />
          <stop offset="0.7" stopColor={color} stopOpacity={opacity * 0.5} />
          <stop offset="1" stopColor={color} stopOpacity={opacity} />
        </linearGradient>
      </defs>
      <path
        d={path.d}
        stroke={`url(#${gid})`}
        strokeWidth={width}
        strokeLinecap="round"
        fill="none"
      />
      <circle cx={nx} cy={ny} r={nodeR} fill={color} />
    </g>
  );
}

export function OrbitDecor({ className }: { className?: string }) {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 460 460"
      className={cn("h-full w-full", className)}
      fill="none"
    >
      {/* Базовые кольца — почти прозрачная подложка */}
      <g fill="none">
        <circle cx="230" cy="230" r="212" stroke="#3FA9F5" strokeWidth="1" strokeOpacity="0.12" />
        <circle cx="230" cy="230" r="168" stroke="#FFFFFF" strokeWidth="1" strokeOpacity="0.12" />
        <circle cx="230" cy="230" r="118" stroke="#3FA9F5" strokeWidth="1" strokeOpacity="0.14" />
        <circle cx="230" cy="230" r="84" stroke="#FFFFFF" strokeWidth="1" strokeOpacity="0.1" />
        <ellipse
          cx="230"
          cy="230"
          rx="212"
          ry="82"
          stroke="#3FA9F5"
          strokeWidth="1"
          strokeOpacity="0.14"
          strokeDasharray="2 8"
          transform="rotate(-24 230 230)"
        />
      </g>

      {/* Живые дуги: градиентный хвост растворяется в фоне, точка — на конце */}
      <OrbitTrail cx={230} cy={230} r={212} endAngle={280} span={120} color="#FFA803" nodeR={6} duration={14} width={1.8} opacity={0.95} />
      <OrbitTrail cx={230} cy={230} r={168} endAngle={15} span={140} color="#FFA803" nodeR={4.5} duration={22} dir="ccw" opacity={0.85} />
      <OrbitTrail cx={230} cy={230} r={118} endAngle={122} span={110} color="#3FA9F5" nodeR={4} duration={30} width={1.5} opacity={0.9} />
      <OrbitTrail cx={230} cy={230} r={84} endAngle={320} span={90} color="#FFFFFF" nodeR={3} duration={38} dir="ccw" width={1.3} opacity={0.7} />
    </svg>
  );
}

/* ------------------------------------------------------------------ *
 * 6.3 / 4.2 — ORBIT-BADGE: окружность + крупная цифра + жёлтый узел
 * ------------------------------------------------------------------ */

export function OrbitBadge({
  value,
  caption,
  angle = -38,
}: {
  value: string;
  caption: string;
  angle?: number;
}) {
  const rad = (angle * Math.PI) / 180;
  const cx = 70 + 58 * Math.cos(rad);
  const cy = 70 + 58 * Math.sin(rad);

  return (
    <div className="flex flex-col items-center text-center">
      <div className="relative">
        <svg viewBox="0 0 140 140" className="h-[132px] w-[132px]" fill="none">
          <circle cx="70" cy="70" r="58" stroke="#185ADB" strokeWidth="2.5" strokeOpacity="0.85" />
          <circle cx="70" cy="70" r="66" stroke="#185ADB" strokeWidth="1" strokeOpacity="0.18" />
          {/* Жёлтый узел медленно обращается по орбите */}
          <g
            className="orbit-cw"
            style={{
              transformBox: "view-box",
              transformOrigin: "70px 70px",
              animationDuration: "16s",
            }}
          >
            <circle cx={cx} cy={cy} r="7" fill="#FFA803" />
          </g>
        </svg>
        <span className="absolute inset-0 flex items-center justify-center text-[28px] font-extrabold tracking-tight text-navy">
          {value}
        </span>
      </div>
      <p className="mt-3 max-w-[190px] text-sm leading-snug text-dim">{caption}</p>
    </div>
  );
}

/* ------------------------------------------------------------------ *
 * 4.2 — МАРШРУТНЫЙ ПАТТЕРН
 * Прямые углы со скруглением, линии не пересекаются, толщина единая,
 * узел-точка только в начале маршрута.
 * Как фон — приглушённая непрозрачность (текстура, не спорит с контентом);
 * как коннектор списка — полная непрозрачность, короткий маркер вплотную
 * к пункту.
 * ------------------------------------------------------------------ */

/* Применение №2 — фоновые линии-коннекторы: такие же, как маркеры пунктов:
   линия плавно выходит из фона и заканчивается точкой-узлом. Приглушённая
   декоративная текстура для заливок, не спорящая с контентом поверх. */
const LEAD_LINES: { top: string; width: string; o: number }[] = [
  { top: "14%", width: "46%", o: 1 },
  { top: "26%", width: "30%", o: 0.7 },
  { top: "40%", width: "58%", o: 0.85 },
  { top: "56%", width: "36%", o: 0.6 },
  { top: "70%", width: "52%", o: 0.9 },
  { top: "84%", width: "28%", o: 0.65 },
];

export function LeadLinesPattern({
  color = "#FFFFFF",
  opacity = 0.3,
  className,
}: {
  color?: string;
  opacity?: number;
  className?: string;
}) {
  return (
    <div
      aria-hidden="true"
      className={cn("pointer-events-none absolute inset-0 overflow-hidden", className)}
    >
      {LEAD_LINES.map((l, i) => (
        <span
          key={i}
          className="absolute flex items-center"
          style={{ left: 0, top: l.top, width: l.width, opacity: l.o * opacity }}
        >
          <span
            className="h-px flex-1"
            style={{ backgroundImage: `linear-gradient(to right, transparent, ${color})` }}
          />
          <span
            className="h-[5px] w-[5px] shrink-0 rounded-full"
            style={{ backgroundColor: color }}
          />
        </span>
      ))}
    </div>
  );
}

/* 4.2, применение №1 — коннектор для маркированных списков:
   линия не обрывается, а приходит из-за левого края блока (как продолжение
   фоновой маршрутной графики) и заканчивается точкой-узлом вплотную к тексту.
   Ставится внутрь `relative` строки списка; родительский блок — overflow-hidden.
   `inset` — внутренний отступ блока в px, чтобы линия дотянулась до его края. */
export function RouteLead({
  color = "#FFFFFF",
  inset = 36,
  top = 9,
  opacity = 1,
  className,
}: {
  color?: string;
  inset?: number;
  top?: number;
  opacity?: number;
  className?: string;
}) {
  return (
    <span
      aria-hidden="true"
      className={cn("pointer-events-none absolute flex items-center gap-0", className)}
      style={{ left: -inset, top, width: inset + 22 }}
    >
      {/* Линия плавно проявляется из фона — без резкого обрыва на краю блока */}
      <span
        className="h-px flex-1"
        style={{
          backgroundImage: `linear-gradient(to right, transparent, ${color} 70%)`,
          opacity,
        }}
      />
      {/* Точка-узел всегда целиком внутри блока, не попадает под обрезку */}
      <span className="h-[7px] w-[7px] shrink-0 rounded-full" style={{ backgroundColor: color }} />
    </span>
  );
}
