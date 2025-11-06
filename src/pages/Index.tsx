import { useNavigate } from "react-router-dom";
import { ScrollText, Music, Landmark } from "lucide-react";
import palaceHero from "@/assets/palace-hero.jpg";
import historyIcon from "@/assets/history-icon.jpg";
import cultureIcon from "@/assets/culture-icon.jpg";
import heritageIcon from "@/assets/heritage-icon.jpg";

const Index = () => {
  const navigate = useNavigate();

  const sections = [
    {
      id: "history",
      title: "History",
      description: "Journey through centuries of royal legacy",
      icon: ScrollText,
      image: historyIcon,
      path: "/history",
      gradient: "from-primary/20 to-secondary/20",
    },
    {
      id: "culture",
      title: "Culture",
      description: "Experience the arts, music, and traditions",
      icon: Music,
      image: cultureIcon,
      path: "/culture",
      gradient: "from-secondary/20 to-accent/20",
    },
    {
      id: "heritage",
      title: "Heritage",
      description: "Discover architectural marvels and landmarks",
      icon: Landmark,
      image: heritageIcon,
      path: "/heritage",
      gradient: "from-accent/20 to-primary/20",
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative h-[60vh] md:h-[70vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img
            src={palaceHero}
            alt="Mysore Palace"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-royal-maroon/80 via-royal-maroon/60 to-background" />
        </div>
        
        <div className="relative z-10 text-center px-4 animate-fade-in">
          <h1 className="text-5xl md:text-7xl font-display font-bold text-cream mb-4 tracking-wide">
            Mysuru Unveiled
          </h1>
          <p className="text-xl md:text-2xl text-cream/90 font-body italic mb-2">
            ಮೈಸೂರು - The City of Royal Heritage
          </p>
          <div className="w-32 h-1 mx-auto mt-6 bg-gradient-to-r from-transparent via-primary to-transparent" />
        </div>
      </section>

      {/* Welcome Section */}
      <section className="py-12 px-4 max-w-4xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-display font-semibold text-foreground mb-4 ornamental-border pb-6">
          Welcome to Mysuru's Timeless Legacy
        </h2>
        <p className="text-lg text-muted-foreground font-body leading-relaxed max-w-2xl mx-auto">
          Embark on a journey through the majestic history, vibrant culture, and magnificent heritage 
          of India's City of Palaces. Each corner tells a story of royal grandeur and timeless traditions.
        </p>
      </section>

      {/* Section Cards */}
      <section className="py-12 px-4 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {sections.map((section, index) => {
            const Icon = section.icon;
            return (
              <div
                key={section.id}
                className="royal-card cursor-pointer group"
                onClick={() => navigate(section.path)}
                style={{ animationDelay: `${index * 150}ms` }}
              >
                <div className="relative h-64 overflow-hidden">
                  <img
                    src={section.image}
                    alt={section.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className={`absolute inset-0 bg-gradient-to-b ${section.gradient} group-hover:opacity-75 transition-opacity`} />
                  
                  <div className="absolute top-4 right-4">
                    <div className="w-16 h-16 rounded-full bg-cream/20 backdrop-blur-sm flex items-center justify-center border-2 border-primary/50">
                      <Icon className="w-8 h-8 text-cream" />
                    </div>
                  </div>
                </div>
                
                <div className="p-6 bg-card border-t-2 border-primary/30">
                  <h3 className="text-2xl font-display font-semibold text-foreground mb-2">
                    {section.title}
                  </h3>
                  <p className="text-muted-foreground font-body">
                    {section.description}
                  </p>
                  
                  <div className="mt-4 flex items-center text-primary font-semibold group-hover:translate-x-2 transition-transform">
                    <span className="font-body">Explore</span>
                    <svg
                      className="w-5 h-5 ml-2"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 5l7 7-7 7"
                      />
                    </svg>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-4 text-center border-t border-border mt-12">
        <p className="text-muted-foreground font-body italic text-lg">
          Proudly presenting Mysuru's timeless legacy
        </p>
        <p className="text-sm text-muted-foreground mt-2">
          © 2025 Mysuru Unveiled. Celebrating Royal Heritage.
        </p>
      </footer>
    </div>
  );
};

export default Index;
