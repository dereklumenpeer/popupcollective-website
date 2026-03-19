import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

const HERO_BG = 'https://i0.wp.com/popupcollectivenyc.com/wp-content/uploads/2025/12/DSC_0311-scaled.jpg?w=1600&ssl=1';
const SPRING_IMG = 'https://i0.wp.com/popupcollectivenyc.com/wp-content/uploads/2025/12/DSC_0378-scaled.jpg?w=800&ssl=1';
const STOREFRONT = 'https://i0.wp.com/popupcollectivenyc.com/wp-content/uploads/2026/03/435-front.jpeg?w=800&ssl=1';
const LOGO = 'https://i0.wp.com/popupcollectivenyc.com/wp-content/uploads/2026/02/Red-and-Beige-Vintage-Bold-Typographic-Beauty-Salon-Logo-1.png?w=140&ssl=1';

const PHOTOS = [
  'https://i0.wp.com/popupcollectivenyc.com/wp-content/uploads/2025/12/DSC_0311-scaled.jpg?w=600&ssl=1',
  'https://i0.wp.com/popupcollectivenyc.com/wp-content/uploads/2025/12/DSC_0361-scaled.jpg?w=600&ssl=1',
  'https://i0.wp.com/popupcollectivenyc.com/wp-content/uploads/2025/12/DSC_0014-scaled.jpg?w=600&ssl=1',
  'https://i0.wp.com/popupcollectivenyc.com/wp-content/uploads/2025/12/DSC_0378-scaled.jpg?w=600&ssl=1',
  'https://i0.wp.com/popupcollectivenyc.com/wp-content/uploads/2025/12/DSC_0273-scaled.jpg?w=600&ssl=1',
  'https://i0.wp.com/popupcollectivenyc.com/wp-content/uploads/2025/12/DSC_0356-scaled.jpg?w=600&ssl=1',
  'https://i0.wp.com/popupcollectivenyc.com/wp-content/uploads/2025/12/DSC_0055-scaled.jpg?w=600&ssl=1',
  'https://i0.wp.com/popupcollectivenyc.com/wp-content/uploads/2025/12/DSC_0073-scaled.jpg?w=600&ssl=1',
  'https://i0.wp.com/popupcollectivenyc.com/wp-content/uploads/2025/12/DSC_0117-scaled.jpg?w=600&ssl=1',
  'https://i0.wp.com/popupcollectivenyc.com/wp-content/uploads/2025/12/DSC_0148-scaled.jpg?w=600&ssl=1',
  'https://i0.wp.com/popupcollectivenyc.com/wp-content/uploads/2025/12/DSC_0289-scaled.jpg?w=600&ssl=1',
];

export default function App() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <Hero />
      <Mission />
      <PhotoCarousel />
      <SpringSummer />
      <LocationSection />
      <ApplyCTA />
      <Footer />
    </div>
  );
}

/* ─────────────────────── Navbar ─────────────────────── */
function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const h = () => setScrolled(window.scrollY > 60);
    window.addEventListener('scroll', h);
    return () => window.removeEventListener('scroll', h);
  }, []);

  const linkClass = scrolled
    ? 'text-brand-charcoal hover:text-brand-red'
    : 'text-white/90 hover:text-white';

  return (
    <nav className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${scrolled ? 'bg-white/95 backdrop-blur-md shadow-[0_1px_0_rgba(0,0,0,.06)]' : ''}`}>
      <div className="max-w-[1200px] mx-auto px-5 md:px-8 flex items-center justify-between h-[72px]">
        <a href="#" onClick={e => { e.preventDefault(); scrollTo({ top: 0, behavior: 'smooth' }); }}>
          <img src={LOGO} alt="Pop-Up Collective NYC" className="h-[52px] w-auto" />
        </a>

        <div className="hidden md:flex items-center gap-7">
          {[['HOME', '#'], ['Apply', '#apply'], ['Booth Options and Details', '#booths'], ['Log-In', 'https://popupcollectivenyc.com/log-in/'], ['Our Story', '#story']].map(([label, href]) => (
            <a key={label} href={href} className={`text-[14px] font-semibold tracking-wide uppercase transition-colors ${linkClass}`}>
              {label}
            </a>
          ))}
        </div>

        <div className="hidden md:flex items-center gap-3">
          <a href="https://www.instagram.com/popupcollective.nyc/" target="_blank" rel="noopener noreferrer" className={`transition-colors ${linkClass}`}>
            <svg className="w-[18px] h-[18px]" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" /></svg>
          </a>
          <a href="https://www.facebook.com/people/Popupcollective-NYC/61583085854013/" target="_blank" rel="noopener noreferrer" className={`transition-colors ${linkClass}`}>
            <svg className="w-[18px] h-[18px]" fill="currentColor" viewBox="0 0 24 24"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" /></svg>
          </a>
        </div>

        <button onClick={() => setOpen(!open)} className={`md:hidden ${scrolled ? 'text-brand-charcoal' : 'text-white'}`}>
          {open ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {open && (
        <div className="md:hidden bg-white px-5 py-5 space-y-3 border-t border-gray-100">
          {['HOME', 'Apply', 'Booth Options', 'Log-In', 'Our Story'].map(label => (
            <a key={label} href={`#${label.toLowerCase().replace(/ /g, '-')}`} onClick={() => setOpen(false)} className="block text-[14px] font-semibold uppercase text-brand-charcoal py-1">
              {label}
            </a>
          ))}
        </div>
      )}
    </nav>
  );
}

/* ─────────────────────── Hero ─────────────────────── */
function Hero() {
  return (
    <section className="relative h-screen min-h-[550px] max-h-[900px] flex items-center justify-center overflow-hidden">
      <img src={HERO_BG} alt="" className="absolute inset-0 w-full h-full object-cover" />
      <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/30 to-black/50" />

      <div className="relative z-10 text-center text-white px-6">
        <h1 className="text-[clamp(2.8rem,9vw,6rem)] leading-[.95] font-extrabold uppercase tracking-tight">
          Pop-Up Collective
        </h1>
        <p className="text-[clamp(1.2rem,3.5vw,2.2rem)] font-display font-bold mt-3 text-brand-orange-light">
          SoHo 2026
        </p>
        <a href="#about" className="inline-block mt-14">
          <svg className="w-7 h-7 text-white animate-bounce" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M19 14l-7 7m0 0l-7-7m7 7V3" /></svg>
        </a>
      </div>
    </section>
  );
}

/* ─────────────────────── Mission ─────────────────────── */
function Mission() {
  return (
    <section id="about" className="py-20 md:py-28 px-5 md:px-8">
      <div className="max-w-[1100px] mx-auto grid md:grid-cols-[1fr_1.1fr] gap-10 md:gap-20 items-start">
        <h2 className="text-[clamp(1.5rem,3.2vw,2.2rem)] leading-[1.15] uppercase">
          A pop-up marketplace of makers, designers, doers and dreamers.
        </h2>
        <div className="space-y-4 text-[15px] md:text-[16px] leading-[1.75] text-[#555]">
          <p>Pop-Up Collective NYC brings together local designers, artists, and independent brands in one warm and creative space.</p>
          <p>Our mission is to make retail more flexible, collaborative, and inspiring, so every maker has a chance to shine in New York City.</p>
        </div>
      </div>
    </section>
  );
}

/* ─────────────────────── Photo Carousel ─────────────────────── */
function PhotoCarousel() {
  return (
    <section className="pb-10">
      <div className="flex gap-2 overflow-x-auto px-5 md:px-8 snap-x snap-mandatory" style={{ scrollbarWidth: 'none' }}>
        {PHOTOS.map((src, i) => (
          <div key={i} className="flex-shrink-0 snap-start w-[280px] md:w-[340px] aspect-[3/4] overflow-hidden">
            <img src={src} alt="" className="w-full h-full object-cover hover:scale-[1.03] transition-transform duration-700" loading="lazy" />
          </div>
        ))}
      </div>
    </section>
  );
}

/* ─────────────────────── Spring/Summer ─────────────────────── */
function SpringSummer() {
  return (
    <section className="py-20 md:py-28 px-5 md:px-8">
      <div className="max-w-[1100px] mx-auto grid md:grid-cols-2 gap-0 overflow-hidden">
        <div className="bg-brand-cream p-10 md:p-14 flex flex-col justify-center">
          <p className="text-[12px] font-bold tracking-[.2em] uppercase text-brand-orange mb-5">Pop-Up Collective</p>
          <h2 className="text-[clamp(1.8rem,4vw,2.6rem)] leading-[1.05] uppercase mb-3">
            Spring/<span className="text-brand-red">Summer</span>
          </h2>
          <h3 className="text-[17px] font-bold mb-4">Spring/Summer Market 2026</h3>
          <p className="text-[15px] leading-[1.7] text-[#555] mb-8">
            Discover 20+ local vendors, handmade gifts, art prints, jewelry, vintage finds & more. Come shop, meet creators, and enjoy the festive energy of NYC's most creative street.
          </p>
          <div>
            <a href="https://popupcollectivenyc.com/apply/" target="_blank" rel="noopener noreferrer"
              className="inline-block bg-brand-red text-white text-[13px] font-bold uppercase tracking-[.1em] px-8 py-4 hover:bg-brand-red-dark transition-colors">
              Join Today
            </a>
          </div>
        </div>
        <div className="aspect-square md:aspect-auto min-h-[350px]">
          <img src={SPRING_IMG} alt="Spring/Summer Market" className="w-full h-full object-cover" loading="lazy" />
        </div>
      </div>
    </section>
  );
}

/* ─────────────────────── Booth Options ─────────────────────── */
// (Linked from nav — scrolls to #booths on booth details page)

/* ─────────────────────── Location ─────────────────────── */
function LocationSection() {
  return (
    <section id="story" className="py-20 md:py-28 px-5 md:px-8 bg-brand-cream">
      <div className="max-w-[1100px] mx-auto text-center">
        <h2 className="text-[clamp(1.8rem,4vw,2.6rem)] leading-[1.1] uppercase mb-3">
          Located in <span className="text-brand-red">SoHo</span>, NYC
        </h2>
        <p className="text-[15px] text-[#555] mb-2 max-w-md mx-auto">
          Our cozy space at 435 Broadway is surrounded by shops, boutiques, and creative studios — the perfect spot for a pop-up store.
        </p>
        <p className="text-[14px] text-brand-orange font-semibold mb-10">435 Broadway, New York, NY 10013</p>

        <div className="grid md:grid-cols-2 gap-6 items-stretch">
          <div className="overflow-hidden">
            <img src={STOREFRONT} alt="435 Broadway" className="w-full h-full object-cover min-h-[300px]" loading="lazy" />
          </div>
          <div className="overflow-hidden min-h-[350px]">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3023.3!2d-74.0002!3d40.7225!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c2598a7d8a4e43%3A0x1!2s435+Broadway+New+York+NY+10013!5e0!3m2!1sen!2sus!4v1"
              width="100%" height="100%" style={{ border: 0, minHeight: '350px' }}
              allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade"
              title="435 Broadway Map"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

/* ─────────────────────── Apply CTA ─────────────────────── */
function ApplyCTA() {
  return (
    <section id="apply" className="py-24 md:py-32 px-5 md:px-8 text-center">
      <h2 className="text-[clamp(1.8rem,4vw,2.8rem)] leading-[1.1] uppercase mb-6">
        Sell With Us?
      </h2>
      <a href="https://popupcollectivenyc.com/apply/" target="_blank" rel="noopener noreferrer"
        className="inline-block bg-brand-red text-white text-[14px] font-bold uppercase tracking-[.1em] px-12 py-4 hover:bg-brand-red-dark transition-colors">
        Apply Now
      </a>
    </section>
  );
}

/* ─────────────────────── Footer ─────────────────────── */
function Footer() {
  return (
    <footer className="bg-brand-cream border-t border-brand-cream-dark py-10 px-5 md:px-8">
      <div className="max-w-[1100px] mx-auto">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6 mb-8">
          <div>
            <p className="font-display text-[17px] font-extrabold uppercase">Pop-Up Collective NYC</p>
            <p className="text-[13px] text-[#888] mt-1">Got Questions?</p>
            <p className="text-[13px] text-brand-red font-medium">Email info@popupcollectivenyc.com</p>
          </div>
          <div className="flex items-center gap-3">
            <a href="https://www.instagram.com/popupcollective.nyc/" target="_blank" rel="noopener noreferrer" className="w-9 h-9 rounded-full bg-brand-red flex items-center justify-center text-white hover:bg-brand-red-dark transition-colors">
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" /></svg>
            </a>
            <a href="https://www.facebook.com/people/Popupcollective-NYC/61583085854013/" target="_blank" rel="noopener noreferrer" className="w-9 h-9 rounded-full bg-brand-red flex items-center justify-center text-white hover:bg-brand-red-dark transition-colors">
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" /></svg>
            </a>
          </div>
        </div>
        <div className="border-t border-brand-cream-dark pt-5 flex flex-col md:flex-row items-center justify-between gap-3 text-[12px] text-[#999]">
          <div className="flex flex-wrap gap-4">
            <a href="#" className="hover:text-brand-charcoal transition-colors">Home</a>
            <a href="https://popupcollectivenyc.com/apply/" target="_blank" rel="noopener noreferrer" className="hover:text-brand-charcoal transition-colors">Apply</a>
            <a href="https://popupcollectivenyc.com/terms-and-conditions" target="_blank" rel="noopener noreferrer" className="hover:text-brand-charcoal transition-colors">Terms & Conditions</a>
            <span>Terms of Use</span>
            <span>Privacy Notice</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
