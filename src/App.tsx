import React, { useState, useEffect, useCallback } from 'react';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { ODOPGIEducationModal } from './components/ODOPGIEducationModal';
import { GlobalSearchModal } from './components/GlobalSearchModal';
import { HomeView } from './views/HomeView';
import { ExploreView } from './views/ExploreView';
import { ODOPView } from './views/ODOPView';
import { GIView } from './views/GIView';
import { ArtisansView } from './views/ArtisansView';
import { StatesView } from './views/StatesView';
import { StateDetailView } from './views/StateDetailView';
import { StoriesView } from './views/StoriesView';
import { StoryDetailView } from './views/StoryDetailView';
import { ProductDetailView } from './views/ProductDetailView';
import { AboutView } from './views/AboutView';
import { ContactView } from './views/ContactView';
import { DpiitDirectoryView } from './views/DpiitDirectoryView';
import { SellerPartnerView } from './views/SellerPartnerView';
import { TraditionalArtsView } from './views/TraditionalArtsView';
import { WhatsAppWidget } from './components/WhatsAppWidget';
import { PRODUCTS_DATA } from './data/products';
import { STATES_DATA } from './data/states';
import { STORIES_DATA } from './data/stories';

export default function App() {
  const [currentView, setCurrentView] = useState<string>('home');
  const [selectedStateId, setSelectedStateId] = useState<string>('bihar');
  const [selectedProductId, setSelectedProductId] = useState<string>('bihar-madhubani-painting');
  const [selectedStoryId, setSelectedStoryId] = useState<string>('women-of-madhubani-mud-walls-to-museums');
  const [exploreInitialCategory, setExploreInitialCategory] = useState<string | undefined>(undefined);
  const [exploreInitialState, setExploreInitialState] = useState<string | undefined>(undefined);
  const [aboutTargetSection, setAboutTargetSection] = useState<string | undefined>(undefined);
  const [dpiitDirectoryTab, setDpiitDirectoryTab] = useState<'odop' | 'gi'>('odop');
  const [isODOPModalOpen, setIsODOPModalOpen] = useState<boolean>(false);
  const [isSearchOpen, setIsSearchOpen] = useState<boolean>(false);

  // Sync URL hash / path on initial load & popstate
  const syncFromPath = useCallback(() => {
    const path = window.location.pathname.toLowerCase();
    const hash = window.location.hash.toLowerCase().replace('#', '');
    const activeRoute = hash || path;

    if (activeRoute.includes('crafts/') || activeRoute.includes('product/')) {
      const slug = activeRoute.split('/').pop();
      const product = PRODUCTS_DATA.find((p) => p.slug === slug || p.id === slug);
      if (product) {
        setSelectedProductId(product.id);
        setCurrentView('product-detail');
        return;
      }
    }

    if (activeRoute.includes('states/')) {
      const stateId = activeRoute.split('/').pop();
      const state = STATES_DATA.find((s) => s.id === stateId || s.code.toLowerCase() === stateId);
      if (state) {
        setSelectedStateId(state.id);
        setCurrentView('state-detail');
        return;
      }
    }

    if (activeRoute.includes('stories/')) {
      const storySlug = activeRoute.split('/').pop();
      const story = STORIES_DATA.find((s) => s.slug === storySlug || s.id === storySlug);
      if (story) {
        setSelectedStoryId(story.id);
        setCurrentView('story-detail');
        return;
      }
    }

    if (activeRoute.includes('seller') || activeRoute.includes('partner')) {
      setCurrentView('seller-partner');
      return;
    }

    if (activeRoute.includes('dpiit') || activeRoute.includes('directory')) {
      setCurrentView('dpiit-directory');
      return;
    }

    if (activeRoute.includes('odop')) {
      setCurrentView('odop');
      return;
    }

    if (activeRoute.includes('gi')) {
      setCurrentView('gi');
      return;
    }

    if (activeRoute.includes('artisans') || activeRoute.includes('makers')) {
      setCurrentView('artisans');
      return;
    }

    if (activeRoute.includes('traditional-art') || activeRoute.includes('discipline') || activeRoute.includes('craft-categor')) {
      setCurrentView('traditional-arts');
      return;
    }

    if (activeRoute.includes('explore')) {
      setCurrentView('explore');
      return;
    }

    if (activeRoute.includes('states')) {
      setCurrentView('states');
      return;
    }

    if (activeRoute.includes('stories')) {
      setCurrentView('stories');
      return;
    }

    if (activeRoute.includes('why-we-exist')) {
      setAboutTargetSection('why-we-exist');
      setCurrentView('about');
      return;
    }

    if (activeRoute.includes('people-behind') || activeRoute.includes('founders') || activeRoute.includes('team')) {
      setAboutTargetSection('people-behind');
      setCurrentView('about');
      return;
    }

    if (activeRoute.includes('lets-connect')) {
      setAboutTargetSection('lets-connect');
      setCurrentView('about');
      return;
    }

    if (activeRoute.includes('about')) {
      setAboutTargetSection(undefined);
      setCurrentView('about');
      return;
    }

    if (activeRoute.includes('contact')) {
      setAboutTargetSection('lets-connect');
      setCurrentView('about');
      return;
    }

    setCurrentView('home');
  }, []);

  useEffect(() => {
    syncFromPath();
    window.addEventListener('popstate', syncFromPath);
    return () => window.removeEventListener('popstate', syncFromPath);
  }, [syncFromPath]);

  // Global Keyboard Shortcut: Cmd+K / Ctrl+K to open search
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
        e.preventDefault();
        setIsSearchOpen((prev) => !prev);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  // Update Page Title based on active view for SEO
  useEffect(() => {
    switch (currentView) {
      case 'home':
        document.title = 'ODOP Hub — Discover the Heritage of India';
        break;
      case 'explore':
        document.title = 'Explore Indian Crafts & Heritage — ODOP Hub';
        break;
      case 'odop':
        document.title = 'One District One Product (ODOP) Directory — ODOP Hub';
        break;
      case 'gi':
        document.title = 'Geographical Indications (GI) Registry — ODOP Hub';
        break;
      case 'artisans':
        document.title = 'Meet the Makers: Master Artisans of India — ODOP Hub';
        break;
      case 'states':
        document.title = 'States & Union Territories of India — ODOP Hub';
        break;
      case 'state-detail': {
        const state = STATES_DATA.find((s) => s.id === selectedStateId);
        document.title = state
          ? `${state.name} Heritage & Crafts — ODOP Hub`
          : 'State Heritage — ODOP Hub';
        break;
      }
      case 'product-detail': {
        const product = PRODUCTS_DATA.find((p) => p.id === selectedProductId);
        document.title = product
          ? `${product.name} (${product.district}, ${product.state}) — ODOP Hub`
          : 'Craft Detail — ODOP Hub';
        break;
      }
      case 'stories':
        document.title = 'Story of the Art & Cultural Chronicles — ODOP Hub';
        break;
      case 'story-detail': {
        const story = STORIES_DATA.find((s) => s.id === selectedStoryId);
        document.title = story
          ? `${story.title} — ODOP Hub`
          : 'Artisan Story — ODOP Hub';
        break;
      }
      case 'about':
        document.title = 'About ODOP Hub — Preserving India’s District Traditions';
        break;
      case 'traditional-arts':
        document.title = 'Traditional Disciplines & Media — ODOP Hub';
        break;
      case 'seller-partner':
        document.title = 'Become an ODOP Hub Seller Partner — Showcase Indian Heritage Crafts';
        break;
      case 'dpiit-directory':
        document.title = 'DPIIT District ODOP Directory & State GI Registry — ODOP Hub';
        break;
      case 'contact':
        document.title = 'Contact Us — Let’s Connect | ODOP Hub';
        break;
      default:
        document.title = 'ODOP Hub — Discover the Heritage of India';
    }
  }, [currentView, selectedStateId, selectedProductId, selectedStoryId]);

  // Navigation handler
  const handleNavigate = (
    view: string,
    params?: { stateId?: string; productId?: string; storyId?: string; category?: string; section?: string; tab?: 'odop' | 'gi' }
  ) => {
    if (params?.stateId) setSelectedStateId(params.stateId);
    if (params?.productId) setSelectedProductId(params.productId);
    if (params?.storyId) setSelectedStoryId(params.storyId);
    if (params?.tab) setDpiitDirectoryTab(params.tab);
    if (params?.category) setExploreInitialCategory(params.category);
    else if (view !== 'explore') setExploreInitialCategory(undefined);

    if (view === 'about') {
      setAboutTargetSection(params?.section);
    } else if (view === 'contact') {
      setCurrentView('about');
      setAboutTargetSection('lets-connect');
      window.scrollTo({ top: 0, behavior: 'smooth' });
      window.history.pushState(null, '', '#lets-connect');
      return;
    }

    setCurrentView(view);
    window.scrollTo({ top: 0, behavior: 'smooth' });

    // Update history URL hash cleanly
    let newHash = view;
    if (view === 'product-detail' && params?.productId) {
      const p = PRODUCTS_DATA.find((item) => item.id === params.productId);
      if (p) newHash = `crafts/${p.slug}`;
    } else if (view === 'state-detail' && params?.stateId) {
      newHash = `states/${params.stateId}`;
    } else if (view === 'story-detail' && params?.storyId) {
      const s = STORIES_DATA.find((item) => item.id === params.storyId);
      if (s) newHash = `stories/${s.slug}`;
    } else if (view === 'about' && params?.section) {
      newHash = params.section;
    }
    window.history.pushState(null, '', `#${newHash}`);
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#FAF8F5] text-[#2C241E]">
      {/* Global Navigation */}
      <Navbar
        currentView={currentView}
        onNavigate={handleNavigate}
        onOpenODOPInfo={() => setIsODOPModalOpen(true)}
        onOpenSearch={() => setIsSearchOpen(true)}
      />

      {/* Main View Router */}
      <main className="flex-1">
        {currentView === 'home' && (
          <HomeView
            onNavigate={handleNavigate}
            onOpenODOPInfo={() => setIsODOPModalOpen(true)}
            onOpenSearch={() => setIsSearchOpen(true)}
          />
        )}

        {currentView === 'explore' && (
          <ExploreView
            onSelectProduct={(id) => handleNavigate('product-detail', { productId: id })}
            initialCategory={exploreInitialCategory}
            initialState={exploreInitialState}
            onOpenODOPInfo={() => setIsODOPModalOpen(true)}
          />
        )}

        {currentView === 'odop' && (
          <ODOPView
            onSelectProduct={(id) => handleNavigate('product-detail', { productId: id })}
            onNavigate={handleNavigate}
            onOpenODOPInfo={() => setIsODOPModalOpen(true)}
          />
        )}

        {currentView === 'gi' && (
          <GIView
            onSelectProduct={(id) => handleNavigate('product-detail', { productId: id })}
            onNavigate={handleNavigate}
            onOpenODOPInfo={() => setIsODOPModalOpen(true)}
          />
        )}

        {currentView === 'artisans' && (
          <ArtisansView
            onNavigate={handleNavigate}
          />
        )}

        {currentView === 'states' && (
          <StatesView
            onSelectState={(id) => handleNavigate('state-detail', { stateId: id })}
            onSelectProduct={(id) => handleNavigate('product-detail', { productId: id })}
          />
        )}

        {currentView === 'state-detail' && (
          <StateDetailView
            stateId={selectedStateId}
            onBack={() => handleNavigate('states')}
            onSelectProduct={(id) => handleNavigate('product-detail', { productId: id })}
            onSelectStory={(id) => handleNavigate('story-detail', { storyId: id })}
            onNavigate={handleNavigate}
          />
        )}

        {currentView === 'product-detail' && (
          <ProductDetailView
            productId={selectedProductId}
            onBack={() => handleNavigate('explore')}
            onSelectProduct={(id) => handleNavigate('product-detail', { productId: id })}
            onSelectState={(stateId) => handleNavigate('state-detail', { stateId })}
            onOpenODOPInfo={() => setIsODOPModalOpen(true)}
          />
        )}

        {currentView === 'stories' && (
          <StoriesView
            onSelectStory={(id) => handleNavigate('story-detail', { storyId: id })}
          />
        )}

        {currentView === 'story-detail' && (
          <StoryDetailView
            storyId={selectedStoryId}
            onBack={() => handleNavigate('stories')}
            onSelectProduct={(id) => handleNavigate('product-detail', { productId: id })}
          />
        )}

        {currentView === 'about' && (
          <AboutView
            onNavigate={handleNavigate}
            onOpenODOPInfo={() => setIsODOPModalOpen(true)}
            targetSection={aboutTargetSection}
          />
        )}

        {currentView === 'dpiit-directory' && (
          <DpiitDirectoryView
            onNavigate={handleNavigate}
            initialTab={dpiitDirectoryTab}
          />
        )}

        {currentView === 'contact' && (
          <ContactView
            onNavigate={handleNavigate}
          />
        )}

        {currentView === 'seller-partner' && (
          <SellerPartnerView
            onNavigate={handleNavigate}
          />
        )}

        {currentView === 'traditional-arts' && (
          <TraditionalArtsView
            onNavigate={handleNavigate}
          />
        )}
      </main>

      {/* Global Footer */}
      <Footer
        onNavigate={handleNavigate}
        onOpenODOPInfo={() => setIsODOPModalOpen(true)}
      />

      {/* Persistent Floating WhatsApp Help & Connect Widget */}
      <WhatsAppWidget />

      {/* Global Educational ODOP & GI Modal */}
      <ODOPGIEducationModal
        isOpen={isODOPModalOpen}
        onClose={() => setIsODOPModalOpen(false)}
      />

      {/* Global Search Modal */}
      <GlobalSearchModal
        isOpen={isSearchOpen}
        onClose={() => setIsSearchOpen(false)}
        onNavigate={handleNavigate}
      />
    </div>
  );
}
