import React, { useState } from 'react';
import { Calendar, Clock, MapPin, User, Mail, Phone as PhoneIcon } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import { attorneys } from '../data/attorneys';

interface TimeSlot {
  time: string;
  available: boolean;
}

const AppointmentScheduler = () => {
  const { t } = useTranslation();
  const [selectedDate, setSelectedDate] = useState('');
  const [selectedTime, setSelectedTime] = useState('');
  const [selectedOffice, setSelectedOffice] = useState('');
  const [selectedAttorney, setSelectedAttorney] = useState('');
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');

  const tomorrow = new Date();
  tomorrow.setDate(tomorrow.getDate() + 1);
  const minDate = tomorrow.toISOString().split('T')[0];

  const maxDate = new Date();
  maxDate.setDate(maxDate.getDate() + 30);
  const maxDateStr = maxDate.toISOString().split('T')[0];

  const timeSlots: TimeSlot[] = [
    { time: '09:00', available: true },
    { time: '10:00', available: true },
    { time: '11:00', available: true },
    { time: '12:00', available: false },
    { time: '14:00', available: true },
    { time: '15:00', available: true },
    { time: '16:00', available: false },
    { time: '17:00', available: true }
  ];

  const offices = [
    { 
      id: 'sharjah', 
      nameKey: 'contact.sharjahOffice', 
      addressKey: 'contact.sharjahAddress' 
    },
    { 
      id: 'dubai', 
      nameKey: 'contact.dubaiOffice', 
      addressKey: 'contact.dubaiAddress' 
    }
  ];

  const seniorAttorneys = attorneys.filter(attorney => 
    (attorney.position.includes('Partner') || attorney.position.includes('Senior') || attorney.position.includes('Co-Founder')) &&
    !['Hassan Ali Alhouli', 'Abdelrahman Hussain'].includes(attorney.name)
  );

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    const selectedAttorneyData = attorneys.find(a => a.name === selectedAttorney);
    const selectedOfficeData = offices.find(o => o.id === selectedOffice);
    
    if (!selectedAttorneyData || !selectedOfficeData) return;

    const message = `
Hello! I would like to schedule a consultation:

Name: ${name}
Phone: ${phone}
Email: ${email}

Appointment Details:
- Office: ${t(selectedOfficeData.nameKey)}
- Attorney: ${selectedAttorneyData.name}
- Date: ${selectedDate}
- Time: ${selectedTime}

Please confirm my appointment. Thank you!
    `.trim();

    const whatsappNumber = '971551230584';
    const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank', 'noopener,noreferrer');
  };

  return (
    <form onSubmit={handleSubmit} className="bg-white p-4 sm:p-6 rounded-2xl shadow-sm">
      <h3 className="text-xl sm:text-2xl font-bold mb-4 sm:mb-6">Schedule a Consultation</h3>
      
      <div className="space-y-4 sm:space-y-6">
        {/* Contact Information */}
        <div>
          <h4 className="text-sm font-semibold text-gray-700 mb-2 sm:mb-3">Your Information</h4>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-4">
            <div className="relative">
              <User className="w-4 h-4 text-gray-400 absolute left-3 top-1/2 transform -translate-y-1/2" />
              <input
                type="text"
                required
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="w-full pl-10 pr-4 py-2.5 sm:py-3 text-sm rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-amber-400 focus:border-transparent"
                placeholder="Your Name"
              />
            </div>
            <div className="relative">
              <PhoneIcon className="w-4 h-4 text-gray-400 absolute left-3 top-1/2 transform -translate-y-1/2" />
              <input
                type="tel"
                required
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                className="w-full pl-10 pr-4 py-2.5 sm:py-3 text-sm rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-amber-400 focus:border-transparent"
                placeholder="Phone Number"
              />
            </div>
            <div className="relative">
              <Mail className="w-4 h-4 text-gray-400 absolute left-3 top-1/2 transform -translate-y-1/2" />
              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full pl-10 pr-4 py-2.5 sm:py-3 text-sm rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-amber-400 focus:border-transparent"
                placeholder="Email Address"
              />
            </div>
          </div>
        </div>

        {/* Office Selection */}
        <div>
          <h4 className="text-sm font-semibold text-gray-700 mb-2 sm:mb-3">Select Office</h4>
          <div className="space-y-2">
            {offices.map((office) => (
              <button
                type="button"
                key={office.id}
                onClick={() => setSelectedOffice(office.id)}
                className={`w-full p-3 rounded-lg border-2 transition-all text-left ${
                  selectedOffice === office.id
                    ? 'border-amber-400 bg-amber-50'
                    : 'border-gray-200 hover:border-amber-200'
                }`}
              >
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-amber-400/10 rounded-full flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-6 h-6 text-amber-400" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="font-semibold text-sm">{t(office.nameKey)}</p>
                    <p className="text-xs text-gray-600">{t(office.addressKey)}</p>
                  </div>
                </div>
              </button>
            ))}
          </div>
        </div>

        {/* Attorney Selection */}
        <div>
          <h4 className="text-sm font-semibold text-gray-700 mb-2 sm:mb-3">Select Attorney</h4>
          <div className="space-y-2">
            {seniorAttorneys.map((attorney) => (
              <button
                type="button"
                key={attorney.name}
                onClick={() => setSelectedAttorney(attorney.name)}
                className={`w-full p-3 rounded-lg border-2 transition-all ${
                  selectedAttorney === attorney.name
                    ? 'border-amber-400 bg-amber-50'
                    : 'border-gray-200 hover:border-amber-200'
                }`}
              >
                <div className="flex items-center gap-4">
                  <img 
                    src={attorney.image.src}
                    alt={attorney.name}
                    className="w-12 h-12 rounded-full object-cover flex-shrink-0"
                  />
                  <div className="flex-1 min-w-0 text-left">
                    <p className="font-semibold text-sm">{attorney.name}</p>
                    <p className="text-xs text-gray-600">{attorney.specialization}</p>
                  </div>
                </div>
              </button>
            ))}
          </div>
        </div>

        {/* Date and Time Selection */}
        <div>
          <h4 className="text-sm font-semibold text-gray-700 mb-2 sm:mb-3">Select Date & Time</h4>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <div className="relative">
              <Calendar className="w-4 h-4 text-gray-400 absolute left-3 top-1/2 transform -translate-y-1/2" />
              <input
                type="date"
                required
                value={selectedDate}
                onChange={(e) => setSelectedDate(e.target.value)}
                min={minDate}
                max={maxDateStr}
                className="w-full pl-10 pr-4 py-2.5 sm:py-3 text-sm rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-amber-400 focus:border-transparent"
              />
            </div>
            <div className="relative">
              <Clock className="w-4 h-4 text-gray-400 absolute left-3 top-1/2 transform -translate-y-1/2" />
              <select
                value={selectedTime}
                onChange={(e) => setSelectedTime(e.target.value)}
                required
                className="w-full pl-10 pr-4 py-2.5 sm:py-3 text-sm rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-amber-400 focus:border-transparent appearance-none bg-white"
              >
                <option value="">Select Time</option>
                {timeSlots
                  .filter(slot => slot.available)
                  .map((slot, index) => (
                    <option key={index} value={slot.time}>
                      {slot.time}
                    </option>
                  ))
                }
              </select>
            </div>
          </div>
        </div>
      </div>

      <button
        type="submit"
        disabled={!selectedDate || !selectedTime || !selectedOffice || !selectedAttorney || !name || !phone || !email}
        className="w-full mt-6 bg-amber-400 text-gray-900 px-6 sm:px-8 py-3 sm:py-4 rounded-lg font-semibold hover:bg-amber-500 transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2 text-sm sm:text-base"
      >
        <span>Book Consultation</span>
        <span className="group-hover:translate-x-1 transition-transform">→</span>
      </button>

      <p className="text-xs sm:text-sm text-gray-500 text-center mt-4">
        Free consultation • 45 minutes • No obligation
      </p>
    </form>
  );
};

export default AppointmentScheduler;