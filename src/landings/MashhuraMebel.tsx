import React from 'react';
import { ShieldCheck, Check, Phone, MessageSquare, ArrowRight, Layers, Ruler, MapPin, Globe, Sparkles, Box, ChevronRight } from 'lucide-react';
import { MashhuraLogo } from '../components/BrandLogos';

export const MashhuraMebel: React.FC = () => {
  const atelierCollections = [
    {
      num: '01',
      name: 'Кухня «Calacatta Gold» с мраморным островом',
      subtitle: 'Флагманское мебельное искусство для частных домов',
      desc: 'Монументальный кухонный остров из цельного кварцевого агломерата Calacatta с интегрированной индукционной панелью. Рифленые фасады с матовым покрытием Soft-Touch, австрийская фурнитура скрытого монтажа Blum Legrabox и скрытая подсветка рабочих зон с бесконтактным управлением.',
      specs: ['Австрийские механизмы Blum Blumotion с гарантией 15 лет', 'Столешница из искусственного камня с бесшовной стыковкой', 'Фасады Egger PerfectSense Matt с защитой от отпечатков пальцев', 'Индивидуальная подгонка под геометрию помещения в Оше'],
      tag: 'Премиум кухни',
    },
    {
      num: '02',
      name: 'Гардеробная система «Glass & Smoked Wood»',
      subtitle: 'Бутиковая организация гардеробного пространства',
      desc: 'Интерьерная система хранения на черных анодированных алюминиевых профилях с тонированным стеклом Stopsol и теплой вертикальной LED-подсветкой. Отделка полок натуральным шпоном дуба, выдвижные бархатные лотки для часов и украшений.',
      specs: ['Несущий профиль из анодированного алюминия в глубоком мате', 'Тонированное закаленное стекло с защитой от ультрафиолета', 'Секции для костюмов, длинных платьев и обувные галереи', 'Пылезащитные щеточные уплотнители по периметру дверей'],
      tag: 'Гардеробные комнаты',
    },
    {
      num: '03',
      name: 'Кухня «Nordic Wood & Anthracite»',
      subtitle: 'Скандинавская чистота форм и теплый шпон',
      desc: 'Гармоничное сочетание теплой текстуры натурального ореха и глубоких антрацитовых матовых фасадов. Интегрированная мойка подстольного монтажа из нержавеющей стали, скрытая зона для мелкой бытовой техники со складными дверями Hawa-Concepta.',
      specs: ['Экологически чистые австрийские панели класса E1', 'Складные фасады-трансформеры с полным задвижением в корпус', 'Встроенный климатический шкаф для напитков', 'Интеграция техники Miele / Bosch'],
      tag: 'Современный минимализм',
    },
    {
      num: '04',
      name: 'Комплексная меблировка санузлов & ТВ-зон',
      subtitle: 'Единый визуальный код всей квартиры',
      desc: 'Подвесные тумбы для ванных комнат с раковинами из керамогранита, влагостойким полиуретановым клеем PUR и стеновые декоративные панели со шпоном для гостиных с парящим эффектом.',
      specs: ['100% влагостойкая PUR-кромка деталей', 'Фрезерованные скрытые ручки и теневые зазоры', '3D-замер лазерным сканером перед запуском в цех', 'Монтаж собственной бригадой мастеров в Оше'],
      tag: 'Интерьер под ключ',
    },
  ];

  const waMessage = `Салам Алейкум, Машхура Мебель в Оше! Хотим вызвать замерщика с образцами материалов и заказать 3D-проект премиальной кухни / гардеробной.`;
  const waUrl = `https://wa.me/996555909012?text=${encodeURIComponent(waMessage)}`;

  return (
    <div className="min-h-screen bg-[#0E0E11] text-[#EBE6DF] font-sans selection:bg-[#D4A373] selection:text-black">
      {/* Top Header */}
      <header className="border-b border-white/[0.06] bg-[#070709] px-8 py-2.5 text-[11px] font-mono text-[#8C877E] flex items-center justify-between">
        <div className="flex items-center gap-4">
          <span className="inline-block w-1.5 h-1.5 rounded-full bg-[#D4A373] animate-pulse"></span>
          <span className="uppercase text-slate-300">MASHHURA BESPOKE CABINETRY ATELIER • OSH, KYRGYZSTAN</span>
          <span className="hidden md:inline text-white/20">/</span>
          <span className="hidden md:inline text-white/40">EGGER AUSTRIA & BLUM HARDWARE CERTIFIED</span>
        </div>
        <div className="hidden sm:flex items-center gap-8">
          <span>БЕСПЛАТНЫЙ 3D-ПРОЕКТ И ВЫЕЗД ЗАМЕРЩИКА</span>
          <a href="tel:+996555909012" className="text-[#D4A373] font-bold hover:underline font-sans">+996 555 909 012</a>
        </div>
      </header>

      {/* Luxury Nav */}
      <nav className="sticky top-11 z-40 border-b border-white/[0.08] bg-[#0E0E11]/90 backdrop-blur-xl px-8 py-5">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-4">
            <MashhuraLogo className="h-9 w-auto" />
          </div>

          <div className="hidden lg:flex items-center gap-10 text-[11px] font-mono uppercase tracking-[0.2em] text-[#9A9388]">
            <a href="#about" className="hover:text-white transition duration-200">Об ателье</a>
            <a href="#collections" className="hover:text-white transition duration-200">Коллекции</a>
            <a href="#materials" className="hover:text-white transition duration-200">Материалы</a>
            <a href="#concierge" className="hover:text-[#D4A373] transition duration-200">Вызов замерщика</a>
          </div>

          <a
            href={waUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-2.5 rounded border border-[#D4A373]/40 bg-[#D4A373]/10 hover:bg-[#D4A373] text-[#D4A373] hover:text-black font-mono font-bold text-xs uppercase tracking-wider transition-all duration-300 flex items-center gap-2 shadow-lg shadow-[#D4A373]/5"
          >
            <MessageSquare className="w-3.5 h-3.5" />
            <span>Заказать 3D проект</span>
          </a>
        </div>
      </nav>

      {/* Hero: Luxury Kitchen Atelier Banner */}
      <section className="relative min-h-[85vh] flex items-center border-b border-white/[0.08] overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src="/images/mashhura.jpg"
            alt="Mashhura Mebel Osh Bespoke Calacatta Kitchen"
            className="w-full h-full object-cover object-center brightness-[0.38] scale-100 filter contrast-110"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#0E0E11] via-[#0E0E11]/85 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0E0E11] via-transparent to-transparent" />
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-[#D4A373]/10 via-transparent to-transparent" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-8 py-24 w-full">
          <div className="max-w-3xl space-y-8">
            <div className="inline-flex items-center gap-3 px-3.5 py-1.5 rounded border border-[#D4A373]/30 bg-black/60 backdrop-blur-md text-[#D4A373] text-[11px] font-mono tracking-widest uppercase">
              <span className="w-1.5 h-1.5 rounded-full bg-[#D4A373]"></span>
              <span>Мебельное ателье премиум-класса & Австрийские материалы • Ош</span>
            </div>

            <h1 className="text-4xl sm:text-6xl lg:text-7xl font-bold tracking-tight font-serif text-white leading-[1.08]">
              Архитектура кухонного пространства и безупречная эргономика
            </h1>

            <p className="text-[#A8A196] text-lg sm:text-xl font-light leading-relaxed max-w-2xl">
              Создаем эксклюзивные кухни, гардеробные и корпусную мебель на заказ в Оше. Кварцевый агломерат, австрийская фурнитура Blum, идеальная подгонка зазоров и пожизненный комфорт.
            </p>

            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-4 font-mono text-xs">
              <a
                href="#concierge"
                className="px-8 py-4 rounded bg-[#D4A373] hover:bg-[#C28E5C] text-black font-bold uppercase tracking-wider flex items-center justify-center gap-2.5 transition duration-200 shadow-xl shadow-[#D4A373]/15"
              >
                <span>Вызвать замерщика в Оше</span>
                <ArrowRight className="w-4 h-4" />
              </a>
              <a
                href="#collections"
                className="px-8 py-4 rounded border border-white/20 bg-white/[0.03] hover:bg-white/[0.08] text-white uppercase tracking-wider flex items-center justify-center transition duration-200"
              >
                <span>Смотреть коллекции</span>
              </a>
            </div>

            <div className="grid grid-cols-3 gap-8 pt-10 border-t border-white/[0.08] font-mono">
              <div>
                <div className="text-2xl sm:text-3xl font-bold text-white font-serif">15 Лет</div>
                <div className="text-[#8C877E] text-xs uppercase tracking-wider mt-1">Гарантия Blum</div>
              </div>
              <div>
                <div className="text-2xl sm:text-3xl font-bold text-[#D4A373] font-serif">Egger E1</div>
                <div className="text-[#8C877E] text-xs uppercase tracking-wider mt-1">Австрийские плиты</div>
              </div>
              <div>
                <div className="text-2xl sm:text-3xl font-bold text-white font-serif">0.1 мм</div>
                <div className="text-[#8C877E] text-xs uppercase tracking-wider mt-1">Точность лазера</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Editorial About */}
      <section id="about" className="py-28 px-8 max-w-7xl mx-auto border-b border-white/[0.08]">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
          <div className="lg:col-span-6 space-y-8">
            <div className="space-y-3">
              <span className="text-xs font-mono text-[#D4A373] uppercase tracking-[0.25em] block">Традиция мастерства</span>
              <h2 className="text-3xl sm:text-5xl font-bold text-white font-serif tracking-tight leading-[1.15]">
                Мебель, которая становится сердцем вашего дома
              </h2>
            </div>

            <p className="text-[#A8A196] text-base leading-relaxed">
              В мебельном ателье <strong>Машхура Мебель</strong> мы верим, что кухня — это главное место в доме, где собирается вся семья. Поэтому мы уделяем исключительное внимание плавности хода каждого ящика, тактильности поверхностей и долговечности материалов в условиях климата юга Кыргызстана.
            </p>

            <p className="text-[#A8A196] text-base leading-relaxed">
              Наше собственное высокоточное производство в Оше оснащено форматно-раскроечными и кромкооблицовочными станками с нанесением влагостойкого PUR-клея, что гарантирует защиту от пара и влаги на долгие десятилетия.
            </p>

            <div className="grid grid-cols-2 gap-6 pt-4 font-mono text-xs">
              <div className="p-6 rounded border border-white/[0.08] bg-[#141418]">
                <div className="text-[#D4A373] font-bold text-sm mb-1 uppercase font-serif">PUR Edge Waterproof</div>
                <p className="text-[#8C877E] text-xs font-sans leading-relaxed">Бесшовная влагостойкая кромка без видимого клеевого шва.</p>
              </div>
              <div className="p-6 rounded border border-white/[0.08] bg-[#141418]">
                <div className="text-[#D4A373] font-bold text-sm mb-1 uppercase font-serif">Free 3D Design</div>
                <p className="text-[#8C877E] text-xs font-sans leading-relaxed">3D-проект кухни с визуализацией материалов в масштабе вашей комнаты.</p>
              </div>
            </div>
          </div>

          <div className="lg:col-span-6">
            <div className="rounded-lg overflow-hidden border border-white/[0.1] bg-[#141418] p-3 shadow-2xl">
              <img
                src="/images/mashhura.jpg"
                alt="Шоурум Машхура Мебель в Оше"
                className="w-full h-auto object-cover rounded"
              />
              <div className="mt-4 p-4 rounded bg-[#070709] border border-white/[0.06] flex items-center justify-between text-xs font-mono">
                <div>
                  <span className="text-[#8C877E]">Шоурум и цех: </span>
                  <span className="text-white font-bold font-serif">г. Ош, ул. Мамырова, 45</span>
                </div>
                <span className="text-[#D4A373] font-bold">100% Blum Оригинал</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Collections Showcase */}
      <section id="collections" className="py-28 px-8 max-w-7xl mx-auto border-b border-white/[0.08] space-y-16">
        <div className="space-y-3 max-w-2xl">
          <span className="text-xs font-mono text-[#D4A373] uppercase tracking-[0.25em] block">Каталог ателье</span>
          <h2 className="text-3xl sm:text-4xl font-bold text-white font-serif tracking-tight">
            Коллекции кухонь и гардеробных
          </h2>
          <p className="text-[#A8A196] text-sm leading-relaxed">
            Каждый проект создается по индивидуальным размерам с точностью до миллиметра.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {atelierCollections.map((item, idx) => (
            <div
              key={idx}
              className="p-8 rounded-lg border border-white/[0.08] bg-[#121216] hover:border-[#D4A373]/40 transition duration-300 flex flex-col justify-between space-y-8 shadow-md"
            >
              <div className="space-y-5">
                <div className="flex items-center justify-between border-b border-white/[0.06] pb-4">
                  <span className="text-2xl font-bold font-mono text-[#D4A373]">{item.num}</span>
                  <span className="px-3 py-1 rounded bg-[#D4A373]/15 border border-[#D4A373]/30 text-[#D4A373] text-[11px] font-mono font-bold">
                    {item.tag}
                  </span>
                </div>

                <div>
                  <h3 className="text-xl font-bold text-white font-serif">{item.name}</h3>
                  <div className="text-xs font-mono text-[#D4A373] mt-1">{item.subtitle}</div>
                </div>

                <p className="text-xs text-[#A8A196] leading-relaxed">
                  {item.desc}
                </p>

                <ul className="space-y-2.5 text-xs text-[#D8D2C7] border-t border-white/[0.06] pt-4 font-mono">
                  {item.specs.map((s, i) => (
                    <li key={i} className="flex items-center gap-2.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#D4A373]"></span>
                      <span>{s}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="pt-6 border-t border-white/[0.06] flex items-center justify-between">
                <span className="text-xs font-mono text-[#8C877E]">Индивидуальный расчет</span>
                <a
                  href={`https://wa.me/996555909012?text=${encodeURIComponent(`Салам Алейкум! Интересует коллекция: «${item.name}». Хочу рассчитать проект под свои размеры.`)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-5 py-2.5 rounded bg-[#D4A373] hover:bg-[#C28E5C] text-black font-mono font-bold text-xs uppercase tracking-wider transition flex items-center gap-2"
                >
                  <span>Запросить расчет</span>
                  <ChevronRight className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Private Concierge & Direct Contact */}
      <section id="concierge" className="py-28 px-8 max-w-7xl mx-auto">
        <div className="rounded-2xl border border-[#D4A373]/30 bg-gradient-to-b from-[#18171D] to-[#0B0B0E] p-10 sm:p-16 shadow-2xl relative overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-7 space-y-6">
              <span className="text-xs font-mono text-[#D4A373] uppercase tracking-[0.25em] block">Выезд дизайнера-замерщика</span>
              <h2 className="text-3xl sm:text-5xl font-bold text-white font-serif tracking-tight leading-[1.15]">
                Закажите бесплатный выезд специалиста с каталогами в Оше
              </h2>
              <p className="text-[#A8A196] text-base leading-relaxed">
                Наш ведущий технолог приедет на объект с чемоданом образцов фасадов, камня и фурнитуры, снимет точные лазерные размеры и подготовит 3D-визуализацию будущей кухни.
              </p>

              <div className="space-y-4 text-xs font-mono pt-2">
                <div className="flex items-center gap-3 text-[#D8D2C7]">
                  <MapPin className="w-4 h-4 text-[#D4A373] shrink-0" />
                  <span>г. Ош, ул. Мамырова, 45 (Фирменный шоурум и фабрика)</span>
                </div>
                <div className="flex items-center gap-3 text-[#D8D2C7]">
                  <Phone className="w-4 h-4 text-[#D4A373] shrink-0" />
                  <a href="tel:+996555909012" className="hover:text-white font-bold text-[#D4A373]">+996 555 909 012</a>
                </div>
                <div className="flex items-center gap-3 text-[#D8D2C7]">
                  <Globe className="w-4 h-4 text-[#D4A373] shrink-0" />
                  <span>Instagram: @mashhura_mebel_osh</span>
                </div>
              </div>
            </div>

            <div className="lg:col-span-5 p-8 rounded-xl border border-white/[0.1] bg-black/80 backdrop-blur-md space-y-6">
              <div className="space-y-2">
                <div className="text-sm font-bold text-white font-mono uppercase tracking-wider">Прямой диалог в WhatsApp</div>
                <p className="text-xs text-[#8C877E]">
                  Нажмите для вызова замерщика и отправки чертежей:
                </p>
              </div>

              <a
                href={waUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-4 rounded bg-[#D4A373] hover:bg-[#C28E5C] text-black font-mono font-bold text-xs uppercase tracking-wider transition duration-200 flex items-center justify-center gap-2 shadow-xl shadow-[#D4A373]/15"
              >
                <MessageSquare className="w-4 h-4" />
                <span>Написать в WhatsApp</span>
              </a>

              <a
                href="tel:+996555909012"
                className="w-full py-3.5 rounded border border-white/[0.15] hover:bg-white/[0.05] text-white font-mono text-xs uppercase tracking-wider transition flex items-center justify-center gap-2"
              >
                <Phone className="w-3.5 h-3.5 text-[#D4A373]" />
                <span>Позвонить в шоурум</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-white/[0.08] bg-[#070709] py-10 px-8 text-xs text-[#8C877E] font-mono">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-3">
            <MashhuraLogo className="h-6 w-auto" />
            <span className="text-white/30">•</span>
            <span>г. Ош, ул. Мамырова, 45</span>
          </div>
          <div>© 2026 MASHHURA BESPOKE CABINETRY ATELIER • ВСЕ ПРАВА ЗАЩИЩЕНЫ</div>
        </div>
      </footer>
    </div>
  );
};
