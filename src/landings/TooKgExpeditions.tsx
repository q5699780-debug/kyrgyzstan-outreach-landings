import React from 'react';
import { Compass, ShieldCheck, Check, Phone, MessageSquare, ArrowRight, MapPin, Calendar, Users, Globe, Trees, Flame } from 'lucide-react';
import { TooKgLogo } from '../components/BrandLogos';

export const TooKgExpeditions: React.FC = () => {
  const expeditions = [
    {
      name: 'Экспедиция «Сердце Тянь-Шаня: Озеро Сон-Куль & Таш-Рабат»',
      badge: 'Главный хит Кыргызстана',
      desc: 'Высокогорное озеро на высоте 3 016 м, ночевка в традиционном войлочном юрточном лагере, катание на лошадях и караван-сарай XV века.',
      features: ['Подготовленные внедорожники Toyota Land Cruiser', 'Ночевка в премиум-юртах с печным отоплением', 'Национальная гастрономия и дегустация кумыса', 'Спутниковая связь Garmin inReach'],
      tag: '3–4 дня • Все включено',
    },
    {
      name: 'Экспедиция «Затерянный мир: Озеро Кель-Суу & Нарын»',
      badge: 'Дикие ущелья',
      desc: 'Маршрут к скальному бирюзовому озеру у границы с Китаем на высоте 3 514 м. Прогулка на моторной лодке среди отвесных скал.',
      features: ['Пропуск в пограничную зону КР под ключ', 'Плавание на лодке по каньону Кель-Суу', 'Панорамные перевалы высотой до 3 800 м', 'Опытный англоговорящий гид-водитель'],
      tag: '4–5 дней • Эксклюзив',
    },
    {
      name: 'Большое кольцо: «Вокруг Иссык-Куля & Алтын-Арашан»',
      badge: 'Комфорт и природа',
      desc: 'Каньоны «Сказка» и «Марс», ущелье Джети-Огуз, купание в горячих источниках Алтын-Арашан и соленые озера южного берега.',
      features: ['Купание в термальных радоновых бассейнах', 'Прогулка по марсианским песчаникам', 'Комфортабельные эко-отели и шале', 'Идеально для семейного путешествия'],
      tag: '5–7 дней • Для всех возрастов',
    },
    {
      name: 'Индивидуальный VIP джип-тур по Кыргызстану',
      badge: '100% кастомный тур',
      desc: 'Разработка персонального маршрута любой сложности под ваш темп: от вертолетных забросок на пик Хан-Тенгри до приватных глэмпингов.',
      features: ['Премиальные внедорожники Lexus LX / Defender', 'Личный шеф-повар и кейтеринг на природе', 'Фото- и видеосъемка с дрона 4K', 'Гибкий график без спешки'],
      tag: 'Индивидуальный формат',
    },
  ];

  const waMessage = `Салам / Hello Too.kg Expeditions! Хотим забронировать джип-тур по Кыргызстану на сезон 2026. Подскажите подробную программу и условия бронирования!`;
  const waUrl = `https://wa.me/996555110033?text=${encodeURIComponent(waMessage)}`;

  return (
    <div className="min-h-screen bg-[#0C120C] text-[#E4EDE4] font-sans selection:bg-[#27AE60] selection:text-white">
      {/* Top Header */}
      <header className="border-b border-[#1C2C1C] bg-[#070B07] px-6 py-2.5 text-xs text-[#8A9E8A] font-mono">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-3">
            <Compass className="w-3.5 h-3.5 text-[#2ECC71]" />
            <span>TOO.KG EXPEDITIONS • Бишкек / Каракол / Ош • Лицензированный туроператор КР</span>
          </div>
          <div className="hidden sm:flex items-center gap-6">
            <span>Сезон 2026 открыт: бронирование джип-туров</span>
            <a href="tel:+996555110033" className="text-[#2ECC71] font-bold hover:underline">+996 555 110 033</a>
          </div>
        </div>
      </header>

      {/* Nav */}
      <nav className="sticky top-11 z-40 border-b border-[#1C2C1C] bg-[#0C120C]/95 backdrop-blur px-6 py-4">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-3">
            <TooKgLogo className="h-10 w-auto" />
          </div>

          <div className="hidden md:flex items-center gap-8 text-xs font-mono text-[#8A9E8A]">
            <a href="#about" className="hover:text-white transition">О компании</a>
            <a href="#tours" className="hover:text-white transition">Маршруты экспедиций</a>
            <a href="#safety" className="hover:text-white transition">Безопасность</a>
            <a href="#contact" className="hover:text-white transition">Контакты</a>
          </div>

          <a
            href={waUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="px-5 py-2.5 rounded bg-[#27AE60] hover:bg-[#219653] text-white font-mono font-bold text-xs transition flex items-center gap-2"
          >
            <MessageSquare className="w-3.5 h-3.5" />
            <span>Написать в WhatsApp</span>
          </a>
        </div>
      </nav>

      {/* Full-Bleed Hero Banner */}
      <section className="relative min-h-[580px] flex items-center border-b border-[#1C2C1C] overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src="/images/too-kg.jpg"
            alt="Too.kg Tian Shan Jeep Expedition"
            className="w-full h-full object-cover object-center brightness-[0.45] scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#0C120C] via-[#0C120C]/80 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0C120C] via-transparent to-transparent" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-6 py-20 w-full">
          <div className="max-w-2xl space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded border border-[#27AE60]/40 bg-[#27AE60]/10 text-[#2ECC71] text-xs font-mono">
              <ShieldCheck className="w-3.5 h-3.5" />
              <span>Безопасные экспедиции на подготовленных внедорожниках 4x4</span>
            </div>

            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white font-mono leading-[1.12]">
              Экспедиции и джип-туры по неизведанному Кыргызстану
            </h1>

            <p className="text-[#C5D6C5] text-base sm:text-lg leading-relaxed">
              Высокогорные озера Сон-Куль и Кель-Суу, ночевки в традиционных юртах кочевников, перевалы выше 3 500 м и первозданная природа Тянь-Шаня в формате «все включено».
            </p>

            <div className="flex flex-col sm:flex-row gap-3 pt-2 font-mono text-xs">
              <a
                href="#contact"
                className="px-7 py-4 rounded bg-[#27AE60] hover:bg-[#219653] text-white font-bold flex items-center justify-center gap-2 shadow-lg"
              >
                <span>Подобрать тур на сезон 2026</span>
                <ArrowRight className="w-4 h-4" />
              </a>
              <a
                href="#tours"
                className="px-7 py-4 rounded border border-[#274027] bg-black/60 hover:bg-black/90 text-white font-medium flex items-center justify-center"
              >
                <span>Смотреть экспедиции</span>
              </a>
            </div>

            <div className="grid grid-cols-3 gap-6 pt-6 border-t border-[#1C2C1C]/80 font-mono text-xs">
              <div>
                <div className="text-xl font-bold text-white">3 016 м</div>
                <div className="text-[#8A9E8A] text-[11px] mt-0.5">Озеро Сон-Куль</div>
              </div>
              <div>
                <div className="text-xl font-bold text-[#2ECC71]">100% 4x4</div>
                <div className="text-[#8A9E8A] text-[11px] mt-0.5">Лифтованные авто</div>
              </div>
              <div>
                <div className="text-xl font-bold text-white">Garmin</div>
                <div className="text-[#8A9E8A] text-[11px] mt-0.5">Спутниковый SOS трекер</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-6 max-w-7xl mx-auto border-b border-[#1C2C1C]">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-6 space-y-6">
            <span className="text-xs font-mono text-[#2ECC71] uppercase tracking-wider block">О команде Too.kg</span>
            <h2 className="text-2xl sm:text-4xl font-extrabold text-white font-mono">
              Профессиональные горные гиды и надежный флот внедорожников
            </h2>
            <p className="text-[#8A9E8A] text-sm sm:text-base leading-relaxed">
              Команда <strong>Too.kg Expeditions</strong> более 10 лет открывает труднодоступные уголки Кыргызстана для путешественников со всего мира. Мы не возим по стандартным асфальтовым экскурсиям — наши маршруты проходят по диким перевалам, каньонам и высокогорным плато.
            </p>
            <p className="text-[#8A9E8A] text-sm leading-relaxed">
              Каждый экипаж оснащен спутниковой связью, аптечкой первой помощи, рациями и запасом топлива. С нами путешествуют как соло-туристы, так и семьи с детьми.
            </p>

            <div className="grid grid-cols-2 gap-4 pt-2 font-mono text-xs">
              <div className="p-4 rounded border border-[#1C2C1C] bg-[#111A11]">
                <div className="font-bold text-white text-sm mb-1">Все включено</div>
                <p className="text-[#8A9E8A] text-[11px]">Транспорт, топливо, гид, проживание в юртах и 3-разовое питание.</p>
              </div>
              <div className="p-4 rounded border border-[#1C2C1C] bg-[#111A11]">
                <div className="font-bold text-white text-sm mb-1">Погранпропуска</div>
                <p className="text-[#8A9E8A] text-[11px]">Официально оформляем разрешения в погранзоны Кель-Суу и Хан-Тенгри.</p>
              </div>
            </div>
          </div>

          <div className="lg:col-span-6">
            <div className="rounded-lg overflow-hidden border border-[#274027] bg-[#101810] p-2">
              <img
                src="/images/too-kg.jpg"
                alt="Экспедиционный Land Cruiser Too.kg на озере Сон-Куль"
                className="w-full h-auto object-cover rounded"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Expeditions Showcase */}
      <section id="tours" className="py-20 px-6 max-w-7xl mx-auto border-b border-[#1C2C1C] space-y-12">
        <div className="max-w-2xl space-y-2">
          <span className="text-xs font-mono text-[#2ECC71] uppercase tracking-wider block">Флагманские маршруты</span>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-white font-mono">
            Джип-туры и экспедиции сезона
          </h2>
          <p className="text-[#8A9E8A] text-sm">
            Выберите готовый тур или запросите разработку индивидуального плана путешествия по Кыргызстану.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {expeditions.map((tour, idx) => (
            <div
              key={idx}
              className="rounded-lg border border-[#1C2C1C] bg-[#101810] p-6 hover:border-[#274027] transition flex flex-col justify-between space-y-6"
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="px-2.5 py-1 rounded bg-[#27AE60]/20 text-[#2ECC71] text-xs font-mono font-bold">
                    {tour.badge}
                  </span>
                  <span className="text-xs font-mono text-[#8A9E8A]">{tour.tag}</span>
                </div>

                <div>
                  <h3 className="text-lg font-bold text-white font-mono">{tour.name}</h3>
                  <p className="text-xs text-[#8A9E8A] leading-relaxed mt-2">{tour.desc}</p>
                </div>

                <ul className="space-y-2 text-xs text-[#C5D6C5] border-t border-[#1C2C1C] pt-4">
                  {tour.features.map((f, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <Check className="w-3.5 h-3.5 text-[#2ECC71] shrink-0 mt-0.5" />
                      <span>{f}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="pt-4 border-t border-[#1C2C1C] flex items-center justify-between">
                <span className="text-xs font-mono text-[#8A9E8A]">Набор в мини-группы</span>
                <a
                  href={`https://wa.me/996555110033?text=${encodeURIComponent(`Салам! Интересует джип-тур: «${tour.name}». Расскажите даты и программу!`)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2 rounded bg-[#27AE60] hover:bg-[#219653] text-white text-xs font-mono font-bold transition flex items-center gap-1.5"
                >
                  <span>Запросить программу</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Safety Section */}
      <section id="safety" className="py-20 px-6 max-w-7xl mx-auto border-b border-[#1C2C1C]">
        <div className="max-w-2xl space-y-2 mb-12">
          <span className="text-xs font-mono text-[#2ECC71] uppercase tracking-wider block">Безопасность и стандарты</span>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-white font-mono">
            Как мы готовим каждую экспедицию
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-xs">
          <div className="p-5 rounded border border-[#1C2C1C] bg-[#101810] space-y-2">
            <span className="font-mono text-[#2ECC71] font-bold block">01. Внедорожная подготовка</span>
            <h4 className="text-sm font-bold text-white font-mono">Шины All-Terrain & Лебедки</h4>
            <p className="text-[#8A9E8A] leading-relaxed">
              Все автомобили проходят полную техинспекцию перед каждым выездом в горы: усиленная подвеска, шноркели и двойной запас колес.
            </p>
          </div>

          <div className="p-5 rounded border border-[#1C2C1C] bg-[#101810] space-y-2">
            <span className="font-mono text-[#2ECC71] font-bold block">02. Спутниковый трекинг</span>
            <h4 className="text-sm font-bold text-white font-mono">Связь в зонах без сети</h4>
            <p className="text-[#8A9E8A] leading-relaxed">
              Координаты каждого экипажа отслеживаются базовым лагерем через спутниковую сеть Iridium в режиме реального времени.
            </p>
          </div>

          <div className="p-5 rounded border border-[#1C2C1C] bg-[#101810] space-y-2">
            <span className="font-mono text-[#2ECC71] font-bold block">03. Комфорт в юртах</span>
            <h4 className="text-sm font-bold text-white font-mono">Теплые одеяла и печки</h4>
            <p className="text-[#8A9E8A] leading-relaxed">
              Бронируем проверенные аутентичные юрточные лагеря с чистым бельем, растопленными печками и вкусной домашней едой.
            </p>
          </div>
        </div>
      </section>

      {/* Direct Contact Section */}
      <section id="contact" className="py-20 px-6 max-w-7xl mx-auto">
        <div className="rounded-2xl border border-[#274027] bg-[#101810] p-8 sm:p-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-7 space-y-6">
              <span className="text-xs font-mono text-[#2ECC71] uppercase tracking-wider block">Консультация гида</span>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-white font-mono">
                Запланируйте незабываемое путешествие по Кыргызстану
              </h2>
              <p className="text-[#8A9E8A] text-sm leading-relaxed">
                Напишите нам в WhatsApp количество человек, даты отпуска и ваши пожелания. Мы вышлем подробный PDF-буклет тура с фото и маршрутом.
              </p>

              <div className="space-y-3 text-xs font-mono">
                <div className="flex items-center gap-3 text-[#C5D6C5]">
                  <MapPin className="w-4 h-4 text-[#2ECC71] shrink-0" />
                  <span>г. Бишкек / г. Каракол / г. Ош • Старт туров из любого города</span>
                </div>
                <div className="flex items-center gap-3 text-[#C5D6C5]">
                  <Phone className="w-4 h-4 text-[#2ECC71] shrink-0" />
                  <a href="tel:+996555110033" className="hover:text-white font-bold text-white">+996 555 110 033</a>
                </div>
                <div className="flex items-center gap-3 text-[#C5D6C5]">
                  <Globe className="w-4 h-4 text-[#2ECC71] shrink-0" />
                  <span>Instagram: @too.kg</span>
                </div>
              </div>
            </div>

            <div className="lg:col-span-5 p-6 rounded-xl border border-[#1C2C1C] bg-[#070B07] space-y-4">
              <div className="text-sm font-bold text-white font-mono">Связь с гидом в WhatsApp</div>
              <p className="text-xs text-[#8A9E8A]">
                Отвечаем быстро и отправляем свежие фотографии с перевалов:
              </p>
              <a
                href={waUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-4 rounded bg-[#27AE60] hover:bg-[#219653] text-white font-mono font-bold text-xs transition flex items-center justify-center gap-2 shadow-lg"
              >
                <MessageSquare className="w-4 h-4" />
                <span>Написать в WhatsApp</span>
              </a>
              <a
                href="tel:+996555110033"
                className="w-full py-3 rounded border border-[#274027] text-white hover:bg-[#142014] font-mono text-xs transition flex items-center justify-center gap-2"
              >
                <Phone className="w-3.5 h-3.5" />
                <span>Позвонить туроператору</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-[#1C2C1C] bg-[#050805] py-8 px-6 text-xs text-[#8A9E8A] font-mono">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
          <div>
            <strong>TOO.KG EXPEDITIONS</strong> • Джип-туры по Кыргызстану • +996 555 110 033
          </div>
          <div>Instagram: @too.kg • Лицензия туроператора КР</div>
        </div>
      </footer>
    </div>
  );
};
