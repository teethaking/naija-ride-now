import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Smartphone, QrCode } from "lucide-react";

const DownloadApp = () => {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="bg-gradient-card rounded-3xl border border-border shadow-card p-8 md:p-12 lg:p-16">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
                Download the{" "}
                <span className="text-gradient-primary">NaijaRide</span>{" "}
                App
              </h2>
              <p className="text-muted-foreground text-lg mb-8">
                Get the app and start riding in minutes. Available on iOS and Android.
              </p>

              <div className="flex flex-wrap gap-4 mb-8">
                <Button variant="default" size="lg" className="gap-3">
                  <svg viewBox="0 0 24 24" className="w-6 h-6 fill-current">
                    <path d="M17.05 20.28c-.98.95-2.05.8-3.08.35-1.09-.46-2.09-.48-3.24 0-1.44.62-2.2.44-3.06-.35C2.79 15.25 3.51 7.59 9.05 7.31c1.35.07 2.29.74 3.08.8 1.18-.24 2.31-.93 3.57-.84 1.51.12 2.65.72 3.4 1.8-3.12 1.87-2.38 5.98.48 7.13-.57 1.5-1.31 2.99-2.54 4.09l.01-.01zM12.03 7.25c-.15-2.23 1.66-4.07 3.74-4.25.29 2.58-2.34 4.5-3.74 4.25z"/>
                  </svg>
                  App Store
                </Button>
                <Button variant="default" size="lg" className="gap-3">
                  <svg viewBox="0 0 24 24" className="w-6 h-6 fill-current">
                    <path d="M3.609 1.814L13.792 12 3.61 22.186a.996.996 0 01-.61-.92V2.734a1 1 0 01.609-.92zm10.89 10.893l2.302 2.302-10.937 6.333 8.635-8.635zm3.199-3.198l2.807 1.626a1 1 0 010 1.73l-2.808 1.626L15.206 12l2.492-2.491zM5.864 2.658L16.8 8.99l-2.302 2.302-8.634-8.634z"/>
                  </svg>
                  Google Play
                </Button>
              </div>

              <div className="flex items-center gap-6 p-4 bg-secondary rounded-xl">
                <div className="w-20 h-20 bg-foreground rounded-xl flex items-center justify-center">
                  <QrCode className="w-12 h-12 text-background" />
                </div>
                <div>
                  <p className="font-semibold text-foreground mb-1">Scan to download</p>
                  <p className="text-sm text-muted-foreground">Point your camera at the QR code</p>
                </div>
              </div>
            </motion.div>

            {/* Right Content - Phone Mockup */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="flex justify-center"
            >
              <div className="relative">
                {/* Phone Frame */}
                <div className="relative w-64 h-[500px] bg-foreground rounded-[3rem] p-3 shadow-2xl">
                  <div className="w-full h-full bg-gradient-hero rounded-[2.5rem] overflow-hidden flex flex-col items-center justify-center">
                    {/* Notch */}
                    <div className="absolute top-6 w-24 h-6 bg-foreground rounded-full" />
                    
                    {/* App Content Preview */}
                    <div className="text-center px-6">
                      <div className="w-16 h-16 bg-primary-foreground/20 rounded-2xl flex items-center justify-center mx-auto mb-4">
                        <Smartphone className="w-8 h-8 text-primary-foreground" />
                      </div>
                      <p className="text-primary-foreground font-bold text-xl mb-2">NaijaRide</p>
                      <p className="text-primary-foreground/70 text-sm">Your ride is arriving...</p>
                    </div>
                  </div>
                </div>

                {/* Floating Elements */}
                <motion.div
                  animate={{ y: [-5, 5, -5] }}
                  transition={{ duration: 3, repeat: Infinity }}
                  className="absolute -top-4 -right-4 bg-accent rounded-xl px-4 py-2 shadow-lg"
                >
                  <p className="text-accent-foreground font-bold text-sm">₦500 off!</p>
                </motion.div>
                <motion.div
                  animate={{ y: [5, -5, 5] }}
                  transition={{ duration: 3, repeat: Infinity }}
                  className="absolute bottom-20 -left-8 bg-card rounded-xl px-4 py-3 shadow-lg border border-border"
                >
                  <p className="text-foreground font-semibold text-sm">Driver arriving</p>
                  <p className="text-primary text-xs">2 min away</p>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DownloadApp;
