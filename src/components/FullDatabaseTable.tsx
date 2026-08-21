import React, { useState, useMemo } from 'react';
import type { Company } from '../types';
import { ALL_COMPANIES, TOP_20_CLIENTS } from '../data/businesses';
import { Search, Phone, ArrowUpRight, Sparkles, MapPin } from 'lucide-react';

interface Props {
  onSelectTopClient: (slug: string) => void;
}

export const FullDatabaseTable: React.FC<Props> = ({ onSelectTopClient }) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCity, setSelectedCity] = useState<string>('Все');
  const [selectedCategory, setSelectedCategory] = useState<string>('Все');
  const [onlyTop20, setOnlyTop20] = useState<boolean>(false);

  const cities = useMemo(() => {
    const list = Array.from(new Set(ALL_COMPANIES.map(c => c.city)));
    return ['Все', ...list.sort()];
  }, []);

  const categories = useMemo(() => {
    const list = Array.from(new Set(ALL_COMPANIES.map(c => c.category)));
    return ['Все', ...list.sort()];
  }, []);

  const filteredCompanies = useMemo(() => {
    return ALL_COMPANIES.filter(c => {
      const matchSearch = 
        c.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        c.city.toLowerCase().includes(searchQuery.toLowerCase()) ||
        c.category.toLowerCase().includes(searchQuery.toLowerCase()) ||
        c.reason.toLowerCase().includes(searchQuery.toLowerCase()) ||
        (c.address && c.address.toLowerCase().includes(searchQuery.toLowerCase()));

      const matchCity = selectedCity === 'Все' || c.city === selectedCity;
      const matchCategory = selectedCategory === 'Все' || c.category === selectedCategory;
      const matchTop20 = !onlyTop20 || c.isTop20;

      return matchSearch && matchCity && matchCategory && matchTop20;
    });
  }, [searchQuery, selectedCity, selectedCategory, onlyTop20]);

  return (
    <div className="bg-slate-900 border border-slate-800 rounded-2xl overflow-hidden shadow-2xl">
      {/* Header & Controls */}
      <div className="p-6 border-b border-slate-800 bg-slate-950/70">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div>
            <div className="flex items-center gap-2 mb-1">
              <span className="px-2.5 py-0.5 rounded-full text-xs font-bold bg-amber-500/20 text-amber-400 border border-amber-500/30">
                Полная база: 70 реальных компаний
              </span>
              <span className="px-2.5 py-0.5 rounded-full text-xs font-bold bg-emerald-500/20 text-emerald-400 border border-emerald-500/30">
                20 готовых лендингов
              </span>
            </div>
            <h2 className="text-xl font-bold text-white flex items-center gap-2">
              Реестр потенциальных B2B-клиентов Кыргызстана
            </h2>
            <p className="text-xs text-slate-400 mt-0.5">
              Все телефоны (+996), адреса и профили проверены по открытым источникам и 2ГИС.
            </p>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={() => setOnlyTop20(!onlyTop20)}
              className={`px-3.5 py-2 rounded-xl text-xs font-bold border transition flex items-center gap-1.5 ${
                onlyTop20
                  ? 'bg-amber-500 text-black border-amber-400 shadow-lg shadow-amber-500/20'
                  : 'bg-slate-900 text-slate-300 border-slate-700 hover:bg-slate-800'
              }`}
            >
              <Sparkles className="w-4 h-4" />
              <span>Только TOP-20 (готовые концепты)</span>
            </button>
          </div>
        </div>

        {/* Filters */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 mt-4 pt-4 border-t border-slate-800/80">
          <div className="relative">
            <Search className="w-4 h-4 text-slate-400 absolute left-3 top-3" />
            <input
              type="text"
              placeholder="Поиск по названию, городу, услугам..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full bg-slate-900 border border-slate-700 text-white rounded-xl pl-9 pr-4 py-2 text-xs focus:ring-2 focus:ring-amber-500 outline-none"
            />
          </div>

          <div className="relative">
            <select
              value={selectedCity}
              onChange={(e) => setSelectedCity(e.target.value)}
              className="w-full bg-slate-900 border border-slate-700 text-slate-200 rounded-xl px-3 py-2 text-xs focus:ring-2 focus:ring-amber-500 outline-none cursor-pointer"
            >
              {cities.map(c => (
                <option key={c} value={c}>Город: {c}</option>
              ))}
            </select>
          </div>

          <div className="relative">
            <select
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(e.target.value)}
              className="w-full bg-slate-900 border border-slate-700 text-slate-200 rounded-xl px-3 py-2 text-xs focus:ring-2 focus:ring-amber-500 outline-none cursor-pointer"
            >
              {categories.map(c => (
                <option key={c} value={c}>Ниша: {c}</option>
              ))}
            </select>
          </div>
        </div>
      </div>

      {/* Table */}
      <div className="overflow-x-auto max-h-[600px] overflow-y-auto">
        <table className="w-full text-left text-xs">
          <thead className="sticky top-0 bg-slate-950 text-slate-400 font-semibold border-b border-slate-800 uppercase tracking-wider z-10">
            <tr>
              <th className="py-3 px-4 w-12 text-center">#</th>
              <th className="py-3 px-4">Компания / Город</th>
              <th className="py-3 px-4">Ниша & Адрес</th>
              <th className="py-3 px-4">Контакты (+996)</th>
              <th className="py-3 px-3 text-center">Digital Score</th>
              <th className="py-3 px-3 text-center">Потенциал</th>
              <th className="py-3 px-4">Причина для Outreach</th>
              <th className="py-3 px-4 text-center">Действие</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-800/60 font-sans">
            {filteredCompanies.map((c) => {
              const topClient = TOP_20_CLIENTS.find(t => t.id === c.id);
              const waNumber = c.phone.replace(/[^0-9]/g, '');

              return (
                <tr 
                  key={c.id}
                  className={`hover:bg-slate-800/50 transition ${c.isTop20 ? 'bg-amber-500/[0.03]' : ''}`}
                >
                  <td className="py-3.5 px-4 text-center font-mono text-slate-400">
                    {c.isTop20 ? (
                      <span className="inline-flex items-center justify-center w-6 h-6 rounded-full bg-amber-500/20 text-amber-400 font-bold border border-amber-500/30 text-[11px]">
                        {c.id}
                      </span>
                    ) : (
                      c.id
                    )}
                  </td>
                  <td className="py-3.5 px-4">
                    <div className="font-bold text-white text-sm flex items-center gap-1.5">
                      {c.name}
                      {c.isTop20 && (
                        <span className="px-1.5 py-0.5 rounded text-[10px] font-bold bg-amber-400 text-black">
                          TOP-20
                        </span>
                      )}
                    </div>
                    <div className="text-slate-400 flex items-center gap-1 mt-0.5">
                      <MapPin className="w-3 h-3 text-red-400" />
                      <span>{c.city}</span>
                    </div>
                  </td>
                  <td className="py-3.5 px-4">
                    <span className="inline-block px-2 py-0.5 rounded bg-slate-800 text-slate-300 font-medium text-[11px] mb-1">
                      {c.category}
                    </span>
                    <p className="text-slate-400 text-[11px] line-clamp-1">{c.address || 'Центр города'}</p>
                  </td>
                  <td className="py-3.5 px-4 font-mono">
                    <div className="text-slate-200 font-semibold">{c.phone}</div>
                    <div className="text-slate-400 text-[11px] mt-0.5">{c.instagram}</div>
                  </td>
                  <td className="py-3.5 px-3 text-center">
                    <span className={`inline-block px-2 py-0.5 rounded font-bold text-[11px] ${
                      c.digitalScore <= 3 ? 'bg-rose-500/20 text-rose-400 border border-rose-500/30' : 'bg-amber-500/20 text-amber-400'
                    }`}>
                      {c.digitalScore}/10 (Слабый)
                    </span>
                  </td>
                  <td className="py-3.5 px-3 text-center">
                    <span className={`inline-block px-2 py-0.5 rounded font-bold text-[11px] ${
                      c.potentialScore >= 9 ? 'bg-emerald-500/20 text-emerald-400 border border-emerald-500/30' : 'bg-cyan-500/20 text-cyan-400'
                    }`}>
                      {c.potentialScore}/10 (Высокий)
                    </span>
                  </td>
                  <td className="py-3.5 px-4 text-slate-300 max-w-xs text-[11px] leading-relaxed">
                    {c.reason}
                  </td>
                  <td className="py-3.5 px-4 text-center">
                    {topClient ? (
                      <button
                        onClick={() => onSelectTopClient(topClient.slug)}
                        className="inline-flex items-center gap-1 px-3 py-1.5 rounded-lg bg-amber-500 hover:bg-amber-400 text-black font-bold text-[11px] transition shadow-md shadow-amber-500/20 whitespace-nowrap"
                      >
                        <span>Смотреть лендинг</span>
                        <ArrowUpRight className="w-3.5 h-3.5" />
                      </button>
                    ) : (
                      <a
                        href={`https://wa.me/${waNumber}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1 px-2.5 py-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-300 font-medium text-[11px] transition border border-slate-700 whitespace-nowrap"
                      >
                        <Phone className="w-3 h-3 text-emerald-400" />
                        <span>Написать</span>
                      </a>
                    )}
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>

      {/* Footer info */}
      <div className="p-4 bg-slate-950 border-t border-slate-800 text-xs text-slate-400 flex flex-col sm:flex-row items-center justify-between gap-2">
        <div>
          Показано <strong>{filteredCompanies.length}</strong> из <strong>{ALL_COMPANIES.length}</strong> компаний по Кыргызстану.
        </div>
        <div className="text-slate-500">
          Данные актуализированы по состоянию на 2026 год.
        </div>
      </div>
    </div>
  );
};
