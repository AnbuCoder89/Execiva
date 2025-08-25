import { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import Button from "./ui/Button";

const Header = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      
      // Update background based on scroll position
      setIsScrolled(currentScrollY > 20);
      
      // Show/hide header based on scroll direction
      if (currentScrollY < lastScrollY || currentScrollY < 100) {
        // Scrolling up or near top - show header
        setIsVisible(true);
      } else if (currentScrollY > lastScrollY && currentScrollY > 100) {
        // Scrolling down and past threshold - hide header
        setIsVisible(false);
        // Close mobile menu when hiding header
        setIsMobileMenuOpen(false);
      }
      
      setLastScrollY(currentScrollY);

      // Only update active section on home page
      if (location.pathname !== '/') return;

      // Update active section based on scroll position
      const sections = [
        "home",
        "vision",
        "services",
        "capabilities",
        "case-studies",
        "testimonials",
        "contact",
      ];
      const scrollPosition = currentScrollY + 100;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const { top, bottom } = element.getBoundingClientRect();
          const offsetTop = top + currentScrollY;
          const offsetBottom = bottom + currentScrollY;

          if (scrollPosition >= offsetTop && scrollPosition < offsetBottom) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    const handleSetActiveSection = (event: CustomEvent) => {
      setActiveSection(event.detail);
    };
    window.addEventListener("scroll", handleScroll);
    window.addEventListener("setActiveSection", handleSetActiveSection as EventListener);
    handleScroll(); // Initialize active section

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("setActiveSection", handleSetActiveSection as EventListener);
    };
  }, [lastScrollY]);

  const navItems = [
    { name: "Home", id: "home" },
    { name: "Vision", id: "vision" },
    { name: "Services", id: "services" },
    { name: "Capabilities", id: "capabilities" },
    { name: "Case Studies", id: "case-studies" },
    { name: "Testimonials", id: "testimonials" },
    { name: "Contact", id: "contact" },
  ];

  const scrollToSection = (id: string) => {
    // If not on home page, navigate to home first
    if (location.pathname !== '/') {
      navigate('/');
      // Wait for navigation to complete, then scroll
      setTimeout(() => {
        setActiveSection(id);
        const element = document.getElementById(id);
        if (element) {
          element.scrollIntoView({ behavior: "smooth" });
        }
      }, 100);
      setIsMobileMenuOpen(false);
      return;
    }

    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    setIsMobileMenuOpen(false);
  };

  return (
    <header
      className={`fixed w-full z-50 transition-all duration-500 ${
        isVisible ? 'translate-y-0' : '-translate-y-full'
      } ${
        isScrolled
          ? "bg-white/95 backdrop-blur-sm shadow-sm"
          : "bg-transparent"
      }`}
    >
      <nav className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between lg:grid lg:grid-cols-3 lg:gap-8">
          {/* Logo - Left */}
          <div
            className="text-2xl font-bold text-gray-900 font-sf-pro-display cursor-pointer hover:opacity-80 transition-opacity"
            onClick={() => scrollToSection("home")}
          >
            Execiva
          </div>

          {/* Desktop Navigation - Center */}
          <div className="hidden lg:flex items-center justify-center space-x-8">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className={`px-4 py-2 text-sm font-medium font-sf-pro-text transition-all duration-300 hover:text-gray-600 ${
                  activeSection === item.id && location.pathname === '/'
                    ? "text-gray-900 border-b-2 border-gray-900"
                    : "text-gray-700"
                }`}
              >
                {item.name}
              </button>
            ))}
          </div>

          {/* CTA Button & Mobile Menu - Right */}
          <div className="flex items-center justify-end space-x-4">
            {/* CTA Button - Desktop */}
            <div className="hidden lg:block">
              <Button
                variant="vision"
                size="md"
                onClick={() => scrollToSection("contact")}
                className="shadow-md hover:shadow-lg"
              >
                Get Started
              </Button>
            </div>

            {/* Mobile Menu Button */}
            <button
              className="lg:hidden p-2 text-gray-900 hover:bg-gray-100 rounded-full transition-colors"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-label="Toggle menu"
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        <div
          className={`lg:hidden mt-4 overflow-hidden transition-all duration-300 ease-in-out ${
            isMobileMenuOpen ? "max-h-96 py-2" : "max-h-0 py-0"
          }`}
        >
          <div className="bg-white rounded-xl shadow-lg border border-gray-100 overflow-hidden">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className={`block w-full text-left px-6 py-3 text-sm font-medium transition-colors ${
                  activeSection === item.id && location.pathname === '/'
                    ? "bg-gray-50 text-gray-900 border-l-4 border-gray-900"
                    : "text-gray-700 hover:bg-gray-50"
                }`}
              >
                {item.name}
              </button>
            ))}
            
            {/* Mobile CTA Button */}
            <div className="p-4 border-t border-gray-100">
              <Button
                variant="vision"
                size="md"
                onClick={() => {
                  scrollToSection("contact");
                  setIsMobileMenuOpen(false);
                }}
                className="w-full shadow-md"
              >
                Get Started
              </Button>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
