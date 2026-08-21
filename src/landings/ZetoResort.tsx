import React from 'react';
import { Waves, Check, Phone, MessageSquare, ArrowRight, MapPin, Globe, Sun, ShieldCheck, Calendar, Users, Coffee } from 'lucide-react';
import { ZetoLogo } from '../components/BrandLogos';

export const ZetoResort: React.FC = () => {
  const villaOptions = [
    {
      name: 'Вилла «First Line Panoramic»: 30 м от озера',
      badge: 'Премиум на берегу',
      desc: 'Двухэтажный коттедж из бруса с панорамными окнами на лазурный залив Иссык-Куля, собственной террасой, шезлонгами и зоной барбекю.',
      features: ['Прямой выход на закрытый песчаный пляж', '3 спальни, кухня-гостиная с посудомоечной машиной', 'Мангальная зона с набором для гриля', 'Бесплатный скоростной Wi-Fi на всей территории'],
      tag: 'До 6–8 гостей',
    },
    {
      name: 'Коттедж «Pine Standard Villa»: В тени сосен',
      badge: 'Семейный уют',
      desc: 'Уютная деревянная вилла в сосновой роще в 100 метрах от берега. Идеально для спокойного семейного отдыха с детьми.',
      features: ['2 изолированные спальни и гостиная', 'Оборудованная кухня с холодильником и плитой', 'Детская площадка прямо рядом с коттеджем', 'Тишина и целебный хвойный воздух'],
      tag: 'До 4 гостей',
    },
    {
      name: 'VIP-Резиденция «Grand Zeto»: Двухсемейный дом',
      badge: 'Простор и комфорт',
      desc: 'Большой двухэтажный особняк с 4 спальнями, камином, персональной сауной и просторной верандой для больших компаний.',
      features: ['Собственная финская сауна внутри виллы', 'Дровяной камин в каминном зале', 'Большой обеденный стол на 12 персон', 'Приватный огороженный зеленый дворик'],
      tag: 'До 10–12 гостей',
    },
    {
      name: 'Аренда коттеджа на месяц / Сезонное проживание',
      badge: 'Длительный отдых',
      desc: 'Специальные условия долгосрочной аренды для удаленной работы и отдыха на свежем воздухе Иссык-Куля на все лето.',
      features: ['Уборка и смена белья каждые 3 дня', 'Охраняемая закрытая парковка', 'Выделенный оптический интернет для работы', 'Скидка на длительный заезд'],
      tag: 'От 14 дней и на все лето',
    },
  ];

  const waMessage = `Здравствуйте, коттеджи Зето в Чолпон-Ате! Хотим забронировать виллу на сезон 2026. Подскажите, пожалуйста, наличие свободных дат и условия!`;
  const waUrl = `https://wa.me/996700500440?text=${encodeURIComponent(waMessage)}`;

  return (
    <div className="min-h-screen bg-[#F0F9FF] text-slate-900 font-sans selection:bg-cyan-600 selection:text-white">
      {/* Top Header */}
      <header className="border-b border-cyan-800/40 bg-[#072F4A] px-6 py-2.5 text-xs text-cyan-200 font-sans">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-3">
            <Waves className="w-4 h-4 text-cyan-400" />
            <span>КОТТЕДЖНЫЙ КОМПЛЕКС «ЗЕТО» • г. Чолпон-Ата, Северный берег Иссык-Куля</span>
          </div>
          <div className="hidden sm:flex items-center gap-6 text-cyan-100">
            <span>Бронирование на лето 2026 открыто • 1-я береговая линия</span>
            <a href="tel:+996700500440" className="text-cyan-300 font-bold hover:underline">+996 700 500 440</a>
          </div>
        </div>
      </header>

      {/* Nav */}
      <nav className="sticky top-11 z-40 border-b border-cyan-100 bg-white/95 backdrop-blur px-6 py-4">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-3">
            <ZetoLogo className="h-10 w-auto" />
          </div>

          <div className="hidden md:flex items-center gap-8 text-xs font-mono uppercase tracking-wider text-slate-600">
            <a href="#about" className="hover:text-cyan-700 transition">О комплексе</a>
            <a href="#villas" className="hover:text-cyan-700 transition">Варианты вилл</a>
            <a href="#beach" className="hover:text-cyan-700 transition">Пляж и территория</a>
            <a href="#contact" className="hover:text-cyan-700 transition">Контакты</a>
          </div>

          <a
            href={waUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="px-5 py-2.5 rounded-full bg-cyan-600 hover:bg-cyan-700 text-white font-bold text-xs transition flex items-center gap-2 shadow-md shadow-cyan-950/20"
          >
            <MessageSquare className="w-3.5 h-3.5" />
            <span>Забронировать виллу</span>
          </a>
        </div>
      </nav>

      {/* Full-Bleed Hero Banner */}
      <section className="relative min-h-[580px] flex items-center border-b border-cyan-100 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src="/images/zeto.jpg"
            alt="Zeto Resort Cholpon-Ata"
            className="w-full h-full object-cover object-center brightness-[0.5] scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#031C2D] via-[#031C2D]/80 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#F0F9FF] via-transparent to-transparent" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-6 py-20 w-full">
          <div className="max-w-2xl space-y-6 text-white">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-cyan-400/40 bg-cyan-400/10 text-cyan-300 text-xs font-mono">
              <Sun className="w-3.5 h-3.5" />
              <span>Северный берег Иссык-Куля • 30 метров до кромки воды</span>
            </div>

            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-bold tracking-tight leading-[1.12]">
              Твой идеальный дом на лазурном побережье Иссык-Куля
            </h1>

            <p className="text-cyan-100/90 text-base sm:text-lg leading-relaxed">
              Уютные двухэтажные деревянные виллы на самом берегу в Чолпон-Ате. Чистейшая прозрачная вода, собственный песчаный пляж, реликтовые сосны и тихий семейный отдых без посредников.
            </p>

            <div className="flex flex-col sm:flex-row gap-3 pt-2 font-sans text-xs">
              <a
                href="#contact"
                className="px-7 py-4 rounded-full bg-cyan-500 hover:bg-cyan-400 text-black font-bold flex items-center justify-center gap-2 shadow-lg"
              >
                <span>Узнать свободные даты в WhatsApp</span>
                <ArrowRight className="w-4 h-4" />
              </a>
              <a
                href="#villas"
                className="px-7 py-4 rounded-full border border-white/30 bg-black/50 hover:bg-black/80 text-white font-medium flex items-center justify-center"
              >
                <span>Смотреть варианты вилл</span>
              </a>
            </div>

            <div className="grid grid-cols-3 gap-6 pt-6 border-t border-white/20 font-mono text-xs text-cyan-200">
              <div>
                <div className="text-2xl font-bold text-cyan-300">30 м</div>
                <div className="text-cyan-100/70 text-[11px] font-sans mt-0.5">До кромки воды</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-cyan-300">22°C</div>
                <div className="text-cyan-100/70 text-[11px] font-sans mt-0.5">Температура озера</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-cyan-300">24/7</div>
                <div className="text-cyan-100/70 text-[11px] font-sans mt-0.5">Закрытая охрана</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-6 max-w-7xl mx-auto border-b border-cyan-100">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-6 space-y-6">
            <span className="text-xs font-mono font-bold text-cyan-700 uppercase tracking-wider block">О коттеджном городке Zeto</span>
            <h2 className="text-2xl sm:text-4xl font-bold text-slate-900">
              Приватный курорт для семейного отдыха на первой линии
            </h2>
            <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
              Комплекс <strong>Zeto Resort</strong> расположен в тихой бухте города Чолпон-Ата. Все коттеджи построены из экологичного соснового бруса и полностью укомплектованы для комфортного проживания: современная кухня, скоростной интернет и персональная терраса.
            </p>
            <p className="text-slate-600 text-sm leading-relaxed">
              На территории есть собственный песчаный пляж с пирсом, шезлонгами и зонтами, детская игровая площадка и закрытая круглосуточная охрана с видеонаблюдением.
            </p>

            <div className="grid grid-cols-2 gap-4 pt-2 text-xs">
              <div className="p-4 rounded-xl border border-cyan-100 bg-white shadow-sm">
                <div className="font-bold text-slate-900 text-sm mb-1">Свой пляж</div>
                <p className="text-slate-500 text-[11px]">Чистый кварцевый песок, пологий вход в воду и пирс для купания.</p>
              </div>
              <div className="p-4 rounded-xl border border-cyan-100 bg-white shadow-sm">
                <div className="font-bold text-slate-900 text-sm mb-1">Без комиссий</div>
                <p className="text-slate-500 text-[11px]">Прямое бронирование от собственника с гарантией заселения.</p>
              </div>
            </div>
          </div>

          <div className="lg:col-span-6">
            <div className="rounded-2xl overflow-hidden border border-cyan-200 bg-white p-2 shadow-xl">
              <img
                src="/images/zeto.jpg"
                alt="Коттедж Zeto Resort на берегу озера"
                className="w-full h-auto object-cover rounded-xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Villas Showcase */}
      <section id="villas" className="py-20 px-6 max-w-7xl mx-auto border-b border-cyan-100 space-y-12">
        <div className="max-w-2xl space-y-2">
          <span className="text-xs font-mono font-bold text-cyan-700 uppercase tracking-wider block">Планировки и категории вилл</span>
          <h2 className="text-2xl sm:text-3xl font-bold text-slate-900">
            Выберите ваш дом на Иссык-Куле
          </h2>
          <p className="text-slate-500 text-sm">
            Все коттеджи оборудованы собственной кухней, санузлом с горячей водой 24/7 и зоной барбекю.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {villaOptions.map((villa, idx) => (
            <div
              key={idx}
              className="rounded-2xl border border-cyan-100 bg-white p-6 hover:border-cyan-300 transition flex flex-col justify-between space-y-6 shadow-md"
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="px-3 py-1 rounded-full bg-cyan-100 text-cyan-900 text-xs font-mono font-bold">
                    {villa.badge}
                  </span>
                  <span className="text-xs font-mono text-slate-500">{villa.tag}</span>
                </div>

                <div>
                  <h3 className="text-lg font-bold text-slate-900">{villa.name}</h3>
                  <p className="text-xs text-slate-600 leading-relaxed mt-2">{villa.desc}</p>
                </div>

                <ul className="space-y-2 text-xs text-slate-700 border-t border-slate-100 pt-4">
                  {villa.features.map((f, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <Check className="w-3.5 h-3.5 text-cyan-600 shrink-0 mt-0.5" />
                      <span>{f}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="pt-4 border-t border-slate-100 flex items-center justify-between">
                <span className="text-xs font-mono text-slate-500">Прямой расчет от администрации</span>
                <a
                  href={`https://wa.me/996700500440?text=${encodeURIComponent(`Здравствуйте! Хотим узнать свободные даты и условия по вилле: «${villa.name}».`)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2 rounded-full bg-cyan-600 hover:bg-cyan-700 text-white text-xs font-bold transition flex items-center gap-1.5"
                >
                  <span>Запросить бронь</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Direct Contact Section */}
      <section id="contact" className="py-20 px-6 max-w-7xl mx-auto">
        <div className="rounded-3xl border border-cyan-800/40 bg-[#072F4A] p-8 sm:p-12 text-white">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-7 space-y-6">
              <span className="text-xs font-mono text-cyan-300 uppercase tracking-wider block">Бронирование без наценок</span>
              <h2 className="text-3xl sm:text-4xl font-bold">
                Забронируйте коттедж на берегу Иссык-Куля
              </h2>
              <p className="text-cyan-100/80 text-sm leading-relaxed">
                Свяжитесь с управляющим в WhatsApp — мы вышлем видеообзоры свободных коттеджей, зафиксируем выбранные даты и встретим вас на въезде в комплекс.
              </p>

              <div className="space-y-3 text-xs font-mono">
                <div className="flex items-center gap-3 text-cyan-100">
                  <MapPin className="w-4 h-4 text-cyan-400 shrink-0" />
                  <span>Иссык-Куль, г. Чолпон-Ата (район пляжа «Золотые Пески»)</span>
                </div>
                <div className="flex items-center gap-3 text-cyan-100">
                  <Phone className="w-4 h-4 text-cyan-400 shrink-0" />
                  <a href="tel:+996700500440" className="hover:underline font-bold text-cyan-300">+996 700 500 440</a>
                </div>
                <div className="flex items-center gap-3 text-cyan-100">
                  <Globe className="w-4 h-4 text-cyan-400 shrink-0" />
                  <span>Instagram: @zeto_issyk_kul</span>
                </div>
              </div>
            </div>

            <div className="lg:col-span-5 p-6 rounded-2xl border border-cyan-700/50 bg-[#0B4063] space-y-4">
              <div className="text-sm font-bold text-cyan-200">Связь с администратором в WhatsApp</div>
              <p className="text-xs text-cyan-100/70">
                Нажмите для прямого бронирования без комиссий:
              </p>
              <a
                href={waUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-4 rounded-full bg-cyan-400 hover:bg-cyan-300 text-black font-bold text-xs transition flex items-center justify-center gap-2 shadow-lg"
              >
                <MessageSquare className="w-4 h-4" />
                <span>Написать в WhatsApp</span>
              </a>
              <a
                href="tel:+996700500440"
                className="w-full py-3 rounded-full border border-cyan-400/40 text-cyan-100 hover:bg-[#0E4F7A] text-xs transition flex items-center justify-center gap-2"
              >
                <Phone className="w-3.5 h-3.5" />
                <span>Позвонить в администрацию</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-cyan-200 bg-white py-8 px-6 text-xs text-slate-500">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
          <div>
            <strong>ZETO RESORT CHOLPON-ATA</strong> • Северный берег Иссык-Куля • +996 700 500 440
          </div>
          <div>Instagram: @zeto_issyk_kul • Все права защищены</div>
        </div>
      </footer>
    </div>
  );
};
