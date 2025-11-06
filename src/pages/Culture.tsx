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
          description: "The Veena is one of the oldest and most revered string instruments in Indian classical music, especially significant in the cultural heritage of Mysore. It consists of a long wooden body with strings stretched over a large resonating chamber, producing a deep and melodious sound. In the Mysore court, the Veena received great royal support, giving rise to the Mysore style of Veena playing, known for its smooth, lyrical, and graceful musical expression. Renowned Veena maestros like Veena Sheshanna, Doreswamy Iyengar, and others made Mysore an important center for Veena tradition. Even today, the Veena remains a symbol of classical elegance and devotion in South Indian music.",
          audioUrl: "/audio/veena.mp3", // Assuming audio is in public/audio
        },
        {
          name: "Yakshagana",
          description: "Yakshagana in Mysore has its own distinct identity within the broader Yakshagana tradition of Karnataka. While Yakshagana is most popular in coastal districts, Mysore developed a unique “Southern (Thenku Thittu)” style, known for softer dance movements, refined expressions, and graceful costumes. In Mysore, the performances often blend classical music influences, reflecting the royal court’s patronage of arts. The stories performed usually come from mythological and devotional themes, especially episodes from the Ramayana, Mahabharata, and Bhagavata Purana. Today, Yakshagana continues to be performed during temple festivals, cultural programs, and Dasara celebrations in Mysore, helping preserve and promote Karnataka’s vibrant storytelling heritage.",
          audioUrl: "/audio/yakshagana.mp3", // Assuming audio is in public/audio
        },
        {
          name: "Bharatanatyam",
          description: "Bharatanatyam in Mysore flourished under the patronage of the Wodeyar kings, who valued music and dance as important symbols of culture and refinement. The royal court encouraged renowned dancers and teachers, leading to the development of a distinct Mysore style known for its graceful movements, soft expressions, and emphasis on abhinaya (expressive storytelling). Compared to other styles, Mysore Bharatanatyam is less forceful and more fluid, focusing on elegance and emotional depth. Many court musicians and composers created devotional songs and dance pieces that became part of Bharatanatyam repertoire. Even today, Bharatanatyam performances are a highlight of Mysore Dasara and continue to be taught and practiced in cultural institutions across the city.",
          audioUrl: "/audio/bharatanatyam.mp3", // Assuming audio is in public/audio
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
          description: "Mysore Silk is one of the most famous and luxurious types of silk produced in India, known for its exceptional quality, smooth texture, and natural shine. Its history dates back to the Wodeyar reign, especially under Krishnaraja Wodeyar IV, who modernized silk production by establishing the Mysore Silk Factory in 1912 using Japanese reeling techniques. The silk is woven from pure mulberry silk, and the sarees are traditionally known for their rich colors and pure gold zari borders, symbolizing elegance and royalty. Mysore Silk sarees are highly valued for their durability and craftsmanship, making them popular bridal and festive wear across India. Even today, genuine Mysore Silk is certified with a silk mark, preserving the legacy of quality and tradition associated with Mysuru’s heritage.",
          audioUrl: "/audio/mysore-silk.mp3", // Assuming audio is in public/audio
        },
        {
          name: "Sandalwood Craft",
          description: "Sandalwood crafts are a significant part of Mysore’s artistic heritage, as the region is known for its abundant and high-quality Mysore sandalwood, valued for its fragrance and smooth texture. Skilled artisans traditionally carved idols of gods, decorative boxes, jewelry, combs, and intricate miniature sculptures from sandalwood, showcasing fine craftsmanship and detailed designs. During the Wodeyar rule, sandalwood art received royal support, which helped develop workshops and schools where the techniques were passed down through generations. The warm aroma and natural beauty of sandalwood make each craft piece both artistic and valuable. Even today, Mysore remains a major center for sandalwood carving, and these handicrafts continue to be popular souvenirs and cultural symbols of Karnataka.",
          audioUrl: "/audio/sandalwood-craft.mp3", // Assuming audio is in public/audio
        },
        {
          name: "Traditional Painting",
          description: "Traditional paintings of Mysore are best represented by the famous Mysore Paintings, which developed under the patronage of the Wodeyars. These paintings are known for their elegant lines, delicate detailing, soft colors, and graceful figures, often depicting Hindu gods, goddesses, and mythological scenes. A special feature of Mysore paintings is the use of pure gold leaf to highlight ornaments and divine elements, giving them a rich and radiant appearance. Natural dyes and fine brushes made from squirrel hair were traditionally used to achieve precision and subtle shading. Even today, Mysore paintings are preserved as an important classical art form, admired for their devotion, craftsmanship, and cultural refinement.",
          audioUrl: "/audio/traditional-painting.mp3", // Assuming audio is in public/audio
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
          description: "Mysore Pak is a famous traditional sweet from Mysore, believed to have been invented in the royal kitchen of the Wodeyar Palace during the reign of Krishnaraja Wodeyar. It is made using just a few simple ingredients—gram flour (besan), ghee, and sugar—but is known for its rich, melt-in-the-mouth texture and golden color. Originally, it was prepared by the royal chef Kakasura Madappa, who created it as a special dessert for the king, and it soon became a palace favorite. The sweet is known for its soft, porous, and fragrant texture, depending on the method of preparation and the amount of ghee used. Today, Mysore Pak is one of Karnataka’s most cherished sweets, widely enjoyed during festivals, celebrations, and special occasions.",
          audioUrl: "/audio/mysore-pak.mp3", // Assuming audio is in public/audio
        },
        {
          name: "Mysore Masala Dosa",
          description: "Mysore Masala Dosa is a popular South Indian dish that originated from the city of Mysore, known for its distinct flavor and preparation. Unlike the plain dosa, the Mysore variant is spread with a spicy red chutney made from red chilies, garlic, and coconut before being filled with the masala potato stuffing. The dosa is typically crispy on the outside and soft inside, often served with coconut chutney and sambar. Its taste is a balanced blend of spice, tanginess, and richness, making it unique compared to other types of dosas. Today, Mysore Masala Dosa is enjoyed across India and is considered one of the signature culinary specialties representing Mysore’s vibrant food culture.",
          audioUrl: "/audio/mysore-masala-dosa.mp3", // Assuming audio is in public/audio
        },
        {
          name: "Traditional Coffee",
          description: "Traditional coffee in Mysore is closely associated with the rich coffee culture of Karnataka, especially from the Malnad and Coorg regions where coffee plantations have flourished since the colonial era. Mysore coffee is typically prepared using filter coffee, made by slowly brewing finely ground coffee powder through a metal coffee filter. The decoction is then mixed with hot milk and a bit of sugar, creating a strong, aromatic, and smooth drink. It is traditionally served in a tumbler and davara (a small steel cup and bowl), which helps cool and mix the coffee to enhance its flavor. This style of coffee is deeply rooted in daily life and hospitality, making it a beloved part of Mysore’s culinary tradition.",
          audioUrl: "/audio/traditional-coffee.mp3", // Assuming audio is in public/audio
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
          description: "Mysore Dasara is the most celebrated festival of Mysore, known as the “Nadahabba” or State Festival of Karnataka. It is a ten-day celebration held during Navaratri, honoring the victory of Goddess Chamundeshwari over the demon Mahishasura, symbolizing the triumph of good over evil. The Mysore Palace is beautifully illuminated with thousands of golden lights, and the city comes alive with music, dance, cultural performances, exhibitions, and fairs. The grand highlight is the Jumboo Savari, a majestic procession on Vijayadashami, where the idol of Chamundeshwari is carried on a golden howdah atop a decorated elephant, accompanied by musicians and royal guards. Mysore Dasara represents the rich tradition, royalty, and cultural pride of Karnataka, attracting visitors from across India and the world.",
          audioUrl: "/audio/mysuru-dasara.mp3", // Assuming audio is in public/audio
        },
        {
          name: "Cultural Procession",
          description: "The cultural procession during Mysore Dasara, famously known as the Jumboo Savari, is one of the most important highlights of the festival. On Vijayadashami, the idol of Goddess Chamundeshwari is placed in a golden howdah and carried on a beautifully decorated elephant, traditionally led by royal guards and temple priests. The procession features folk dancers, musicians, decorated horses and camels, traditional bands, and cultural troupes representing the diverse heritage of Karnataka. It moves from the Mysore Palace to Bannimantap, where the Banni tree is worshipped as a symbol of victory. This grand cultural parade showcases the royal legacy, artistic traditions, and vibrant cultural spirit of Mysore, drawing thousands of spectators every year.",
          audioUrl: "/audio/cultural-procession.mp3", // Assuming audio is in public/audio
        },
        {
          name: "Palace Illumination",
          description: "Palace Illumination is one of the most breathtaking sights of Mysore, especially during the Dasara festival. The entire Mysore Palace is lit up with around 1 lakh (100,000) golden bulbs, creating a dazzling and majestic glow that highlights its architectural beauty. The illumination takes place every evening during Dasara, attracting thousands of visitors who gather to witness the stunning spectacle. The palace shines like a royal jewel against the night sky, symbolizing Mysore’s rich heritage, royal tradition, and cultural pride. This grand lighting display has become a signature representation of the city’s identity and charm.",
          audioUrl: "/audio/palace-illumination.mp3", // Assuming audio is in public/audio
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
