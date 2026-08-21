import React from 'react';
import { Compass, Check, Phone, MessageSquare, ArrowRight, MapPin, Globe, Layers, FileCheck, Ruler, Building, ShieldCheck } from 'lucide-react';
import { NeoStyleLogo } from '../components/BrandLogos';

export const NeoStyleArchitecture: React.FC = () => {
  const architecturalProducts = [
    {
      name: 'Индивидуальное проектирование частных вилл и резиденций',
      badge: 'Премиум архитектура',
      desc: 'Полный комплекс проектных работ: генеральный план участка, архитектурный проект (АР), конструктивные расчеты (КР) под сейсмику 9 баллов и фотореалистичный 3D-альбом.',
      features: ['Монолитные консольные конструкции и панорамное остекление', 'Интеграция здания в горный ландшафт Ала-Тоо', 'BIM-моделирование инженерных сетей в Autodesk Revit', 'Авторский надзор за строительством до ввода в эксплуатацию'],
      tag: 'От 250 до 1 500 м²',
    },
    {
      name: 'Проектирование отелей, курортов и ресторанов',
      badge: 'Коммерческая недвижимость',
      desc: 'Создание знаковых коммерческих объектов на Иссык-Куле и в Бишкеке с проработанной технологической схемой, расчетом потоков гостей и энергоэффективности.',
      features: ['Объемно-планировочная концепция с высокой рентабельностью', 'Технологические карты кухонь и СПА-комплексов', 'Согласование документации в ГлавАПУ и Госэкспертизе', 'Уникальный визуальный код для привлечения гостей'],
      tag: 'HoReCa & Курорты',
    },
    {
      name: 'Архитектурный дизайн интерьеров бизнес- и премиум-класса',
      badge: 'Интерьерная монография',
      desc: 'Дизайн-проекты интерьеров с полным комплектом рабочих чертежей, разверток стен, ведомостей чистовых материалов и спецификацией освещения из Европы.',
      features: ['Натуральный камень, монолитный бетон и шпон ценных пород', 'Световой дизайн с несколькими сценариями освещения', 'Разработка заказных мебельных элементов', 'Комплектация материалами напрямую с фабрик Италии'],
      tag: 'Жилые и коммерческие интерьеры',
    },
    {
      name: 'Конструктивный расчет и аудит сейсмостойкости',
      badge: 'Инженерная надежность',
      desc: 'Расчет железобетонных и металлоконструкций по современным нормам сейсмостойкого строительства в Кыргызстане (9 баллов MSK-64).',
      features: ['Расчеты в сертифицированных комплексах ЛИРА-САПР / SCAD', 'Оптимизация расхода арматуры и бетона без потери прочности', 'Геологическая привязка фундаментов к грунтам', 'Официальная лицензия на проектирование I категории'],
      tag: 'Сейсмобезопасность 9 баллов',
    },
  ];

  const waMessage = `Добрый день, архитектурное бюро NeoStyle! Планируем проектирование виллы / коммерческого объекта в Кыргызстане. Хотим получить консультацию главного архитектора!`;
  const waUrl = `https://wa.me/996555801801?text=${encodeURIComponent(waMessage)}`;

  return (
    <div className="min-h-screen bg-[#0E1015] text-[#ECEFF1] font-sans selection:bg-slate-300 selection:text-black">
      {/* Top Architectural Bar */}
      <header className="border-b border-zinc-800 bg-[#08090C] px-6 py-2.5 text-xs text-slate-400 font-mono">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-3">
            <Compass className="w-3.5 h-3.5 text-white" />
            <span>NEOSTYLE ARCHITECTURE & DESIGN MONOGRAPH • Бишкек, ул. Токтогула, 125/1</span>
          </div>
          <div className="hidden sm:flex items-center gap-6">
            <span>Лицензия на проектирование I категории Госстроя КР</span>
            <a href="tel:+996555801801" className="text-white font-bold hover:underline">+996 555 801 801</a>
          </div>
        </div>
      </header>

      {/* Nav */}
      <nav className="sticky top-11 z-40 border-b border-zinc-800 bg-[#0E1015]/95 backdrop-blur px-6 py-4">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-3">
            <NeoStyleLogo className="h-10 w-auto" />
          </div>

          <div className="hidden md:flex items-center gap-8 text-xs font-mono uppercase tracking-wider text-slate-400">
            <a href="#about" className="hover:text-white transition">О бюро</a>
            <a href="#projects" className="hover:text-white transition">Направления</a>
            <a href="#standards" className="hover:text-white transition">BIM-стандарты</a>
            <a href="#contact" className="hover:text-white transition">Контакты</a>
          </div>

          <a
            href={waUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="px-5 py-2.5 rounded bg-white hover:bg-slate-200 text-black font-mono font-bold text-xs transition flex items-center gap-2 shadow-lg"
          >
            <MessageSquare className="w-3.5 h-3.5" />
            <span>Консультация архитектора</span>
          </a>
        </div>
      </nav>

      {/* Full-Bleed Hero Banner */}
      <section className="relative min-h-[580px] flex items-center border-b border-zinc-800 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src="/images/neostyle.jpg"
            alt="NeoStyle Architecture Ala-Too Villa"
            className="w-full h-full object-cover object-center brightness-[0.45] scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#0E1015] via-[#0E1015]/80 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0E1015] via-transparent to-transparent" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-6 py-20 w-full">
          <div className="max-w-2xl space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded bg-zinc-900 border border-zinc-700 text-slate-300 text-xs font-mono">
              <ShieldCheck className="w-3.5 h-3.5 text-white" />
              <span>Архитектура, определяющая статус и качество жизни</span>
            </div>

            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-[1.12]">
              Индивидуальное проектирование вилл и резиденций в Кыргызстане
            </h1>

            <p className="text-slate-300 text-base sm:text-lg leading-relaxed">
              Создаем чистую, монументальную архитектуру для предгорий Ала-Тоо и побережья Иссык-Куля: монолитный железобетон, консольные террасы, панорамное остекление и европейская инженерия.
            </p>

            <div className="flex flex-col sm:flex-row gap-3 pt-2 font-mono text-xs">
              <a
                href="#contact"
                className="px-7 py-4 rounded bg-white hover:bg-slate-200 text-black font-bold flex items-center justify-center gap-2 shadow-lg"
              >
                <span>Обсудить проект в WhatsApp</span>
                <ArrowRight className="w-4 h-4" />
              </a>
              <a
                href="#projects"
                className="px-7 py-4 rounded border border-zinc-700 bg-black/60 hover:bg-black/90 text-white font-medium flex items-center justify-center"
              >
                <span>Смотреть проекты</span>
              </a>
            </div>

            <div className="grid grid-cols-3 gap-6 pt-6 border-t border-zinc-800 font-mono text-xs text-slate-300">
              <div>
                <div className="text-xl font-bold text-white">45+</div>
                <div className="text-slate-500 text-[11px] mt-0.5">Вилл спроектировано</div>
              </div>
              <div>
                <div className="text-xl font-bold text-emerald-400">9 Баллов</div>
                <div className="text-slate-500 text-[11px] mt-0.5">Сейсмостойкость КР</div>
              </div>
              <div>
                <div className="text-xl font-bold text-cyan-400">100% BIM</div>
                <div className="text-slate-500 text-[11px] mt-0.5">3D Инженерия Revit</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-6 max-w-7xl mx-auto border-b border-zinc-800">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-6 space-y-6">
            <span className="text-xs font-mono font-bold text-slate-400 uppercase tracking-wider block">О бюро NeoStyle</span>
            <h2 className="text-2xl sm:text-4xl font-extrabold text-white">
              Авторская архитектура с глубоким пониманием контекста Тянь-Шаня
            </h2>
            <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
              <strong>NeoStyle</strong> — архитектурное бюро в Бишкеке, создающее современные объекты премиум-класса. Мы не используем типовые шаблонные решения. Каждое здание проектируется с учетом розы ветров, инсоляции, сейсмики и уникального рельефа участка.
            </p>
            <p className="text-slate-300 text-sm leading-relaxed">
              Мы работаем по стандарту информационного моделирования зданий (BIM): архитектор, конструктор и инженеры ОВ/ВК работают в единой 3D-модели, исключая ошибки на строительной площадке.
            </p>

            <div className="grid grid-cols-2 gap-4 pt-2 font-mono text-xs">
              <div className="p-4 rounded border border-zinc-800 bg-[#14171F]">
                <div className="font-bold text-white text-sm mb-1">Сейсмобезопасность</div>
                <p className="text-slate-400 text-[11px]">Жесткий расчет конструкций на землетрясения до 9 баллов.</p>
              </div>
              <div className="p-4 rounded border border-zinc-800 bg-[#14171F]">
                <div className="font-bold text-white text-sm mb-1">Энергопассивность</div>
                <p className="text-slate-400 text-[11px]">Энергосберегающие фасады с минимальными теплопотерями зимой.</p>
              </div>
            </div>
          </div>

          <div className="lg:col-span-6">
            <div className="rounded-2xl overflow-hidden border border-zinc-700 bg-[#14171F] p-2 shadow-2xl">
              <img
                src="/images/neostyle.jpg"
                alt="Проект виллы NeoStyle в Ала-Тоо"
                className="w-full h-auto object-cover rounded-xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Projects Showcase */}
      <section id="projects" className="py-20 px-6 max-w-7xl mx-auto border-b border-zinc-800 space-y-12">
        <div className="max-w-2xl space-y-2">
          <span className="text-xs font-mono font-bold text-slate-400 uppercase tracking-wider block">Направления проектирования</span>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-white">
            Услуги архитектурного проектирования
          </h2>
          <p className="text-slate-400 text-sm">
            Создаем полный комплекс проектной документации для строительства жилых и общественных зданий.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {architecturalProducts.map((proj, idx) => (
            <div
              key={idx}
              className="rounded-2xl border border-zinc-800 bg-[#14171F] p-6 hover:border-zinc-700 transition flex flex-col justify-between space-y-6 shadow-md"
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="px-3 py-1 rounded bg-white/10 text-white text-xs font-mono font-bold">
                    {proj.badge}
                  </span>
                  <span className="text-xs font-mono text-slate-400">{proj.tag}</span>
                </div>

                <div>
                  <h3 className="text-lg font-bold text-white">{proj.name}</h3>
                  <p className="text-xs text-slate-300 leading-relaxed mt-2">{proj.desc}</p>
                </div>

                <ul className="space-y-2 text-xs text-slate-200 border-t border-zinc-800 pt-4">
                  {proj.features.map((f, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <Check className="w-3.5 h-3.5 text-white shrink-0 mt-0.5" />
                      <span>{f}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="pt-4 border-t border-zinc-800 flex items-center justify-between">
                <span className="text-xs font-mono text-slate-400">Индивидуальный проект</span>
                <a
                  href={`https://wa.me/996555801801?text=${encodeURIComponent(`Добрый день! Хотим заказать проектирование по направлению: «${proj.name}».`)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2 rounded bg-white hover:bg-slate-200 text-black text-xs font-mono font-bold transition flex items-center gap-1.5"
                >
                  <span>Обсудить с архитектором</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Direct Contact Section */}
      <section id="contact" className="py-20 px-6 max-w-7xl mx-auto">
        <div className="rounded-3xl border border-zinc-700 bg-[#14171F] p-8 sm:p-12 text-white">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-7 space-y-6">
              <span className="text-xs font-mono text-slate-400 uppercase tracking-wider block">Встреча в офисе</span>
              <h2 className="text-3xl sm:text-4xl font-extrabold">
                Назначьте встречу с главным архитектором в Бишкеке
              </h2>
              <p className="text-slate-300 text-sm leading-relaxed">
                Приглашаем вас в наш офис на Токтогула. Мы покажем альбомы реализованных проектов, изучим кадастровый план вашего участка и предложим первые архитектурные идеи.
              </p>

              <div className="space-y-3 text-xs font-mono">
                <div className="flex items-center gap-3 text-slate-300">
                  <MapPin className="w-4 h-4 text-white shrink-0" />
                  <span>г. Бишкек, ул. Токтогула, 125/1 (Бизнес-центр «Авангард»)</span>
                </div>
                <div className="flex items-center gap-3 text-slate-300">
                  <Phone className="w-4 h-4 text-white shrink-0" />
                  <a href="tel:+996555801801" className="hover:underline font-bold text-white">+996 555 801 801</a>
                </div>
                <div className="flex items-center gap-3 text-slate-300">
                  <Globe className="w-4 h-4 text-white shrink-0" />
                  <span>Instagram: @neostyle_kg</span>
                </div>
              </div>
            </div>

            <div className="lg:col-span-5 p-6 rounded-2xl border border-zinc-800 bg-[#08090C] space-y-4">
              <div className="text-sm font-bold text-white font-mono">Связь с архитектором в WhatsApp</div>
              <p className="text-xs text-slate-400">
                Нажмите для прямого контакта и отправки параметров участка:
              </p>
              <a
                href={waUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-4 rounded bg-white hover:bg-slate-200 text-black font-mono font-bold text-xs transition flex items-center justify-center gap-2 shadow-lg"
              >
                <MessageSquare className="w-4 h-4" />
                <span>Написать в WhatsApp</span>
              </a>
              <a
                href="tel:+996555801801"
                className="w-full py-3 rounded border border-zinc-700 text-slate-200 hover:bg-[#1A1D24] font-mono text-xs transition flex items-center justify-center gap-2"
              >
                <Phone className="w-3.5 h-3.5" />
                <span>Позвонить в бюро</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-zinc-800 bg-[#06070A] py-8 px-6 text-xs text-slate-500 font-mono">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
          <div>
            <strong>NEOSTYLE ARCHITECTURE</strong> • г. Бишкек, ул. Токтогула, 125/1 • +996 555 801 801
          </div>
          <div>Instagram: @neostyle_kg • Лицензия I категории Госстроя КР</div>
        </div>
      </footer>
    </div>
  );
};
