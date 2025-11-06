import { ArrowLeft, MapPin, Clock, Camera } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { AudioPlayer } from "@/components/AudioPlayer";
import heritageIcon from "@/assets/heritage-icon.jpg";

const Heritage = () => {
  const navigate = useNavigate();

  const landmarks = [
    {
      name: "Mysore Palace",
      location: "Sayyaji Rao Road, Mysuru",
      description:
        "Mysore Palace, also known as the Amba Vilas Palace, is one of India’s grandest royal residences and a symbol of the Wodeyar dynasty’s heritage and power. The current structure was completed in 1912 in an impressive Indo-Saracenic architectural style, blending elements of Hindu, Muslim, Rajput, and Gothic designs. The palace features ornate arches, domes, stained glass windows, intricately carved doors, and richly decorated halls such as the Diwan-e-Khas and Kalyana Mantapa. It houses beautiful paintings, royal artifacts, and gold-lined interiors that showcase the artistic and cultural patronage of the Mysore kings. Today, the Mysore Palace is a major cultural landmark, especially famous for its golden illumination during Dasara, attracting millions of visitors from around the world.",
      highlights: [
        "Durbar Hall with stained glass ceiling",
        "Golden Throne displayed during Dasara",
        "Intricate rosewood doors with ivory inlay",
        "Marriage Pavilion with glazed tiles",
      ],
      timings: "10:00 AM - 5:30 PM",
      bestTime: "Evening illumination on Sundays and holidays",
      audioUrl: "/audio/mysore-palace.mp3", // Assuming audio is in public/audio
    },
    {
      name: "Chamundi Hills",
      location: "Chamundi Hill Road, Mysuru",
      description:
        "Chamundi Hills is a sacred hill located on the outskirts of Mysore, deeply connected to the city’s spiritual and cultural identity. At the top stands the Chamundeshwari Temple, dedicated to Goddess Chamundeshwari, the patron deity of Mysore, who is believed to have slain the demon Mahishasura, symbolizing the victory of good over evil. A large Nandi statue, carved out of a single stone, sits midway up the hill and is one of the major attractions for visitors and pilgrims. The hill offers a panoramic view of Mysore city, including landmarks like the Mysore Palace. Chamundi Hills remains a popular spot for worship, nature visits, and cultural significance, especially during festivals like Dasara.",
      highlights: [
        "Chamundeshwari Temple with golden vimana",
        "Monolithic Nandi statue",
        "Panoramic views of Mysuru city",
        "1,000 steps pilgrimage path",
      ],
      timings: "7:00 AM - 9:00 PM",
      bestTime: "Early morning or sunset for best views",
      audioUrl: "/audio/chamundi-hills.mp3", // Assuming audio is in public/audio
    },
    {
      name: "Brindavan Gardens",
      location: "Krishna Raja Sagara, Srirangapatna",
      description:
        "Brindavan Gardens, located near the Krishna Raja Sagara (KRS) Dam, is one of the most famous tourist attractions of Mysore. Built during the reign of Krishnaraja Wodeyar IV and completed under the guidance of Sir Mirza Ismail, the gardens are known for their symmetric layout, terraced lawns, flower beds, and ornamental trees. A major highlight of the gardens is the musical fountain show, where water dances in rhythm to lights and music, creating a beautiful night-time spectacle. The gardens also feature boating facilities, illuminated walkways, and scenic water channels. Brindavan Gardens remains a popular spot for families and tourists, symbolizing Mysore’s elegance, planning, and love for nature and leisure.",
      highlights: [
        "Musical fountain show with lights",
        "Symmetrical terrace gardens",
        "Boating facilities",
        "Seasonal flower displays",
      ],
      timings: "6:00 AM - 9:00 PM",
      bestTime: "Evening for the musical fountain show",
      audioUrl: "/audio/brindavan-gardens.mp3", // Assuming audio is in public/audio
    },
    {
      name: "St. Philomena's Cathedral",
      location: "Cathedral Church Road, Mysuru",
      description:
        "St. Philomena’s Cathedral in Mysore is one of the largest and most beautiful churches in India, known for its striking Neo-Gothic architectural style. Built in 1956, it was inspired by the Cologne Cathedral in Germany and features tall pointed spires, stained glass windows, and high vaulted ceilings. The stained glass panels depict key events in the life of Jesus Christ, adding color and spiritual depth to the interiors. The church is dedicated to St. Philomena, a young saint and martyr, and houses a relic of hers in the crypt below the altar. Today, the cathedral stands as a prominent landmark of Mysore, symbolizing the city’s religious diversity, history, and architectural heritage.",
      highlights: [
        "Neo-Gothic architecture with twin spires",
        "Magnificent stained glass windows",
        "Underground crypt",
        "Marble flooring and majestic altar",
      ],
      timings: "5:00 AM - 6:00 PM",
      bestTime: "Morning mass or during Christmas celebrations",
      audioUrl: "/audio/st-philomenas-cathedral.mp3", // Assuming audio is in public/audio
    },
    {
      name: "Jaganmohan Palace",
      location: "Mysore Palace Road, Mysuru",
      description:
        "Jaganmohan Palace is one of the oldest palaces in Mysore, built in 1861 by the Wodeyar kings and originally used as a residence and royal audience hall. It served as the royal palace when the current Mysore Palace was being reconstructed after the old one was damaged in a fire. The palace is now home to the Jayachamarajendra Art Gallery, which houses one of the finest collections of South Indian traditional paintings, including famous Mysore and Raja Ravi Varma paintings. The interiors of the palace feature beautiful wooden doors, murals, and intricate carvings that depict scenes from epics and royal history. Today, Jaganmohan Palace stands as an important cultural center, showcasing Mysore’s artistic legacy and royal heritage.",
      highlights: [
        "Royal family artifacts collection",
        "Traditional Mysore paintings",
        "Musical instruments display",
        "Ancient manuscripts and sculptures",
      ],
      timings: "8:30 AM - 5:30 PM",
      bestTime: "Morning hours for peaceful exploration",
      audioUrl: "/audio/jaganmohan-palace.mp3", // Assuming audio is in public/audio
    },
    {
      name: "Lalitha Mahal Palace",
      location: "Nazarbad, Mysuru",
      description:
        "Lalitha Mahal Palace is a grand white palace located near the foothills of Chamundi Hills in Mysore, built in 1921 by the Wodeyar king Krishnaraja Wodeyar IV. It was originally constructed to host the Viceroy of India, and its architecture reflects a majestic European style, particularly influenced by Italian and English Renaissance designs. The palace features large domes, tall columns, stained glass windows, marble staircases, and spacious banquet halls, giving it a luxurious and royal appearance. It later became a heritage hotel, allowing visitors to experience the elegance and hospitality of Mysore’s royal era. Today, the Lalitha Mahal Palace stands as a symbol of Mysore’s regal charm and architectural grandeur.",
      highlights: [
        "Italian Renaissance architecture",
        "Belgian glass dome",
        "Royal banquet hall",
        "Sprawling manicured lawns",
      ],
      timings: "Open for hotel guests and visitors",
      bestTime: "Afternoon tea for non-staying guests",
      audioUrl: "/audio/lalitha-mahal-palace.mp3", // Assuming audio is in public/audio
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
            onClick={() => navigate("/")}
            className="hover:bg-primary/10"
          >
            <ArrowLeft className="w-5 h-5" />
          </Button>
          <div>
            <h1 className="text-2xl md:text-3xl font-display font-bold text-foreground">
              Heritage
            </h1>
            <p className="text-sm text-muted-foreground font-body">
              Discover architectural marvels and landmarks
            </p>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative h-80 md:h-96 overflow-hidden">
        <img
          src={heritageIcon}
          alt="Mysuru Heritage"
          className="w-full h-full object-cover opacity-75"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-accent/80 via-accent/60 to-background" />
        
        <div className="absolute inset-0 flex items-center justify-center text-center px-4 animate-fade-in">
          <div>
            <h2 className="text-4xl md:text-6xl font-display font-bold text-black mb-4">
              Architectural Marvels
            </h2>
            <p className="text-xl md:text-2xl text-black/90 font-body italic max-w-3xl mx-auto">
              Monuments that stand as testaments to royal grandeur and artistic brilliance
            </p>
          </div>
        </div>
      </section>

      {/* Introduction */}
      <section className="py-12 px-4 max-w-4xl mx-auto text-center">
        <p className="text-lg text-muted-foreground font-body leading-relaxed">
          Mysuru's heritage sites are living museums, each telling stories of dynasties, devotion, 
          and architectural excellence. From royal palaces to sacred temples, these landmarks preserve 
          the city's glorious past for generations to come.
        </p>
      </section>

      {/* Landmarks */}
      <section className="py-12 px-4 max-w-6xl mx-auto space-y-12">
        {landmarks.map((landmark, index) => (
          <div
            key={index}
            className="royal-card animate-fade-in"
            style={{ animationDelay: `${index * 100}ms` }}
          >
            <div className="grid md:grid-cols-3 gap-6 p-6 bg-card">
              {/* Left Column - Main Info */}
              <div className="md:col-span-2 space-y-4">
                <div>
                  <h3 className="text-3xl font-display font-bold text-foreground mb-2">
                    {landmark.name}
                  </h3>
                  <div className="flex items-center gap-2 text-muted-foreground">
                    <MapPin className="w-4 h-4" />
                    <span className="text-sm font-body">{landmark.location}</span>
                  </div>
                </div>

                <p className="text-muted-foreground font-body leading-relaxed">
                  {landmark.description}
                </p>

                {/* Highlights */}
                <div>
                  <h4 className="text-lg font-display font-semibold text-foreground mb-3">
                    Key Highlights
                  </h4>
                  <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                    {landmark.highlights.map((highlight, idx) => (
                      <li
                        key={idx}
                        className="flex items-start gap-2 text-muted-foreground font-body text-sm"
                      >
                        <span className="text-primary mt-1">•</span>
                        <span>{highlight}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Right Column - Visit Info */}
              <div className="space-y-4">
                <div className="bg-gradient-to-br from-primary/10 to-secondary/10 p-4 rounded-lg">
                  <div className="flex items-start gap-3 mb-3">
                    <Clock className="w-5 h-5 text-primary mt-1" />
                    <div>
                      <h5 className="font-semibold text-foreground mb-1">Timings</h5>
                      <p className="text-sm text-muted-foreground font-body">
                        {landmark.timings}
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-3">
                    <Camera className="w-5 h-5 text-primary mt-1" />
                    <div>
                      <h5 className="font-semibold text-foreground mb-1">Best Time</h5>
                      <p className="text-sm text-muted-foreground font-body">
                        {landmark.bestTime}
                      </p>
                    </div>
                  </div>
                </div>

                <AudioPlayer title={landmark.name} />
              </div>
            </div>
          </div>
        ))}
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 bg-gradient-to-br from-accent/10 to-primary/10">
        <div className="max-w-3xl mx-auto text-center">
          <h3 className="text-3xl font-display font-bold text-foreground mb-4">
            Plan Your Heritage Tour
          </h3>
          <p className="text-muted-foreground font-body mb-8">
            Explore the magnificent landmarks that define Mysuru's royal legacy. Each monument 
            offers a unique glimpse into the city's rich history and architectural brilliance.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              onClick={() => navigate("/home/history")}
              className="royal-button"
            >
              Learn the History
            </Button>
            <Button
              onClick={() => navigate("/home/culture")}
              variant="outline"
              className="border-primary text-primary hover:bg-primary/10"
            >
              Experience Culture
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

export default Heritage;
