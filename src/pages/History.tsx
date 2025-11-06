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
        "The early Kingdom of Mysore began as a small jagirs (feudal land) under the rule of the Wodeyar dynasty in the late 14th century, originally serving as vassals to the Vijayanagara Empire. The capital was initially at Mysuru, and the Wodeyars gradually expanded their territory and administrative influence as Vijayanagara declined. The kingdom was known for its patronage of art, music, and temple architecture, helping Mysore develop a rich cultural identity. Later, under the rise of Hyder Ali and Tipu Sultan, Mysore transformed into a strong and modernized military state that resisted British expansion in South India. After Tipu Sultan’s fall in 1799, the British restored the Wodeyars, turning Mysore into a princely state under British supervision.",
      icon: Castle,
      audioUrl: "/audio/early-kingdoms.mp3", // Assuming audio is in public/audio
    },
    {
      era: "The Wodeyar Dynasty",
      period: "1399 - 1947",
      title: "Rise of Royal Mysore",
      description:
        "The rise of Royal Mysore began with the Wodeyar dynasty, who established their authority around Mysuru in the late 14th century and gradually expanded their territories. As the Vijayanagara Empire weakened in the 16th century, the Wodeyars asserted full independence and strengthened their administration and economy. The kingdom flourished culturally, supporting music, dance, literature, and temple architecture, which shaped Mysore’s identity as a center of art and tradition. In the 18th century, powerful leaders like Hyder Ali and Tipu Sultan modernized the state’s army and introduced economic and technological reforms, making Mysore one of the strongest regional powers in South India. After Tipu Sultan’s fall in 1799, the Wodeyars were reinstated under British influence, leading Mysore to develop into a well-governed princely state known for progress and public welfare.",
      icon: Crown,
      audioUrl: "/audio/rise-of-royal-mysore.mp3", // Assuming audio is in public/audio
    },
    {
      era: "Tipu Sultan's Era",
      period: "1782 - 1799",
      title: "The Tiger of Mysore",
      description:
        "Tipu Sultan’s era (1782–1799) marked a period of strong resistance against British expansion and rapid modernization within the Kingdom of Mysore. He continued the reforms begun by his father, Hyder Ali, by strengthening the army with European-style training, advanced weaponry, and even the early use of rocket artillery. Tipu introduced new revenue systems, encouraged agriculture and trade, and developed state-run industries to boost the economy. He also maintained alliances with France and other Indian powers to resist British influence, leading to several Anglo-Mysore Wars. However, after prolonged conflict, Tipu Sultan was killed in the Fourth Anglo-Mysore War (1799), and his death marked the end of Mysore’s independent military power.",
      icon: Book,
      audioUrl: "/audio/tiger-of-mysore.mp3", // Assuming audio is in public/audio
    },
    {
      era: "British Influence",
      period: "1799 - 1947",
      title: "Colonial Period",
      description:
        "During the colonial period, after Tipu Sultan’s defeat in 1799, the British re-established the Wodeyar dynasty but kept Mysore under their indirect control, making it a princely state within the British Empire. The British supervised administration and foreign affairs, while the Wodeyars handled local governance, leading to a mix of traditional monarchy and colonial oversight. Under British influence, Mysore saw the development of modern infrastructure such as railways, public education, postal systems, and administrative reforms. The Wodeyar rulers, especially Krishnaraja Wodeyar IV, promoted industrialization, public welfare, and the arts, earning Mysore the reputation of a “Model State.” However, the British retained ultimate authority, and Mysore’s autonomy was limited until India’s independence in 1947.",
      icon: Castle,
      audioUrl: "/audio/colonial-period.mp3", // Assuming audio is in public/audio
    },
    {
      era: "Modern Mysore",
      period: "1947 - Present",
      title: "Heritage City",
      description:
        "After India gained independence in 1947, Mysore joined the Indian Union, and the Wodeyar king, Jayachamarajendra Wodeyar, served as the first Rajpramukh (state governor) of the newly formed Mysore State. In 1956, with the reorganization of states based on language, the territory expanded and Mysore State came to include Kannada-speaking regions from neighboring areas. Later, in 1973, the state was officially renamed Karnataka to represent its wider cultural and linguistic identity. Modern Mysore is known for its rich heritage, tourism, educational institutions, the IT industry, and cultural festivals like Dasara, which highlight its royal legacy. The city continues to blend tradition with modern development, maintaining its identity as a clean, peaceful, and culturally vibrant region.",
      icon: Crown,
      audioUrl: "/audio/heritage-city.mp3", // Assuming audio is in public/audio
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
