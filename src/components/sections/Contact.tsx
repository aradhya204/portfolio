import { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import { SectionHeading } from '../ui/SectionHeading';
import { FaPaperPlane } from 'react-icons/fa';

export const Contact = () => {
  const formRef = useRef<HTMLFormElement>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formRef.current) return;
    
    setIsSubmitting(true);
    setError(null);
    
    const formData = new FormData(formRef.current);
    const object = Object.fromEntries(formData);
    const json = JSON.stringify({
      ...object,
      access_key: import.meta.env.VITE_WEB3FORMS_ACCESS_KEY
    });
    
    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json"
        },
        body: json
      });
      const data = await res.json();

      if (data.success) {
        setSubmitted(true);
        formRef.current.reset();
        setTimeout(() => setSubmitted(false), 5000);
      } else {
        setError(data.message || "Failed to send message. Please try again.");
      }
    } catch (err) {
      setError("Failed to send message. Please try again later.");
      console.error("Web3Forms error:", err);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-24 relative">
      {/* Decorative blobs */}
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-primary/10 rounded-full blur-[150px] pointer-events-none" />
      
      <div className="container mx-auto px-6 relative z-10">
        <SectionHeading 
          title="Get In Touch" 
          subtitle="Have a question or want to work together? Leave a message!"
        />

        <div className="max-w-2xl mx-auto glass p-8 md:p-12 rounded-3xl border border-white/10 shadow-2xl">
          <form ref={formRef} onSubmit={handleSubmit} className="flex flex-col gap-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="flex flex-col gap-2">
                <label htmlFor="name" className="text-sm font-medium text-gray-300">Name</label>
                <input 
                  type="text" 
                  id="name"
                  name="name"
                  required
                  placeholder="John Doe"
                  className="bg-black/20 border border-white/10 rounded-xl px-4 py-3 text-white placeholder:text-gray-600 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all"
                />
              </div>
              <div className="flex flex-col gap-2">
                <label htmlFor="email" className="text-sm font-medium text-gray-300">Email</label>
                <input 
                  type="email" 
                  id="email"
                  name="email"
                  required
                  placeholder="john@example.com"
                  className="bg-black/20 border border-white/10 rounded-xl px-4 py-3 text-white placeholder:text-gray-600 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all"
                />
              </div>
            </div>
            
            <div className="flex flex-col gap-2">
              <label htmlFor="subject" className="text-sm font-medium text-gray-300">Subject</label>
              <input 
                type="text" 
                id="subject"
                name="subject"
                required
                placeholder="Project Inquiry"
                className="bg-black/20 border border-white/10 rounded-xl px-4 py-3 text-white placeholder:text-gray-600 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all"
              />
            </div>
            
            <div className="flex flex-col gap-2">
              <label htmlFor="message" className="text-sm font-medium text-gray-300">Message</label>
              <textarea 
                id="message"
                name="message"
                required
                rows={5}
                placeholder="How can I help you?"
                className="bg-black/20 border border-white/10 rounded-xl px-4 py-3 text-white placeholder:text-gray-600 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all resize-none"
              />
            </div>

            {error && (
              <div className="text-red-400 text-sm font-medium text-center bg-red-400/10 py-3 rounded-xl border border-red-400/20">
                {error}
              </div>
            )}

            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              type="submit"
              disabled={isSubmitting}
              className={`mt-4 w-full text-white font-semibold py-4 rounded-xl flex items-center justify-center gap-2 transition-colors disabled:opacity-70 disabled:cursor-not-allowed ${
                error ? 'bg-red-500 hover:bg-red-600' : 'bg-primary hover:bg-blue-600'
              }`}
            >
              {isSubmitting ? (
                <div className="w-6 h-6 border-2 border-white/30 border-t-white rounded-full animate-spin" />
              ) : submitted ? (
                "Thank you! Your message has been sent successfully."
              ) : error ? (
                "Retry Sending"
              ) : (
                <>Send Message <FaPaperPlane className="text-sm" /></>
              )}
            </motion.button>
          </form>
        </div>
      </div>
    </section>
  );
};
