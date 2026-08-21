import React, { useState, useEffect } from 'react';
import type { TopClientDetails } from './types';
import { TOP_20_CLIENTS } from './data/businesses';
import { LANDING_COMPONENTS } from './landings';
import { NavigationHub } from './components/NavigationHub';
import { ClientSwitcherBar } from './components/ClientSwitcherBar';

// Helper to find client by slug or alias
const findClientByQuery = (query: string): TopClientDetails | undefined => {
  const clean = query.toLowerCase().replace(/[^a-z0-9-]/g, '');
  if (!clean) return undefined;

  return TOP_20_CLIENTS.find(c => {
    const slug = c.slug.toLowerCase();
    const shortSlug = slug.replace('-detailing', '').replace('-clinic', '').replace('-dental', '').replace('-group', '').replace('-hall', '').replace('-cottages', '').replace('-barbershop', '').replace('-resort', '').replace('-education', '');
    return slug === clean || shortSlug === clean || slug.includes(clean) || clean.includes(slug);
  });
};

export const App: React.FC = () => {
  const [activeClient, setActiveClient] = useState<TopClientDetails | null>(null);
  const [viewMode, setViewMode] = useState<'desktop' | 'tablet' | 'mobile'>('desktop');
  const [isStandalone, setIsStandalone] = useState<boolean>(false);

  // Handle Subdomain, Pathname, Query Param, and Hash routing
  useEffect(() => {
    const resolveRoute = () => {
      const hostname = window.location.hostname;
      const pathname = window.location.pathname.replace(/^\/+|\/+$/g, '');
      const rawHash = window.location.hash;
      const hash = rawHash.replace(/^#\/?/, '');
      const urlParams = new URLSearchParams(window.location.search);
      const queryClient = urlParams.get('client') || urlParams.get('p') || urlParams.get('c');
      const pureParam = urlParams.get('pure') === '1' || urlParams.get('standalone') === 'true' || urlParams.get('preview') === '0';

      // 1. Check Subdomain (e.g. redcar.vercel.app or aktish.myagency.kg)
      const hostParts = hostname.split('.');
      if (hostParts.length > 2 && hostParts[0] !== 'www' && hostParts[0] !== 'localhost') {
        const subClient = findClientByQuery(hostParts[0]);
        if (subClient) {
          setActiveClient(subClient);
          setIsStandalone(true);
          return;
        }
      }

      // 2. Check Query parameter
      if (queryClient) {
        const found = findClientByQuery(queryClient);
        if (found) {
          setActiveClient(found);
          if (pureParam) setIsStandalone(true);
          return;
        }
      }

      // 3. Check Pathname (e.g. /redcar or /redcar-detailing)
      if (pathname && pathname !== 'index.html') {
        const pathSegment = pathname.split('/')[0];
        const found = findClientByQuery(pathSegment);
        if (found) {
          setActiveClient(found);
          if (pureParam) setIsStandalone(true);
          return;
        }
      }

      // 4. Check Hash route (e.g. /#/redcar-detailing)
      if (hash) {
        const found = findClientByQuery(hash);
        if (found) {
          setActiveClient(found);
          if (pureParam) setIsStandalone(true);
          return;
        }

        // If hash is an in-page anchor (e.g. #about, #rituals, #contact) and we already have an active client, PRESERVE IT and scroll!
        if (activeClient) {
          const el = document.getElementById(hash);
          if (el) {
            el.scrollIntoView({ behavior: 'smooth' });
          }
          return;
        }
      }

      // Default: If no valid client found and no active client, show Hub
      if (!activeClient) {
        setActiveClient(null);
      }
    };

    resolveRoute();
    window.addEventListener('hashchange', resolveRoute);
    window.addEventListener('popstate', resolveRoute);
    return () => {
      window.removeEventListener('hashchange', resolveRoute);
      window.removeEventListener('popstate', resolveRoute);
    };
  }, [activeClient]);

  const handleSelectClient = (client: TopClientDetails) => {
    setActiveClient(client);
    window.location.hash = `#/${client.slug}`;
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleBackToHub = () => {
    setActiveClient(null);
    setIsStandalone(false);
    window.location.hash = '';
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // If no client selected, render the main Showcase Navigation Hub
  if (!activeClient) {
    return <NavigationHub onSelectClient={handleSelectClient} />;
  }

  // If client selected, render pure clean standalone landing page
  const LandingComponent = LANDING_COMPONENTS[activeClient.slug] || (() => <div>Landing not found</div>);

  // Check if admin switcher is explicitly requested via ?switcher=1
  const urlParams = new URLSearchParams(window.location.search);
  const showSwitcher = urlParams.get('switcher') === '1' || urlParams.get('admin') === '1';

  if (!showSwitcher) {
    return (
      <div className="min-h-screen bg-black">
        <LandingComponent />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-slate-950 flex flex-col">
      {/* Top Persistent Switcher Bar (Only visible when ?switcher=1) */}
      <ClientSwitcherBar
        currentClient={activeClient}
        onSelectClient={handleSelectClient}
        onBackToHub={handleBackToHub}
        viewMode={viewMode}
        onChangeViewMode={setViewMode}
      />

      <main className="flex-1 flex justify-center bg-slate-950">
        <div
          className={`w-full transition-all duration-300 ${
            viewMode === 'mobile'
              ? 'max-w-[400px] my-6 rounded-3xl shadow-2xl border-4 border-slate-800 overflow-hidden ring-1 ring-slate-700 bg-black'
              : viewMode === 'tablet'
              ? 'max-w-[768px] my-6 rounded-2xl shadow-2xl border-4 border-slate-800 overflow-hidden ring-1 ring-slate-700 bg-black'
              : 'max-w-full'
          }`}
        >
          <LandingComponent />
        </div>
      </main>
    </div>
  );
};

export default App;

