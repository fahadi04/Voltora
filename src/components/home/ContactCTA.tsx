"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Phone, Mail, MapPin, CheckCircle2, AlertCircle, RefreshCw, MessageCircle } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/Button";
import { siteConfig } from "@/lib/config";

const formSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters."),
  phone: z.string().regex(/^[0-9]{10}$/, "Please enter a valid 10-digit mobile number."),
  location: z.string().min(2, "Project location is required."),
  houseType: z.enum(["2BHK", "3BHK", "4BHK", "Independent House", "Villa", "Other"], {
    errorMap: () => ({ message: "Please select a house type." })
  }),
  projectType: z.enum(["New Construction", "Renovation"], {
    errorMap: () => ({ message: "Please select a project type." })
  }),
  area: z.string().optional(),
  message: z.string().optional(),
});

type FormData = z.infer<typeof formSchema>;

export function ContactCTA() {
  const [submitState, setSubmitState] = useState<"idle" | "loading" | "success" | "error">("idle");

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FormData>({
    resolver: zodResolver(formSchema),
  });

  const onSubmit = async (data: FormData) => {
    setSubmitState("loading");
    
    // Simulate API call
    try {
      await new Promise(resolve => setTimeout(resolve, 1500));
      console.log("Form data submitted:", data);
      setSubmitState("success");
    } catch {
      setSubmitState("error");
    }
  };

  const handleReset = () => {
    reset();
    setSubmitState("idle");
  };

  const openWhatsApp = () => {
    const message = "Namaste, I tried submitting a consultation request on your website but encountered an issue.";
    window.open(`https://wa.me/${siteConfig.whatsapp}?text=${encodeURIComponent(message)}`, "_blank");
  };

  return (
    <section id="contact" className="py-24 bg-surface">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-6xl mx-auto bg-background rounded-3xl shadow-xl overflow-hidden flex flex-col lg:flex-row">
          
          {/* Form Side */}
          <div className="flex-[3] p-8 md:p-12">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-primary mb-4">
              Let&apos;s Plan Your Electrical Work
            </h2>
            <p className="text-foreground/70 mb-10 max-w-xl">
              Tell us about your house or upcoming project and we&apos;ll help you understand the electrical scope, planning and next steps.
            </p>

            <AnimatePresence mode="wait">
              {submitState === "success" && (
                <motion.div
                  key="success"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  className="bg-green-50 border border-green-200 rounded-2xl p-8 text-center flex flex-col items-center"
                >
                  <CheckCircle2 className="h-16 w-16 text-green-500 mb-4" />
                  <h3 className="text-2xl font-bold text-green-800 mb-2">Thank you!</h3>
                  <p className="text-green-700 mb-8 max-w-sm">
                    Your consultation request has been received. We&apos;ll get in touch with you shortly.
                  </p>
                  <Button onClick={handleReset} variant="outline" className="border-green-300 text-green-700 hover:bg-green-100">
                    Send Another Request
                  </Button>
                </motion.div>
              )}

              {submitState === "error" && (
                <motion.div
                  key="error"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  className="bg-red-50 border border-red-200 rounded-2xl p-8 text-center flex flex-col items-center"
                >
                  <AlertCircle className="h-16 w-16 text-red-500 mb-4" />
                  <h3 className="text-2xl font-bold text-red-800 mb-2">Something went wrong.</h3>
                  <p className="text-red-700 mb-8 max-w-sm">
                    Please try again or contact us directly on WhatsApp.
                  </p>
                  <div className="flex gap-4">
                    <Button onClick={() => setSubmitState("idle")} variant="outline" className="border-red-300 text-red-700 hover:bg-red-100">
                      <RefreshCw className="mr-2 h-4 w-4" />
                      Try Again
                    </Button>
                    <Button onClick={openWhatsApp} className="bg-[#25D366] text-white hover:bg-[#128C7E]">
                      <MessageCircle className="mr-2 h-4 w-4" />
                      WhatsApp Us
                    </Button>
                  </div>
                </motion.div>
              )}

              {(submitState === "idle" || submitState === "loading") && (
                <motion.form
                  key="form"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  onSubmit={handleSubmit(onSubmit)}
                  className="space-y-6"
                >
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {/* Name */}
                    <div className="space-y-2">
                      <label htmlFor="name" className="text-sm font-medium text-foreground">Name</label>
                      <input
                        id="name"
                        {...register("name")}
                        disabled={submitState === "loading"}
                        placeholder="Your full name"
                        className={`w-full px-4 py-3 rounded-xl border bg-surface/50 focus:bg-background focus:ring-2 focus:ring-accent focus:border-accent transition-colors disabled:opacity-50 ${
                          errors.name ? "border-red-500" : "border-border"
                        }`}
                      />
                      {errors.name && <p className="text-sm text-red-500">{errors.name.message}</p>}
                    </div>

                    {/* Phone */}
                    <div className="space-y-2">
                      <label htmlFor="phone" className="text-sm font-medium text-foreground">Phone Number</label>
                      <input
                        id="phone"
                        {...register("phone")}
                        disabled={submitState === "loading"}
                        placeholder="10-digit mobile number"
                        maxLength={10}
                        className={`w-full px-4 py-3 rounded-xl border bg-surface/50 focus:bg-background focus:ring-2 focus:ring-accent focus:border-accent transition-colors disabled:opacity-50 ${
                          errors.phone ? "border-red-500" : "border-border"
                        }`}
                      />
                      {errors.phone && <p className="text-sm text-red-500">{errors.phone.message}</p>}
                    </div>

                    {/* Location */}
                    <div className="space-y-2">
                      <label htmlFor="location" className="text-sm font-medium text-foreground">Project Location</label>
                      <input
                        id="location"
                        {...register("location")}
                        disabled={submitState === "loading"}
                        placeholder="Delhi / NCR"
                        className={`w-full px-4 py-3 rounded-xl border bg-surface/50 focus:bg-background focus:ring-2 focus:ring-accent focus:border-accent transition-colors disabled:opacity-50 ${
                          errors.location ? "border-red-500" : "border-border"
                        }`}
                      />
                      {errors.location && <p className="text-sm text-red-500">{errors.location.message}</p>}
                    </div>

                    {/* Area */}
                    <div className="space-y-2">
                      <label htmlFor="area" className="text-sm font-medium text-foreground">Approximate Area</label>
                      <input
                        id="area"
                        {...register("area")}
                        disabled={submitState === "loading"}
                        placeholder="e.g. 1800 sq. ft."
                        className="w-full px-4 py-3 rounded-xl border border-border bg-surface/50 focus:bg-background focus:ring-2 focus:ring-accent focus:border-accent transition-colors disabled:opacity-50"
                      />
                    </div>

                    {/* House Type */}
                    <div className="space-y-2">
                      <label htmlFor="houseType" className="text-sm font-medium text-foreground">House Type</label>
                      <select
                        id="houseType"
                        {...register("houseType")}
                        disabled={submitState === "loading"}
                        defaultValue=""
                        className={`w-full px-4 py-3 rounded-xl border bg-surface/50 focus:bg-background focus:ring-2 focus:ring-accent focus:border-accent transition-colors disabled:opacity-50 appearance-none ${
                          errors.houseType ? "border-red-500" : "border-border"
                        }`}
                      >
                        <option value="" disabled>Select house type</option>
                        <option value="2BHK">2BHK</option>
                        <option value="3BHK">3BHK</option>
                        <option value="4BHK">4BHK</option>
                        <option value="Independent House">Independent House</option>
                        <option value="Villa">Villa</option>
                        <option value="Other">Other</option>
                      </select>
                      {errors.houseType && <p className="text-sm text-red-500">{errors.houseType.message}</p>}
                    </div>

                    {/* Project Type */}
                    <div className="space-y-2">
                      <label htmlFor="projectType" className="text-sm font-medium text-foreground">Project Type</label>
                      <select
                        id="projectType"
                        {...register("projectType")}
                        disabled={submitState === "loading"}
                        defaultValue=""
                        className={`w-full px-4 py-3 rounded-xl border bg-surface/50 focus:bg-background focus:ring-2 focus:ring-accent focus:border-accent transition-colors disabled:opacity-50 appearance-none ${
                          errors.projectType ? "border-red-500" : "border-border"
                        }`}
                      >
                        <option value="" disabled>Select project type</option>
                        <option value="New Construction">New Construction</option>
                        <option value="Renovation">Renovation</option>
                      </select>
                      {errors.projectType && <p className="text-sm text-red-500">{errors.projectType.message}</p>}
                    </div>
                  </div>

                  {/* Message */}
                  <div className="space-y-2">
                    <label htmlFor="message" className="text-sm font-medium text-foreground">Message</label>
                    <textarea
                      id="message"
                      {...register("message")}
                      disabled={submitState === "loading"}
                      placeholder="Tell us about your project..."
                      rows={4}
                      className="w-full px-4 py-3 rounded-xl border border-border bg-surface/50 focus:bg-background focus:ring-2 focus:ring-accent focus:border-accent transition-colors disabled:opacity-50 resize-none"
                    />
                  </div>

                  <Button type="submit" size="lg" className="w-full sm:w-auto" isLoading={submitState === "loading"}>
                    {submitState === "loading" ? "Submitting..." : "Request a Consultation"}
                  </Button>
                </motion.form>
              )}
            </AnimatePresence>
          </div>

          {/* Contact Info Side */}
          <div className="flex-1 bg-primary text-primary-foreground p-8 md:p-12 flex flex-col justify-center">
            <h3 className="text-2xl font-bold mb-8">Contact Information</h3>
            
            <div className="space-y-8">
              <div className="flex items-start gap-4">
                <div className="p-3 bg-foreground/5 rounded-xl shrink-0">
                  <Phone className="h-6 w-6 text-accent" />
                </div>
                <div>
                  <p className="text-sm text-primary-foreground/70 mb-1">Call Us</p>
                  <p className="font-semibold">{siteConfig.phone}</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="p-3 bg-foreground/5 rounded-xl shrink-0">
                  <MessageCircle className="h-6 w-6 text-accent" />
                </div>
                <div>
                  <p className="text-sm text-primary-foreground/70 mb-1">WhatsApp</p>
                  <a 
                    href={`https://wa.me/${siteConfig.whatsapp}`} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="font-semibold hover:text-accent transition-colors"
                  >
                    Chat with us
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="p-3 bg-foreground/5 rounded-xl shrink-0">
                  <Mail className="h-6 w-6 text-accent" />
                </div>
                <div>
                  <p className="text-sm text-primary-foreground/70 mb-1">Email</p>
                  <p className="font-semibold">{siteConfig.email}</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="p-3 bg-foreground/5 rounded-xl shrink-0">
                  <MapPin className="h-6 w-6 text-accent" />
                </div>
                <div>
                  <p className="text-sm text-primary-foreground/70 mb-1">Location</p>
                  <p className="font-semibold">{siteConfig.location}</p>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
