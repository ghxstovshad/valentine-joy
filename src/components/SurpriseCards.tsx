import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import confetti from "canvas-confetti";
import { Gift, Star, Sparkles, Heart, Music, Coffee } from "lucide-react";

const surprises = [
  {
    icon: Gift,
    emoji: "🎁",
    title: "You're a Gift",
    message: "Having you as a best friend is the greatest gift life has given me. No wrapping needed!",
    color: "from-coral to-warm-pink",
  },
  {
    icon: Star,
    emoji: "⭐",
    title: "Star Quality",
    message: "You shine brighter than any star. Your energy lights up every room you walk into!",
    color: "from-accent to-coral",
  },
  {
    icon: Coffee,
    emoji: "☕",
    title: "My Comfort Person",
    message: "You're like the perfect cup of coffee — warm, comforting, and I literally can't function without you.",
    color: "from-warm-pink to-primary",
  },
  {
    icon: Sparkles,
    emoji: "✨",
    title: "Main Character",
    message: "You're not a side character in anyone's story. You ARE the main character, and the plot is iconic!",
    color: "from-blush to-coral",
  },
  {
    icon: Music,
    emoji: "🎵",
    title: "The Vibe",
    message: "Our friendship is like the best playlist — every moment hits different and never gets old.",
    color: "from-primary to-blush",
  },
  {
    icon: Heart,
    emoji: "💖",
    title: "Irreplaceable",
    message: "There are 8 billion people on this planet, and somehow I found the best one. That's you, bestie!",
    color: "from-heart-red to-warm-pink",
  },
];

const SurpriseCards = () => {
  const [revealed, setRevealed] = useState<Set<number>>(new Set());

  const handleReveal = (index: number) => {
    if (revealed.has(index)) return;
    setRevealed((prev) => new Set(prev).add(index));

    confetti({
      particleCount: 60,
      spread: 80,
      origin: { y: 0.6 },
      colors: ["#e8837c", "#f5c0b8", "#d4657e", "#f0a68c", "#c94c6e"],
    });
  };

  return (
    <section id="surprises" className="px-6 py-20 max-w-5xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-14"
      >
        <h2 className="text-4xl md:text-5xl font-display font-bold mb-4">
          Tap to <span className="text-gradient">Unwrap</span> 🎀
        </h2>
        <p className="text-muted-foreground text-lg">
          Each card holds a little something special. Go ahead, open them all!
        </p>
      </motion.div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {surprises.map((surprise, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
            onClick={() => handleReveal(index)}
            className="cursor-pointer"
          >
            <motion.div
              whileHover={{ scale: 1.03, y: -4 }}
              whileTap={{ scale: 0.97 }}
              className="relative h-64 rounded-2xl overflow-hidden shadow-soft"
            >
              <AnimatePresence mode="wait">
                {!revealed.has(index) ? (
                  <motion.div
                    key="front"
                    exit={{ rotateY: 90, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="absolute inset-0 gradient-card flex flex-col items-center justify-center gap-4 border border-border"
                  >
                    <div className="w-16 h-16 rounded-full bg-secondary flex items-center justify-center text-3xl">
                      {surprise.emoji}
                    </div>
                    <span className="text-muted-foreground font-medium">Tap to reveal</span>
                  </motion.div>
                ) : (
                  <motion.div
                    key="back"
                    initial={{ rotateY: -90, opacity: 0 }}
                    animate={{ rotateY: 0, opacity: 1 }}
                    transition={{ duration: 0.3 }}
                    className={`absolute inset-0 bg-gradient-to-br ${surprise.color} p-6 flex flex-col items-center justify-center text-center text-primary-foreground`}
                  >
                    <surprise.icon className="w-8 h-8 mb-3 fill-current opacity-80" />
                    <h3 className="text-xl font-bold font-display mb-2">{surprise.title}</h3>
                    <p className="text-sm leading-relaxed opacity-90">{surprise.message}</p>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default SurpriseCards;
