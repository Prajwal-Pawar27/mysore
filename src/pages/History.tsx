import { ArrowLeft, Crown, Castle, Book, ScrollText } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { AudioPlayer } from "@/components/AudioPlayer";
import historyIcon from "@/assets/history1.jpg";

const History = () => {
  const navigate = useNavigate();

  const timeline = [
    {
      era: "Ancient Origins",
      period: "2nd Century - 12th Century",
      title: "The Early Kingdoms",
      description:
        "Mysore finds its roots in the ancient Mahishamandala kingdom. The region was ruled by various dynasties including the Gangas, Hoysalas, and Vijayanagara Empire, each contributing to its rich cultural tapestry.",
      icon: Castle,
    },
    {
      era: "The Wadiyar Dynasty",
      period: "1399 - 1947",
      title: "Rise of Royal Mysore",
      description:
        "The Wadiyar dynasty established Mysore as a princely state in 1399. Under their patronage, the city flourished as a center of art, culture, and learning. The construction of the magnificent Mysore Palace began during their reign.",
      icon: Crown,
    },
    {
      era: "Tipu Sultan's Era",
      period: "1782 - 1799",
      title: "The Tiger of Mysore",
      description:
        "Tipu Sultan, known as the Tiger of Mysore, briefly ruled the kingdom. His resistance against British colonialism and innovative military strategies made him a legendary figure in Indian history.",
      icon: Book,
    },
    {
      era: "British Influence",
      period: "1799 - 1947",
      title: "Colonial Period",
      description:
        "After Tipu Sultan's defeat, the British restored the Wadiyar dynasty under their supervision. This period saw modernization of the city with public infrastructure, education, and administrative reforms.",
      icon: Castle,
    },
    {
      era: "Modern Mysore",
      period: "1947 - Present",
      title: "Heritage City",
      description:
        "Post-independence, Mysore joined the Indian Union. Today, it stands as a testament to India's rich heritage, preserving its royal legacy while embracing progress as a major tourist and cultural destination.",
      icon: Crown,
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
              History
            </h1>
            <p className="text-sm text-muted-foreground font-body">
              Journey through centuries of royal legacy
            </p>
          </div>
        </div>
      </header>

      {/* Hero Banner */}
      <section className="relative h-64 md:h-80 overflow-hidden">
        <div className="absolute inset-0">
          <img
            src={historyIcon}
            alt="Mysuru History"
            className="w-full h-full object-cover opacity-75"
          />
          
        </div>
        
        <div className="relative z-10 text-center px-4 animate-fade-in">
          <ScrollText className="w-16 h-16 md:w-20 md:h-20 mx-auto mb-4 text-black" />
          <h2 className="text-3xl md:text-5xl font-display font-bold text-black mb-2">
            Mysuru Through the Ages
          </h2>
          <p className="text-lg md:text-xl text-black/90 font-body italic max-w-2xl mx-auto">
            From ancient kingdoms to modern heritage - a chronicle of royal grandeur
          </p>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-16 px-4 max-w-5xl mx-auto">
        <div className="space-y-12">
          {timeline.map((item, index) => {
            const Icon = item.icon;
            const isEven = index % 2 === 0;

            return (
              <div
                key={index}
                className={`flex flex-col md:flex-row gap-8 items-start animate-fade-in ${
                  isEven ? "md:flex-row" : "md:flex-row-reverse"
                }`}
                style={{ animationDelay: `${index * 100}ms` }}
              >
                {/* Icon Circle */}
                <div className="flex-shrink-0 relative">
                  <div className="w-20 h-20 rounded-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center shadow-lg">
                    <Icon className="w-10 h-10 text-cream" />
                  </div>
                  {index < timeline.length - 1 && (
                    <div className="hidden md:block absolute top-20 left-1/2 -translate-x-1/2 w-0.5 h-12 bg-gradient-to-b from-primary/50 to-transparent" />
                  )}
                </div>

                {/* Content Card */}
                <div className="flex-1 royal-card">
                  <div className="p-6 bg-card space-y-4">
                    <div className="flex items-start justify-between mb-3">
                      <div>
                        <h3 className="text-2xl font-display font-semibold text-foreground mb-1">
                          {item.title}
                        </h3>
                        <p className="text-sm font-semibold text-primary uppercase tracking-wide">
                          {item.era}
                        </p>
                      </div>
                      <span className="text-sm text-muted-foreground font-body italic">
                        {item.period}
                      </span>
                    </div>
                    <p className="text-muted-foreground font-body leading-relaxed">
                      {item.description}
                    </p>
                    <AudioPlayer title={item.title} />
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 bg-gradient-to-br from-primary/10 to-secondary/10">
        <div className="max-w-3xl mx-auto text-center">
          <h3 className="text-3xl font-display font-bold text-foreground mb-4">
            Explore More of Mysuru
          </h3>
          <p className="text-muted-foreground font-body mb-8">
            Discover the vibrant culture and magnificent heritage that shaped this royal city
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              onClick={() => navigate("/home/culture")}
              className="royal-button"
            >
              Explore Culture
            </Button>
            <Button
              onClick={() => navigate("/home/heritage")}
              variant="outline"
              className="border-primary text-primary hover:bg-primary/10"
            >
              Discover Heritage
            </Button>
          </div>
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

export default History;
