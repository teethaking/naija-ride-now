import { Car, Facebook, Twitter, Instagram, Linkedin } from "lucide-react";

const Footer = () => {
  const footerLinks = {
    company: [
      { label: "About Us", href: "#about" },
      { label: "Careers", href: "#" },
      { label: "Press", href: "#" },
      { label: "Blog", href: "#" },
    ],
    riders: [
      { label: "How it works", href: "#" },
      { label: "Safety", href: "#safety" },
      { label: "Cities", href: "#" },
      { label: "Pricing", href: "#" },
    ],
    drivers: [
      { label: "Become a driver", href: "#drive" },
      { label: "Driver app", href: "#" },
      { label: "Requirements", href: "#" },
      { label: "Earnings", href: "#" },
    ],
    support: [
      { label: "Help Center", href: "#" },
      { label: "Contact Us", href: "#" },
      { label: "Lost & Found", href: "#" },
      { label: "Accessibility", href: "#" },
    ],
  };

  return (
    <footer id="about" className="bg-foreground text-background">
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-2 md:grid-cols-5 gap-8">
          {/* Brand */}
          <div className="col-span-2 md:col-span-1">
            <a href="/" className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 bg-accent rounded-xl flex items-center justify-center">
                <Car className="w-6 h-6 text-accent-foreground" />
              </div>
              <span className="text-xl font-bold">NaijaRide</span>
            </a>
            <p className="text-background/60 text-sm mb-4">
              Nigeria's most trusted ride-hailing platform. Safe, affordable, reliable.
            </p>
            <div className="flex gap-3">
              <a href="#" className="w-10 h-10 bg-background/10 hover:bg-accent hover:text-accent-foreground rounded-lg flex items-center justify-center transition-colors">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 bg-background/10 hover:bg-accent hover:text-accent-foreground rounded-lg flex items-center justify-center transition-colors">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 bg-background/10 hover:bg-accent hover:text-accent-foreground rounded-lg flex items-center justify-center transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 bg-background/10 hover:bg-accent hover:text-accent-foreground rounded-lg flex items-center justify-center transition-colors">
                <Linkedin className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Links */}
          <div>
            <h4 className="font-semibold mb-4">Company</h4>
            <ul className="space-y-3">
              {footerLinks.company.map((link) => (
                <li key={link.label}>
                  <a href={link.href} className="text-background/60 hover:text-accent text-sm transition-colors">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">For Riders</h4>
            <ul className="space-y-3">
              {footerLinks.riders.map((link) => (
                <li key={link.label}>
                  <a href={link.href} className="text-background/60 hover:text-accent text-sm transition-colors">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">For Drivers</h4>
            <ul className="space-y-3">
              {footerLinks.drivers.map((link) => (
                <li key={link.label}>
                  <a href={link.href} className="text-background/60 hover:text-accent text-sm transition-colors">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Support</h4>
            <ul className="space-y-3">
              {footerLinks.support.map((link) => (
                <li key={link.label}>
                  <a href={link.href} className="text-background/60 hover:text-accent text-sm transition-colors">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-background/10 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-background/60 text-sm">
            © 2024 NaijaRide Technologies Ltd. All rights reserved.
          </p>
          <div className="flex gap-6">
            <a href="#" className="text-background/60 hover:text-accent text-sm transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="text-background/60 hover:text-accent text-sm transition-colors">
              Terms of Service
            </a>
            <a href="#" className="text-background/60 hover:text-accent text-sm transition-colors">
              Cookie Policy
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
