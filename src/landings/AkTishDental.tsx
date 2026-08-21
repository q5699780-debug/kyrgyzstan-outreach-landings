import React, { useState } from 'react';
import { Sparkles, Shield, Check, Phone, MessageSquare, ArrowRight, HeartPulse, Clock, Smile, Award, Activity } from 'lucide-react';

export const AkTishDental: React.FC = () => {
  const [selectedService, setSelectedService] = useState<'braces' | 'aligners' | 'kids' | 'implants'>('braces');

  const services = {
    braces: {
      title: 'Эстетическая ортодонтия (Брекет-системы)',
      badge: 'Damon Q & Clear • США/Германия',
      desc: 'Самолигирующие керамические и сапфировые брекеты. Быстрое и бережное перемещение зубов с минимальным давлением и незаметным внешним видом.',
      features: ['Бесплатный 3D-снимок при установке', 'Контроль перемещения зубов каждый месяц', 'Рассрочка 0% без первого взноса', 'Детская и взрослая ортодонтия'],
    },
    aligners: {
      title: 'Прозрачные элайнеры (Каппы 3D)',
      badge: 'Цифровой сетап 3D • Невидимо',
      desc: 'Съемные прозрачные каппы, напечатанные по цифровому скану челюсти. Идеальное выравнивание зубов без ограничений в еде и спорте.',
      features: ['Визуализация результата До/После до старта', 'Полная невидимость на зубах при разговоре', 'Легкая гигиена и уход', 'Комплект капп на весь курс лечения'],
    },
    kids: {
      title: 'Бережная детская стоматология без слез',
      badge: 'Адаптационный прием • Мультфильмы',
      desc: 'Лечение молочных зубов под седацией (закись азота) и компьютерной анестезией STA без боли и уколов. Формируем здоровые привычки с детства.',
      features: ['Компьютерная анестезия без шприца', 'Подарки каждому маленькому пациенту', 'Игровая адаптация перед осмотром', 'Герметизация фиссур и фторирование'],
    },
    implants: {
      title: 'Круглосуточная хирургия & Имплантация',
      badge: '24/7 Дежурный хирург • Ош',
      desc: 'Экстренное снятие острой боли в любое время суток, удаление ретинированных зубов мудрости любой сложности и одномоментная имплантация.',
      features: ['Круглосуточный прием 24/7 без выходных', 'Оригинальные импланты с пожизненной гарантией', 'Собственная операционная со стерилизацией ISO', 'Сопровождение дежурного врача после вмешательства'],
    },
  };

  const current = services[selectedService];

  const waMessage = `Салам Алейкум, клиника «Ак Тиш» в Оше! Меня интересует направление: ${current.title}. Хочу записаться на бесплатную 3D-диагностику и консультацию к главному врачу.`;
  const waUrl = `https://wa.me/996777400900?text=${encodeURIComponent(waMessage)}`;

  return (
    <div className="min-h-screen bg-[#071313] text-[#EBF7F5] font-sans selection:bg-teal-500 selection:text-black">
      {/* Top Hotline Bar */}
      <div className="bg-[#030A0A] text-teal-300 py-2.5 px-6 sm:px-12 text-xs flex items-center justify-between border-b border-teal-950 font-mono">
        <div className="flex items-center gap-3">
          <Clock className="w-4 h-4 text-teal-400 animate-pulse" />
          <span className="tracking-wider uppercase">КЛИНИКА «АК ТИШ» 24/7 • ОШ, УЛ. МОНУЕВА, 70-72 • ЭКСТРЕННАЯ ПОМОЩЬ</span>
        </div>
        <div className="hidden sm:flex items-center gap-6 text-teal-200/70 font-sans text-xs">
          <span>Круглосуточный прием без выходных</span>
          <a href="tel:+996777400900" className="text-teal-400 font-bold hover:underline font-mono">+996 777 400 900</a>
        </div>
      </div>

      {/* Hero Banner Section */}
      <section className="relative min-h-[85vh] flex items-end pb-16 px-6 sm:px-12 border-b border-teal-950 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src="/images/ak-tish.jpg"
            alt="Стоматологический центр Ак Тиш Ош"
            className="w-full h-full object-cover object-center brightness-[0.45] scale-105 transition duration-1000"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#071313] via-[#071313]/60 to-transparent" />
          <div className="absolute inset-0 bg-radial-at-c from-transparent via-[#071313]/40 to-[#071313]" />
        </div>

        <div className="relative z-10 max-w-5xl mx-auto w-full space-y-6">
          <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-black/60 border border-teal-400/40 text-teal-300 text-xs font-mono backdrop-blur-md">
            <HeartPulse className="w-3.5 h-3.5 text-teal-400" />
            <span className="uppercase tracking-widest">Семейная цифровая стоматология 24/7 в г. Ош</span>
          </div>

          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-bold tracking-tight font-serif text-white leading-[1.08]">
            Здоровая и безупречная улыбка для всей семьи без боли
          </h1>

          <p className="text-teal-100/90 text-base sm:text-xl font-light leading-relaxed max-w-3xl">
            Компьютерная анестезия STA без укола, исправление прикуса брекетами и элайнерами в беспроцентную рассрочку, бережное детское лечение и круглосуточная хирургия.
          </p>

          <div className="flex flex-wrap items-center gap-4 pt-4">
            <a
              href="#services"
              className="px-8 py-4 rounded-xl bg-teal-500 hover:bg-teal-400 text-black font-bold text-xs uppercase tracking-wider transition shadow-2xl shadow-teal-500/20 flex items-center gap-3"
            >
              <span>Выбрать направление</span>
              <ArrowRight className="w-4 h-4" />
            </a>

            <a
              href={waUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-4 rounded-xl bg-black/60 hover:bg-white/10 text-white font-mono text-xs uppercase tracking-wider transition border border-white/20 backdrop-blur-md flex items-center gap-2"
            >
              <MessageSquare className="w-4 h-4 text-emerald-400" />
              <span>Записаться на 3D-осмотр (WhatsApp)</span>
            </a>
          </div>

          {/* Quick Specs */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-8 border-t border-white/10 font-mono text-xs">
            <div>
              <div className="text-teal-400 font-bold text-lg">24 / 7</div>
              <div className="text-teal-200/60 uppercase text-[10px] tracking-wider">Круглосуточный прием</div>
            </div>
            <div>
              <div className="text-teal-400 font-bold text-lg">STA Без боли</div>
              <div className="text-teal-200/60 uppercase text-[10px] tracking-wider">Компьютерная анестезия</div>
            </div>
            <div>
              <div className="text-teal-400 font-bold text-lg">0% Рассрочка</div>
              <div className="text-teal-200/60 uppercase text-[10px] tracking-wider">Брекеты без переплат</div>
            </div>
            <div>
              <div className="text-teal-400 font-bold text-lg">3D Scan</div>
              <div className="text-teal-200/60 uppercase text-[10px] tracking-wider">Цифровой сетап челюсти</div>
            </div>
          </div>
        </div>
      </section>

      {/* Story & Clinical Protocol */}
      <section className="py-24 px-6 sm:px-12 max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-6 space-y-6">
            <span className="text-xs font-mono uppercase tracking-[0.25em] text-teal-400 block">О стоматологическом центре</span>
            <h2 className="text-3xl sm:text-4xl font-bold font-serif text-white leading-snug">
              Европейские стандарты безболезненного лечения для взрослых и детей
            </h2>
            <p className="text-teal-100/80 leading-relaxed text-sm sm:text-base">
              Мы создали клинику «Ак Тиш» с одной целью — навсегда избавить жителей Оша от страха перед стоматологическим креслом. Применяем только сертифицированные биосовместимые материалы и передовую оптику.
            </p>
            <p className="text-teal-100/80 leading-relaxed text-sm sm:text-base">
              Для детей обустроена специальная адаптационная игровая зона: просмотр любимых мультфильмов прямо во время лечения и бережные врачи, прошедшие психологическую подготовку.
            </p>
          </div>

          <div className="lg:col-span-6 space-y-4">
            <div className="p-6 rounded-2xl bg-[#0F2222] border border-teal-900/60 space-y-3">
              <div className="flex items-center gap-3">
                <Shield className="w-5 h-5 text-teal-400" />
                <h3 className="text-base font-bold text-white">Компьютерная анестезия STA (США)</h3>
              </div>
              <p className="text-xs text-teal-200/70 leading-relaxed">
                Микропроцессорный контроль давления подачи анестетика. Обезболивается только нужный зуб без онемения щеки, губ и неприятных ощущений.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-[#0F2222] border border-teal-900/60 space-y-3">
              <div className="flex items-center gap-3">
                <Smile className="w-5 h-5 text-teal-400" />
                <h3 className="text-base font-bold text-white">Беспроцентная рассрочка на ортодонтию</h3>
              </div>
              <p className="text-xs text-teal-200/70 leading-relaxed">
                Выравнивайте прикус брекетами или каппами с комфортной помесячной оплатой без банковских переплат и первого взноса.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Services Showcase */}
      <section id="services" className="py-20 px-6 sm:px-12 bg-[#0A1B1B] border-y border-teal-950">
        <div className="max-w-6xl mx-auto space-y-12">
          <div className="text-center max-w-2xl mx-auto space-y-3">
            <span className="text-xs font-mono uppercase tracking-[0.25em] text-teal-400 block">Направления лечения</span>
            <h2 className="text-3xl sm:text-4xl font-bold font-serif text-white">Экспертная помощь по ключевым профилям</h2>
            <p className="text-xs sm:text-sm text-teal-200/70">
              Выберите услугу для ознакомления с протоколом лечения и оборудованием
            </p>
          </div>

          {/* Selector Tabs */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
            {(Object.keys(services) as Array<keyof typeof services>).map((k) => (
              <button
                key={k}
                onClick={() => setSelectedService(k)}
                className={`p-4 rounded-xl text-left border transition font-mono text-xs uppercase tracking-wider ${
                  selectedService === k
                    ? 'bg-teal-500 text-black border-teal-400 font-bold shadow-lg shadow-teal-500/20'
                    : 'bg-[#102929] border-teal-950 text-teal-200/70 hover:bg-teal-900/40'
                }`}
              >
                {services[k].title.split(' ')[0]} {services[k].title.split(' ')[1]}
              </button>
            ))}
          </div>

          {/* Active Card */}
          <div className="p-8 sm:p-10 rounded-3xl bg-[#0F2222] border border-teal-500/30 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-7 space-y-4">
              <div className="inline-block px-3 py-1 rounded bg-teal-500/20 text-teal-300 font-mono text-xs uppercase tracking-wider">
                {current.badge}
              </div>
              <h3 className="text-2xl sm:text-3xl font-bold font-serif text-white">{current.title}</h3>
              <p className="text-teal-100/80 text-sm leading-relaxed">{current.desc}</p>

              <div className="space-y-2 pt-2">
                <div className="text-xs font-mono uppercase tracking-wider text-teal-400">Преимущества:</div>
                <ul className="space-y-1.5">
                  {current.features.map((f, idx) => (
                    <li key={idx} className="flex items-center gap-2 text-xs text-teal-100/90">
                      <Check className="w-4 h-4 text-teal-400 shrink-0" />
                      <span>{f}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="lg:col-span-5 p-6 rounded-2xl bg-black/40 border border-white/10 space-y-4 text-center">
              <div className="text-xs text-teal-200/70 font-mono uppercase tracking-wider">Диагностика и план лечения</div>
              <div className="text-lg font-bold text-white">Бесплатный 3D-осмотр</div>
              <p className="text-xs text-teal-200/60">
                Составим детальный клинический план и зафиксируем удобный график рассрочки
              </p>
              <a
                href={waUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-3.5 rounded-xl bg-teal-500 hover:bg-teal-400 text-black font-bold text-xs uppercase tracking-wider transition flex items-center justify-center gap-2 shadow-lg shadow-teal-500/10"
              >
                <MessageSquare className="w-4 h-4" />
                <span>Записаться в WhatsApp</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-6 sm:px-12 border-t border-teal-950 bg-[#030A0A] text-xs text-teal-200/60 font-mono">
        <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-3">
            <HeartPulse className="w-4 h-4 text-teal-400" />
            <span>СТОМАТОЛОГИЧЕСКИЙ ЦЕНТР «АК ТИШ» 24/7 • г. Ош, ул. Монуева, 70-72</span>
          </div>
          <div>Тел: +996 777 400 900 • Instagram: @aktish_osh</div>
        </div>
      </footer>
    </div>
  );
};

