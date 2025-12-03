import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Check, Car, Banknote, Calendar, ArrowRight } from "lucide-react";

const benefits = [
  "Earn up to ₦500,000/month",
  "Weekly payouts guaranteed",
  "Flexible working hours",
  "Vehicle financing available",
  "Insurance coverage included",
  "24/7 driver support",
];

const DriveWithUs = () => {
  return (
    <section id="drive" className="py-20 bg-gradient-hero relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-20 w-64 h-64 rounded-full bg-accent blur-3xl" />
        <div className="absolute bottom-20 right-20 w-96 h-96 rounded-full bg-primary-foreground blur-3xl" />
      </div>

      <div className="container mx-auto px-4 relative">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <span className="inline-block px-4 py-1.5 bg-primary-foreground/20 text-primary-foreground rounded-full text-sm font-semibold mb-6">
              Become a Driver Partner
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-primary-foreground mb-6">
              Drive & Earn with NaijaRide
            </h2>
            <p className="text-primary-foreground/80 text-lg mb-8">
              Join over 50,000 driver partners earning money on their own schedule. 
              Get paid weekly with instant withdrawals available.
            </p>

            <div className="grid grid-cols-2 gap-4 mb-8">
              {benefits.map((benefit) => (
                <div key={benefit} className="flex items-center gap-3">
                  <div className="w-6 h-6 rounded-full bg-accent flex items-center justify-center flex-shrink-0">
                    <Check className="w-4 h-4 text-accent-foreground" />
                  </div>
                  <span className="text-primary-foreground/90 text-sm">{benefit}</span>
                </div>
              ))}
            </div>

            <Button 
              variant="accent" 
              size="xl"
              className="group"
            >
              Start Driving Today
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Button>
          </motion.div>

          {/* Right Content - Stats Cards */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="grid grid-cols-2 gap-4"
          >
            <div className="bg-primary-foreground/10 backdrop-blur-sm rounded-2xl p-6 border border-primary-foreground/20">
              <Car className="w-10 h-10 text-accent mb-4" />
              <p className="text-3xl font-bold text-primary-foreground mb-1">50K+</p>
              <p className="text-primary-foreground/70 text-sm">Active Drivers</p>
            </div>
            <div className="bg-primary-foreground/10 backdrop-blur-sm rounded-2xl p-6 border border-primary-foreground/20">
              <Banknote className="w-10 h-10 text-accent mb-4" />
              <p className="text-3xl font-bold text-primary-foreground mb-1">₦10B+</p>
              <p className="text-primary-foreground/70 text-sm">Paid to Drivers</p>
            </div>
            <div className="bg-primary-foreground/10 backdrop-blur-sm rounded-2xl p-6 border border-primary-foreground/20">
              <Calendar className="w-10 h-10 text-accent mb-4" />
              <p className="text-3xl font-bold text-primary-foreground mb-1">Weekly</p>
              <p className="text-primary-foreground/70 text-sm">Guaranteed Payouts</p>
            </div>
            <div className="bg-accent rounded-2xl p-6 flex flex-col items-center justify-center text-center">
              <p className="text-accent-foreground font-bold text-lg mb-2">Ready to start?</p>
              <p className="text-accent-foreground/80 text-sm">Sign up in 5 minutes</p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default DriveWithUs;
