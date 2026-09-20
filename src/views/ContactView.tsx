import React from 'react';
import { ContactSection } from '../components/ContactSection';
import { ArrowLeft, MessageCircle } from 'lucide-react';

interface ContactViewProps {
  onNavigate: (view: string) => void;
}

export const ContactView: React.FC<ContactViewProps> = ({ onNavigate }) => {
  return (
    <div className="min-h-screen bg-[#FBF9F5] py-10 sm:py-16">
      {/* Back button */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-8">
        <button
          onClick={() => onNavigate('home')}
          className="inline-flex items-center gap-2 text-xs sm:text-sm font-medium text-[#7A6755] hover:text-[#2C241E] transition-colors"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Back to Home</span>
        </button>
      </div>

      <ContactSection embedded={false} />
    </div>
  );
};
