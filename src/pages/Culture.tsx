import { ArrowLeft, Music2, Flower2, Utensils, Sparkles } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { AudioPlayer } from "@/components/AudioPlayer";
import cultureIcon from "@/assets/culture-icon.jpg";

const Culture = () => {
  const navigate = useNavigate();

  const culturalElements = [
    {
      title: "Classical Music & Dance",
      icon: Music2,
      items: [
        {
          name: "Veena",
          description: "The soul-stirring strings of the Veena resonate through Mysuru's musical heritage, representing centuries of Carnatic classical tradition.",
        },
        {
          name: "Yakshagana",
          description: "A vibrant traditional theatre form combining dance, music, dialogue, and elaborate costumes, telling stories from Hindu epics.",
        },
        {
          name: "Bharatanatyam",
          description: "The classical dance form that embodies devotion, precision, and artistic excellence, performed in temples and royal courts.",
        },
      ],
      color: "from-primary/20 to-secondary/20",
    },
    {
      title: "Arts & Crafts",
      icon: Flower2,
      items: [
        {
          name: "Mysore Silk",
          description: "World-renowned silk sarees known for their pure silk fabric, rich golden zari, and exquisite craftsmanship passed down through generations.",
        },
        {
          name: "Sandalwood Craft",
          description: "Intricate carvings and sculptures made from fragrant sandalwood, a specialty of Mysuru artisans for centuries.",
        },
        {
          name: "Traditional Painting",
          description: "Mysore paintings featuring muted colors, gesso work, and gold foiling, depicting Hindu gods and goddesses.",
        },
      ],
      color: "from-secondary/20 to-accent/20",
    },
    {
      title: "Culinary Heritage",
      icon: Utensils,
      items: [
        {
          name: "Mysore Pak",
          description: "The legendary sweet that originated in the royal kitchens, made with generous amounts of ghee, sugar, and gram flour.",
        },
        {
          name: "Mysore Masala Dosa",
          description: "A crispy rice crepe filled with spicy red chutney and potato filling, a breakfast favorite across South India.",
        },
        {
          name: "Traditional Coffee",
          description: "Filter coffee served in traditional steel tumblers, representing the coffee culture of Karnataka.",
        },
      ],
      color: "from-accent/20 to-primary/20",
    },
    {
      title: "Festivals & Celebrations",
      icon: Sparkles,
      items: [
        {
          name: "Mysuru Dasara",
          description: "The grand 10-day festival celebrating the victory of good over evil, featuring royal processions, cultural performances, and the illuminated palace.",
        },
        {
          name: "Cultural Procession",
          description: "Spectacular parade with decorated elephants, folk dancers, musicians, and tableaux showcasing Karnataka's rich heritage.",
        },
        {
          name: "Palace Illumination",
          description: "The Mysore Palace adorned with nearly 100,000 lights, creating a breathtaking spectacle visible from miles away.",
        },
      ],
      color: "from-primary/20 to-accent/20",
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="sticky top-0 z-40 bg-card/95 backdrop-blur-sm border-b border-border">
        <div className="max-w-7xl mx-auto px-4 py-4 flex items-center gap-4">
          <Button
            variant="ghost"
            size="icon"
            onClick={() => navigate("/home")}
            className="hover:bg-primary/10"
          >
            <ArrowLeft className="w-5 h-5" />
          </Button>
          <div>
            <h1 className="text-2xl md:text-3xl font-display font-bold text-foreground">
              Culture
            </h1>
            <p className="text-sm text-muted-foreground font-body">
              Experience the arts, music, and traditions
            </p>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative h-80 md:h-96 overflow-hidden">
        <img
          src={cultureIcon}
          alt="Mysuru Culture"
          className="w-full h-full object-cover opacity-75"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-secondary/80 via-secondary/60 to-background" />
        
        <div className="absolute inset-0 flex items-center justify-center text-center px-4 animate-fade-in">
          <div>
            <h2 className="text-4xl md:text-6xl font-display font-bold text-black mb-4">
              Cultural Tapestry
            </h2>
            <p className="text-xl md:text-2xl text-black/90 font-body italic max-w-3xl mx-auto">
              Where ancient traditions meet artistic excellence in perfect harmony
            </p>
          </div>
        </div>
      </section>

      {/* Introduction */}
      <section className="py-12 px-4 max-w-4xl mx-auto text-center">
        <p className="text-lg text-muted-foreground font-body leading-relaxed">
          Mysuru's culture is a vibrant blend of classical arts, traditional crafts, culinary delights, 
          and grand celebrations. Each tradition tells a story of devotion, skill, and the timeless 
          spirit of this royal city.
        </p>
      </section>

      {/* Cultural Elements */}
      <section className="py-12 px-4 max-w-6xl mx-auto space-y-16">
        {culturalElements.map((element, index) => {
          const Icon = element.icon;
          
          return (
            <div
              key={index}
              className="animate-fade-in"
              style={{ animationDelay: `${index * 150}ms` }}
            >
              {/* Section Header */}
              <div className="flex items-center gap-4 mb-8">
                <div className={`w-16 h-16 rounded-full bg-gradient-to-br ${element.color} flex items-center justify-center shadow-lg`}>
                  <Icon className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-3xl font-display font-bold text-foreground">
                  {element.title}
                </h3>
              </div>

              {/* Items Grid */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {element.items.map((item, itemIndex) => (
                  <div
                    key={itemIndex}
                    className="royal-card group"
                  >
                    <div className={`h-2 bg-gradient-to-r ${element.color}`} />
                    <div className="p-6 bg-card space-y-4">
                      <div>
                        <h4 className="text-xl font-display font-semibold text-foreground mb-3">
                          {item.name}
                        </h4>
                        <p className="text-muted-foreground font-body leading-relaxed">
                          {item.description}
                        </p>
                      </div>
                      <AudioPlayer title={item.name} />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          );
        })}
      </section>

      {/* Dasara Highlight */}
      <section className="py-16 px-4 bg-gradient-to-br from-primary/10 via-secondary/10 to-accent/10">
        <div className="max-w-4xl mx-auto text-center">
          <Sparkles className="w-16 h-16 mx-auto mb-6 text-primary" />
          <h3 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-4 ornamental-border pb-6">
            Mysuru Dasara - The Nada Habba
          </h3>
          <p className="text-lg text-muted-foreground font-body leading-relaxed mb-8">
            Known as the "State Festival" of Karnataka, Mysuru Dasara is a magnificent 10-day celebration 
            that transforms the city into a spectacle of lights, music, and cultural splendor. The grand 
            finale features the Jamboo Savari procession with caparisoned elephants carrying the golden howdah, 
            followed by thousands of spectators celebrating this royal tradition.
          </p>
          <Button
            onClick={() => navigate("/home/heritage")}
            className="royal-button"
          >
            Explore Heritage Sites
          </Button>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-4 text-center border-t border-border">
        <p className="text-muted-foreground font-body italic">
          Proudly presenting Mysuru's timeless legacy
        </p>
      </footer>
    </div>
  );
};

export default Culture;
