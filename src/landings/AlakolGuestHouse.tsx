import React from 'react';
import { Compass, Flame, MapPin, Calendar, Users, Phone, MessageSquare, ArrowRight, Check, Trees, Coffee, Globe, Mountain, ChevronRight } from 'lucide-react';
import { AlakolLogo } from '../components/BrandLogos';

export const AlakolGuestHouse: React.FC = () => {
  const chalets = [
    {
      num: '01',
      name: 'Семейное двухуровневое Шале с камином',
      subtitle: 'Приватный дом из тянь-шаньского бруса',
      desc: 'Двухэтажный деревянный коттедж с панорамными окнами на сосновый бор и пик Каракол. Просторная гостиная с дровяным камином, две изолированные спальни, кухня-столовая, терраса с шезлонгами и собственная зона для барбекю.',
      specs: ['Площадь 110 м² • До 5 гостей', 'Настоящий дровяной камин + запас дров', 'Панорамная терраса с видом на горы', 'Фермерский органический завтрак включен'],
      tag: 'Флагманское шале',
    },
    {
      num: '02',
      name: 'Деревянный Standard Twin & Double',
      subtitle: 'Экологичный номер из массива сосны',
      desc: 'Уютный номер с отделкой из натурального дерева, ортопедическими матрасами премиум-класса, собственной ванной комнатой с тропическим душем и балконом с видом на хвойный сад.',
      specs: ['Площадь 28 м² • 1–2 гостя', 'Ортопедические кровати King Size', 'Горячая родниковая вода 24/7', 'Чайная станция с горными травами'],
      tag: 'Уют и тишина',
    },
    {
      num: '03',
      name: 'Mountain Suite с панорамной ванной',
      subtitle: 'Видовой люкс для романтического отдыха',
      desc: 'Просторный номер на верхнем этаже с отдельно стоящей ванной у окна в пол, виниловым проигрывателем, теплыми полами и премиальным постельным бельем из египетского хлопка.',
      specs: ['Площадь 45 м² • 2 гостя', 'Ванна у окна с видом на ледники', 'Коллекция виниловых пластинок', 'Индивидуальная подача завтрака в номер'],
      tag: 'Панорамный люкс',
    },
    {
      num: '04',
      name: 'Авторская баня на дровах с купелью',
      subtitle: 'СПА-ритуал восстановления после треккинга',
      desc: 'Аутентичная парная из алтайского кедра с печью на березовых дровах, ледяной купелью под открытым небом, дубовыми вениками и самоваром на углях с высокогорным медом.',
      specs: ['Температура 80–90°C с мягким паром', 'Купель с проточной ледниковой водой', 'Травяные чаи из сборов Тескей Ала-Тоо', 'Березовые и пихтовые веники'],
      tag: 'Традиционный релакс',
    },
  ];

  const waMessage = `Hello / Салам, Alakol Guest House Karakol! Планируем отдых в Караколе в 2026 году. Подскажите свободные даты для бронирования шале и бани!`;
  const waUrl = `https://wa.me/996555330081?text=${encodeURIComponent(waMessage)}`;

  return (
    <div className="min-h-screen bg-[#070D0A] text-[#E8EFEA] font-sans selection:bg-[#1E824C] selection:text-white">
      {/* Top Banner */}
      <header className="border-b border-white/[0.06] bg-[#030604] px-8 py-2.5 text-[11px] font-mono text-[#7A9183] flex items-center justify-between">
        <div className="flex items-center gap-4">
          <span className="inline-block w-1.5 h-1.5 rounded-full bg-[#2ECC71] animate-pulse"></span>
          <span className="uppercase text-slate-300">ALAKOL ALPINE CHALET & SANCTUARY • KARAKOL, TIAN SHAN</span>
          <span className="hidden md:inline text-white/20">/</span>
          <span className="hidden md:inline text-white/40">ALTITUDE: 1,760M • LAKE ALA-KUL TREKKING BASE</span>
        </div>
        <div className="hidden sm:flex items-center gap-8">
          <span>СКИДКА 10% ПРИ ПРЯМОМ БРОНИРОВАНИИ</span>
          <a href="tel:+996555330081" className="text-[#2ECC71] font-bold hover:underline font-sans">+996 555 330 081</a>
        </div>
      </header>

      {/* Luxury Nav */}
      <nav className="sticky top-11 z-40 border-b border-white/[0.08] bg-[#070D0A]/90 backdrop-blur-xl px-8 py-5">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-4">
            <AlakolLogo className="h-9 w-auto" />
          </div>

          <div className="hidden lg:flex items-center gap-10 text-[11px] font-mono uppercase tracking-[0.2em] text-[#869E90]">
            <a href="#about" className="hover:text-white transition duration-200">О комплексе</a>
            <a href="#chalets" className="hover:text-white transition duration-200">Номера & Шале</a>
            <a href="#spa" className="hover:text-white transition duration-200">Кедровая баня</a>
            <a href="#trekking" className="hover:text-white transition duration-200">Треккинг</a>
            <a href="#concierge" className="hover:text-[#2ECC71] transition duration-200">VIP Бронирование</a>
          </div>

          <a
            href={waUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-2.5 rounded border border-[#1E824C] bg-[#1E824C]/20 hover:bg-[#1E824C] text-[#2ECC71] hover:text-white font-mono font-bold text-xs uppercase tracking-wider transition-all duration-300 flex items-center gap-2 shadow-lg shadow-[#1E824C]/10"
          >
            <MessageSquare className="w-3.5 h-3.5" />
            <span>Узнать свободные даты</span>
          </a>
        </div>
      </nav>

      {/* Hero: Luxury Alpine Banner */}
      <section className="relative min-h-[85vh] flex items-center border-b border-white/[0.08] overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src="/images/alakol.jpg"
            alt="Alakol Karakol Alpine Chalet at Twilight"
            className="w-full h-full object-cover object-center brightness-[0.38] scale-100 filter contrast-110"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#070D0A] via-[#070D0A]/85 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#070D0A] via-transparent to-transparent" />
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-[#1E824C]/10 via-transparent to-transparent" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-8 py-24 w-full">
          <div className="max-w-3xl space-y-8">
            <div className="inline-flex items-center gap-3 px-3.5 py-1.5 rounded border border-[#2ECC71]/30 bg-black/60 backdrop-blur-md text-[#2ECC71] text-[11px] font-mono tracking-widest uppercase">
              <span className="w-1.5 h-1.5 rounded-full bg-[#2ECC71]"></span>
              <span>Эко-шале из тянь-шаньского бруса & Баня на дровах • Каракол</span>
            </div>

            <h1 className="text-4xl sm:text-6xl lg:text-7xl font-bold tracking-tight font-serif text-white leading-[1.08]">
              Тишина реликтовых сосен и тепло дровяного камина
            </h1>

            <p className="text-[#9BB3A4] text-lg sm:text-xl font-light leading-relaxed max-w-2xl">
              Приватный курортный комплекс в Караколе у подножия хребта Тескей Ала-Тоо. Аутентичные шале из массива сосны, дровяная баня с купелью и прямые заброски на озеро Ала-Куль.
            </p>

            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-4 font-mono text-xs">
              <a
                href="#concierge"
                className="px-8 py-4 rounded bg-[#1E824C] hover:bg-[#166E3F] text-white font-bold uppercase tracking-wider flex items-center justify-center gap-2.5 transition duration-200 shadow-xl shadow-[#1E824C]/15"
              >
                <span>Забронировать в WhatsApp</span>
                <ArrowRight className="w-4 h-4" />
              </a>
              <a
                href="#chalets"
                className="px-8 py-4 rounded border border-white/20 bg-white/[0.03] hover:bg-white/[0.08] text-white uppercase tracking-wider flex items-center justify-center transition duration-200"
              >
                <span>Смотреть номера & Шале</span>
              </a>
            </div>

            <div className="grid grid-cols-3 gap-8 pt-10 border-t border-white/[0.08] font-mono">
              <div>
                <div className="text-2xl sm:text-3xl font-bold font-serif text-white">1,760 м</div>
                <div className="text-[#7A9183] text-xs uppercase tracking-wider mt-1">Высота над уровнем моря</div>
              </div>
              <div>
                <div className="text-2xl sm:text-3xl font-bold font-serif text-[#2ECC71]">100% Кедр</div>
                <div className="text-[#7A9183] text-xs uppercase tracking-wider mt-1">Дровяная парная</div>
              </div>
              <div>
                <div className="text-2xl sm:text-3xl font-bold font-serif text-white">3,860 м</div>
                <div className="text-[#7A9183] text-xs uppercase tracking-wider mt-1">Перевал Ала-Куль</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Editorial Section: About Atmosphere */}
      <section id="about" className="py-28 px-8 max-w-7xl mx-auto border-b border-white/[0.08]">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
          <div className="lg:col-span-6 space-y-8">
            <div className="space-y-3">
              <span className="text-xs font-mono text-[#2ECC71] uppercase tracking-[0.25em] block">Философия убежища</span>
              <h2 className="text-3xl sm:text-5xl font-bold text-white font-serif tracking-tight leading-[1.15]">
                Место силы и глубокого отдыха после горных восхождений
              </h2>
            </div>

            <p className="text-[#9BB3A4] text-base leading-relaxed">
              <strong>Alakol Guest House</strong> — это не просто отель, а пространство гармонии с первозданной природой Тянь-Шаня. Мы построили шале из цельного бруса, сохранив запах смолы и естественное тепло дерева.
            </p>

            <p className="text-[#9BB3A4] text-base leading-relaxed">
              Здесь приятно просыпаться под шум горной реки, пить чай из горных трав на открытой террасе и наслаждаться фермерскими сырами, каймаком и домашней выпечкой на завтрак.
            </p>

            <div className="grid grid-cols-2 gap-6 pt-4 font-mono text-xs">
              <div className="p-6 rounded border border-white/[0.08] bg-[#0C1611]">
                <div className="text-[#2ECC71] font-bold text-sm mb-1 uppercase">Trekking Logistics</div>
                <p className="text-[#7A9183] text-xs font-sans leading-relaxed">Организация трансфера на 4х4 в ущелья Каракол и Алтын-Арашан.</p>
              </div>
              <div className="p-6 rounded border border-white/[0.08] bg-[#0C1611]">
                <div className="text-[#2ECC71] font-bold text-sm mb-1 uppercase">Local Organic Food</div>
                <p className="text-[#7A9183] text-xs font-sans leading-relaxed">Завтраки из местных фермерских продуктов Иссык-Кульской долины.</p>
              </div>
            </div>
          </div>

          <div className="lg:col-span-6">
            <div className="rounded-lg overflow-hidden border border-white/[0.1] bg-[#0A120E] p-3 shadow-2xl">
              <img
                src="/images/alakol.jpg"
                alt="Alakol Guest House в Караколе"
                className="w-full h-auto object-cover rounded"
              />
              <div className="mt-4 p-4 rounded bg-[#030604] border border-white/[0.06] flex items-center justify-between text-xs font-mono">
                <div>
                  <span className="text-[#7A9183]">Локация: </span>
                  <span className="text-white font-bold font-serif">г. Каракол, ул. Стаханова, 140</span>
                </div>
                <span className="text-[#2ECC71] font-bold">100% Эко-стандарт</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Chalets & Suites Showcase */}
      <section id="chalets" className="py-28 px-8 max-w-7xl mx-auto border-b border-white/[0.08] space-y-16">
        <div className="space-y-3 max-w-2xl">
          <span className="text-xs font-mono text-[#2ECC71] uppercase tracking-[0.25em] block">Коллекция номеров и шале</span>
          <h2 className="text-3xl sm:text-4xl font-bold text-white font-serif tracking-tight">
            Варианты размещения
          </h2>
          <p className="text-[#9BB3A4] text-sm leading-relaxed">
            Выберите индивидуальный формат отдыха: от уютного номера на двоих до просторного двухэтажного шале.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {chalets.map((item, idx) => (
            <div
              key={idx}
              className="p-8 rounded-lg border border-white/[0.08] bg-[#0A140F] hover:border-[#1E824C]/40 transition duration-300 flex flex-col justify-between space-y-8 shadow-md"
            >
              <div className="space-y-5">
                <div className="flex items-center justify-between border-b border-white/[0.06] pb-4">
                  <span className="text-2xl font-bold font-mono text-[#2ECC71]">{item.num}</span>
                  <span className="px-3 py-1 rounded bg-[#1E824C]/20 border border-[#1E824C]/40 text-[#2ECC71] text-[11px] font-mono font-bold">
                    {item.tag}
                  </span>
                </div>

                <div>
                  <h3 className="text-xl font-bold text-white font-serif">{item.name}</h3>
                  <div className="text-xs font-mono text-[#2ECC71] mt-1">{item.subtitle}</div>
                </div>

                <p className="text-xs text-[#9BB3A4] leading-relaxed">
                  {item.desc}
                </p>

                <ul className="space-y-2.5 text-xs text-[#C8D9CE] border-t border-white/[0.06] pt-4 font-mono">
                  {item.specs.map((s, i) => (
                    <li key={i} className="flex items-center gap-2.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#2ECC71]"></span>
                      <span>{s}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="pt-6 border-t border-white/[0.06] flex items-center justify-between">
                <span className="text-xs font-mono text-[#7A9183]">Прямое бронирование</span>
                <a
                  href={`https://wa.me/996555330081?text=${encodeURIComponent(`Hello / Салам! Интересует размещение: «${item.name}». Подскажите свободные даты и стоимость.`)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-5 py-2.5 rounded bg-[#1E824C] hover:bg-[#166E3F] text-white font-mono font-bold text-xs uppercase tracking-wider transition flex items-center gap-2"
                >
                  <span>Запросить даты</span>
                  <ChevronRight className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Private Concierge & Direct Contact */}
      <section id="concierge" className="py-28 px-8 max-w-7xl mx-auto">
        <div className="rounded-2xl border border-[#1E824C]/30 bg-gradient-to-b from-[#0C1812] to-[#060D09] p-10 sm:p-16 shadow-2xl relative overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-7 space-y-6">
              <span className="text-xs font-mono text-[#2ECC71] uppercase tracking-[0.25em] block">Прямой контакт с отелем</span>
              <h2 className="text-3xl sm:text-5xl font-bold text-white font-serif tracking-tight leading-[1.15]">
                Забронируйте отдых в Караколе без посредников и комиссий
              </h2>
              <p className="text-[#9BB3A4] text-base leading-relaxed">
                Напишите нам в WhatsApp количество гостей и планируемые даты. Мы подберем лучшее шале, подготовим дровяную баню к вашему приезду и забронируем трансфер в ущелья.
              </p>

              <div className="space-y-4 text-xs font-mono pt-2">
                <div className="flex items-center gap-3 text-[#C8D9CE]">
                  <MapPin className="w-4 h-4 text-[#2ECC71] shrink-0" />
                  <span>г. Каракол, ул. Стаханова, 140 (Тихий район у подножия соснового леса)</span>
                </div>
                <div className="flex items-center gap-3 text-[#C8D9CE]">
                  <Phone className="w-4 h-4 text-[#2ECC71] shrink-0" />
                  <a href="tel:+996555330081" className="hover:text-white font-bold text-[#2ECC71]">+996 555 330 081</a>
                </div>
                <div className="flex items-center gap-3 text-[#C8D9CE]">
                  <Globe className="w-4 h-4 text-[#2ECC71] shrink-0" />
                  <span>Instagram: @alakol_karakol</span>
                </div>
              </div>
            </div>

            <div className="lg:col-span-5 p-8 rounded-xl border border-white/[0.1] bg-black/80 backdrop-blur-md space-y-6">
              <div className="space-y-2">
                <div className="text-sm font-bold text-white font-mono uppercase tracking-wider">Прямой чат в WhatsApp</div>
                <p className="text-xs text-[#7A9183]">
                  Моментальный ответ администратора комплекса:
                </p>
              </div>

              <a
                href={waUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-4 rounded bg-[#1E824C] hover:bg-[#166E3F] text-white font-mono font-bold text-xs uppercase tracking-wider transition duration-200 flex items-center justify-center gap-2 shadow-xl shadow-[#1E824C]/15"
              >
                <MessageSquare className="w-4 h-4" />
                <span>Написать в WhatsApp</span>
              </a>

              <a
                href="tel:+996555330081"
                className="w-full py-3.5 rounded border border-white/[0.15] hover:bg-white/[0.05] text-white font-mono text-xs uppercase tracking-wider transition flex items-center justify-center gap-2"
              >
                <Phone className="w-3.5 h-3.5 text-[#2ECC71]" />
                <span>Позвонить в отель</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-white/[0.08] bg-[#030604] py-10 px-8 text-xs text-[#7A9183] font-mono">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-3">
            <AlakolLogo className="h-6 w-auto" />
            <span className="text-white/30">•</span>
            <span>г. Каракол, ул. Стаханова, 140</span>
          </div>
          <div>© 2026 ALAKOL GUEST HOUSE & ALPINE SANCTUARY • ВСЕ ПРАВА ЗАЩИЩЕНЫ</div>
        </div>
      </footer>
    </div>
  );
};
