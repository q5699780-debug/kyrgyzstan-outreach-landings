import React from 'react';
import { Crown, Check, Phone, MessageSquare, ArrowRight, MapPin, Globe, Users, Sparkles, UtensilsCrossed, Calendar } from 'lucide-react';
import { LuarLogo } from '../components/BrandLogos';

export const LuarBanquetHall: React.FC = () => {
  const banquetTiers = [
    {
      name: 'Меню «Royal Palace»: Свадебный Дасторкон',
      badge: 'Выбор молодоженов',
      desc: 'Королевский свадебный стол: запеченный ягненок целиком, семга на углях, 7 видов авторских салатов, фруктовые башни и десертный кэнди-бар.',
      features: ['Традиционный бешбармак из отборной конины', 'Горячий куурдак и самса из тандыра', 'Национальные напитки (кымыз, бозо, чалап) без ограничений', 'Свадебный номер люкс для молодоженов в подарок'],
      tag: 'До 300 гостей',
    },
    {
      name: 'Меню «Imperial Gold»: Кыз Узатуу & Юбилеи',
      badge: 'Изысканный формат',
      desc: 'Праздничное меню для торжественных проводов невесты: каре ягненка, стейки из мраморной говядины, шоколадный фонтан и приветственный фуршет.',
      features: ['Приветственный фуршет с живой скрипичной музыкой', 'Премиальная сервировка императорским фарфором', 'Тяжелый сценический дым на танец в подарок', 'Персональный банкетный менеджер'],
      tag: 'От 100 до 250 гостей',
    },
    {
      name: 'Меню «Classic Grand»: Суннот Той & Тушоо Той',
      badge: 'Семейные традиции',
      desc: 'Традиционное застолье для больших семейных праздников: сочное мясо по-казахски и по-кыргызски, свежая выпечка, боорсоки и детское меню.',
      features: ['Детская анимационная зона и сладкий стол', 'Подача блюд в медной национальной посуде', 'Сценический световой и звуковой комплекс 4K', 'Большой охраняемый паркинг на 150 авто'],
      tag: 'От 80 до 300 гостей',
    },
    {
      name: 'Организация свадьбы под ключ (Event Full Service)',
      badge: 'Все включено',
      desc: 'Полный комплекс: оформление зала живыми цветами, ведущие, шоу-программа, фото- и видеосъемка 4K и координация праздника.',
      features: ['Авторская флористика и президиум Төр', 'Ведущие на кыргызском и русском языках', 'Светодиодные LED экраны высокого разрешения', 'Генератор спецэффектов и конфетти'],
      tag: 'Комплексный сервис',
    },
  ];

  const waMessage = `Добрый день, дворец торжеств Luar в Канте! Планируем мероприятие в 2026 году. Подскажите, пожалуйста, свободные даты и варианты банкетного меню!`;
  const waUrl = `https://wa.me/996550114477?text=${encodeURIComponent(waMessage)}`;

  return (
    <div className="min-h-screen bg-[#FAF7F2] text-[#2C241E] font-sans selection:bg-amber-600 selection:text-white">
      {/* Top Banner */}
      <header className="border-b border-amber-900/10 bg-[#1A1410] px-6 py-2.5 text-xs text-amber-300 font-cinzel">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-3">
            <Crown className="w-4 h-4 text-amber-400" />
            <span>ДВОРЕЦ ТОРЖЕСТВ «LUAR» • г. Кант, ул. Ленина, 125 • Вместимость до 300 персон</span>
          </div>
          <div className="hidden sm:flex items-center gap-6 text-amber-200/80 font-sans text-xs">
            <span>Свадебный номер в подарок при заказе банкета</span>
            <a href="tel:+996550114477" className="text-amber-400 font-bold hover:underline">+996 550 114 477</a>
          </div>
        </div>
      </header>

      {/* Nav */}
      <nav className="sticky top-11 z-40 border-b border-amber-900/10 bg-white/95 backdrop-blur px-6 py-4">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-3">
            <LuarLogo className="h-10 w-auto" />
          </div>

          <div className="hidden md:flex items-center gap-8 text-xs font-cinzel font-bold uppercase tracking-wider text-[#6B5E54]">
            <a href="#about" className="hover:text-amber-800 transition">О комплексе</a>
            <a href="#menu" className="hover:text-amber-800 transition">Банкетное меню</a>
            <a href="#hall" className="hover:text-amber-800 transition">Хрустальный зал</a>
            <a href="#contact" className="hover:text-amber-800 transition">Контакты</a>
          </div>

          <a
            href={waUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="px-5 py-2.5 rounded-full bg-amber-600 hover:bg-amber-500 text-white font-cinzel font-bold text-xs transition flex items-center gap-2 shadow-md shadow-amber-900/20"
          >
            <MessageSquare className="w-3.5 h-3.5" />
            <span>Узнать свободные даты</span>
          </a>
        </div>
      </nav>

      {/* Full-Bleed Hero Banner */}
      <section className="relative min-h-[580px] flex items-center border-b border-amber-900/10 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src="/images/luar.jpg"
            alt="Luar Banquet Hall Kant"
            className="w-full h-full object-cover object-center brightness-[0.45] scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#1A1410] via-[#1A1410]/80 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#FAF7F2] via-transparent to-transparent" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-6 py-20 w-full">
          <div className="max-w-2xl space-y-6 text-white">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-amber-400/40 bg-amber-400/10 text-amber-300 text-xs font-cinzel">
              <Crown className="w-3.5 h-3.5" />
              <span>Главная банкетная площадка Чуйской области • Зал до 300 гостей</span>
            </div>

            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-bold tracking-tight font-cinzel leading-[1.12]">
              Роскошный праздник, о котором будут говорить годами
            </h1>

            <p className="text-amber-100/90 text-base sm:text-lg leading-relaxed">
              Монументальные хрустальные люстры, изысканный банкетный дасторкон от шеф-повара, сценический концертный свет и безупречное обслуживание свадеб, кыз узатуу и юбилеев в Канте.
            </p>

            <div className="flex flex-col sm:flex-row gap-3 pt-2 font-cinzel text-xs">
              <a
                href="#contact"
                className="px-7 py-4 rounded-full bg-amber-600 hover:bg-amber-500 text-white font-bold flex items-center justify-center gap-2 shadow-lg"
              >
                <span>Узнать свободные даты в WhatsApp</span>
                <ArrowRight className="w-4 h-4" />
              </a>
              <a
                href="#menu"
                className="px-7 py-4 rounded-full border border-amber-300/40 bg-black/50 hover:bg-black/80 text-white font-medium flex items-center justify-center"
              >
                <span>Смотреть варианты меню</span>
              </a>
            </div>

            <div className="grid grid-cols-3 gap-6 pt-6 border-t border-white/20 font-cinzel text-xs text-amber-200">
              <div>
                <div className="text-2xl font-bold text-amber-400">300 Мест</div>
                <div className="text-amber-200/70 text-[11px] font-sans mt-0.5">Вместимость зала</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-amber-400">4K LED</div>
                <div className="text-amber-200/70 text-[11px] font-sans mt-0.5">Сценические экраны</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-amber-400">150 Авто</div>
                <div className="text-amber-200/70 text-[11px] font-sans mt-0.5">Охраняемый паркинг</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-6 max-w-7xl mx-auto border-b border-amber-900/10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-6 space-y-6">
            <span className="text-xs font-cinzel font-bold text-amber-800 uppercase tracking-wider block">О дворце торжеств Luar</span>
            <h2 className="text-2xl sm:text-4xl font-bold text-[#1A1410] font-cinzel">
              Безупречная атмосфера королевского праздника
            </h2>
            <p className="text-[#5C4F44] text-sm sm:text-base leading-relaxed">
              <strong>Luar Banquet Palace</strong> — это монументальный банкетный комплекс в городе Кант, созданный для проведения торжеств самого высокого уровня. Архитектура зала с высокими потолками и каскадными хрустальными люстрами наполняет праздник светом и величием.
            </p>
            <p className="text-[#5C4F44] text-sm leading-relaxed">
              Наша команда поваров славится мастерским приготовлением национальных блюд из свежего фермерского мяса и европейских деликатесов. Каждое блюдо подается с пылу с жару в оговоренное с организаторами время.
            </p>

            <div className="grid grid-cols-2 gap-4 pt-2 font-cinzel text-xs">
              <div className="p-4 rounded-xl border border-amber-900/15 bg-white">
                <div className="font-bold text-[#1A1410] text-sm mb-1">Стол Төр</div>
                <p className="text-[#6B5E54] font-sans text-[11px]">Особое оформление и VIP-обслуживание для старейшин и сватов.</p>
              </div>
              <div className="p-4 rounded-xl border border-amber-900/15 bg-white">
                <div className="font-bold text-[#1A1410] text-sm mb-1">Подарок паре</div>
                <p className="text-[#6B5E54] font-sans text-[11px]">Номер для молодоженов и тяжелый дым на первый танец.</p>
              </div>
            </div>
          </div>

          <div className="lg:col-span-6">
            <div className="rounded-2xl overflow-hidden border border-amber-900/15 bg-white p-2 shadow-xl">
              <img
                src="/images/luar.jpg"
                alt="Хрустальный банкетный зал Luar Кант"
                className="w-full h-auto object-cover rounded-xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Menu Showcase */}
      <section id="menu" className="py-20 px-6 max-w-7xl mx-auto border-b border-amber-900/10 space-y-12">
        <div className="max-w-2xl space-y-2">
          <span className="text-xs font-cinzel font-bold text-amber-800 uppercase tracking-wider block">Банкетный дасторкон</span>
          <h2 className="text-2xl sm:text-3xl font-bold text-[#1A1410] font-cinzel">
            Варианты праздничного меню
          </h2>
          <p className="text-[#6B5E54] text-sm">
            Подберем меню под формат вашего тоя: от традиционного свадебного застолья до современного европейского банкета.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {banquetTiers.map((tier, idx) => (
            <div
              key={idx}
              className="rounded-2xl border border-amber-900/15 bg-white p-6 hover:border-amber-700/40 transition flex flex-col justify-between space-y-6 shadow-md"
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="px-3 py-1 rounded-full bg-amber-100 text-amber-900 text-xs font-cinzel font-bold">
                    {tier.badge}
                  </span>
                  <span className="text-xs font-sans text-[#6B5E54]">{tier.tag}</span>
                </div>

                <div>
                  <h3 className="text-lg font-bold text-[#1A1410] font-cinzel">{tier.name}</h3>
                  <p className="text-xs text-[#5C4F44] leading-relaxed mt-2">{tier.desc}</p>
                </div>

                <ul className="space-y-2 text-xs text-[#2C241E] border-t border-amber-900/10 pt-4">
                  {tier.features.map((f, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <Check className="w-3.5 h-3.5 text-amber-700 shrink-0 mt-0.5" />
                      <span>{f}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="pt-4 border-t border-amber-900/10 flex items-center justify-between">
                <span className="text-xs text-[#6B5E54]">Индивидуальный расчет на персону</span>
                <a
                  href={`https://wa.me/996550114477?text=${encodeURIComponent(`Добрый день, Luar! Хотим узнать смету по меню: «${tier.name}».`)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2 rounded-full bg-amber-600 hover:bg-amber-500 text-white text-xs font-cinzel font-bold transition flex items-center gap-1.5"
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
        <div className="rounded-3xl border border-amber-900/20 bg-[#1A1410] p-8 sm:p-12 text-white">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-7 space-y-6">
              <span className="text-xs font-cinzel text-amber-400 uppercase tracking-wider block">Бронирование дат</span>
              <h2 className="text-3xl sm:text-4xl font-bold font-cinzel">
                Забронируйте лучшую дату для вашего тоя
              </h2>
              <p className="text-amber-200/80 text-sm leading-relaxed">
                Свяжитесь с банкетным менеджером в WhatsApp — мы проверим занятость зала на свадебный сезон 2026, организуем дегустацию блюд и проведем персональную экскурсию по комплексу.
              </p>

              <div className="space-y-3 text-xs font-cinzel">
                <div className="flex items-center gap-3 text-amber-200">
                  <MapPin className="w-4 h-4 text-amber-400 shrink-0" />
                  <span>г. Кант, ул. Ленина, 125 (удобный заезд с трассы Бишкек — Токмок)</span>
                </div>
                <div className="flex items-center gap-3 text-amber-200">
                  <Phone className="w-4 h-4 text-amber-400 shrink-0" />
                  <a href="tel:+996550114477" className="hover:underline font-bold text-amber-400">+996 550 114 477</a>
                </div>
                <div className="flex items-center gap-3 text-amber-200">
                  <Globe className="w-4 h-4 text-amber-400 shrink-0" />
                  <span>Instagram: @luar_kant</span>
                </div>
              </div>
            </div>

            <div className="lg:col-span-5 p-6 rounded-2xl border border-amber-900/30 bg-[#251D17] space-y-4">
              <div className="text-sm font-bold text-amber-300 font-cinzel">Связь с администратором в WhatsApp</div>
              <p className="text-xs text-amber-200/70">
                Нажмите для прямого бронирования даты и просмотра зала:
              </p>
              <a
                href={waUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-4 rounded-full bg-amber-500 hover:bg-amber-400 text-black font-cinzel font-bold text-xs transition flex items-center justify-center gap-2 shadow-lg"
              >
                <MessageSquare className="w-4 h-4" />
                <span>Написать в WhatsApp</span>
              </a>
              <a
                href="tel:+996550114477"
                className="w-full py-3 rounded-full border border-amber-400/40 text-amber-200 hover:bg-[#322820] font-cinzel text-xs transition flex items-center justify-center gap-2"
              >
                <Phone className="w-3.5 h-3.5" />
                <span>Позвонить в комплекс</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-amber-900/10 bg-[#120D0A] py-8 px-6 text-xs text-amber-200/60 font-cinzel">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
          <div>
            <strong>ДВОРЕЦ ТОРЖЕСТВ LUAR</strong> • г. Кант, ул. Ленина, 125 • +996 550 114 477
          </div>
          <div>Instagram: @luar_kant • Все права защищены</div>
        </div>
      </footer>
    </div>
  );
};
