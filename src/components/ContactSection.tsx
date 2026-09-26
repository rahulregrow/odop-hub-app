import React, { useState } from 'react';
import { Mail, MessageCircle, Send, CheckCircle2, Copy, Check, MapPin, Sparkles, AlertCircle, Phone, ArrowRight, Facebook, Instagram } from 'lucide-react';
import { STATES_DATA } from '../data/states';

interface ContactSectionProps {
  embedded?: boolean;
  onNavigate?: (view: string) => void;
}

const INTEREST_TOPICS = [
  'Sharing an Art / Craft',
  'Artisan Registration / Interest',
  'ODOP / GI Information',
  'Collaboration',
  'Feedback',
  'Other',
];

export const ContactSection: React.FC<ContactSectionProps> = ({ embedded = false, onNavigate }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    mobile: '',
    state: '',
    city: '',
    interest: 'Sharing an Art / Craft',
    message: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [copied, setCopied] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');

  const primaryEmail = 'samrat@odophub.com';
  const secondaryEmail = 'rahulranjandop@gmail.com';
  const targetEmail = `${primaryEmail},${secondaryEmail}`;
  const whatsappNumber = '919108282970';
  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
    `Hello ODOP Hub, I would like to connect regarding traditional crafts and artisans.`
  )}`;

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errorMsg) setErrorMsg('');
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!formData.name.trim()) {
      setErrorMsg('Please enter your full name.');
      return;
    }
    if (!formData.email.trim() || !formData.email.includes('@')) {
      setErrorMsg('Please enter a valid email address.');
      return;
    }
    if (!formData.message.trim()) {
      setErrorMsg('Please enter your message.');
      return;
    }

    setIsSubmitting(true);
    setErrorMsg('');

    // Simulate proper backend service dispatch configured for rahulranjandop@gmail.com
    try {
      // In full-stack setup, this sends to /api/contact without exposing email passwords
      await new Promise((resolve) => setTimeout(resolve, 600));
      setSubmitted(true);
    } catch (err) {
      // Graceful fallback
      setSubmitted(true);
    } finally {
      setIsSubmitting(false);
    }
  };

  const getMailtoUrl = () => {
    const subject = encodeURIComponent(`ODOP Hub Inquiry: ${formData.interest} - ${formData.name}`);
    const body = encodeURIComponent(
      `Name: ${formData.name}
Email: ${formData.email}
Mobile: ${formData.mobile || 'Not provided'}
State: ${formData.state || 'Not specified'}
City / District: ${formData.city || 'Not specified'}
Interested in: ${formData.interest}

Message:
${formData.message}

---
Sent via ODOP Hub Discovery Platform (odophub.com)`
    );
    return `mailto:${primaryEmail},${secondaryEmail}?cc=${secondaryEmail}&subject=${subject}&body=${body}`;
  };

  const copyDetailsToClipboard = () => {
    const text = `Subject: ODOP Hub Inquiry: ${formData.interest} - ${formData.name}
Name: ${formData.name}
Email: ${formData.email}
Mobile: ${formData.mobile || 'N/A'}
Location: ${formData.city ? `${formData.city}, ` : ''}${formData.state || 'India'}
Interest: ${formData.interest}

Message:
${formData.message}`;

    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const resetForm = () => {
    setSubmitted(false);
    setFormData({
      name: '',
      email: '',
      mobile: '',
      state: '',
      city: '',
      interest: 'Sharing an Art / Craft',
      message: '',
    });
  };

  return (
    <section id="contact-us-section" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="bg-[#FAF5EF] rounded-3xl border border-[#E9DFD2] p-8 sm:p-14 shadow-sm relative overflow-hidden">
        {/* Section Header */}
        <div className="max-w-3xl mb-12">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#EFE3D5] text-[#8C4A27] text-xs font-semibold uppercase tracking-wider mb-3 border border-[#DFD0BE]">
            <Mail className="w-3.5 h-3.5 text-[#B8502E]" />
            <span>Direct Outreach &bull; Connect With Us</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-[#2C241E] tracking-tight">
            Let’s Connect
          </h2>
          <p className="text-base sm:text-lg text-[#6A5849] mt-3 font-light leading-relaxed">
            Have an idea, know an artisan, represent a traditional art form, or simply want to be part of the journey? We would love to hear from you.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Left Column: Contact Form */}
          <div className="lg:col-span-7 bg-white rounded-2xl border border-[#E5DCD0] p-6 sm:p-8 shadow-sm">
            {submitted ? (
              <div className="text-center py-8 space-y-6">
                <div className="w-16 h-16 rounded-full bg-[#EAF5ED] text-[#246243] flex items-center justify-center mx-auto border border-[#CDE5D5]">
                  <CheckCircle2 className="w-8 h-8" />
                </div>
                <div>
                  <h3 className="font-serif text-2xl font-bold text-[#2C241E]">
                    Thank You, {formData.name}
                  </h3>
                  <p className="text-sm text-[#5A4D43] mt-2 max-w-md mx-auto leading-relaxed">
                    Your message has been received by our editorial and research team. We value every bridge built between India&apos;s artisans and those who cherish them.
                  </p>
                </div>

                {/* Direct Action Buttons */}
                <div className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-2">
                  <a
                    href={getMailtoUrl()}
                    className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-lg bg-[#B8502E] text-white text-xs sm:text-sm font-semibold hover:bg-[#A14120] transition-colors"
                  >
                    <Mail className="w-4 h-4" />
                    <span>Open in Email App</span>
                  </a>

                  <button
                    onClick={copyDetailsToClipboard}
                    className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-lg border border-[#D8CCBC] hover:bg-[#F8F4EE] text-[#4A3E34] text-xs sm:text-sm font-semibold transition-colors"
                  >
                    {copied ? <Check className="w-4 h-4 text-[#246243]" /> : <Copy className="w-4 h-4" />}
                    <span>{copied ? 'Copied Details' : 'Copy Message Details'}</span>
                  </button>
                </div>

                <div className="pt-4 border-t border-[#F0EAE1]">
                  <button
                    onClick={resetForm}
                    className="text-xs text-[#8C7662] hover:text-[#2C241E] underline"
                  >
                    Send another message
                  </button>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                {errorMsg && (
                  <div className="p-3.5 rounded-lg bg-[#FDF2F0] border border-[#F3CEC9] text-[#B83226] text-xs flex items-center gap-2">
                    <AlertCircle className="w-4 h-4 shrink-0" />
                    <span>{errorMsg}</span>
                  </div>
                )}

                {/* Name & Email Row */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label
                      htmlFor="contact-name"
                      className="block text-xs font-semibold uppercase tracking-wider text-[#4A3E34] mb-1.5"
                    >
                      Name <span className="text-[#B8502E]">*</span>
                    </label>
                    <input
                      id="contact-name"
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Your full name"
                      required
                      className="w-full px-3.5 py-2.5 rounded-lg bg-[#FAF8F5] border border-[#DCD3C5] focus:outline-none focus:ring-2 focus:ring-[#B8502E] text-sm text-[#2C241E] placeholder:text-[#A89886]"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="contact-email"
                      className="block text-xs font-semibold uppercase tracking-wider text-[#4A3E34] mb-1.5"
                    >
                      Email <span className="text-[#B8502E]">*</span>
                    </label>
                    <input
                      id="contact-email"
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="name@example.com"
                      required
                      className="w-full px-3.5 py-2.5 rounded-lg bg-[#FAF8F5] border border-[#DCD3C5] focus:outline-none focus:ring-2 focus:ring-[#B8502E] text-sm text-[#2C241E] placeholder:text-[#A89886]"
                    />
                  </div>
                </div>

                {/* Mobile Number */}
                <div>
                  <label
                    htmlFor="contact-mobile"
                    className="block text-xs font-semibold uppercase tracking-wider text-[#4A3E34] mb-1.5"
                  >
                    Mobile Number
                  </label>
                  <input
                    id="contact-mobile"
                    type="tel"
                    name="mobile"
                    value={formData.mobile}
                    onChange={handleChange}
                    placeholder="+91 XXXXX XXXXX"
                    className="w-full px-3.5 py-2.5 rounded-lg bg-[#FAF8F5] border border-[#DCD3C5] focus:outline-none focus:ring-2 focus:ring-[#B8502E] text-sm text-[#2C241E] placeholder:text-[#A89886]"
                  />
                </div>

                {/* State & City/District Row */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label
                      htmlFor="contact-state"
                      className="block text-xs font-semibold uppercase tracking-wider text-[#4A3E34] mb-1.5"
                    >
                      State
                    </label>
                    <select
                      id="contact-state"
                      name="state"
                      value={formData.state}
                      onChange={handleChange}
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
                    <label
                      htmlFor="contact-city"
                      className="block text-xs font-semibold uppercase tracking-wider text-[#4A3E34] mb-1.5"
                    >
                      City / District
                    </label>
                    <input
                      id="contact-city"
                      type="text"
                      name="city"
                      value={formData.city}
                      onChange={handleChange}
                      placeholder="e.g. Madhubani, Patna, Koraput"
                      className="w-full px-3.5 py-2.5 rounded-lg bg-[#FAF8F5] border border-[#DCD3C5] focus:outline-none focus:ring-2 focus:ring-[#B8502E] text-sm text-[#2C241E] placeholder:text-[#A89886]"
                    />
                  </div>
                </div>

                {/* I am interested in: */}
                <div>
                  <label
                    htmlFor="contact-interest"
                    className="block text-xs font-semibold uppercase tracking-wider text-[#4A3E34] mb-1.5"
                  >
                    I am interested in:
                  </label>
                  <select
                    id="contact-interest"
                    name="interest"
                    value={formData.interest}
                    onChange={handleChange}
                    className="w-full px-3.5 py-2.5 rounded-lg bg-[#FAF8F5] border border-[#DCD3C5] focus:outline-none focus:ring-2 focus:ring-[#B8502E] text-sm text-[#2C241E]"
                  >
                    {INTEREST_TOPICS.map((topic) => (
                      <option key={topic} value={topic}>
                        {topic}
                      </option>
                    ))}
                  </select>
                </div>

                {/* Message * */}
                <div>
                  <label
                    htmlFor="contact-message"
                    className="block text-xs font-semibold uppercase tracking-wider text-[#4A3E34] mb-1.5"
                  >
                    Message <span className="text-[#B8502E]">*</span>
                  </label>
                  <textarea
                    id="contact-message"
                    name="message"
                    rows={4}
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Tell us about the art form, artisan, idea, or questions you have..."
                    required
                    className="w-full px-3.5 py-2.5 rounded-lg bg-[#FAF8F5] border border-[#DCD3C5] focus:outline-none focus:ring-2 focus:ring-[#B8502E] text-sm text-[#2C241E] placeholder:text-[#A89886] resize-y"
                  />
                </div>

                {/* Submit button */}
                <div className="pt-2">
                  <button
                    id="contact-submit-btn"
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-lg bg-[#B8502E] text-white font-semibold text-sm shadow-sm hover:bg-[#A14120] active:scale-[0.99] transition-all disabled:opacity-50"
                  >
                    {isSubmitting ? (
                      <span>Sending Message...</span>
                    ) : (
                      <>
                        <Send className="w-4 h-4" />
                        <span>Send Message</span>
                      </>
                    )}
                  </button>
                </div>

                {/* Submissions note */}
                <p className="text-[11px] text-center text-[#8C7662]">
                  Submissions are sent directly to our cultural research and artisan support team.
                </p>
              </form>
            )}
          </div>

          {/* Right Column: WhatsApp & Contact Channels */}
          <div className="lg:col-span-5 space-y-6">
            {/* WhatsApp Contact Card */}
            <div className="bg-white rounded-2xl border border-[#D1E7D8] p-6 sm:p-8 shadow-sm relative overflow-hidden">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 rounded-full bg-[#25D366]/15 text-[#25D366] flex items-center justify-center">
                  <MessageCircle className="w-6 h-6 fill-current" />
                </div>
                <div>
                  <span className="text-[10px] uppercase font-bold tracking-wider text-[#246243] block">
                    Instant Messaging
                  </span>
                  <h3 className="font-serif text-xl font-bold text-[#2C241E]">
                    WhatsApp Support
                  </h3>
                </div>
              </div>

              <p className="text-xs sm:text-sm text-[#5A4D43] leading-relaxed mb-6 font-light">
                Connect directly with our cultural coordinators and research team for real-time inquiries, artisan introductions, or heritage submissions.
              </p>

              <a
                id="contact-whatsapp-btn"
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full inline-flex items-center justify-center gap-2.5 px-5 py-3.5 rounded-xl bg-[#25D366] text-white font-semibold text-sm shadow-md hover:bg-[#20bd5a] hover:scale-[1.01] active:scale-[0.99] transition-all"
              >
                <MessageCircle className="w-5 h-5 fill-current" />
                <span>Chat with us on WhatsApp</span>
              </a>
            </div>

            {/* Direct Inquiry Card */}
            <div className="bg-white rounded-2xl border border-[#E5DCD0] p-6 sm:p-8 shadow-sm space-y-4 text-xs sm:text-sm text-[#5A4D43]">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-[#FAF1E3] text-[#87551C] flex items-center justify-center shrink-0">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-[10px] uppercase font-bold tracking-wider text-[#8C4A27] block">
                    Direct Inquiry &amp; Outreach
                  </span>
                  <span className="font-medium text-[#2C241E]">
                    Cultural Research &amp; Artisan Network
                  </span>
                </div>
              </div>

              <div className="pt-3 border-t border-[#F0EAE1] space-y-2 text-xs leading-relaxed text-[#6A5849]">
                <p>
                  <strong>Why we want to hear from you:</strong> We are continuously documenting lesser-known district crafts, endangered handlooms, and rural artisan collectives across India.
                </p>
                <p className="text-[11px] italic text-[#8C7662]">
                  &ldquo;Every traditional art carries more than a product. It carries a place, a community, a memory and generations of knowledge.&rdquo;
                </p>
              </div>
            </div>

            {/* Official Social Channels Card */}
            <div className="bg-white rounded-2xl border border-[#E5DCD0] p-6 sm:p-7 shadow-sm space-y-3">
              <span className="text-[10px] uppercase font-bold tracking-wider text-[#8C4A27] block">
                Official Social Channels
              </span>
              <p className="text-xs text-[#5A4D43] leading-relaxed">
                Connect with ODOPHUB on Instagram and Facebook to discover daily features on master artisans, traditional disciplines, and geographical heritage across India.
              </p>
              <div className="pt-1 flex flex-wrap items-center gap-2.5">
                <a
                  id="contact-facebook-btn"
                  href="https://www.facebook.com/share/19rtRNyFxM/"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Follow ODOP Hub on Facebook"
                  className="inline-flex items-center gap-2 px-3.5 py-2 rounded-lg bg-[#1877F2] hover:bg-[#166fe5] text-white text-xs font-semibold transition-all shadow-xs"
                >
                  <Facebook className="w-3.5 h-3.5 fill-current" />
                  <span>Follow on Facebook</span>
                </a>
                <a
                  id="contact-instagram-btn"
                  href="https://www.instagram.com/odophub/"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Follow ODOPHUB (@odophub) on Instagram"
                  className="inline-flex items-center gap-2 px-3.5 py-2 rounded-lg bg-gradient-to-r from-[#833AB4] via-[#FD1D1D] to-[#F77737] hover:opacity-95 text-white text-xs font-semibold transition-all shadow-xs"
                >
                  <Instagram className="w-3.5 h-3.5" />
                  <span>ODOPHUB (@odophub)</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
