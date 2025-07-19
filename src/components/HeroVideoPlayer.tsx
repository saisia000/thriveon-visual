import { Button } from '@/components/ui/button';

export const HeroVideoPlayer = () => {
  const scrollToSignup = () => {
    document.getElementById('signup-form-container')?.scrollIntoView({
      behavior: 'smooth'
    });
  };

  return (
    <div className="demo-container">
      <div className="demo-photo" />
      
      <div className="demo-fog">
        <div className="relative w-4/5 h-4/5">
          <span className="demo-fog-text top-[10%] left-[15%]" style={{ animationDelay: '4s' }}>
            Medication Schedules
          </span>
          <span className="demo-fog-text top-[30%] left-[60%]" style={{ animationDelay: '5s' }}>
            Doctor's Appointments
          </span>
          <span className="demo-fog-text top-[50%] left-[10%]" style={{ animationDelay: '6s' }}>
            Fear of Recurrence
          </span>
          <span className="demo-fog-text top-[70%] left-[70%]" style={{ animationDelay: '7s' }}>
            "Am I a burden?"
          </span>
          <span className="demo-fog-text top-[85%] left-[20%]" style={{ animationDelay: '8s' }}>
            Exhaustion
          </span>
          <span className="demo-fog-text top-[5%] left-[50%]" style={{ animationDelay: '9s' }}>
            "Am I doing enough?"
          </span>
          <span className="demo-fog-text top-[45%] left-[40%]" style={{ animationDelay: '10s' }}>
            Isolation
          </span>
        </div>
      </div>

      <div className="demo-headline" style={{ animationDelay: '2s' }}>
        Illness Fades the Picture. But the Memory is Still There.
      </div>

      <div className="demo-solution">
        <div className="demo-icon">T</div>
      </div>

      <div className="demo-headline" style={{ animationDelay: '13s' }}>
        ThriveOn Helps You Remember the Color.
      </div>
    </div>
  );
};