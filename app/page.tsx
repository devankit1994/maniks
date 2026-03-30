'use client'

import { Navbar } from '@/components/navbar'
import { Hero } from '@/components/hero'
import { SectionHeader } from '@/components/section-header'
import { CardFeature } from '@/components/card-feature'
import { Stats } from '@/components/stats'
import { Footer } from '@/components/footer'
import { ScrollSection } from '@/components/scroll-section'
import { ContactForm } from '@/components/contact-form'
import {
  Globe,
  Truck,
  BarChart3,
  Shield,
  Users,
  Zap,
  CheckCircle,
  ArrowRight,
} from 'lucide-react'

export default function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />

      {/* Hero Section */}
      <Hero />

      {/* About Section */}
      <section id="about" className="py-20 md:py-32 px-4 sm:px-6 lg:px-8">
        <ScrollSection className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div>
              <SectionHeader
                label="ABOUT US"
                title="Leading Global Trade Solutions"
                description=""
                centered={false}
              />
              <p className="text-foreground/70 text-lg mb-6 leading-relaxed">
                With over 15 years of experience in international commerce, Maniks International has
                established itself as a trusted partner for businesses seeking reliable import-export
                solutions. Our commitment to excellence, transparency, and customer satisfaction sets
                us apart in the competitive global trade landscape.
              </p>

              <ul className="space-y-3 mb-8">
                {[
                  'Expert logistics coordination',
                  'Competitive pricing models',
                  'Global network of partners',
                  '24/7 customer support',
                ].map((item) => (
                  <li key={item} className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-accent flex-shrink-0" />
                    <span className="text-foreground/80">{item}</span>
                  </li>
                ))}
              </ul>

              <a
                href="#contact"
                className="inline-flex items-center gap-2 px-6 py-3 bg-accent text-white rounded-lg font-semibold hover:bg-accent/90 transition-colors group"
              >
                Learn More About Us
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </a>
            </div>

            {/* Right Image Placeholder */}
            <div className="relative h-96 bg-card rounded-xl border border-border flex items-center justify-center overflow-hidden group">
              <div className="absolute inset-0 bg-gradient-accent opacity-50 group-hover:opacity-70 transition-opacity" />
              <div className="relative z-10 text-center">
                <Globe className="w-24 h-24 text-accent/50 mx-auto mb-4" />
                <p className="text-foreground/50 font-medium">Global Trade Network</p>
              </div>
            </div>
          </div>
        </ScrollSection>
      </section>

      {/* Statistics Section */}
      <section className="py-20 md:py-32 px-4 sm:px-6 lg:px-8 bg-card/50">
        <div className="max-w-7xl mx-auto">
          <SectionHeader
            title="By The Numbers"
            description="Our track record speaks for itself. Trusted by thousands of businesses worldwide."
          />
          <Stats
            items={[
              { value: 15, label: 'Years in Business', suffix: '+' },
              { value: 5000, label: 'Happy Clients', suffix: '+' },
              { value: 150, label: 'Countries Served', suffix: '+' },
              { value: 50000, label: 'Shipments Completed', suffix: '+' },
            ]}
          />
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 md:py-32 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <SectionHeader
            label="OUR SERVICES"
            title="Comprehensive Trade Solutions"
            description="From logistics to customs clearance, we provide end-to-end solutions for all your import-export needs."
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <CardFeature
              icon={<Truck className="w-6 h-6" />}
              title="Logistics Solutions"
              description="Efficient and cost-effective transportation of goods across continents with real-time tracking."
              badge="Popular"
            />
            <CardFeature
              icon={<Globe className="w-6 h-6" />}
              title="Export Management"
              description="Comprehensive export solutions including documentation, compliance, and market access."
            />
            <CardFeature
              icon={<BarChart3 className="w-6 h-6" />}
              title="Import Solutions"
              description="Streamlined import processes with customs clearance, warehousing, and distribution services."
            />
            <CardFeature
              icon={<Shield className="w-6 h-6" />}
              title="Compliance & Documentation"
              description="Expert handling of international regulations, tariffs, and customs procedures."
            />
            <CardFeature
              icon={<Users className="w-6 h-6" />}
              title="Consulting Services"
              description="Strategic guidance for market expansion, trade partnerships, and business growth."
            />
            <CardFeature
              icon={<Zap className="w-6 h-6" />}
              title="Supply Chain Optimization"
              description="Streamline your operations with our integrated supply chain management solutions."
            />
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section id="process" className="py-20 md:py-32 px-4 sm:px-6 lg:px-8 bg-card/50">
        <div className="max-w-7xl mx-auto">
          <SectionHeader
            label="OUR PROCESS"
            title="How We Work"
            description="Simple, transparent, and effective. Here's how we help you succeed."
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                number: '01',
                title: 'Consultation',
                description:
                  'We understand your needs and assess your requirements for the best solution.',
              },
              {
                number: '02',
                title: 'Planning',
                description:
                  'Our experts develop a customized plan tailored to your business goals.',
              },
              {
                number: '03',
                title: 'Execution',
                description:
                  'We manage all logistics and documentation with precision and care.',
              },
              {
                number: '04',
                title: 'Support',
                description:
                  'Continuous support and monitoring until successful delivery and beyond.',
              },
            ].map((step) => (
              <div key={step.number} className="relative">
                <div className="bg-background p-6 rounded-xl border border-border hover:border-accent/50 transition-colors h-full">
                  <div className="text-4xl font-bold text-accent/30 mb-2">
                    {step.number}
                  </div>
                  <h3 className="text-xl font-bold text-foreground mb-2">
                    {step.title}
                  </h3>
                  <p className="text-foreground/70 text-sm">{step.description}</p>
                </div>

                {/* Connector Line */}
                {parseInt(step.number) < 4 && (
                  <div className="hidden lg:block absolute top-1/2 -right-3 w-6 h-0.5 bg-gradient-to-r from-accent to-transparent" />
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 md:py-32 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <SectionHeader
            title="Why Choose Maniks International?"
            description="We're committed to providing the best service and support for your business."
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              'Global Network Access',
              'Competitive Pricing',
              'Expert Team',
              'Fast Processing',
              'Real-time Tracking',
              'Dedicated Support',
              'Compliance Expertise',
              'Custom Solutions',
              'Proven Track Record',
            ].map((benefit) => (
              <div key={benefit} className="flex items-start gap-4 p-6 bg-card rounded-lg border border-border hover:border-accent/50 transition-colors">
                <CheckCircle className="w-6 h-6 text-accent flex-shrink-0 mt-1" />
                <div>
                  <h3 className="text-lg font-semibold text-foreground">{benefit}</h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section
        id="contact"
        className="py-20 md:py-32 px-4 sm:px-6 lg:px-8 bg-gradient-dark relative overflow-hidden"
      >
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-20 right-1/3 w-96 h-96 bg-accent/10 rounded-full blur-3xl" />
          <div className="absolute bottom-20 left-1/3 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl" />
        </div>

        <div className="max-w-4xl mx-auto relative z-10">
          <div className="text-center mb-12">
            <SectionHeader
              title="Ready to Expand Your Global Trade?"
              description="Get started with Maniks International today and unlock new opportunities for your business."
            />
          </div>

          <ContactForm />
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </div>
  )
}
