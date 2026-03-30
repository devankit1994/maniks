"use client";

import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { SectionHeader } from "@/components/section-header";
import { CardFeature } from "@/components/card-feature";
import {
  Truck,
  Package,
  Globe,
  BarChart3,
  Shield,
  Zap,
  FileCheck,
  Users,
} from "lucide-react";

export default function Services() {
  const mainServices = [
    {
      icon: <Truck className="w-6 h-6" />,
      title: "Logistics & Transportation",
      description:
        "Efficient movement of goods via air, sea, and land with real-time tracking and optimized routing.",
    },
    {
      icon: <FileCheck className="w-6 h-6" />,
      title: "Customs Clearance",
      description:
        "Expert handling of documentation, tariffs, and regulatory compliance across all jurisdictions.",
    },
    {
      icon: <Package className="w-6 h-6" />,
      title: "Warehouse & Storage",
      description:
        "Secure facilities with inventory management, climate control, and just-in-time delivery.",
    },
    {
      icon: <BarChart3 className="w-6 h-6" />,
      title: "Market Analysis",
      description:
        "Data-driven insights on market trends, pricing, demand forecasting, and competitor analysis.",
    },
    {
      icon: <Globe className="w-6 h-6" />,
      title: "Supplier Sourcing",
      description:
        "Identification and vetting of reliable suppliers with quality assurance and price optimization.",
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: "Partnership Development",
      description:
        "Strategic relationship building with distributors and partners in key markets.",
    },
  ];

  const additionalServices = [
    {
      title: "Trade Finance Solutions",
      items: [
        "Letters of Credit",
        "Documentary Collections",
        "Trade Credit Insurance",
        "Export Financing",
      ],
    },
    {
      title: "Regulatory & Compliance",
      items: [
        "Import/Export Licensing",
        "Tariff Classification",
        "Trade Agreement Optimization",
        "Compliance Audits",
      ],
    },
    {
      title: "Technology & Analytics",
      items: [
        "Real-time Tracking",
        "Predictive Analytics",
        "Digital Documentation",
        "Supply Chain Visibility",
      ],
    },
    {
      title: "Specialized Solutions",
      items: [
        "Cold Chain Logistics",
        "Hazmat Handling",
        "Heavy Equipment Shipping",
        "Custom Consolidation",
      ],
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Core Services */}
      <section className="py-16 md:py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <SectionHeader
            title="Core Services"
            description="Six pillars of our comprehensive trade solutions"
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-16">
            {mainServices.map((service) => (
              <CardFeature
                key={service.title}
                icon={service.icon}
                title={service.title}
                description={service.description}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Additional Services */}
      <section className="py-16 md:py-24 px-4 sm:px-6 lg:px-8 bg-card/30">
        <div className="max-w-6xl mx-auto">
          <SectionHeader
            title="Additional Specializations"
            description="Extended capabilities to meet diverse business requirements"
          />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-16">
            {additionalServices.map((service) => (
              <div
                key={service.title}
                className="p-8 bg-background rounded-lg border border-border"
              >
                <h3 className="text-2xl font-bold text-foreground mb-6">
                  {service.title}
                </h3>
                <ul className="space-y-3">
                  {service.items.map((item) => (
                    <li key={item} className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-accent rounded-full mt-2 flex-shrink-0" />
                      <span className="text-foreground/80">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Service Process */}
      <section className="py-16 md:py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto">
          <SectionHeader
            title="Our Service Process"
            description="A streamlined approach ensuring success at every stage"
          />

          <div className="mt-16 space-y-8">
            {[
              {
                step: "01",
                title: "Consultation & Analysis",
                desc: "We begin by understanding your specific needs, markets, and goals. Our experts analyze your trade requirements and identify the optimal solutions.",
              },
              {
                step: "02",
                title: "Strategy Development",
                desc: "We develop a customized strategy covering sourcing, logistics, documentation, and compliance. This roadmap guides all subsequent activities.",
              },
              {
                step: "03",
                title: "Execution & Coordination",
                desc: "Our team executes the plan with precision, coordinating suppliers, logistics partners, and regulatory bodies seamlessly.",
              },
              {
                step: "04",
                title: "Monitoring & Optimization",
                desc: "We track performance in real-time, identify optimization opportunities, and keep you informed with regular updates and analytics.",
              },
              {
                step: "05",
                title: "Closure & Evaluation",
                desc: "Upon completion, we conduct a thorough review, handle any final tasks, and gather feedback for continuous improvement.",
              },
            ].map((item) => (
              <div key={item.step} className="flex gap-6">
                <div className="flex-shrink-0">
                  <div className="w-16 h-16 bg-accent/20 rounded-full flex items-center justify-center">
                    <span className="text-2xl font-bold text-accent">
                      {item.step}
                    </span>
                  </div>
                </div>
                <div className="flex-grow pt-2">
                  <h3 className="text-xl font-bold text-foreground mb-2">
                    {item.title}
                  </h3>
                  <p className="text-foreground/70">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Industry Expertise */}
      <section className="py-16 md:py-24 px-4 sm:px-6 lg:px-8 bg-card/30">
        <div className="max-w-5xl mx-auto">
          <SectionHeader
            title="Industry Expertise"
            description="Deep knowledge across multiple sectors"
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
            {[
              "Manufacturing",
              "Automotive",
              "Consumer Goods",
              "Electronics",
              "Pharmaceuticals",
              "Textiles",
              "Machinery & Equipment",
              "Raw Materials",
              "Specialty Products",
            ].map((industry) => (
              <div
                key={industry}
                className="p-4 bg-background rounded-lg border border-border text-center"
              >
                <p className="text-foreground font-medium">{industry}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Our Services */}
      <section className="py-16 md:py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <SectionHeader
            title="Why Choose Our Services"
            description="What makes us the trusted choice for global trade"
          />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
            {[
              {
                icon: Shield,
                title: "Risk Management",
                desc: "Comprehensive insurance coverage and contingency planning for every shipment.",
              },
              {
                icon: Zap,
                title: "Speed & Efficiency",
                desc: "Optimized processes that reduce transit times and accelerate time-to-market.",
              },
              {
                icon: BarChart3,
                title: "Cost Optimization",
                desc: "Negotiate better rates leveraging our volume and partnership network.",
              },
              {
                icon: Globe,
                title: "Global Reach",
                desc: "Local expertise combined with international scale and connectivity.",
              },
            ].map((item) => (
              <div key={item.title} className="flex gap-4">
                <div className="flex-shrink-0">
                  <item.icon className="w-8 h-8 text-accent" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-foreground mb-2">
                    {item.title}
                  </h3>
                  <p className="text-foreground/70">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-accent/10 via-background to-accent/10">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
            Ready to Optimize Your Trade Operations?
          </h2>
          <p className="text-lg text-foreground/70 mb-8">
            Discuss your specific needs with our service experts today.
          </p>
          <a
            href="/contact"
            className="inline-flex items-center gap-2 px-8 py-4 bg-accent text-white rounded-lg font-semibold hover:bg-accent/90 transition-all hover:shadow-lg"
          >
            Schedule a Consultation
          </a>
        </div>
      </section>

      <Footer />
    </div>
  );
}
