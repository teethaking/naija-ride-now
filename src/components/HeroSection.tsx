import { motion } from "framer-motion";
import RideBookingCard from "./RideBookingCard";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen pt-20 md:pt-24 overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-gradient-to-br from-secondary via-background to-background" />
      <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-hero opacity-5 blur-3xl" />
      
      <div className="container mx-auto px-4 py-12 md:py-20 relative">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center lg:text-left"
          >
            <span className="inline-block px-4 py-1.5 bg-primary/10 text-primary rounded-full text-sm font-semibold mb-6">
              🇳🇬 Nigeria's #1 Ride App
            </span>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground leading-tight mb-6">
              Go anywhere with{" "}
              <span className="text-gradient-primary">NaijaRide</span>
            </h1>
            
            <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-xl mx-auto lg:mx-0">
              Request a ride, hop in, and relax. Safe, affordable rides across Lagos, Abuja, Port Harcourt, and 50+ Nigerian cities.
            </p>

            {/* Stats */}
            <div className="flex flex-wrap justify-center lg:justify-start gap-8 mb-8">
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.3 }}
              >
                <p className="text-3xl md:text-4xl font-bold text-foreground">5M+</p>
                <p className="text-sm text-muted-foreground">Happy Riders</p>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.4 }}
              >
                <p className="text-3xl md:text-4xl font-bold text-foreground">50K+</p>
                <p className="text-sm text-muted-foreground">Verified Drivers</p>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.5 }}
              >
                <p className="text-3xl md:text-4xl font-bold text-foreground">50+</p>
                <p className="text-sm text-muted-foreground">Cities</p>
              </motion.div>
            </div>
          </motion.div>

          {/* Right Content - Booking Card */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex justify-center lg:justify-end"
          >
            <RideBookingCard />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
