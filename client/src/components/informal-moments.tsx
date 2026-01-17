import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";

interface InformalMomentsProps {
  images: string[];
}

export function InformalMoments({ images }: InformalMomentsProps) {
  // Use all provided images
  const displayImages = images;

  return (
    <section className="py-32 bg-stone-900 relative overflow-hidden">
      {/* Texture Overlay */}
      <div className="absolute inset-0 opacity-20 bg-[url('https://www.transparenttextures.com/patterns/stardust.png')]" />
      
      <div className="max-w-7xl mx-auto px-4 relative z-10">
        <div className="text-center mb-20">
          <motion.div
             initial={{ opacity: 0, y: 20 }}
             whileInView={{ opacity: 1, y: 0 }}
             viewport={{ once: true }}
          >
            <h2 className="font-heading text-5xl md:text-7xl text-secondary mb-6">
              Us, Unfiltered
            </h2>
            <p className="font-sans text-white/60 tracking-[0.3em] uppercase text-sm">
              Behind the scenes of our love story
            </p>
          </motion.div>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-3 md:gap-4">
          {displayImages.map((src, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              whileHover={{ y: -5, scale: 1.02, zIndex: 10 }}
              transition={{ duration: 0.4, delay: index * 0.03 }}
              viewport={{ once: true }}
              className={`
                ${index === 0 ? 'md:col-span-2 md:row-span-2' : ''}
              `}
            >
              <Card className="bg-white p-1.5 shadow-lg border-none h-full transform transition-all duration-300 hover:shadow-gold/20">
                <CardContent className="p-0 h-full flex flex-col">
                  <div className={`relative overflow-hidden bg-gray-100 ${index === 0 ? 'aspect-square' : 'aspect-[3/4]'} flex-1`}>
                    <img
                      src={src}
                      alt={`Unfiltered Moment ${index + 1}`}
                      className="w-full h-full object-cover filter sepia-[0.05] contrast-105"
                      loading="lazy"
                      decoding="async"
                    />
                  </div>
                  <div className="pt-1.5 pb-0.5 text-center font-heading text-xs md:text-sm text-gray-400 italic">
                    {["Just us", "Together", "Adventures", "Always", "Smiles", "Love", "Together"][index % 7]}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        <div className="mt-16 text-center">
           <motion.p 
             initial={{ opacity: 0 }}
             whileInView={{ opacity: 1 }}
             className="font-heading text-2xl md:text-4xl italic text-secondary/60 max-w-2xl mx-auto leading-relaxed"
           >
             "Real love is messy, fun, and always beautiful."
           </motion.p>
        </div>
      </div>
    </section>
  );
}
