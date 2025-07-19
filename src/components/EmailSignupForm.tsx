import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { CheckCircle2 } from 'lucide-react';

export const EmailSignupForm = () => {
  const [firstName, setFirstName] = useState('');
  const [email, setEmail] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (firstName.trim() && email.trim()) {
      setIsSubmitted(true);
      // Here you would typically send the data to your backend
      console.log('Signup:', { firstName, email });
    }
  };

  if (isSubmitted) {
    return (
      <div className="mt-4 p-6 bg-green-50 border border-green-200 rounded-lg text-center">
        <CheckCircle2 className="w-12 h-12 text-green-600 mx-auto mb-4" />
        <h3 className="text-xl font-bold text-green-800 mb-2">Thank you for joining!</h3>
        <p className="text-green-700">You're on the list for early access. We'll be in touch soon.</p>
      </div>
    );
  }

  return (
    <div id="signup-form-container" className="max-w-lg mx-auto">
      <form onSubmit={handleSubmit} className="grid sm:grid-cols-3 gap-4">
        <Input
          type="text"
          placeholder="First Name"
          value={firstName}
          onChange={(e) => setFirstName(e.target.value)}
          required
          className="sm:col-span-1"
        />
        <Input
          type="email"
          placeholder="Email Address"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          className="sm:col-span-2"
        />
        <Button type="submit" variant="cta" className="sm:col-span-3">
          Get Early Access
        </Button>
      </form>
      <p className="mt-3 text-sm text-muted-foreground text-center">
        Be the first to know when we launch. No spam, ever.
      </p>
    </div>
  );
};