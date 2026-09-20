import React from 'react';
import { X, ShieldCheck, Award, CheckCircle2, HelpCircle, ExternalLink } from 'lucide-react';

interface ODOPGIEducationModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ODOPGIEducationModal: React.FC<ODOPGIEducationModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-black/60 backdrop-blur-sm flex items-center justify-center p-4 sm:p-6">
      <div
        id="odop-gi-modal"
        className="relative bg-[#FAF8F5] rounded-2xl max-w-3xl w-full max-h-[90vh] overflow-y-auto border border-[#E0D7C9] shadow-2xl p-6 sm:p-8"
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2 rounded-full text-[#6B5A4B] hover:text-[#2C241E] hover:bg-[#EFE7DC] transition-colors"
          aria-label="Close modal"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Modal Header */}
        <div className="text-center max-w-xl mx-auto mb-8">
          <span className="text-xs uppercase tracking-widest font-semibold text-[#B8502E]">
            Heritage Knowledge &amp; Certification
          </span>
          <h2 className="font-serif text-3xl font-bold text-[#2C241E] mt-1">
            Understanding ODOP &amp; GI Tags
          </h2>
          <p className="text-sm text-[#6B5A4B] mt-2 leading-relaxed">
            India protects its indigenous crafts and regional agricultural treasures through two vital frameworks. Here is how they work in simple terms.
          </p>
        </div>

        {/* Side by Side Comparison */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          {/* ODOP Card */}
          <div className="bg-[#FDFDFB] rounded-xl p-6 border border-[#EAE2D5] flex flex-col justify-between">
            <div>
              <div className="w-10 h-10 rounded-lg bg-[#F7EBE6] text-[#B8502E] flex items-center justify-center mb-4">
                <ShieldCheck className="w-6 h-6" />
              </div>
              <span className="text-xs font-semibold uppercase tracking-wider text-[#B8502E]">
                Socio-Economic Initiative
              </span>
              <h3 className="font-serif text-xl font-bold text-[#2C241E] mt-1">
                One District One Product (ODOP)
              </h3>
              <p className="text-xs sm:text-sm text-[#5A4D43] mt-2.5 leading-relaxed">
                An initiative inspired by regional self-reliance that selects, brands, and promotes one unique signature product from each of India’s 750+ districts.
              </p>

              <div className="mt-4 pt-4 border-t border-[#F2EDE5] space-y-2.5 text-xs text-[#5A4D43]">
                <div className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#B8502E] shrink-0 mt-0.5" />
                  <span><strong>Core Purpose:</strong> Foster district-level artisan entrepreneurship, upgrade processing infrastructure, and expand global market reach.</span>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#B8502E] shrink-0 mt-0.5" />
                  <span><strong>Scope:</strong> Spans traditional handicrafts, textiles, processed foods, and regional agricultural superfoods.</span>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#B8502E] shrink-0 mt-0.5" />
                  <span><strong>Example:</strong> Mithila Makhana for Darbhanga; Madhubani Painting for Madhubani district; Kinnal Woodcraft for Koppal.</span>
                </div>
              </div>
            </div>

            <div className="mt-6 pt-3 border-t border-[#F0E9DF] text-[11px] text-[#8C7662]">
              Driven by DPIIT &amp; Ministry of Food Processing Industries
            </div>
          </div>

          {/* GI Tag Card */}
          <div className="bg-[#FDFDFB] rounded-xl p-6 border border-[#EAE2D5] flex flex-col justify-between">
            <div>
              <div className="w-10 h-10 rounded-lg bg-[#F5F0E8] text-[#8C6A33] flex items-center justify-center mb-4">
                <Award className="w-6 h-6" />
              </div>
              <span className="text-xs font-semibold uppercase tracking-wider text-[#8C6A33]">
                Intellectual Property Law
              </span>
              <h3 className="font-serif text-xl font-bold text-[#2C241E] mt-1">
                Geographical Indication (GI) Tag
              </h3>
              <p className="text-xs sm:text-sm text-[#5A4D43] mt-2.5 leading-relaxed">
                A legal certification granted under the GI Act 1999 that protects goods possessing a specific geographical origin, traditional qualities, and enduring reputation.
              </p>

              <div className="mt-4 pt-4 border-t border-[#F2EDE5] space-y-2.5 text-xs text-[#5A4D43]">
                <div className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#8C6A33] shrink-0 mt-0.5" />
                  <span><strong>Legal Protection:</strong> Prevents unauthorized copycats and fraudulent imitation under Indian and international WTO law.</span>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#8C6A33] shrink-0 mt-0.5" />
                  <span><strong>Criteria:</strong> Must possess qualities, characteristics, or methods inseparable from its specific terroir or human heritage.</span>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#8C6A33] shrink-0 mt-0.5" />
                  <span><strong>Example:</strong> Bhagalpur Silk (GI #207), Sujuni Embroidery (GI #74), Ilkal Saree (GI #43), Aranmula Mirror (GI #1).</span>
                </div>
              </div>
            </div>

            <div className="mt-6 pt-3 border-t border-[#F0E9DF] text-[11px] text-[#8C7662]">
              Administered by Geographical Indications Registry, Chennai
            </div>
          </div>
        </div>

        {/* Clear differentiation & integrity statement */}
        <div className="bg-[#F3EDE3] rounded-xl p-5 border border-[#DFD6C5] text-xs text-[#5A4D43] leading-relaxed">
          <h4 className="font-semibold text-[#2C241E] flex items-center gap-1.5 mb-1.5 text-sm">
            <HelpCircle className="w-4 h-4 text-[#B8502E]" />
            <span>Our Commitment to Factual Verification</span>
          </h4>
          <p>
            On ODOP Hub, we never make unsupported claims. Products are labeled with ODOP or GI badges only when verified through official registries (such as the Geographical Indications Registry and designated district industrial records). Each product card includes verifiable application references where available.
          </p>
        </div>

        {/* Action Button */}
        <div className="mt-6 flex justify-end">
          <button
            onClick={onClose}
            className="px-6 py-2.5 rounded-lg bg-[#2C241E] text-white font-medium text-sm hover:bg-[#B8502E] transition-colors"
          >
            Got It, Return to Discovery
          </button>
        </div>
      </div>
    </div>
  );
};
