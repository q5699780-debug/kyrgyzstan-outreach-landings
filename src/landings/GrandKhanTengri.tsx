import React, { useState } from 'react';
import { Award, Users, Calendar, Phone, MessageSquare, ArrowRight, Check, MapPin, Coffee, Wifi, Shield, ChevronRight } from 'lucide-react';

export const GrandKhanTengri: React.FC = () => {
  const [activeSuite, setActiveSuite] = useState<'deluxe' | 'suite' | 'presidential'>('deluxe');

  const suites = {
    deluxe: {
      name: 'Deluxe Mountain View',
      badge: 'King Bed • 32 м²',
      desc: 'Панорамный вид на скалистые хребты Тянь-Шаня, ортопедический матрас King Koil, кофемашина Nespresso, меню подушек и климат-контроль.',
      features: ['Завтрак «Шведский стол» включен', 'Высокоскоростной Wi-Fi', 'Рабочая зона для ноутбука', 'Ванная комната с подогревом пола'],
    },
    suite: {
      name: 'Executive Business Suite',
      badge: '2 комнаты • 55 м²',
      desc: 'Представительские двухкомнатные апартаменты с отдельной переговорной гостиной для закрытых деловых встреч и официальных делегаций.',
      features: ['VIP-завтрак в номер', 'Мини-бар и премиальный чайный сет', 'Приоритетный трансфер до перевала Торугарт', 'Услуги персонального консьержа 24/7'],
    },
    presidential: {
      name: 'Presidential Khan Suite',
      badge: 'Presidential • 95 м²',
      desc: 'Флагманский номер с камином из натурального нарынского камня, панорамной террасой, собственной финской сауной и обеденным залом на 8 персон.',
      features: ['Индивидуальная финская сауна', 'Дровяной камин в гостиной', 'Личный шеф-повар по запросу', 'Круглосуточная охрана и закрытый этаж'],
    },
  };

  const current = suites[activeSuite];

  const waMessage = `Здравствуйте, отель Grand Khan Tengri в г. Нарын! Меня интересует бронирование номера: ${current.name}. Хочу уточнить доступность дат, условия раннего заезда и трансфера из Бишкека/Торугарта.`;
  const waUrl = `https://wa.me/996352250940?text=${encodeURIComponent(waMessage)}`;

  return (
    <div className="min-h-screen bg-[#050B18] text-[#EDF2F7] font-sans selection:bg-amber-400 selection:text-black">
      {/* Top Bar */}
      <div className="bg-[#03060E] text-amber-300 py-2.5 px-6 sm:px-12 text-xs flex items-center justify-between border-b border-slate-800/80 font-mono">
        <div className="flex items-center gap-3">
          <Award className="w-4 h-4 text-amber-400" />
          <span className="tracking-wider uppercase">GRAND KHAN TENGRI HOTEL 4★ • НАРЫН • 2 040 М НАД УРОВНЕМ МОРЯ</span>
        </div>
        <div className="hidden sm:flex items-center gap-6 text-slate-400 font-sans text-xs">
          <span>ул. Ленина, 128</span>
          <a href="tel:+996352250940" className="text-amber-400 font-bold hover:underline font-mono">+996 3522 50940</a>
        </div>
      </div>

      {/* Hero Banner Section */}
      <section className="relative min-h-[85vh] flex items-end pb-16 px-6 sm:px-12 border-b border-slate-800 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src="/images/khan-tengri.jpg"
            alt="Grand Khan Tengri Hotel Naryn"
            className="w-full h-full object-cover object-center brightness-[0.45] scale-105 transition duration-1000"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#050B18] via-[#050B18]/60 to-transparent" />
          <div className="absolute inset-0 bg-radial-at-c from-transparent via-[#050B18]/40 to-[#050B18]" />
        </div>

        <div className="relative z-10 max-w-5xl mx-auto w-full space-y-6">
          <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-black/60 border border-amber-400/40 text-amber-300 text-xs font-mono backdrop-blur-md">
            <Award className="w-3.5 h-3.5 text-amber-400" />
            <span className="uppercase tracking-widest">Европейский 4-звездочный комфорт в сердце Тянь-Шаня</span>
          </div>

          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-bold tracking-tight font-serif text-white leading-[1.08]">
            Главная резиденция для деловых миссий и экспедиций в Нарыне
          </h1>

          <p className="text-slate-300 text-base sm:text-xl font-light leading-relaxed max-w-3xl">
            Безупречный сервис международного уровня, авторский ресторан горной кухни, конференц-центр MICE и базовый лагерь для поездок к озеру Сон-Куль и караван-сараю Таш-Рабат.
          </p>

          <div className="flex flex-wrap items-center gap-4 pt-4">
            <a
              href="#suites"
              className="px-8 py-4 rounded-xl bg-amber-400 hover:bg-amber-300 text-black font-bold text-xs uppercase tracking-wider transition shadow-2xl shadow-amber-400/20 flex items-center gap-3"
            >
              <span>Выбрать категорию номера</span>
              <ArrowRight className="w-4 h-4" />
            </a>

            <a
              href={waUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-4 rounded-xl bg-black/60 hover:bg-white/10 text-white font-mono text-xs uppercase tracking-wider transition border border-white/20 backdrop-blur-md flex items-center gap-2"
            >
              <MessageSquare className="w-4 h-4 text-emerald-400" />
              <span>Служба бронирования (WhatsApp)</span>
            </a>
          </div>

          {/* Quick Specs */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-8 border-t border-white/10 font-mono text-xs">
            <div>
              <div className="text-amber-400 font-bold text-lg">2,040 м</div>
              <div className="text-slate-400 uppercase text-[10px] tracking-wider">Высота над морем</div>
            </div>
            <div>
              <div className="text-amber-400 font-bold text-lg">King Koil</div>
              <div className="text-slate-400 uppercase text-[10px] tracking-wider">Ортопедические кровати</div>
            </div>
            <div>
              <div className="text-amber-400 font-bold text-lg">MICE 60</div>
              <div className="text-slate-400 uppercase text-[10px] tracking-wider">Конференц-зал с переводом</div>
            </div>
            <div>
              <div className="text-amber-400 font-bold text-lg">4x4 Garage</div>
              <div className="text-slate-400 uppercase text-[10px] tracking-wider">Теплый охраняемый бокс</div>
            </div>
          </div>
        </div>
      </section>

      {/* Story & Hotel Infrastructure */}
      <section className="py-24 px-6 sm:px-12 max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-6 space-y-6">
            <span className="text-xs font-mono uppercase tracking-[0.25em] text-amber-400 block">О гостиничном комплексе</span>
            <h2 className="text-3xl sm:text-4xl font-bold font-serif text-white leading-snug">
              Оазис европейского уюта перед высокогорными перевалами
            </h2>
            <p className="text-slate-300 leading-relaxed text-sm sm:text-base">
              Отель «Grand Khan Tengri» — ключевой центр размещения международных миссий ООН, делегаций посольств и туристических групп, следующих по Великому Шелковому Пути в Китай через перевал Торугарт.
            </p>
            <p className="text-slate-300 leading-relaxed text-sm sm:text-base">
              В каждом номере предусмотрено автономное отопление, фильтрация горной воды, высокоскоростной интернет и ресторан с авторскими блюдами из экологически чистого мяса нарынских пастбищ.
            </p>
          </div>

          <div className="lg:col-span-6 space-y-4">
            <div className="p-6 rounded-2xl bg-[#0B152B] border border-slate-800 space-y-3">
              <div className="flex items-center gap-3">
                <Users className="w-5 h-5 text-amber-400" />
                <h3 className="text-base font-bold text-white">MICE Конференц-зал и B2B сервис</h3>
              </div>
              <p className="text-xs text-slate-400 leading-relaxed">
                Просторный звукоизолированный зал на 60 участников с 4K проектором, синхронным переводом, кофе-брейками и официальным выставлением счетов для юридических лиц.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-[#0B152B] border border-slate-800 space-y-3">
              <div className="flex items-center gap-3">
                <Coffee className="w-5 h-5 text-amber-400" />
                <h3 className="text-base font-bold text-white">Ресторан высокой нарынской кухни</h3>
              </div>
              <p className="text-xs text-slate-400 leading-relaxed">
                Завтраки шведский стол с натуральным горным медом, каймаком, домашней выпечкой и вечерняя подача нежнейшего каре ягненка на углях.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Room Category Showcase */}
      <section id="suites" className="py-20 px-6 sm:px-12 bg-[#081022] border-y border-slate-800">
        <div className="max-w-6xl mx-auto space-y-12">
          <div className="text-center max-w-2xl mx-auto space-y-3">
            <span className="text-xs font-mono uppercase tracking-[0.25em] text-amber-400 block">Номерной фонд</span>
            <h2 className="text-3xl sm:text-4xl font-bold font-serif text-white">Категории номеров и люксов</h2>
            <p className="text-xs sm:text-sm text-slate-400">
              Выберите интересующую категорию апартаментов для детального ознакомления с комплектацией
            </p>
          </div>

          {/* Suite Selector Tabs */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
            {(Object.keys(suites) as Array<keyof typeof suites>).map((k) => (
              <button
                key={k}
                onClick={() => setActiveSuite(k)}
                className={`p-4 rounded-xl text-left border transition font-mono text-xs uppercase tracking-wider ${
                  activeSuite === k
                    ? 'bg-amber-400 text-black border-amber-300 font-bold shadow-lg shadow-amber-400/20'
                    : 'bg-[#0B152B] border-slate-800 text-slate-400 hover:bg-slate-800/60'
                }`}
              >
                {suites[k].name}
              </button>
            ))}
          </div>

          {/* Active Suite Card */}
          <div className="p-8 sm:p-10 rounded-3xl bg-[#0B152B] border border-amber-400/30 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-7 space-y-4">
              <div className="inline-block px-3 py-1 rounded bg-amber-400/20 text-amber-300 font-mono text-xs uppercase tracking-wider">
                {current.badge}
              </div>
              <h3 className="text-2xl sm:text-3xl font-bold font-serif text-white">{current.name}</h3>
              <p className="text-slate-300 text-sm leading-relaxed">{current.desc}</p>

              <div className="space-y-2 pt-2">
                <div className="text-xs font-mono uppercase tracking-wider text-amber-400">Включенные опции:</div>
                <ul className="space-y-1.5">
                  {current.features.map((f, idx) => (
                    <li key={idx} className="flex items-center gap-2 text-xs text-slate-200">
                      <Check className="w-4 h-4 text-amber-400 shrink-0" />
                      <span>{f}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="lg:col-span-5 p-6 rounded-2xl bg-black/40 border border-white/10 space-y-4 text-center">
              <div className="text-xs text-slate-400 font-mono uppercase tracking-wider">Прямое бронирование без посредников</div>
              <div className="text-lg font-bold text-white">Индивидуальный расчет дат</div>
              <p className="text-xs text-slate-400">
                Гарантия лучшей цены напрямую от службы приема и размещения отеля
              </p>
              <a
                href={waUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-3.5 rounded-xl bg-amber-400 hover:bg-amber-300 text-black font-bold text-xs uppercase tracking-wider transition flex items-center justify-center gap-2 shadow-lg shadow-amber-400/10"
              >
                <MessageSquare className="w-4 h-4" />
                <span>Забронировать в WhatsApp</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-6 border-t border-slate-800 bg-[#070D1D] text-xs text-slate-400">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
          <div>
            <strong>Grand Khan Tengri Hotel</strong> • г. Нарын, ул. Ленина • Тел: +996 3522 50940
          </div>
          <div>Instagram: @grandkhantengri</div>
        </div>
      </footer>
    </div>
  );
};
