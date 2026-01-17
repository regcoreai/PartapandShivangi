import { motion } from "framer-motion";

interface WeddingHeroProps {
  imageSrc: string;
}

export function WeddingHero({ imageSrc }: WeddingHeroProps) {
  return (
    <section className="relative h-screen w-full overflow-hidden flex items-center justify-center">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src={imageSrc}
          alt="Partap & Shivangi"
          className="w-full h-full object-cover object-top"
          loading="eager"
          decoding="async"
        />
        <div className="absolute inset-0 bg-black/30 mix-blend-multiply" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center text-white px-4 max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
        >
          <h2 className="font-sans tracking-[0.2em] uppercase text-sm md:text-lg mb-4 opacity-90">
            The Wedding Celebration of
          </h2>
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
        >
          <h1 className="font-heading text-6xl md:text-8xl lg:text-9xl mb-6 leading-none tracking-tight">
            Shivangi <span className="text-secondary italic text-5xl md:text-7xl align-middle mx-2">&</span> Partap
          </h1>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.8 }}
          className="flex flex-col items-center gap-2"
        >
          <div className="h-px w-24 bg-secondary/80 mb-4" />
          <p className="font-heading text-2xl md:text-3xl italic text-secondary-foreground/10 text-white/90">
            February 2026
          </p>
          <p className="font-sans text-sm tracking-widest uppercase opacity-80 mt-2">
            Punjab, India
          </p>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        className="absolute bottom-10 left-1/2 -translate-x-1/2 z-10"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
      >
        <div className="w-[1px] h-16 bg-gradient-to-b from-white/0 via-white/50 to-white/0" />
      </motion.div>
    </section>
  );
}
