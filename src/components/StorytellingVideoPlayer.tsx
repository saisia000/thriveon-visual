import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';

interface VideoScene {
  id: string;
  duration: number;
  content: {
    emoji: string;
    text: string;
  };
}

const scenes: VideoScene[] = [
  {
    id: 'scene-1',
    duration: 5000,
    content: {
      emoji: '🗓️ 💊 📱',
      text: 'Caregiving starts with the heart. But soon, it becomes about the schedule... the medication... the logistics. It becomes a job.'
    }
  },
  {
    id: 'scene-2',
    duration: 6000,
    content: {
      emoji: '🙍  ...  🙍‍♂️',
      text: 'You become a project manager for the person you love most. And in the silence between tasks, a new burden grows... the emotional distance.'
    }
  },
  {
    id: 'scene-3',
    duration: 6000,
    content: {
      emoji: 'chaotic... ➡️ 🛡️ ➡️ organized',
      text: "What if you had help? ThriveOn's Logistics Agent tackles the burden you can see, giving you back your time and your mental space."
    }
  },
  {
    id: 'scene-4',
    duration: 7000,
    content: {
      emoji: '🖼️ ➡️ ❤️ ➡️ 💬',
      text: 'More importantly, our Connection Agent uses that new space to spark the conversations you\'ve been missing, turning memories into new moments.'
    }
  }
];

export const StorytellingVideoPlayer = () => {
  const [currentSceneIndex, setCurrentSceneIndex] = useState(-1);
  const [isPlaying, setIsPlaying] = useState(false);

  useEffect(() => {
    console.log('useEffect triggered, currentSceneIndex:', currentSceneIndex);
    if (currentSceneIndex >= 0 && currentSceneIndex < scenes.length) {
      console.log(`Starting scene ${currentSceneIndex}, duration: ${scenes[currentSceneIndex].duration}ms`);
      const timeout = setTimeout(() => {
        console.log(`Scene ${currentSceneIndex} finished, moving to next scene`);
        setCurrentSceneIndex((prev) => prev + 1);
      }, scenes[currentSceneIndex].duration);

      return () => clearTimeout(timeout);
    } else if (currentSceneIndex >= scenes.length) {
      console.log('All scenes finished, showing final CTA');
      // Video finished, show final CTA
      setCurrentSceneIndex(scenes.length);
    }
  }, [currentSceneIndex]);

  const handlePlayClick = () => {
    console.log('Play button clicked!');
    setIsPlaying(true);
    setCurrentSceneIndex(0);
    console.log('Video should start playing, currentSceneIndex:', 0);
  };

  const scrollToSignup = () => {
    document.getElementById('signup-form-container')?.scrollIntoView({
      behavior: 'smooth'
    });
  };

  return (
    <div className="w-full bg-gray-900 rounded-lg overflow-hidden" style={{ aspectRatio: '16/9' }}>
      {/* Show play button when not playing */}
      {!isPlaying && (
        <div className="w-full h-full flex items-center justify-center bg-gray-800">
          <button 
            onClick={handlePlayClick}
            className="group flex items-center justify-center w-24 h-24 bg-white/20 hover:bg-white/30 rounded-full transition-colors duration-300 cursor-pointer"
          >
            <div className="w-0 h-0 border-l-[24px] border-l-white border-t-[14px] border-t-transparent border-b-[14px] border-b-transparent ml-2"></div>
          </button>
        </div>
      )}

      {/* Show current scene when playing */}
      {isPlaying && currentSceneIndex >= 0 && currentSceneIndex < scenes.length && (
        <div className="w-full h-full flex flex-col items-center justify-center bg-gray-900 text-white p-8">
          <div className="text-6xl mb-6 animate-fade-in">
            {scenes[currentSceneIndex].content.emoji}
          </div>
          <p className="text-xl md:text-2xl font-semibold text-center max-w-4xl leading-relaxed animate-fade-in">
            {scenes[currentSceneIndex].content.text}
          </p>
        </div>
      )}

      {/* Final CTA scene */}
      {isPlaying && currentSceneIndex >= scenes.length && (
        <div className="w-full h-full flex items-center justify-center bg-primary text-white">
          <div className="text-center">
            <h3 className="text-3xl md:text-4xl font-bold mb-8">
              Stop managing. Start connecting.
            </h3>
            <Button 
              variant="demo"
              onClick={scrollToSignup}
              className="bg-white text-primary hover:bg-gray-100"
            >
              Get Early Access
            </Button>
          </div>
        </div>
      )}
    </div>
  );
};