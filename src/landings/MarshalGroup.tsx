import React from 'react';
import { ShieldCheck, Check, Phone, MessageSquare, ArrowRight, Layers, FileText, Scale, MapPin, Globe, Building, Compass, ChevronRight } from 'lucide-react';
import { MarshalLogo } from '../components/BrandLogos';

export const MarshalGroup: React.FC = () => {
  const editorialProjects = [
    {
      num: '01',
      title: 'Комплексный ремонт «Business Editorial»',
      subtitle: 'Премиальный жилой интерьер под ключ',
      desc: 'Полный цикл реализации дизайн-проекта для квартир бизнес-класса. Двери скрытого монтажа Invisible высотой до потолка (2.7 м), бесшовные теневые плинтусы EuroKraab, широкоформатный итальянский керамогранит 120х278 см и встроенная мебель по индивидуальным чертежам.',
      specs: ['Авторский надзор ведущего архитектора 2 раза в неделю', 'Теневые примыкания потолка и плинтусов', 'Монтаж электрики экранированным кабелем ВВГнг-LS', 'Фиксация сметы и сроков с неустойкой за каждый день'],
      tag: 'Для жилых комплексов 80–180 м²',
    },
    {
      num: '02',
      title: 'Элитная отделка «Exclusive Monograph»',
      subtitle: 'Индивидуальные пентхаусы и загородные резиденции',
      desc: 'Интерьеры музейного уровня для премиальных резиденций. Монолитный архитектурный бетон, отделка натуральным шпоном копченого дуба, мраморные слэбы Calacatta и интеграция комплексного протокола умного дома KNX / Apple HomeKit.',
      specs: ['Полное управление строительством без участия заказчика', 'Прямой контрактный импорт мебели и света из Милана', 'Интеграция канального кондиционирования Daikin с увлажнением', 'Гарантийный сертификат на все узлы 3 года'],
      tag: 'Пентхаусы и особняки 200+ м²',
    },
    {
      num: '03',
      title: 'Капитальный ремонт «Comfort Modern»',
      subtitle: 'Надежная инженерная новостройка',
      desc: 'Капитальная база для современной комфортной жизни: полный демонтаж/монтаж перегородок из автоклавного газобетона, лазерная стяжка пола, выравнивание стен под покраску по уровню Q4, сантехника скрытого монтажа Grohe и кварцвинил SPC.',
      specs: ['Полная рабочая проектная документация', 'Шумоизоляция стояков и перекрытий Rockwool', 'Коллекторная разводка отопления трубами Rehau', 'Комплектация черновыми и чистовыми материалами'],
      tag: 'Квартиры 50–110 м²',
    },
    {
      num: '04',
      title: 'Архитектурный дизайн-проект & BIM Модель',
      subtitle: 'Только проектирование и спецификация',
      desc: 'Полный альбом чертежей для строителей, развертки стен каждого помещения, ведомость отделочных материалов с конкретными артикулами и поставщиками, а также фотореалистичные 3D-визуализации 4K.',
      specs: ['3 варианта продуманной планировки', 'Схемы расстановки мебели, розеток и световых групп', 'Спецификация заказных позиций мебели', '3D визуализация в Corona Renderer'],
      tag: 'Архитектурный проект',
    },
  ];

  const waMessage = `Добрый день, архитектурно-строительное бюро Marshal Group в Бишкеке! Планируем ремонт квартиры / виллы. Хотим обсудить проект и получить консультацию главного архитектора.`;
  const waUrl = `https://wa.me/996700882233?text=${encodeURIComponent(waMessage)}`;

  return (
    <div className="min-h-screen bg-[#0A0C10] text-[#ECEFF4] font-sans selection:bg-[#C99700] selection:text-black">
      {/* Top Bar */}
      <header className="border-b border-white/[0.06] bg-[#050608] px-8 py-2.5 text-[11px] font-mono text-[#828B99] flex items-center justify-between">
        <div className="flex items-center gap-4">
          <span className="inline-block w-1.5 h-1.5 rounded-full bg-[#C99700] animate-pulse"></span>
          <span className="uppercase text-slate-300">MARSHAL ARCHITECTURAL & INTERIOR MONOGRAPH • BISHKEK</span>
          <span className="hidden md:inline text-white/20">/</span>
          <span className="hidden md:inline text-white/40">TURNKEY INTERIORS FOR PRIVATE RESIDENCES</span>
        </div>
        <div className="hidden sm:flex items-center gap-8">
          <span>ФИКСАЦИЯ СМЕТЫ В ДОГОВОРЕ</span>
          <a href="tel:+996700882233" className="text-[#E5B53A] font-bold hover:underline font-sans">+996 700 882 233</a>
        </div>
      </header>

      {/* Luxury Nav */}
      <nav className="sticky top-11 z-40 border-b border-white/[0.08] bg-[#0A0C10]/90 backdrop-blur-xl px-8 py-5">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-4">
            <MarshalLogo className="h-9 w-auto" />
          </div>

          <div className="hidden lg:flex items-center gap-10 text-[11px] font-mono uppercase tracking-[0.2em] text-[#8C96A8]">
            <a href="#about" className="hover:text-white transition duration-200">О бюро</a>
            <a href="#packages" className="hover:text-white transition duration-200">Комплектации</a>
            <a href="#standards" className="hover:text-white transition duration-200">Технадзор</a>
            <a href="#concierge" className="hover:text-[#E5B53A] transition duration-200">Встреча в офисе</a>
          </div>

          <a
            href={waUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-2.5 rounded border border-[#C99700]/40 bg-[#C99700]/10 hover:bg-[#C99700] text-[#E5B53A] hover:text-black font-mono font-bold text-xs uppercase tracking-wider transition-all duration-300 flex items-center gap-2 shadow-lg shadow-[#C99700]/5"
          >
            <MessageSquare className="w-3.5 h-3.5" />
            <span>Консультация архитектора</span>
          </a>
        </div>
      </nav>

      {/* Hero: Monolithic Penthouse Banner */}
      <section className="relative min-h-[85vh] flex items-center border-b border-white/[0.08] overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src="/images/marshal.jpg"
            alt="Marshal Group Bishkek Luxury Penthouse Interior"
            className="w-full h-full object-cover object-center brightness-[0.38] scale-100 filter contrast-110"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#0A0C10] via-[#0A0C10]/85 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0A0C10] via-transparent to-transparent" />
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-[#C99700]/10 via-transparent to-transparent" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-8 py-24 w-full">
          <div className="max-w-3xl space-y-8">
            <div className="inline-flex items-center gap-3 px-3.5 py-1.5 rounded border border-[#C99700]/30 bg-black/60 backdrop-blur-md text-[#E5B53A] text-[11px] font-mono tracking-widest uppercase">
              <span className="w-1.5 h-1.5 rounded-full bg-[#C99700]"></span>
              <span>Архитектурный дизайн & Премиальный ремонт под ключ • Бишкек</span>
            </div>

            <h1 className="text-4xl sm:text-6xl lg:text-7xl font-bold tracking-tight font-cinzel text-white leading-[1.08]">
              Монументальная эстетика и безупречное качество реализации
            </h1>

            <p className="text-[#9BA5B7] text-lg sm:text-xl font-light leading-relaxed max-w-2xl">
              Создаем статусное жилое пространство в Бишкеке без строительного стресса. Полный авторский контроль архитектора, закупки чистовых материалов напрямую с фабрик Европы и неизменная смета по договору.
            </p>

            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-4 font-mono text-xs">
              <a
                href="#concierge"
                className="px-8 py-4 rounded bg-[#C99700] hover:bg-[#B58500] text-black font-bold uppercase tracking-wider flex items-center justify-center gap-2.5 transition duration-200 shadow-xl shadow-[#C99700]/15"
              >
                <span>Обсудить проект в WhatsApp</span>
                <ArrowRight className="w-4 h-4" />
              </a>
              <a
                href="#packages"
                className="px-8 py-4 rounded border border-white/20 bg-white/[0.03] hover:bg-white/[0.08] text-white uppercase tracking-wider flex items-center justify-center transition duration-200"
              >
                <span>Смотреть комплектации</span>
              </a>
            </div>

            <div className="grid grid-cols-3 gap-8 pt-10 border-t border-white/[0.08] font-mono">
              <div>
                <div className="text-2xl sm:text-3xl font-bold text-white font-cinzel">100%</div>
                <div className="text-[#828B99] text-xs uppercase tracking-wider mt-1">Фиксация сметы</div>
              </div>
              <div>
                <div className="text-2xl sm:text-3xl font-bold text-[#E5B53A] font-cinzel">3 Года</div>
                <div className="text-[#828B99] text-xs uppercase tracking-wider mt-1">Официальная гарантия</div>
              </div>
              <div>
                <div className="text-2xl sm:text-3xl font-bold text-white font-cinzel">BIM 3D</div>
                <div className="text-[#828B99] text-xs uppercase tracking-wider mt-1">Инженерная точность</div>
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
              <span className="text-xs font-mono text-[#E5B53A] uppercase tracking-[0.25em] block">Манифест бюро</span>
              <h2 className="text-3xl sm:text-5xl font-bold text-white font-cinzel tracking-tight leading-[1.15]">
                Интерьеры вне времени, созданные для комфортной жизни
              </h2>
            </div>

            <p className="text-[#9BA5B7] text-base leading-relaxed">
              <strong>Marshal Group</strong> проектирует и строит жилые пространства для тех, кто ценит чистоту архитектурных линий, тактильность натуральных материалов и идеальную инженерную логику.
            </p>

            <p className="text-[#9BA5B7] text-base leading-relaxed">
              Мы берем на себя 100% строительных задач: согласование перепланировок, технический надзор за скрытыми работами, монтаж систем климат-контроля и прямую доставку заказных элементов мебели.
            </p>

            <div className="grid grid-cols-2 gap-6 pt-4 font-mono text-xs">
              <div className="p-6 rounded border border-white/[0.08] bg-[#0E1117]">
                <div className="text-[#E5B53A] font-bold text-sm mb-1 uppercase font-cinzel">Q4 Finishing Level</div>
                <p className="text-[#828B99] text-xs font-sans leading-relaxed">Идеальная геометрия стен под скользящий интерьерный свет.</p>
              </div>
              <div className="p-6 rounded border border-white/[0.08] bg-[#0E1117]">
                <div className="text-[#E5B53A] font-bold text-sm mb-1 uppercase font-cinzel">Weekly Live Report</div>
                <p className="text-[#828B99] text-xs font-sans leading-relaxed">Еженедельный видео- и фотоотчет со стройплощадки в закрытый чат.</p>
              </div>
            </div>
          </div>

          <div className="lg:col-span-6">
            <div className="rounded-lg overflow-hidden border border-white/[0.1] bg-[#0E1117] p-3 shadow-2xl">
              <img
                src="/images/marshal.jpg"
                alt="Реализованный пентхаус Marshal Group"
                className="w-full h-auto object-cover rounded"
              />
              <div className="mt-4 p-4 rounded bg-[#050608] border border-white/[0.06] flex items-center justify-between text-xs font-mono">
                <div>
                  <span className="text-[#828B99]">Офис бюро: </span>
                  <span className="text-white font-bold font-cinzel">Бишкек, ул. Ибраимова</span>
                </div>
                <span className="text-[#E5B53A] font-bold">Лицензия Госстроя КР</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Packages Showcase */}
      <section id="packages" className="py-28 px-8 max-w-7xl mx-auto border-b border-white/[0.08] space-y-16">
        <div className="space-y-3 max-w-2xl">
          <span className="text-xs font-mono text-[#E5B53A] uppercase tracking-[0.25em] block">Комплектации отделки</span>
          <h2 className="text-3xl sm:text-4xl font-bold text-white font-cinzel tracking-tight">
            Программы ремонта и проектирования
          </h2>
          <p className="text-[#9BA5B7] text-sm leading-relaxed">
            Подберем оптимальный формат под масштаб вашего объекта и требования к материалам.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {editorialProjects.map((item, idx) => (
            <div
              key={idx}
              className="p-8 rounded-lg border border-white/[0.08] bg-[#0E1117] hover:border-[#C99700]/40 transition duration-300 flex flex-col justify-between space-y-8 shadow-md"
            >
              <div className="space-y-5">
                <div className="flex items-center justify-between border-b border-white/[0.06] pb-4">
                  <span className="text-2xl font-bold font-mono text-[#E5B53A]">{item.num}</span>
                  <span className="px-3 py-1 rounded bg-[#C99700]/10 border border-[#C99700]/30 text-[#E5B53A] text-[11px] font-mono font-bold">
                    {item.tag}
                  </span>
                </div>

                <div>
                  <h3 className="text-xl font-bold text-white font-cinzel">{item.title}</h3>
                  <div className="text-xs font-mono text-[#E5B53A] mt-1">{item.subtitle}</div>
                </div>

                <p className="text-xs text-[#9BA5B7] leading-relaxed">
                  {item.desc}
                </p>

                <ul className="space-y-2.5 text-xs text-[#D0D7DE] border-t border-white/[0.06] pt-4 font-mono">
                  {item.specs.map((s, i) => (
                    <li key={i} className="flex items-center gap-2.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#E5B53A]"></span>
                      <span>{s}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="pt-6 border-t border-white/[0.06] flex items-center justify-between">
                <span className="text-xs font-mono text-[#828B99]">Индивидуальная смета</span>
                <a
                  href={`https://wa.me/996700882233?text=${encodeURIComponent(`Добрый день! Хотим рассчитать смету по комплектации: «${item.title}».`)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-5 py-2.5 rounded bg-[#C99700] hover:bg-[#B58500] text-black font-mono font-bold text-xs uppercase tracking-wider transition flex items-center gap-2"
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
        <div className="rounded-2xl border border-[#C99700]/30 bg-gradient-to-b from-[#11141D] to-[#07090D] p-10 sm:p-16 shadow-2xl relative overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-7 space-y-6">
              <span className="text-xs font-mono text-[#E5B53A] uppercase tracking-[0.25em] block">Встреча с главным архитектором</span>
              <h2 className="text-3xl sm:text-5xl font-bold text-white font-cinzel tracking-tight leading-[1.15]">
                Обсудите проект вашей квартиры или виллы в офисе в Бишкеке
              </h2>
              <p className="text-[#9BA5B7] text-base leading-relaxed">
                Приглашаем вас на чашку эспрессо в наш офис. Мы покажем образцы натурального камня, шпона и теневых профилей, изучим планировку и составим предварительный график реализации.
              </p>

              <div className="space-y-4 text-xs font-mono pt-2">
                <div className="flex items-center gap-3 text-[#D0D7DE]">
                  <MapPin className="w-4 h-4 text-[#E5B53A] shrink-0" />
                  <span>г. Бишкек, пересечение ул. Ибраимова / ул. Ахунбаева</span>
                </div>
                <div className="flex items-center gap-3 text-[#D0D7DE]">
                  <Phone className="w-4 h-4 text-[#E59B24] shrink-0" />
                  <a href="tel:+996700882233" className="hover:text-white font-bold text-[#E5B53A]">+996 700 882 233</a>
                </div>
                <div className="flex items-center gap-3 text-[#D0D7DE]">
                  <Globe className="w-4 h-4 text-[#E5B53A] shrink-0" />
                  <span>Instagram: @marshal_group_kg</span>
                </div>
              </div>
            </div>

            <div className="lg:col-span-5 p-8 rounded-xl border border-white/[0.1] bg-black/80 backdrop-blur-md space-y-6">
              <div className="space-y-2">
                <div className="text-sm font-bold text-white font-mono uppercase tracking-wider">Прямой чат в WhatsApp</div>
                <p className="text-xs text-[#828B99]">
                  Назначьте встречу с архитектором в один клик:
                </p>
              </div>

              <a
                href={waUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-4 rounded bg-[#C99700] hover:bg-[#B58500] text-black font-mono font-bold text-xs uppercase tracking-wider transition duration-200 flex items-center justify-center gap-2 shadow-xl shadow-[#C99700]/15"
              >
                <MessageSquare className="w-4 h-4" />
                <span>Написать в WhatsApp</span>
              </a>

              <a
                href="tel:+996700882233"
                className="w-full py-3.5 rounded border border-white/[0.15] hover:bg-white/[0.05] text-white font-mono text-xs uppercase tracking-wider transition flex items-center justify-center gap-2"
              >
                <Phone className="w-3.5 h-3.5 text-[#E5B53A]" />
                <span>Позвонить в бюро</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-white/[0.08] bg-[#050608] py-10 px-8 text-xs text-[#828B99] font-mono">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-3">
            <MarshalLogo className="h-6 w-auto" />
            <span className="text-white/30">•</span>
            <span>г. Бишкек, ул. Ибраимова</span>
          </div>
          <div>© 2026 MARSHAL ARCHITECTURAL & BUILD GROUP • ВСЕ ПРАВА ЗАЩИЩЕНЫ</div>
        </div>
      </footer>
    </div>
  );
};
