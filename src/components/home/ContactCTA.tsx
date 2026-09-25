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
  email: z.string().email("Please enter a valid email address.").optional().or(z.literal("")),
  location: z.string().min(2, "Project location is required."),
  projectType: z.enum([
    "Residential Project",
    "Commercial Building",
    "Luxury Villa",
    "Corporate Office",
    "Renovation / Retrofit",
    "Other",
  ], {
    errorMap: () => ({ message: "Please select a project type." })
  }),
  serviceRequired: z.enum([
    "Complete Integrated MEP Package",
    "Electrical Engineering & Installation",
    "Mechanical / HVAC Services",
    "Plumbing & Drainage Systems",
    "MEP Design, AutoCAD & BOQ",
    "Material Supply Only",
    "Installation, Testing & Handover",
  ], {
    errorMap: () => ({ message: "Please select a required service." })
  }),
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
    const message = "Hello Innovate MEP Solutions, I would like to get a consultation for our MEP requirements.";
    window.open(`https://wa.me/${siteConfig.whatsapp}?text=${encodeURIComponent(message)}`, "_blank");
  };

  return (
    <section id="contact" className="py-10 md:py-14 bg-surface">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-5xl mx-auto bg-background rounded-2xl shadow-xl overflow-hidden flex flex-col lg:flex-row border border-border/50">
          
          {/* Form Side */}
          <div className="flex-[3] p-6 sm:p-8 md:p-10">
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-primary mb-2.5">
              Get a Free MEP Consultation
            </h2>
            <p className="text-xs sm:text-sm text-foreground/70 mb-6 max-w-xl font-light">
              Tell us about your upcoming project and our engineering team will help you with MEP design, BOQ estimation, and execution planning.
            </p>

            <AnimatePresence mode="wait">
              {submitState === "success" && (
                <motion.div
                  key="success"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  className="bg-green-50 border border-green-200 rounded-xl p-6 text-center flex flex-col items-center"
                >
                  <CheckCircle2 className="h-12 w-12 text-green-500 mb-3" />
                  <h3 className="text-xl font-bold text-green-800 mb-1.5">Thank you!</h3>
                  <p className="text-sm text-green-700 mb-6 max-w-sm">
                    Your consultation request has been received. Our MEP engineering team will contact you shortly.
                  </p>
                  <Button onClick={handleReset} variant="outline" className="border-green-300 text-green-700 hover:bg-green-100 h-10 px-5 text-xs">
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
                  className="bg-red-50 border border-red-200 rounded-xl p-6 text-center flex flex-col items-center"
                >
                  <AlertCircle className="h-12 w-12 text-red-500 mb-3" />
                  <h3 className="text-xl font-bold text-red-800 mb-1.5">Something went wrong.</h3>
                  <p className="text-sm text-red-700 mb-6 max-w-sm">
                    Please try again or contact us directly on WhatsApp.
                  </p>
                  <div className="flex gap-3">
                    <Button onClick={() => setSubmitState("idle")} variant="outline" className="border-red-300 text-red-700 hover:bg-red-100 h-10 px-4 text-xs">
                      <RefreshCw className="mr-1.5 h-3.5 w-3.5" />
                      Try Again
                    </Button>
                    <Button onClick={openWhatsApp} className="bg-[#25D366] text-white hover:bg-[#128C7E] h-10 px-4 text-xs">
                      <MessageCircle className="mr-1.5 h-3.5 w-3.5" />
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
                  className="space-y-4"
                >
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {/* Name */}
                    <div className="space-y-1.5">
                      <label htmlFor="name" className="text-xs font-semibold text-foreground">Name *</label>
                      <input
                        id="name"
                        {...register("name")}
                        disabled={submitState === "loading"}
                        placeholder="Your full name"
                        className={`w-full px-3.5 py-2.5 rounded-lg border bg-surface/50 text-sm focus:bg-background focus:ring-2 focus:ring-accent focus:border-accent transition-colors disabled:opacity-50 ${
                          errors.name ? "border-red-500" : "border-border"
                        }`}
                      />
                      {errors.name && <p className="text-xs text-red-500">{errors.name.message}</p>}
                    </div>

                    {/* Phone */}
                    <div className="space-y-1.5">
                      <label htmlFor="phone" className="text-xs font-semibold text-foreground">Phone Number *</label>
                      <input
                        id="phone"
                        {...register("phone")}
                        disabled={submitState === "loading"}
                        placeholder="10-digit mobile number"
                        maxLength={10}
                        className={`w-full px-3.5 py-2.5 rounded-lg border bg-surface/50 text-sm focus:bg-background focus:ring-2 focus:ring-accent focus:border-accent transition-colors disabled:opacity-50 ${
                          errors.phone ? "border-red-500" : "border-border"
                        }`}
                      />
                      {errors.phone && <p className="text-xs text-red-500">{errors.phone.message}</p>}
                    </div>

                    {/* Email */}
                    <div className="space-y-1.5">
                      <label htmlFor="email" className="text-xs font-semibold text-foreground">Email Address</label>
                      <input
                        id="email"
                        type="email"
                        {...register("email")}
                        disabled={submitState === "loading"}
                        placeholder="name@example.com"
                        className={`w-full px-3.5 py-2.5 rounded-lg border bg-surface/50 text-sm focus:bg-background focus:ring-2 focus:ring-accent focus:border-accent transition-colors disabled:opacity-50 ${
                          errors.email ? "border-red-500" : "border-border"
                        }`}
                      />
                      {errors.email && <p className="text-xs text-red-500">{errors.email.message}</p>}
                    </div>

                    {/* Location */}
                    <div className="space-y-1.5">
                      <label htmlFor="location" className="text-xs font-semibold text-foreground">Project Location *</label>
                      <input
                        id="location"
                        {...register("location")}
                        disabled={submitState === "loading"}
                        placeholder="City / State"
                        className={`w-full px-3.5 py-2.5 rounded-lg border bg-surface/50 text-sm focus:bg-background focus:ring-2 focus:ring-accent focus:border-accent transition-colors disabled:opacity-50 ${
                          errors.location ? "border-red-500" : "border-border"
                        }`}
                      />
                      {errors.location && <p className="text-xs text-red-500">{errors.location.message}</p>}
                    </div>

                    {/* Project Type */}
                    <div className="space-y-1.5">
                      <label htmlFor="projectType" className="text-xs font-semibold text-foreground">Project Type *</label>
                      <select
                        id="projectType"
                        {...register("projectType")}
                        disabled={submitState === "loading"}
                        defaultValue=""
                        className={`w-full px-3.5 py-2.5 rounded-lg border bg-surface/50 text-sm focus:bg-background focus:ring-2 focus:ring-accent focus:border-accent transition-colors disabled:opacity-50 appearance-none ${
                          errors.projectType ? "border-red-500" : "border-border"
                        }`}
                      >
                        <option value="" disabled>Select project type</option>
                        <option value="Residential Project">Residential Project</option>
                        <option value="Commercial Building">Commercial Building</option>
                        <option value="Luxury Villa">Luxury Villa</option>
                        <option value="Corporate Office">Corporate Office</option>
                        <option value="Renovation / Retrofit">Renovation / Retrofit</option>
                        <option value="Other">Other</option>
                      </select>
                      {errors.projectType && <p className="text-xs text-red-500">{errors.projectType.message}</p>}
                    </div>

                    {/* Required Service */}
                    <div className="space-y-1.5">
                      <label htmlFor="serviceRequired" className="text-xs font-semibold text-foreground">Required Service *</label>
                      <select
                        id="serviceRequired"
                        {...register("serviceRequired")}
                        disabled={submitState === "loading"}
                        defaultValue=""
                        className={`w-full px-3.5 py-2.5 rounded-lg border bg-surface/50 text-sm focus:bg-background focus:ring-2 focus:ring-accent focus:border-accent transition-colors disabled:opacity-50 appearance-none ${
                          errors.serviceRequired ? "border-red-500" : "border-border"
                        }`}
                      >
                        <option value="" disabled>Select service</option>
                        <option value="Complete Integrated MEP Package">Complete Integrated MEP Package</option>
                        <option value="Electrical Engineering & Installation">Electrical Engineering & Installation</option>
                        <option value="Mechanical / HVAC Services">Mechanical / HVAC Services</option>
                        <option value="Plumbing & Drainage Systems">Plumbing & Drainage Systems</option>
                        <option value="MEP Design, AutoCAD & BOQ">MEP Design, AutoCAD & BOQ</option>
                        <option value="Material Supply Only">Material Supply Only</option>
                        <option value="Installation, Testing & Handover">Installation, Testing & Handover</option>
                      </select>
                      {errors.serviceRequired && <p className="text-xs text-red-500">{errors.serviceRequired.message}</p>}
                    </div>
                  </div>

                  {/* Message */}
                  <div className="space-y-1.5">
                    <label htmlFor="message" className="text-xs font-semibold text-foreground">Message / Project Details</label>
                    <textarea
                      id="message"
                      {...register("message")}
                      disabled={submitState === "loading"}
                      placeholder="Brief details about the project area, timelines, or specifications..."
                      rows={3}
                      className="w-full px-3.5 py-2.5 rounded-lg border border-border bg-surface/50 text-sm focus:bg-background focus:ring-2 focus:ring-accent focus:border-accent transition-colors disabled:opacity-50 resize-none"
                    />
                  </div>

                  <Button type="submit" size="lg" className="w-full sm:w-auto h-11 px-7 text-sm font-semibold" isLoading={submitState === "loading"}>
                    {submitState === "loading" ? "Submitting..." : "Get a Free Consultation"}
                  </Button>
                </motion.form>
              )}
            </AnimatePresence>
          </div>

          {/* Contact Info Side */}
          <div className="flex-1 bg-primary text-primary-foreground p-6 sm:p-8 flex flex-col justify-center border-t lg:border-t-0 lg:border-l border-border/50">
            <h3 className="text-xl font-bold mb-6">Contact Channels</h3>
            
            <div className="space-y-6">
              <div className="flex items-start gap-3.5">
                <div className="p-2.5 bg-foreground/5 rounded-lg shrink-0">
                  <Phone className="h-5 w-5 text-accent" />
                </div>
                <div>
                  <p className="text-xs text-primary-foreground/70 mb-0.5">Call Us</p>
                  <p className="font-semibold text-sm">{siteConfig.phone}</p>
                </div>
              </div>

              <div className="flex items-start gap-3.5">
                <div className="p-2.5 bg-foreground/5 rounded-lg shrink-0">
                  <MessageCircle className="h-5 w-5 text-accent" />
                </div>
                <div>
                  <p className="text-xs text-primary-foreground/70 mb-0.5">WhatsApp</p>
                  <a 
                    href={`https://wa.me/${siteConfig.whatsapp}`} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="font-semibold text-sm hover:text-accent transition-colors"
                  >
                    Chat with our team
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-3.5">
                <div className="p-2.5 bg-foreground/5 rounded-lg shrink-0">
                  <Mail className="h-5 w-5 text-accent" />
                </div>
                <div>
                  <p className="text-xs text-primary-foreground/70 mb-0.5">Email</p>
                  <p className="font-semibold text-sm">{siteConfig.email}</p>
                </div>
              </div>

              <div className="flex items-start gap-3.5">
                <div className="p-2.5 bg-foreground/5 rounded-lg shrink-0">
                  <MapPin className="h-5 w-5 text-accent" />
                </div>
                <div>
                  <p className="text-xs text-primary-foreground/70 mb-0.5">Location</p>
                  <p className="font-semibold text-sm">{siteConfig.location}</p>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
