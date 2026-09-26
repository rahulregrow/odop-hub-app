import React from 'react';
import { Compass, MapPin, BookOpen, ShieldCheck, Heart, ArrowUpRight, Scale, Building2, Users, MessageCircle, Mail, Facebook, Instagram, Layers } from 'lucide-react';

interface FooterProps {
  onNavigate: (
    view: string,
    params?: { stateId?: string; productId?: string; storyId?: string; category?: string; section?: string }
  ) => void;
  onOpenODOPInfo: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate, onOpenODOPInfo }) => {
  const handleNav = (
    view: string,
    params?: { stateId?: string; productId?: string; storyId?: string; category?: string; section?: string }
  ) => {
    onNavigate(view, params);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#241D17] text-[#EDE7DF] border-t border-[#3A3027]">
      {/* Top Banner Statement */}
      <div className="border-b border-[#382E25] py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <div>
            <span className="text-xs uppercase tracking-widest text-[#C45A34] font-semibold">
              India&apos;s Living Traditions
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl text-[#F7F3EE] mt-1">
              Every district has a story waiting to be discovered.
            </h2>
          </div>
          <button
            id="footer-explore-btn"
            onClick={() => handleNav('explore')}
            className="inline-flex items-center gap-2 px-6 py-3 rounded-md bg-[#FAF8F5] text-[#2C241E] font-medium text-sm hover:bg-[#EFE9DE] transition-colors shrink-0"
          >
            <span>Explore All Products</span>
            <ArrowUpRight className="w-4 h-4 text-[#B8502E]" />
          </button>
        </div>
      </div>

      {/* Main Footer Columns */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10">
          {/* Brand Identity */}
          <div className="lg:col-span-2 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-full bg-[#3C3026] text-[#FAF8F5] flex items-center justify-center border border-[#A87C38]/40">
                <span className="font-serif text-lg font-bold text-[#EFE4D8]">O</span>
                <span className="font-serif text-xs italic text-[#C45A34] -ml-0.5">H</span>
              </div>
              <div>
                <span className="font-serif text-2xl font-bold tracking-tight text-[#F7F3EE]">ODOP Hub</span>
                <span className="block text-xs uppercase tracking-widest text-[#A89A8C]">odophub.com</span>
              </div>
            </div>

            <p className="text-sm text-[#BDB2A5] leading-relaxed max-w-sm">
              Discover the Heritage of India. A cultural discovery platform dedicated to celebrating India’s One District One Product (ODOP) treasures, GI-tagged masterpieces, traditional crafts, and living artisan heritages.
            </p>

            <div className="pt-2 text-xs text-[#9E9081] space-y-2">
              <p>
                <span className="text-[#DFD7CD] font-medium">Our Mission:</span> Every craft tells a story. Every artisan keeps it alive. We bring these stories from their roots to the world.
              </p>
              
              {/* Contact & Social Links */}
              <div className="pt-2 flex flex-wrap items-center gap-2.5">
                <a
                  id="footer-whatsapp-btn"
                  href="https://wa.me/919108282970"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-3.5 py-2 rounded-lg bg-[#25D366] text-white text-xs font-semibold hover:bg-[#20bd5a] transition-all shadow-sm focus:outline-none focus:ring-2 focus:ring-[#25D366]"
                >
                  <MessageCircle className="w-4 h-4 fill-current" />
                  <span>Chat with us on WhatsApp</span>
                </a>

                <a
                  id="footer-brand-facebook-btn"
                  href="https://www.facebook.com/share/19rtRNyFxM/"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Follow ODOP Hub on Facebook"
                  className="inline-flex items-center gap-2 px-3.5 py-2 rounded-lg bg-[#1877F2] hover:bg-[#166fe5] text-white text-xs font-semibold transition-all shadow-sm focus:outline-none focus:ring-2 focus:ring-[#1877F2]"
                >
                  <Facebook className="w-3.5 h-3.5 fill-current" />
                  <span>Follow us on Facebook</span>
                </a>

                <a
                  id="footer-brand-instagram-btn"
                  href="https://www.instagram.com/odophub/"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Follow ODOPHUB (@odophub) on Instagram"
                  className="inline-flex items-center gap-2 px-3.5 py-2 rounded-lg bg-gradient-to-r from-[#833AB4] via-[#FD1D1D] to-[#F77737] hover:opacity-95 text-white text-xs font-semibold transition-all shadow-sm focus:outline-none focus:ring-2 focus:ring-[#E1306C]"
                >
                  <Instagram className="w-3.5 h-3.5" />
                  <span>Follow ODOPHUB (@odophub)</span>
                </a>
              </div>
            </div>
          </div>

          {/* Quick Navigation */}
          <div>
            <h3 className="text-xs uppercase tracking-widest font-semibold text-[#DFD7CD] mb-4">
              Discovery
            </h3>
            <ul className="space-y-2.5 text-sm text-[#BDB2A5]">
              <li>
                <button onClick={() => handleNav('home')} className="hover:text-white transition-colors">
                  Home
                </button>
              </li>
              <li>
                <button onClick={() => handleNav('explore')} className="hover:text-white transition-colors">
                  Explore Crafts
                </button>
              </li>
              <li>
                <button onClick={() => handleNav('odop')} className="hover:text-white transition-colors flex items-center gap-1.5 text-[#E0C09E]">
                  <Building2 className="w-3.5 h-3.5 text-[#B8502E]" />
                  <span>One District One Product</span>
                </button>
              </li>
              <li>
                <button onClick={() => handleNav('gi')} className="hover:text-white transition-colors flex items-center gap-1.5 text-[#A5CEB5]">
                  <Scale className="w-3.5 h-3.5 text-[#246243]" />
                  <span>Geographical Indications</span>
                </button>
              </li>
              <li>
                <button onClick={() => handleNav('states')} className="hover:text-white transition-colors">
                  Explore by State
                </button>
              </li>
              <li>
                <button onClick={() => handleNav('traditional-arts')} className="hover:text-white transition-colors flex items-center gap-1.5">
                  <Layers className="w-3.5 h-3.5 text-[#B8502E]" />
                  <span>Traditional Arts</span>
                </button>
              </li>
              <li>
                <button onClick={() => handleNav('stories')} className="hover:text-white transition-colors">
                  Story of the Art
                </button>
              </li>
              <li>
                <button onClick={() => handleNav('artisans')} className="hover:text-white transition-colors flex items-center gap-1.5">
                  <Users className="w-3.5 h-3.5 text-[#B8502E]" />
                  <span>Meet the Makers</span>
                </button>
              </li>
              <li>
                <button onClick={() => handleNav('seller-partner')} className="hover:text-white transition-colors flex items-center gap-1.5 text-[#E0C09E]">
                  <Building2 className="w-3.5 h-3.5 text-[#B8502E]" />
                  <span>Become a Seller Partner</span>
                </button>
              </li>
              <li>
                <button onClick={() => handleNav('about')} className="hover:text-white transition-colors font-medium text-white">
                  About ODOP Hub
                </button>
              </li>
              <li className="pl-2 border-l border-[#44382E]">
                <button onClick={() => handleNav('about', { section: 'why-we-exist' })} className="hover:text-white transition-colors text-xs text-[#9E9080]">
                  &bull; Why We Exist
                </button>
              </li>
              <li className="pl-2 border-l border-[#44382E]">
                <button onClick={() => handleNav('about', { section: 'people-behind' })} className="hover:text-white transition-colors text-xs text-[#9E9080]">
                  &bull; People Behind ODOP Hub
                </button>
              </li>
              <li className="pl-2 border-l border-[#44382E]">
                <button onClick={() => handleNav('about', { section: 'lets-connect' })} className="hover:text-white transition-colors text-xs text-[#E0C09E] flex items-center gap-1">
                  <Mail className="w-3 h-3 text-[#B8502E]" />
                  <span>Let’s Connect</span>
                </button>
              </li>
            </ul>
          </div>

          {/* Regional Spotlights */}
          <div>
            <h3 className="text-xs uppercase tracking-widest font-semibold text-[#DFD7CD] mb-4">
              Featured States
            </h3>
            <ul className="space-y-2.5 text-sm text-[#BDB2A5]">
              <li>
                <button onClick={() => handleNav('state-detail', { stateId: 'bihar' })} className="hover:text-white transition-colors flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#C45A34]" />
                  <span>Bihar (Mithila &amp; Anga)</span>
                </button>
              </li>
              <li>
                <button onClick={() => handleNav('state-detail', { stateId: 'karnataka' })} className="hover:text-white transition-colors flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#C45A34]" />
                  <span>Karnataka (Kinnal &amp; Ilkal)</span>
                </button>
              </li>
              <li>
                <button onClick={() => handleNav('state-detail', { stateId: 'odisha' })} className="hover:text-white transition-colors">
                  Odisha (Kotpad Handloom)
                </button>
              </li>
              <li>
                <button onClick={() => handleNav('state-detail', { stateId: 'rajasthan' })} className="hover:text-white transition-colors">
                  Rajasthan (Blue Pottery)
                </button>
              </li>
              <li>
                <button onClick={() => handleNav('state-detail', { stateId: 'uttar-pradesh' })} className="hover:text-white transition-colors">
                  Uttar Pradesh (Banarasi Silk)
                </button>
              </li>
              <li>
                <button onClick={() => handleNav('state-detail', { stateId: 'jammu-and-kashmir' })} className="hover:text-white transition-colors">
                  Jammu &amp; Kashmir (Pashmina)
                </button>
              </li>
            </ul>
          </div>

          {/* Educational / Registry Guidance */}
          <div>
            <h3 className="text-xs uppercase tracking-widest font-semibold text-[#DFD7CD] mb-4">
              Heritage Knowledge
            </h3>
            <ul className="space-y-2.5 text-sm text-[#BDB2A5]">
              <li>
                <button
                  onClick={onOpenODOPInfo}
                  className="hover:text-white text-left transition-colors flex items-center gap-1 text-[#E2D8CC]"
                >
                  <ShieldCheck className="w-3.5 h-3.5 text-[#A87C38]" />
                  <span>Understanding ODOP &amp; GI</span>
                </button>
              </li>
              <li>
                <button onClick={() => handleNav('explore')} className="hover:text-white transition-colors">
                  Handloom &amp; Wild Silks
                </button>
              </li>
              <li>
                <button onClick={() => handleNav('explore')} className="hover:text-white transition-colors">
                  Ritual Painting Traditions
                </button>
              </li>
              <li>
                <button onClick={() => handleNav('explore')} className="hover:text-white transition-colors">
                  Wetland Superfoods
                </button>
              </li>
              <li>
                <button onClick={() => handleNav('explore')} className="hover:text-white transition-colors">
                  Traditional Woodcraft &amp; Toys
                </button>
              </li>
            </ul>
          </div>
        </div>

        {/* Connect with ODOP Hub Section */}
        <section
          aria-labelledby="footer-connect-heading"
          className="mt-12 pt-10 border-t border-[#382E25]"
        >
          <div className="bg-[#2D241D] border border-[#3E3328] rounded-2xl p-6 sm:p-8 flex flex-col md:flex-row items-start md:items-center justify-between gap-6 shadow-sm">
            <div className="space-y-2 max-w-2xl">
              <span className="text-[11px] uppercase tracking-widest text-[#C45A34] font-semibold block">
                Social Media &bull; Heritage Community
              </span>
              <h3
                id="footer-connect-heading"
                className="font-serif text-2xl sm:text-3xl text-[#F7F3EE] font-bold tracking-tight"
              >
                Connect with ODOP Hub
              </h3>
              <p className="text-sm text-[#BDB2A5] leading-relaxed">
                Follow our journey as we discover, support and showcase India&apos;s living heritage.
              </p>
              <div className="pt-1 flex flex-wrap items-center gap-2 text-xs sm:text-sm text-[#DFD7CD]">
                <span className="text-base select-none" aria-hidden="true">❤️</span>
                <span className="font-medium text-[#FAF8F5]">
                  Like what we&apos;re doing?{' '}
                  <span className="text-[#BDB2A5] font-normal">
                    Follow ODOPHUB (@odophub) on Instagram and Facebook to celebrate India&apos;s living heritage.
                  </span>
                </span>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row flex-wrap items-stretch sm:items-center gap-3 shrink-0 w-full md:w-auto">
              {/* Follow us on Facebook */}
              <a
                id="footer-facebook-follow-btn"
                href="https://www.facebook.com/share/19rtRNyFxM/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Follow ODOP Hub on Facebook"
                className="inline-flex items-center justify-center gap-2.5 px-4 py-2.5 rounded-lg bg-[#3C3026] hover:bg-[#483B30] text-[#EDE7DF] hover:text-white border border-[#524436] text-xs sm:text-sm font-semibold transition-all shadow-sm focus:outline-none focus:ring-2 focus:ring-[#1877F2]"
              >
                <Facebook className="w-4 h-4 text-[#1877F2] fill-current" />
                <span>Follow us on Facebook</span>
              </a>

              {/* Follow ODOPHUB on Instagram */}
              <a
                id="footer-instagram-follow-btn"
                href="https://www.instagram.com/odophub/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Follow ODOPHUB (@odophub) on Instagram"
                className="inline-flex items-center justify-center gap-2.5 px-4 py-2.5 rounded-lg bg-[#3C3026] hover:bg-[#483B30] text-[#EDE7DF] hover:text-white border border-[#524436] text-xs sm:text-sm font-semibold transition-all shadow-sm focus:outline-none focus:ring-2 focus:ring-[#E1306C]"
              >
                <Instagram className="w-4 h-4 text-[#E1306C]" />
                <span>Follow @odophub</span>
              </a>

              {/* Like us on Facebook CTA */}
              <a
                id="footer-facebook-like-btn"
                href="https://www.facebook.com/share/19rtRNyFxM/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Follow ODOP Hub on Facebook - Like us on Facebook"
                className="inline-flex items-center justify-center gap-2.5 px-5 py-2.5 rounded-lg bg-[#1877F2] hover:bg-[#166fe5] active:bg-[#1465d2] text-white text-xs sm:text-sm font-semibold transition-all shadow-md hover:scale-[1.02] active:scale-[0.98] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#1877F2]"
              >
                <Facebook className="w-4 h-4 fill-white" />
                <span>Like us on Facebook &rarr;</span>
              </a>

              {/* Follow ODOPHUB on Instagram CTA */}
              <a
                id="footer-instagram-profile-btn"
                href="https://www.instagram.com/odophub/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Follow ODOPHUB on Instagram - @odophub"
                className="inline-flex items-center justify-center gap-2.5 px-5 py-2.5 rounded-lg bg-gradient-to-r from-[#833AB4] via-[#FD1D1D] to-[#F77737] hover:opacity-95 active:opacity-90 text-white text-xs sm:text-sm font-semibold transition-all shadow-md hover:scale-[1.02] active:scale-[0.98] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#E1306C]"
              >
                <Instagram className="w-4 h-4" />
                <span>ODOPHUB on Instagram &rarr;</span>
              </a>
            </div>
          </div>
        </section>

        {/* Brand Architecture & Disclaimer note */}
        <div className="mt-14 pt-8 border-t border-[#382E25] text-xs text-[#8A7E72] flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
          <div>
            <p>
              &copy; {new Date().getFullYear()} ODOP Hub (odophub.com). Dedicated to India&apos;s master craftspeople and rural traditions.
            </p>
            <p className="text-[11px] text-[#73685D] mt-0.5">
              Long-term brand architecture aligned with VIRASA heritage initiative. Non-transactional cultural discovery edition.
            </p>
          </div>
          <div className="flex items-center gap-4 text-xs text-[#A89A8C]">
            <span>Craftsmanship</span>
            <span>&bull;</span>
            <span>Authenticity</span>
            <span>&bull;</span>
            <span>Storytelling</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
