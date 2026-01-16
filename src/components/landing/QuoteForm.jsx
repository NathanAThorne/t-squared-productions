import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { X } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { base44 } from '@/api/base44Client';

export default function QuoteForm({ isOpen, onClose }) {
  const [formData, setFormData] = useState({
    first_name: '',
    last_name: '',
    email: '',
    phone: '',
    ministry_position: '',
    church_name: '',
    weekly_attendance: '',
    staff_size: '',
    description: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    await base44.entities.QuoteRequest.create(formData);
    
    setSubmitted(true);
    setTimeout(() => {
      onClose();
      setSubmitted(false);
      setFormData({
        first_name: '',
        last_name: '',
        email: '',
        phone: '',
        ministry_position: '',
        church_name: '',
        weekly_attendance: '',
        staff_size: '',
        description: ''
      });
    }, 2000);

    setIsSubmitting(false);
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm">
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.95 }}
        className="bg-[#0a0a0f] border border-white/10 rounded-2xl w-full max-w-3xl max-h-[90vh] overflow-y-auto relative"
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-6 right-6 text-white/50 hover:text-white transition-colors"
        >
          <X className="w-6 h-6" />
        </button>

        <div className="p-8 md:p-12">
          {submitted ? (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-center py-12"
            >
              <div className="w-16 h-16 bg-[#00bcd4]/20 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8 text-[#00bcd4]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">Thank You!</h3>
              <p className="text-white/70">We've received your consultation request and will be in touch soon.</p>
            </motion.div>
          ) : (
            <>
              <div className="mb-8">
                <h2 className="text-3xl font-bold text-white mb-2">Schedule Consultation</h2>
                <p className="text-white/60">Tell us about your ministry and how we can help</p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Name Fields */}
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <Label htmlFor="first_name" className="text-white/80 mb-2 block">First Name *</Label>
                    <Input
                      id="first_name"
                      name="first_name"
                      value={formData.first_name}
                      onChange={handleChange}
                      required
                      className="bg-white/5 border-white/10 text-white placeholder:text-white/30"
                    />
                  </div>
                  <div>
                    <Label htmlFor="last_name" className="text-white/80 mb-2 block">Last Name *</Label>
                    <Input
                      id="last_name"
                      name="last_name"
                      value={formData.last_name}
                      onChange={handleChange}
                      required
                      className="bg-white/5 border-white/10 text-white placeholder:text-white/30"
                    />
                  </div>
                </div>

                {/* Contact Fields */}
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <Label htmlFor="email" className="text-white/80 mb-2 block">Email *</Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="bg-white/5 border-white/10 text-white placeholder:text-white/30"
                    />
                  </div>
                  <div>
                    <Label htmlFor="phone" className="text-white/80 mb-2 block">Phone Number *</Label>
                    <Input
                      id="phone"
                      name="phone"
                      type="tel"
                      value={formData.phone}
                      onChange={handleChange}
                      required
                      className="bg-white/5 border-white/10 text-white placeholder:text-white/30"
                    />
                  </div>
                </div>

                {/* Ministry Info */}
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <Label htmlFor="ministry_position" className="text-white/80 mb-2 block">Ministry Position</Label>
                    <Input
                      id="ministry_position"
                      name="ministry_position"
                      value={formData.ministry_position}
                      onChange={handleChange}
                      placeholder="e.g., Worship Pastor, Tech Director"
                      className="bg-white/5 border-white/10 text-white placeholder:text-white/30"
                    />
                  </div>
                  <div>
                    <Label htmlFor="church_name" className="text-white/80 mb-2 block">Name of Church *</Label>
                    <Input
                      id="church_name"
                      name="church_name"
                      value={formData.church_name}
                      onChange={handleChange}
                      required
                      className="bg-white/5 border-white/10 text-white placeholder:text-white/30"
                    />
                  </div>
                </div>

                {/* Church Stats */}
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <Label htmlFor="weekly_attendance" className="text-white/80 mb-2 block">Weekly Attendance</Label>
                    <Input
                      id="weekly_attendance"
                      name="weekly_attendance"
                      value={formData.weekly_attendance}
                      onChange={handleChange}
                      placeholder="e.g., 100-500"
                      className="bg-white/5 border-white/10 text-white placeholder:text-white/30"
                    />
                  </div>
                  <div>
                    <Label htmlFor="staff_size" className="text-white/80 mb-2 block">Staff Size</Label>
                    <Input
                      id="staff_size"
                      name="staff_size"
                      value={formData.staff_size}
                      onChange={handleChange}
                      placeholder="e.g., 5-10"
                      className="bg-white/5 border-white/10 text-white placeholder:text-white/30"
                    />
                  </div>
                </div>

                {/* Description */}
                <div>
                  <Label htmlFor="description" className="text-white/80 mb-2 block">
                    Tell Us About Your Needs
                  </Label>
                  <Textarea
                    id="description"
                    name="description"
                    value={formData.description}
                    onChange={handleChange}
                    rows={5}
                    placeholder="Share your challenges, goals, or pain points... What production challenges are you facing? What technology gaps need to be filled? What does success look like for your ministry?"
                    className="bg-white/5 border-white/10 text-white placeholder:text-white/30 resize-none"
                  />
                </div>

                {/* Submit Button */}
                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-[#00bcd4] hover:bg-[#00acc1] text-white py-6 text-lg font-bold rounded-lg transition-all duration-300"
                >
                  {isSubmitting ? 'Submitting...' : 'Request Consultation'}
                </Button>
              </form>
            </>
          )}
        </div>
      </motion.div>
    </div>
  );
}