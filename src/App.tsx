import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Utensils, 
  MapPin, 
  Phone, 
  Clock, 
  Star, 
  ChevronRight, 
  Menu as MenuIcon, 
  X, 
  Instagram, 
  Facebook, 
  Twitter,
  Leaf,
  Flame
} from 'lucide-react';

// --- Types ---
interface MenuItem {
  id: number;
  name: string;
  description: string;
  price: string;
  category: string;
  tags: string[];
  image: string;
}

// --- Mock Data ---
const MENU_ITEMS: MenuItem[] = [
  {
    id: 1,
    name: "Butter Chicken (Murgh Makhani)",
    description: "Tender chicken pieces simmered in a rich, creamy tomato-based gravy with a hint of fenugreek.",
    price: "$18.99",
    category: "Mains",
    tags: ["Popular", "Gluten-Free"],
    image: "https://images.unsplash.com/photo-1603894584373-5ac82b2ae398?auto=format&fit=crop&q=80&w=800"
  },
  {
    id: 2,
    name: "Paneer Tikka",
    description: "Cubed cottage cheese marinated in spiced yogurt and grilled to perfection in a clay oven.",
    price: "$14.99",
    category: "Starters",
    tags: ["Vegetarian", "Spicy"],
    image: "https://images.unsplash.com/photo-1567184109411-47a7a3928570?auto=format&fit=crop&q=80&w=800"
  },
  {
    id: 3,
    name: "Lamb Rogan Josh",
    description: "Traditional Kashmiri lamb curry cooked with aromatic spices and a vibrant red chili gravy.",
    price: "$21.99",
    category: "Mains",
    tags: ["Spicy", "Chef's Special"],
    image: "https://images.unsplash.com/photo-1545247181-516773cae754?auto=format&fit=crop&q=80&w=800"
  },
  {
    id: 4,
    name: "Samosa Chaat",
    description: "Crushed vegetable samosas topped with chickpeas, yogurt, chutneys, and fine sev.",
    price: "$9.99",
    category: "Starters",
    tags: ["Vegetarian", "Street Food"],
    image: "https://images.unsplash.com/photo-1601050690597-df056fb01793?auto=format&fit=crop&q=80&w=800"
  },
  {
    id: 5,
    name: "Gulab Jamun",
    description: "Soft milk-based dumplings soaked in a warm cardamom-infused sugar syrup.",
    price: "$7.99",
    category: "Desserts",
    tags: ["Sweet", "Classic"],
    image: "https://images.unsplash.com/photo-1589119908995-c6837fa14848?auto=format&fit=crop&q=80&w=800"
  },
  {
    id: 6,
    name: "Mango Lassi",
    description: "Refreshing yogurt-based drink blended with sweet Alphonso mangoes.",
    price: "$5.99",
    category: "Drinks",
    tags: ["Refreshing"],
    image: "https://images.unsplash.com/photo-1546173159-315724a31696?auto=format&fit=crop&q=80&w=800"
  }
];

const CATEGORIES = ["All", "Starters", "Mains", "Desserts", "Drinks"];

// --- Components ---

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-warm-cream/90 backdrop-blur-md shadow-md py-3' : 'bg-transparent py-6'}`}>
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <Utensils className="text-deep-red w-8 h-8" />
          <span className="text-2xl font-display font-bold text-charcoal tracking-tighter">UTSAV</span>
        </div>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          {['Home', 'Menu', 'About', 'Contact'].map((item) => (
            <a 
              key={item} 
              href={`#${item.toLowerCase()}`} 
              className="text-charcoal font-medium hover:text-deep-red transition-colors"
            >
              {item}
            </a>
          ))}
          <button className="btn-primary py-2 px-6 text-sm">Book a Table</button>
        </div>

        {/* Mobile Toggle */}
        <button className="md:hidden text-charcoal" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
          {isMobileMenuOpen ? <X /> : <MenuIcon />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-full left-0 right-0 bg-warm-cream border-t border-saffron/10 p-6 flex flex-col gap-4 md:hidden shadow-xl"
          >
            {['Home', 'Menu', 'About', 'Contact'].map((item) => (
              <a 
                key={item} 
                href={`#${item.toLowerCase()}`} 
                className="text-lg font-medium text-charcoal"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {item}
              </a>
            ))}
            <button className="btn-primary w-full">Book a Table</button>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

const Hero = () => {
  return (
    <section id="home" className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&q=80&w=1920" 
          alt="Restaurant Ambiance" 
          className="w-full h-full object-cover"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-black/50" />
      </div>

      <div className="relative z-10 text-center px-6 max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <span className="inline-block px-4 py-1 bg-saffron text-charcoal font-bold text-xs uppercase tracking-widest rounded-full mb-6">
            Authentic Indian Cuisine
          </span>
          <h1 className="text-5xl md:text-7xl font-display text-white mb-6 leading-tight">
            Celebrate the <span className="text-saffron italic">Festival</span> of Flavors
          </h1>
          <p className="text-xl text-white/80 mb-10 max-w-2xl mx-auto leading-relaxed">
            Experience a culinary journey through India's rich heritage, crafted with passion and served with love in the heart of the city.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <button className="btn-primary w-full sm:w-auto flex items-center justify-center gap-2">
              Book a Table <ChevronRight size={18} />
            </button>
            <button className="btn-secondary w-full sm:w-auto border-white text-white hover:bg-white hover:text-charcoal">
              View Menu
            </button>
          </div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div 
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 2 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 text-white/50"
      >
        <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center p-1">
          <div className="w-1 h-2 bg-white rounded-full" />
        </div>
      </motion.div>
    </section>
  );
};

const MenuSection = () => {
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredItems = activeCategory === "All" 
    ? MENU_ITEMS 
    : MENU_ITEMS.filter(item => item.category === activeCategory);

  return (
    <section id="menu" className="section-padding">
      <div className="text-center mb-16">
        <h2 className="text-4xl md:text-5xl mb-4">Our Signature Menu</h2>
        <p className="text-charcoal/60 max-w-2xl mx-auto">
          Each dish is a masterpiece, prepared with authentic spices and the freshest ingredients to bring you the true taste of India.
        </p>
      </div>

      {/* Category Filter */}
      <div className="flex flex-wrap justify-center gap-3 mb-12">
        {CATEGORIES.map(cat => (
          <button
            key={cat}
            onClick={() => setActiveCategory(cat)}
            className={`px-6 py-2 rounded-full font-medium transition-all ${
              activeCategory === cat 
                ? 'bg-deep-red text-white shadow-md' 
                : 'bg-white text-charcoal hover:bg-saffron/20 border border-saffron/20'
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Menu Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <AnimatePresence mode="popLayout">
          {filteredItems.map((item) => (
            <motion.div
              layout
              key={item.id}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.3 }}
              className="menu-item-card group"
            >
              <div className="relative h-48 mb-6 overflow-hidden rounded-xl">
                <img 
                  src={item.image} 
                  alt={item.name} 
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute top-3 right-3 flex flex-col gap-2">
                  {item.tags.map(tag => (
                    <span key={tag} className="px-2 py-1 bg-white/90 backdrop-blur-sm text-[10px] font-bold uppercase tracking-wider rounded-md flex items-center gap-1">
                      {tag.includes('Vegetarian') && <Leaf size={10} className="text-green-600" />}
                      {tag.includes('Spicy') && <Flame size={10} className="text-orange-600" />}
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
              <div className="flex justify-between items-start mb-2">
                <h3 className="text-xl">{item.name}</h3>
                <span className="text-deep-red font-bold">{item.price}</span>
              </div>
              <p className="text-charcoal/60 text-sm leading-relaxed">
                {item.description}
              </p>
            </motion.div>
          ))}
        </AnimatePresence>
      </div>

      <div className="mt-16 text-center">
        <button className="btn-secondary">Download Full Menu (PDF)</button>
      </div>
    </section>
  );
};

const AboutSection = () => {
  return (
    <section id="about" className="bg-charcoal text-white section-padding overflow-hidden">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="relative"
        >
          <div className="relative z-10 rounded-2xl overflow-hidden shadow-2xl">
            <img 
              src="https://images.unsplash.com/photo-1552566626-52f8b828add9?auto=format&fit=crop&q=80&w=1000" 
              alt="Chef at work" 
              className="w-full h-auto"
              referrerPolicy="no-referrer"
            />
          </div>
          {/* Decorative Elements */}
          <div className="absolute -top-10 -left-10 w-40 h-40 bg-saffron/20 rounded-full blur-3xl" />
          <div className="absolute -bottom-10 -right-10 w-60 h-60 bg-deep-red/20 rounded-full blur-3xl" />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
        >
          <span className="text-saffron font-bold uppercase tracking-widest text-sm mb-4 block">Our Story</span>
          <h2 className="text-4xl md:text-5xl mb-8">A Legacy of Spices & Celebration</h2>
          <div className="space-y-6 text-white/70 leading-relaxed">
            <p>
              "Utsav" means celebration in Sanskrit, and that's exactly what we aim to provide every guest who walks through our doors. Our journey began three decades ago in the bustling spice markets of Old Delhi.
            </p>
            <p>
              Today, we bring that same authenticity to your table. Our Chef, Vikram Singh, uses family recipes passed down through generations, combined with modern culinary techniques to create a dining experience that is both nostalgic and innovative.
            </p>
            <p>
              We source our spices directly from organic farms in India, ensuring that every pinch of saffron and every pod of cardamom carries the true essence of its origin.
            </p>
          </div>
          <div className="mt-10 grid grid-cols-2 gap-8">
            <div>
              <h4 className="text-3xl text-saffron mb-1">30+</h4>
              <p className="text-sm text-white/50 uppercase tracking-wider">Years of Heritage</p>
            </div>
            <div>
              <h4 className="text-3xl text-saffron mb-1">15k+</h4>
              <p className="text-sm text-white/50 uppercase tracking-wider">Happy Diners</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

const ContactSection = () => {
  return (
    <section id="contact" className="section-padding">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
        <div>
          <h2 className="text-4xl md:text-5xl mb-8">Visit Us</h2>
          <p className="text-charcoal/60 mb-12">
            Whether you're planning a romantic dinner, a family gathering, or a corporate event, we're here to make it special.
          </p>

          <div className="space-y-8">
            <div className="flex gap-4">
              <div className="w-12 h-12 bg-saffron/10 rounded-full flex items-center justify-center text-deep-red shrink-0">
                <MapPin size={24} />
              </div>
              <div>
                <h4 className="font-bold mb-1">Location</h4>
                <p className="text-charcoal/60">123 Culinary Avenue, Foodie District<br />New York, NY 10001</p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="w-12 h-12 bg-saffron/10 rounded-full flex items-center justify-center text-deep-red shrink-0">
                <Phone size={24} />
              </div>
              <div>
                <h4 className="font-bold mb-1">Call Us</h4>
                <p className="text-charcoal/60">+1 (212) 555-0123</p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="w-12 h-12 bg-saffron/10 rounded-full flex items-center justify-center text-deep-red shrink-0">
                <Clock size={24} />
              </div>
              <div>
                <h4 className="font-bold mb-1">Hours</h4>
                <p className="text-charcoal/60">Mon - Thu: 11:30 AM - 10:00 PM<br />Fri - Sun: 11:30 AM - 11:00 PM</p>
              </div>
            </div>
          </div>

          <div className="mt-12 flex gap-4">
            <a href="#" className="w-10 h-10 bg-charcoal text-white rounded-full flex items-center justify-center hover:bg-deep-red transition-colors"><Instagram size={20} /></a>
            <a href="#" className="w-10 h-10 bg-charcoal text-white rounded-full flex items-center justify-center hover:bg-deep-red transition-colors"><Facebook size={20} /></a>
            <a href="#" className="w-10 h-10 bg-charcoal text-white rounded-full flex items-center justify-center hover:bg-deep-red transition-colors"><Twitter size={20} /></a>
          </div>
        </div>

        <div className="rounded-3xl overflow-hidden h-[400px] lg:h-auto shadow-xl border-4 border-white">
          <iframe 
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d193595.15830869428!2d-74.119763973046!3d40.69766374874431!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c24fa5d33f083b%3A0xc80b8f06e177fe62!2sNew%20York%2C%20NY!5e0!3m2!1sen!2sus!4v1647450000000!5m2!1sen!2sus" 
            width="100%" 
            height="100%" 
            style={{ border: 0 }} 
            allowFullScreen 
            loading="lazy" 
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
      </div>
    </section>
  );
};

const SocialProof = () => {
  return (
    <section className="bg-saffron/10 py-16">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-wrap justify-center gap-12 md:gap-24">
          <div className="text-center">
            <div className="flex justify-center gap-1 text-gold mb-2">
              <Star size={20} fill="currentColor" />
              <Star size={20} fill="currentColor" />
              <Star size={20} fill="currentColor" />
              <Star size={20} fill="currentColor" />
              <Star size={20} fill="currentColor" />
            </div>
            <p className="font-bold text-charcoal">4.9/5 on TripAdvisor</p>
          </div>
          <div className="text-center">
            <h4 className="text-2xl font-display text-deep-red mb-1">Voted Best Curry</h4>
            <p className="text-sm text-charcoal/60 uppercase tracking-widest">Local Food Awards 2023</p>
          </div>
          <div className="text-center">
            <h4 className="text-2xl font-display text-deep-red mb-1">Michelin Guide</h4>
            <p className="text-sm text-charcoal/60 uppercase tracking-widest">Recommended 2024</p>
          </div>
        </div>
      </div>
    </section>
  );
};

const Footer = () => {
  return (
    <footer className="bg-charcoal text-white/50 py-12 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6 text-center">
        <div className="flex items-center justify-center gap-2 mb-6">
          <Utensils className="text-saffron w-6 h-6" />
          <span className="text-xl font-display font-bold text-white tracking-tighter">UTSAV</span>
        </div>
        <p className="text-sm mb-8 max-w-md mx-auto">
          Bringing the authentic flavors of India to your neighborhood. Join us for an unforgettable dining experience.
        </p>
        <div className="flex justify-center gap-8 mb-8">
          <a href="#" className="hover:text-saffron transition-colors">Privacy Policy</a>
          <a href="#" className="hover:text-saffron transition-colors">Terms of Service</a>
          <a href="#" className="hover:text-saffron transition-colors">Careers</a>
        </div>
        <p className="text-xs">
          © {new Date().getFullYear()} Utsav Restaurant. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default function App() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main>
        <Hero />
        <SocialProof />
        <MenuSection />
        <AboutSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
}
