import React, { useState } from 'react';
import { GraduationCap, Globe, Award, Check, Phone, MessageSquare, ArrowRight, BookOpen, Star } from 'lucide-react';

export const LogosEducation: React.FC = () => {
  const [targetCountry, setTargetCountry] = useState<'usa' | 'germany' | 'korea' | 'hungary' | 'turkey'>('usa');
  const [ieltsScore, setIeltsScore] = useState<string>('6.5');
  const [gpa, setGpa] = useState<string>('4.8');

  const countries = {
    usa: { name: 'США (Full Financial Aid)', grantSize: 'до $80,000 / год', desc: 'Поступление в топ-100 университетов США с полным покрытием обучения, проживания и питания' },
    germany: { name: 'Германия (DAAD / Бесплатные вузы)', grantSize: '100% бесплатное обучение', desc: 'Государственные университеты Германии на немецком и английском языках, виза Ausbildung' },
    korea: { name: 'Южная Корея (Грант GKS)', grantSize: '100% грант + стипендия $900/мес', desc: 'Правительственная стипендия Global Korea Scholarship с бесплатным перелетом' },
    hungary: { name: 'Венгрия (Stipendium Hungaricum)', grantSize: '100% грант правительства', desc: 'Диплом европейского образца, бесплатное общежитие и медицинская страховка' },
    turkey: { name: 'Турция (Türkiye Bursları)', grantSize: 'Полный грант + стипендия', desc: 'Учеба в ведущих университетах Стамбула и Анкары' },
  };

  const waMessage = `Здравствуйте, Logos Education Osh! Я прошел оценку шансов на грант: Страна: ${countries[targetCountry].name}, Мой уровень IELTS: ${ieltsScore}, Средний балл: ${gpa}. Хочу записаться на бесплатную консультацию с ментором по поступлению в Оше.`;
  const waUrl = `https://wa.me/996556800200?text=${encodeURIComponent(waMessage)}`;

  return (
    <div className="min-h-screen bg-[#0F172A] text-slate-100 font-sans selection:bg-amber-500 selection:text-black">
      {/* Top Bar */}
      <div className="bg-[#0A0F1D] text-amber-400 py-2 px-6 text-xs flex items-center justify-between border-b border-slate-800 font-mono">
        <div>Агентство международного образования Logos • г. Ош, ул. Алымбека Датка, 170</div>
        <div className="hidden sm:flex items-center gap-4 text-slate-300">
          <span>Стипендии 2026 года</span>
          <a href="tel:+996556800200" className="text-amber-400 font-bold hover:underline">+996 556 800 200</a>
        </div>
      </div>

      {/* Nav */}
      <nav className="bg-[#0F172A]/90 backdrop-blur-md sticky top-11 z-40 border-b border-slate-800 px-6 py-4">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-amber-500 text-black flex items-center justify-center font-bold text-xl">
              🎓
            </div>
            <div>
              <span className="text-xl font-bold tracking-tight text-white block">LOGOS EDUCATION</span>
              <span className="text-[10px] text-amber-400 font-semibold tracking-widest uppercase font-mono">Study Abroad • Osh Hub</span>
            </div>
          </div>

          <div className="hidden md:flex items-center gap-8 text-xs font-semibold text-slate-300">
            <a href="#grants" className="hover:text-amber-400 transition">Грантовые программы</a>
            <a href="#calculator" className="hover:text-amber-400 transition">Тест шансов на грант</a>
            <a href="#results" className="hover:text-amber-400 transition">Кейсы студентов</a>
          </div>

          <a
            href={waUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="px-5 py-2.5 rounded-xl bg-amber-500 hover:bg-amber-400 text-black font-bold text-xs transition shadow-lg shadow-amber-500/20 flex items-center gap-2"
          >
            <MessageSquare className="w-3.5 h-3.5" />
            <span>Консультация в WhatsApp</span>
          </a>
        </div>
      </nav>

      {/* Hero */}
      <section className="relative pt-16 pb-24 px-6 overflow-hidden border-b border-slate-800">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-7 space-y-6">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-slate-900 border border-amber-500/40 text-amber-400 text-xs font-mono">
              <Award className="w-4 h-4 text-amber-400" />
              <span>Более $4,200,000 выигранных стипендий студентами из Оша</span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white leading-[1.15]">
              Твой путь к 100% гранту в ведущих университетах мира
            </h1>

            <p className="text-slate-300 text-base sm:text-lg leading-relaxed max-w-2xl">
              Помогаем школьникам и студентам из Кыргызстана поступить на бесплатное обучение в США, Европу и Азию. Полное сопровождение: от сдачи IELTS/SAT до подачи на визу и вылета.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 pt-2">
              <a
                href="#calculator"
                className="px-7 py-3.5 rounded-xl bg-amber-500 hover:bg-amber-400 text-black font-bold text-sm transition shadow-xl shadow-amber-500/20 flex items-center justify-center gap-2"
              >
                <span>Оценить свои шансы на грант</span>
                <ArrowRight className="w-4 h-4" />
              </a>
              <a
                href="tel:+996556800200"
                className="px-7 py-3.5 rounded-xl bg-slate-900 hover:bg-slate-800 text-slate-200 font-semibold text-sm transition border border-slate-700 flex items-center justify-center"
              >
                <span>Записаться в офис в Оше</span>
              </a>
            </div>
          </div>

          <div className="lg:col-span-5">
            <div className="p-8 rounded-3xl bg-[#1E293B] border border-slate-700 shadow-2xl space-y-4">
              <div className="flex justify-between items-center pb-3 border-b border-slate-700 text-xs">
                <span className="text-white font-bold">Гарантии по договору:</span>
                <span className="text-emerald-400 font-mono font-bold">100% Результат</span>
              </div>
              <ul className="space-y-2.5 text-xs text-slate-300">
                <li className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>Подача документов сразу в 5–8 целевых университетов</span>
                </li>
                <li className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>Написание мотивационных писем с носителями языка</span>
                </li>
                <li className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>Подготовка к интервью в посольстве США и стран ЕС</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Grant Calculator */}
      <section id="calculator" className="py-20 px-6 max-w-7xl mx-auto">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="text-xs font-mono font-bold uppercase tracking-widest text-amber-400 block mb-2">Grant Probability Quiz</span>
          <h2 className="text-3xl sm:text-4xl font-bold text-white">Оцените шансы на 100% грант</h2>
        </div>

        <div className="max-w-4xl mx-auto bg-[#1E293B] border border-slate-700 rounded-3xl p-8 shadow-2xl">
          <div className="space-y-6">
            <div>
              <label className="block text-xs font-bold uppercase text-slate-400 mb-3">1. Желаемая страна обучения:</label>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
                {Object.entries(countries).map(([k, c]) => (
                  <button
                    key={k}
                    onClick={() => setTargetCountry(k as any)}
                    className={`p-4 rounded-2xl text-left border transition ${
                      targetCountry === k
                        ? 'bg-amber-500/20 border-amber-400 text-white'
                        : 'bg-slate-900 border-slate-800 text-slate-300'
                    }`}
                  >
                    <div className="font-bold text-xs text-white mb-1">{c.name}</div>
                    <div className="text-[10px] text-amber-400 font-mono mb-1">{c.grantSize}</div>
                    <p className="text-[11px] text-slate-400 line-clamp-2">{c.desc}</p>
                  </button>
                ))}
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-bold uppercase text-slate-400 mb-2">Ваш балл IELTS / Duolingo:</label>
                <select
                  value={ieltsScore}
                  onChange={(e) => setIeltsScore(e.target.value)}
                  className="w-full bg-slate-900 border border-slate-700 text-white rounded-xl px-4 py-2.5 text-xs outline-none focus:ring-2 focus:ring-amber-500"
                >
                  <option value="5.5">IELTS 5.5 / B1</option>
                  <option value="6.5">IELTS 6.5 / B2 (Оптимально)</option>
                  <option value="7.5">IELTS 7.5+ / C1 (Для топ-грантов)</option>
                  <option value="none">Пока нет сертификата (нужна подготовка)</option>
                </select>
              </div>

              <div>
                <label className="block text-xs font-bold uppercase text-slate-400 mb-2">Средний балл аттестата / диплома (GPA):</label>
                <select
                  value={gpa}
                  onChange={(e) => setGpa(e.target.value)}
                  className="w-full bg-slate-900 border border-slate-700 text-white rounded-xl px-4 py-2.5 text-xs outline-none focus:ring-2 focus:ring-amber-500"
                >
                  <option value="4.0">GPA 3.8 – 4.2 (Хорошо)</option>
                  <option value="4.8">GPA 4.5 – 5.0 (Отлично / Красный аттестат)</option>
                </select>
              </div>
            </div>

            <div className="p-6 rounded-2xl bg-slate-900 border border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-4">
              <div>
                <span className="text-xs text-slate-400">Шанс получения полного покрытия расходов:</span>
                <div className="text-2xl font-bold text-emerald-400 font-mono">
                  Высокий (до 94%)
                </div>
              </div>

              <a
                href={waUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto px-7 py-3.5 rounded-xl bg-amber-500 hover:bg-amber-400 text-black font-bold text-xs transition flex items-center justify-center gap-2"
              >
                <MessageSquare className="w-4 h-4" />
                <span>Получить стратегию поступления в WhatsApp</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-6 border-t border-slate-800 bg-[#0A0F1D] text-xs text-slate-500">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
          <div>
            <strong>Logos Education Osh</strong> • г. Ош, ул. Алымбека Датка, 170 • Тел: +996 556 800 200
          </div>
          <div>Instagram: @logos_osh</div>
        </div>
      </footer>
    </div>
  );
};
