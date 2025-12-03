import { motion } from "framer-motion";
import { MapPin, ArrowRight } from "lucide-react";

const destinations = [
  {
    name: "Murtala Muhammed Airport",
    city: "Lagos",
    trips: "50K+ trips/month",
    image: "https://images.unsplash.com/photo-1436491865332-7a61a109cc05?w=400&h=300&fit=crop",
  },
  {
    name: "Lekki Phase 1",
    city: "Lagos",
    trips: "40K+ trips/month",
    image: "https://images.unsplash.com/photo-1449824913935-59a10b8d2000?w=400&h=300&fit=crop",
  },
  {
    name: "Victoria Island",
    city: "Lagos",
    trips: "35K+ trips/month",
    image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=400&h=300&fit=crop",
  },
  {
    name: "Wuse 2",
    city: "Abuja",
    trips: "25K+ trips/month",
    image: "https://images.unsplash.com/photo-1477959858617-67f85cf4f1df?w=400&h=300&fit=crop",
  },
];

const PopularDestinations = () => {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Popular Destinations
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Most requested pickup and drop-off locations across Nigeria
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {destinations.map((dest, index) => (
            <motion.div
              key={dest.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -5 }}
              className="group cursor-pointer"
            >
              <div className="bg-card rounded-2xl overflow-hidden shadow-card border border-border hover:border-primary/30 transition-all duration-300">
                <div className="relative h-40 overflow-hidden">
                  <img
                    src={dest.image}
                    alt={dest.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-foreground/60 to-transparent" />
                  <div className="absolute bottom-3 left-3 right-3">
                    <p className="text-primary-foreground font-semibold">{dest.name}</p>
                  </div>
                </div>
                <div className="p-4">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2 text-muted-foreground">
                      <MapPin className="w-4 h-4" />
                      <span className="text-sm">{dest.city}</span>
                    </div>
                    <span className="text-xs text-primary font-medium">{dest.trips}</span>
                  </div>
                  <div className="mt-3 flex items-center gap-2 text-primary font-medium text-sm group-hover:gap-3 transition-all">
                    Book ride <ArrowRight className="w-4 h-4" />
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PopularDestinations;
