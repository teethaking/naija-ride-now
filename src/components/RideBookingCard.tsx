import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { MapPin, Navigation, Clock, Car, Zap, Crown } from "lucide-react";
import { motion } from "framer-motion";
import { toast } from "@/hooks/use-toast";
import { useAuth } from "@/contexts/AuthContext";
import { supabase } from "@/integrations/supabase/client";

const rideTypes = [
  {
    id: "economy",
    name: "Economy",
    icon: Car,
    description: "Affordable everyday rides",
    price: "₦800 - ₦1,200",
    eta: "3 min",
  },
  {
    id: "comfort",
    name: "Comfort",
    icon: Zap,
    description: "Newer cars, top drivers",
    price: "₦1,500 - ₦2,500",
    eta: "5 min",
  },
  {
    id: "premium",
    name: "Premium",
    icon: Crown,
    description: "Luxury experience",
    price: "₦3,000 - ₦5,000",
    eta: "8 min",
  },
];

const RideBookingCard = () => {
  const [pickup, setPickup] = useState("");
  const [destination, setDestination] = useState("");
  const [selectedRide, setSelectedRide] = useState("economy");
  const [isBooking, setIsBooking] = useState(false);
  
  const { user } = useAuth();
  const navigate = useNavigate();

  const handleBookRide = async () => {
    if (!user) {
      toast({
        title: "Sign in required",
        description: "Please sign in to book a ride.",
        variant: "destructive",
      });
      navigate("/auth");
      return;
    }

    if (!pickup || !destination) {
      toast({
        title: "Missing Information",
        description: "Please enter both pickup and destination locations.",
        variant: "destructive",
      });
      return;
    }

    setIsBooking(true);
    
    const selectedRideType = rideTypes.find(r => r.id === selectedRide);
    
    const { error } = await supabase.from("ride_orders").insert({
      user_id: user.id,
      pickup_location: pickup,
      destination: destination,
      ride_type: selectedRide,
      estimated_price: selectedRideType?.price || "",
      status: "pending",
    });

    if (error) {
      toast({
        title: "Booking failed",
        description: "Something went wrong. Please try again.",
        variant: "destructive",
      });
    } else {
      toast({
        title: "Ride booked! 🚗",
        description: `Finding your ${selectedRide} driver from ${pickup} to ${destination}`,
      });
      setPickup("");
      setDestination("");
    }
    
    setIsBooking(false);
  };

  return (
    <div className="w-full max-w-md bg-card rounded-2xl shadow-card border border-border overflow-hidden">
      {/* Header */}
      <div className="bg-gradient-hero p-6">
        <h2 className="text-xl font-bold text-primary-foreground mb-1">Book a Ride</h2>
        <p className="text-primary-foreground/80 text-sm">Where are you going?</p>
      </div>

      <div className="p-6 space-y-4">
        {/* Location Inputs */}
        <div className="space-y-3">
          <div className="relative">
            <MapPin className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-primary" />
            <Input
              placeholder="Enter pickup location"
              value={pickup}
              onChange={(e) => setPickup(e.target.value)}
              className="pl-12"
            />
          </div>
          
          <div className="relative">
            <Navigation className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-accent" />
            <Input
              placeholder="Enter destination"
              value={destination}
              onChange={(e) => setDestination(e.target.value)}
              className="pl-12"
            />
          </div>
        </div>

        {/* Ride Type Selection */}
        <div className="space-y-3">
          <p className="text-sm font-medium text-foreground">Select ride type</p>
          <div className="space-y-2">
            {rideTypes.map((ride) => (
              <motion.button
                key={ride.id}
                whileTap={{ scale: 0.98 }}
                onClick={() => setSelectedRide(ride.id)}
                className={`w-full p-4 rounded-xl border-2 transition-all duration-200 text-left ${
                  selectedRide === ride.id
                    ? "border-primary bg-primary/5"
                    : "border-border hover:border-primary/50 bg-background"
                }`}
              >
                <div className="flex items-center gap-4">
                  <div className={`w-12 h-12 rounded-xl flex items-center justify-center ${
                    selectedRide === ride.id ? "bg-gradient-hero" : "bg-secondary"
                  }`}>
                    <ride.icon className={`w-6 h-6 ${
                      selectedRide === ride.id ? "text-primary-foreground" : "text-primary"
                    }`} />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center justify-between">
                      <p className="font-semibold text-foreground">{ride.name}</p>
                      <p className="font-bold text-foreground">{ride.price}</p>
                    </div>
                    <div className="flex items-center justify-between mt-1">
                      <p className="text-sm text-muted-foreground">{ride.description}</p>
                      <span className="flex items-center gap-1 text-xs text-muted-foreground">
                        <Clock className="w-3 h-3" />
                        {ride.eta}
                      </span>
                    </div>
                  </div>
                </div>
              </motion.button>
            ))}
          </div>
        </div>

        {/* Book Button */}
        <Button 
          variant="hero" 
          size="xl" 
          className="w-full"
          onClick={handleBookRide}
          disabled={isBooking}
        >
          {isBooking ? "Booking..." : user ? "Request Ride" : "Sign in to Book"}
        </Button>

        {/* Payment Methods */}
        <p className="text-center text-xs text-muted-foreground">
          Pay with Cash, Card, or Bank Transfer
        </p>
      </div>
    </div>
  );
};

export default RideBookingCard;
