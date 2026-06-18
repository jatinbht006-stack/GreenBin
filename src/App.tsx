import { useState, useEffect } from 'react';
import { Recycle, Menu, X, ArrowRight, Activity, Bell } from 'lucide-react';
import { Toast, ScanResult } from './types';

// Importing modular subcomponents
import Hero from './components/Hero';
import Scanner from './components/Scanner';
import HowItWorks from './components/HowItWorks';
import BookingForm from './components/BookingForm';
import Programs from './components/Programs';
import Tips from './components/Tips';
import Footer from './components/Footer';
import ToastContainer from './components/ToastContainer';

export default function App() {
  const [toasts, setToasts] = useState<Toast[]>([]);
  const [scannedItemName, setScannedItemName] = useState<string | undefined>(undefined);
  const [bookingFormKey, setBookingFormKey] = useState(0);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Monitor desktop scrolling to toggle glass navbar styling
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Universal custom Toast notification creator
  const addToast = (message: string, type: 'success' | 'info' | 'warning' = 'success') => {
    const id = `toast-${Date.now()}-${Math.random().toString(36).substring(2, 9)}`;
    const newToast: Toast = { id, message, type };
    
    // Prepend to display order
    setToasts(prev => [newToast, ...prev]);

    // Auto-dismiss after 4 seconds
    setTimeout(() => {
      dismissToast(id);
    }, 4000);
  };

  const dismissToast = (id: string) => {
    setToasts(prev => prev.filter(t => t.id !== id));
  };

  // Callback when scanner successfully interprets an item
  const handleScanComplete = (result: ScanResult) => {
    setScannedItemName(result.itemName);
  };

  // Jump from analysis result card to scheduling sheet with populated waste selector
  const handleJumpToBooking = (itemName: string) => {
    setScannedItemName(itemName);
    setBookingFormKey(prev => prev + 1); // trigger dropdown refresh
    
    // Smooth scroll down to pickup section
    const element = document.getElementById('booking-section');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  // Callback when booking is processed
  const handleBookingSuccess = (message: string) => {
    addToast(message, "success");
  };

  // Callback when user submits a campaign registration
  const handleJoinProgram = (programTitle: string) => {
    addToast(`Successfully registered for the "${programTitle}" drive! Dynamic credentials sent to inbox.`, "success");
  };

  // Page sectional navigate helper
  const navigateToSection = (sectionId: string) => {
    setMobileMenuOpen(false);
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <div id="greenbin-app-root" className="min-h-screen bg-forest-dark text-cream-text flex flex-col relative selection:bg-lime-accent selection:text-forest-dark">
      
      {/* 1. FIXED TOP NAVIGATION BAR */}
      <header
        id="navbar-header"
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
          scrolled || mobileMenuOpen
            ? 'glass bg-forest-dark/90 backdrop-blur-md border-b border-forest-light/60 py-3.5 shadow-lg'
            : 'bg-transparent py-5'
        }`}
      >
        <div id="nav-container" className="max-w-6xl mx-auto px-4 md:px-8 flex justify-between items-center">
          
          {/* Brand Logo link */}
          <div 
            id="brand-logo" 
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="flex items-center gap-2.5 cursor-pointer group select-none"
          >
            <div className="h-9 w-9 bg-lime-accent rounded-xl flex items-center justify-center text-forest-dark font-black group-hover:scale-105 group-hover:rotate-12 transition-all">
              <Recycle className="h-5 w-5" />
            </div>
            <span className="font-serif text-2xl tracking-tight text-white font-normal">
              Green<span className="text-lime-accent italic font-black transition-colors duration-300 group-hover:text-lime-hover">Bin</span>
            </span>
          </div>

          {/* Desktop Navigation links */}
          <nav id="desktop-links" className="hidden md:flex items-center gap-8 text-xs font-mono tracking-widest uppercase font-bold">
            <button
              id="link-scan"
              onClick={() => navigateToSection('ai-scanner-section')}
              className="text-cream-muted hover:text-lime-accent transition-colors cursor-pointer"
            >
              Scan Waste
            </button>
            <button
              id="link-book"
              onClick={() => navigateToSection('booking-section')}
              className="text-cream-muted hover:text-lime-accent transition-colors cursor-pointer"
            >
              Book Pickup
            </button>
            <button
              id="link-programs"
              onClick={() => navigateToSection('programs')}
              className="text-cream-muted hover:text-lime-accent transition-colors cursor-pointer"
            >
              Programs
            </button>
            <button
              id="link-tips"
              onClick={() => navigateToSection('ai-tips')}
              className="text-cream-muted hover:text-lime-accent transition-colors cursor-pointer"
            >
              AI Tips
            </button>
          </nav>

          {/* Pill-shaped Scan Now CTA button */}
          <div id="nav-cta-container" className="hidden md:flex items-center gap-4">
            <button
              id="nav-scan-cta-pill"
              onClick={() => navigateToSection('ai-scanner-section')}
              className="px-5 py-2.5 bg-forest-light hover:bg-lime-accent text-lime-accent hover:text-forest-dark border border-lime-accent/20 hover:border-transparent rounded-full text-xs font-mono font-bold tracking-widest uppercase transition-all duration-200 cursor-pointer flex items-center gap-1.5 shadow hover:shadow-lime-accent/10"
            >
              <Activity className="h-3.5 w-3.5" />
              Scan Now
            </button>
          </div>

          {/* Mobile Hamburg Toggle Button */}
          <button
            id="mobile-nav-toggle"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 rounded-lg bg-forest-medium/50 text-cream-text border border-forest-light/60 hover:text-lime-accent transition-colors cursor-pointer"
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>

        </div>

        {/* Mobile slide-down navigation menu */}
        {mobileMenuOpen && (
          <div 
            id="mobile-drawer"
            className="md:hidden bg-forest-dark border-b border-forest-light/80 p-6 flex flex-col gap-4 animate-slide-down shadow-xl"
          >
            <button
              id="mob-link-scan"
              onClick={() => navigateToSection('ai-scanner-section')}
              className="py-2.5 text-sm font-mono tracking-widest uppercase text-left font-bold border-b border-forest-light/30 text-cream-text"
            >
              Scan Waste
            </button>
            <button
              id="mob-link-book"
              onClick={() => navigateToSection('booking-section')}
              className="py-2.5 text-sm font-mono tracking-widest uppercase text-left font-bold border-b border-forest-light/30 text-cream-text"
            >
              Book Pickup
            </button>
            <button
              id="mob-link-programs"
              onClick={() => navigateToSection('programs')}
              className="py-2.5 text-sm font-mono tracking-widest uppercase text-left font-bold border-b border-forest-light/30 text-cream-text"
            >
              Programs
            </button>
            <button
              id="mob-link-tips"
              onClick={() => navigateToSection('ai-tips')}
              className="py-2.5 text-sm font-mono tracking-widest uppercase text-left font-bold border-b border-forest-light/30 text-cream-text"
            >
              AI Tips
            </button>
            <button
              id="mob-scan-cta-btn"
              onClick={() => navigateToSection('ai-scanner-section')}
              className="mt-2 w-full py-3 bg-lime-accent text-forest-dark text-xs font-mono font-bold tracking-widest uppercase rounded-xl flex items-center justify-center gap-1.5"
            >
              <Activity className="h-4 w-4" />
              Scan Now
            </button>
          </div>
        )}
      </header>

      {/* Main Structural sections */}
      <main id="greenbin-viewport-main" className="flex-grow">
        
        {/* 2. HERO SECTION */}
        <Hero 
          onScanClick={() => navigateToSection('ai-scanner-section')}
          onExploreClick={() => navigateToSection('programs')}
        />

        {/* 3. AI WASTE SCANNER SECTION (the focal point) */}
        <Scanner 
          onScanComplete={handleScanComplete}
          onJumpToBooking={handleJumpToBooking}
          onAddToast={addToast}
        />

        {/* 4. HOW IT WORKS SECTION */}
        <HowItWorks />

        {/* 5. PICKUP BOOKING SECTION */}
        <BookingForm 
          onSuccess={handleBookingSuccess}
          scannedItemName={scannedItemName}
        />

        {/* 6. AWARENESS PROGRAMS DIRECTORY */}
        <Programs 
          onJoinProgram={handleJoinProgram}
        />

        {/* 7. AI ECO-TIPS RECOMMENDATIONS */}
        <Tips />

      </main>

      {/* 8. FOOTER WITH MAP LINKS */}
      <Footer />

      {/* 9. FLOATING TOAST NOTIFICATION STACK */}
      <ToastContainer 
        toasts={toasts}
        onDismiss={dismissToast}
      />

    </div>
  );
}
