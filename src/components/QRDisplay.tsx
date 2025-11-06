import React from 'react';
import QRCode from 'react-qr-code';
import { Link } from 'react-router-dom';
import { ArrowLeft, Scan } from 'lucide-react';
import { Button } from '@/components/ui/button';
import coverImage from '@/assets/cover.png';

interface QRDisplayProps {
  url?: string;
}

const QRDisplay: React.FC<QRDisplayProps> = ({ url = "/home" }) => {
  return (
    <div className="min-h-screen bg-background flex flex-col items-center justify-center p-4 relative overflow-hidden">
      <div
        className="absolute inset-0 w-full h-full bg-cover bg-center opacity-75"
        style={{ backgroundImage: `url(${coverImage})` }}
      />
      <header className="absolute top-0 left-0 right-0 z-40 bg-card/95 backdrop-blur-sm border-b border-border">
        <div className="max-w-7xl mx-auto px-4 py-4 flex items-center gap-4">
          <Button
            variant="ghost"
            size="icon"
            asChild
            className="hover:bg-primary/10"
          >
            <Link to="/">
              <ArrowLeft className="w-5 h-5" />
            </Link>
          </Button>
          <div>
            <h1 className="text-2xl md:text-3xl font-display font-bold text-foreground">
              Discover Mysuru
            </h1>
            <p className="text-sm text-muted-foreground font-body">
              Scan to explore culture, heritage, and history
            </p>
          </div>
        </div>
      </header>

      <div className="relative z-10 bg-white p-8 rounded-lg shadow-xl flex flex-col items-center max-w-md w-full animate-fade-in pt-20">
        <Scan className="w-16 h-16 text-primary mb-6" />
        <h2 className="text-3xl font-display font-bold text-foreground mb-4">
          Scan to Unveil
        </h2>
        <p className="text-muted-foreground text-center mb-6">
          Scan the QR code with your phone camera to access detailed information about Mysuru's rich cultural heritage, architectural marvels, and historical significance with audio guides.
        </p>
        <div className="p-4 bg-white rounded-md shadow-inner mb-6 border border-gray-200">
          <QRCode value={url} size={256} level="H" />
        </div>
        <p className="text-sm text-muted-foreground font-body text-center">
          This QR code leads to the main content of our website.
        </p>
      </div>
    </div>
  );
};

export default QRDisplay;
