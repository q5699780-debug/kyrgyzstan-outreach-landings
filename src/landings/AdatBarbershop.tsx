import React from 'react';
import { Scissors, Check, Phone, MessageSquare, ArrowRight, MapPin, Globe, Star, Coffee, ShieldCheck, Clock } from 'lucide-react';
import { AdatLogo } from '../components/BrandLogos';

export const AdatBarbershop: React.FC = () => {
  const rituals = [
    {
      name: 'Королевский комплекс: «Стрижка + Моделирование бороды»',
      badge: 'Фирменный ритуал',
      desc: 'Полный комплекс ухода за головой и бородой: мытье английским шампунем Morgan\'s, точная геометрия, распаривание горячим компрессом и бритье опасной бритвой.',
      features: ['Мытье головы с массажем и шампунем Morgan\'s Pomade', 'Контуринг бороды опасной бритвой с кедровым маслом', 'Очищающая черная маска-детокс для лица', 'Шотландский виски / двойной эспрессо включены'],
      tag: '80 минут • Максимальный уход',
    },
    {
      name: 'Фирменная мужская стрижка от Brand Master',
      badge: 'Классический стиль',
      desc: 'Индивидуальный подбор формы под анатомию черепа: классика, Fade, Crop, Pompadour. Идеальная укладка матовой пастой.',
      features: ['Опытные мастера со стажем 4+ года', 'Супер-точный срез ножницами и машинками Wahl', 'Окантовка шеи опасной бритвой с тальком', 'Укладка премиальной британской косметикой'],
      tag: '50 минут • Безупречная форма',
    },
    {
      name: 'Моделирование и тонирование бороды',
      badge: 'Четкие линии',
      desc: 'Оформление четкого контура щек и шеи, снятие лишнего объема, смягчение щетины горячим полотенцем и камуфляж седины.',
      features: ['Распаривание лица с эфирными маслами эвкалипта', 'Камуфляж седины натуральным красителем', 'Уход за кожей после бритья бальзамом Morgan\'s', 'Рекомендации по уходу за бородой дома'],
      tag: '40 минут • Брутальный вид',
    },
    {
      name: 'Семейный комплекс: «Отец + Сын»',
      badge: 'Традиции и стиль',
      desc: 'Стрижка отца и сына в соседних кожаных креслах. Прививаем культуру мужского стиля и хорошего вкуса с детства.',
      features: ['Две стрижки одновременно у топ-мастеров', 'Детская стрижка любой сложности без слез', 'Игровая приставка PlayStation в зоне отдыха', 'Чай, лимонад и кофе для всей семьи'],
      tag: '75 минут • Семейное время',
    },
  ];

  const waMessage = `Салам, ADAT Barbershop на Токтогула! Хочу записаться на стрижку / уход. Подскажите свободные слоты на сегодня или завтра!`;
  const waUrl = `https://wa.me/996559191191?text=${encodeURIComponent(waMessage)}`;

  return (
    <div className="min-h-screen bg-[#0E0E10] text-slate-100 font-sans selection:bg-amber-600 selection:text-white">
      {/* Top Header */}
      <header className="border-b border-zinc-800 bg-[#060608] px-6 py-2.5 text-xs text-amber-500 font-cinzel">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-3">
            <Scissors className="w-3.5 h-3.5 text-amber-500" />
            <span>ADAT GENTLEMEN\'S CLUB • Бишкек, ул. Токтогула, 191 • Ежедневно 10:00 – 21:00</span>
          </div>
          <div className="hidden sm:flex items-center gap-6 text-slate-300 font-sans text-xs">
            <span>Free Bar: Виски и эспрессо включены в визит</span>
            <a href="tel:+996559191191" className="text-amber-400 font-bold hover:underline">+996 559 191 191</a>
          </div>
        </div>
      </header>

      {/* Nav */}
      <nav className="sticky top-11 z-40 border-b border-zinc-800/80 bg-[#0E0E10]/95 backdrop-blur px-6 py-4">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-3">
            <AdatLogo className="h-10 w-auto" />
          </div>

          <div className="hidden md:flex items-center gap-8 text-xs font-cinzel uppercase tracking-wider text-slate-300">
            <a href="#about" className="hover:text-amber-500 transition">О клубе</a>
            <a href="#rituals" className="hover:text-amber-500 transition">Ритуалы ухода</a>
            <a href="#cosmetics" className="hover:text-amber-500 transition">Morgan's London</a>
            <a href="#contact" className="hover:text-amber-500 transition">Контакты</a>
          </div>

          <a
            href={waUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="px-5 py-2.5 rounded bg-amber-600 hover:bg-amber-500 text-white font-cinzel font-bold text-xs transition flex items-center gap-2 shadow-lg shadow-amber-900/30"
          >
            <MessageSquare className="w-3.5 h-3.5" />
            <span>Записаться в WhatsApp</span>
          </a>
        </div>
      </nav>

      {/* Full-Bleed Hero Banner */}
      <section className="relative min-h-[580px] flex items-center border-b border-zinc-800 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src="/images/adat.jpg"
            alt="ADAT Barbershop Bishkek"
            className="w-full h-full object-cover object-center brightness-[0.45] scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#0E0E10] via-[#0E0E10]/80 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0E0E10] via-transparent to-transparent" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-6 py-20 w-full">
          <div className="max-w-2xl space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded bg-zinc-900 border border-amber-600/40 text-amber-400 text-xs font-cinzel">
              <Scissors className="w-3.5 h-3.5 text-amber-500" />
              <span>Мужской клуб на Токтогула • Классическое бритье опасной бритвой</span>
            </div>

            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-bold tracking-tight font-cinzel text-white leading-[1.12]">
              Традиции классического стиля и безупречная форма
            </h1>

            <p className="text-slate-300 text-base sm:text-lg leading-relaxed">
              Стрижки любой сложности, моделирование бороды с распариванием, косметика Morgan\'s Pomade из Великобритании и атмосфера закрытого джентльменского клуба в центре Бишкека.
            </p>

            <div className="flex flex-col sm:flex-row gap-3 pt-2 font-cinzel text-xs">
              <a
                href="#contact"
                className="px-7 py-4 rounded bg-amber-600 hover:bg-amber-500 text-white font-bold flex items-center justify-center gap-2 shadow-lg"
              >
                <span>Записаться на удобное время</span>
                <ArrowRight className="w-4 h-4" />
              </a>
              <a
                href="#rituals"
                className="px-7 py-4 rounded border border-zinc-700 bg-black/60 hover:bg-black/90 text-white font-medium flex items-center justify-center"
              >
                <span>Смотреть ритуалы</span>
              </a>
            </div>

            <div className="grid grid-cols-3 gap-6 pt-6 border-t border-zinc-800 text-xs font-cinzel text-slate-300">
              <div>
                <div className="text-xl font-bold text-amber-400">100% UK</div>
                <div className="text-slate-400 font-sans text-[11px] mt-0.5">Косметика Morgan's</div>
              </div>
              <div>
                <div className="text-xl font-bold text-emerald-400">180°C</div>
                <div className="text-slate-400 font-sans text-[11px] mt-0.5">Автоклав стерилизация</div>
              </div>
              <div>
                <div className="text-xl font-bold text-cyan-400">Free Bar</div>
                <div className="text-slate-400 font-sans text-[11px] mt-0.5">Виски & Эспрессо</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-6 max-w-7xl mx-auto border-b border-zinc-800">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-6 space-y-6">
            <span className="text-xs font-cinzel font-bold text-amber-500 uppercase tracking-wider block">О мужском клубе ADAT</span>
            <h2 className="text-2xl sm:text-4xl font-bold text-white font-cinzel">
              Пространство для мужчин, ценящих безупречный уход и сервис
            </h2>
            <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
              <strong>ADAT Barbershop</strong> — это не просто парикмахерская, а клуб единомышленников на Токтогула. Винтажные кожаные кресла, отделка темным деревом, лампы Эдисона и спокойная музыка создают место, где можно отключиться от суеты столицы.
            </p>
            <p className="text-slate-300 text-sm leading-relaxed">
              Наши мастера непрерывно обучаются у лучших барберов мира и виртуозно владеют опасной бритвой, сохраняя четкость линий даже через 3 недели после стрижки.
            </p>

            <div className="grid grid-cols-2 gap-4 pt-2 font-cinzel text-xs">
              <div className="p-4 rounded-xl border border-zinc-800 bg-[#16161A]">
                <div className="font-bold text-white text-sm mb-1">Стерильность 100%</div>
                <p className="text-slate-400 font-sans text-[11px]">3-этапная дезинфекция инструментов и одноразовые лезвия.</p>
              </div>
              <div className="p-4 rounded-xl border border-zinc-800 bg-[#16161A]">
                <div className="font-bold text-white text-sm mb-1">Напитки в баре</div>
                <p className="text-slate-400 font-sans text-[11px]">Хороший шотландский виски или свежесваренный кофе в подарок.</p>
              </div>
            </div>
          </div>

          <div className="lg:col-span-6">
            <div className="rounded-2xl overflow-hidden border border-zinc-700 bg-[#16161A] p-2 shadow-2xl">
              <img
                src="/images/adat.jpg"
                alt="Интерьер ADAT Barbershop Бишкек"
                className="w-full h-auto object-cover rounded-xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Rituals Showcase */}
      <section id="rituals" className="py-20 px-6 max-w-7xl mx-auto border-b border-zinc-800 space-y-12">
        <div className="max-w-2xl space-y-2">
          <span className="text-xs font-cinzel font-bold text-amber-500 uppercase tracking-wider block">Джентльменское меню</span>
          <h2 className="text-2xl sm:text-3xl font-bold text-white font-cinzel">
            Ритуалы стрижки и бритья
          </h2>
          <p className="text-slate-400 text-sm">
            Каждая услуга включает мытье головы, укладку и напиток на выбор из нашего бара.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {rituals.map((ritual, idx) => (
            <div
              key={idx}
              className="rounded-2xl border border-zinc-800 bg-[#141418] p-6 hover:border-zinc-700 transition flex flex-col justify-between space-y-6 shadow-md"
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="px-3 py-1 rounded-full bg-amber-600/20 text-amber-400 text-xs font-cinzel font-bold">
                    {ritual.badge}
                  </span>
                  <span className="text-xs font-mono text-slate-400">{ritual.tag}</span>
                </div>

                <div>
                  <h3 className="text-lg font-bold text-white font-cinzel">{ritual.name}</h3>
                  <p className="text-xs text-slate-300 leading-relaxed mt-2">{ritual.desc}</p>
                </div>

                <ul className="space-y-2 text-xs text-slate-200 border-t border-zinc-800 pt-4">
                  {ritual.features.map((f, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <Check className="w-3.5 h-3.5 text-amber-400 shrink-0 mt-0.5" />
                      <span>{f}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="pt-4 border-t border-zinc-800 flex items-center justify-between">
                <span className="text-xs text-slate-400">Фиксированное качество</span>
                <a
                  href={`https://wa.me/996559191191?text=${encodeURIComponent(`Салам, ADAT! Хочу записаться на ритуал: «${ritual.name}».`)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2 rounded bg-amber-600 hover:bg-amber-500 text-white text-xs font-cinzel font-bold transition flex items-center gap-1.5"
                >
                  <span>Записаться в салон</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Cosmetics Showcase (Morgan's London) */}
      <section id="cosmetics" className="py-20 px-6 max-w-7xl mx-auto border-b border-zinc-800">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-6 space-y-6">
            <span className="text-xs font-cinzel font-bold text-amber-500 uppercase tracking-wider block">Официальная косметика</span>
            <h2 className="text-2xl sm:text-4xl font-bold text-white font-cinzel">
              Morgan's Pomade — Британские традиции с 1873 года
            </h2>
            <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
              Мы используем исключительно оригинальную британскую косметику <strong>Morgan's Pomade</strong>. Натуральные масла бергамота, пачули, сандала и кедра питают волосы и кожу лица, придавая благородный ненавязчивый аромат истинного джентльмена.
            </p>
            <div className="grid grid-cols-2 gap-4 pt-2 font-cinzel text-xs">
              <div className="p-4 rounded-xl border border-zinc-800 bg-[#16161A]">
                <div className="font-bold text-amber-400 text-sm mb-1">Матовые пасты и глины</div>
                <p className="text-slate-400 font-sans text-[11px]">Естественная фиксация без блеска и склеивания волос.</p>
              </div>
              <div className="p-4 rounded-xl border border-zinc-800 bg-[#16161A]">
                <div className="font-bold text-amber-400 text-sm mb-1">Масла для бороды</div>
                <p className="text-slate-400 font-sans text-[11px]">Смягчение жесткой щетины и снятие раздражения после бритья.</p>
              </div>
            </div>
          </div>

          <div className="lg:col-span-6 p-8 rounded-3xl bg-[#141418] border border-amber-600/30 space-y-4">
            <div className="text-amber-400 font-cinzel font-bold text-lg">Приобретение домашнего ухода</div>
            <p className="text-slate-300 text-xs leading-relaxed">
              Все средства, используемые мастером во время вашего ритуала, можно приобрести у администратора клуба с персональным подбором под ваш тип волос и кожи.
            </p>
            <a
              href={waUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 rounded bg-zinc-900 border border-amber-600/50 hover:bg-amber-600 text-white font-cinzel text-xs font-bold transition"
            >
              <span>Уточнить наличие в WhatsApp</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>
      </section>

      {/* Direct Contact Section */}
      <section id="contact" className="py-20 px-6 max-w-7xl mx-auto">
        <div className="rounded-3xl border border-zinc-700 bg-[#141418] p-8 sm:p-12 text-white">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-7 space-y-6">
              <span className="text-xs font-cinzel text-amber-400 uppercase tracking-wider block">Запись к мастеру</span>
              <h2 className="text-3xl sm:text-4xl font-bold font-cinzel">
                Запишитесь в ADAT Barbershop в Бишкеке
              </h2>
              <p className="text-slate-300 text-sm leading-relaxed">
                Напишите нам в WhatsApp удобный день и время. Администратор мгновенно подберет свободного Top Barber или Brand Master и забронирует за вами кресло.
              </p>

              <div className="space-y-3 text-xs font-cinzel">
                <div className="flex items-center gap-3 text-slate-300">
                  <MapPin className="w-4 h-4 text-amber-400 shrink-0" />
                  <span>г. Бишкек, ул. Токтогула, 191 (между ул. Манаса и ул. Исанова)</span>
                </div>
                <div className="flex items-center gap-3 text-slate-300">
                  <Phone className="w-4 h-4 text-amber-400 shrink-0" />
                  <a href="tel:+996559191191" className="hover:underline font-bold text-amber-400">+996 559 191 191</a>
                </div>
                <div className="flex items-center gap-3 text-slate-300">
                  <Globe className="w-4 h-4 text-amber-400 shrink-0" />
                  <span>Instagram: @adat_barbershop</span>
                </div>
              </div>
            </div>

            <div className="lg:col-span-5 p-6 rounded-2xl border border-zinc-800 bg-[#0A0A0D] space-y-4">
              <div className="text-sm font-bold text-amber-300 font-cinzel">Быстрая запись в WhatsApp</div>
              <p className="text-xs text-slate-400">
                Нажмите для прямого бронирования свободного времени:
              </p>
              <a
                href={waUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-4 rounded bg-amber-600 hover:bg-amber-500 text-white font-cinzel font-bold text-xs transition flex items-center justify-center gap-2 shadow-lg"
              >
                <MessageSquare className="w-4 h-4" />
                <span>Написать в WhatsApp</span>
              </a>
              <a
                href="tel:+996559191191"
                className="w-full py-3 rounded border border-zinc-700 text-slate-200 hover:bg-[#1A1A22] font-cinzel text-xs transition flex items-center justify-center gap-2"
              >
                <Phone className="w-3.5 h-3.5" />
                <span>Позвонить администратору</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-zinc-800 bg-[#060608] py-8 px-6 text-xs text-slate-500 font-cinzel">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
          <div>
            <strong>ADAT GENTLEMEN'S CLUB</strong> • Бишкек, ул. Токтогула, 191 • +996 559 191 191
          </div>
          <div>Instagram: @adat_barbershop • Все права защищены</div>
        </div>
      </footer>
    </div>
  );
};
