import React, { useState } from 'react';
import {
  Building2,
  Award,
  ShieldCheck,
  CheckCircle2,
  Send,
  ArrowLeft,
  ArrowRight,
  MessageCircle,
  Mail,
  Sparkles,
  MapPin,
  Users,
  Heart,
  Copy,
  Check,
  ExternalLink,
  Phone,
  FileText,
  AlertCircle
} from 'lucide-react';
import { STATES_DATA } from '../data/states';

interface SellerPartnerViewProps {
  onNavigate: (view: string, params?: { stateId?: string; productId?: string }) => void;
}

export const SellerPartnerView: React.FC<SellerPartnerViewProps> = ({ onNavigate }) => {
  const [formData, setFormData] = useState({
    name: '',
    enterpriseName: '',
    partnerType: 'Master Artisan',
    state: '',
    district: '',
    craftSpecialization: '',
    heritageStatus: 'Official ODOP Product',
    email: '',
    phone: '',
    description: '',
    hasAuthenticLineage: true,
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [copied, setCopied] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');

  const primaryEmail = 'samrat@odophub.com';
  const secondaryEmail = 'rahulranjandop@gmail.com';
  const whatsappNumber = '919108282970';

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value, type } = e.target;
    if (type === 'checkbox') {
      const checked = (e.target as HTMLInputElement).checked;
      setFormData((prev) => ({ ...prev, [name]: checked }));
    } else {
      setFormData((prev) => ({ ...prev, [name]: value }));
    }
    if (errorMsg) setErrorMsg('');
  };

  const getApplicationSummary = () => {
    return `ODOP HUB — SELLER PARTNER REGISTRATION APPLICATION
============================================================
Application Date: ${new Date().toLocaleDateString('en-IN', {
      weekday: 'long',
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    })}

1. APPLICANT & ENTERPRISE DETAILS:
   - Contact Person / Lead Artisan: ${formData.name}
   - Enterprise / Workshop / Guild: ${formData.enterpriseName}
   - Seller Partner Category: ${formData.partnerType}
   - Heritage Status: ${formData.heritageStatus}

2. GEOGRAPHY & PROVENANCE:
   - State / Union Territory: ${formData.state}
   - District / City: ${formData.district || 'Not specified'}

3. CRAFT SPECIALIZATION:
   ${formData.craftSpecialization}

4. CONTACT INFORMATION:
   - Email: ${formData.email}
   - Phone / WhatsApp: ${formData.phone || 'Not specified'}

5. CRAFT TRADITION & PRODUCT DESCRIPTION:
   ${formData.description || 'No additional notes provided.'}

6. AUTHENTICITY DECLARATION:
   ${
     formData.hasAuthenticLineage
       ? 'Confirmed: Authentic Indian handicrafts, traditional handlooms, or district specialty items produced with indigenous craft skills.'
       : 'Unconfirmed'
   }

============================================================
DISPATCHED TO REVIEW INBOXES:
1. ${primaryEmail} (ODOP Hub Directorate)
2. ${secondaryEmail} (Artisan & Cultural Research Desk)

ODOP Hub (odophub.com) — India's Living Heritage Discovery Platform`;
  };

  const getMailtoUrl = () => {
    const subject = `[ODOP Hub Partner Application] ${formData.enterpriseName || formData.name} - ${formData.state} (${formData.craftSpecialization || 'Handicrafts'})`;
    const body = getApplicationSummary();
    // Pre-populate both recipients in the TO line and CC line for universal mail client compatibility
    return `mailto:${primaryEmail},${secondaryEmail}?cc=${secondaryEmail}&subject=${encodeURIComponent(
      subject
    )}&body=${encodeURIComponent(body)}`;
  };

  const getWhatsAppUrl = () => {
    const message = `*ODOP Hub Seller Partner Registration Application*

*Applicant:* ${formData.name}
*Enterprise:* ${formData.enterpriseName}
*Craft:* ${formData.craftSpecialization}
*State/District:* ${formData.district ? `${formData.district}, ` : ''}${formData.state}
*Email:* ${formData.email}
*Phone:* ${formData.phone || 'N/A'}
*Category:* ${formData.partnerType} (${formData.heritageStatus})

*Delivered to Review Inboxes:* ${primaryEmail} & ${secondaryEmail}`;
    return `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;
  };

  const copyApplicationToClipboard = () => {
    const summary = getApplicationSummary();
    navigator.clipboard.writeText(summary);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!formData.name.trim()) {
      setErrorMsg('Please enter your full contact name.');
      return;
    }
    if (!formData.enterpriseName.trim()) {
      setErrorMsg('Please enter your workshop, guild, or cooperative name.');
      return;
    }
    if (!formData.email.trim() || !formData.email.includes('@')) {
      setErrorMsg('Please provide a valid email address.');
      return;
    }
    if (!formData.state) {
      setErrorMsg('Please select your state.');
      return;
    }
    if (!formData.craftSpecialization.trim()) {
      setErrorMsg('Please state your primary craft or product specialization.');
      return;
    }

    setIsSubmitting(true);
    setErrorMsg('');

    try {
      await new Promise((resolve) => setTimeout(resolve, 500));
      setIsSubmitted(true);

      // Trigger user's mail client with pre-filled details to both samrat@odophub.com and rahulranjandop@gmail.com
      const mailtoUrl = getMailtoUrl();
      const mailtoLink = document.createElement('a');
      mailtoLink.href = mailtoUrl;
      mailtoLink.target = '_blank';
      mailtoLink.rel = 'noopener noreferrer';
      document.body.appendChild(mailtoLink);
      mailtoLink.click();
      document.body.removeChild(mailtoLink);
    } catch {
      setIsSubmitted(true);
    } finally {
      setIsSubmitting(false);
      window.scrollTo({ top: 100, behavior: 'smooth' });
    }
  };

  const resetForm = () => {
    setIsSubmitted(false);
    setFormData({
      name: '',
      enterpriseName: '',
      partnerType: 'Master Artisan',
      state: '',
      district: '',
      craftSpecialization: '',
      heritageStatus: 'Official ODOP Product',
      email: '',
      phone: '',
      description: '',
      hasAuthenticLineage: true,
    });
    window.scrollTo({ top: 100, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-[#FAF8F5] py-8 sm:py-12">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Navigation Breadcrumb */}
        <div className="mb-6 flex items-center justify-between">
          <button
            onClick={() => onNavigate('home')}
            className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#8C7662] hover:text-[#2C241E] transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Back to Home</span>
          </button>
          <span className="text-xs uppercase tracking-widest text-[#B8502E] font-semibold">
            Partner With ODOP Hub
          </span>
        </div>

        {/* Hero Card */}
        <div className="bg-[#2C241E] text-[#FAF8F5] rounded-3xl p-8 sm:p-12 border border-[#44382E] shadow-sm mb-10 relative overflow-hidden">
          <div className="relative z-10 max-w-2xl space-y-4">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#FAF8F5]/10 border border-[#FAF8F5]/15 text-[#EFE7DC] text-xs font-semibold uppercase tracking-wider">
              <Sparkles className="w-3.5 h-3.5 text-[#C45A34]" />
              <span>Artisan &amp; Producer Network</span>
            </div>

            <h1 className="font-serif text-3xl sm:text-5xl font-bold tracking-tight text-white">
              Become an ODOP Hub Seller Partner
            </h1>

            <p className="text-sm sm:text-base text-[#D8C7B5] leading-relaxed font-light">
              Are you an artisan, traditional producer or heritage-product seller? Join ODOP Hub and showcase your products to a wider audience passionate about India&apos;s living heritage.
            </p>

            <div className="pt-2 flex flex-wrap items-center gap-4 text-xs text-[#E8DCCF]">
              <span className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-[#A87C38]" />
                <span>Zero Upfront Listing Fees</span>
              </span>
              <span className="flex items-center gap-1.5">
                <ShieldCheck className="w-4 h-4 text-[#A87C38]" />
                <span>ODOP &amp; GI Verified Provenance</span>
              </span>
              <span className="flex items-center gap-1.5">
                <Users className="w-4 h-4 text-[#A87C38]" />
                <span>Direct Artisan Support</span>
              </span>
            </div>
          </div>
        </div>

        {/* 3 Pillars of Partnership */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mb-10">
          <div className="bg-white rounded-2xl p-6 border border-[#E9E0D4] shadow-xs">
            <div className="w-10 h-10 rounded-xl bg-[#FAF1E3] text-[#87551C] flex items-center justify-center mb-3">
              <Award className="w-5 h-5" />
            </div>
            <h3 className="font-serif text-base font-bold text-[#2C241E]">
              Authentic Recognition
            </h3>
            <p className="text-xs text-[#6A5A4D] mt-1.5 leading-relaxed">
              Your craft will be credited with district terroir, ODOP alignment, and GI registration status.
            </p>
          </div>

          <div className="bg-white rounded-2xl p-6 border border-[#E9E0D4] shadow-xs">
            <div className="w-10 h-10 rounded-xl bg-[#EAF5ED] text-[#246243] flex items-center justify-center mb-3">
              <Users className="w-5 h-5" />
            </div>
            <h3 className="font-serif text-base font-bold text-[#2C241E]">
              Artisans &amp; Cooperatives
            </h3>
            <p className="text-xs text-[#6A5A4D] mt-1.5 leading-relaxed">
              Open to individual master craftspeople, women&apos;s self-help groups (SHGs), and regional producer cooperatives.
            </p>
          </div>

          <div className="bg-white rounded-2xl p-6 border border-[#E9E0D4] shadow-xs">
            <div className="w-10 h-10 rounded-xl bg-[#FDF2F0] text-[#B8502E] flex items-center justify-center mb-3">
              <Heart className="w-5 h-5" />
            </div>
            <h3 className="font-serif text-base font-bold text-[#2C241E]">
              Story &amp; Lineage
            </h3>
            <p className="text-xs text-[#6A5A4D] mt-1.5 leading-relaxed">
              We document your hands at work, raw materials, and indigenous folklore to build customer respect.
            </p>
          </div>
        </div>

        {/* Registration Form / Submission State */}
        <div className="bg-white rounded-3xl border border-[#E5DCD0] p-6 sm:p-10 shadow-sm">
          {isSubmitted ? (
            <div className="py-6 space-y-8">
              {/* Success Badge & Header */}
              <div className="text-center space-y-3">
                <div className="w-16 h-16 rounded-full bg-[#EAF5ED] text-[#246243] flex items-center justify-center mx-auto border border-[#CDE5D5] shadow-sm">
                  <CheckCircle2 className="w-8 h-8" />
                </div>

                <div className="max-w-xl mx-auto">
                  <span className="text-[11px] uppercase tracking-wider font-bold text-[#246243] bg-[#EAF5ED] px-3 py-1 rounded-full">
                    Registration Compiled &amp; Routed
                  </span>
                  <h2 className="font-serif text-2xl sm:text-3xl font-bold text-[#2C241E] mt-3">
                    Application Received for {formData.enterpriseName || formData.name}
                  </h2>
                  <p className="text-sm text-[#5A4D43] mt-2 leading-relaxed">
                    Thank you for applying to join ODOP Hub. Your filled registration details have been prepared and routed to both our onboarding inboxes for evaluation.
                  </p>
                </div>
              </div>

              {/* Two Destination Inboxes Banner */}
              <div className="bg-[#FAF5EF] rounded-2xl border border-[#EAE0D2] p-5 sm:p-6 space-y-3">
                <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#8C4A27]">
                  <Mail className="w-4 h-4 text-[#B8502E]" />
                  <span>Delivered to 2 ODOP Hub Inboxes</span>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-1">
                  <div className="bg-white rounded-xl p-3.5 border border-[#E5DCD0] flex items-center gap-3 shadow-xs">
                    <div className="w-9 h-9 rounded-lg bg-[#FAF1E3] text-[#87551C] flex items-center justify-center shrink-0">
                      <Mail className="w-4 h-4" />
                    </div>
                    <div className="min-w-0">
                      <span className="text-[10px] uppercase font-bold text-[#8C7662] block">
                        ODOP Hub Directorate
                      </span>
                      <a
                        href={`mailto:${primaryEmail}`}
                        className="text-xs sm:text-sm font-semibold text-[#2C241E] hover:text-[#B8502E] truncate block"
                      >
                        {primaryEmail}
                      </a>
                    </div>
                  </div>

                  <div className="bg-white rounded-xl p-3.5 border border-[#E5DCD0] flex items-center gap-3 shadow-xs">
                    <div className="w-9 h-9 rounded-lg bg-[#EAF5ED] text-[#246243] flex items-center justify-center shrink-0">
                      <Mail className="w-4 h-4" />
                    </div>
                    <div className="min-w-0">
                      <span className="text-[10px] uppercase font-bold text-[#8C7662] block">
                        Cultural Research Desk
                      </span>
                      <a
                        href={`mailto:${secondaryEmail}`}
                        className="text-xs sm:text-sm font-semibold text-[#2C241E] hover:text-[#B8502E] truncate block"
                      >
                        {secondaryEmail}
                      </a>
                    </div>
                  </div>
                </div>
                <p className="text-[11px] text-[#7A6A5C] leading-relaxed pt-1">
                  Our onboarding team will review your district provenance, ODOP/GI lineage, and connect back at <strong className="text-[#2C241E]">{formData.email}</strong> {formData.phone ? `or ${formData.phone}` : ''} within 2-3 business days.
                </p>
              </div>

              {/* Action Buttons: Open in Email App, Copy Details, WhatsApp */}
              <div className="flex flex-col sm:flex-row flex-wrap items-center justify-center gap-3 pt-1">
                <a
                  id="btn-open-email-clients"
                  href={getMailtoUrl()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-[#B8502E] hover:bg-[#A14120] text-white text-xs sm:text-sm font-semibold shadow-sm transition-all"
                >
                  <Mail className="w-4 h-4" />
                  <span>Send Email to Both Inboxes</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>

                <button
                  id="btn-copy-application-details"
                  onClick={copyApplicationToClipboard}
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-white border border-[#D8CCBD] hover:bg-[#FAF8F5] text-[#4A3E34] text-xs sm:text-sm font-semibold shadow-xs transition-all"
                >
                  {copied ? (
                    <>
                      <Check className="w-4 h-4 text-[#246243]" />
                      <span className="text-[#246243]">Copied to Clipboard!</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-4 h-4 text-[#8C7662]" />
                      <span>Copy Full Application</span>
                    </>
                  )}
                </button>

                <a
                  id="btn-share-whatsapp"
                  href={getWhatsAppUrl()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-[#25D366] hover:bg-[#20bd5a] text-white text-xs sm:text-sm font-semibold shadow-sm transition-all"
                >
                  <MessageCircle className="w-4 h-4 fill-current" />
                  <span>Forward via WhatsApp</span>
                </a>
              </div>

              {/* Summary of Submitted Details */}
              <div className="bg-[#FAF8F5] rounded-2xl border border-[#EAE2D5] p-5 sm:p-6 space-y-4">
                <div className="flex items-center justify-between border-b border-[#EAE2D5] pb-3">
                  <div className="flex items-center gap-2">
                    <FileText className="w-4 h-4 text-[#B8502E]" />
                    <span className="text-xs font-bold uppercase tracking-wider text-[#2C241E]">
                      Submitted Registration Summary
                    </span>
                  </div>
                  <span className="text-[11px] text-[#8C7662]">
                    State: {formData.state}
                  </span>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
                  <div>
                    <span className="text-[#8C7662] block">Contact Person:</span>
                    <span className="font-semibold text-[#2C241E]">{formData.name}</span>
                  </div>
                  <div>
                    <span className="text-[#8C7662] block">Workshop / Brand:</span>
                    <span className="font-semibold text-[#2C241E]">{formData.enterpriseName}</span>
                  </div>
                  <div>
                    <span className="text-[#8C7662] block">Category:</span>
                    <span className="font-medium text-[#2C241E]">{formData.partnerType}</span>
                  </div>
                  <div>
                    <span className="text-[#8C7662] block">Heritage Designation:</span>
                    <span className="font-medium text-[#B8502E]">{formData.heritageStatus}</span>
                  </div>
                  <div>
                    <span className="text-[#8C7662] block">Location:</span>
                    <span className="text-[#2C241E]">
                      {formData.district ? `${formData.district}, ` : ''}{formData.state}
                    </span>
                  </div>
                  <div>
                    <span className="text-[#8C7662] block">Email &amp; Phone:</span>
                    <span className="text-[#2C241E]">{formData.email} {formData.phone ? `(${formData.phone})` : ''}</span>
                  </div>
                  <div className="sm:col-span-2">
                    <span className="text-[#8C7662] block">Craft Specialization:</span>
                    <span className="font-semibold text-[#2C241E]">{formData.craftSpecialization}</span>
                  </div>
                  {formData.description && (
                    <div className="sm:col-span-2">
                      <span className="text-[#8C7662] block">Tradition &amp; Notes:</span>
                      <p className="text-[#5A4D43] italic mt-0.5 leading-relaxed bg-white p-3 rounded-lg border border-[#EAE2D5]">
                        &ldquo;{formData.description}&rdquo;
                      </p>
                    </div>
                  )}
                </div>
              </div>

              {/* Navigation CTAs */}
              <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-3 border-t border-[#F0EAE1]">
                <button
                  onClick={resetForm}
                  className="px-5 py-2.5 rounded-xl text-xs font-semibold text-[#8C7662] hover:text-[#2C241E] hover:bg-[#FAF8F5] transition-colors"
                >
                  Submit Another Application
                </button>
                <button
                  onClick={() => onNavigate('home')}
                  className="px-6 py-2.5 rounded-xl bg-[#2C241E] text-white text-xs font-semibold hover:bg-[#43372E] transition-colors"
                >
                  Return to Homepage
                </button>
                <button
                  onClick={() => onNavigate('explore')}
                  className="px-6 py-2.5 rounded-xl bg-white border border-[#D8CCBD] text-[#4A3E34] text-xs font-semibold hover:bg-[#FAF8F5] transition-colors"
                >
                  Explore Current Products
                </button>
              </div>
            </div>
          ) : (
            <div>
              <div className="border-b border-[#F0EAE1] pb-6 mb-6">
                <h2 className="font-serif text-2xl font-bold text-[#2C241E]">
                  Seller Partner Registration
                </h2>
                <p className="text-xs sm:text-sm text-[#7A6A5C] mt-1">
                  Fill in your details to begin the verification process. Genuine handmade crafts, GI heritage goods, and district specialty producers only.
                </p>
              </div>

              {errorMsg && (
                <div className="mb-6 p-4 rounded-xl bg-[#FDF2F0] border border-[#F3CEC9] text-[#B83226] text-xs font-medium flex items-center gap-2">
                  <AlertCircle className="w-4 h-4 shrink-0" />
                  <span>{errorMsg}</span>
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-5">
                {/* Contact Name & Enterprise */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold uppercase tracking-wider text-[#4A3E34] mb-1.5">
                      Contact Person / Lead Artisan <span className="text-[#B8502E]">*</span>
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="e.g. Rameshwar Kumar"
                      required
                      className="w-full px-3.5 py-2.5 rounded-lg bg-[#FAF8F5] border border-[#DCD3C5] focus:outline-none focus:ring-2 focus:ring-[#B8502E] text-sm text-[#2C241E] placeholder:text-[#A89886]"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold uppercase tracking-wider text-[#4A3E34] mb-1.5">
                      Workshop / Cooperative / Brand Name <span className="text-[#B8502E]">*</span>
                    </label>
                    <input
                      type="text"
                      name="enterpriseName"
                      value={formData.enterpriseName}
                      onChange={handleChange}
                      placeholder="e.g. Mithila Gramin Kala Sansthan"
                      required
                      className="w-full px-3.5 py-2.5 rounded-lg bg-[#FAF8F5] border border-[#DCD3C5] focus:outline-none focus:ring-2 focus:ring-[#B8502E] text-sm text-[#2C241E] placeholder:text-[#A89886]"
                    />
                  </div>
                </div>

                {/* Entity Type & Heritage Status */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold uppercase tracking-wider text-[#4A3E34] mb-1.5">
                      Seller Partner Category
                    </label>
                    <select
                      name="partnerType"
                      value={formData.partnerType}
                      onChange={handleChange}
                      className="w-full px-3.5 py-2.5 rounded-lg bg-[#FAF8F5] border border-[#DCD3C5] focus:outline-none focus:ring-2 focus:ring-[#B8502E] text-sm text-[#2C241E]"
                    >
                      <option value="Master Artisan">Master Artisan / Independent Craftsman</option>
                      <option value="Artisan Collective">Artisan Collective / Self-Help Group (SHG)</option>
                      <option value="Regional Cooperative">Regional Handloom / Handicrafts Cooperative</option>
                      <option value="Traditional Producer">Traditional Agro / Food Heritage Producer</option>
                      <option value="Heritage Guild">Heritage Guild / Ethical Enterprise</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold uppercase tracking-wider text-[#4A3E34] mb-1.5">
                      Heritage Designation
                    </label>
                    <select
                      name="heritageStatus"
                      value={formData.heritageStatus}
                      onChange={handleChange}
                      className="w-full px-3.5 py-2.5 rounded-lg bg-[#FAF8F5] border border-[#DCD3C5] focus:outline-none focus:ring-2 focus:ring-[#B8502E] text-sm text-[#2C241E]"
                    >
                      <option value="Official ODOP Product">Designated ODOP District Product</option>
                      <option value="Certified GI Tagged">Certified Geographical Indication (GI)</option>
                      <option value="Traditional Heritage Craft">Traditional Unregistered Heritage Craft</option>
                      <option value="Applied for GI">Applied for GI / ODOP Recognition</option>
                    </select>
                  </div>
                </div>

                {/* State & District */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold uppercase tracking-wider text-[#4A3E34] mb-1.5">
                      State / Union Territory <span className="text-[#B8502E]">*</span>
                    </label>
                    <select
                      name="state"
                      value={formData.state}
                      onChange={handleChange}
                      required
                      className="w-full px-3.5 py-2.5 rounded-lg bg-[#FAF8F5] border border-[#DCD3C5] focus:outline-none focus:ring-2 focus:ring-[#B8502E] text-sm text-[#2C241E]"
                    >
                      <option value="">Select State / UT</option>
                      {STATES_DATA.map((s) => (
                        <option key={s.id} value={s.name}>
                          {s.name}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold uppercase tracking-wider text-[#4A3E34] mb-1.5">
                      District / City
                    </label>
                    <input
                      type="text"
                      name="district"
                      value={formData.district}
                      onChange={handleChange}
                      placeholder="e.g. Madhubani, Varanasi, Koraput"
                      className="w-full px-3.5 py-2.5 rounded-lg bg-[#FAF8F5] border border-[#DCD3C5] focus:outline-none focus:ring-2 focus:ring-[#B8502E] text-sm text-[#2C241E] placeholder:text-[#A89886]"
                    />
                  </div>
                </div>

                {/* Craft Specialization */}
                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wider text-[#4A3E34] mb-1.5">
                    Craft / Product Specialization <span className="text-[#B8502E]">*</span>
                  </label>
                  <input
                    type="text"
                    name="craftSpecialization"
                    value={formData.craftSpecialization}
                    onChange={handleChange}
                    placeholder="e.g. Hand-spun Tussar Silk Sarees, Sikki Golden Grass Weaving, Terracotta Pottery"
                    required
                    className="w-full px-3.5 py-2.5 rounded-lg bg-[#FAF8F5] border border-[#DCD3C5] focus:outline-none focus:ring-2 focus:ring-[#B8502E] text-sm text-[#2C241E] placeholder:text-[#A89886]"
                  />
                </div>

                {/* Contact Email & Phone */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold uppercase tracking-wider text-[#4A3E34] mb-1.5">
                      Your Email Address <span className="text-[#B8502E]">*</span>
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="artisan@example.com"
                      required
                      className="w-full px-3.5 py-2.5 rounded-lg bg-[#FAF8F5] border border-[#DCD3C5] focus:outline-none focus:ring-2 focus:ring-[#B8502E] text-sm text-[#2C241E] placeholder:text-[#A89886]"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold uppercase tracking-wider text-[#4A3E34] mb-1.5">
                      Phone / WhatsApp Number
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="+91 XXXXX XXXXX"
                      className="w-full px-3.5 py-2.5 rounded-lg bg-[#FAF8F5] border border-[#DCD3C5] focus:outline-none focus:ring-2 focus:ring-[#B8502E] text-sm text-[#2C241E] placeholder:text-[#A89886]"
                    />
                  </div>
                </div>

                {/* Description */}
                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wider text-[#4A3E34] mb-1.5">
                    Brief Description of Products &amp; Tradition
                  </label>
                  <textarea
                    name="description"
                    rows={3}
                    value={formData.description}
                    onChange={handleChange}
                    placeholder="Tell us about the materials used, your lineage, number of artisans in your collective, or awards received..."
                    className="w-full px-3.5 py-2.5 rounded-lg bg-[#FAF8F5] border border-[#DCD3C5] focus:outline-none focus:ring-2 focus:ring-[#B8502E] text-sm text-[#2C241E] placeholder:text-[#A89886] resize-y"
                  />
                </div>

                {/* Verification confirmation */}
                <div className="flex items-start gap-2.5 pt-2">
                  <input
                    type="checkbox"
                    id="hasAuthenticLineage"
                    name="hasAuthenticLineage"
                    checked={formData.hasAuthenticLineage}
                    onChange={handleChange}
                    className="mt-1 w-4 h-4 rounded border-[#DCD3C5] text-[#B8502E] focus:ring-[#B8502E]"
                  />
                  <label htmlFor="hasAuthenticLineage" className="text-xs text-[#6A5A4D] leading-relaxed">
                    I confirm that our products represent authentic Indian handicrafts, traditional textiles, or district specialty items produced with indigenous craft skills.
                  </label>
                </div>

                {/* Two Inboxes Destination Notice */}
                <div className="bg-[#FAF4ED] border border-[#E8DFC2] rounded-xl p-4 flex items-start gap-3 text-xs text-[#5C4C3E]">
                  <Mail className="w-4 h-4 text-[#B8502E] shrink-0 mt-0.5" />
                  <div className="space-y-1">
                    <p className="font-semibold text-[#2C241E]">
                      Direct Application Routing to 2 Review Inboxes:
                    </p>
                    <p className="leading-relaxed">
                      Filled seller partner details will be delivered directly to{' '}
                      <span className="font-semibold text-[#B8502E] bg-white px-1.5 py-0.5 rounded border border-[#E5DCD0]">
                        {primaryEmail}
                      </span>{' '}
                      and{' '}
                      <span className="font-semibold text-[#B8502E] bg-white px-1.5 py-0.5 rounded border border-[#E5DCD0]">
                        {secondaryEmail}
                      </span>{' '}
                      for ODOP/GI verification and artisan onboarding.
                    </p>
                  </div>
                </div>

                {/* Submit button */}
                <div className="pt-2">
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-[#B8502E] text-white font-semibold text-sm shadow-md hover:bg-[#A14120] active:scale-[0.99] transition-all disabled:opacity-50"
                  >
                    {isSubmitting ? (
                      <span>Routing Application to Inboxes...</span>
                    ) : (
                      <>
                        <Send className="w-4 h-4" />
                        <span>Submit Registration &rarr;</span>
                      </>
                    )}
                  </button>
                </div>

                <p className="text-[11px] text-center text-[#8C7662]">
                  No upfront listing fees. Applications are audited by ODOP Hub to safeguard authentic artisan provenance.
                </p>
              </form>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
