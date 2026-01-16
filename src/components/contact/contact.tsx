'use client';

import React, { useState } from 'react';
import { Phone, Mail, MapPin } from 'lucide-react';
import ButtonSecondary from '@/components/ui/ButtonSecondary';

const ContactSection = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    lastName: '',
    phone: '',
    message: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
  };

  return (
    <section className="py-16 lg:py-24 px-4 lg:px-8">
      {/* Header */}
      <div className="text-center mb-12 lg:mb-16">
        <h1 className="text-3xl lg:text-5xl font-heading text-[#1A1A1A] mb-4">
          Contact Us
        </h1>
        <p className="text-[#666666] text-sm lg:text-base max-w-md mx-auto">
          Experience refined living with comfort, style, and modern convenience.
        </p>
      </div>

      {/* Main Content - Two Column Layout */}
      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-start">

        {/* Left Column - Form with Blue Bar */}
        <div className="relative flex">
          {/* Blue Gradient Bar */}
          <div
            className="hidden lg:block w-6 rounded-l-2xl shrink-0"
            style={{
              background: 'linear-gradient(to bottom, #02B4E9, #028CDA)',
              minHeight: '100%',
            }}
          />

          {/* Form Card */}
          <div className="flex-1 bg-white rounded-2xl lg:rounded-l-none shadow-[0_4px_30px_rgba(0,0,0,0.08)] p-8 lg:p-10">
            <h2 className="text-2xl font-bold text-[#1A1A1A] mb-8">
              Get In Touch
            </h2>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <input
                  type="text"
                  name="fullName"
                  placeholder="Full Name"
                  value={formData.fullName}
                  onChange={handleChange}
                  className="w-full px-0 py-3 border-b border-gray-200 bg-transparent text-sm text-[#333] placeholder:text-[#999] focus:outline-none focus:border-[#02B4E9] transition-colors"
                />
              </div>

              <div>
                <input
                  type="text"
                  name="lastName"
                  placeholder="Last Name"
                  value={formData.lastName}
                  onChange={handleChange}
                  className="w-full px-0 py-3 border-b border-gray-200 bg-transparent text-sm text-[#333] placeholder:text-[#999] focus:outline-none focus:border-[#02B4E9] transition-colors"
                />
              </div>

              <div>
                <input
                  type="tel"
                  name="phone"
                  placeholder="Phone Number"
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full px-0 py-3 border-b border-gray-200 bg-transparent text-sm text-[#333] placeholder:text-[#999] focus:outline-none focus:border-[#02B4E9] transition-colors"
                />
              </div>

              <div>
                <input
                  type="text"
                  name="message"
                  placeholder="Message............"
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full px-0 py-3 border-b border-gray-200 bg-transparent text-sm text-[#333] placeholder:text-[#999] focus:outline-none focus:border-[#02B4E9] transition-colors"
                />
              </div>

              <ButtonSecondary className="w-full mt-6">
                Send Message
              </ButtonSecondary>
            </form>
          </div>
        </div>

        {/* Right Column - Contact Info + Map */}
        <div className="space-y-8">
          {/* Description */}
          <p className="text-[#666666] text-sm lg:text-base leading-relaxed text-center lg:text-left">
            Our team is always available to provide comprehensive guidance,
            answer your questions, and assist with reservations — delivering
            seamless, professional, and attentive service at every step.
          </p>

          {/* Contact Cards */}
          <div className="flex justify-center lg:justify-start gap-8 lg:gap-10">
            {/* Phone */}
            <div className="flex flex-col items-center text-center">
              <div
                className="w-16 h-16 rounded-full flex items-center justify-center mb-3 shadow-[0_4px_15px_rgba(2,180,233,0.3)]"
                style={{
                  background: 'linear-gradient(135deg, #02B4E9, #028CDA)',
                }}
              >
                <Phone size={24} className="text-white" strokeWidth={2} />
              </div>
              <h3 className="font-semibold text-xs text-[#1A1A1A] mb-0.5">Phone Number</h3>
              <p className="text-[10px] text-[#666666] font-firs">+92 3345678906</p>
            </div>

            {/* Email */}
            <div className="flex flex-col items-center text-center">
              <div
                className="w-16 h-16 rounded-full flex items-center justify-center mb-3 shadow-[0_4px_15px_rgba(2,180,233,0.3)]"
                style={{
                  background: 'linear-gradient(135deg, #02B4E9, #028CDA)',
                }}
              >
                <Mail size={24} className="text-white" strokeWidth={2} />
              </div>
              <h3 className="font-semibold text-xs text-[#1A1A1A] mb-0.5">Email Address</h3>
              <p className="text-[10px] text-[#666666] font-firs">addressfountain<br />@gmail.com</p>
            </div>

            {/* Location */}
            <div className="flex flex-col items-center text-center">
              <div
                className="w-16 h-16 rounded-full flex items-center justify-center mb-3 shadow-[0_4px_15px_rgba(2,180,233,0.3)]"
                style={{
                  background: 'linear-gradient(135deg, #02B4E9, #028CDA)',
                }}
              >
                <MapPin size={24} className="text-white" strokeWidth={2} />
              </div>
              <h3 className="font-semibold text-xs text-[#1A1A1A] mb-0.5">Location</h3>
              <p className="text-[10px] text-[#666666] font-firs">Galiyat,murree</p>
            </div>
          </div>

          {/* Map Container */}
          <div className="relative rounded-2xl overflow-hidden shadow-lg">
            {/* View larger map link */}
            <a
              href="https://maps.google.com/?q=Address+Fountain+Galiyat"
              target="_blank"
              rel="noopener noreferrer"
              className="absolute top-3 right-3 z-10 bg-white px-3 py-1.5 rounded text-xs text-[#666] hover:text-[#333] shadow-sm transition-colors"
            >
              View larger map
            </a>

            {/* Map iframe */}
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d13245.123456789!2d73.4!3d33.9!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMzPCsDA5JzAwLjAiTiA3M8KwMjQnMDAuMCJF!5e0!3m2!1sen!2s!4v1234567890"
              width="100%"
              height="200"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Address Fountain Location"
              className="w-full"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
