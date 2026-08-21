import React, { useState } from 'react';
import { ShieldCheck, Check, Phone, MessageSquare, ArrowRight, Sparkles, MapPin, Clock, Globe, Layers, Wrench, Shield, Car, Award, ChevronRight } from 'lucide-react';
import { RedcarLogo } from '../components/BrandLogos';

export const RedcarDetailing: React.FC = () => {
  const [activeTab, setActiveTab] = useState<number>(0);

  const signatureWorks = [
    {
      title: 'Lexus LX 600 VIP Edition',
      service: 'Полная капсуляция в матовый полиуретан SunMax 220 µm',
      location: 'Студия Ош • Бокс #1',
      details: 'Оклейка всех элементов с разбором и подворотом, защита фар, бронирование лобового стекла ClearPlex, керамика кожи сапфировым гидрофобом.',
    },
    {
      title: 'Toyota Land Cruiser 300 GR Sport',
      service: 'Антигравийный комплекс «Front Armor Pro»',
      location: 'Студия Ош • Бокс #2',
      details: 'Глянцевый самозатягивающийся полиуретан Stek DynoShield на весь передок, расширители арок, зеркала и стойки перед горными перевалами.',
    },
    {
      title: 'Li Auto L9 Ultra Luxury',
      service: 'Керамическое кварцевое покрытие 9H + Салон',
      location: 'Студия Ош • Детейлинг-зона',
      details: 'Глубокая восстановительная полировка лака Rupes Bigfoot, 4 слоя Ceramic Pro 9H, защита сенсорных дисплеев матовой нанопленкой.',
    },
  ];

  const services = [
    {
      num: '01',
      title: 'Total Armor Package',
      subtitle: 'Полная капсуляция кузова в полиуретан 220 µm',
      desc: 'Премиальный защитный комплекс для новых автомобилей. 100% окрашенных поверхностей, пороги, оптика и внутренние дверные проемы защищаются оригинальным оптическим полиуретаном с технологией самозатягивания царапин при нагреве.',
      specs: ['Толщина брони 220 микрон', 'Бесшовный подворот краев деталей', 'Оригинальные пленки SunMax / Stek', 'Юридический гарантийный талон на 7 лет'],
      tag: 'Флагманский уровень',
    },
    {
      num: '02',
      title: 'High-Impact Front Shield',
      subtitle: 'Бронирование зон повышенного риска',
      desc: 'Надежная защита передней полусферы автомобиля от гравийной бомбардировки на трассах Ош — Бишкек и горных серпантинах. Капот оклеивается единым цельным полотном без стыков.',
      specs: ['Капот целиком + бампер + крылья', 'Защита фар от помутнения и пескоструя', 'Корпуса зеркал, стойки и полоса на крышу', 'Срок выполнения 1–2 рабочих дня'],
      tag: 'Самый востребованный',
    },
    {
      num: '03',
      title: 'Multi-Stage Polish & 9H Ceramic',
      subtitle: 'Глубокая восстановительная полировка и нанокерамика',
      desc: 'Ювелирное устранение до 98% рисок, паутинки и голограмм на темных лаках итальянскими эксцентриковыми машинками Rupes с последующей консервацией твердой нанокерамикой 9H.',
      specs: ['3 этапа полировки пастами Koch Chemie', 'Экстремальный гидрофобный угол >115°', 'Глубокий эффект «мокрого зеркала»', 'Защита от агрессивных дорожных реагентов'],
      tag: 'Эстетика и глянец',
    },
    {
      num: '04',
      title: 'ClearPlex Windshield & Interior Care',
      subtitle: 'Броня лобового стекла и консервация интерьера',
      desc: 'Защита дорогостоящих стекол с проекцией HUD от сколов и трещин ударопрочной пленкой ClearPlex, а также детейлинг-химчистка и консервация кожи кресел кремами с пчелиным воском.',
      specs: ['100% оптическая прозрачность стекла', 'Броня экранов медиасистемы', 'Защита натуральной кожи от заломов', 'Антибактериальная озонация салона'],
      tag: 'Комплексный уход',
    },
  ];

  const waMessage = `Салам Алейкум, Redcar Detailing Osh! Хочу получить VIP-консультацию и забронировать бокс на бронирование автомобиля. Сориентируйте по свободным датам.`;
  const waUrl = `https://wa.me/996555120044?text=${encodeURIComponent(waMessage)}`;

  return (
    <div className="min-h-screen bg-[#05070A] text-[#ECEFF4] font-sans selection:bg-[#E59B24] selection:text-black">
      {/* Top Architectural Ticker */}
      <div className="border-b border-white/[0.06] bg-[#020305] px-8 py-2.5 text-[11px] font-mono tracking-widest text-[#7E889B] flex items-center justify-between">
        <div className="flex items-center gap-4">
          <span className="inline-block w-1.5 h-1.5 rounded-full bg-[#E59B24] animate-pulse"></span>
          <span className="uppercase text-slate-300">REDCAR PRIVATE DETAILING STUDIO • OSH, KYRGYZSTAN</span>
          <span className="hidden md:inline text-white/20">/</span>
          <span className="hidden md:inline text-white/40">CERTIFIED APPLICATOR: SUNMAX & STEK AUTOMOTIVE</span>
        </div>
        <div className="hidden sm:flex items-center gap-8">
          <span>CLEAN ROOM ISO 7</span>
          <a href="tel:+996555120044" className="text-[#E59B24] font-bold hover:underline tracking-normal font-sans">+996 555 120 044</a>
        </div>
      </div>

      {/* Luxury Navbar */}
      <nav className="sticky top-11 z-40 border-b border-white/[0.08] bg-[#05070A]/90 backdrop-blur-xl px-8 py-5">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-4">
            <RedcarLogo className="h-9 w-auto" />
          </div>

          <div className="hidden lg:flex items-center gap-10 text-[11px] font-mono uppercase tracking-[0.2em] text-[#8C96A8]">
            <a href="#about" className="hover:text-white transition duration-200">О студии</a>
            <a href="#signature" className="hover:text-white transition duration-200">Проекты</a>
            <a href="#services" className="hover:text-white transition duration-200">Комплексы защиты</a>
            <a href="#technology" className="hover:text-white transition duration-200">Регламент</a>
            <a href="#concierge" className="hover:text-[#E59B24] transition duration-200">VIP Консьерж</a>
          </div>

          <a
            href={waUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-2.5 rounded border border-[#E59B24]/40 bg-[#E59B24]/10 hover:bg-[#E59B24] text-[#E59B24] hover:text-black font-mono font-bold text-xs uppercase tracking-wider transition-all duration-300 flex items-center gap-2 shadow-lg shadow-[#E59B24]/5"
          >
            <MessageSquare className="w-3.5 h-3.5" />
            <span>Забронировать бокс</span>
          </a>
        </div>
      </nav>

      {/* Hero: Ultra-Luxury Editorial Banner */}
      <section className="relative min-h-[85vh] flex items-center border-b border-white/[0.08] overflow-hidden">
        {/* Full-Bleed Atmospheric Background */}
        <div className="absolute inset-0 z-0">
          <img
            src="/images/redcar.jpg"
            alt="Redcar Detailing Studio Osh - Lexus LX 600 Protection"
            className="w-full h-full object-cover object-center brightness-[0.38] scale-100 filter contrast-110"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#05070A] via-[#05070A]/85 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#05070A] via-transparent to-transparent" />
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-[#E59B24]/10 via-transparent to-transparent" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-8 py-24 w-full">
          <div className="max-w-3xl space-y-8">
            <div className="inline-flex items-center gap-3 px-3.5 py-1.5 rounded border border-[#E59B24]/30 bg-black/60 backdrop-blur-md text-[#E59B24] text-[11px] font-mono tracking-widest uppercase">
              <span className="w-1.5 h-1.5 rounded-full bg-[#E59B24]"></span>
              <span>Бескомпромиссная бронезащита и автодетейлинг в Оше</span>
            </div>

            <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight text-white leading-[1.05]">
              Инженерия совершенного блеска и абсолютная броня
            </h1>

            <p className="text-[#9BA5B7] text-lg sm:text-xl font-light leading-relaxed max-w-2xl">
              Специализированная студия для владельцев премиальных внедорожников в Оше. Оклейка полиуретаном высокой оптической прозрачности 220 мкм, бесшовный подворот деталей и пожизненный сервис.
            </p>

            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-4 font-mono text-xs">
              <a
                href="#concierge"
                className="px-8 py-4 rounded bg-[#E59B24] hover:bg-[#D98F19] text-black font-bold uppercase tracking-wider flex items-center justify-center gap-2.5 transition duration-200 shadow-xl shadow-[#E59B24]/10"
              >
                <span>Забронировать визит</span>
                <ArrowRight className="w-4 h-4" />
              </a>
              <a
                href="#services"
                className="px-8 py-4 rounded border border-white/20 bg-white/[0.03] hover:bg-white/[0.08] text-white font-medium uppercase tracking-wider flex items-center justify-center transition duration-200"
              >
                <span>Комплексы и спецификации</span>
              </a>
            </div>

            {/* Spec Stamps */}
            <div className="grid grid-cols-3 gap-8 pt-10 border-t border-white/[0.08] font-mono">
              <div>
                <div className="text-2xl sm:text-3xl font-extrabold text-white">220 µm</div>
                <div className="text-[#7E889B] text-xs uppercase tracking-wider mt-1">Оригинальный полиуретан</div>
              </div>
              <div>
                <div className="text-2xl sm:text-3xl font-extrabold text-[#E59B24]">7 Лет</div>
                <div className="text-[#7E889B] text-xs uppercase tracking-wider mt-1">Официальная гарантия</div>
              </div>
              <div>
                <div className="text-2xl sm:text-3xl font-extrabold text-white">ISO 7</div>
                <div className="text-[#7E889B] text-xs uppercase tracking-wider mt-1">Очистка воздуха в боксе</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Editorial Section: About & Studio Craft */}
      <section id="about" className="py-28 px-8 max-w-7xl mx-auto border-b border-white/[0.08]">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
          <div className="lg:col-span-6 space-y-8">
            <div className="space-y-3">
              <span className="text-xs font-mono text-[#E59B24] uppercase tracking-[0.25em] block">Манифест качества</span>
              <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight leading-[1.15]">
                Отношение к автомобилю как к произведению инженерного искусства
              </h2>
            </div>

            <p className="text-[#9BA5B7] text-base leading-relaxed">
              В студии <strong>Redcar Detailing</strong> в городе Ош мы не используем конвейерный подход. Каждый автомобиль берется в работу индивидуально: мастер проводит дефектовку ЛКП цифровым микроскопом и толщиномером, после чего кузов консервируется в закрытом чистом боксе.
            </p>

            <p className="text-[#9BA5B7] text-base leading-relaxed">
              Мы применяем только полиуретан последнего поколения с нанокерамическим топ-коутом. Мелкие царапины от веток и гравийной пыли на горных дорогах бесследно затягиваются сами при обычном нагреве на солнце или теплой водой на мойке.
            </p>

            <div className="grid grid-cols-2 gap-6 pt-4 font-mono text-xs">
              <div className="p-6 rounded border border-white/[0.08] bg-[#0A0D14]">
                <div className="text-[#E59B24] font-bold text-sm mb-1 uppercase">Knifeless Precision</div>
                <p className="text-[#7E889B] text-xs font-sans leading-relaxed">Никаких лезвий на кузове. Раскрой ведется нитями и плоттером по заводским лекалам.</p>
              </div>
              <div className="p-6 rounded border border-white/[0.08] bg-[#0A0D14]">
                <div className="text-[#E59B24] font-bold text-sm mb-1 uppercase">Full Wrap Edges</div>
                <p className="text-[#7E889B] text-xs font-sans leading-relaxed">Подворот краев пленки внутрь всех зазоров. Снаружи оклейка абсолютно невидима.</p>
              </div>
            </div>
          </div>

          <div className="lg:col-span-6">
            <div className="relative rounded-lg overflow-hidden border border-white/[0.1] bg-[#090C12] p-3 shadow-2xl">
              <img
                src="/images/redcar.jpg"
                alt="Процесс монтажа пленки в боксе Redcar"
                className="w-full h-auto object-cover rounded"
              />
              <div className="mt-4 p-4 rounded bg-[#030406] border border-white/[0.06] flex items-center justify-between text-xs font-mono">
                <div>
                  <span className="text-[#7E889B]">Инспекционный бокс: </span>
                  <span className="text-white font-bold">Ош, ул. Т. Турсунбаевой</span>
                </div>
                <span className="text-[#E59B24] font-bold">Климат 22°C</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Signature Works Showcase */}
      <section id="signature" className="py-28 px-8 max-w-7xl mx-auto border-b border-white/[0.08] space-y-16">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div className="space-y-3 max-w-2xl">
            <span className="text-xs font-mono text-[#E59B24] uppercase tracking-[0.25em] block">Портфолио студии</span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
              Реализованные проекты в Оше
            </h2>
          </div>
          <div className="text-xs font-mono text-[#7E889B]">
            Более 350+ защищенных премиум-автомобилей
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {signatureWorks.map((work, idx) => (
            <div
              key={idx}
              className="p-8 rounded-lg border border-white/[0.08] bg-[#080B10] hover:border-[#E59B24]/40 transition duration-300 space-y-6 flex flex-col justify-between"
            >
              <div className="space-y-4">
                <span className="text-[11px] font-mono text-[#E59B24] uppercase tracking-wider block">
                  {work.location}
                </span>
                <h3 className="text-xl font-bold text-white font-sans">{work.title}</h3>
                <div className="text-xs font-mono text-[#A4B0C3] border-l border-[#E59B24] pl-3">
                  {work.service}
                </div>
                <p className="text-xs text-[#7E889B] leading-relaxed pt-2">
                  {work.details}
                </p>
              </div>

              <div className="pt-4 border-t border-white/[0.06] flex items-center justify-between text-xs font-mono">
                <span className="text-white/40">Статус:</span>
                <span className="text-emerald-400 font-bold">Выдан владельцу</span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Services & Products Monograph */}
      <section id="services" className="py-28 px-8 max-w-7xl mx-auto border-b border-white/[0.08] space-y-16">
        <div className="space-y-3 max-w-2xl">
          <span className="text-xs font-mono text-[#E59B24] uppercase tracking-[0.25em] block">Комплексы и спецификации</span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Программы защиты и ухода за автомобилем
          </h2>
          <p className="text-[#9BA5B7] text-sm leading-relaxed">
            Подберем оптимальное решение под условия эксплуатации вашего автомобиля в южном регионе Кыргызстана.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {services.map((item, idx) => (
            <div
              key={idx}
              className="p-8 rounded-lg border border-white/[0.08] bg-[#070A0F] hover:border-white/[0.18] transition duration-300 flex flex-col justify-between space-y-8"
            >
              <div className="space-y-5">
                <div className="flex items-center justify-between border-b border-white/[0.06] pb-4">
                  <span className="text-2xl font-extrabold font-mono text-[#E59B24]">{item.num}</span>
                  <span className="px-3 py-1 rounded bg-white/[0.05] border border-white/[0.08] text-white text-[11px] font-mono">
                    {item.tag}
                  </span>
                </div>

                <div>
                  <h3 className="text-xl font-bold text-white">{item.title}</h3>
                  <div className="text-xs font-mono text-[#E59B24] mt-1">{item.subtitle}</div>
                </div>

                <p className="text-xs text-[#9BA5B7] leading-relaxed">
                  {item.desc}
                </p>

                <ul className="space-y-2.5 text-xs text-[#C9D1D9] border-t border-white/[0.06] pt-4 font-mono">
                  {item.specs.map((s, i) => (
                    <li key={i} className="flex items-center gap-2.5">
                      <span className="w-1 h-1 rounded-full bg-[#E59B24]"></span>
                      <span>{s}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="pt-6 border-t border-white/[0.06] flex items-center justify-between">
                <span className="text-xs font-mono text-[#7E889B]">Индивидуальный расчет</span>
                <a
                  href={`https://wa.me/996555120044?text=${encodeURIComponent(`Салам Алейкум! Интересует комплекс: «${item.title}». Подскажите смету на мое авто.`)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-5 py-2.5 rounded bg-[#E59B24] hover:bg-[#D98F19] text-black font-mono font-bold text-xs uppercase tracking-wider transition flex items-center gap-2"
                >
                  <span>Запросить смету</span>
                  <ChevronRight className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Technology & Standards */}
      <section id="technology" className="py-28 px-8 max-w-7xl mx-auto border-b border-white/[0.08]">
        <div className="space-y-3 max-w-2xl mb-16">
          <span className="text-xs font-mono text-[#E59B24] uppercase tracking-[0.25em] block">Технологический регламент</span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            4 стандарта студии Redcar
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-xs font-mono">
          <div className="p-6 rounded border border-white/[0.06] bg-[#06080D] space-y-3">
            <span className="text-[#E59B24] font-bold text-sm block">01. Очистка ISO</span>
            <h4 className="text-sm font-bold text-white font-sans">Обеспыленная среда</h4>
            <p className="text-[#7E889B] font-sans leading-relaxed">
              Монтаж пленки выполняется в герметичном боксе с многоступенчатой фильтрацией воздуха.
            </p>
          </div>

          <div className="p-6 rounded border border-white/[0.06] bg-[#06080D] space-y-3">
            <span className="text-[#E59B24] font-bold text-sm block">02. Лазерный замер</span>
            <h4 className="text-sm font-bold text-white font-sans">Электронные лекала</h4>
            <p className="text-[#7E889B] font-sans leading-relaxed">
              Плоттерная нарезка выкроек строго под геометрию конкретной модели и года выпуска авто.
            </p>
          </div>

          <div className="p-6 rounded border border-white/[0.06] bg-[#06080D] space-y-3">
            <span className="text-[#E59B24] font-bold text-sm block">03. Инспекционный свет</span>
            <h4 className="text-sm font-bold text-white font-sans">Scangrip LED 4500K</h4>
            <p className="text-[#7E889B] font-sans leading-relaxed">
              Контроль прозрачности и прилегания пленки под профессиональными лампами колориста.
            </p>
          </div>

          <div className="p-6 rounded border border-white/[0.06] bg-[#06080D] space-y-3">
            <span className="text-[#E59B24] font-bold text-sm block">04. Гарантийный талон</span>
            <h4 className="text-sm font-bold text-white font-sans">Сервис на 7 лет</h4>
            <p className="text-[#7E889B] font-sans leading-relaxed">
              Бесплатный контрольный осмотр, коррекция и мойка через 10 дней после выдачи.
            </p>
          </div>
        </div>
      </section>

      {/* Private Concierge & Direct Seller Contact */}
      <section id="concierge" className="py-28 px-8 max-w-7xl mx-auto">
        <div className="rounded-2xl border border-[#E59B24]/30 bg-gradient-to-b from-[#0C0F17] to-[#06080C] p-10 sm:p-16 relative overflow-hidden shadow-2xl">
          <div className="absolute top-0 right-0 w-96 h-96 bg-[#E59B24]/5 rounded-full blur-3xl pointer-events-none"></div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center relative z-10">
            <div className="lg:col-span-7 space-y-6">
              <span className="text-xs font-mono text-[#E59B24] uppercase tracking-[0.25em] block">Private Concierge Service</span>
              <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight leading-[1.15]">
                Запишитесь на персональный осмотр автомобиля в Оше
              </h2>
              <p className="text-[#9BA5B7] text-base leading-relaxed">
                Свяжитесь с главным технологом студии в WhatsApp. Мы ответим на любые технические вопросы, рассчитаем смету под ваш автомобиль и согласуем закрытый бокс.
              </p>

              <div className="space-y-4 text-xs font-mono pt-2">
                <div className="flex items-center gap-3 text-[#C9D1D9]">
                  <MapPin className="w-4 h-4 text-[#E59B24] shrink-0" />
                  <span>г. Ош, ул. Т. Турсунбаевой, 101/2г (Private Studio Box)</span>
                </div>
                <div className="flex items-center gap-3 text-[#C9D1D9]">
                  <Phone className="w-4 h-4 text-[#E59B24] shrink-0" />
                  <a href="tel:+996555120044" className="hover:text-white font-bold text-[#E59B24]">+996 555 120 044</a>
                </div>
                <div className="flex items-center gap-3 text-[#C9D1D9]">
                  <Globe className="w-4 h-4 text-[#E59B24] shrink-0" />
                  <span>Instagram: @redcar_osh</span>
                </div>
              </div>
            </div>

            <div className="lg:col-span-5 p-8 rounded-xl border border-white/[0.1] bg-black/80 backdrop-blur-md space-y-6">
              <div className="space-y-2">
                <div className="text-sm font-bold text-white font-mono uppercase tracking-wider">Прямой диалог в WhatsApp</div>
                <p className="text-xs text-[#7E889B]">
                  Нажмите кнопку ниже для моментального соединения с управляющим:
                </p>
              </div>

              <a
                href={waUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-4 rounded bg-[#E59B24] hover:bg-[#D98F19] text-black font-mono font-bold text-xs uppercase tracking-wider transition duration-200 flex items-center justify-center gap-2 shadow-xl shadow-[#E59B24]/10"
              >
                <MessageSquare className="w-4 h-4" />
                <span>Открыть чат WhatsApp</span>
              </a>

              <a
                href="tel:+996555120044"
                className="w-full py-3.5 rounded border border-white/[0.15] hover:bg-white/[0.05] text-white font-mono text-xs uppercase tracking-wider transition flex items-center justify-center gap-2"
              >
                <Phone className="w-3.5 h-3.5 text-[#E59B24]" />
                <span>Позвонить в студию</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-white/[0.08] bg-[#020305] py-10 px-8 text-xs text-[#7E889B] font-mono">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-3">
            <RedcarLogo className="h-6 w-auto" />
            <span className="text-white/30">•</span>
            <span>г. Ош, ул. Т. Турсунбаевой, 101/2г</span>
          </div>
          <div>© 2026 REDCAR PRIVATE DETAILING STUDIO • ВСЕ ПРАВА ЗАЩИЩЕНЫ</div>
        </div>
      </footer>
    </div>
  );
};
