import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Calendar, ShieldCheck, Award, FileText, Check, Truck, Sparkles } from 'lucide-react';

interface BookingFormProps {
  onSuccess: (message: string) => void;
  scannedItemName?: string;
}

export default function BookingForm({ onSuccess, scannedItemName }: BookingFormProps) {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    address: '',
    wasteType: scannedItemName || 'Plastic',
    preferredDate: '',
    notes: ''
  });

  const [submitted, setSubmitted] = useState(false);

  // Synchronize dropdown when scans update item
  React.useEffect(() => {
    if (scannedItemName) {
      setFormData(prev => ({ ...prev, wasteType: scannedItemName }));
    }
  }, [scannedItemName]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Simulate API delivery
    setTimeout(() => {
      setSubmitted(true);
      onSuccess(`Successfully scheduled circular pickup for your ${formData.wasteType}!`);
      // Reset form save for submission success state
    }, 800);
  };

  const handleReset = () => {
    setFormData({
      name: '',
      phone: '',
      address: '',
      wasteType: 'Plastic',
      preferredDate: '',
      notes: ''
    });
    setSubmitted(false);
  };

  const features = [
    { icon: Calendar, title: "Flexible Daily Slots", desc: "Select morning or evening segments. Courier will SMS 30 mins before arrival." },
    { icon: ShieldCheck, title: "100% Certified Handlers", desc: "Our couriers work solely with ISO 14001 government-sanctioned sorting facilities." },
    { icon: Award, title: "GreenCoins Ecosystem Rewards", desc: "Each item scanned and collected credits your clean profile with eco voucher coins." },
    { icon: FileText, title: "Digital Impact Receipts", desc: "Receive immediate transparent audit sheets proving the weight returned." }
  ];

  return (
    <section id="booking-section" className="py-24 px-4 md:px-8 bg-forest-dark relative">
      <div id="booking-accent-shade" className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] rounded-full bg-lime-accent/5 blur-[120px] pointer-events-none" />
      
      <div id="booking-grid" className="max-w-6xl mx-auto relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
        
        {/* Left Column: persuasive copywriting */}
        <div id="booking-copy" className="lg:col-span-5 flex flex-col justify-center">
          <span className="text-lime-accent font-mono text-xs tracking-widest uppercase font-bold">
            Municipal Logistics Pipeline
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl text-white mt-3 font-normal leading-tight">
            Schedule a Secure Circular Pickup Right to Your Door
          </h2>
          <p className="text-cream-muted text-sm sm:text-base mt-4 leading-relaxed">
            Ready to recycle those cataloged items? Skip the public container points entirely. Book a dedicated GreenBin collector to aggregate materials safely.
          </p>

          {/* Features bullet list */}
          <div id="booking-bullets" className="mt-8 flex flex-col gap-5">
            {features.map((feat, i) => {
              const Icon = feat.icon;
              return (
                <div id={`booking-feat-${i}`} key={i} className="flex gap-4 group">
                  <div className="shrink-0 p-2.5 rounded-lg bg-forest-medium text-lime-accent group-hover:bg-lime-accent group-hover:text-forest-dark transition-all duration-300">
                    <Icon className="h-4 w-4" />
                  </div>
                  <div>
                    <h4 className="text-sm font-semibold text-white group-hover:text-lime-accent transition-colors">
                      {feat.title}
                    </h4>
                    <p className="text-cream-muted text-xs leading-relaxed mt-0.5">
                      {feat.desc}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Right Column: interactive booking form */}
        <div id="booking-card-wrapper" className="lg:col-span-7 glass p-6 md:p-8 rounded-2xl border border-white/10 hover:border-lime-accent/20 transition-all duration-300 bg-white/[0.01] relative overflow-hidden">
          
          <AnimatePresence mode="wait">
            {!submitted ? (
              <motion.form
                id="booking-form-element"
                key="booking-form"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                onSubmit={handleSubmit}
                className="space-y-5"
              >
                <div id="form-heading-block" className="flex items-center gap-2 pb-4 border-b border-forest-light/30">
                  <Truck className="h-5 w-5 text-lime-accent animate-pulse" />
                  <h3 className="font-serif text-xl font-bold text-white leading-none">
                    Recycling Order Registration
                  </h3>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {/* Name field */}
                  <div id="field-container-name">
                    <label id="lbl-name" htmlFor="name" className="block text-xs font-mono font-bold tracking-wider text-lime-accent uppercase mb-1.5">
                      Contact Name *
                    </label>
                    <input
                      id="name"
                      type="text"
                      name="name"
                      required
                      placeholder="e.g. Rachel Green"
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-forest-dark border border-forest-light rounded-xl font-sans text-sm text-white placeholder-cream-muted/50 focus:outline-none focus:border-lime-accent focus:ring-1 focus:ring-lime-accent transition-all"
                    />
                  </div>

                  {/* Phone field */}
                  <div id="field-container-phone">
                    <label id="lbl-phone" htmlFor="phone" className="block text-xs font-mono font-bold tracking-wider text-lime-accent uppercase mb-1.5">
                      Phone Number *
                    </label>
                    <input
                      id="phone"
                      type="tel"
                      name="phone"
                      required
                      placeholder="e.g. +91 98765 43210"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-forest-dark border border-forest-light rounded-xl font-sans text-sm text-white placeholder-cream-muted/50 focus:outline-none focus:border-lime-accent focus:ring-1 focus:ring-lime-accent transition-all"
                    />
                  </div>
                </div>

                {/* Address field */}
                <div id="field-container-address">
                  <label id="lbl-address" htmlFor="address" className="block text-xs font-mono font-bold tracking-wider text-lime-accent uppercase mb-1.5">
                    Collection Address *
                  </label>
                  <input
                    id="address"
                    type="text"
                    name="address"
                    required
                    placeholder="e.g. Apt 104, Green Oasis, Outer Ring Rd, Bangalore"
                    value={formData.address}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-forest-dark border border-forest-light rounded-xl font-sans text-sm text-white placeholder-cream-muted/50 focus:outline-none focus:border-lime-accent focus:ring-1 focus:ring-lime-accent transition-all"
                  />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {/* Waste Type selector */}
                  <div id="field-container-waste">
                    <label id="lbl-waste" htmlFor="wasteType" className="block text-xs font-mono font-bold tracking-wider text-lime-accent uppercase mb-1.5">
                      Primary Waste Category *
                    </label>
                    <select
                      id="wasteType"
                      name="wasteType"
                      value={formData.wasteType}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-forest-dark border border-forest-light rounded-xl font-sans text-sm text-white focus:outline-none focus:border-lime-accent focus:ring-1 focus:ring-lime-accent transition-all appearance-none cursor-pointer"
                    >
                      <option value="Plastic">Plastic Bottles & Vinyls</option>
                      <option value="Paper">Cardboard & Paper Mill</option>
                      <option value="Metal">Cans, Tin & Aluminium</option>
                      <option value="Glass">Glass Containers & Cullet</option>
                      <option value="E-waste">Electronics & Obsolete Devices</option>
                      <option value="Organic">Organic Composites</option>
                      <option value="Hazardous">Hazardous & Batteries</option>
                      <option value="Other">Other Mixed Materials</option>
                    </select>
                  </div>

                  {/* Date picker */}
                  <div id="field-container-date">
                    <label id="lbl-preferred-date" htmlFor="preferredDate" className="block text-xs font-mono font-bold tracking-wider text-lime-accent uppercase mb-1.5">
                      Preferred Date *
                    </label>
                    <input
                      id="preferredDate"
                      type="date"
                      name="preferredDate"
                      required
                      value={formData.preferredDate}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-forest-dark border border-forest-light rounded-xl font-sans text-sm text-white focus:outline-none focus:border-lime-accent focus:ring-1 focus:ring-lime-accent transition-all cursor-pointer"
                    />
                  </div>
                </div>

                {/* Notes TextArea */}
                <div id="field-container-notes">
                  <label id="lbl-notes" htmlFor="notes" className="block text-xs font-mono font-bold tracking-wider text-lime-accent uppercase mb-1.5">
                    Courier Drop-off Notes / Special Instructions
                  </label>
                  <textarea
                    id="notes"
                    name="notes"
                    rows={3}
                    placeholder="e.g. Ring doorbell, box left by the garage, or special items requiring separate bins."
                    value={formData.notes}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-forest-dark border border-forest-light rounded-xl font-sans text-sm text-white placeholder-cream-muted/50 focus:outline-none focus:border-lime-accent focus:ring-1 focus:ring-lime-accent transition-all resize-none"
                  />
                </div>

                {/* Submit button */}
                <button
                  id="booking-submit-btn"
                  type="submit"
                  className="w-full py-4 bg-lime-accent text-forest-dark hover:bg-lime-hover font-bold font-sans rounded-xl tracking-wider uppercase shadow-lg shadow-lime-accent/15 hover:shadow-lime-accent/25 duration-200 transition-all cursor-pointer flex items-center justify-center gap-2 hover:scale-102"
                >
                  Confirm Scheduled Collection
                </button>
              </motion.form>
            ) : (
              // Success confirmation state
              <motion.div
                id="booking-success-container"
                key="booking-success"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                className="py-12 text-center"
              >
                <div id="success-icon-banner" className="inline-flex p-4 bg-lime-accent/10 text-lime-accent rounded-full mb-6 relative">
                  <Check className="h-10 w-10 animate-pulse" />
                  <Sparkles className="h-4 w-4 absolute top-1 right-1 text-lime-accent animate-spin" />
                </div>
                
                <h3 className="font-serif text-2xl sm:text-3xl text-white mb-3 font-normal">
                  Pickup Registered Successfully!
                </h3>
                
                <p className="text-cream-muted text-sm max-w-md mx-auto leading-relaxed mb-8">
                  We have cataloged your collection request with our local ecosystem node. A certified courier has reserved the chosen slot (on <b className="text-lime-accent">{formData.preferredDate}</b>) and will text your phone number (<b className="text-lime-accent">{formData.phone}</b>) 30 minutes before arrival.
                </p>

                <div 
                  id="receipt-preview"
                  className="max-w-sm mx-auto p-4 mb-8 text-left bg-forest-dark rounded-xl border border-forest-light text-xs font-mono space-y-2 text-cream-muted"
                >
                  <p id="receipt-head" className="text-lime-accent font-bold border-b border-forest-light pb-1 mb-2 uppercase text-center tracking-widest text-[10px]">
                    GreenBin Circular Manifest
                  </p>
                  <p><span className="text-cream-text">Ticket Ref:</span> GB-{(Math.floor(100000 + Math.random() * 900000))}</p>
                  <p><span className="text-cream-text">Partner Recipient:</span> Green Bin Bangalore Core</p>
                  <p><span className="text-cream-text">Waste Type:</span> {formData.wasteType}</p>
                  <p><span className="text-cream-text">Address:</span> {formData.address}</p>
                  <p><span className="text-cream-text">Rewards value:</span> +150 GreenCoins (Pending Pickup)</p>
                </div>

                <div className="flex gap-4 justify-center">
                  <button
                    id="success-btn-reset"
                    onClick={handleReset}
                    className="px-6 py-2.5 bg-forest-light text-lime-accent border border-lime-accent/20 hover:bg-forest-medium hover:border-lime-accent/40 rounded-xl text-xs font-mono font-bold uppercase duration-150 transition-colors cursor-pointer"
                  >
                    Schedule Another
                  </button>
                  
                  <button
                    id="success-btn-scroll"
                    onClick={() => {
                      const element = document.getElementById('programs');
                      if (element) element.scrollIntoView({ behavior: 'smooth' });
                    }}
                    className="px-6 py-2.5 bg-lime-accent text-forest-dark hover:bg-lime-hover rounded-xl text-xs font-mono font-bold uppercase duration-150 transition-colors cursor-pointer"
                  >
                    Explore Programs
                  </button>
                </div>
              </motion.div>
            )}
          </AnimatePresence>

        </div>
      </div>
    </section>
  );
}
