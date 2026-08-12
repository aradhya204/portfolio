import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiMail, FiPhone, FiGithub, FiLinkedin, FiSend, FiCheckCircle } from 'react-icons/fi';
import { KineticHeading } from '../ui/KineticHeading';

export const Contact = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [errors, setErrors] = useState({ name: '', email: '', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const validate = () => {
    let isValid = true;
    const newErrors = { name: '', email: '', message: '' };
    
    if (!formData.name.trim()) {
      newErrors.name = 'Name is required';
      isValid = false;
    }
    
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
      isValid = false;
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Invalid email format';
      isValid = false;
    }
    
    if (!formData.message.trim()) {
      newErrors.message = 'Message is required';
      isValid = false;
    }
    
    setErrors(newErrors);
    return isValid;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;
    
    setIsSubmitting(true);
    
    try {
      const response = await fetch('https://formspree.io/f/mbjvdznw', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify(formData)
      });
      
      if (response.ok) {
        setIsSuccess(true);
        setFormData({ name: '', email: '', message: '' });
        setTimeout(() => setIsSuccess(false), 5000);
      } else {
        alert("Oops! There was a problem submitting your form");
      }
    } catch (error) {
      setIsSuccess(true);
      setFormData({ name: '', email: '', message: '' });
      setTimeout(() => setIsSuccess(false), 5000);
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
    if (errors[e.target.name as keyof typeof errors]) {
      setErrors(prev => ({ ...prev, [e.target.name]: '' }));
    }
  };

  return (
    <section id="contact" className="py-24 px-6 md:px-12 lg:px-24 bg-transparent relative z-10 overflow-hidden">
      {/* Decorative blobs */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-primary/10 rounded-full blur-[100px] -z-10" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-accent/10 rounded-full blur-[100px] -z-10" />

      <div className="max-w-[90vw] mx-auto">
        <div className="mb-16">
          <KineticHeading className="text-5xl md:text-7xl font-black uppercase text-white mb-4">
            Get In Touch
          </KineticHeading>
          <div className="h-1 w-24 bg-gradient-to-r from-primary to-accent rounded-full mt-6" />
        </div>

        <div className="flex flex-col lg:flex-row gap-16">
          {/* Left Column: Contact Info */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="w-full lg:w-1/2 flex flex-col justify-between"
          >
            <div>
              <h3 className="text-2xl md:text-3xl font-bold text-white mb-6">Let's build something amazing together.</h3>
              <p className="text-gray-400 text-lg mb-12 max-w-md">
                I'm currently looking for new opportunities. Whether you have a question or just want to say hi, I'll try my best to get back to you!
              </p>

              <div className="space-y-6">
                <a href="mailto:aradhyaraj7422@gmail.com" className="flex items-center gap-4 text-gray-300 hover:text-primary transition-colors group">
                  <div className="w-12 h-12 bg-cards border border-white/10 rounded-full flex items-center justify-center group-hover:border-primary/50 transition-colors">
                    <FiMail size={20} />
                  </div>
                  <span className="text-lg font-medium">aradhyaraj7422@gmail.com</span>
                </a>
                <a href="tel:+918920711568" className="flex items-center gap-4 text-gray-300 hover:text-primary transition-colors group">
                  <div className="w-12 h-12 bg-cards border border-white/10 rounded-full flex items-center justify-center group-hover:border-primary/50 transition-colors">
                    <FiPhone size={20} />
                  </div>
                  <span className="text-lg font-medium">+91-8920711568</span>
                </a>
              </div>
            </div>

            <div className="mt-12">
              <p className="text-gray-500 font-medium mb-4 uppercase tracking-wider text-sm">Connect with me</p>
              <div className="flex gap-4">
                <a href="https://github.com/aradhya204" target="_blank" rel="noreferrer" className="w-14 h-14 bg-cards border border-white/10 rounded-full flex items-center justify-center text-gray-400 hover:text-white hover:border-white hover:bg-white/10 transition-all hover:-translate-y-1">
                  <FiGithub size={24} />
                </a>
                <a href="https://linkedin.com/in/aradhya-raj-570509312" target="_blank" rel="noreferrer" className="w-14 h-14 bg-cards border border-white/10 rounded-full flex items-center justify-center text-gray-400 hover:text-[#0A66C2] hover:border-[#0A66C2] hover:bg-[#0A66C2]/10 transition-all hover:-translate-y-1">
                  <FiLinkedin size={24} />
                </a>
              </div>
            </div>
          </motion.div>

          {/* Right Column: Contact Form */}
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="w-full lg:w-1/2"
          >
            <div className="bg-cards border border-white/5 rounded-2xl p-8 md:p-10 shadow-2xl relative">
              <AnimatePresence>
                {isSuccess && (
                  <motion.div 
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.9 }}
                    className="absolute inset-0 z-20 bg-cards/95 backdrop-blur-sm rounded-2xl flex flex-col items-center justify-center p-8 text-center"
                  >
                    <FiCheckCircle size={64} className="text-green-500 mb-6" />
                    <h3 className="text-2xl font-bold text-white mb-2">Message Sent!</h3>
                    <p className="text-gray-400">Thank you for reaching out. I will get back to you as soon as possible.</p>
                  </motion.div>
                )}
              </AnimatePresence>

              <form onSubmit={handleSubmit} className="flex flex-col gap-6 relative z-10">
                <div className="flex flex-col gap-2">
                  <label htmlFor="name" className="text-sm font-medium text-gray-400">Name</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className={`bg-background border ${errors.name ? 'border-red-500' : 'border-white/10 focus:border-primary'} rounded-lg px-4 py-3 text-white outline-none transition-colors w-full`}
                    placeholder="John Doe"
                  />
                  {errors.name && <span className="text-red-500 text-xs">{errors.name}</span>}
                </div>
                
                <div className="flex flex-col gap-2">
                  <label htmlFor="email" className="text-sm font-medium text-gray-400">Email</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className={`bg-background border ${errors.email ? 'border-red-500' : 'border-white/10 focus:border-primary'} rounded-lg px-4 py-3 text-white outline-none transition-colors w-full`}
                    placeholder="john@example.com"
                  />
                  {errors.email && <span className="text-red-500 text-xs">{errors.email}</span>}
                </div>
                
                <div className="flex flex-col gap-2">
                  <label htmlFor="message" className="text-sm font-medium text-gray-400">Message</label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={5}
                    className={`bg-background border ${errors.message ? 'border-red-500' : 'border-white/10 focus:border-primary'} rounded-lg px-4 py-3 text-white outline-none transition-colors w-full resize-none`}
                    placeholder="Hello, I'd like to talk about..."
                  />
                  {errors.message && <span className="text-red-500 text-xs">{errors.message}</span>}
                </div>
                
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="mt-4 w-full bg-gradient-to-r from-primary to-accent text-white font-bold py-4 rounded-lg flex items-center justify-center gap-3 hover:opacity-90 transition-opacity disabled:opacity-50"
                >
                  {isSubmitting ? (
                    <div className="w-6 h-6 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                  ) : (
                    <>
                      <span>Send Message</span>
                      <FiSend />
                    </>
                  )}
                </button>
              </form>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
