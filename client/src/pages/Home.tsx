import { motion } from "framer-motion";
import { ArrowRight, CheckCircle2, Factory, Warehouse, ShieldAlert } from "lucide-react";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { ContactForm } from "@/components/ContactForm";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-secondary text-white min-h-[80vh] flex items-center overflow-hidden">
        {/* Abstract Background Overlay */}
        <div className="absolute inset-0 z-0 opacity-20 bg-[url('https://pixabay.com/get/g5a16d006c6fe9da0655edf5ebbabad96b0c5fe613cbce5a714c8dd42888ce54ca843b0beaa561a9593e0a41d35c9f5e5fbc9fba7943058c199cb2ed4849dea99_1280.jpg')] bg-cover bg-center"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-secondary via-secondary/95 to-secondary/60 z-10"></div>
        
        <div className="container-wide relative z-20 pt-20 pb-16">
          <div className="max-w-3xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h1 className="text-5xl md:text-7xl font-bold font-display uppercase tracking-tight leading-none mb-6">
                Precision <span className="text-primary">Line Marking</span> & Safety Flooring
              </h1>
              <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-2xl leading-relaxed">
                Christchurch's premier industrial safety experts. NZTA-approved materials, 
                compliant safety markings, and durable industrial flooring solutions.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="/contact">
                  <Button size="lg" className="text-lg px-8 py-6 bg-primary text-primary-foreground hover:bg-primary/90 font-bold uppercase">
                    Get a Quote
                  </Button>
                </Link>
                <Link href="/Our-Services/Line-Marking/">
                  <Button size="lg" variant="outline" className="text-lg px-8 py-6 border-white text-white hover:bg-white hover:text-secondary font-bold uppercase">
                    View Services
                  </Button>
                </Link>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Hazard Stripe Bottom Bar */}
        <div className="absolute bottom-0 w-full h-4 bg-hazard"></div>
      </section>

      {/* Services Grid */}
      <section className="section-padding bg-background">
        <div className="container-wide">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold font-display uppercase text-secondary mb-4">Our Core Services</h2>
            <div className="w-24 h-1 bg-primary mx-auto"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <ServiceCard 
              icon={<Factory className="w-12 h-12 text-primary" />}
              title="Industrial & Safety"
              description="Warehouse walkways, exclusion zones, and hazard identification compliant with NZ safety standards."
              link="/Our-Services/Industrial/"
              image="https://images.unsplash.com/photo-1535732759880-bbd5c7265e3f?auto=format&fit=crop&q=80" // warehouse floor
            />
            <ServiceCard 
              icon={<Warehouse className="w-12 h-12 text-primary" />}
              title="Car Parks & Roads"
              description="High-visibility road marking, parking layouts, stenciling, and directional signage."
              link="/Our-Services/Line-Marking/"
              image="https://images.unsplash.com/photo-1545558014-8692077e9b5c?auto=format&fit=crop&q=80" // asphalt road
            />
            <ServiceCard 
              icon={<ShieldAlert className="w-12 h-12 text-primary" />}
              title="Protective Coatings"
              description="Epoxy flooring, non-slip surfaces, and concrete sealing for durability and safety."
              link="/Our-Services/Protective-Concrete-Coatings/"
              image="https://images.unsplash.com/photo-1621255562768-4a5695022e11?auto=format&fit=crop&q=80" // concrete texture
            />
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="section-padding bg-secondary text-white relative">
        <div className="container-wide grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-4xl font-bold font-display uppercase mb-6">Why Choose Us?</h2>
            <p className="text-gray-300 mb-8 text-lg">
              We understand that downtime costs money. That's why we offer flexible scheduling, 
              including night and weekend work, to minimize disruption to your operations.
            </p>
            
            <ul className="space-y-4">
              {[
                "NZTA Approved Materials for maximum durability",
                "Health & Safety Compliant Solutions",
                "Night & Weekend Service Available",
                "Expert Consultation & Site Assessment",
                "Servicing Christchurch & South Island Wide"
              ].map((item, index) => (
                <li key={index} className="flex items-center gap-3">
                  <CheckCircle2 className="text-primary w-6 h-6 shrink-0" />
                  <span className="font-medium text-lg">{item}</span>
                </li>
              ))}
            </ul>

            <Link href="/About-Us/">
              <Button className="mt-8 text-primary hover:text-white variant-link p-0 h-auto font-bold uppercase flex items-center gap-2">
                Learn More About Us <ArrowRight className="w-4 h-4" />
              </Button>
            </Link>
          </div>
          <div className="relative h-[400px] rounded-lg overflow-hidden border-4 border-white/10 shadow-2xl">
            {/* worker applying line marking */}
            <img 
              src="https://images.unsplash.com/photo-1621905251189-08b45d6a269e?auto=format&fit=crop&q=80" 
              alt="Professional Line Marking Application" 
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="section-padding bg-muted">
        <div className="container-wide">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <h2 className="text-4xl font-bold font-display uppercase text-secondary mb-6">Get Your Free Quote</h2>
              <p className="text-lg text-muted-foreground mb-8">
                Ready to improve safety and organization at your facility? Contact us today for a 
                comprehensive assessment and quote.
              </p>
              
              <div className="bg-white p-6 rounded-lg shadow-sm border border-border mb-8">
                <h4 className="font-bold uppercase text-secondary mb-2">Service Areas</h4>
                <p className="text-muted-foreground">
                  Christchurch, Rolleston, Rangiora, Kaiapoi, Ashburton, Timaru, Greymouth, and the wider Canterbury region.
                </p>
              </div>
            </div>
            
            <ContactForm />
          </div>
        </div>
      </section>
    </div>
  );
}

function ServiceCard({ icon, title, description, link, image }: any) {
  return (
    <Link href={link}>
      <div className="group cursor-pointer bg-card rounded-lg overflow-hidden border border-border hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
        <div className="h-48 overflow-hidden relative">
          <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-all z-10"></div>
          <img src={image} alt={title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
          <div className="absolute bottom-4 left-4 z-20 bg-white/90 p-2 rounded-full shadow-lg">
            {icon}
          </div>
        </div>
        <div className="p-6">
          <h3 className="text-xl font-bold font-display uppercase mb-3 text-secondary group-hover:text-primary transition-colors">
            {title}
          </h3>
          <p className="text-muted-foreground mb-4 line-clamp-3">
            {description}
          </p>
          <span className="text-primary font-bold uppercase text-sm flex items-center gap-2">
            View Details <ArrowRight className="w-4 h-4" />
          </span>
        </div>
      </div>
    </Link>
  );
}
