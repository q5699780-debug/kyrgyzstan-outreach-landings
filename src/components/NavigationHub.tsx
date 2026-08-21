import React, { useState, useMemo } from 'react';
import type { TopClientDetails } from '../types';
import { TOP_20_CLIENTS } from '../data/businesses';
import { FullDatabaseTable } from './FullDatabaseTable';
import { OutreachScriptModal } from './OutreachScriptModal';
import { BrandLogo } from './BrandLogos';
import { 
  Sparkles, 
  MapPin, 
  ArrowUpRight, 
  MessageSquare, 
  Database, 
  Search,
  Building,
  Eye
} from 'lucide-react';

interface NavigationHubProps {
  onSelectClient: (client: TopClientDetails) => void;
  selectedCity?: string;
  onSelectCity?: (city: string) => void;
}

export const NavigationHub: React.FC<NavigationHubProps> = ({ 
  onSelectClient,
  selectedCity = 'all',
  onSelectCity
}) => {
  const [activeTab, setActiveTab] = useState<'top20' | 'database'>('top20');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [localCity, setLocalCity] = useState<string>(selectedCity);
  const [modalClient, setModalClient] = useState<TopClientDetails | null>(null);

  const handleCityChange = (city: string) => {
    setLocalCity(city);
    if (onSelectCity) onSelectCity(city);
  };

  const cities = [
    { id: 'all', label: 'Все 11 регионов КР', count: 70 },
    { id: 'Бишкек', label: 'Бишкек', count: 24 },
    { id: 'Ош', label: 'Ош', count: 18 },
    { id: 'Каракол', label: 'Каракол & Иссык-Куль', count: 12 },
    { id: 'Джалал-Абад', label: 'Джалал-Абад', count: 4 },
    { id: 'Нарын', label: 'Нарын', count: 3 },
    { id: 'Талас', label: 'Талас', count: 3 },
    { id: 'Баткен', label: 'Баткен', count: 2 },
    { id: 'Кант', label: 'Кант', count: 2 },
    { id: 'Токмок', label: 'Токмок', count: 1 },
    { id: 'Кара-Балта', label: 'Кара-Балта', count: 1 },
  ];

  const categories = [
    { id: 'all', label: 'Все отрасли' },
    { id: 'auto', label: 'Авто & Детейлинг' },
    { id: 'medical', label: 'Медицина & Стоматология' },
    { id: 'tourism', label: 'Туризм & Отели' },
    { id: 'construction', label: 'Строительство & Ремонт' },
    { id: 'restaurant', label: 'Рестораны & Банкеты' },
    { id: 'furniture', label: 'Мебель & Интерьер' },
  ];

  const filteredClients = useMemo(() => {
    return TOP_20_CLIENTS.filter(client => {
      const matchesSearch = 
        client.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        client.city.toLowerCase().includes(searchQuery.toLowerCase()) ||
        client.category.toLowerCase().includes(searchQuery.toLowerCase()) ||
        client.tagline.toLowerCase().includes(searchQuery.toLowerCase());
      
      const matchesCity = localCity === 'all' || client.city.toLowerCase().includes(localCity.toLowerCase()) || 
        (localCity.includes('Иссык-Куль') && (client.city === 'Каракол' || client.city === 'Чолпон-Ата'));
      
      const matchesCategory = selectedCategory === 'all' || 
        (selectedCategory === 'auto' && (client.category.includes('Детейлинг') || client.category.includes('Авто'))) ||
        (selectedCategory === 'medical' && client.category.includes('Стоматология')) ||
        (selectedCategory === 'tourism' && (client.category.includes('Отель') || client.category.includes('Туризм') || client.category.includes('Коттеджи'))) ||
        (selectedCategory === 'construction' && (client.category.includes('Ремонт') || client.category.includes('Архитектура') || client.category.includes('Стройматериалы'))) ||
        (selectedCategory === 'restaurant' && (client.category.includes('Банкет') || client.category.includes('Ресторан') || client.category.includes('Чайхана'))) ||
        (selectedCategory === 'furniture' && client.category.includes('Мебель'));

      return matchesSearch && matchesCity && matchesCategory;
    });
  }, [searchQuery, localCity, selectedCategory]);

  const photoMapping: Record<string, string> = {
    'redcar-detailing': '/images/redcar.jpg',
    'dr-atazhanov-clinic': '/images/atazhanov.jpg',
    'alakol-guest-house': '/images/alakol.jpg',
    'marshal-group': '/images/marshal.jpg',
    'too-kg-expeditions': '/images/too-kg.jpg',
    'mashhura-mebel': '/images/mashhura.jpg',
    'grand-khan-tengri': '/images/khan-tengri.jpg',
    'luar-banquet-hall': '/images/luar.jpg',
    'art-garage-detailing': '/images/art-garage.jpg',
    'orto-asia-palace': '/images/orto-asia.jpg',
    'zeto-resort': '/images/zeto.jpg',
    'neostyle-architecture': '/images/neostyle.jpg',
    'ak-tish-dental': '/images/ak-tish.jpg',
    'adat-barbershop': '/images/adat.jpg',
    'logos-education': '/images/logos-osh.jpg',
    'toro-auto-karakol': '/images/toro.jpg',
    'raizein-talas': '/images/raizein.jpg',
    'baikut-batken': '/images/baikut.jpg',
    'khan-ordo-tokmok': '/images/khan-ordo.jpg',
    'delmar-kara-balta': '/images/delmar.jpg',
    'amanat-tuning': '/images/amanat.jpg',
    'barkybaev-clinic': '/images/barkybaev.jpg',
    'goldstroy-kg': '/images/goldstroy.jpg',
    'destination-karakol': '/images/destination-karakol.jpg',
    'mebelhouse-osh': '/images/mebelhouse.jpg',
    'saltanat-jalalabad': '/images/saltanat.jpg',
  };

  return (
    <div className="min-h-screen bg-[#07090E] text-[#E6EDF3] font-sans selection:bg-amber-500 selection:text-black">
      {/* Top Monograph Ticker */}
      <div className="border-b border-white/[0.06] bg-[#030407] px-8 py-2.5 text-[11px] font-mono text-[#7D889B] flex items-center justify-between">
        <div className="flex items-center gap-4">
          <span className="inline-block w-1.5 h-1.5 rounded-full bg-amber-400 animate-pulse"></span>
          <span className="uppercase text-slate-200">KYRGYZSTAN SME PORTAL • 70 VERIFIED CLIENTS</span>
          <span className="hidden md:inline text-white/20">/</span>
          <span className="hidden md:inline text-white/40">COLD OUTREACH CONCEPTS & BESPOKE LANDING PAGES</span>
        </div>
        <div className="flex items-center gap-6">
          <span className="text-emerald-400 font-bold font-mono">ALL PROTOTYPES LIVE</span>
        </div>
      </div>

      {/* Hero Master Header */}
      <header className="relative border-b border-white/[0.08] bg-[#0A0D15] px-8 py-16 overflow-hidden">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-amber-500/5 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-cyan-500/5 rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-7xl mx-auto relative z-10 space-y-6">
          <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full border border-amber-400/30 bg-amber-500/10 text-amber-300 text-[11px] font-mono tracking-widest uppercase">
            <Sparkles className="w-3.5 h-3.5 text-amber-400" />
            <span>Каталог 70 реальных бизнесов по всей карте Кыргызстана</span>
          </div>

          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8">
            <div className="space-y-4 max-w-3xl">
              <h1 className="text-4xl sm:text-6xl font-extrabold tracking-tight text-white leading-[1.08]">
                Bespoke Landing Pages & Outreach Hub
              </h1>
              <p className="text-[#9BA5B7] text-base sm:text-lg font-light leading-relaxed">
                Каждый лендинг спроектирован по стандартам премиальных дизайн-студий: кинематографичные полноэкранные Hero-баннеры, рассказ об уникальности бизнеса, примеры услуг и продукции, векторные логотипы и готовые скрипты холодного закрытия в WhatsApp.
              </p>
            </div>

            {/* Quick Metrics Bar */}
            <div className="grid grid-cols-3 gap-6 p-5 rounded-xl border border-white/[0.08] bg-black/60 backdrop-blur-md shrink-0 font-mono">
              <div>
                <div className="text-2xl font-extrabold text-white">70</div>
                <div className="text-[11px] text-[#7D889B] uppercase tracking-wider mt-0.5">В реестре КР</div>
              </div>
              <div>
                <div className="text-2xl font-extrabold text-amber-400">30</div>
                <div className="text-[11px] text-[#7D889B] uppercase tracking-wider mt-0.5">TOP Концептов</div>
              </div>
              <div>
                <div className="text-2xl font-extrabold text-emerald-400">11</div>
                <div className="text-[11px] text-[#7D889B] uppercase tracking-wider mt-0.5">Городов КР</div>
              </div>
            </div>
          </div>

          {/* Navigation Mode Switcher */}
          <div className="flex items-center gap-4 pt-6 border-t border-white/[0.08]">
            <button
              onClick={() => setActiveTab('top20')}
              className={`px-6 py-3 rounded-lg font-mono text-xs uppercase tracking-wider font-bold transition duration-200 flex items-center gap-2 ${
                activeTab === 'top20'
                  ? 'bg-amber-500 text-black shadow-lg shadow-amber-500/10'
                  : 'bg-white/[0.04] text-slate-300 hover:bg-white/[0.08] border border-white/[0.08]'
              }`}
            >
              <Sparkles className="w-4 h-4" />
              <span>Витрина TOP-30 Лендингов</span>
            </button>

            <button
              onClick={() => setActiveTab('database')}
              className={`px-6 py-3 rounded-lg font-mono text-xs uppercase tracking-wider font-bold transition duration-200 flex items-center gap-2 ${
                activeTab === 'database'
                  ? 'bg-amber-500 text-black shadow-lg shadow-amber-500/10'
                  : 'bg-white/[0.04] text-slate-300 hover:bg-white/[0.08] border border-white/[0.08]'
              }`}
            >
              <Database className="w-4 h-4" />
              <span>Полная база 70 бизнесов</span>
            </button>
          </div>
        </div>
      </header>

      {/* Main Content Area */}
      <main className="max-w-7xl mx-auto px-8 py-12 space-y-10">
        {activeTab === 'top20' ? (
          <>
            {/* Filter & Search Bar */}
            <div className="space-y-6 p-6 rounded-2xl border border-white/[0.08] bg-[#0A0D15]">
              <div className="flex flex-col md:flex-row gap-4 items-stretch md:items-center justify-between">
                {/* Search input */}
                <div className="relative flex-1">
                  <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-[#7D889B]" />
                  <input
                    type="text"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    placeholder="Поиск по названию бизнеса, городу, категории или нише..."
                    className="w-full pl-11 pr-4 py-3 rounded-lg bg-[#05070A] border border-white/[0.08] text-sm text-white placeholder-[#7D889B] focus:outline-none focus:border-amber-400 transition font-mono"
                  />
                </div>

                {/* Categories selector */}
                <div className="flex items-center gap-2 overflow-x-auto pb-1 text-xs font-mono">
                  {categories.map((cat) => (
                    <button
                      key={cat.id}
                      onClick={() => setSelectedCategory(cat.id)}
                      className={`px-3.5 py-2.5 rounded whitespace-nowrap transition ${
                        selectedCategory === cat.id
                          ? 'bg-white/15 text-white border border-white/30 font-bold'
                          : 'bg-[#05070A] text-[#7D889B] hover:text-white border border-white/[0.06]'
                      }`}
                    >
                      {cat.label}
                    </button>
                  ))}
                </div>
              </div>

              {/* City Filter Pills */}
              <div className="flex items-center gap-2 overflow-x-auto pb-2 text-xs font-mono border-t border-white/[0.06] pt-4">
                <span className="text-[#7D889B] shrink-0 uppercase tracking-wider text-[10px] mr-2">Регионы:</span>
                {cities.map((city) => (
                  <button
                    key={city.id}
                    onClick={() => handleCityChange(city.id)}
                    className={`px-3 py-1.5 rounded-full whitespace-nowrap transition flex items-center gap-1.5 ${
                      localCity === city.id
                        ? 'bg-amber-400 text-black font-bold'
                        : 'bg-white/[0.04] text-[#8C96A8] hover:text-white border border-white/[0.06]'
                    }`}
                  >
                    <span>{city.label}</span>
                    <span className="text-[10px] opacity-60">({city.count})</span>
                  </button>
                ))}
              </div>
            </div>

            {/* Showcase Grid of Cards */}
            <div className="space-y-6">
              <div className="flex items-center justify-between text-xs font-mono text-[#7D889B]">
                <span>Найдено концептов: <strong className="text-white">{filteredClients.length}</strong></span>
                <span>Нажмите на карточку для перехода на персональный сайт</span>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {filteredClients.map((client) => {
                  const photoSrc = photoMapping[client.slug];
                  const globalIndex = TOP_20_CLIENTS.findIndex(c => c.slug === client.slug) + 1;

                  return (
                    <div
                      key={client.slug}
                      className="group rounded-xl border border-white/[0.08] bg-[#0A0D15] hover:border-amber-400/40 transition duration-300 flex flex-col justify-between overflow-hidden shadow-lg hover:shadow-2xl hover:shadow-amber-500/5"
                    >
                      <div>
                        {/* Photographic Header with Embedded Vector Brand Logo */}
                        {photoSrc ? (
                          <div className="relative h-56 w-full overflow-hidden bg-black cursor-pointer" onClick={() => onSelectClient(client)}>
                            <img
                              src={photoSrc}
                              alt={client.name}
                              className="w-full h-full object-cover transform group-hover:scale-105 transition duration-700 opacity-85"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-[#0A0D15] via-transparent to-transparent" />
                            
                            <div className="absolute top-3 left-3 flex items-center gap-2">
                              <span className="flex items-center justify-center w-6 h-6 rounded bg-black/85 backdrop-blur-md text-amber-400 font-mono font-bold text-xs border border-amber-500/40">
                                #{globalIndex}
                              </span>
                              <span className="px-2.5 py-0.5 rounded text-[10px] font-mono font-bold bg-black/80 backdrop-blur-md text-slate-200 border border-white/10 uppercase">
                                {client.city}
                              </span>
                            </div>

                            <div className="absolute top-3 right-3">
                              <span className="px-2.5 py-0.5 rounded text-[10px] font-mono font-bold bg-emerald-950/85 backdrop-blur-md text-emerald-400 border border-emerald-500/30">
                                Потенциал {client.potentialScore}/10
                              </span>
                            </div>

                            {/* Crisp Embedded Vector Logo Badge */}
                            <div className="absolute bottom-3 left-3 bg-black/90 backdrop-blur-md px-3 py-1.5 rounded border border-white/15 shadow-xl scale-90 origin-bottom-left">
                              <BrandLogo slug={client.slug} size={22} className="h-5 w-auto" />
                            </div>
                          </div>
                        ) : (
                          <div className="p-6 border-b border-white/[0.06] flex items-center justify-between">
                            <div className="flex items-center gap-3">
                              <span className="flex items-center justify-center w-8 h-8 rounded bg-white/[0.05] font-mono font-bold text-xs text-amber-400">
                                #{globalIndex}
                              </span>
                              <div>
                                <span className="text-xs font-mono text-[#7D889B] uppercase tracking-wider">{client.city}</span>
                                <div className="text-xs font-mono font-bold text-slate-300">{client.category}</div>
                              </div>
                            </div>
                            <span className="text-xs font-mono font-bold text-emerald-400">{client.potentialScore}/10</span>
                          </div>
                        )}

                        {/* Card Body */}
                        <div className="p-6 space-y-4">
                          <div>
                            <h3 
                              onClick={() => onSelectClient(client)}
                              className="text-lg font-bold text-white group-hover:text-amber-400 transition cursor-pointer flex items-center justify-between"
                            >
                              <span>{client.name}</span>
                              <ArrowUpRight className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity text-amber-400" />
                            </h3>
                            <p className="text-xs text-amber-300/80 font-mono mt-1">
                              {client.tagline}
                            </p>
                          </div>

                          <p className="text-xs text-[#9BA5B7] leading-relaxed line-clamp-2">
                            {client.currentProblem}
                          </p>

                          <div className="pt-2 flex items-center gap-2 text-xs font-mono text-[#7D889B]">
                            <MapPin className="w-3.5 h-3.5 text-amber-400 shrink-0" />
                            <span className="truncate">{client.address}</span>
                          </div>
                        </div>
                      </div>

                      {/* Card Footer Actions */}
                      <div className="p-6 pt-0 flex items-center gap-3">
                        <button
                          onClick={() => onSelectClient(client)}
                          className="flex-1 py-3 rounded bg-amber-400 hover:bg-amber-300 text-black font-mono font-bold text-xs uppercase tracking-wider transition flex items-center justify-center gap-1.5 shadow-md shadow-amber-400/5"
                        >
                          <Eye className="w-3.5 h-3.5" />
                          <span>Открыть сайт</span>
                        </button>

                        <button
                          onClick={() => setModalClient(client)}
                          className="px-4 py-3 rounded border border-white/[0.1] hover:bg-white/[0.05] text-[#9BA5B7] hover:text-white transition flex items-center justify-center"
                          title="Показать скрипт для холодного outreach"
                        >
                          <MessageSquare className="w-4 h-4" />
                        </button>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </>
        ) : (
          <FullDatabaseTable
            onSelectTopClient={(slug) => {
              const found = TOP_20_CLIENTS.find(c => c.slug === slug);
              if (found) {
                onSelectClient(found);
              }
            }}
          />
        )}
      </main>

      {/* Outreach Script Modal */}
      {modalClient && (
        <OutreachScriptModal
          client={modalClient}
          isOpen={!!modalClient}
          onClose={() => setModalClient(null)}
        />
      )}

      {/* Master Footer */}
      <footer className="border-t border-white/[0.08] bg-[#030407] py-12 px-8 text-xs font-mono text-[#7D889B]">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-6">
          <div>
            <strong>KYRGYZSTAN SME OUTREACH & BESPOKE LANDING SUITE</strong> • 2026 EDITION
          </div>
          <div>Разработано для высококонверсионного холодного привлечения клиентов</div>
        </div>
      </footer>
    </div>
  );
};
