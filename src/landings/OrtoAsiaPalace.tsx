import React from 'react';
import { Crown, Check, Phone, MessageSquare, ArrowRight, UtensilsCrossed, MapPin, Globe, Sparkles, Flame, Users, Calendar } from 'lucide-react';
import { OrtoAsiaLogo } from '../components/BrandLogos';

export const OrtoAsiaPalace: React.FC = () => {
  const banquetOptions = [
    {
      name: 'Ханский дасторкон: Праздничный ошский плов',
      badge: 'Гастрономический символ',
      desc: 'Аутентичный ошский плов в казане на дровах из отборной фермерской баранины, желтой моркови, чеснока и восточной зиры.',
      features: ['Подача на резных медных ляганах', 'Самса из тандыра с сочной начинкой', '6 видов свежих сезонных салатов и ачучук', 'Национальные лепешки из тандыра с кунжутом'],
      tag: 'От 50 до 350 гостей',
    },
    {
      name: 'VIP-Зал «Шелковый Путь»: Камерные торжества',
      badge: 'Приватная атмосфера',
      desc: 'Изолированный банкетный зал с отдельным входом для семейных праздников, суннот тоев и закрытых переговоров.',
      features: ['Резное ореховое дерево и ручные ковры', 'Персональная команда официантов и сомелье', 'Мясо на углях (люля-кебаб, шашлык из баранины)', 'Чайная церемония с горными травами и пахлавой'],
      tag: 'До 60 гостей',
    },
    {
      name: 'Большой Ханский Купол (Grand Dome)',
      badge: 'Масштабные тои',
      desc: 'Монументальный этно-зал для свадебных тоев и юбилеев со сценой для национального ансамбля и световой аппаратурой.',
      features: ['Высота купола 12 метров с росписью в восточном стиле', 'Сценический свет и профессиональная акустика', 'Президиум Төр для почетных гостей и сватов', 'Большая парковка на 100+ автомобилей'],
      tag: 'До 350 гостей',
    },
    {
      name: 'Летняя панорамная веранда с топчанами',
      badge: 'Отдых на воздухе',
      desc: 'Уютные деревянные топчаны у журчащих фонтанов для вечерних ужинов, семейных встреч и неспешного чаепития.',
      features: ['Мягкие курпачи и подушки с национальным орнаментом', 'Прохлада у фонтанов в летний зной Оша', 'Живая восточная музыка по вечерам', 'Блюда на открытом огне и в тандыре'],
      tag: 'Сезонные ужины и банкеты',
    },
  ];

  const waMessage = `Ассалому алейкум, ресторанный комплекс Orto Asia в Оше! Планируем мероприятие в 2026 году. Подскажите, пожалуйста, свободные даты и варианты дасторкона!`;
  const waUrl = `https://wa.me/996555450090?text=${encodeURIComponent(waMessage)}`;

  return (
    <div className="min-h-screen bg-[#14080B] text-[#FFF7ED] font-sans selection:bg-amber-500 selection:text-black">
      {/* Top Header */}
      <header className="border-b border-[#2D1219] bg-[#0C0406] px-6 py-2.5 text-xs text-rose-300/70 font-serif">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-3">
            <UtensilsCrossed className="w-4 h-4 text-amber-400" />
            <span>РЕСТОРАННЫЙ КОМПЛЕКС «ORTO ASIA» • г. Ош, ул. И. Раззакова, 23</span>
          </div>
          <div className="hidden sm:flex items-center gap-6 text-rose-200/80">
            <span>Ошский праздничный плов в чугунном казане</span>
            <a href="tel:+996555450090" className="text-amber-400 font-bold hover:underline">+996 555 450 090</a>
          </div>
        </div>
      </header>

      {/* Nav */}
      <nav className="sticky top-11 z-40 border-b border-[#2D1219] bg-[#14080B]/95 backdrop-blur px-6 py-4">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-3">
            <OrtoAsiaLogo className="h-10 w-auto" />
          </div>

          <div className="hidden md:flex items-center gap-8 text-xs font-serif uppercase tracking-wider text-rose-200/80">
            <a href="#about" className="hover:text-amber-400 transition">О ресторане</a>
            <a href="#menu" className="hover:text-amber-400 transition">Дасторкон & Залы</a>
            <a href="#heritage" className="hover:text-amber-400 transition">Ошский плов</a>
            <a href="#contact" className="hover:text-amber-400 transition">Контакты</a>
          </div>

          <a
            href={waUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="px-5 py-2.5 rounded-full bg-amber-500 hover:bg-amber-400 text-black font-serif font-bold text-xs transition flex items-center gap-2 shadow-md shadow-amber-500/20"
          >
            <MessageSquare className="w-3.5 h-3.5" />
            <span>Забронировать VIP-зал</span>
          </a>
        </div>
      </nav>

      {/* Full-Bleed Hero Banner */}
      <section className="relative min-h-[580px] flex items-center border-b border-[#2D1219] overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src="/images/orto-asia.jpg"
            alt="Orto Asia Silk Road Feast Osh"
            className="w-full h-full object-cover object-center brightness-[0.45] scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#14080B] via-[#14080B]/80 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#14080B] via-transparent to-transparent" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-6 py-20 w-full">
          <div className="max-w-2xl space-y-6 text-white">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-amber-400/40 bg-amber-400/10 text-amber-300 text-xs font-serif">
              <Crown className="w-3.5 h-3.5" />
              <span>Главная гастрономическая достопримечательность города Ош</span>
            </div>

            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-bold tracking-tight font-serif leading-[1.12]">
              Легендарный вкус и восточное гостеприимство Шелкового Пути
            </h1>

            <p className="text-rose-100/90 text-base sm:text-lg leading-relaxed">
              Роскошный банкетный дворец с резным ореховым деревом, уютные VIP-кабины для семейных праздников и знаменитый ошский плов из казана на дровах.
            </p>

            <div className="flex flex-col sm:flex-row gap-3 pt-2 font-serif text-xs">
              <a
                href="#contact"
                className="px-7 py-4 rounded-full bg-amber-500 hover:bg-amber-400 text-black font-bold flex items-center justify-center gap-2 shadow-lg"
              >
                <span>Забронировать дату в WhatsApp</span>
                <ArrowRight className="w-4 h-4" />
              </a>
              <a
                href="#menu"
                className="px-7 py-4 rounded-full border border-rose-800 bg-black/50 hover:bg-black/80 text-white font-medium flex items-center justify-center"
              >
                <span>Смотреть дасторкон</span>
              </a>
            </div>

            <div className="grid grid-cols-3 gap-6 pt-6 border-t border-white/20 font-serif text-xs text-rose-200">
              <div>
                <div className="text-2xl font-bold text-amber-400">350 Мест</div>
                <div className="text-rose-300/70 text-[11px] font-sans mt-0.5">Вместимость залов</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-amber-400">100 Кг</div>
                <div className="text-rose-300/70 text-[11px] font-sans mt-0.5">Казан для плова</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-amber-400">10 VIP</div>
                <div className="text-rose-300/70 text-[11px] font-sans mt-0.5">Камерных кабин</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-6 max-w-7xl mx-auto border-b border-[#2D1219]">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-6 space-y-6">
            <span className="text-xs font-serif text-amber-400 uppercase tracking-wider block">О комплексе Orto Asia</span>
            <h2 className="text-2xl sm:text-4xl font-bold text-white font-serif">
              Традиции восточного гостеприимства в сердце древнего Оша
            </h2>
            <p className="text-rose-100/80 text-sm sm:text-base leading-relaxed">
              <strong>Orto Asia Palace</strong> — это ресторанный комплекс, где вековые кулинарные традиции Шелкового Пути оживают в современной подаче. Наш интерьер украшен ручной резьбой по дереву мастеров Ферганской долины и восточными коврами.
            </p>
            <p className="text-rose-100/80 text-sm leading-relaxed">
              Наш шеф-ошпаз готовит знаменитый ошский плов по старинному рецепту в чугунных казанах на березовых дровах, используя отборный рис Девзира и сочную баранину с горных пастбищ Алая.
            </p>

            <div className="grid grid-cols-2 gap-4 pt-2 font-serif text-xs">
              <div className="p-4 rounded-2xl border border-rose-900/60 bg-[#1F0D12]">
                <div className="font-bold text-white text-sm mb-1">Рис Девзира</div>
                <p className="text-rose-200/70 font-sans text-[11px]">Настоящий узгенский и ошский рис премиального сорта.</p>
              </div>
              <div className="p-4 rounded-2xl border border-rose-900/60 bg-[#1F0D12]">
                <div className="font-bold text-white text-sm mb-1">Тандыр на дровах</div>
                <p className="text-rose-200/70 font-sans text-[11px]">Горячая слоеная самса и лепешки прямо из глиняной печи.</p>
              </div>
            </div>
          </div>

          <div className="lg:col-span-6">
            <div className="rounded-2xl overflow-hidden border border-amber-500/30 bg-[#1F0D12] p-2 shadow-2xl">
              <img
                src="/images/orto-asia.jpg"
                alt="Праздничный ошский плов Orto Asia"
                className="w-full h-auto object-cover rounded-xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Menu Showcase */}
      <section id="menu" className="py-20 px-6 max-w-7xl mx-auto border-b border-[#2D1219] space-y-12">
        <div className="max-w-2xl space-y-2">
          <span className="text-xs font-serif text-amber-400 uppercase tracking-wider block">Залы и банкетный дасторкон</span>
          <h2 className="text-2xl sm:text-3xl font-bold text-white font-serif">
            Варианты проведения торжеств
          </h2>
          <p className="text-rose-200/70 text-sm">
            Подберем зал и меню под масштаб вашего мероприятия: от семейного ужина до пышного свадебного тоя.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {banquetOptions.map((opt, idx) => (
            <div
              key={idx}
              className="rounded-2xl border border-rose-900/60 bg-[#1F0D12] p-6 hover:border-amber-500/40 transition flex flex-col justify-between space-y-6 shadow-md"
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="px-3 py-1 rounded-full bg-amber-500/20 text-amber-300 text-xs font-serif font-bold">
                    {opt.badge}
                  </span>
                  <span className="text-xs font-sans text-rose-300/70">{opt.tag}</span>
                </div>

                <div>
                  <h3 className="text-lg font-bold text-white font-serif">{opt.name}</h3>
                  <p className="text-xs text-rose-100/70 leading-relaxed mt-2">{opt.desc}</p>
                </div>

                <ul className="space-y-2 text-xs text-rose-100 border-t border-rose-950 pt-4">
                  {opt.features.map((f, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <Check className="w-3.5 h-3.5 text-amber-400 shrink-0 mt-0.5" />
                      <span>{f}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="pt-4 border-t border-rose-950 flex items-center justify-between">
                <span className="text-xs text-rose-300/60">Индивидуальный расчет на персону</span>
                <a
                  href={`https://wa.me/996555450090?text=${encodeURIComponent(`Ассалому алейкум! Хотим узнать условия по варианту: «${opt.name}».`)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2 rounded-full bg-amber-500 hover:bg-amber-400 text-black text-xs font-serif font-bold transition flex items-center gap-1.5"
                >
                  <span>Запросить меню</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Direct Contact Section */}
      <section id="contact" className="py-20 px-6 max-w-7xl mx-auto">
        <div className="rounded-3xl border border-amber-500/30 bg-[#0C0406] p-8 sm:p-12 text-white">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-7 space-y-6">
              <span className="text-xs font-serif text-amber-400 uppercase tracking-wider block">Связь с администрацией</span>
              <h2 className="text-3xl sm:text-4xl font-bold font-serif">
                Забронируйте праздничный дасторкон в Оше
              </h2>
              <p className="text-rose-100/80 text-sm leading-relaxed">
                Напишите нам в WhatsApp количество гостей и дату мероприятия. Мы предложим свободные залы, составим меню и забронируем за вами выбранную дату.
              </p>

              <div className="space-y-3 text-xs font-serif">
                <div className="flex items-center gap-3 text-rose-200">
                  <MapPin className="w-4 h-4 text-amber-400 shrink-0" />
                  <span>г. Ош, ул. И. Раззакова, 23 (Центральный комплекс)</span>
                </div>
                <div className="flex items-center gap-3 text-rose-200">
                  <Phone className="w-4 h-4 text-amber-400 shrink-0" />
                  <a href="tel:+996555450090" className="hover:underline font-bold text-amber-400">+996 555 450 090</a>
                </div>
                <div className="flex items-center gap-3 text-rose-200">
                  <Globe className="w-4 h-4 text-amber-400 shrink-0" />
                  <span>Instagram: @orto_asia_osh</span>
                </div>
              </div>
            </div>

            <div className="lg:col-span-5 p-6 rounded-2xl border border-rose-900 bg-[#1F0D12] space-y-4">
              <div className="text-sm font-bold text-amber-300 font-serif">Связь с менеджером в WhatsApp</div>
              <p className="text-xs text-rose-200/70">
                Нажмите для прямого бронирования стола или зала:
              </p>
              <a
                href={waUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-4 rounded-full bg-amber-500 hover:bg-amber-400 text-black font-serif font-bold text-xs transition flex items-center justify-center gap-2 shadow-lg"
              >
                <MessageSquare className="w-4 h-4" />
                <span>Написать в WhatsApp</span>
              </a>
              <a
                href="tel:+996555450090"
                className="w-full py-3 rounded-full border border-amber-500/40 text-amber-200 hover:bg-[#2F141B] font-serif text-xs transition flex items-center justify-center gap-2"
              >
                <Phone className="w-3.5 h-3.5" />
                <span>Позвонить в ресторан</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-[#2D1219] bg-[#080204] py-8 px-6 text-xs text-rose-300/60 font-serif">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
          <div>
            <strong>ORTO ASIA PALACE</strong> • г. Ош, ул. И. Раззакова, 23 • +996 555 450 090
          </div>
          <div>Instagram: @orto_asia_osh • Все права защищены</div>
        </div>
      </footer>
    </div>
  );
};
