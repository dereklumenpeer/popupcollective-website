import { useState } from 'react';
import { MapPin, Clock, ArrowRight, Instagram, Mail, Menu, X, ChevronDown } from 'lucide-react';

export default function App() {
  return (
    <div className="min-h-screen bg-cream">
      <Navbar />
      <Hero />
      <About />
      <BoothOptions />
      <WhySellWithUs />
      <Location />
      <OurStory />
      <Footer />
    </div>
  );
}

// ── Navbar ──────────────────────────────────
function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-cream/90 backdrop-blur-md border-b border-sand/30">
      <div className="max-w-6xl mx-auto px-6 flex items-center justify-between h-16">
        <a href="#" onClick={(e) => { e.preventDefault(); window.scrollTo({ top: 0, behavior: 'smooth' }); }} className="font-display text-xl font-semibold text-soft-black tracking-tight">
          Pop-Up Collective
        </a>

        <div className="hidden md:flex items-center gap-8">
          {['About', 'Booths', 'Location', 'Our Story'].map((item) => (
            <a key={item} href={`#${item.toLowerCase().replace(' ', '-')}`} className="text-sm text-text-gray hover:text-charcoal transition-colors">
              {item}
            </a>
          ))}
          <a href="#apply" className="bg-terracotta text-white text-sm font-medium px-5 py-2.5 rounded-full hover:bg-terracotta-dark transition-colors">
            Apply Now
          </a>
        </div>

        <button onClick={() => setOpen(!open)} className="md:hidden p-2 text-charcoal">
          {open ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </div>

      {open && (
        <div className="md:hidden bg-cream border-t border-sand/30 px-6 py-4 space-y-3">
          {['About', 'Booths', 'Location', 'Our Story'].map((item) => (
            <a key={item} href={`#${item.toLowerCase().replace(' ', '-')}`} onClick={() => setOpen(false)} className="block text-sm text-text-gray hover:text-charcoal py-1">
              {item}
            </a>
          ))}
          <a href="#apply" onClick={() => setOpen(false)} className="block bg-terracotta text-white text-sm font-medium px-5 py-2.5 rounded-full text-center hover:bg-terracotta-dark transition-colors">
            Apply Now
          </a>
        </div>
      )}
    </nav>
  );
}

// ── Hero ──────────────────────────────────
function Hero() {
  return (
    <section className="pt-28 pb-20 md:pt-40 md:pb-32 px-6">
      <div className="max-w-4xl mx-auto text-center">
        <p className="text-sm tracking-[0.25em] uppercase text-terracotta font-medium mb-6">SoHo, New York City</p>
        <h1 className="font-display text-5xl md:text-7xl lg:text-8xl font-medium text-soft-black leading-[1.05] tracking-tight mb-6">
          Pop-Up<br />Collective
        </h1>
        <p className="text-lg md:text-xl text-text-gray max-w-xl mx-auto leading-relaxed mb-10">
          A curated marketplace of makers, designers, doers and dreamers — together in one warm, creative space.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <a href="#apply" className="bg-terracotta text-white font-medium px-8 py-3.5 rounded-full hover:bg-terracotta-dark transition-all text-sm flex items-center gap-2">
            Apply for a Booth <ArrowRight className="w-4 h-4" />
          </a>
          <a href="#booths" className="border border-charcoal/20 text-charcoal font-medium px-8 py-3.5 rounded-full hover:bg-charcoal/5 transition-all text-sm">
            View Booth Options
          </a>
        </div>

        <div className="mt-16 flex items-center justify-center gap-8 md:gap-12 text-sm text-text-gray">
          <div className="flex items-center gap-2">
            <MapPin className="w-4 h-4 text-terracotta" />
            435 Broadway
          </div>
          <div className="flex items-center gap-2">
            <Clock className="w-4 h-4 text-terracotta" />
            Open Daily 11am–7pm
          </div>
        </div>

        <a href="#about" className="inline-block mt-12 animate-bounce">
          <ChevronDown className="w-6 h-6 text-text-light" />
        </a>
      </div>
    </section>
  );
}

// ── About ──────────────────────────────────
function About() {
  return (
    <section id="about" className="py-20 md:py-28 px-6 bg-warm-white">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-16">
          <p className="text-sm tracking-[0.2em] uppercase text-terracotta font-medium mb-4">Spring / Summer 2026</p>
          <h2 className="font-display text-3xl md:text-5xl font-medium text-soft-black mb-6">
            Where Small Brands Shine
          </h2>
          <p className="text-text-gray max-w-2xl mx-auto leading-relaxed">
            Pop-Up Collective NYC brings together local designers, artists, and independent brands in one warm and creative space. Our mission is to make retail more flexible, collaborative, and inspiring.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {[
            { number: '20+', label: 'Local Vendors', desc: 'Curated creators, designers, and small brands' },
            { number: '435', label: 'Broadway, SoHo', desc: 'Prime foot traffic in NYC\'s most iconic shopping district' },
            { number: '7', label: 'Days a Week', desc: 'Open daily from 11am to 7pm for maximum exposure' },
          ].map((stat) => (
            <div key={stat.label} className="bg-cream rounded-2xl p-8 text-center">
              <p className="font-display text-4xl md:text-5xl font-medium text-terracotta mb-2">{stat.number}</p>
              <p className="text-sm font-semibold text-soft-black mb-1">{stat.label}</p>
              <p className="text-xs text-text-gray">{stat.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ── Booth Options ──────────────────────────
function BoothOptions() {
  return (
    <section id="booths" className="py-20 md:py-28 px-6">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-16">
          <p className="text-sm tracking-[0.2em] uppercase text-terracotta font-medium mb-4">Flexible Options</p>
          <h2 className="font-display text-3xl md:text-5xl font-medium text-soft-black mb-6">
            Booth Options & Pricing
          </h2>
          <p className="text-text-gray max-w-xl mx-auto leading-relaxed">
            All booths are approximately 35 sq ft with table, chair, electricity, and WiFi included.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          <PricingCard
            title="Weekly"
            badge="Flexible"
            price="$1,050"
            period="/week"
            features={['~35 sq ft booth space', '6ft table + chair included', 'Electricity & WiFi', 'Mon–Sun access', 'Starting from Tier C']}
          />
          <PricingCard
            title="Monthly"
            badge="30% OFF"
            price="$2,985"
            period="/month"
            featured
            features={['Everything in Weekly', 'Priority placement', 'Early commitment rate available', 'From $99/day', 'Starting from Tier C']}
          />
          <PricingCard
            title="3-Month"
            badge="35% OFF"
            price="$2,795"
            period="/month"
            features={['Everything in Monthly', 'Premium placement', 'Window placement opportunities', 'From $93/day', 'Starting from Tier C']}
          />
        </div>

        <div className="mt-12 bg-warm-white rounded-2xl p-8 md:p-10">
          <h3 className="font-display text-xl font-medium text-soft-black mb-4">Placement Tiers</h3>
          <div className="grid md:grid-cols-3 gap-6 text-sm">
            <div>
              <p className="font-semibold text-charcoal mb-1">Tier A — Front</p>
              <p className="text-text-gray">Closest to the entrance and Broadway foot traffic.</p>
            </div>
            <div>
              <p className="font-semibold text-charcoal mb-1">Tier B — Mid</p>
              <p className="text-text-gray">Middle section with consistent visibility and traffic flow.</p>
            </div>
            <div>
              <p className="font-semibold text-charcoal mb-1">Tier C — Rear</p>
              <p className="text-text-gray">Rear section of the store, most affordable option.</p>
            </div>
          </div>
        </div>

        <div id="apply" className="mt-12 text-center">
          <a href="https://popupcollectivenyc.com/form/" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 bg-terracotta text-white font-medium px-10 py-4 rounded-full hover:bg-terracotta-dark transition-all text-sm">
            Apply for a Booth <ArrowRight className="w-4 h-4" />
          </a>
        </div>
      </div>
    </section>
  );
}

function PricingCard({ title, badge, price, period, features, featured = false }: {
  title: string; badge: string; price: string; period: string; features: string[]; featured?: boolean;
}) {
  return (
    <div className={`rounded-2xl p-8 ${featured ? 'bg-soft-black text-white ring-2 ring-terracotta' : 'bg-warm-white text-charcoal'}`}>
      <div className="flex items-center justify-between mb-6">
        <h3 className="font-display text-xl font-medium">{title}</h3>
        <span className={`text-[10px] font-semibold uppercase tracking-wider px-3 py-1 rounded-full ${featured ? 'bg-terracotta text-white' : 'bg-terracotta/10 text-terracotta'}`}>
          {badge}
        </span>
      </div>
      <div className="mb-6">
        <span className="text-3xl font-bold">{price}</span>
        <span className={`text-sm ${featured ? 'text-white/60' : 'text-text-gray'}`}>{period}</span>
      </div>
      <ul className="space-y-3 mb-8">
        {features.map((f) => (
          <li key={f} className={`text-sm flex items-start gap-2 ${featured ? 'text-white/80' : 'text-text-gray'}`}>
            <span className="text-terracotta mt-0.5">&#10003;</span> {f}
          </li>
        ))}
      </ul>
      <a
        href="https://popupcollectivenyc.com/form/"
        target="_blank"
        rel="noopener noreferrer"
        className={`block text-center text-sm font-medium py-3 rounded-full transition-all ${
          featured
            ? 'bg-terracotta text-white hover:bg-terracotta-dark'
            : 'border border-charcoal/20 text-charcoal hover:bg-charcoal/5'
        }`}
      >
        Apply Now
      </a>
    </div>
  );
}

// ── Why Sell With Us ──────────────────────
function WhySellWithUs() {
  return (
    <section className="py-20 md:py-28 px-6 bg-warm-white">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-16">
          <p className="text-sm tracking-[0.2em] uppercase text-terracotta font-medium mb-4">Why Join Us</p>
          <h2 className="font-display text-3xl md:text-5xl font-medium text-soft-black mb-6">
            Built for Small Brands
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {[
            { title: 'Prime SoHo Location', desc: 'High foot traffic from tourists and locals on Broadway, in the heart of NYC\'s most iconic shopping district.' },
            { title: 'Curated Vendor Mix', desc: 'We carefully select diverse brands to create a vibrant, balanced market experience that attracts shoppers.' },
            { title: 'Flexible Commitment', desc: 'Choose a weekend, a week, a month, or 3 months. We work with your timeline and budget.' },
            { title: 'Supportive Community', desc: 'Get help with setup guidance, on-site coordination, and connect with fellow makers who share your vision.' },
          ].map((item) => (
            <div key={item.title} className="bg-cream rounded-2xl p-8">
              <h3 className="font-display text-lg font-medium text-soft-black mb-2">{item.title}</h3>
              <p className="text-sm text-text-gray leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ── Location ──────────────────────────────
function Location() {
  return (
    <section id="location" className="py-20 md:py-28 px-6">
      <div className="max-w-5xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <p className="text-sm tracking-[0.2em] uppercase text-terracotta font-medium mb-4">Visit Us</p>
            <h2 className="font-display text-3xl md:text-4xl font-medium text-soft-black mb-6">
              Located in SoHo, NYC
            </h2>
            <p className="text-text-gray leading-relaxed mb-6">
              Our space at 435 Broadway is surrounded by shops, boutiques, and creative studios — the perfect spot for a pop-up store in New York City.
            </p>
            <div className="space-y-3 text-sm">
              <div className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-terracotta shrink-0 mt-0.5" />
                <div>
                  <p className="font-semibold text-charcoal">435 Broadway</p>
                  <p className="text-text-gray">New York, NY 10013</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Clock className="w-5 h-5 text-terracotta shrink-0 mt-0.5" />
                <div>
                  <p className="font-semibold text-charcoal">Open Daily</p>
                  <p className="text-text-gray">11:00 AM – 7:00 PM</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Mail className="w-5 h-5 text-terracotta shrink-0 mt-0.5" />
                <div>
                  <p className="font-semibold text-charcoal">Contact</p>
                  <p className="text-text-gray">info@popupcollectivenyc.com</p>
                </div>
              </div>
            </div>
          </div>
          <div className="rounded-2xl overflow-hidden shadow-lg bg-sand-light h-[350px] flex items-center justify-center">
            <div className="text-center p-8">
              <MapPin className="w-10 h-10 text-terracotta mx-auto mb-3" />
              <p className="font-display text-lg font-medium text-soft-black">435 Broadway</p>
              <p className="text-sm text-text-gray">New York, NY 10013</p>
              <a href="https://maps.google.com/?q=435+Broadway+New+York+NY+10013" target="_blank" rel="noopener noreferrer" className="inline-block mt-4 text-sm text-terracotta hover:text-terracotta-dark font-medium">
                Open in Google Maps &rarr;
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// ── Our Story ──────────────────────────────
function OurStory() {
  return (
    <section id="our-story" className="py-20 md:py-28 px-6 bg-warm-white">
      <div className="max-w-3xl mx-auto text-center">
        <p className="text-sm tracking-[0.2em] uppercase text-terracotta font-medium mb-4">Our Story</p>
        <h2 className="font-display text-3xl md:text-5xl font-medium text-soft-black mb-8">
          From Small Business Owner to Retail Curator
        </h2>
        <div className="text-text-gray leading-relaxed space-y-4 text-left md:text-center">
          <p>
            Pop-Up Collective NYC was founded by Lou, a student at Columbia University who started a small business selling press-on nails. Through that journey, she quickly learned how hard it is for small brands to find a sustainable place to showcase their products in the city.
          </p>
          <p>
            That frustration turned into a vision: a space built for small businesses, by someone who truly understands what it's like to be one. What began as a one-month pop-up has grown into a larger presence in SoHo, bringing the concept to one of NYC's most iconic shopping destinations.
          </p>
        </div>

        <div className="mt-12 flex flex-col sm:flex-row items-center justify-center gap-4 text-sm">
          <div className="bg-cream rounded-xl px-6 py-4">
            <p className="font-display text-lg font-medium text-soft-black">Nov 2025</p>
            <p className="text-text-gray text-xs">First pop-up at 57 Bond St</p>
          </div>
          <ArrowRight className="w-4 h-4 text-text-light hidden sm:block" />
          <div className="bg-cream rounded-xl px-6 py-4">
            <p className="font-display text-lg font-medium text-soft-black">Apr 2026</p>
            <p className="text-text-gray text-xs">Moving to 435 Broadway, SoHo</p>
          </div>
        </div>
      </div>
    </section>
  );
}

// ── Footer ──────────────────────────────────
function Footer() {
  return (
    <footer className="bg-soft-black text-white py-12 px-6">
      <div className="max-w-5xl mx-auto">
        <div className="flex flex-col md:flex-row items-start justify-between gap-8 mb-8">
          <div>
            <p className="font-display text-xl font-medium mb-2">Pop-Up Collective NYC</p>
            <p className="text-sm text-white/50">A curated marketplace for makers and dreamers.</p>
          </div>
          <div className="flex items-center gap-4">
            <a href="https://www.instagram.com/popupcollective.nyc/" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20 transition-colors">
              <Instagram className="w-5 h-5" />
            </a>
            <a href="mailto:info@popupcollectivenyc.com" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20 transition-colors">
              <Mail className="w-5 h-5" />
            </a>
          </div>
        </div>
        <div className="border-t border-white/10 pt-6 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-white/40">
          <p>&copy; {new Date().getFullYear()} Pop-Up Collective NYC. All rights reserved.</p>
          <div className="flex gap-6">
            <a href="https://popupcollectivenyc.com/terms-and-conditions" target="_blank" rel="noopener noreferrer" className="hover:text-white/60 transition-colors">Terms & Conditions</a>
            <a href="#" className="hover:text-white/60 transition-colors">Privacy</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
