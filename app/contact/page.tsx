import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { SectionHeader } from "@/components/section-header";
import { ContactForm } from "@/components/contact-form";
import { Phone, Mail, MapPin, Clock } from "lucide-react";

export const metadata = {
  title: "Contact Maniks International - Get in Touch",
  description:
    "Reach out to our team for inquiries, quotes, or partnership opportunities. 24/7 support available.",
};

export default function Contact() {
  const contactInfo = [
    {
      icon: Mail,
      title: "Email",
      details: ["admin@maniksinternational.com"],
      description: "We respond to all inquiries within 24 hours",
    },
    {
      icon: Clock,
      title: "Support Hours",
      details: ["24/7 Emergency Support", "Live chat available worldwide"],
      description: "Extended support for critical shipments",
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Hero Section */}
      <section className="pt-32 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-card/50 to-background">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6 text-balance">
            Let&apos;s Connect
          </h1>
          <p className="text-xl text-foreground/70 text-balance">
            Have questions or ready to transform your trade operations? Our team
            is here to help.
          </p>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-20 md:py-32 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
            {contactInfo.map((info) => (
              <div
                key={info.title}
                className="p-6 bg-card/50 rounded-lg border border-border hover:border-accent/50 transition-colors text-center"
              >
                <info.icon
                  className="w-8 h-8 text-accent mb-4"
                  style={{ margin: "1rem auto" }}
                />
                <h3 className="text-lg font-bold text-foreground mb-3">
                  {info.title}
                </h3>
                <div className="space-y-1 mb-4">
                  {info.details.map((detail) => (
                    <p key={detail} className="text-foreground/70 font-medium">
                      {detail}
                    </p>
                  ))}
                </div>
                <p className="text-sm text-foreground/50">{info.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 md:py-32 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-12 text-center">
            Frequently Asked Questions
          </h2>

          <div className="space-y-6">
            {[
              {
                q: "What is your typical response time for inquiries?",
                a: "We aim to respond to all inquiries within 24 hours. For urgent matters, please call our emergency support line available 24/7.",
              },
              {
                q: "Do you work with businesses of all sizes?",
                a: "Yes, we serve everything from startups to Fortune 500 companies. We tailor our solutions to match your specific needs and budget.",
              },
              {
                q: "What regions do you currently serve?",
                a: "We have established operations and partnerships across 50+ countries across North America, Europe, Asia, and Latin America. Contact us to check availability for your specific region.",
              },
              {
                q: "Can you handle specialized or hazardous cargo?",
                a: "Yes, we have expertise in cold chain logistics, hazmat handling, and specialized equipment shipping. We maintain all necessary certifications and insurance.",
              },
              {
                q: "What payment methods do you accept?",
                a: "We accept wire transfers, letters of credit, documentary collections, and for qualified clients, trade credit on net terms.",
              },
              {
                q: "How do I track my shipment?",
                a: "All clients receive real-time tracking access through our online portal. You can monitor your shipment from pickup to final delivery.",
              },
            ].map((item, i) => (
              <details
                key={i}
                className="group p-6 bg-card/50 rounded-lg border border-border cursor-pointer hover:border-accent/50 transition-colors"
              >
                <summary className="flex items-center justify-between font-bold text-foreground">
                  {item.q}
                  <span className="text-accent group-open:rotate-180 transition-transform">
                    <svg
                      className="w-6 h-6"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M19 14l-7 7m0 0l-7-7m7 7V3"
                      />
                    </svg>
                  </span>
                </summary>
                <p className="text-foreground/70 mt-4">{item.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
