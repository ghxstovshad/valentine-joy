import { motion } from "framer-motion";
import { Heart } from "lucide-react";

const Footer = () => (
  <footer className="py-12 text-center px-6">
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      className="space-y-4"
    >
      <div className="flex items-center justify-center gap-2 text-muted-foreground">
        <span>Made with</span>
        <Heart className="w-4 h-4 text-primary fill-current animate-heartbeat" />
        <span>for the best bestie ever</span>
      </div>
      <p className="text-sm text-muted-foreground/60">
        Happy Valentine's Day 2026 💕
      </p>
    </motion.div>
  </footer>
);

export default Footer;
