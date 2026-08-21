import React, { useState } from 'react';
import { TopClientDetails } from '../types';
import { Copy, Check, MessageSquare, ExternalLink, X, Send } from 'lucide-react';

interface Props {
  client: TopClientDetails;
  isOpen: boolean;
  onClose: () => void;
}

export const OutreachScriptModal: React.FC<Props> = ({ client, isOpen, onClose }) => {
  const [copied, setCopied] = useState(false);

  if (!isOpen) return null;

  const fullMessage = `${client.outreachScript.hook}\n\n${client.outreachScript.problem}\n\n${client.outreachScript.solution}\n\n${client.outreachScript.cta}\n\n🔗 Демо-лендинг: https://kg-outreach.vercel.app/#/${client.slug}`;

  const handleCopy = () => {
    navigator.clipboard.writeText(fullMessage);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const whatsappPhone = client.phone.replace(/[^0-9]/g, '');
  const whatsappUrl = `https://wa.me/${whatsappPhone}?text=${encodeURIComponent(fullMessage)}`;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-fadeIn">
      <div className="relative w-full max-w-2xl bg-slate-900 border border-slate-700/80 rounded-2xl shadow-2xl overflow-hidden">
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-slate-800 bg-slate-950/60">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-amber-500/10 border border-amber-500/30 flex items-center justify-center text-amber-400">
              <MessageSquare className="w-5 h-5" />
            </div>
            <div>
              <h3 className="text-lg font-bold text-white flex items-center gap-2">
                Outreach-скрипт для {client.name}
              </h3>
              <p className="text-xs text-slate-400">
                {client.city} • {client.category} • Тел: {client.phone}
              </p>
            </div>
          </div>
          <button 
            onClick={onClose}
            className="p-2 text-slate-400 hover:text-white rounded-lg hover:bg-slate-800 transition"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Body */}
        <div className="p-6 space-y-4">
          <div className="grid grid-cols-2 gap-3 text-xs">
            <div className="p-3 rounded-lg bg-slate-800/50 border border-slate-700/50">
              <span className="text-slate-400">Средний чек бизнеса:</span>
              <p className="font-semibold text-emerald-400 mt-0.5">{client.avgCheck}</p>
            </div>
            <div className="p-3 rounded-lg bg-slate-800/50 border border-slate-700/50">
              <span className="text-slate-400">Потенциал ROI:</span>
              <p className="font-semibold text-amber-400 mt-0.5">{client.potentialScore}/10 (Категория A)</p>
            </div>
          </div>

          <div>
            <label className="block text-xs font-semibold uppercase tracking-wider text-slate-400 mb-2">
              Персонализированное сообщение (WhatsApp / Instagram Direct):
            </label>
            <div className="relative p-4 rounded-xl bg-slate-950 border border-slate-800 text-sm text-slate-200 whitespace-pre-line leading-relaxed font-sans max-h-60 overflow-y-auto">
              {fullMessage}
            </div>
          </div>

          <div className="p-3 rounded-lg bg-amber-500/10 border border-amber-500/20 text-xs text-amber-300">
            💡 <strong>Совет по продажам:</strong> Отправляйте сообщение с 10:00 до 16:00. Прикрепите короткое 10-секундное видео экрана с прокруткой сделанного лендинга для мгновенного вау-эффекта.
          </div>
        </div>

        {/* Footer */}
        <div className="flex items-center justify-between px-6 py-4 border-t border-slate-800 bg-slate-950/60 gap-3">
          <button
            onClick={handleCopy}
            className="flex-1 flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-100 font-medium text-sm transition border border-slate-700"
          >
            {copied ? (
              <>
                <Check className="w-4 h-4 text-emerald-400" />
                <span className="text-emerald-400">Скрипт скопирован!</span>
              </>
            ) : (
              <>
                <Copy className="w-4 h-4" />
                <span>Копировать текст</span>
              </>
            )}
          </button>

          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-medium text-sm transition shadow-lg shadow-emerald-950/40"
          >
            <Send className="w-4 h-4" />
            <span>Открыть в WhatsApp (+996)</span>
            <ExternalLink className="w-3.5 h-3.5 opacity-70" />
          </a>
        </div>
      </div>
    </div>
  );
};
