import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ArrowRight, Mail, Phone, Building2, Users, Target, Award } from "lucide-react";
import { useEffect, useState } from "react";
import ParticleBackground from "@/components/ParticleBackground";

export default function Home() {
  const [scrollY, setScrollY] = useState(0);

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
              <a href="#about" className="text-foreground/80 hover:text-primary transition-colors">About</a>
              <a href="#services" className="text-foreground/80 hover:text-primary transition-colors">Services</a>
              <a href="#legacy" className="text-foreground/80 hover:text-primary transition-colors">Our Legacy</a>
              <a href="#contact" className="text-foreground/80 hover:text-primary transition-colors">Contact</a>
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
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-background"></div>
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
            Discover Our Story <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </div>

        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-white/50 rounded-full flex items-start justify-center p-2">
            <div className="w-1 h-3 bg-white/50 rounded-full"></div>
          </div>
        </div>
      </section>

      {/* About Section with Scroll Animation */}
      <section id="about" className="py-24 bg-background">
        <div className="container px-6">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div 
              className="space-y-6"
              style={{
                opacity: Math.min(1, Math.max(0, (scrollY - 400) / 300)),
                transform: `translateX(${Math.max(-50, -50 + (scrollY - 400) / 10)}px)`
              }}
            >
              <h2 className="text-4xl md:text-5xl font-bold text-foreground">
                A Legacy of Public Service Excellence
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Abacas Consulting was founded by Bruce Castleman, a distinguished public servant whose career spanned decades of transformative work across the Australian Public Service. His vision established a consultancy built on deep government expertise, strategic insight, and unwavering commitment to the public good.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Today, under the leadership of Michael Castleman, Abacas continues this proud tradition, combining institutional knowledge with innovative approaches to help government agencies navigate complex challenges and deliver exceptional outcomes for Australian citizens.
              </p>
            </div>
            <div 
              className="relative"
              style={{
                opacity: Math.min(1, Math.max(0, (scrollY - 400) / 300)),
                transform: `translateX(${Math.min(50, 50 - (scrollY - 400) / 10)}px)`
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
      <section id="services" className="py-24 bg-secondary/30">
        <div className="container px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
              Our Services
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Comprehensive consulting solutions tailored for government and enterprise clients
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="p-8 hover:shadow-xl transition-shadow bg-card">
              <div className="mb-6 flex justify-center">
                <img src="/stick-team.png" alt="Team collaboration" className="w-32 h-32" />
              </div>
              <div className="flex items-center gap-3 mb-4">
                <Users className="h-6 w-6 text-primary" />
                <h3 className="text-2xl font-semibold">Strategic Advisory</h3>
              </div>
              <p className="text-muted-foreground leading-relaxed">
                Expert guidance on organizational transformation, policy development, and strategic planning to help agencies achieve their mission-critical objectives.
              </p>
            </Card>

            <Card className="p-8 hover:shadow-xl transition-shadow bg-card">
              <div className="mb-6 flex justify-center">
                <img src="/stick-consulting.png" alt="Consulting services" className="w-32 h-32" />
              </div>
              <div className="flex items-center gap-3 mb-4">
                <Target className="h-6 w-6 text-primary" />
                <h3 className="text-2xl font-semibold">Management Consulting</h3>
              </div>
              <p className="text-muted-foreground leading-relaxed">
                Practical solutions for process improvement, change management, and operational excellence that deliver measurable results and lasting impact.
              </p>
            </Card>

            <Card className="p-8 hover:shadow-xl transition-shadow bg-card">
              <div className="mb-6 flex justify-center">
                <img src="/stick-success.png" alt="Success and achievement" className="w-32 h-32" />
              </div>
              <div className="flex items-center gap-3 mb-4">
                <Award className="h-6 w-6 text-primary" />
                <h3 className="text-2xl font-semibold">Program Delivery</h3>
              </div>
              <p className="text-muted-foreground leading-relaxed">
                End-to-end program management and implementation support, ensuring complex initiatives are delivered on time, on budget, and to specification.
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* Legacy Section */}
      <section id="legacy" className="py-24 bg-background">
        <div className="container px-6">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
                Built on a Foundation of Excellence
              </h2>
              <p className="text-xl text-muted-foreground">
                The Abacas story is one of dedication, expertise, and public service
              </p>
            </div>

            <div className="space-y-8">
              <Card className="p-8 bg-card border-l-4 border-l-primary">
                <h3 className="text-2xl font-semibold mb-4">The Founding Vision</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Bruce Castleman established Abacas Consulting with a clear mission: to bring world-class consulting expertise to the Australian public sector. His extensive experience across multiple government departments, including senior roles in strategic planning, procurement, and policy development, provided the foundation for a consultancy that truly understands the unique challenges and opportunities within government.
                </p>
              </Card>

              <Card className="p-8 bg-card border-l-4 border-l-primary">
                <h3 className="text-2xl font-semibold mb-4">Continuing the Tradition</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Under Michael Castleman's leadership, Abacas has evolved to meet the changing needs of modern government while staying true to its founding principles. We combine deep institutional knowledge with contemporary methodologies, ensuring our clients benefit from both proven wisdom and innovative thinking.
                </p>
              </Card>

              <Card className="p-8 bg-card border-l-4 border-l-primary">
                <h3 className="text-2xl font-semibold mb-4">Our Commitment</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Every engagement reflects our commitment to excellence, integrity, and public value. We work as true partners with our clients, transferring knowledge, building capability, and ensuring sustainable outcomes that serve the Australian community.
                </p>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="relative py-24 bg-primary text-primary-foreground overflow-hidden">
        <ParticleBackground className="opacity-40" />
        <div className="container px-6 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Let's Work Together
            </h2>
            <p className="text-xl mb-8 text-primary-foreground/90">
              Ready to discuss how Abacas Consulting can support your agency's strategic objectives?
            </p>

            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-12">
              <a
                href="mailto:abacas181@gmail.com"
                className="flex items-center gap-3 text-lg hover:text-primary-foreground/80 transition-colors"
              >
                <Mail className="h-6 w-6" />
                <span>abacas181@gmail.com</span>
              </a>
            </div>

            <Button
              size="lg"
              variant="secondary"
              onClick={() => window.location.href = 'mailto:abacas181@gmail.com'}
              className="text-lg px-8"
            >
              Get in Touch <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 bg-background border-t border-border">
        <div className="container px-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="flex items-center gap-2">
              <Building2 className="h-6 w-6 text-primary" />
              <span className="font-semibold">Abacas Consulting Pty Ltd</span>
            </div>
            <p className="text-sm text-muted-foreground">
              © {new Date().getFullYear()} Abacas Consulting. Strategic consulting for government excellence.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
