import { motion } from "framer-motion";
import { MapPin, Clock, Wine, Palette, Heart, Castle, Flame, Brush, PenLine, Star, BookOpen, Sparkles, Moon, User, Users, Shirt } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

import roughPaper from "@assets/stock_images/cream_colored_rough__bb718a23.jpg";

interface Event {
  title: string;
  date: string;
  day: string;
  time?: string;
  location: string;
  description?: string;
  theme?: string;
  colorPalette?: string[];
  dressCode?: {
    title: string;
    women: string;
    men: string;
    style: string;
  };
  colorCode: string;
  Icon: any;
}

const events: Event[] = [
  {
    title: "Sundarkand Path",
    day: "Sunday",
    date: "Feb 1, 2026",
    time: "3:00 PM",
    location: "Ram Niwas, Hoshiarpur",
    description: "A sacred prayer to invoke blessings for the journey ahead.",
    colorCode: "#800020", // Deep Maroon
    Icon: Flame,
  },
  {
    title: "Haldi Ceremony",
    day: "Monday",
    date: "Feb 2, 2026",
    time: "11:00 AM",
    location: "Amber Residency, Hoshiarpur",
    description: "A joyous beginning with turmeric and blessings.",
    colorPalette: ["#D9C77A", "#C2B0D6", "#9BA9B6", "#D69C9B", "#76813E"],
    colorCode: "#D4AF37", // Darker Golden/Yellow for Haldi
    Icon: Brush,
  },
  {
    title: "The Royal Cocktail Ball",
    day: "Monday",
    date: "Feb 2, 2026",
    time: "8:00 PM",
    location: "Amber Residency, Hoshiarpur",
    description: "An elegant evening of music, dance, and celebration.",
    dressCode: {
      title: "Ballroom Elegance, Black-Tie Glam",
      women: "Sarees & Evening Gowns in lace",
      men: "Tuxedos, Bandhgalas, Jodhpuri Suits & Tailored Blazers",
      style: "Velvet, silk, satin, organza & chiffon"
    },
    colorCode: "#1E1B4B", // Deep Midnight Blue
    Icon: Wine,
  },
  {
    title: "Mehndi",
    day: "Tuesday",
    date: "Feb 3, 2026",
    time: "11:00 AM",
    location: "Amber Residency, Hoshiarpur",
    description: "Adorning hands with henna and hearts with love.",
    colorPalette: ["#E3A125", "#D4621C", "#D96A63", "#D23A5E", "#9B0F33", "#5F6B3E"],
    colorCode: "#DB2777", // Pink theme
    Icon: PenLine,
  },
  {
    title: "Hindu Wedding",
    day: "Wednesday",
    date: "Feb 4, 2026",
    time: "8:00 PM",
    location: "Golden Heritage, Hoshiarpur",
    description: "Sacred union with mantras and pheras around the holy fire.",
    colorCode: "#D4AF37", // Golden theme
    Icon: Heart,
  },
  {
    title: "Anand Karaj",
    day: "Friday",
    date: "Feb 6, 2026",
    time: "10:00 AM",
    location: "Gurudwara Chhevin Patshahi, Amritsar",
    description: "The Anand Karaj ceremony in the holy city.",
    colorPalette: ["#B6400E", "#91340B", "#6D2608"],
    colorCode: "#F5F5DC", // Creamy white
    Icon: Castle,
  },
];

const DecorativeElement = ({ className }: { className?: string }) => (
  <div className={`hidden lg:flex flex-col items-center space-y-8 opacity-20 ${className}`}>
    {[...Array(6)].map((_, i) => (
      <div key={i} className="flex flex-col items-center space-y-4">
        <Star className="w-4 h-4 text-primary animate-pulse" />
        <div className="w-px h-24 bg-gradient-to-b from-primary via-transparent to-primary" />
        <div className="w-2 h-2 rounded-full bg-primary" />
      </div>
    ))}
  </div>
);

export function EventTimeline() {
  return (
    <section className="py-24 px-4 md:px-8 relative overflow-hidden">
      <DecorativeElement className="absolute left-8 top-0 h-full" />
      <DecorativeElement className="absolute right-8 top-0 h-full" />
      
      <div className="absolute top-1/4 -left-20 w-64 h-64 bg-primary/5 rounded-full blur-3xl -z-10" />
      <div className="absolute bottom-1/4 -right-20 w-64 h-64 bg-secondary/10 rounded-full blur-3xl -z-10" />

      <div className="max-w-5xl mx-auto relative">
        <div className="text-center mb-16">
          <h2 className="font-heading text-4xl md:text-5xl text-primary mb-4">
            Wedding Itinerary
          </h2>
          <p className="font-sans text-muted-foreground tracking-wide uppercase text-sm">
            Join us in our celebrations
          </p>
        </div>

        <div className="relative space-y-8 before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-border/60 before:to-transparent">
          {events.map((event, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className={`relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group`}
            >
              <div 
                className="flex items-center justify-center w-10 h-10 rounded-full border-4 border-background shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 shadow-lg z-10 transition-transform duration-300 group-hover:scale-110"
                style={{ backgroundColor: event.colorCode }}
              >
                <event.Icon className={`w-4 h-4 ${event.colorCode === '#F5F5DC' ? 'text-primary' : 'text-white'}`} />
              </div>

              <Card className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] bg-white border-border/60 hover:border-primary/40 transition-all duration-500 shadow-sm hover:shadow-2xl overflow-hidden group/card relative">
                {/* Rough Paper Texture Background */}
                <div 
                  className="absolute inset-0 opacity-[0.15] pointer-events-none mix-blend-multiply grayscale"
                  style={{ backgroundImage: `url(${roughPaper})`, backgroundSize: 'cover' }}
                />
                
                <div className="relative z-10">
                  <div className="relative h-1.5 w-full overflow-hidden" style={{ backgroundColor: event.colorCode }}>
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/40 to-transparent -translate-x-full group-hover/card:translate-x-full transition-transform duration-1000" />
                  </div>
                  
                  <CardContent className="p-6 md:p-8">
                    <div className="flex justify-between items-start mb-4">
                      <span className="inline-block px-3 py-1 rounded-full text-[10px] font-bold bg-secondary/80 text-secondary-foreground uppercase tracking-[0.2em] shadow-sm">
                        {event.day}
                      </span>
                      <span className="text-sm font-heading italic text-foreground font-bold text-xl">
                        {event.date}
                      </span>
                    </div>
                    
                    <h3 className="font-heading text-2xl md:text-4xl mb-4 font-bold tracking-tight transition-colors" style={{ color: event.colorCode === '#F5F5DC' ? '#B8860B' : event.colorCode }}>
                      {event.title}
                    </h3>
                    
                    <div className="space-y-3 text-sm text-muted-foreground font-sans mb-6">
                      <div className="flex items-center gap-3">
                        <Clock className="w-4 h-4 text-primary/60" />
                        <span className="font-medium tracking-tight text-foreground/80">{event.time}</span>
                      </div>
                      <div className="flex items-center gap-3">
                        <MapPin className="w-4 h-4 text-primary/60" />
                        <span className="font-medium tracking-tight text-foreground/80">{event.location}</span>
                      </div>
                      {event.theme && (
                         <div className="flex items-center gap-3">
                           <Palette className="w-4 h-4 text-primary/60" />
                           <span className="font-bold text-xs uppercase tracking-widest" style={{ color: event.colorCode === '#F5F5DC' ? '#B8860B' : event.colorCode }}>
                             Theme: {event.theme}
                           </span>
                         </div>
                      )}
                      {event.colorPalette && (
                        <div className="flex gap-2 mt-1">
                          {event.colorPalette.map((color, i) => (
                            <div 
                              key={i} 
                              className="w-6 h-6 rounded-full border border-border shadow-sm"
                              style={{ backgroundColor: color }}
                              title={color}
                            />
                          ))}
                        </div>
                      )}
                      {event.dressCode && (
                        <div className="space-y-3 pt-1">
                          <div className="flex items-start gap-3">
                            <Palette className="w-4 h-4 text-primary/60 mt-0.5 shrink-0" />
                            <div className="flex flex-col">
                              <span className="font-bold text-xs uppercase tracking-widest text-primary/80">Theme</span>
                              <span className="text-sm font-medium text-foreground/90">{event.dressCode.title}</span>
                            </div>
                          </div>
                          <div className="flex items-start gap-3">
                            <Users className="w-4 h-4 text-primary/60 mt-0.5 shrink-0" />
                            <div className="flex flex-col">
                              <span className="font-bold text-xs uppercase tracking-widest text-primary/80">Women</span>
                              <span className="text-sm font-medium text-foreground/90 leading-relaxed">{event.dressCode.women}</span>
                            </div>
                          </div>
                          <div className="flex items-start gap-3">
                            <User className="w-4 h-4 text-primary/60 mt-0.5 shrink-0" />
                            <div className="flex flex-col">
                              <span className="font-bold text-xs uppercase tracking-widest text-primary/80">Men</span>
                              <span className="text-sm font-medium text-foreground/90 leading-relaxed">{event.dressCode.men}</span>
                            </div>
                          </div>
                          <div className="flex items-start gap-3">
                            <Shirt className="w-4 h-4 text-primary/60 mt-0.5 shrink-0" />
                            <div className="flex flex-col">
                              <span className="font-bold text-xs uppercase tracking-widest text-primary/80">Style</span>
                              <span className="text-sm font-medium text-foreground/90 italic leading-relaxed">{event.dressCode.style}</span>
                            </div>
                          </div>
                        </div>
                      )}
                    </div>

                    {event.description && (
                      <div className="relative mt-6 pt-6 border-t border-border/40">
                        <p className="text-foreground/80 font-heading italic leading-relaxed text-lg">
                          {event.description}
                        </p>
                        <div className="absolute top-0 left-0 w-12 h-[2px]" style={{ backgroundColor: event.colorCode }} />
                      </div>
                    )}
                  </CardContent>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
