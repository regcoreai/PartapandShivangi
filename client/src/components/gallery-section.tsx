import { motion } from "framer-motion";

interface GallerySectionProps {
  image1: string;
  image2: string;
  journeyImage: string;
  pattern: string;
}

export function GallerySection({ image1, image2, journeyImage, pattern }: GallerySectionProps) {
  return (
    <section className="py-24 relative overflow-hidden bg-stone-50">
      {/* Background Pattern Overlay */}
      <div 
        className="absolute inset-0 opacity-[0.03] pointer-events-none mix-blend-multiply"
        style={{ backgroundImage: `url(${pattern})`, backgroundSize: '400px' }}
      />
      
      <div className="max-w-7xl mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-24 items-center mb-24">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="aspect-[3/4] overflow-hidden rounded-sm shadow-xl relative group">
              <div className="absolute inset-0 border-[1px] border-white/20 z-20 m-4" />
              <img 
                src={image2} 
                alt="Couple Portrait" 
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                fetchPriority="high"
                decoding="async"
                loading="eager"
              />
            </div>
            {/* Decorative elements */}
            <div className="absolute -top-6 -left-6 w-24 h-24 border-t-2 border-l-2 border-primary/20" />
            <div className="absolute -bottom-6 -right-6 w-24 h-24 border-b-2 border-r-2 border-primary/20" />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="space-y-8 text-center md:text-left"
          >
            <h2 className="font-heading text-5xl md:text-6xl text-primary">
              Our Journey
            </h2>
            <p className="font-sans text-lg leading-relaxed text-muted-foreground">
              From Hoshiarpur to Amritsar, we invite you to join us as we embark on our greatest adventure yet. 
              Two families coming together, two hearts becoming one, in the presence of the divine and our loved ones.
            </p>
            
            <div className="pt-8">
               <p className="font-heading text-3xl italic text-secondary-foreground/60">
                "Together is a beautiful place to be."
               </p>
            </div>
          </motion.div>
        </div>

        {/* New Elegant Journey Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-24 items-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="order-2 md:order-1 space-y-6 text-center md:text-right"
          >
            <div className="inline-block px-4 py-1 bg-primary/5 rounded-full text-primary text-xs uppercase tracking-widest font-semibold mb-2">
              The Celebration
            </div>
            <h3 className="font-heading text-4xl md:text-5xl text-primary">
              A New Chapter
            </h3>
            <p className="font-sans text-lg leading-relaxed text-muted-foreground italic">
              "Love is not about how many days, months, or years you have been together. Love is about how much you love each other every single day."
            </p>
            <p className="font-sans text-muted-foreground/80">
              As we prepare to take our vows, we reflect on the moments that brought us here—the laughter shared, the dreams built, and the love that continues to grow. We are honored to have you by our side as we begin this sacred union.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="order-1 md:order-2 relative"
          >
            <div className="aspect-[4/5] overflow-hidden rounded-sm shadow-2xl relative group bg-white p-2">
              <img 
                src={journeyImage} 
                alt="Elegant Journey Moment" 
                className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
                fetchPriority="high"
                decoding="async"
                loading="eager"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent pointer-events-none" />
            </div>
            {/* Decorative frame overlap */}
            <div className="absolute -bottom-8 -left-8 w-48 h-48 bg-primary/5 -z-10 rounded-full blur-3xl opacity-50" />
            <div className="absolute -top-8 -right-8 w-48 h-48 bg-gold/5 -z-10 rounded-full blur-3xl opacity-50" />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
