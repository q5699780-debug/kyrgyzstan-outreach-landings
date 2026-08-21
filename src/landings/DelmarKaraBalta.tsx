import React from 'react';
import { Flower2, Check, Phone, MessageSquare, ArrowRight, MapPin, Globe, Trees, Heart, Calendar, Users, Sparkles } from 'lucide-react';
import { DelmarLogo } from '../components/BrandLogos';

export const DelmarKaraBalta: React.FC = () => {
  const packages = [
    {
      name: 'Свадебный комплекс: «Зал + Регистрация в саду»',
      badge: 'Главный хит',
      desc: 'Выездная церемония у цветочной арки на мягком газоне среди яблоневого сада и торжественный банкет в панорамном зале до 220 гостей.',
      features: ['Оформление арки живыми цветами и дорожка', 'Вечерняя иллюминация деревьев (1 000+ огней)', 'Европейское и национальное банкетное меню', 'Светящаяся фотозона и фуршетный стол'],
      tag: 'До 220 гостей',
    },
    {
      name: 'Фуршет под открытым небом «Garden Party»',
      badge: 'Европейский формат',
      desc: 'Свадебный коктейль или молодежный юбилей в ландшафтном парке: бар с коктейлями, легкие закуски, живая скрипка и лаунж-зоны.',
      features: ['Мобильный бар с барменом и коктейльной картой', 'Кейтеринг с finger-food и сырными тарелками', 'Лаунж-диваны и пуфы на зеленом газоне', 'Акустическая система и гирлянды'],
      tag: 'От 50 до 150 гостей',
    },
    {
      name: 'Традиционный банкет в Панорамном Зале',
      badge: 'Семейные тои',
      desc: 'Праздничное застолье в крытом зале с системой кондиционирования, сценой для артистов и богатым национальным дасторконом.',
      features: ['Бешбармак, каре ягненка, горячий куурдак', '6 видов фирменных салатов от шеф-повара', 'Обслуживание команды официантов в форме', 'Детская площадка на закрытой территории'],
      tag: 'До 220 гостей',
    },
    {
      name: 'Детские дни рождения & Семейные уикенды',
      badge: 'Семейный отдых',
      desc: 'Проведение детских праздников с аниматорами на свежем воздухе, квесты по парку и специальное детское меню.',
      features: ['Безопасная огороженная парковая территория 1.5 Га', 'Пицца из дровяной печи, бургеры и домашние лимонады', 'Аниматоры, квесты и мыльные пузыри', 'Уютные беседки для родителей'],
      tag: 'Семейный формат',
    },
  ];

  const waMessage = `Добрый день, ресторан-парк D\`elmar в Кара-Балте! Планируем мероприятие в 2026 году. Подскажите, пожалуйста, свободные даты и варианты банкета в саду!`;
  const waUrl = `https://wa.me/996708113113?text=${encodeURIComponent(waMessage)}`;

  return (
    <div className="min-h-screen bg-[#07241A] text-[#F2FDF7] font-sans selection:bg-yellow-400 selection:text-black">
      {/* Top Header */}
      <header className="border-b border-emerald-900/60 bg-[#03150F] px-6 py-2.5 text-xs text-yellow-300 font-serif">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-3">
            <Trees className="w-4 h-4 text-emerald-400" />
            <span>РЕСТОРАН-ПАРК «D\`ELMAR» • г. Кара-Балта, ул. Кожомбердиева, 113а</span>
          </div>
          <div className="hidden sm:flex items-center gap-6 text-emerald-200/80">
            <span>Выездная регистрация в цветущем парке 1.5 Га</span>
            <a href="tel:+996708113113" className="text-yellow-400 font-bold hover:underline">+996 708 113 113</a>
          </div>
        </div>
      </header>

      {/* Nav */}
      <nav className="sticky top-11 z-40 border-b border-emerald-800/60 bg-[#07241A]/95 backdrop-blur px-6 py-4">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-3">
            <DelmarLogo className="h-10 w-auto" />
          </div>

          <div className="hidden md:flex items-center gap-8 text-xs font-serif uppercase tracking-wider text-emerald-200/80">
            <a href="#about" className="hover:text-yellow-300 transition">О парке</a>
            <a href="#packages" className="hover:text-yellow-300 transition">Свадьбы & Банкеты</a>
            <a href="#ceremony" className="hover:text-yellow-300 transition">Выездная регистрация</a>
            <a href="#contact" className="hover:text-yellow-300 transition">Контакты</a>
          </div>

          <a
            href={waUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="px-5 py-2.5 rounded-full bg-yellow-400 hover:bg-yellow-300 text-black font-serif font-bold text-xs transition flex items-center gap-2 shadow-md shadow-emerald-950/40"
          >
            <MessageSquare className="w-3.5 h-3.5" />
            <span>Узнать свободные даты</span>
          </a>
        </div>
      </nav>

      {/* Full-Bleed Hero Banner */}
      <section className="relative min-h-[580px] flex items-center border-b border-emerald-900/60 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src="/images/delmar.jpg"
            alt="Delmar Kara-Balta Twilight Wedding Garden"
            className="w-full h-full object-cover object-center brightness-[0.45] scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#07241A] via-[#07241A]/80 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#07241A] via-transparent to-transparent" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-6 py-20 w-full">
          <div className="max-w-2xl space-y-6 text-white">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-emerald-500/40 bg-[#0A382A] text-yellow-300 text-xs font-serif">
              <Flower2 className="w-3.5 h-3.5" />
              <span>Зеленый ландшафтный парк 1.5 Га • Выездные регистрации</span>
            </div>

            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-bold tracking-tight font-serif leading-[1.12]">
              Праздник среди цветущего сада и европейского уюта
            </h1>

            <p className="text-emerald-100/90 text-base sm:text-lg leading-relaxed">
              Главная площадка для выездных свадебных церемоний и тоев до 220 гостей в Кара-Балте: ландшафтный сад с гирляндами, мраморные фонтаны, изысканная европейская кухня и закрытая территория.
            </p>

            <div className="flex flex-col sm:flex-row gap-3 pt-2 font-serif text-xs">
              <a
                href="#contact"
                className="px-7 py-4 rounded-full bg-yellow-400 hover:bg-yellow-300 text-black font-bold flex items-center justify-center gap-2 shadow-lg"
              >
                <span>Забронировать дату в WhatsApp</span>
                <ArrowRight className="w-4 h-4" />
              </a>
              <a
                href="#packages"
                className="px-7 py-4 rounded-full border border-emerald-600 bg-black/50 hover:bg-black/80 text-white font-medium flex items-center justify-center"
              >
                <span>Смотреть варианты праздника</span>
              </a>
            </div>

            <div className="grid grid-cols-3 gap-6 pt-6 border-t border-white/20 font-serif text-xs text-emerald-200">
              <div>
                <div className="text-2xl font-bold text-yellow-300">1.5 Га</div>
                <div className="text-emerald-300/70 text-[11px] font-sans mt-0.5">Парковая зона</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-yellow-300">220 Мест</div>
                <div className="text-emerald-300/70 text-[11px] font-sans mt-0.5">Банкетный зал</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-yellow-300">1 000+</div>
                <div className="text-emerald-300/70 text-[11px] font-sans mt-0.5">Огней иллюминации</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-6 max-w-7xl mx-auto border-b border-emerald-900/60">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-6 space-y-6">
            <span className="text-xs font-serif text-yellow-300 uppercase tracking-wider block">О комплексе D\`elmar</span>
            <h2 className="text-2xl sm:text-4xl font-bold text-white font-serif">
              Уникальный оазис природы и гастрономии в Кара-Балте
            </h2>
            <p className="text-emerald-100/80 text-sm sm:text-base leading-relaxed">
              Ресторан-парк <strong>D\`elmar</strong> объединяет живописный цветущий сад и просторный панорамный банкетный зал. Мы создали локацию, где можно провести свадебную регистрацию на свежем воздухе европейского уровня, не выезжая за пределы Чуйской области.
            </p>
            <p className="text-emerald-100/80 text-sm leading-relaxed">
              Наши повара мастерски сочетают европейскую подачу с традиционной щедростью восточного дасторкона: мясо на мангале, авторские закуски и свежая выпечка.
            </p>

            <div className="grid grid-cols-2 gap-4 pt-2 font-serif text-xs">
              <div className="p-4 rounded-2xl border border-emerald-800 bg-[#0A382A]">
                <div className="font-bold text-white text-sm mb-1">Свадебная арка</div>
                <p className="text-emerald-200/70 font-sans text-[11px]">Готовая локация для незабываемой фотосессии и регистрации.</p>
              </div>
              <div className="p-4 rounded-2xl border border-emerald-800 bg-[#0A382A]">
                <div className="font-bold text-white text-sm mb-1">Безопасность детей</div>
                <p className="text-emerald-200/70 font-sans text-[11px]">Закрытый зеленый периметр без машин и детская зона.</p>
              </div>
            </div>
          </div>

          <div className="lg:col-span-6">
            <div className="rounded-2xl overflow-hidden border border-emerald-700 bg-[#0A382A] p-2 shadow-2xl">
              <img
                src="/images/delmar.jpg"
                alt="Свадебная церемония в саду D\`elmar Кара-Балта"
                className="w-full h-auto object-cover rounded-xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Packages Showcase */}
      <section id="packages" className="py-20 px-6 max-w-7xl mx-auto border-b border-emerald-900/60 space-y-12">
        <div className="max-w-2xl space-y-2">
          <span className="text-xs font-serif text-yellow-300 uppercase tracking-wider block">Форматы мероприятий</span>
          <h2 className="text-2xl sm:text-3xl font-bold text-white font-serif">
            Свадьбы, тои и праздники в саду
          </h2>
          <p className="text-emerald-200/70 text-sm">
            Подберем оптимальный формат под ваше событие: от романтической регистрации до масштабного торжества.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {packages.map((pkg, idx) => (
            <div
              key={idx}
              className="rounded-2xl border border-emerald-800 bg-[#0A382A] p-6 hover:border-emerald-600 transition flex flex-col justify-between space-y-6 shadow-md"
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="px-3 py-1 rounded-full bg-yellow-400/20 text-yellow-300 text-xs font-serif font-bold">
                    {pkg.badge}
                  </span>
                  <span className="text-xs font-sans text-emerald-300/70">{pkg.tag}</span>
                </div>

                <div>
                  <h3 className="text-lg font-bold text-white font-serif">{pkg.name}</h3>
                  <p className="text-xs text-emerald-100/70 leading-relaxed mt-2">{pkg.desc}</p>
                </div>

                <ul className="space-y-2 text-xs text-emerald-100 border-t border-emerald-900 pt-4">
                  {pkg.features.map((f, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <Check className="w-3.5 h-3.5 text-yellow-300 shrink-0 mt-0.5" />
                      <span>{f}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="pt-4 border-t border-emerald-900 flex items-center justify-between">
                <span className="text-xs text-emerald-300/60">Индивидуальный расчет сметы</span>
                <a
                  href={`https://wa.me/996708113113?text=${encodeURIComponent(`Добрый день! Хотим узнать подробнее по формату: «${pkg.name}».`)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2 rounded-full bg-yellow-400 hover:bg-yellow-300 text-black text-xs font-serif font-bold transition flex items-center gap-1.5"
                >
                  <span>Запросить смету</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Direct Contact Section */}
      <section id="contact" className="py-20 px-6 max-w-7xl mx-auto">
        <div className="rounded-3xl border border-emerald-700 bg-[#03150F] p-8 sm:p-12 text-white">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-7 space-y-6">
              <span className="text-xs font-serif text-yellow-300 uppercase tracking-wider block">Бронирование дат</span>
              <h2 className="text-3xl sm:text-4xl font-bold font-serif">
                Забронируйте праздник в саду D\`elmar
              </h2>
              <p className="text-emerald-100/80 text-sm leading-relaxed">
                Свяжитесь с нами в WhatsApp — мы проверим доступность парка и зала на сезон 2026, покажем варианты банкетного стола и проведем экскурсию по территории.
              </p>

              <div className="space-y-3 text-xs font-serif">
                <div className="flex items-center gap-3 text-emerald-200">
                  <MapPin className="w-4 h-4 text-yellow-300 shrink-0" />
                  <span>г. Кара-Балта, ул. Кожомбердиева, 113а (Парковая зона)</span>
                </div>
                <div className="flex items-center gap-3 text-emerald-200">
                  <Phone className="w-4 h-4 text-yellow-300 shrink-0" />
                  <a href="tel:+996708113113" className="hover:underline font-bold text-yellow-300">+996 708 113 113</a>
                </div>
                <div className="flex items-center gap-3 text-emerald-200">
                  <Globe className="w-4 h-4 text-yellow-300 shrink-0" />
                  <span>Instagram: @delmar_karabalta</span>
                </div>
              </div>
            </div>

            <div className="lg:col-span-5 p-6 rounded-2xl border border-emerald-800 bg-[#0A382A] space-y-4">
              <div className="text-sm font-bold text-yellow-300 font-serif">Связь с банкетным менеджером</div>
              <p className="text-xs text-emerald-200/70">
                Нажмите для прямого бронирования даты в WhatsApp:
              </p>
              <a
                href={waUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-4 rounded-full bg-yellow-400 hover:bg-yellow-300 text-black font-serif font-bold text-xs transition flex items-center justify-center gap-2 shadow-lg"
              >
                <MessageSquare className="w-4 h-4" />
                <span>Написать в WhatsApp</span>
              </a>
              <a
                href="tel:+996708113113"
                className="w-full py-3 rounded-full border border-yellow-400/40 text-yellow-300 hover:bg-[#0E4A38] font-serif text-xs transition flex items-center justify-center gap-2"
              >
                <Phone className="w-3.5 h-3.5" />
                <span>Позвонить в ресторан</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-emerald-900/60 bg-[#020A07] py-8 px-6 text-xs text-emerald-200/60 font-serif">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
          <div>
            <strong>РЕСТОРАН-ПАРК D\`ELMAR</strong> • г. Кара-Балта, ул. Кожомбердиева, 113а • +996 708 113 113
          </div>
          <div>Instagram: @delmar_karabalta • Все права защищены</div>
        </div>
      </footer>
    </div>
  );
};
