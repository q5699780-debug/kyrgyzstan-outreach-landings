import React, { useState } from 'react';
import type { TopClientDetails } from '../types';
import { TOP_20_CLIENTS } from '../data/businesses';
import { 
  ArrowLeft, 
  ChevronLeft, 
  ChevronRight, 
  MessageSquare, 
  Smartphone, 
  Monitor, 
  Tablet, 
  Info
} from 'lucide-react';
import { OutreachScriptModal } from './OutreachScriptModal';

interface Props {
  currentClient: TopClientDetails;
  onSelectClient: (client: TopClientDetails) => void;
  onBackToHub: () => void;
  viewMode: 'desktop' | 'tablet' | 'mobile';
  onChangeViewMode: (mode: 'desktop' | 'tablet' | 'mobile') => void;
}

export const ClientSwitcherBar: React.FC<Props> = ({
  currentClient,
  onSelectClient,
  onBackToHub,
  viewMode,
  onChangeViewMode,
}) => {
  const [isScriptModalOpen, setIsScriptModalOpen] = useState(false);
  const [isPitchDetailsOpen, setIsPitchDetailsOpen] = useState(false);

  const currentIndex = TOP_20_CLIENTS.findIndex(c => c.id === currentClient.id);
  const prevClient = TOP_20_CLIENTS[(currentIndex - 1 + TOP_20_CLIENTS.length) % TOP_20_CLIENTS.length];
  const nextClient = TOP_20_CLIENTS[(currentIndex + 1) % TOP_20_CLIENTS.length];

  return (
    <>
      <header className="sticky top-0 z-50 bg-slate-950/90 backdrop-blur-md border-b border-slate-800 text-slate-200 px-4 py-2.5 shadow-xl">
        <div className="max-w-7xl mx-auto flex items-center justify-between gap-3">
          {/* Left: Back & Current Client */}
          <div className="flex items-center gap-3">
            <button
              onClick={onBackToHub}
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-900 hover:bg-slate-800 text-xs font-semibold text-slate-300 hover:text-white border border-slate-700 transition"
              title="Вернуться к списку 70 компаний"
            >
              <ArrowLeft className="w-4 h-4 text-amber-400" />
              <span className="hidden sm:inline">Каталог (TOP-70)</span>
            </button>

            <div className="h-5 w-px bg-slate-800 hidden sm:block" />

            <div className="flex items-center gap-2">
              <span className="flex items-center justify-center w-6 h-6 rounded-full bg-amber-500/20 text-amber-400 text-xs font-bold border border-amber-500/40">
                #{currentIndex + 1}
              </span>
              <select
                value={currentClient.slug}
                onChange={(e) => {
                  const target = TOP_20_CLIENTS.find(c => c.slug === e.target.value);
                  if (target) onSelectClient(target);
                }}
                className="bg-slate-900 border border-slate-700 text-white text-xs sm:text-sm font-semibold rounded-lg px-2.5 py-1.5 focus:ring-2 focus:ring-amber-500 outline-none cursor-pointer max-w-[180px] sm:max-w-xs truncate"
              >
                {TOP_20_CLIENTS.map((c, idx) => (
                  <option key={c.slug} value={c.slug}>
                    {idx + 1}. {c.name} ({c.city} — {c.category})
                  </option>
                ))}
              </select>
            </div>
          </div>

          {/* Middle: Prev/Next & Device Mode */}
          <div className="flex items-center gap-2">
            <div className="flex items-center bg-slate-900 rounded-lg border border-slate-800 p-0.5">
              <button
                onClick={() => onSelectClient(prevClient)}
                className="p-1.5 text-slate-400 hover:text-white hover:bg-slate-800 rounded transition"
                title={`Предыдущий: ${prevClient.name}`}
              >
                <ChevronLeft className="w-4 h-4" />
              </button>
              <button
                onClick={() => onSelectClient(nextClient)}
                className="p-1.5 text-slate-400 hover:text-white hover:bg-slate-800 rounded transition"
                title={`Следующий: ${nextClient.name}`}
              >
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>

            {/* View Mode */}
            <div className="hidden md:flex items-center bg-slate-900 rounded-lg border border-slate-800 p-0.5 text-xs">
              <button
                onClick={() => onChangeViewMode('desktop')}
                className={`p-1.5 rounded transition ${viewMode === 'desktop' ? 'bg-amber-500 text-black font-bold' : 'text-slate-400 hover:text-white'}`}
                title="Десктоп"
              >
                <Monitor className="w-4 h-4" />
              </button>
              <button
                onClick={() => onChangeViewMode('tablet')}
                className={`p-1.5 rounded transition ${viewMode === 'tablet' ? 'bg-amber-500 text-black font-bold' : 'text-slate-400 hover:text-white'}`}
                title="Планшет (768px)"
              >
                <Tablet className="w-4 h-4" />
              </button>
              <button
                onClick={() => onChangeViewMode('mobile')}
                className={`p-1.5 rounded transition ${viewMode === 'mobile' ? 'bg-amber-500 text-black font-bold' : 'text-slate-400 hover:text-white'}`}
                title="Смартфон (390px)"
              >
                <Smartphone className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Right: Pitch Dossier & Outreach Message */}
          <div className="flex items-center gap-2">
            <button
              onClick={() => setIsPitchDetailsOpen(!isPitchDetailsOpen)}
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-900 hover:bg-slate-800 text-xs font-medium text-slate-300 hover:text-white border border-slate-700 transition"
              title="Показать досье и концепцию дизайна"
            >
              <Info className="w-3.5 h-3.5 text-cyan-400" />
              <span className="hidden lg:inline">Концепт & Досье</span>
            </button>

            <button
              onClick={() => setIsScriptModalOpen(true)}
              className="flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-500 hover:to-teal-500 text-white text-xs font-bold shadow-lg shadow-emerald-950/50 transition transform active:scale-95"
            >
              <MessageSquare className="w-3.5 h-3.5" />
              <span>Outreach WhatsApp</span>
            </button>
          </div>
        </div>

        {/* Expandable Pitch Strategy Drawer */}
        {isPitchDetailsOpen && (
          <div className="max-w-7xl mx-auto mt-2 pt-3 pb-2 border-t border-slate-800/80 grid grid-cols-1 md:grid-cols-4 gap-3 text-xs animate-fadeIn">
            <div className="p-2.5 rounded-lg bg-slate-900/60 border border-slate-800">
              <span className="text-amber-400 font-semibold uppercase tracking-wider block mb-1">Проблема клиента:</span>
              <p className="text-slate-300 leading-relaxed">{currentClient.currentProblem}</p>
            </div>
            <div className="p-2.5 rounded-lg bg-slate-900/60 border border-slate-800">
              <span className="text-cyan-400 font-semibold uppercase tracking-wider block mb-1">Идея & Стиль:</span>
              <p className="text-slate-300 leading-relaxed">{currentClient.visualDirection}</p>
            </div>
            <div className="p-2.5 rounded-lg bg-slate-900/60 border border-slate-800">
              <span className="text-emerald-400 font-semibold uppercase tracking-wider block mb-1">Killer Feature:</span>
              <p className="text-slate-300 leading-relaxed">{currentClient.killerFeature.title}: {currentClient.killerFeature.description}</p>
            </div>
            <div className="p-2.5 rounded-lg bg-slate-900/60 border border-slate-800 flex flex-col justify-between">
              <div>
                <span className="text-purple-400 font-semibold uppercase tracking-wider block mb-1">Контакты:</span>
                <p className="text-slate-200 font-medium">{currentClient.phone} • {currentClient.instagram}</p>
                <p className="text-slate-400 mt-0.5">{currentClient.address || currentClient.city}</p>
              </div>
              <button
                onClick={() => setIsScriptModalOpen(true)}
                className="mt-2 text-amber-400 hover:text-amber-300 font-semibold inline-flex items-center gap-1"
              >
                Открыть готовый текст питча →
              </button>
            </div>
          </div>
        )}
      </header>

      {/* Script Modal */}
      <OutreachScriptModal
        client={currentClient}
        isOpen={isScriptModalOpen}
        onClose={() => setIsScriptModalOpen(false)}
      />
    </>
  );
};
