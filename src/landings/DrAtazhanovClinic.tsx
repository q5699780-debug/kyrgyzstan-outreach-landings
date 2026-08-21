import React from 'react';
import { ShieldCheck, Check, Phone, MessageSquare, ArrowRight, Activity, Microscope, MapPin, Clock, Globe, Award, ChevronRight, Stethoscope } from 'lucide-react';
import { AtazhanovLogo } from '../components/BrandLogos';

export const DrAtazhanovClinic: React.FC = () => {
  const clinicalDisciplines = [
    {
      num: '01',
      title: 'Straumann SLActive Implantology',
      subtitle: 'Швейцарская хирургическая имплантация',
      desc: 'Премиальные титановые импланты Straumann (Базель, Швейцария) с гидрофильной поверхностью SLActive. Сокращают время остеоинтеграции до 3–4 недель и позволяют проводить одномоментную нагрузку временной коронкой.',
      specs: ['Пожизненная международная гарантия производителя', 'Приживаемость по клиническим данным 99.8%', 'Навигационный хирургический 3D-шаблон', 'Сохранение естественной эстетики десны'],
      badge: 'Швейцарский стандарт',
    },
    {
      num: '02',
      title: 'Digital Smile Design (DSD) & E.max Veneers',
      subtitle: 'Цифровая эстетика и керамические виниры',
      desc: '3D-проектирование идеальной улыбки с предварительной примеркой Mock-up до начала лечения. Ультратонкие виниры из прессованной керамики IPS e.max без обточки здоровых тканей зуба.',
      specs: ['Компьютерное моделирование формы и пропорций', 'Кристальная естественная прозрачность эмали', 'Полная устойчивость к кофе, чаю и курению', 'Фрезерование на немецких станках Amann Girrbach'],
      badge: 'Эстетическая ортопедия',
    },
    {
      num: '03',
      title: 'Full-Arch Rehabilitation: All-on-4 / All-on-6',
      subtitle: 'Тотальная реабилитация зубных рядов',
      desc: 'Восстановление жевательной функции и эстетики при полной или частичной адентии за 1 операционный день. Установка несъемного металлокерамического или циркониевого моста.',
      specs: ['Новая улыбка и жевательная функция за 24 часа', 'Без сложной травматичной костной пластики', 'Фиксация несъемного эстетического протеза', 'Легкий и контролируемый период реабилитации'],
      badge: 'Тотальное восстановление',
    },
    {
      num: '04',
      title: 'Carl Zeiss Microscopic Endodontics',
      subtitle: 'Микрохирургическое лечение каналов',
      desc: 'Лечение и перелечивание труднопроходимых корневых каналов под операционным микроскопом Carl Zeiss ProErgo с 30-кратным увеличением. Спасение зубов, ранее признанных безнадежными.',
      specs: ['Оптическое увеличение до 30x', 'Обнаружение скрытых анатомических микроканалов', '100% герметичная 3D-обтурация гуттаперчей', 'Электронная апекслокация без боли'],
      badge: 'Микрохирургия',
    },
  ];

  const waMessage = `Здравствуйте, клиника доктора Атажанова в Оше! Хочу записаться на персональную консультацию к главному врачу и 3D-томографию.`;
  const waUrl = `https://wa.me/996772312000?text=${encodeURIComponent(waMessage)}`;

  return (
    <div className="min-h-screen bg-[#FCFCFD] text-[#1E2734] font-sans selection:bg-[#005B64] selection:text-white">
      {/* Top Clinical Header */}
      <header className="border-b border-[#E8ECF2] bg-[#0A121E] px-8 py-2.5 text-[11px] font-mono text-[#90A1B8] flex items-center justify-between">
        <div className="flex items-center gap-4">
          <span className="inline-block w-1.5 h-1.5 rounded-full bg-[#00A3A6] animate-pulse"></span>
          <span className="uppercase text-slate-200">DR. ATAZHANOV CLINICAL SUITE • OSH, KYRGYZSTAN</span>
          <span className="hidden md:inline text-white/20">/</span>
          <span className="hidden md:inline text-white/50">CENTER OF DIGITAL DENTISTRY & STRAUMANN SLActive</span>
        </div>
        <div className="hidden sm:flex items-center gap-8">
          <span>MELAG ISO 13485 STERILIZATION</span>
          <a href="tel:+996772312000" className="text-[#38BDF8] font-bold hover:underline font-sans">+996 772 312 000</a>
        </div>
      </header>

      {/* Luxury Nav */}
      <nav className="sticky top-11 z-40 border-b border-[#E8ECF2] bg-white/90 backdrop-blur-xl px-8 py-5">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-4">
            <AtazhanovLogo className="h-9 w-auto" />
          </div>

          <div className="hidden lg:flex items-center gap-10 text-[11px] font-mono uppercase tracking-[0.2em] text-[#637286]">
            <a href="#about" className="hover:text-[#0A121E] transition duration-200">О клинике</a>
            <a href="#disciplines" className="hover:text-[#0A121E] transition duration-200">Направления</a>
            <a href="#standards" className="hover:text-[#0A121E] transition duration-200">Оснащение</a>
            <a href="#concierge" className="hover:text-[#005B64] transition duration-200">Запись на КТ</a>
          </div>

          <a
            href={waUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-2.5 rounded border border-[#005B64] bg-[#005B64] hover:bg-[#004850] text-white font-medium text-xs uppercase tracking-wider transition-all duration-300 flex items-center gap-2 shadow-lg shadow-[#005B64]/10"
          >
            <MessageSquare className="w-3.5 h-3.5" />
            <span>Записаться на 3D снимок</span>
          </a>
        </div>
      </nav>

      {/* Hero: Medical Editorial Banner */}
      <section className="relative min-h-[85vh] flex items-center border-b border-[#E8ECF2] overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src="/images/atazhanov.jpg"
            alt="Dr. Atazhanov Carl Zeiss Operating Suite"
            className="w-full h-full object-cover object-center brightness-[0.38] scale-100 filter contrast-105"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#0A121E] via-[#0A121E]/85 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#FCFCFD] via-transparent to-transparent" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-8 py-24 w-full">
          <div className="max-w-3xl space-y-8 text-white">
            <div className="inline-flex items-center gap-3 px-3.5 py-1.5 rounded border border-[#38BDF8]/40 bg-black/60 backdrop-blur-md text-[#38BDF8] text-[11px] font-mono tracking-widest uppercase">
              <span className="w-1.5 h-1.5 rounded-full bg-[#00A3A6]"></span>
              <span>Швейцарская хирургия & Немецкая оптика Carl Zeiss</span>
            </div>

            <h1 className="text-4xl sm:text-6xl lg:text-7xl font-bold tracking-tight font-serif leading-[1.08]">
              Хирургическая имплантация и цифровая эстетика улыбки
            </h1>

            <p className="text-[#CBD5E1] text-lg sm:text-xl font-light leading-relaxed max-w-2xl">
              Экспертный медицинский центр под руководством доктора Атажанова в Оше. Микрохирургическая точность до 0.05 мм, безболезненные компьютерные протоколы и международная гарантия Straumann.
            </p>

            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-4 text-xs font-medium">
              <a
                href="#concierge"
                className="px-8 py-4 rounded bg-[#00A3A6] hover:bg-[#008E91] text-white uppercase tracking-wider flex items-center justify-center gap-2.5 transition duration-200 shadow-xl shadow-[#00A3A6]/15"
              >
                <span>Записаться на 3D-томографию</span>
                <ArrowRight className="w-4 h-4" />
              </a>
              <a
                href="#disciplines"
                className="px-8 py-4 rounded border border-white/20 bg-white/[0.05] hover:bg-white/[0.1] text-white uppercase tracking-wider flex items-center justify-center transition duration-200"
              >
                <span>Направления лечения</span>
              </a>
            </div>

            <div className="grid grid-cols-3 gap-8 pt-10 border-t border-white/[0.12] text-xs">
              <div>
                <div className="text-2xl sm:text-3xl font-bold font-serif text-white">99.8%</div>
                <div className="text-[#94A3B8] text-[11px] uppercase tracking-wider mt-1">Приживаемость Straumann</div>
              </div>
              <div>
                <div className="text-2xl sm:text-3xl font-bold font-serif text-[#38BDF8]">30x Zoom</div>
                <div className="text-[#94A3B8] text-[11px] uppercase tracking-wider mt-1">Микроскоп Carl Zeiss</div>
              </div>
              <div>
                <div className="text-2xl sm:text-3xl font-bold font-serif text-white">Lifetime</div>
                <div className="text-[#94A3B8] text-[11px] uppercase tracking-wider mt-1">Паспорт импланта</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Editorial Section: About Philosophy */}
      <section id="about" className="py-28 px-8 max-w-7xl mx-auto border-b border-[#E8ECF2]">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
          <div className="lg:col-span-6 space-y-8">
            <div className="space-y-3">
              <span className="text-xs font-mono text-[#005B64] uppercase tracking-[0.25em] block">Медицинский стандарт</span>
              <h2 className="text-3xl sm:text-5xl font-bold text-[#0A121E] font-serif tracking-tight leading-[1.15]">
                Швейцарские протоколы и доказательная стоматология в Оше
              </h2>
            </div>

            <p className="text-[#64748B] text-base leading-relaxed">
              В клинике <strong>доктора Атажанова</strong> каждый пациент получает лечение по единым европейским протоколам. Мы не просто устанавливаем импланты — мы восстанавливаем правильную биомеханику зубочелюстной системы, пропорции лица и естественную эстетику улыбки.
            </p>

            <p className="text-[#64748B] text-base leading-relaxed">
              Все манипуляции планируются в трехмерном пространстве по данным компьютерного томографа. Операция проходит по навигационному шаблону без разрезов и швов, что исключает отек и обеспечивает максимальный комфорт.
            </p>

            <div className="grid grid-cols-2 gap-6 pt-4 text-xs font-mono">
              <div className="p-6 rounded border border-[#E8ECF2] bg-white shadow-sm">
                <div className="text-[#005B64] font-bold text-sm mb-1 uppercase">3D Navigation Guide</div>
                <p className="text-[#64748B] text-xs font-sans leading-relaxed">Установка импланта с ювелирной точностью без разреза десны.</p>
              </div>
              <div className="p-6 rounded border border-[#E8ECF2] bg-white shadow-sm">
                <div className="text-[#005B64] font-bold text-sm mb-1 uppercase">Dental Tourism Osh</div>
                <p className="text-[#64748B] text-xs font-sans leading-relaxed">Организация экспресс-лечения за 3–5 дней для гостей из других регионов.</p>
              </div>
            </div>
          </div>

          <div className="lg:col-span-6">
            <div className="rounded-lg overflow-hidden border border-[#CBD5E1] bg-white p-3 shadow-xl">
              <img
                src="/images/atazhanov.jpg"
                alt="Операционный блок Carl Zeiss Ош"
                className="w-full h-auto object-cover rounded"
              />
              <div className="mt-4 p-4 rounded bg-[#F8FAFC] border border-[#E2E8F0] flex items-center justify-between text-xs font-mono">
                <div>
                  <span className="text-[#64748B]">Хирургический блок: </span>
                  <span className="text-[#0A121E] font-bold font-serif">Carl Zeiss ProErgo Suite</span>
                </div>
                <span className="text-[#005B64] font-bold">Стерильность 100%</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Clinical Disciplines Showcase */}
      <section id="disciplines" className="py-28 px-8 max-w-7xl mx-auto border-b border-[#E8ECF2] space-y-16">
        <div className="space-y-3 max-w-2xl">
          <span className="text-xs font-mono text-[#005B64] uppercase tracking-[0.25em] block">Клинические дисциплины</span>
          <h2 className="text-3xl sm:text-4xl font-bold text-[#0A121E] font-serif tracking-tight">
            Специализации клиники
          </h2>
          <p className="text-[#64748B] text-sm leading-relaxed">
            Комплексные программы лечения и эстетической реконструкции зубов.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {clinicalDisciplines.map((item, idx) => (
            <div
              key={idx}
              className="p-8 rounded-lg border border-[#E8ECF2] bg-white hover:border-[#005B64]/40 transition duration-300 flex flex-col justify-between space-y-8 shadow-sm"
            >
              <div className="space-y-5">
                <div className="flex items-center justify-between border-b border-[#F1F5F9] pb-4">
                  <span className="text-2xl font-bold font-mono text-[#005B64]">{item.num}</span>
                  <span className="px-3 py-1 rounded bg-[#F0F7F8] text-[#005B64] text-[11px] font-mono font-bold">
                    {item.badge}
                  </span>
                </div>

                <div>
                  <h3 className="text-xl font-bold text-[#0A121E] font-serif">{item.title}</h3>
                  <div className="text-xs font-mono text-[#005B64] mt-1">{item.subtitle}</div>
                </div>

                <p className="text-xs text-[#64748B] leading-relaxed">
                  {item.desc}
                </p>

                <ul className="space-y-2.5 text-xs text-[#334155] border-t border-[#F1F5F9] pt-4 font-mono">
                  {item.specs.map((s, i) => (
                    <li key={i} className="flex items-center gap-2.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#005B64]"></span>
                      <span>{s}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="pt-6 border-t border-[#F1F5F9] flex items-center justify-between">
                <span className="text-xs text-[#64748B]">Индивидуальный план</span>
                <a
                  href={`https://wa.me/996772312000?text=${encodeURIComponent(`Здравствуйте! Хочу проконсультироваться по направлению: «${item.title}».`)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-5 py-2.5 rounded bg-[#005B64] hover:bg-[#004850] text-white font-medium text-xs uppercase tracking-wider transition flex items-center gap-2"
                >
                  <span>Запросить план лечения</span>
                  <ChevronRight className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Equipment Standards */}
      <section id="standards" className="py-28 px-8 max-w-7xl mx-auto border-b border-[#E8ECF2]">
        <div className="space-y-3 max-w-2xl mb-16">
          <span className="text-xs font-mono text-[#005B64] uppercase tracking-[0.25em] block">Техническое оснащение</span>
          <h2 className="text-3xl sm:text-4xl font-bold text-[#0A121E] font-serif tracking-tight">
            Оборудование экспертного класса
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-xs">
          <div className="p-6 rounded border border-[#E8ECF2] bg-white space-y-3 shadow-sm">
            <span className="text-[#005B64] font-mono font-bold text-xs block">Германия</span>
            <h4 className="text-sm font-bold text-[#0A121E] font-serif">Carl Zeiss ProErgo</h4>
            <p className="text-[#64748B] leading-relaxed">
              Операционный микроскоп с ксеноновым светом и моторизованной фокусировкой для сложной микрохирургии.
            </p>
          </div>

          <div className="p-6 rounded border border-[#E8ECF2] bg-white space-y-3 shadow-sm">
            <span className="text-[#005B64] font-mono font-bold text-xs block">Швейцария</span>
            <h4 className="text-sm font-bold text-[#0A121E] font-serif">Melag Автоклав Класса B</h4>
            <p className="text-[#64748B] leading-relaxed">
              Вакуумная стерилизация хирургических наборов в индивидуальных одноразовых крафт-пакетах.
            </p>
          </div>

          <div className="p-6 rounded border border-[#E8ECF2] bg-white space-y-3 shadow-sm">
            <span className="text-[#005B64] font-mono font-bold text-xs block">Финляндия</span>
            <h4 className="text-sm font-bold text-[#0A121E] font-serif">3D-Томограф Planmeca</h4>
            <p className="text-[#64748B] leading-relaxed">
              Сверхточная трехмерная томография с минимальной дозой облучения для безопасной диагностики.
            </p>
          </div>
        </div>
      </section>

      {/* Private Concierge & Direct Contact */}
      <section id="concierge" className="py-28 px-8 max-w-7xl mx-auto">
        <div className="rounded-2xl border border-[#CBD5E1] bg-gradient-to-b from-white to-[#F8FAFC] p-10 sm:p-16 shadow-xl relative overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-7 space-y-6">
              <span className="text-xs font-mono text-[#005B64] uppercase tracking-[0.25em] block">Консультация главного врача</span>
              <h2 className="text-3xl sm:text-5xl font-bold text-[#0A121E] font-serif tracking-tight leading-[1.15]">
                Запишитесь на первичный прием и 3D снимок в Оше
              </h2>
              <p className="text-[#64748B] text-base leading-relaxed">
                Свяжитесь с дежурным медицинским координатором в WhatsApp. Мы ответим на вопросы по лечению, сориентируем по срокам и согласуем удобное время визита.
              </p>

              <div className="space-y-4 text-xs font-mono pt-2">
                <div className="flex items-center gap-3 text-[#334155]">
                  <MapPin className="w-4 h-4 text-[#005B64] shrink-0" />
                  <span>г. Ош, ул. Алымбека Датка, 97 (Центральный хирургический блок)</span>
                </div>
                <div className="flex items-center gap-3 text-[#334155]">
                  <Phone className="w-4 h-4 text-[#005B64] shrink-0" />
                  <a href="tel:+996772312000" className="hover:underline font-bold text-[#0A121E]">+996 772 312 000</a>
                </div>
                <div className="flex items-center gap-3 text-[#334155]">
                  <Globe className="w-4 h-4 text-[#005B64] shrink-0" />
                  <span>Instagram: @dr.atazhanov</span>
                </div>
              </div>
            </div>

            <div className="lg:col-span-5 p-8 rounded-xl border border-[#E2E8F0] bg-white space-y-6 shadow-md">
              <div className="space-y-2">
                <div className="text-sm font-bold text-[#0A121E] font-serif">Прямая связь в WhatsApp</div>
                <p className="text-xs text-[#64748B]">
                  Нажмите кнопку для мгновенной консультации:
                </p>
              </div>

              <a
                href={waUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-4 rounded bg-[#005B64] hover:bg-[#004850] text-white font-medium text-xs uppercase tracking-wider transition duration-200 flex items-center justify-center gap-2 shadow-lg shadow-[#005B64]/15"
              >
                <MessageSquare className="w-4 h-4" />
                <span>Написать в WhatsApp</span>
              </a>

              <a
                href="tel:+996772312000"
                className="w-full py-3.5 rounded border border-[#CBD5E1] hover:bg-[#F8FAFC] text-[#334155] text-xs transition flex items-center justify-center gap-2"
              >
                <Phone className="w-3.5 h-3.5 text-[#005B64]" />
                <span>Позвонить в регистратуру</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-[#E8ECF2] bg-[#0A121E] py-10 px-8 text-xs text-[#90A1B8] font-mono">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-3">
            <AtazhanovLogo className="h-6 w-auto" />
            <span className="text-white/30">•</span>
            <span>г. Ош, ул. Алымбека Датка, 97</span>
          </div>
          <div>Лицензия МЗ КР #004812 • © 2026 ВСЕ ПРАВА ЗАЩИЩЕНЫ</div>
        </div>
      </footer>
    </div>
  );
};
