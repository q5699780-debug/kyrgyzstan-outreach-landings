import React, { useState } from 'react';
import { Crown, Sparkles, Users, Calendar, Phone, MessageSquare, ArrowRight, Star, Gift, Check, MapPin, ChevronRight, Award } from 'lucide-react';

export const KhanOrdoTokmok: React.FC = () => {
  const [eventType, setEventType] = useState<'wedding' | 'kyz-uzatu' | 'jubilee' | 'corporate'>('wedding');

  const events = {
    wedding: {
      title: 'Царская свадьба (Чоң Той)',
      scale: '200 – 350 гостей',
      desc: 'Торжественный выход молодоженов под сценический тяжелый дым, почетный стол Төр с золотым текстилем, светозвуковое шоу и координация кортежа.',
      perks: ['Тяжелый дым & Сценический свет', 'Оформление зоны Төр в подарок', 'Комната невесты с персональным гримерным местом'],
    },
    'kyz-uzatu': {
      title: 'Обряд Кыз Узатуу',
      scale: '150 – 300 гостей',
      desc: 'Нежная восточная эстетика, национальная дорожка Ак Жол, живое исполнение кыргызских народных мелодий и деликатная подача блюд.',
      perks: ['Оформление дорожки Ак Жол', 'Традиционный чайный стол и сладости', 'Световые акценты на обряд проводов'],
    },
    jubilee: {
      title: 'Юбилей и Почетный Той',
      scale: '100 – 250 гостей',
      desc: 'Уважение традиций, торжественное чествование аксакалов, премиальная подача бешбармака с казы и чучуком и профессиональный ведущий.',
      perks: ['Персональная рассадка гостей', 'Презентация архивных видео на 4K экранах', 'VIP-зона для почетных гостей'],
    },
    corporate: {
      title: 'Корпоративный Гала-вечер',
      scale: '150 – 350 гостей',
      desc: 'Масштабные банкеты для компаний Чуйской области, концертный звук, просторный танцпол без колонн и европейское банкетное меню.',
      perks: ['Профессиональная сцена для артистов', 'Безналичный расчет и закрывающие документы', 'Охраняемая парковка на 120 автомобилей'],
    },
  };

  const selectedEvent = events[eventType];

  const waMessage = `Салам Алейкум, дворец торжеств «Хан Ордо» в Токмоке! Планируем мероприятие: ${selectedEvent.title} (${selectedEvent.scale}). Хотим уточнить свободные даты на сезон 2026 и получить полное банкетное меню с расчетом.`;
  const waUrl = `https://wa.me/996555611611?text=${encodeURIComponent(waMessage)}`;

  return (
    <div className="min-h-screen bg-[#0C0406] text-[#FEF2F2] font-sans selection:bg-amber-500 selection:text-black">
      {/* Top Monograph Bar */}
      <div className="bg-[#180609] text-amber-300 py-2.5 px-6 sm:px-12 text-xs flex items-center justify-between border-b border-rose-950/60 font-mono">
        <div className="flex items-center gap-3">
          <Crown className="w-4 h-4 text-amber-400" />
          <span className="tracking-wider uppercase">ДВОРЕЦ ТОРЖЕСТВ «ХАН ОРДО» • ТОКМОК • ДО 350 ГОСТЕЙ</span>
        </div>
        <div className="hidden sm:flex items-center gap-6 text-rose-200/80 font-sans text-xs">
          <span>ул. Кыргызская, 61/1</span>
          <a href="tel:+996555611611" className="text-amber-400 font-bold hover:underline font-mono">+996 555 611 611</a>
        </div>
      </div>

      {/* Hero Banner Section */}
      <section className="relative min-h-[85vh] flex items-end pb-16 px-6 sm:px-12 border-b border-rose-950/80 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src="/images/khan-ordo.jpg"
            alt="Хан Ордо Токмок Банкетный Зал"
            className="w-full h-full object-cover object-center brightness-[0.45] scale-105 transition duration-1000"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0C0406] via-[#0C0406]/60 to-transparent" />
          <div className="absolute inset-0 bg-radial-at-c from-transparent via-[#0C0406]/40 to-[#0C0406]" />
        </div>

        <div className="relative z-10 max-w-5xl mx-auto w-full space-y-6">
          <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-black/60 border border-amber-400/40 text-amber-300 text-xs font-mono backdrop-blur-md">
            <Crown className="w-3.5 h-3.5 text-amber-400" />
            <span className="uppercase tracking-widest">Главная банкетная резиденция Чуйской долины</span>
          </div>

          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-bold tracking-tight font-serif text-white leading-[1.08]">
            Ханский размах и безупречное величие вашего тоя
          </h1>

          <p className="text-rose-100/90 text-base sm:text-xl font-light leading-relaxed max-w-3xl">
            Монументальный зал без колонн до 350 персон, хрустальные люстры, авторское банкетное меню от шефа и профессиональное сценическое сопровождение в г. Токмок.
          </p>

          <div className="flex flex-wrap items-center gap-4 pt-4">
            <a
              href="#formats"
              className="px-8 py-4 rounded-xl bg-amber-500 hover:bg-amber-400 text-black font-bold text-xs uppercase tracking-wider transition shadow-2xl shadow-amber-500/20 flex items-center gap-3"
            >
              <span>Подобрать формат тоя</span>
              <ArrowRight className="w-4 h-4" />
            </a>

            <a
              href={waUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-4 rounded-xl bg-black/60 hover:bg-white/10 text-white font-mono text-xs uppercase tracking-wider transition border border-white/20 backdrop-blur-md flex items-center gap-2"
            >
              <MessageSquare className="w-4 h-4 text-emerald-400" />
              <span>Узнать свободные даты (WhatsApp)</span>
            </a>
          </div>

          {/* Quick Specs Strip */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-8 border-t border-white/10 font-mono text-xs">
            <div>
              <div className="text-amber-400 font-bold text-lg">350 мест</div>
              <div className="text-rose-200/60 uppercase text-[10px] tracking-wider">Просторный зал без колонн</div>
            </div>
            <div>
              <div className="text-amber-400 font-bold text-lg">4K LED</div>
              <div className="text-rose-200/60 uppercase text-[10px] tracking-wider">Сценические экраны</div>
            </div>
            <div>
              <div className="text-amber-400 font-bold text-lg">120 авто</div>
              <div className="text-rose-200/60 uppercase text-[10px] tracking-wider">Охраняемый паркинг</div>
            </div>
            <div>
              <div className="text-amber-400 font-bold text-lg">VIP Төр</div>
              <div className="text-rose-200/60 uppercase text-[10px] tracking-wider">Царское оформление</div>
            </div>
          </div>
        </div>
      </section>

      {/* Story & Quality Manifesto */}
      <section className="py-24 px-6 sm:px-12 max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-6 space-y-6">
            <span className="text-xs font-mono uppercase tracking-[0.25em] text-amber-400 block">О банкетном дворце</span>
            <h2 className="text-3xl sm:text-4xl font-bold font-serif text-white leading-snug">
              Традиции кыргызского гостеприимства в роскошном дворцовом исполнении
            </h2>
            <p className="text-rose-100/80 leading-relaxed text-sm sm:text-base">
              «Хан Ордо» спроектирован специально для масштабных семейных и национальных торжеств. В зале нет внутренних опор и колонн, что обеспечивает идеальный обзор сцены и президиума молодоженов с любой точки.
            </p>
            <p className="text-rose-100/80 leading-relaxed text-sm sm:text-base">
              Собственная кухня полного цикла готовит традиционный бешбармак из отборной чуйской конины и баранины, свежую выпечку и деликатесы европейской кухни.
            </p>
          </div>

          <div className="lg:col-span-6 space-y-4">
            <div className="p-6 rounded-2xl bg-[#1A080C] border border-rose-950 space-y-3">
              <div className="flex items-center gap-3">
                <Crown className="w-5 h-5 text-amber-400" />
                <h3 className="text-base font-bold text-white">Хрустальный свод и акустика</h3>
              </div>
              <p className="text-xs text-rose-200/70 leading-relaxed">
                Многоярусные хрустальные люстры создают теплое сияние, а профессионально настроенный линейный массив звука гарантирует чистую речь тостующих и насыщенную музыку без эха.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-[#1A080C] border border-rose-950 space-y-3">
              <div className="flex items-center gap-3">
                <Gift className="w-5 h-5 text-amber-400" />
                <h3 className="text-base font-bold text-white">Комната невесты и свадебный номер</h3>
              </div>
              <p className="text-xs text-rose-200/70 leading-relaxed">
                Отдельные комфортные апартаменты для жениха и невесты с отдельным санузлом, зеркалами визажиста и зоной отдыха перед выходом в зал.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Event Format Concierge Selector */}
      <section id="formats" className="py-20 px-6 sm:px-12 bg-[#140508] border-y border-rose-950">
        <div className="max-w-6xl mx-auto space-y-12">
          <div className="text-center max-w-2xl mx-auto space-y-3">
            <span className="text-xs font-mono uppercase tracking-[0.25em] text-amber-400 block">Форматы мероприятий</span>
            <h2 className="text-3xl sm:text-4xl font-bold font-serif text-white">Индивидуальный сценарий для каждого события</h2>
            <p className="text-xs sm:text-sm text-rose-200/70">
              Выберите тип вашего праздника, чтобы ознакомиться с форматом подготовки и подарками от заведения
            </p>
          </div>

          {/* Selector Tabs */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
            {(Object.keys(events) as Array<keyof typeof events>).map((k) => (
              <button
                key={k}
                onClick={() => setEventType(k)}
                className={`p-4 rounded-xl text-left border transition font-mono text-xs uppercase tracking-wider ${
                  eventType === k
                    ? 'bg-amber-500 text-black border-amber-400 font-bold shadow-lg shadow-amber-500/20'
                    : 'bg-[#1D090E] border-rose-950 text-rose-200/70 hover:bg-rose-950/40'
                }`}
              >
                {events[k].title.split(' ')[0]} {events[k].title.split(' ')[1]}
              </button>
            ))}
          </div>

          {/* Active Format Card */}
          <div className="p-8 sm:p-10 rounded-3xl bg-[#1C0A0D] border border-amber-500/30 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-7 space-y-4">
              <div className="inline-block px-3 py-1 rounded bg-amber-500/20 text-amber-300 font-mono text-xs uppercase tracking-wider">
                Вместимость: {selectedEvent.scale}
              </div>
              <h3 className="text-2xl sm:text-3xl font-bold font-serif text-white">{selectedEvent.title}</h3>
              <p className="text-rose-100/80 text-sm leading-relaxed">{selectedEvent.desc}</p>

              <div className="space-y-2 pt-2">
                <div className="text-xs font-mono uppercase tracking-wider text-amber-400">Включено в программу:</div>
                <ul className="space-y-1.5">
                  {selectedEvent.perks.map((p, idx) => (
                    <li key={idx} className="flex items-center gap-2 text-xs text-rose-100/90">
                      <Check className="w-4 h-4 text-amber-400 shrink-0" />
                      <span>{p}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="lg:col-span-5 p-6 rounded-2xl bg-black/40 border border-white/10 space-y-4 text-center">
              <div className="text-xs text-rose-200/70 font-mono uppercase tracking-wider">Персональная смета и дегустация</div>
              <div className="text-lg font-bold text-white">Индивидуальный расчет меню</div>
              <p className="text-xs text-rose-200/60">
                Составим раскладку блюд и забронируем дату с выездом шеф-распорядителя
              </p>
              <a
                href={waUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-3.5 rounded-xl bg-amber-500 hover:bg-amber-400 text-black font-bold text-xs uppercase tracking-wider transition flex items-center justify-center gap-2 shadow-lg shadow-amber-500/10"
              >
                <MessageSquare className="w-4 h-4" />
                <span>Запросить смету в WhatsApp</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-6 sm:px-12 border-t border-rose-950 bg-[#080204] text-xs text-rose-200/60 font-mono">
        <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-3">
            <Crown className="w-4 h-4 text-amber-400" />
            <span>ДВОРЕЦ ТОРЖЕСТВ «ХАН ОРДО» • г. Токмок, ул. Кыргызская, 61/1</span>
          </div>
          <div>Instagram: @khan_ordo_tokmok • Тел: +996 555 611 611</div>
        </div>
      </footer>
    </div>
  );
};
