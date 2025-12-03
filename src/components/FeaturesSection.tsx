import { motion } from "framer-motion";
import { Shield, Wallet, Clock, MapPin, Users, HeadphonesIcon } from "lucide-react";

const features = [
  {
    icon: Shield,
    title: "Safety First",
    description: "All drivers verified with NIN, police clearance, and background checks. Track your ride in real-time.",
  },
  {
    icon: Wallet,
    title: "Pay Your Way",
    description: "Cash, debit cards, bank transfer, or USSD. Multiple payment options for your convenience.",
  },
  {
    icon: Clock,
    title: "Always Available",
    description: "24/7 rides across major cities. Early morning flights? Late night? We've got you covered.",
  },
  {
    icon: MapPin,
    title: "50+ Cities",
    description: "From Lagos to Kano, Abuja to Port Harcourt. NaijaRide is expanding across Nigeria.",
  },
  {
    icon: Users,
    title: "Share & Save",
    description: "Split fare with friends or share your ride with others heading the same way.",
  },
  {
    icon: HeadphonesIcon,
    title: "24/7 Support",
    description: "Our support team speaks your language. Help is just a tap away, anytime.",
  },
];

const FeaturesSection = () => {
  return (
    <section id="safety" className="py-20 bg-secondary/50">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-1.5 bg-primary/10 text-primary rounded-full text-sm font-semibold mb-4">
            Why NaijaRide?
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Built for Nigerians, by Nigerians
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            We understand the unique needs of Nigerian riders and drivers
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group"
            >
              <div className="bg-card rounded-2xl p-6 shadow-card border border-border hover:border-primary/30 transition-all duration-300 h-full">
                <div className="w-14 h-14 bg-gradient-hero rounded-xl flex items-center justify-center mb-5 group-hover:scale-110 transition-transform duration-300">
                  <feature.icon className="w-7 h-7 text-primary-foreground" />
                </div>
                <h3 className="text-xl font-bold text-foreground mb-3">{feature.title}</h3>
                <p className="text-muted-foreground">{feature.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
