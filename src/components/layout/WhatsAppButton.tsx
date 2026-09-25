"use client";

import { MessageCircle } from "lucide-react";
import { siteConfig } from "@/lib/config";
import { motion } from "framer-motion";

export function WhatsAppButton() {
  const message = "Hello Innovate MEP Solutions, I would like to consult regarding our MEP project requirements.";
  const whatsappUrl = `https://wa.me/${siteConfig.whatsapp}?text=${encodeURIComponent(message)}`;

  return (
    <motion.a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 flex items-center justify-center w-14 h-14 bg-[#25D366] text-white rounded-full shadow-lg hover:bg-[#128C7E] transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#25D366]"
      aria-label="Chat with us on WhatsApp"
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 1, duration: 0.3 }}
    >
      <MessageCircle className="w-7 h-7" />
    </motion.a>
  );
}
