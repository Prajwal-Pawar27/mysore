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
        "The crown jewel of Mysuru, this Indo-Saracenic architectural masterpiece serves as the official residence of the Wadiyar dynasty. Built in 1912, the palace features ornate domes, arches, and colonnades, and is illuminated by nearly 100,000 lights during special occasions.",
      highlights: [
        "Durbar Hall with stained glass ceiling",
        "Golden Throne displayed during Dasara",
        "Intricate rosewood doors with ivory inlay",
        "Marriage Pavilion with glazed tiles",
      ],
      timings: "10:00 AM - 5:30 PM",
      bestTime: "Evening illumination on Sundays and holidays",
    },
    {
      name: "Chamundi Hills",
      location: "Chamundi Hill Road, Mysuru",
      description:
        "Rising 1,000 meters above sea level, Chamundi Hills houses the ancient Chamundeshwari Temple dedicated to Goddess Chamundi. The climb of 1,000 steps passes by a magnificent 5-meter tall Nandi bull carved from a single granite rock in 1659.",
      highlights: [
        "Chamundeshwari Temple with golden vimana",
        "Monolithic Nandi statue",
        "Panoramic views of Mysuru city",
        "1,000 steps pilgrimage path",
      ],
      timings: "7:00 AM - 9:00 PM",
      bestTime: "Early morning or sunset for best views",
    },
    {
      name: "Brindavan Gardens",
      location: "Krishna Raja Sagara, Srirangapatna",
      description:
        "A spectacular terraced garden built in 1927, featuring symmetrical design, fountains, and illuminated musical shows. Located below the Krishna Raja Sagara Dam, it's one of the finest examples of Mughal-style gardens in India.",
      highlights: [
        "Musical fountain show with lights",
        "Symmetrical terrace gardens",
        "Boating facilities",
        "Seasonal flower displays",
      ],
      timings: "6:00 AM - 9:00 PM",
      bestTime: "Evening for the musical fountain show",
    },
    {
      name: "St. Philomena's Cathedral",
      location: "Cathedral Church Road, Mysuru",
      description:
        "One of the tallest churches in Asia, this Neo-Gothic architectural marvel was built in 1933. Inspired by Cologne Cathedral in Germany, it features stunning stained glass windows depicting biblical scenes, twin spires reaching 175 feet, and a crypt containing relics of St. Philomena.",
      highlights: [
        "Neo-Gothic architecture with twin spires",
        "Magnificent stained glass windows",
        "Underground crypt",
        "Marble flooring and majestic altar",
      ],
      timings: "5:00 AM - 6:00 PM",
      bestTime: "Morning mass or during Christmas celebrations",
    },
    {
      name: "Jaganmohan Palace",
      location: "Mysore Palace Road, Mysuru",
      description:
        "Built in 1861, this palace served as an alternate residence for the royal family and now houses the Sri Jayachamarajendra Art Gallery. It contains one of the finest collections of artifacts and paintings in South India.",
      highlights: [
        "Royal family artifacts collection",
        "Traditional Mysore paintings",
        "Musical instruments display",
        "Ancient manuscripts and sculptures",
      ],
      timings: "8:30 AM - 5:30 PM",
      bestTime: "Morning hours for peaceful exploration",
    },
    {
      name: "Lalitha Mahal Palace",
      location: "Nazarbad, Mysuru",
      description:
        "Built in 1921 for the exclusive stay of the Viceroy of India, this pure white palace resembles London's St. Paul's Cathedral. Now converted into a heritage hotel, it represents Italian Renaissance and Victorian architecture.",
      highlights: [
        "Italian Renaissance architecture",
        "Belgian glass dome",
        "Royal banquet hall",
        "Sprawling manicured lawns",
      ],
      timings: "Open for hotel guests and visitors",
      bestTime: "Afternoon tea for non-staying guests",
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
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-accent/80 via-accent/60 to-background" />
        
        <div className="absolute inset-0 flex items-center justify-center text-center px-4 animate-fade-in">
          <div>
            <h2 className="text-4xl md:text-6xl font-display font-bold text-cream mb-4">
              Architectural Marvels
            </h2>
            <p className="text-xl md:text-2xl text-cream/90 font-body italic max-w-3xl mx-auto">
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
              onClick={() => navigate("/history")}
              className="royal-button"
            >
              Learn the History
            </Button>
            <Button
              onClick={() => navigate("/culture")}
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
