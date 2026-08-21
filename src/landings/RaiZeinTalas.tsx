import React, { useState } from 'react';
import { Bed, Users, Calendar, Phone, MessageSquare, ArrowRight, Check, Coffee, FileText, MapPin, Wifi, Award } from 'lucide-react';

export const RaiZeinTalas: React.FC = () => {
  const [activeRoom, setActiveRoom] = useState<'comfort' | 'twin' | 'suite'>('comfort');

  const rooms = {
    comfort: {
      name: 'Comfort King Orchard View',
      badge: 'King Bed • 28 м²',
      desc: 'Светлый номер с видом на яблоневый сад и горы Таласа, ортопедический матрас, климат-контроль, рабочий стол и скоростной оптоволоконный Wi-Fi.',
      features: ['Домашний фермерский завтрак', 'Ортопедический матрас King', 'Чайная станция и мини-бар', 'Бесплатная парковка во дворе'],
    },
    twin: {
      name: 'Business Twin Room',
      badge: '2 раздельные кровати • 30 м²',
      desc: 'Идеально для коллег в служебных командировках: две удобные раздельные кровати, розетки у каждого спального места, сейф и эргономичное освещение.',
      features: ['Электронные счета-фактуры (ЭСФ)', '2 раздельные кровати', 'Услуги экспресс-прачечной', 'Тихий номер с шумоизоляцией'],
    },
    suite: {
      name: 'Executive Garden Suite',
      badge: '2 комнаты • 48 м²',
      desc: 'Просторный двухкомнатный люкс с отдельной гостиной, панорамным балконом, кофемашиной и персональной зоной отдыха для руководителей.',
      features: ['Отдельная гостиная зона', 'Панорамный балкон на сад', 'Утренний кофе и свежая выпечка в номер', 'Приоритетный трансфер по Таласской долине'],
    },
  };

  const selected = rooms[activeRoom];

  const waMessage = `Салам Алейкум, отель RaiZein в г. Талас! Хочу забронировать номер: ${selected.name}. Подскажите, пожалуйста, доступность на ближайшие даты и условия для командировочных с безналичной оплатой.`;
  const waUrl = `https://wa.me/996770123456?text=${encodeURIComponent(waMessage)}`;

  return (
    <div className="min-h-screen bg-[#0E120D] text-[#F3F6F1] font-sans selection:bg-lime-600 selection:text-white">
      {/* Top Bar */}
      <div className="bg-[#070906] text-lime-300 py-2.5 px-6 sm:px-12 text-xs flex items-center justify-between border-b border-lime-950 font-mono">
        <div className="flex items-center gap-3">
          <Bed className="w-4 h-4 text-lime-400" />
          <span className="tracking-wider uppercase">БУТИК-ОТЕЛЬ «RAIZEIN» • ТАЛАС • ДЕЛОВОЙ И ЭКО-СЕРВИС</span>
        </div>
        <div className="hidden sm:flex items-center gap-6 text-stone-300 font-sans text-xs">
          <span>ул. Бердике Баатыра</span>
          <a href="tel:+996770123456" className="text-lime-400 font-bold hover:underline font-mono">+996 770 123 456</a>
        </div>
      </div>

      {/* Hero Banner Section */}
      <section className="relative min-h-[85vh] flex items-end pb-16 px-6 sm:px-12 border-b border-lime-950 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src="/images/raizein.jpg"
            alt="RaiZein Guest House Talas"
            className="w-full h-full object-cover object-center brightness-[0.45] scale-105 transition duration-1000"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0E120D] via-[#0E120D]/60 to-transparent" />
          <div className="absolute inset-0 bg-radial-at-c from-transparent via-[#0E120D]/40 to-[#0E120D]" />
        </div>

        <div className="relative z-10 max-w-5xl mx-auto w-full space-y-6">
          <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-black/60 border border-lime-400/40 text-lime-300 text-xs font-mono backdrop-blur-md">
            <FileText className="w-3.5 h-3.5 text-lime-400" />
            <span className="uppercase tracking-widest">Лучший отель Таласа для командировок и эко-туризма</span>
          </div>

          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-bold tracking-tight font-serif text-white leading-[1.08]">
            Уютное гостеприимство среди цветущих яблоневых садов
          </h1>

          <p className="text-stone-300 text-base sm:text-xl font-light leading-relaxed max-w-3xl">
            Тихие комфортабельные номера с кондиционером, фермерские завтраки из натуральных продуктов, электронные счета для бухгалтерии и организация экскурсий в комплекс «Манас Ордо».
          </p>

          <div className="flex flex-wrap items-center gap-4 pt-4">
            <a
              href="#rooms"
              className="px-8 py-4 rounded-xl bg-lime-600 hover:bg-lime-500 text-white font-bold text-xs uppercase tracking-wider transition shadow-2xl shadow-lime-900/40 flex items-center gap-3"
            >
              <span>Выбрать номер</span>
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
              <div className="text-lime-400 font-bold text-lg">B2B ЭСФ</div>
              <div className="text-stone-400 uppercase text-[10px] tracking-wider">Счета для организаций</div>
            </div>
            <div>
              <div className="text-lime-400 font-bold text-lg">Bio Breakfast</div>
              <div className="text-stone-400 uppercase text-[10px] tracking-wider">Фермерский завтрак</div>
            </div>
            <div>
              <div className="text-lime-400 font-bold text-lg">Fiber Wi-Fi</div>
              <div className="text-stone-400 uppercase text-[10px] tracking-wider">Оптика для работы</div>
            </div>
            <div>
              <div className="text-lime-400 font-bold text-lg">Manas Ordo</div>
              <div className="text-stone-400 uppercase text-[10px] tracking-wider">15 мин до комплекса</div>
            </div>
          </div>
        </div>
      </section>

      {/* Story & Hospitality Manifesto */}
      <section className="py-24 px-6 sm:px-12 max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-6 space-y-6">
            <span className="text-xs font-mono uppercase tracking-[0.25em] text-lime-400 block">О бутик-отеле</span>
            <h2 className="text-3xl sm:text-4xl font-bold font-serif text-white leading-snug">
              Домашнее тепло и безупречные стандарты чистоты
            </h2>
            <p className="text-stone-300 leading-relaxed text-sm sm:text-base">
              «RaiZein» расположен в спокойном зеленом районе Таласа, вдали от шума трасс. Это идеальная локация для продуктивной работы в командировке или восстановления сил после горных прогулок по ущелью Беш-Таш.
            </p>
            <p className="text-stone-300 leading-relaxed text-sm sm:text-base">
              Мы готовим домашние горячие завтраки из свежих местных яиц, деревенского сливочного масла, меда и домашнего варенья из таласских яблок.
            </p>
          </div>

          <div className="lg:col-span-6 space-y-4">
            <div className="p-6 rounded-2xl bg-[#141A13] border border-lime-950 space-y-3">
              <div className="flex items-center gap-3">
                <FileText className="w-5 h-5 text-lime-400" />
                <h3 className="text-base font-bold text-white">Полный B2B сервис для компаний</h3>
              </div>
              <p className="text-xs text-stone-300 leading-relaxed">
                Оформляем официальные договоры, электронные счета-фактуры и фискальные чеки для командированных сотрудников любых организаций.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-[#141A13] border border-lime-950 space-y-3">
              <div className="flex items-center gap-3">
                <Coffee className="w-5 h-5 text-lime-400" />
                <h3 className="text-base font-bold text-white">Уютный сад и чайная веранда</h3>
              </div>
              <p className="text-xs text-stone-300 leading-relaxed">
                Закрытый внутренний дворик с деревянной беседкой и самоваром, где приятно провести вечер за чашкой чая с горными травами.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Room Selection Showcase */}
      <section id="rooms" className="py-20 px-6 sm:px-12 bg-[#0A0E0A] border-y border-lime-950">
        <div className="max-w-6xl mx-auto space-y-12">
          <div className="text-center max-w-2xl mx-auto space-y-3">
            <span className="text-xs font-mono uppercase tracking-[0.25em] text-lime-400 block">Номерной фонд</span>
            <h2 className="text-3xl sm:text-4xl font-bold font-serif text-white">Комфортные номера для отдыха и работы</h2>
            <p className="text-xs sm:text-sm text-stone-400">
              Выберите категорию для детального просмотра комплектации номера
            </p>
          </div>

          {/* Selector Tabs */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
            {(Object.keys(rooms) as Array<keyof typeof rooms>).map((k) => (
              <button
                key={k}
                onClick={() => setActiveRoom(k)}
                className={`p-4 rounded-xl text-left border transition font-mono text-xs uppercase tracking-wider ${
                  activeRoom === k
                    ? 'bg-lime-600 text-white border-lime-500 font-bold shadow-lg shadow-lime-900/40'
                    : 'bg-[#141A13] border-lime-950 text-stone-300 hover:bg-lime-950/40'
                }`}
              >
                {rooms[k].name}
              </button>
            ))}
          </div>

          {/* Active Room Card */}
          <div className="p-8 sm:p-10 rounded-3xl bg-[#141A13] border border-lime-500/30 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-7 space-y-4">
              <div className="inline-block px-3 py-1 rounded bg-lime-500/20 text-lime-300 font-mono text-xs uppercase tracking-wider">
                {selected.badge}
              </div>
              <h3 className="text-2xl sm:text-3xl font-bold font-serif text-white">{selected.name}</h3>
              <p className="text-stone-300 text-sm leading-relaxed">{selected.desc}</p>

              <div className="space-y-2 pt-2">
                <div className="text-xs font-mono uppercase tracking-wider text-lime-400">Включено в проживание:</div>
                <ul className="space-y-1.5">
                  {selected.features.map((f, idx) => (
                    <li key={idx} className="flex items-center gap-2 text-xs text-stone-200">
                      <Check className="w-4 h-4 text-lime-400 shrink-0" />
                      <span>{f}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="lg:col-span-5 p-6 rounded-2xl bg-black/40 border border-white/10 space-y-4 text-center">
              <div className="text-xs text-stone-400 font-mono uppercase tracking-wider">Прямое бронирование</div>
              <div className="text-lg font-bold text-white">Индивидуальный расчет дат</div>
              <p className="text-xs text-stone-400">
                Завтрак включен. Предоставляем трансфер и закрывающие документы
              </p>
              <a
                href={waUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-3.5 rounded-xl bg-lime-600 hover:bg-lime-500 text-white font-bold text-xs uppercase tracking-wider transition flex items-center justify-center gap-2 shadow-lg shadow-lime-900/30"
              >
                <MessageSquare className="w-4 h-4" />
                <span>Забронировать в WhatsApp</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-6 sm:px-12 border-t border-lime-950 bg-[#060805] text-xs text-stone-400 font-mono">
        <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-3">
            <Bed className="w-4 h-4 text-lime-400" />
            <span>БУТИК-ОТЕЛЬ «RAIZEIN» • г. Талас, ул. Бердике Баатыра</span>
          </div>
          <div>Тел: +996 770 123 456 • WhatsApp: +996 770 123 456</div>
        </div>
      </footer>
    </div>
  );
};

