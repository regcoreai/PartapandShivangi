import { WeddingHero } from "@/components/wedding-hero";
import { EventTimeline } from "@/components/event-timeline";
import { GallerySection } from "@/components/gallery-section";
import { InformalMoments } from "@/components/informal-moments";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import confetti from "canvas-confetti";
import { useEffect } from "react";

// Asset imports
import heroImage from "@assets/12854145-28e3-4042-a37b-0e4a844584b4_1764218627020.JPG";
import secondaryImage from "@assets/IMG_5565_1764218631686.JPG";
import patternImage from "@assets/generated_images/subtle_indian_luxury_floral_background_pattern.png";
import moment1 from "@assets/WhatsApp_Image_2026-01-15_at_3.27.53_PM_1768662032810.jpeg";
import moment2 from "@assets/WhatsApp_Image_2026-01-15_at_3.28.01_PM_1768662032810.jpeg";
import moment3 from "@assets/WhatsApp_Image_2026-01-15_at_3.28.26_PM_1768662032810.jpeg";
import moment4 from "@assets/WhatsApp_Image_2026-01-15_at_3.28.36_PM_1768662032810.jpeg";
import moment5 from "@assets/WhatsApp_Image_2026-01-15_at_3.19.07_PM_1768662032810.jpeg";
import moment6 from "@assets/IMG_0929_1764219353474.JPG";
import moment7 from "@assets/IMG_5763_1764219353474.JPG";
import moment8 from "@assets/IMG_3068_1764219932730.jpg";
import moment9 from "@assets/IMG_6292_1764219932730.jpg";
import moment10 from "@assets/IMG_5358_2_1764219693898.jpg";
import moment11 from "@assets/IMG_5497_1764219693898.jpg";
import moment12 from "@assets/IMG_5826_1764219693898.jpg";
import moment13 from "@assets/IMG_5942_1764219693898.jpg";
import moment14 from "@assets/IMG_6064_1764219693898.jpg";

export default function WeddingPage() {
  useEffect(() => {
    // Wedding theme colors: Burgundy, Gold, Cream
    const colors = ['#A14558', '#D4AF37', '#F5EDC9'];
    const duration = 3 * 1000;
    const animationEnd = Date.now() + duration;

    // Function to trigger confetti from sides
    const randomInRange = (min: number, max: number) => Math.random() * (max - min) + min;

    const interval = setInterval(function() {
      const timeLeft = animationEnd - Date.now();

      if (timeLeft <= 0) {
        return clearInterval(interval);
      }

      const particleCount = 40 * (timeLeft / duration);
      
      // Confetti from left
      confetti({
        particleCount,
        startVelocity: 30,
        spread: 360,
        origin: { x: randomInRange(0.1, 0.3), y: Math.random() - 0.2 },
        colors: colors,
        disableForReducedMotion: true,
        zIndex: 50
      });
      
      // Confetti from right
      confetti({
        particleCount,
        startVelocity: 30,
        spread: 360,
        origin: { x: randomInRange(0.7, 0.9), y: Math.random() - 0.2 },
        colors: colors,
        disableForReducedMotion: true,
        zIndex: 50
      });
    }, 250);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="min-h-screen bg-background text-foreground font-sans selection:bg-primary/20 selection:text-primary">
      
      <WeddingHero imageSrc={heroImage} />

      <div className="relative">
        {/* Pattern Background for the main content area */}
        <div 
          className="absolute inset-0 opacity-[0.05] pointer-events-none z-0 mix-blend-multiply"
          style={{ backgroundImage: `url(${patternImage})`, backgroundSize: '400px' }}
        />

        <div className="relative z-10">
          <section className="py-20 md:py-32 text-center px-4 max-w-3xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <span className="text-primary uppercase tracking-[0.3em] text-xs font-semibold mb-4 block">
                Save The Date
              </span>
              <h2 className="font-heading text-4xl md:text-6xl mb-8 leading-tight">
                We are getting married
              </h2>
              <div className="w-24 h-1 bg-primary/20 mx-auto mb-8" />
              <p className="text-muted-foreground text-lg md:text-xl leading-relaxed font-light">
                With the blessings of our parents and the grace of the Almighty, 
                we joyfully invite you to share in our happiness as we celebrate our wedding.
              </p>
            </motion.div>
          </section>

          <GallerySection 
            image1={heroImage}
            image2={secondaryImage}
            pattern={patternImage}
          />

          <EventTimeline />

          <section className="py-24 bg-primary text-primary-foreground text-center px-4">
            <div className="max-w-2xl mx-auto space-y-8">
              <h2 className="font-heading text-5xl">Join Us</h2>
              <p className="text-primary-foreground/80 text-lg">
                We can't wait to celebrate with you. 
              </p>
            </div>
          </section>

          <InformalMoments images={[
            moment1, moment2, moment3, moment4, 
            moment5, moment6, moment7, moment8, moment9,
            moment10, moment11, moment12
          ]} />

          <footer className="py-12 text-center text-muted-foreground text-sm border-t border-border/40 bg-white/50 backdrop-blur-sm">
            <p className="font-heading text-xl mb-2">Shivangi & Partap</p>
            <p className="opacity-60">#ShivangiWedsPartap • 2026</p>
          </footer>
        </div>
      </div>
    </div>
  );
}
