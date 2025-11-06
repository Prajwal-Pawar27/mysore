import { useState, useRef, useEffect } from "react";
import { Play, Pause, Volume2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Slider } from "@/components/ui/slider";

interface AudioPlayerProps {
  audioUrl?: string;
  title: string;
  id: string; // Unique ID for this audio player instance
  onPlay: (id: string) => void; // Callback when this player starts playing
  currentPlayingId: string | null; // ID of the audio currently playing across all players
}

export const AudioPlayer = ({ audioUrl, title, id, onPlay, currentPlayingId }: AudioPlayerProps) => {
  console.log("AudioPlayer: Initial render with audioUrl", audioUrl);
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const audioRef = useRef<HTMLAudioElement>(null);

  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) {
      console.log("AudioPlayer useEffect: audioRef.current is null");
      return;
    }

    console.log("AudioPlayer useEffect: Setting audio.src to", audioUrl);
    // Ensure the audio source is set and reloaded when audioUrl changes
    audio.src = audioUrl || "";
    audio.load(); // Reload the audio element to apply new src

    // Reset state for new audio
    setIsPlaying(false);
    setCurrentTime(0);
    setDuration(0);

    const handleLoadedMetadata = () => {
      console.log("AudioPlayer: loadedmetadata event fired. Duration:", audio.duration);
      setDuration(audio.duration);
    };

    const handleTimeUpdate = () => {
      // console.log("AudioPlayer: timeupdate event fired. Current time:", audio.currentTime);
      setCurrentTime(audio.currentTime);
    };

    const handleEnded = () => {
      console.log("AudioPlayer: ended event fired.");
      setIsPlaying(false);
      setCurrentTime(0);
    };

    audio.addEventListener("loadedmetadata", handleLoadedMetadata);
    audio.addEventListener("timeupdate", handleTimeUpdate);
    audio.addEventListener("ended", handleEnded);

    return () => {
      console.log("AudioPlayer useEffect: Cleaning up event listeners for", audioUrl);
      audio.removeEventListener("loadedmetadata", handleLoadedMetadata);
      audio.removeEventListener("timeupdate", handleTimeUpdate);
      audio.removeEventListener("ended", handleEnded);
    };
  }, [audioUrl]); // Rerun effect when audioUrl changes

  // Effect to pause if another audio player starts playing
  useEffect(() => {
    const audio = audioRef.current;
    if (audio && isPlaying && currentPlayingId !== id) {
      console.log(`AudioPlayer ${id}: Pausing because another audio (${currentPlayingId}) started playing.`);
      audio.pause();
      setIsPlaying(false);
    }
  }, [currentPlayingId]);

  const togglePlay = () => {
    const audio = audioRef.current;
    if (!audio) {
      console.log("AudioPlayer togglePlay: audioRef.current is null");
      return;
    }

    console.log("AudioPlayer togglePlay: isPlaying before toggle:", isPlaying);
    if (isPlaying) {
      audio.pause();
      console.log("AudioPlayer togglePlay: Audio paused.");
      setIsPlaying(false); // Ensure state is consistent
      onPlay(null); // Notify parent that no audio is playing from this player
    } else {
      onPlay(id); // Notify parent that THIS audio is starting to play
      try {
        audio.play();
        console.log("AudioPlayer togglePlay: Attempting to play audio.");
        setIsPlaying(true); // Ensure state is consistent
      } catch (error) {
        console.error("Audio playback blocked:", error);
        onPlay(null); // Notify parent of failure
      }
    }
  };

  const handleSliderChange = (value: number[]) => {
    const audio = audioRef.current;
    if (!audio) return;
    
    const newTime = value[0];
    audio.currentTime = newTime;
    setCurrentTime(newTime);
  };

  const formatTime = (time: number) => {
    if (!time || isNaN(time)) return "0:00";
    const minutes = Math.floor(time / 60);
    const seconds = Math.floor(time % 60);
    return `${minutes}:${seconds.toString().padStart(2, "0")}`;
  };

  return (
    <div className="bg-gradient-to-br from-primary/10 to-secondary/10 p-4 rounded-lg border border-primary/20 animate-fade-in">
      <audio ref={audioRef} key={audioUrl} />

      
      <div className="flex items-center gap-3 mb-3">
        <Button
          onClick={togglePlay}
          size="icon"
          className="relative w-12 h-12 rounded-full bg-gradient-to-br from-primary to-secondary hover:from-primary/90 hover:to-secondary/90 shadow-lg group"
        >
          {isPlaying ? (
            <Pause className="w-5 h-5 text-cream" />
          ) : (
            <Play className="w-5 h-5 text-cream ml-0.5" />
          )}
          
          {isPlaying && (
            <span className="absolute inset-0 rounded-full bg-primary/20 animate-ping" />
          )}
        </Button>

        <div className="flex-1">
          <div className="flex items-center gap-2 mb-1">
            <Volume2 className="w-4 h-4 text-primary" />
            <p className="text-sm font-semibold text-foreground">Listen to this</p>
          </div>
          <p className="text-xs text-muted-foreground font-body line-clamp-1">
            {title}
          </p>
        </div>
      </div>

      {/* Progress Bar */}
      <div className="space-y-2">
        <Slider
          value={[currentTime]}
          max={duration || 100}
          step={0.1}
          onValueChange={handleSliderChange}
          className="cursor-pointer"
        />
        
        <div className="flex justify-between text-xs text-muted-foreground font-body">
          <span>{formatTime(currentTime)}</span>
          <span>{formatTime(duration)}</span>
        </div>
      </div>

      {/* Waveform Animation */}
      {isPlaying && (
        <div className="flex items-center justify-center gap-1 mt-3 h-8">
          {[...Array(12)].map((_, i) => (
            <div
              key={i}
              className="w-1 bg-gradient-to-t from-primary to-secondary rounded-full animate-pulse"
              style={{
                height: `${20 + Math.random() * 80}%`,
                animationDelay: `${i * 0.1}s`,
                animationDuration: `${0.8 + Math.random() * 0.4}s`,
              }}
            />
          ))}
        </div>
      )}
    </div>
  );
};
