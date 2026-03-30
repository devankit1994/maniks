import { Navbar } from '@/components/navbar'
import { Footer } from '@/components/footer'
import { SectionHeader } from '@/components/section-header'
import { ArrowRight } from 'lucide-react'

export const metadata = {
  title: 'About Maniks International - Global Trade Leadership',
  description: 'Learn about Maniks International, a trusted leader in global import-export solutions with decades of industry experience.',
}

export default function About() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Hero Section */}
      <section className="pt-32 pb-20 md:pb-32 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-card/50 to-background">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6 text-balance">
            About Maniks International
          </h1>
          <p className="text-xl text-foreground/70 mb-8 text-balance">
            Leading the future of global trade with integrity, innovation, and unmatched expertise.
          </p>
        </div>
      </section>

      {/* Our Story Section */}
      <section className="py-20 md:py-32 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-8">Our Story</h2>
          <div className="prose prose-invert max-w-none space-y-6 text-foreground/80">
            <p className="text-lg leading-relaxed">
              Maniks International was founded with a vision to transform global trade. What started as a small import-export operation has grown into a trusted partner for businesses across continents. Our journey has been marked by relentless commitment to excellence, reliability, and customer satisfaction.
            </p>
            <p className="text-lg leading-relaxed">
              Over the years, we have built a robust network of suppliers, logistics partners, and distributors across more than 50 countries. Our expertise spans multiple industries including manufacturing, automotive, consumer goods, and specialty products. This diversification has made us resilient and capable of meeting virtually any trade requirement.
            </p>
            <p className="text-lg leading-relaxed">
              Today, Maniks International is recognized as a leader in innovative trade solutions. We leverage cutting-edge technology, data-driven strategies, and deep market knowledge to deliver results that exceed expectations. Our team of seasoned professionals brings decades of combined experience to every project.
            </p>
          </div>
        </div>
      </section>

      {/* Mission and Values */}
      <section className="py-20 md:py-32 px-4 sm:px-6 lg:px-8 bg-card/30">
        <div className="max-w-5xl mx-auto">
          <SectionHeader
            title="Our Mission & Values"
            description="Guiding principles that define who we are and how we operate"
          />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
            {[
              {
                title: 'Integrity',
                description: 'We conduct business with the highest ethical standards, building trust through transparency and honest relationships with all stakeholders.',
              },
              {
                title: 'Innovation',
                description: 'We continuously invest in technology and processes to deliver smarter, faster, and more efficient trade solutions.',
              },
              {
                title: 'Excellence',
                description: 'We pursue perfection in every detail, from logistics coordination to customer service, ensuring consistently superior results.',
              },
              {
                title: 'Sustainability',
                description: 'We are committed to environmentally responsible practices and supporting the communities in which we operate.',
              },
              {
                title: 'Partnership',
                description: 'We view our clients as partners, invested in their success and growth, not just transactional relationships.',
              },
              {
                title: 'Reliability',
                description: 'We deliver on our promises consistently, with meticulous attention to timelines, quality, and specifications.',
              },
            ].map((value) => (
              <div key={value.title} className="p-6 bg-background rounded-lg border border-border hover:border-accent/50 transition-colors">
                <h3 className="text-xl font-bold text-foreground mb-3">{value.title}</h3>
                <p className="text-foreground/70">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Highlights */}
      <section className="py-20 md:py-32 px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto">
          <SectionHeader
            title="Our Leadership Team"
            description="Experienced professionals dedicated to your success"
          />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-16">
            {[
              {
                name: 'Vikram Sharma',
                title: 'Chief Executive Officer',
                bio: '20+ years in international trade with expertise in supply chain optimization and market expansion.',
              },
              {
                name: 'Priya Kapoor',
                title: 'Chief Operations Officer',
                bio: '15+ years managing complex logistics networks and vendor relationships across multiple continents.',
              },
              {
                name: 'Rajesh Verma',
                title: 'Head of Client Relations',
                bio: '18+ years of experience building long-term partnerships and delivering exceptional customer service.',
              },
              {
                name: 'Anjali Singh',
                title: 'Director of Business Development',
                bio: '12+ years in market analysis and strategic growth initiatives across emerging markets.',
              },
            ].map((member) => (
              <div key={member.name} className="p-6 bg-card/50 rounded-lg border border-border">
                <h3 className="text-xl font-bold text-foreground mb-1">{member.name}</h3>
                <p className="text-accent font-semibold mb-3">{member.title}</p>
                <p className="text-foreground/70">{member.bio}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 md:py-32 px-4 sm:px-6 lg:px-8 bg-card/30">
        <div className="max-w-4xl mx-auto">
          <SectionHeader
            title="Why Partner With Maniks"
            description="What sets us apart in the global trade industry"
          />

          <div className="space-y-6 mt-12">
            {[
              { title: 'Proven Track Record', desc: '1000+ successful transactions with 98% on-time delivery rate and zero compliance issues.' },
              { title: 'Global Network', desc: 'Established relationships with suppliers, logistics partners, and distributors across 50+ countries.' },
              { title: 'Advanced Technology', desc: 'Real-time tracking, digital documentation, and AI-powered market intelligence for better decisions.' },
              { title: 'Competitive Pricing', desc: 'Leverage our economies of scale and partnerships to deliver cost-effective solutions.' },
              { title: '24/7 Support', desc: 'Dedicated account managers and round-the-clock customer support across all time zones.' },
              { title: 'Regulatory Expertise', desc: 'Deep understanding of international trade laws, customs regulations, and compliance requirements.' },
            ].map((item) => (
              <div key={item.title} className="flex gap-4">
                <div className="flex-shrink-0 w-6 h-6 bg-accent rounded-full flex items-center justify-center mt-1">
                  <div className="w-2 h-2 bg-background rounded-full" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-foreground">{item.title}</h3>
                  <p className="text-foreground/70">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 md:py-32 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">Ready to Experience Excellence?</h2>
          <p className="text-lg text-foreground/70 mb-8">
            Let us show you how Maniks International can transform your global trade operations.
          </p>
          <a
            href="/contact"
            className="inline-flex items-center gap-2 px-8 py-4 bg-accent text-white rounded-lg font-semibold hover:bg-accent/90 transition-all hover:shadow-lg"
          >
            Get In Touch
            <ArrowRight className="w-5 h-5" />
          </a>
        </div>
      </section>

      <Footer />
    </div>
  )
}
