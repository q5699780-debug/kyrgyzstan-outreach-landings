import React, { useState } from 'react';
import { Building, ShieldCheck, Check, Phone, MessageSquare, ArrowRight, Zap, Users, MapPin, Coffee, Wifi, Award } from 'lucide-react';

export const BaikutBatken: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'mission' | 'delegation' | 'tourism'>('mission');

  const packages = {
    mission: {
      title: 'Деловые командировки & Миссии',
      badge: 'B2B Invoicing • Single/Twin',
      desc: 'Комфортное и безопасное размещение сотрудников международных организаций (UN, OSCE, GIZ, Red Cross) с тихой рабочей зоной, кондиционером и полным пакетом командировочных документов.',
      perks: ['Резервный генератор электроснабжения', 'Высокоскоростной Wi-Fi по всей территории', 'Завтраки и домашний ужин по расписанию', 'Официальный договор и закрывающие акты'],
    },
    delegation: {
      title: 'Конференц-зал & Делегации',
      badge: 'Зал до 50 мест • MICE',
      desc: 'Оснащенный мультимедийный зал для проведения тренингов, семинаров и рабочих встреч с акустической системой, проектором и кофе-брейками с баткенскими абрикосами.',
      perks: ['Мультимедийный проектор и микрофоны', 'Организация кофе-брейков и фуршетов', 'Возможность группового расселения до 30 человек', 'Трансфер из аэропорта Баткен'],
    },
    tourism: {
      title: 'Туризм & Цветение Айгуль',
      badge: 'Eco Living • Garden View',
      desc: 'Аутентичный отдых среди цветущих урюковых садов Баткена, поездки к эндемичному цветку Айгуль, в ущелье Кара-Булак и к древним памятникам Шелкового Пути.',
      perks: ['Вид на абрикосовый сад и горы', 'Организация индивидуальных джип-экскурсий', 'Традиционная баткенская кухня из свежих продуктов', 'Трансфер на цветение Айгуль-Таш'],
    },
  };

  const selected = packages[activeTab];

  const waMessage = `Здравствуйте, администрация отеля «Байкут» в Баткене! Меня интересует бронирование по направлению: ${selected.title}. Хочу уточнить наличие свободных мест и условия заезда.`;
  const waUrl = `https://wa.me/996773900111?text=${encodeURIComponent(waMessage)}`;

  return (
    <div className="min-h-screen bg-[#071311] text-[#E6F4F1] font-sans selection:bg-teal-500 selection:text-black">
      {/* Top Bar */}
      <div className="bg-[#030908] text-teal-300 py-2.5 px-6 sm:px-12 text-xs flex items-center justify-between border-b border-teal-950 font-mono">
        <div className="flex items-center gap-3">
          <Building className="w-4 h-4 text-teal-400" />
          <span className="tracking-wider uppercase">ГОСТЕВОЙ КОМПЛЕКС «БАЙКУТ» • БАТКЕН • ДЕЛОВОЙ И ЭКО-СЕРВИС</span>
        </div>
        <div className="hidden sm:flex items-center gap-6 text-teal-200/70 font-sans text-xs">
          <span>ул. Раззакова</span>
          <a href="tel:+996773900111" className="text-teal-400 font-bold hover:underline font-mono">+996 773 900 111</a>
        </div>
      </div>

      {/* Hero Banner Section */}
      <section className="relative min-h-[85vh] flex items-end pb-16 px-6 sm:px-12 border-b border-teal-950 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src="/images/baikut.jpg"
            alt="Гостевой комплекс Байкут Баткен"
            className="w-full h-full object-cover object-center brightness-[0.45] scale-105 transition duration-1000"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#071311] via-[#071311]/60 to-transparent" />
          <div className="absolute inset-0 bg-radial-at-c from-transparent via-[#071311]/40 to-[#071311]" />
        </div>

        <div className="relative z-10 max-w-5xl mx-auto w-full space-y-6">
          <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-black/60 border border-teal-400/40 text-teal-300 text-xs font-mono backdrop-blur-md">
            <ShieldCheck className="w-3.5 h-3.5 text-teal-400" />
            <span className="uppercase tracking-widest">Главный деловой и эко-хаб Баткенской области</span>
          </div>

          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-bold tracking-tight font-serif text-white leading-[1.08]">
            Надежный оазис комфорта и гостеприимства в Баткене
          </h1>

          <p className="text-teal-100/90 text-base sm:text-xl font-light leading-relaxed max-w-3xl">
            Современные номера с автономным электроснабжением и кондиционированием среди цветущих урюковых садов, конференц-зал для делегаций и трансфер из аэропорта.
          </p>

          <div className="flex flex-wrap items-center gap-4 pt-4">
            <a
              href="#packages"
              className="px-8 py-4 rounded-xl bg-teal-500 hover:bg-teal-400 text-black font-bold text-xs uppercase tracking-wider transition shadow-2xl shadow-teal-500/20 flex items-center gap-3"
            >
              <span>Выбрать формат размещения</span>
              <ArrowRight className="w-4 h-4" />
            </a>

            <a
              href={waUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-4 rounded-xl bg-black/60 hover:bg-white/10 text-white font-mono text-xs uppercase tracking-wider transition border border-white/20 backdrop-blur-md flex items-center gap-2"
            >
              <MessageSquare className="w-4 h-4 text-emerald-400" />
              <span>Забронировать (WhatsApp)</span>
            </a>
          </div>

          {/* Quick Specs */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-8 border-t border-white/10 font-mono text-xs">
            <div>
              <div className="text-teal-400 font-bold text-lg">24/7 Power</div>
              <div className="text-teal-200/60 uppercase text-[10px] tracking-wider">Резервный генератор</div>
            </div>
            <div>
              <div className="text-teal-400 font-bold text-lg">MICE 50</div>
              <div className="text-teal-200/60 uppercase text-[10px] tracking-wider">Конференц-зал с проектором</div>
            </div>
            <div>
              <div className="text-teal-400 font-bold text-lg">B2B Docs</div>
              <div className="text-teal-200/60 uppercase text-[10px] tracking-wider">Безналичный расчет</div>
            </div>
            <div>
              <div className="text-teal-400 font-bold text-lg">Airport VIP</div>
              <div className="text-teal-200/60 uppercase text-[10px] tracking-wider">Трансфер из аэропорта</div>
            </div>
          </div>
        </div>
      </section>

      {/* Story & Infrastructure */}
      <section className="py-24 px-6 sm:px-12 max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-6 space-y-6">
            <span className="text-xs font-mono uppercase tracking-[0.25em] text-teal-400 block">О гостевом комплексе</span>
            <h2 className="text-3xl sm:text-4xl font-bold font-serif text-white leading-snug">
              Безупречная надежность и южное тепло Баткенской долины
            </h2>
            <p className="text-teal-100/80 leading-relaxed text-sm sm:text-base">
              Гостевой дом «Байкут» создан для того, чтобы командированные специалисты и гости региона чувствовали уверенность и комфорт в любое время года. Комплекс полностью автономен: установлена собственная система фильтрации воды и резервное электроснабжение.
            </p>
            <p className="text-teal-100/80 leading-relaxed text-sm sm:text-base">
              Утром подаются традиционные горячие лепешки, баткенский горный мед, свежий каймак и знаменитый сушеный урюк «Кандак».
            </p>
          </div>

          <div className="lg:col-span-6 space-y-4">
            <div className="p-6 rounded-2xl bg-[#0D211E] border border-teal-900/60 space-y-3">
              <div className="flex items-center gap-3">
                <Users className="w-5 h-5 text-teal-400" />
                <h3 className="text-base font-bold text-white">Оснащенный конференц-зал</h3>
              </div>
              <p className="text-xs text-teal-200/70 leading-relaxed">
                Зал на 50 посадочных мест с акустической системой, климат-контролем и быстрым интернетом для проведения региональных форумов и семинаров.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-[#0D211E] border border-teal-900/60 space-y-3">
              <div className="flex items-center gap-3">
                <Zap className="w-5 h-5 text-teal-400" />
                <h3 className="text-base font-bold text-white">Автономность и безопасность</h3>
              </div>
              <p className="text-xs text-teal-200/70 leading-relaxed">
                Закрытая охраняемая территория, видеонаблюдение, парковка для служебного транспорта и непрерывная подача электроэнергии.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Package Selector Showcase */}
      <section id="packages" className="py-20 px-6 sm:px-12 bg-[#0A1A17] border-y border-teal-950">
        <div className="max-w-6xl mx-auto space-y-12">
          <div className="text-center max-w-2xl mx-auto space-y-3">
            <span className="text-xs font-mono uppercase tracking-[0.25em] text-teal-400 block">Направления размещения</span>
            <h2 className="text-3xl sm:text-4xl font-bold font-serif text-white">Индивидуальные условия для каждой поездки</h2>
            <p className="text-xs sm:text-sm text-teal-200/70">
              Выберите цель вашего визита в Баткен для просмотра условий и включенных услуг
            </p>
          </div>

          {/* Selector Tabs */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
            {(Object.keys(packages) as Array<keyof typeof packages>).map((k) => (
              <button
                key={k}
                onClick={() => setActiveTab(k)}
                className={`p-4 rounded-xl text-left border transition font-mono text-xs uppercase tracking-wider ${
                  activeTab === k
                    ? 'bg-teal-500 text-black border-teal-400 font-bold shadow-lg shadow-teal-500/20'
                    : 'bg-[#0E2622] border-teal-950 text-teal-200/70 hover:bg-teal-900/40'
                }`}
              >
                {packages[k].title}
              </button>
            ))}
          </div>

          {/* Active Card */}
          <div className="p-8 sm:p-10 rounded-3xl bg-[#0D211E] border border-teal-500/30 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-7 space-y-4">
              <div className="inline-block px-3 py-1 rounded bg-teal-500/20 text-teal-300 font-mono text-xs uppercase tracking-wider">
                {selected.badge}
              </div>
              <h3 className="text-2xl sm:text-3xl font-bold font-serif text-white">{selected.title}</h3>
              <p className="text-teal-100/80 text-sm leading-relaxed">{selected.desc}</p>

              <div className="space-y-2 pt-2">
                <div className="text-xs font-mono uppercase tracking-wider text-teal-400">Преимущества:</div>
                <ul className="space-y-1.5">
                  {selected.perks.map((p, idx) => (
                    <li key={idx} className="flex items-center gap-2 text-xs text-teal-100/90">
                      <Check className="w-4 h-4 text-teal-400 shrink-0" />
                      <span>{p}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="lg:col-span-5 p-6 rounded-2xl bg-black/40 border border-white/10 space-y-4 text-center">
              <div className="text-xs text-teal-200/70 font-mono uppercase tracking-wider">Бронирование без комиссий</div>
              <div className="text-lg font-bold text-white">Индивидуальный расчет дат</div>
              <p className="text-xs text-teal-200/60">
                Предоставляем официальные договоры и организуем трансфер к вашему рейсу
              </p>
              <a
                href={waUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-3.5 rounded-xl bg-teal-500 hover:bg-teal-400 text-black font-bold text-xs uppercase tracking-wider transition flex items-center justify-center gap-2 shadow-lg shadow-teal-500/10"
              >
                <MessageSquare className="w-4 h-4" />
                <span>Забронировать в WhatsApp</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-6 border-t border-slate-200 bg-white text-xs text-slate-500">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
          <div>
            <strong>Гостевой дом Байкут</strong> • г. Баткен, ул. Раззакова • Тел: +996 773 900 111
          </div>
          <div>Instagram: @baikut_batken</div>
        </div>
      </footer>
    </div>
  );
};
