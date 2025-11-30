import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ContactModal } from "@/components/ContactModal";
import { Building2, Users, Target, Shield, BarChart, CheckCircle2, ArrowRight, Phone, Mail, Award, Send } from "lucide-react";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import ParticleBackground from "@/components/ParticleBackground";
import WaveTexture from "@/components/WaveTexture";
import LogoBar from "@/components/LogoBar";

export default function Home() {
  const [scrollY, setScrollY] = useState(0);
  const [isContactOpen, setIsContactOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const parallaxOffset = scrollY * 0.5;

  return (
    <div className="min-h-screen">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Building2 className="h-8 w-8 text-primary" />
              <span className="text-2xl font-bold text-foreground">Abacas Consulting</span>
            </div>
            <div className="hidden md:flex items-center gap-8">
              <a href="#about" className="text-sm font-medium hover:text-primary transition-colors">About</a>
              <a href="#services" className="text-sm font-medium hover:text-primary transition-colors">Services</a>
              <a href="#legacy" className="text-sm font-medium hover:text-primary transition-colors">Legacy</a>
              <a href="#contact" className="text-sm font-medium hover:text-primary transition-colors">Contact</a>
              <Button variant="default" size="sm" onClick={() => setIsContactOpen(true)}>Get Started</Button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section with Parallax */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div
          className="absolute inset-0 z-0"
          style={{ transform: `translateY(${parallaxOffset}px)` }}
        >
          <img
            src="/hero-canberra.jpg"
            alt="Parliament House Canberra"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/50"></div>
        </div>

        <div className="relative z-10 container text-center text-white px-6">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 animate-fade-in-up">
            Strategic Consulting<br />for Government Excellence
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-white/90 max-w-3xl mx-auto animate-fade-in-up animation-delay-200">
            Delivering expert advisory services to Australian government agencies and enterprises since our founding
          </p>
          <Button
            size="lg"
            className="animate-fade-in-up animation-delay-400 bg-primary hover:bg-primary/90 text-primary-foreground"
            onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}
          >
            Discover Our Legacy <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </div>

        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-white/50 rounded-full flex items-start justify-center p-2">
            <div className="w-1 h-3 bg-white/50 rounded-full"></div>
          </div>
        </div>
      </section>

      {/* About Section with Scroll Animation */}
      <section id="about" className="py-24 bg-background/80 backdrop-blur-sm">
        <div className="container px-6">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div
              className="space-y-6"
              style={{
                opacity: Math.min(1, Math.max(0, (scrollY - 400) / 300)),
                transform: `translateY(${Math.max(0, 50 - (scrollY - 400) / 6)}px)`
              }}
            >
              <div className="flex items-center gap-2 text-primary mb-2">
                <Building2 className="h-5 w-5" />
                <span className="font-semibold uppercase tracking-wider">About Us</span>
              </div>
              <h2 className="text-4xl font-bold text-foreground">Decades of Public Sector Expertise</h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Founded by Bruce Castleman, Abacas Consulting has been a trusted partner to the Australian Federal Government for over two decades. We specialize in bridging the gap between strategic intent and operational reality.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Today, under the leadership of Michael Castleman, Abacas continues this proud tradition, combining institutional knowledge with innovative approaches to help government agencies navigate complex challenges and deliver exceptional outcomes for Australian citizens.
              </p>
            </div>
            <div
              className="relative"
              style={{
                opacity: Math.min(1, Math.max(0, (scrollY - 400) / 300)),
                transform: `translateX(${Math.max(0, 50 - (scrollY - 400) / 6)}px)`
              }}
            >
              <img
                src="/government-consulting.jpg"
                alt="Government consulting"
                className="rounded-lg shadow-2xl w-full"
              />
              <div className="absolute -bottom-6 -right-6 w-48 h-48 bg-primary/10 rounded-lg -z-10"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section with Stick Figures */}
      <section id="services" className="py-24 bg-secondary/30 backdrop-blur-sm">
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">Our Services</h2>
            <p className="text-xl text-white/90">
              Comprehensive consulting solutions tailored for the public sector
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="p-8 hover:shadow-xl transition-shadow bg-card/80 backdrop-blur-sm">
              <div className="mb-6 flex justify-center">
                <img src="/stick-team.png" alt="Team collaboration" className="w-32 h-32" />
              </div>
              <h3 className="text-2xl font-semibold mb-3 text-center">Strategic Advisory</h3>
              <p className="text-muted-foreground text-center">
                High-level strategic planning and policy advice to support government decision-making and program design.
              </p>
            </Card>

            <Card className="p-8 hover:shadow-xl transition-shadow bg-card/80 backdrop-blur-sm">
              <div className="mb-6 flex justify-center">
                <img src="/stick-consulting.png" alt="Consulting services" className="w-32 h-32" />
              </div>
              <h3 className="text-2xl font-semibold mb-3 text-center">Program Management</h3>
              <p className="text-muted-foreground text-center">
                End-to-end program and project management services, ensuring on-time and on-budget delivery of government initiatives.
              </p>
            </Card>

            <Card className="p-8 hover:shadow-xl transition-shadow bg-card/80 backdrop-blur-sm">
              <div className="mb-6 flex justify-center">
                <img src="/stick-success.png" alt="Success and achievement" className="w-32 h-32" />
              </div>
              <h3 className="text-2xl font-semibold mb-3 text-center">Procurement & Commercial</h3>
              <p className="text-muted-foreground text-center">
                Specialized procurement support, contract management, and commercial advisory services for complex government tenders.
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* Legacy Section */}
      <section id="legacy" className="py-24 bg-background/80 backdrop-blur-sm">
        <div className="container px-6">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <div className="flex items-center justify-center gap-2 text-primary mb-2">
                <Award className="h-6 w-6" />
                <span className="font-semibold uppercase tracking-wider">Our Legacy</span>
              </div>
              <h2 className="text-4xl font-bold text-foreground">A Family Tradition of Service</h2>
            </div>

            <div className="space-y-8">
              <Card className="p-8 bg-card/80 backdrop-blur-sm border-l-4 border-l-primary">
                <h3 className="text-2xl font-semibold mb-4">The Founding Vision</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Bruce Castleman established Abacas Consulting with a clear mission: to bring world-class consulting expertise to the Australian public sector. His extensive experience across multiple government departments, including senior roles in strategic planning, procurement, and policy development, provided the foundation for a consultancy that truly understands the unique challenges and opportunities within government.
                </p>
              </Card>

              <Card className="p-8 bg-card/80 backdrop-blur-sm border-l-4 border-l-primary">
                <h3 className="text-2xl font-semibold mb-4">Continuing the Tradition</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Under Michael Castleman's leadership, Abacas has evolved to meet the changing needs of modern government while staying true to its founding principles. We combine deep institutional knowledge with contemporary methodologies, ensuring our clients benefit from both proven wisdom and innovative thinking.
                </p>
              </Card>

              <Card className="p-8 bg-card/80 backdrop-blur-sm border-l-4 border-l-primary">
                <h3 className="text-2xl font-semibold mb-4">Our Commitment</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Every engagement reflects our commitment to excellence, integrity, and public value. We work as true partners with our clients, transferring knowledge, building capability, and ensuring sustainable outcomes that serve the Australian community.
                </p>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Logo Bar */}
      <LogoBar />

      {/* Contact Section */}
      <section id="contact" className="relative py-24 bg-primary text-primary-foreground overflow-hidden">
        <WaveTexture className="z-0" />
        <ParticleBackground className="z-1" />
        <div className="relative z-10 container mx-auto px-4 h-full flex flex-col justify-center items-center text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl"
          >
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 tracking-tight">
              Partner with Abacas
            </h1>
            <p className="text-xl md:text-2xl text-white/90 mb-12 max-w-2xl mx-auto leading-relaxed">
              Ready to elevate your agency's performance? Contact us to discuss how we can support your strategic objectives.
            </p>

            <div className="flex flex-col items-center gap-8">
              <Button
                size="lg"
                className="text-lg px-8 bg-gradient-to-r from-blue-600 to-cyan-500 hover:from-blue-700 hover:to-cyan-600 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
                onClick={() => setIsContactOpen(true)}
              >
                Contact Us <Send className="ml-2 h-5 w-5" />
              </Button>

              <ContactModal open={isContactOpen} onOpenChange={setIsContactOpen} />

              <p className="text-sm text-white/70">
                Mon-Fri, 9am-5pm AEST
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 bg-background/80 border-t border-border backdrop-blur-sm">
        <div className="container px-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="flex items-center gap-2">
              <Building2 className="h-8 w-8 text-primary" />
              <span className="text-2xl font-bold text-foreground">Abacas Consulting</span>
            </div>
            <p className="text-sm text-muted-foreground">
              © {new Date().getFullYear()} Abacas Consulting. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}