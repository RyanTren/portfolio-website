'use client';

import { useState, useRef, useEffect } from 'react';
import { Turnstile } from '@marsidev/react-turnstile';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Send, Loader2, CheckCircle, AlertCircle, Clock } from 'lucide-react';

interface ContactFormData {
  firstName: string;
  lastName: string;
  email: string;
  subject: string;
  message: string;
}

interface RateLimitInfo {
  nextAllowedTime?: string;
}

export function ContactForm() {
  const [formData, setFormData] = useState<ContactFormData>({
    firstName: '',
    lastName: '',
    email: '',
    subject: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [rateLimitInfo, setRateLimitInfo] = useState<RateLimitInfo>({});
  const [errorMessage, setErrorMessage] = useState('');
  const [turnstileToken, setTurnstileToken] = useState<string>('');
  
  // Honeypot and timestamp refs
  const honeypotRef = useRef<HTMLInputElement>(null);
  const formTimestampRef = useRef<string>('');

  // Set timestamp when form mounts
  useEffect(() => {
    formTimestampRef.current = new Date().toISOString();
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('idle');
    setRateLimitInfo({});
    setErrorMessage('');

    // Check Turnstile token
    if (!turnstileToken) {
      setSubmitStatus('error');
      setErrorMessage('Please complete the CAPTCHA verification.');
      setIsSubmitting(false);
      return;
    }

    try {
      // Include honeypot, timestamp, and turnstile token
      const submissionData = {
        ...formData,
        website_url: honeypotRef.current?.value || '',
        formTimestamp: formTimestampRef.current,
        turnstileToken,
      };

      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(submissionData),
      });

      const result = await response.json();

      if (response.ok) {
        setSubmitStatus('success');
        setFormData({ firstName: '', lastName: '', email: '', subject: '', message: '' });
        setTurnstileToken('');
        formTimestampRef.current = new Date().toISOString();
        if (result.nextAllowedTime) {
          setRateLimitInfo({ nextAllowedTime: result.nextAllowedTime });
        }
      } else if (response.status === 429) {
        setSubmitStatus('error');
        setErrorMessage(result.message || 'Too many requests. Please try again later.');
        setRateLimitInfo({ nextAllowedTime: result.nextAllowedTime });
      } else {
        setSubmitStatus('error');
        setErrorMessage(result.message || 'Failed to send message. Please try again.');
      }
    } catch (error) {
      setSubmitStatus('error');
      setErrorMessage('Network error. Please check your connection and try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const formatNextAllowedTime = (isoString: string) => {
    const date = new Date(isoString);
    return date.toLocaleString();
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      {/* Honeypot field - hidden from humans, bots will fill this out */}
      <div className="absolute opacity-0 pointer-events-none h-0 overflow-hidden" aria-hidden="true">
        <label htmlFor="website_url">Leave this empty</label>
        <input
          ref={honeypotRef}
          type="text"
          id="website_url"
          name="website_url"
          tabIndex={-1}
          autoComplete="off"
        />
      </div>

      <div className="grid grid-cols-2 gap-4">
        <div>
          <label htmlFor="firstName" className="block text-sm font-medium mb-2">
            First Name
          </label>
          <Input
            id="firstName"
            name="firstName"
            value={formData.firstName}
            onChange={(e) => setFormData(prev => ({ ...prev, firstName: e.target.value }))}
            placeholder="John"
            className="cursor-text"
            required
          />
        </div>
        <div>
          <label htmlFor="lastName" className="block text-sm font-medium mb-2">
            Last Name
          </label>
          <Input
            id="lastName"
            name="lastName"
            value={formData.lastName}
            onChange={(e) => setFormData(prev => ({ ...prev, lastName: e.target.value }))}
            placeholder="Doe"
            className="cursor-text"
            required
          />
        </div>
      </div>

      <div>
        <label htmlFor="email" className="block text-sm font-medium mb-2">
          Email
        </label>
        <Input
          id="email"
          name="email"
          type="email"
          value={formData.email}
          onChange={(e) => setFormData(prev => ({ ...prev, email: e.target.value }))}
          placeholder="john@example.com"
          className="cursor-text"
          required
        />
      </div>

      <div>
        <label htmlFor="subject" className="block text-sm font-medium mb-2">
          Subject
        </label>
        <Input
          id="subject"
          name="subject"
          value={formData.subject}
          onChange={(e) => setFormData(prev => ({ ...prev, subject: e.target.value }))}
          placeholder="Let's discuss a project opportunity"
          className="cursor-text"
          required
        />
      </div>

      <div>
        <label htmlFor="message" className="block text-sm font-medium mb-2">
          Message
        </label>
        <Textarea
          id="message"
          name="message"
          value={formData.message}
          onChange={(e) => setFormData(prev => ({ ...prev, message: e.target.value }))}
          placeholder="Tell me about your project or opportunity..."
          rows={5}
          className="cursor-text"
          required
        />
      </div>

      {/* Cloudflare Turnstile CAPTCHA */}
      <div className="flex justify-center">
        <Turnstile
          siteKey={process.env.NEXT_PUBLIC_TURNSTILE_SITE_KEY || ''}
          onSuccess={(token) => setTurnstileToken(token)}
          onExpire={() => setTurnstileToken('')}
          theme="auto"
        />
      </div>

      {/* Status messages */}
      {submitStatus === 'success' && (
        <div className="flex items-center gap-2 text-green-600">
          <CheckCircle className="h-5 w-5" />
          <span>Message sent successfully!</span>
        </div>
      )}

      {submitStatus === 'error' && (
        <div className="flex items-center gap-2 text-red-600">
          <AlertCircle className="h-5 w-5" />
          <span>{errorMessage || 'Failed to send message. Please try again.'}</span>
        </div>
      )}

      {rateLimitInfo.nextAllowedTime && submitStatus === 'error' && (
        <div className="flex items-center gap-2 text-amber-600 text-sm">
          <Clock className="h-4 w-4" />
          <span>You can try again after {formatNextAllowedTime(rateLimitInfo.nextAllowedTime)}</span>
        </div>
      )}

      <Button
        type="submit"
        size="lg"
        className="w-full bg-gradient-to-r from-orange-600 to-green-600 hover:drop-shadow-lg hover:duration-500 text-white cursor-pointer"
        disabled={isSubmitting}
      >
        {isSubmitting ? (
          <Loader2 className="mr-2 h-5 w-5 animate-spin" />
        ) : (
          <Send className="mr-2 h-5 w-5" />
        )}
        {isSubmitting ? 'Sending...' : 'Send Message'}
      </Button>
    </form>
  );
}
