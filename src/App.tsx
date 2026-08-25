import Header from "./sections/Header";
import Hero from "./sections/Hero";
import Description from "./sections/Description";
import Purpose from "./sections/Purpose";
import Problem from "./sections/Problem";
import Stages from "./sections/Stages";
import Solution from "./sections/Solution";
import Industries from "./sections/Industries";
import Pricing from "./sections/Pricing";
import FinalCta from "./sections/FinalCta";
import Footer from "./sections/Footer";

export default function App() {
  return (
    <div className="min-h-screen bg-paper font-sans text-ink antialiased">
      <Header />
      <main>
        {/* 1. Превью */}
        <Hero />
        {/* 2. Описание */}
        <Description />
        {/* 3. Назначение */}
        <Purpose />
        {/* 4. Решаемые задачи */}
        <Problem />
        {/* 5. Этапы */}
        <Stages />
        {/* 6. Особенности решения */}
        <Solution />
        {/* 7. Применение */}
        <Industries />
        {/* 8. Версии системы */}
        <Pricing />
        {/* 9. Контакты */}
        <FinalCta />
      </main>
      <Footer />
    </div>
  );
}
