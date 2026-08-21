import React from 'react';
import { Shield, Wrench, Check, Phone, MessageSquare, ArrowRight, MapPin, Globe, Compass, Flame, ShieldCheck, Car } from 'lucide-react';
import { ToroLogo } from '../components/BrandLogos';

export const ToroAutoKarakol: React.FC = () => {
  const packages = [
    {
      name: 'Комплекс «Тянь-Шань 4x4 Под ключ»',
      badge: 'Полная подготовка',
      desc: 'Антигравийная бронепленка 220 мкм + антикоррозийная обработка рамы Dinitrol ML + усиление подвески и шноркель перед горными перевалами.',
      features: ['Защита капота, порогов и оптики от острых камней', 'Пескоструйная очистка рамы и шведский воск Dinitrol', 'Инспекция мостов, раздатки и ходовой части', 'Гарантия на антикор 3 года с сервисной книжкой'],
      tag: 'Для Land Cruiser, Patrol, Prado, Delica',
    },
    {
      name: 'Антикоррозийная обработка рамы и скрытых полостей',
      badge: 'Защита от солончаков',
      desc: 'Промывка рамы под давлением 200 бар, сушка тепловыми пушками и консервация скрытых полостей шведским составом Dinitrol ML.',
      features: ['Оригинальные составы Dinitrol (Швеция)', 'Обработка внутренних лонжеронов и порогов', 'Остановка уже начавшихся процессов коррозии', 'Не смывается горными реками и бродами'],
      tag: 'Шведская автохимия Dinitrol',
    },
    {
      name: 'Бронирование зон риска «Горный гравий»',
      badge: 'Антигравийный щит',
      desc: 'Оклейка передней части и расширителей арок сверхпрочным полиуретаном 220 мкм от гравийной пескоструйки на серпантинах.',
      features: ['Толстый самозатягивающийся полиуретан', 'Защита фар от помутнения и растрескивания', 'Подворот краев внутрь деталей кузова', 'Сохранение заводского ЛКП внедорожника'],
      tag: 'От сколов и веток кустарников',
    },
    {
      name: 'Внедорожный тюнинг и экспедиционное оснащение',
      badge: 'Лифт & Силовой обвес',
      desc: 'Установка силовых бамперов, лебедок, экспедиционных багажников, дополнительного света Aurora и калиток запасного колеса.',
      features: ['Монтаж и подключение лебедок 12000 lbs', 'Установка шноркелей для преодоления бродов', 'Усиленные амортизаторы и пружины Tough Dog / OME', 'Сертификация и грамотная проводка'],
      tag: 'Экспедиционный тюнинг',
    },
  ];

  const waMessage = `Салам, Toro Auto Karakol! Хочу подготовить внедорожник к поездкам в горы Тянь-Шаня. Подскажите свободные даты заезда в бокс в Караколе!`;
  const waUrl = `https://wa.me/996700277100?text=${encodeURIComponent(waMessage)}`;

  return (
    <div className="min-h-screen bg-[#111114] text-slate-100 font-sans selection:bg-orange-600 selection:text-white">
      {/* Top Header */}
      <header className="border-b border-zinc-800 bg-[#08080A] px-6 py-2.5 text-xs text-orange-400 font-mono">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-3">
            <Wrench className="w-4 h-4 text-orange-500" />
            <span>TORO AUTO 4X4 • г. Каракол, ул. Токтогула, 277/1 • Центр внедорожной подготовки</span>
          </div>
          <div className="hidden sm:flex items-center gap-6 text-slate-400">
            <span>Официальный центр антикора Dinitrol (Швеция)</span>
            <a href="tel:+996700277100" className="text-orange-400 font-bold hover:underline">+996 700 277 100</a>
          </div>
        </div>
      </header>

      {/* Nav */}
      <nav className="sticky top-11 z-40 border-b border-zinc-800/80 bg-[#111114]/95 backdrop-blur px-6 py-4">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-3">
            <ToroLogo className="h-10 w-auto" />
          </div>

          <div className="hidden md:flex items-center gap-8 text-xs font-mono uppercase tracking-wider text-slate-300">
            <a href="#about" className="hover:text-orange-500 transition">О центре</a>
            <a href="#packages" className="hover:text-orange-500 transition">Пакеты защиты</a>
            <a href="#dinitrol" className="hover:text-orange-500 transition">Шведский антикор</a>
            <a href="#contact" className="hover:text-orange-500 transition">Контакты</a>
          </div>

          <a
            href={waUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="px-5 py-2.5 rounded bg-orange-600 hover:bg-orange-500 text-white font-mono font-bold text-xs transition flex items-center gap-2 shadow-lg shadow-orange-950/40"
          >
            <MessageSquare className="w-3.5 h-3.5" />
            <span>Записаться в бокс</span>
          </a>
        </div>
      </nav>

      {/* Full-Bleed Hero Banner */}
      <section className="relative min-h-[580px] flex items-center border-b border-zinc-800 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src="/images/toro.jpg"
            alt="Toro Auto Karakol 4x4 Workshop"
            className="w-full h-full object-cover object-center brightness-[0.45] scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#111114] via-[#111114]/80 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#111114] via-transparent to-transparent" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-6 py-20 w-full">
          <div className="max-w-2xl space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded bg-zinc-900 border border-orange-600/40 text-orange-400 text-xs font-mono">
              <ShieldCheck className="w-3.5 h-3.5 text-orange-500" />
              <span>Шведский антикор Dinitrol • Броня 220+ мкм от камней</span>
            </div>

            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-[1.12]">
              Бронезащита и подготовка внедорожников к перевалам Тянь-Шаня
            </h1>

            <p className="text-slate-300 text-base sm:text-lg leading-relaxed">
              Сохраняем кузов и раму перед экспедициями на Ала-Куль, Сон-Куль, Энильчек и Алтын-Арашан. Надежная защита от коррозии, острых камней, солончаков и бродов в Караколе.
            </p>

            <div className="flex flex-col sm:flex-row gap-3 pt-2 font-mono text-xs">
              <a
                href="#contact"
                className="px-7 py-4 rounded bg-orange-600 hover:bg-orange-500 text-white font-bold flex items-center justify-center gap-2 shadow-lg"
              >
                <span>Записаться на осмотр в WhatsApp</span>
                <ArrowRight className="w-4 h-4" />
              </a>
              <a
                href="#packages"
                className="px-7 py-4 rounded border border-zinc-700 bg-black/60 hover:bg-black/90 text-white font-medium flex items-center justify-center"
              >
                <span>Смотреть услуги</span>
              </a>
            </div>

            <div className="grid grid-cols-3 gap-6 pt-6 border-t border-zinc-800 font-mono text-xs text-slate-300">
              <div>
                <div className="text-xl font-bold text-orange-400">220 µm</div>
                <div className="text-slate-400 text-[11px] mt-0.5">Броня порогов</div>
              </div>
              <div>
                <div className="text-xl font-bold text-emerald-400">Dinitrol</div>
                <div className="text-slate-400 text-[11px] mt-0.5">Швеция оригинал</div>
              </div>
              <div>
                <div className="text-xl font-bold text-cyan-400">4x4 Lift</div>
                <div className="text-slate-400 text-[11px] mt-0.5">Гидравлика до 5 тонн</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-6 max-w-7xl mx-auto border-b border-zinc-800">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-6 space-y-6">
            <span className="text-xs font-mono font-bold text-orange-500 uppercase tracking-wider block">О мастерской Toro Auto</span>
            <h2 className="text-2xl sm:text-4xl font-extrabold text-white">
              Специализированный центр тяжелой внедорожной защиты в Караколе
            </h2>
            <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
              <strong>Toro Auto</strong> — главная база технической подготовки джипов перед штурмом высокогорных маршрутов Иссык-Кульской области. Мы знаем все уязвимые места рамных внедорожников при форсировании каменистых рек и гравийных серпантинов.
            </p>
            <p className="text-slate-300 text-sm leading-relaxed">
              Мы используем оригинальные шведские восковые и битумные составы Dinitrol, которые не трескаются на морозе и не смываются соленой водой озера Иссык-Куль.
            </p>

            <div className="grid grid-cols-2 gap-4 pt-2 font-mono text-xs">
              <div className="p-4 rounded-xl border border-zinc-800 bg-[#16161A]">
                <div className="font-bold text-white text-sm mb-1">Пескоструй рамы</div>
                <p className="text-slate-400 text-[11px]">Полное удаление ржавчины до чистого металла перед нанесением грунта.</p>
              </div>
              <div className="p-4 rounded-xl border border-zinc-800 bg-[#16161A]">
                <div className="font-bold text-white text-sm mb-1">Шведский воск</div>
                <p className="text-slate-400 text-[11px]">Dinitrol ML глубоко проникает в скрытые полости лонжеронов.</p>
              </div>
            </div>
          </div>

          <div className="lg:col-span-6">
            <div className="rounded-2xl overflow-hidden border border-zinc-700 bg-[#16161A] p-2 shadow-2xl">
              <img
                src="/images/toro.jpg"
                alt="Внедорожный бокс Toro Auto в Караколе"
                className="w-full h-auto object-cover rounded-xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Packages Showcase */}
      <section id="packages" className="py-20 px-6 max-w-7xl mx-auto border-b border-zinc-800 space-y-12">
        <div className="max-w-2xl space-y-2">
          <span className="text-xs font-mono font-bold text-orange-500 uppercase tracking-wider block">Услуги мастерской</span>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-white">
            Пакеты защиты и экспедиционной подготовки
          </h2>
          <p className="text-slate-400 text-sm">
            Подберем решения под модель вашего внедорожника и сложность планируемого маршрута.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {packages.map((pkg, idx) => (
            <div
              key={idx}
              className="rounded-2xl border border-zinc-800 bg-[#16161A] p-6 hover:border-zinc-700 transition flex flex-col justify-between space-y-6 shadow-md"
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="px-3 py-1 rounded-full bg-orange-600/20 text-orange-400 text-xs font-mono font-bold">
                    {pkg.badge}
                  </span>
                  <span className="text-xs font-mono text-slate-400">{pkg.tag}</span>
                </div>

                <div>
                  <h3 className="text-lg font-bold text-white">{pkg.name}</h3>
                  <p className="text-xs text-slate-300 leading-relaxed mt-2">{pkg.desc}</p>
                </div>

                <ul className="space-y-2 text-xs text-slate-200 border-t border-zinc-800 pt-4">
                  {pkg.features.map((f, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <Check className="w-3.5 h-3.5 text-orange-400 shrink-0 mt-0.5" />
                      <span>{f}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="pt-4 border-t border-zinc-800 flex items-center justify-between">
                <span className="text-xs font-mono text-slate-400">Гарантия 3 года</span>
                <a
                  href={`https://wa.me/996700277100?text=${encodeURIComponent(`Салам, Toro Auto! Хочу узнать подробнее по пакету: «${pkg.name}».`)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2 rounded bg-orange-600 hover:bg-orange-500 text-white text-xs font-mono font-bold transition flex items-center gap-1.5"
                >
                  <span>Запросить расчет</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Direct Contact Section */}
      <section id="contact" className="py-20 px-6 max-w-7xl mx-auto">
        <div className="rounded-3xl border border-zinc-700 bg-[#16161A] p-8 sm:p-12 text-white">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-7 space-y-6">
              <span className="text-xs font-mono text-orange-400 uppercase tracking-wider block">Запись в бокс</span>
              <h2 className="text-3xl sm:text-4xl font-extrabold">
                Запишите авто на осмотр рамы и кузова в Караколе
              </h2>
              <p className="text-slate-300 text-sm leading-relaxed">
                Напишите нам в WhatsApp марку авто и удобный день. Мастер бесплатно поднимет машину на подъемнике, покажет состояние рамы эндоскопом и составит смету.
              </p>

              <div className="space-y-3 text-xs font-mono">
                <div className="flex items-center gap-3 text-slate-300">
                  <MapPin className="w-4 h-4 text-orange-400 shrink-0" />
                  <span>г. Каракол, ул. Токтогула, 277/1 (Въезд в город со стороны Бишкека)</span>
                </div>
                <div className="flex items-center gap-3 text-slate-300">
                  <Phone className="w-4 h-4 text-orange-400 shrink-0" />
                  <a href="tel:+996700277100" className="hover:underline font-bold text-orange-400">+996 700 277 100</a>
                </div>
                <div className="flex items-center gap-3 text-slate-300">
                  <Globe className="w-4 h-4 text-orange-400 shrink-0" />
                  <span>Instagram: @toro_auto_karakol</span>
                </div>
              </div>
            </div>

            <div className="lg:col-span-5 p-6 rounded-2xl border border-zinc-800 bg-[#0A0A0D] space-y-4">
              <div className="text-sm font-bold text-orange-400 font-mono">Связь с мастером в WhatsApp</div>
              <p className="text-xs text-slate-400">
                Нажмите для прямого бронирования бокса:
              </p>
              <a
                href={waUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-4 rounded bg-orange-600 hover:bg-orange-500 text-white font-mono font-bold text-xs transition flex items-center justify-center gap-2 shadow-lg"
              >
                <MessageSquare className="w-4 h-4" />
                <span>Написать в WhatsApp</span>
              </a>
              <a
                href="tel:+996700277100"
                className="w-full py-3 rounded border border-zinc-700 text-slate-200 hover:bg-[#1A1A22] font-mono text-xs transition flex items-center justify-center gap-2"
              >
                <Phone className="w-3.5 h-3.5" />
                <span>Позвонить в мастерскую</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-zinc-800 bg-[#08080A] py-8 px-6 text-xs text-slate-500 font-mono">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
          <div>
            <strong>TORO AUTO 4X4 KARAKOL</strong> • г. Каракол, ул. Токтогула, 277/1 • +996 700 277 100
          </div>
          <div>Instagram: @toro_auto_karakol • Все права защищены</div>
        </div>
      </footer>
    </div>
  );
};
