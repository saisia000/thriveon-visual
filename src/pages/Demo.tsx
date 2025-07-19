import { Button } from '@/components/ui/button';
import { ArrowLeft, Home } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { StorytellingVideoPlayer } from '@/components/StorytellingVideoPlayer';
import { EmailSignupForm } from '@/components/EmailSignupForm';

export const Demo = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b border-border bg-card/50 backdrop-blur-sm sticky top-0 z-10">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <Button 
                variant="ghost" 
                size="sm"
                onClick={() => navigate('/')}
                className="flex items-center gap-2"
              >
                <ArrowLeft className="w-4 h-4" />
                Back to Home
              </Button>
              <div className="h-6 w-px bg-border" />
              <h1 className="text-xl font-bold text-primary">ThriveOn Demo</h1>
            </div>
            <Button 
              variant="outline"
              size="sm"
              onClick={() => navigate('/')}
              className="flex items-center gap-2"
            >
              <Home className="w-4 h-4" />
              Home
            </Button>
          </div>
        </div>
      </header>

      {/* Main content */}
      <main className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            The Complete ThriveOn Story
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Watch the complete journey from overwhelmed caregiving to meaningful connection through ThriveOn's multi-agent AI system.
          </p>
        </div>

        {/* Storytelling video player */}
        <div className="max-w-4xl mx-auto mb-12">
          <StorytellingVideoPlayer />
        </div>

        {/* Signup Form */}
        <div id="signup-form-container" className="mb-12">
          <EmailSignupForm />
        </div>

        {/* Call to action */}
        <div className="text-center bg-card rounded-2xl p-8 max-w-2xl mx-auto shadow-lg">
          <h3 className="text-2xl md:text-3xl font-bold mb-4">
            Ready to Transform Your Caregiving Journey?
          </h3>
          <p className="text-muted-foreground mb-6">
            Join thousands of families who are moving from overwhelmed to connected with ThriveOn's AI-powered support.
          </p>
          <Button 
            variant="hero"
            onClick={() => navigate('/#signup-form-container')}
            className="mr-4"
          >
            Get Early Access
          </Button>
          <Button 
            variant="outline"
            onClick={() => navigate('/')}
          >
            Learn More
          </Button>
        </div>
      </main>
    </div>
  );
};