import { motion } from "framer-motion";
import { Heart } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center px-6 py-20 overflow-hidden">
      <div className="text-center z-10 max-w-2xl mx-auto">
        <motion.div
          initial={{ scale: 0, rotate: -180 }}
          animate={{ scale: 1, rotate: 0 }}
          transition={{ type: "spring", duration: 1, delay: 0.2 }}
          className="inline-block mb-6"
        >
          <div className="w-20 h-20 rounded-full gradient-warm flex items-center justify-center shadow-glow animate-heartbeat">
            <Heart className="w-10 h-10 text-primary-foreground fill-current" />
          </div>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="text-5xl md:text-7xl font-bold font-display mb-6 leading-tight"
        >
          Happy{" "}
          <span className="text-gradient">Valentine's</span>
          <br />
          Bestie! 💕
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="text-lg md:text-xl text-muted-foreground font-body leading-relaxed mb-8"
        >
          This isn't about romance — it's about celebrating the most amazing
          friend in the universe. That's you! 🌸
        </motion.p>

        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 1.1 }}
        >
          <motion.a
            href="#surprises"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center gap-2 px-8 py-4 rounded-full gradient-button text-primary-foreground font-semibold text-lg shadow-soft cursor-pointer"
          >
            Open Your Surprises ✨
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
