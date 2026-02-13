import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import confetti from "canvas-confetti";
import { Heart } from "lucide-react";

const reasons = [
  "You always know how to make me laugh 😂",
  "You never judge me for my weird choices 🤪",
  "You give the BEST advice, even when I don't ask 💡",
  "Our inside jokes are unmatched 🤫",
  "You hype me up like no one else 🔥",
  "You show up when it matters most 🫶",
  "You make boring things fun 🎉",
  "You're literally my therapist, stylist, and hype woman 👑",
  "You accept me at my worst AND my weirdest 🌈",
  "You're the reason I believe in soulmate friendships 💗",
];

const ReasonsSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [showAll, setShowAll] = useState(false);

  const handleNext = () => {
    if (currentIndex < reasons.length - 1) {
      setCurrentIndex((prev) => prev + 1);
    } else {
      setShowAll(true);
      confetti({
        particleCount: 150,
        spread: 120,
        origin: { y: 0.5 },
        colors: ["#e8837c", "#f5c0b8", "#d4657e", "#f0a68c", "#c94c6e", "#FFD700"],
      });
    }
  };

  return (
    <section className="px-6 py-20 max-w-3xl mx-auto text-center">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        <h2 className="text-4xl md:text-5xl font-display font-bold mb-4">
          10 Reasons You're <span className="text-gradient">Amazing</span> 💫
        </h2>
        <p className="text-muted-foreground text-lg mb-10">
          Keep clicking to unlock each one!
        </p>
      </motion.div>

      <div className="relative min-h-[200px] flex items-center justify-center">
        <AnimatePresence mode="wait">
          {!showAll ? (
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, scale: 0.8, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.8, y: -20 }}
              transition={{ type: "spring", duration: 0.5 }}
              className="gradient-card border border-border rounded-2xl p-8 shadow-soft max-w-lg w-full"
            >
              <div className="text-sm font-medium text-muted-foreground mb-3">
                Reason {currentIndex + 1} of {reasons.length}
              </div>
              <p className="text-xl md:text-2xl font-semibold text-foreground leading-relaxed">
                {reasons[currentIndex]}
              </p>

              {/* Progress dots */}
              <div className="flex justify-center gap-2 mt-6">
                {reasons.map((_, i) => (
                  <div
                    key={i}
                    className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${
                      i <= currentIndex ? "bg-primary scale-110" : "bg-border"
                    }`}
                  />
                ))}
              </div>
            </motion.div>
          ) : (
            <motion.div
              key="final"
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ type: "spring", duration: 0.8 }}
              className="gradient-warm rounded-2xl p-10 shadow-glow max-w-lg w-full"
            >
              <Heart className="w-12 h-12 text-primary-foreground fill-current mx-auto mb-4 animate-heartbeat" />
              <h3 className="text-2xl md:text-3xl font-display font-bold text-primary-foreground mb-3">
                You're Everything! 🥹
              </h3>
              <p className="text-primary-foreground/90 text-lg">
                Honestly, 10 reasons aren't enough. You deserve a whole book.
                Happy Valentine's Day, bestie! 💕
              </p>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {!showAll && (
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={handleNext}
          className="mt-8 inline-flex items-center gap-2 px-8 py-4 rounded-full gradient-button text-primary-foreground font-semibold text-lg shadow-soft"
        >
          {currentIndex < reasons.length - 1 ? "Next Reason 💝" : "See the Grand Finale! 🎆"}
        </motion.button>
      )}
    </section>
  );
};

export default ReasonsSection;
