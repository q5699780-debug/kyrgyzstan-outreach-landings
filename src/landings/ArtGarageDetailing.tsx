import React, { useState } from 'react';
import { Shield, Sparkles, Zap, Check, Phone, MessageSquare, ArrowRight, BatteryCharging, Gauge, Award, Layers } from 'lucide-react';

export const ArtGarageDetailing: React.FC = () => {
  const [activePackage, setActivePackage] = useState<'full_ppf' | 'satin' | 'interior' | 'ceramic'>('full_ppf');

  const packages = {
    full_ppf: {
      title: 'Full Body PPF (Полная бронепленка)',
      badge: 'Stek DynoShield / SunTek • США 215 мкм',
      desc: 'Премиальная полиуретановая броня с самозатягивающимся гидрофобным Top Coat слоем. Защита от гравия на трассах, пескоструя, сколов и химических реагентов.',
      perks: ['Полная защита кузова с подворотом краев', 'Самозатягивание царапин от горячей воды/солнца', 'Сохранение 100% заводского лака', 'Официальная гарантия 5 лет'],
    },
    satin: {
      title: 'Satin Stealth Transformation (Матовый сатин)',
      badge: 'Stek DynoMatte • Эффект шелка',
      desc: 'Превращение любого глянцевого цвета в глубокий благородный матовый сатин с сохранением максимальной полиуретановой бронезащиты.',
      perks: ['Эксклюзивный шелковистый матовый оттенок', 'Усиленный гидрофобный и антистатический слой', 'Скрывает мелкие дефекты и микроцарапины', 'Идеально для Zeekr 001/007, Li Auto L9, Porsche'],
    },
    interior: {
      title: 'EV Interior Screen & Piano Black Protection',
      badge: 'Пленка для мониторов и глянца',
      desc: 'Лазерный раскрой защитной пленки для мультимедийных дисплеев, консолей из рояльного лака, карбоновых вставок и декоративных панелей.',
      perks: ['Защита сенсорных экранов от отпечатков и сколов', 'Антибликовое покрытие высокой четкости', 'Защита уязвимого рояльного лака в салоне', 'Бесследный демонтаж без остатков клея'],
    },
    ceramic: {
      title: 'Ceramic Pro 9H Multi-Layer Coating',
      badge: 'Нанокерамика 4 слоя • Глубокий глянец',
      desc: 'Многослойная керамическая броня с кварцевым запеканием под инфракрасными лампами. Зеркальный блеск, супергидрофоб и стойкость к ультрафиолету.',
      perks: ['Глубокий зеркальный «мокрый» блеск', 'Мощный эффект самоочищения от грязи и пыли', 'Защита от выгорания цвета на ярком солнце', 'Стойкость к агрессивной дорожной химии'],
    },
  };

  const selected = packages[activePackage];

  const waMessage = `Салам, студия Art Garage в Бишкеке! Меня интересует услуга: ${selected.title}. Хочу записаться на бесплатный ультразвуковой аудит ЛКП и осмотр авто в боксе.`;
  const waUrl = `https://wa.me/996707900009?text=${encodeURIComponent(waMessage)}`;

  return (
    <div className="min-h-screen bg-[#06080C] text-[#EDF2F7] font-sans selection:bg-cyan-400 selection:text-black">
      {/* Top Bar */}
      <div className="bg-[#030406] text-cyan-300 py-2.5 px-6 sm:px-12 text-xs flex items-center justify-between border-b border-cyan-950 font-mono">
        <div className="flex items-center gap-3">
          <Zap className="w-4 h-4 text-cyan-400" />
          <span className="tracking-wider uppercase">ART GARAGE DETAILING • БИШКЕК, ЧОКАНА ВАЛИХАНОВА, 1/6А • EV PROTECTION</span>
        </div>
        <div className="hidden sm:flex items-center gap-6 text-slate-400 font-sans text-xs">
          <span>Беспылевая камера HEPA</span>
          <a href="tel:+996707900009" className="text-cyan-400 font-bold hover:underline font-mono">+996 707 900 009</a>
        </div>
      </div>

      {/* Hero Banner Section */}
      <section className="relative min-h-[85vh] flex items-end pb-16 px-6 sm:px-12 border-b border-cyan-950 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src="/images/art-garage.jpg"
            alt="Art Garage Detailing Bishkek"
            className="w-full h-full object-cover object-center brightness-[0.45] scale-105 transition duration-1000"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#06080C] via-[#06080C]/60 to-transparent" />
          <div className="absolute inset-0 bg-radial-at-c from-transparent via-[#06080C]/40 to-[#06080C]" />
        </div>

        <div className="relative z-10 max-w-5xl mx-auto w-full space-y-6">
          <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-black/60 border border-cyan-400/40 text-cyan-300 text-xs font-mono backdrop-blur-md">
            <BatteryCharging className="w-3.5 h-3.5 text-cyan-400" />
            <span className="uppercase tracking-widest">Центр бронезащиты электромобилей и премиум-авто</span>
          </div>

          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-bold tracking-tight font-serif text-white leading-[1.08]">
            Безупречная защита ЛКП и премиальный стайлинг в Бишкеке
          </h1>

          <p className="text-slate-300 text-base sm:text-xl font-light leading-relaxed max-w-3xl">
            Оклейка оригинальным полиуретаном Stek и SunTek (США) с подворотом краев, бронирование экранов мультимедиа и шумоизоляция премиальных электрокаров Zeekr, Li Auto, BYD, Porsche и BMW.
          </p>

          <div className="flex flex-wrap items-center gap-4 pt-4">
            <a
              href="#packages"
              className="px-8 py-4 rounded-xl bg-cyan-400 hover:bg-cyan-300 text-black font-bold text-xs uppercase tracking-wider transition shadow-2xl shadow-cyan-400/20 flex items-center gap-3"
            >
              <span>Выбрать комплекс защиты</span>
              <ArrowRight className="w-4 h-4" />
            </a>

            <a
              href={waUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-4 rounded-xl bg-black/60 hover:bg-white/10 text-white font-mono text-xs uppercase tracking-wider transition border border-white/20 backdrop-blur-md flex items-center gap-2"
            >
              <MessageSquare className="w-4 h-4 text-emerald-400" />
              <span>Записаться на аудит ЛКП (WhatsApp)</span>
            </a>
          </div>

          {/* Quick Specs */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-8 border-t border-white/10 font-mono text-xs">
            <div>
              <div className="text-cyan-400 font-bold text-lg">215 мкм</div>
              <div className="text-slate-400 uppercase text-[10px] tracking-wider">Толщина бронепленки</div>
            </div>
            <div>
              <div className="text-cyan-400 font-bold text-lg">HEPA 100%</div>
              <div className="text-slate-400 uppercase text-[10px] tracking-wider">Беспылевые боксы</div>
            </div>
            <div>
              <div className="text-cyan-400 font-bold text-lg">5 Лет</div>
              <div className="text-slate-400 uppercase text-[10px] tracking-wider">Официальная гарантия</div>
            </div>
            <div>
              <div className="text-cyan-400 font-bold text-lg">0 Сом</div>
              <div className="text-slate-400 uppercase text-[10px] tracking-wider">Ультразвуковой замер ЛКП</div>
            </div>
          </div>
        </div>
      </section>

      {/* Story & Studio Infrastructure */}
      <section className="py-24 px-6 sm:px-12 max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-6 space-y-6">
            <span className="text-xs font-mono uppercase tracking-[0.25em] text-cyan-400 block">О детейлинг-ателье</span>
            <h2 className="text-3xl sm:text-4xl font-bold font-serif text-white leading-snug">
              Хирургическая точность и защита тонкого лака современных электрокаров
            </h2>
            <p className="text-slate-300 leading-relaxed text-sm sm:text-base">
              Современные китайские и европейские автомобили имеют заводскую толщину лакокрасочного покрытия всего 80–110 микрон. Первый же выезд на загородную трассу или гравий оборачивается глубокими сколами.
            </p>
            <p className="text-slate-300 leading-relaxed text-sm sm:text-base">
              В студии «Art Garage» работы ведутся в изолированной беспылевой камере с постоянным микроклиматом. Мы раскраиваем пленку на высокоточных плоттерах по лекалам кузова без применения ножей на ЛКП.
            </p>
          </div>

          <div className="lg:col-span-6 space-y-4">
            <div className="p-6 rounded-2xl bg-[#0D121B] border border-cyan-950 space-y-3">
              <div className="flex items-center gap-3">
                <Shield className="w-5 h-5 text-cyan-400" />
                <h3 className="text-base font-bold text-white">Оригинальный полиуретан США</h3>
              </div>
              <p className="text-xs text-slate-400 leading-relaxed">
                Работаем напрямую с сертифицированными рулонами Stek, SunTek и Llumar. Пленка не желтеет со временем и защищает от сколов при ударах гравия на скорости 140 км/ч.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-[#0D121B] border border-cyan-950 space-y-3">
              <div className="flex items-center gap-3">
                <Gauge className="w-5 h-5 text-cyan-400" />
                <h3 className="text-base font-bold text-white">Бесплатный ультразвуковой аудит ЛКП</h3>
              </div>
              <p className="text-xs text-slate-400 leading-relaxed">
                Перед началом работ проводим детальную диагностику всех кузовных элементов высокоточным толщиномером с составлением карты состояния автомобиля.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Package Selector Showcase */}
      <section id="packages" className="py-20 px-6 sm:px-12 bg-[#090D14] border-y border-cyan-950">
        <div className="max-w-6xl mx-auto space-y-12">
          <div className="text-center max-w-2xl mx-auto space-y-3">
            <span className="text-xs font-mono uppercase tracking-[0.25em] text-cyan-400 block">Комплексы защиты</span>
            <h2 className="text-3xl sm:text-4xl font-bold font-serif text-white">Индивидуальные программы детейлинга</h2>
            <p className="text-xs sm:text-sm text-slate-400">
              Выберите интересующую программу для детального ознакомления с технологией
            </p>
          </div>

          {/* Selector Tabs */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
            {(Object.keys(packages) as Array<keyof typeof packages>).map((k) => (
              <button
                key={k}
                onClick={() => setActivePackage(k)}
                className={`p-4 rounded-xl text-left border transition font-mono text-xs uppercase tracking-wider ${
                  activePackage === k
                    ? 'bg-cyan-400 text-black border-cyan-300 font-bold shadow-lg shadow-cyan-400/20'
                    : 'bg-[#0D121B] border-cyan-950 text-slate-400 hover:bg-slate-800/60'
                }`}
              >
                {packages[k].title.split(' (')[0]}
              </button>
            ))}
          </div>

          {/* Active Card */}
          <div className="p-8 sm:p-10 rounded-3xl bg-[#0D121B] border border-cyan-400/30 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-7 space-y-4">
              <div className="inline-block px-3 py-1 rounded bg-cyan-400/20 text-cyan-300 font-mono text-xs uppercase tracking-wider">
                {selected.badge}
              </div>
              <h3 className="text-2xl sm:text-3xl font-bold font-serif text-white">{selected.title}</h3>
              <p className="text-slate-300 text-sm leading-relaxed">{selected.desc}</p>

              <div className="space-y-2 pt-2">
                <div className="text-xs font-mono uppercase tracking-wider text-cyan-400">Особенности технологии:</div>
                <ul className="space-y-1.5">
                  {selected.perks.map((p, idx) => (
                    <li key={idx} className="flex items-center gap-2 text-xs text-slate-200">
                      <Check className="w-4 h-4 text-cyan-400 shrink-0" />
                      <span>{p}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="lg:col-span-5 p-6 rounded-2xl bg-black/40 border border-white/10 space-y-4 text-center">
              <div className="text-xs text-slate-400 font-mono uppercase tracking-wider">Запись в беспылевой бокс</div>
              <div className="text-lg font-bold text-white">Индивидуальный расчет под модель</div>
              <p className="text-xs text-slate-400">
                Проведем осмотр толщиномером и подберем оптимальный комплект защиты
              </p>
              <a
                href={waUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-3.5 rounded-xl bg-cyan-400 hover:bg-cyan-300 text-black font-bold text-xs uppercase tracking-wider transition flex items-center justify-center gap-2 shadow-lg shadow-cyan-400/10"
              >
                <MessageSquare className="w-4 h-4" />
                <span>Записаться в WhatsApp</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-6 sm:px-12 border-t border-cyan-950 bg-[#030406] text-xs text-slate-400 font-mono">
        <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-3">
            <Zap className="w-4 h-4 text-cyan-400" />
            <span>ART GARAGE DETAILING • Бишкек, ул. Чокана Валиханова, 1/6а</span>
          </div>
          <div>Тел: +996 707 900 009 • Instagram: @artgarage_kg</div>
        </div>
      </footer>
    </div>
  );
};

