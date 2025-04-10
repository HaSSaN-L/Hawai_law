import React, { useState } from 'react';
import { MessageCircle, X, Send } from 'lucide-react';

interface WhatsAppWidgetProps {
  isMobileMenuOpen?: boolean;
}

const WhatsAppWidget = ({ isMobileMenuOpen }: WhatsAppWidgetProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const [message, setMessage] = useState('');
  const phoneNumber = '971551230584'; // UAE format

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (message.trim()) {
      window.open(`https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`, '_blank', 'noopener,noreferrer');
      setMessage('');
      setIsOpen(false);
    }
  };

  if (isMobileMenuOpen) return null;

  return (
    <div className="fixed bottom-6 right-6 z-40">
      {isOpen && (
        <div className="mb-4 w-[320px] bg-white rounded-2xl shadow-xl overflow-hidden animate-fade-in">
          {/* Header */}
          <div className="bg-green-500 p-4">
            <div className="flex items-center justify-between">
              <div>
                <h3 className="font-semibold text-white">Chat with us</h3>
                <p className="text-sm text-green-50">We typically reply instantly</p>
              </div>
              <button
                onClick={() => setIsOpen(false)}
                className="text-white hover:text-green-100 transition-colors p-1"
                aria-label="Close chat"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
          </div>

          {/* Chat Area */}
          <div className="p-4 bg-gray-50">
            <div className="bg-white rounded-lg p-3 text-gray-700 text-sm shadow-sm">
              Hello! How can we assist you today?
            </div>
          </div>

          {/* Input Area */}
          <form onSubmit={handleSubmit} className="p-4 border-t">
            <div className="flex gap-2">
              <label className="sr-only" htmlFor="chat-message">Type your message</label>
              <input
                id="chat-message"
                type="text"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder="Type your message..."
                className="flex-1 px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent text-sm"
              />
              <button
                type="submit"
                disabled={!message.trim()}
                className="bg-green-500 text-white p-2 rounded-lg hover:bg-green-600 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                aria-label="Send message"
              >
                <Send className="w-5 h-5" />
              </button>
            </div>
          </form>
        </div>
      )}

      <button
        onClick={() => setIsOpen(!isOpen)}
        className="bg-green-500 text-white w-14 h-14 rounded-full flex items-center justify-center shadow-lg hover:bg-green-600 transition-all duration-300 hover:scale-110 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2"
        aria-label={isOpen ? 'Close WhatsApp chat' : 'Open WhatsApp chat'}
      >
        <MessageCircle className="w-7 h-7" />
      </button>
    </div>
  );
};

export default WhatsAppWidget;