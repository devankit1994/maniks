import { Navbar } from '@/components/navbar'
import { Footer } from '@/components/footer'

export const metadata = {
  title: 'Privacy Policy - Maniks International',
  description: 'Our commitment to protecting your privacy and personal data.',
}

export default function Privacy() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      <div className="pt-32 pb-20 md:pb-32 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">Privacy Policy</h1>
          <p className="text-foreground/60 mb-12">Last updated: January 2024</p>

          <div className="prose prose-invert max-w-none space-y-8">
            <section>
              <h2 className="text-2xl font-bold text-foreground mb-4">1. Introduction</h2>
              <p className="text-foreground/80 leading-relaxed">
                Maniks International (&quot;we&quot;, &quot;us&quot;, &quot;our&quot; or &quot;Company&quot;) is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website and use our services.
              </p>
              <p className="text-foreground/80 leading-relaxed">
                Please read this privacy policy carefully. If you do not agree with our policies and practices, please do not use our services.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-foreground mb-4">2. Information We Collect</h2>
              <p className="text-foreground/80 leading-relaxed mb-4">We may collect information about you in a variety of ways:</p>
              <ul className="list-disc list-inside space-y-2 text-foreground/80">
                <li>Information you provide directly when requesting quotes, making purchases, or contacting us</li>
                <li>Information automatically collected through cookies and tracking technologies</li>
                <li>Information from third parties such as business partners and service providers</li>
                <li>Device information including IP address, browser type, and operating system</li>
                <li>Business information including company name, position, contact details, and transaction history</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-foreground mb-4">3. How We Use Your Information</h2>
              <p className="text-foreground/80 leading-relaxed mb-4">We use the information we collect for various purposes:</p>
              <ul className="list-disc list-inside space-y-2 text-foreground/80">
                <li>To provide, maintain, and improve our services</li>
                <li>To process transactions and send related information</li>
                <li>To send promotional communications (with your consent)</li>
                <li>To respond to your inquiries and provide customer support</li>
                <li>To comply with legal obligations and regulations</li>
                <li>To detect and prevent fraud and secure our services</li>
                <li>To analyze usage patterns and optimize our website</li>
                <li>To personalize your experience and provide tailored content</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-foreground mb-4">4. Information Sharing and Disclosure</h2>
              <p className="text-foreground/80 leading-relaxed mb-4">
                We may share your information in the following circumstances:
              </p>
              <ul className="list-disc list-inside space-y-2 text-foreground/80">
                <li><strong>Service Providers:</strong> We share information with vendors who perform services on our behalf, subject to confidentiality agreements</li>
                <li><strong>Legal Requirements:</strong> We may disclose information when required by law or to protect our rights</li>
                <li><strong>Business Transfers:</strong> In case of merger, acquisition, or sale of assets</li>
                <li><strong>With Your Consent:</strong> We may share information with third parties with your explicit consent</li>
                <li><strong>Aggregated Data:</strong> We may share aggregated, anonymized data for analytical purposes</li>
              </ul>
              <p className="text-foreground/80 leading-relaxed mt-4">
                We do not sell or rent your personal information to third parties for their marketing purposes.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-foreground mb-4">5. Data Security</h2>
              <p className="text-foreground/80 leading-relaxed">
                We implement comprehensive security measures including encryption, firewalls, and secure servers to protect your personal information. However, no method of transmission over the Internet is 100% secure, and we cannot guarantee absolute security. You acknowledge and accept this risk when transmitting information to us.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-foreground mb-4">6. Cookies and Tracking Technologies</h2>
              <p className="text-foreground/80 leading-relaxed mb-4">
                We use cookies and similar tracking technologies to enhance your experience. These include:
              </p>
              <ul className="list-disc list-inside space-y-2 text-foreground/80">
                <li><strong>Session Cookies:</strong> Temporary cookies that help us understand how you use our site</li>
                <li><strong>Persistent Cookies:</strong> Cookies that remain on your device to remember preferences</li>
                <li><strong>Analytics:</strong> Tools to measure website performance and user behavior</li>
                <li><strong>Marketing Cookies:</strong> To track conversion and optimize marketing campaigns</li>
              </ul>
              <p className="text-foreground/80 leading-relaxed mt-4">
                You can control cookie settings through your browser preferences.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-foreground mb-4">7. Your Privacy Rights</h2>
              <p className="text-foreground/80 leading-relaxed mb-4">
                Depending on your location, you may have the following rights:
              </p>
              <ul className="list-disc list-inside space-y-2 text-foreground/80">
                <li><strong>Right to Access:</strong> Request a copy of your personal data</li>
                <li><strong>Right to Correction:</strong> Correct inaccurate personal data</li>
                <li><strong>Right to Deletion:</strong> Request deletion of your data (subject to legal requirements)</li>
                <li><strong>Right to Opt-Out:</strong> Unsubscribe from marketing communications</li>
                <li><strong>Right to Data Portability:</strong> Receive your data in a portable format</li>
                <li><strong>Right to Withdraw Consent:</strong> Withdraw previously given consent</li>
              </ul>
              <p className="text-foreground/80 leading-relaxed mt-4">
                To exercise these rights, please contact us at privacy@maniks.com.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-foreground mb-4">8. Retention of Information</h2>
              <p className="text-foreground/80 leading-relaxed">
                We retain personal information for as long as necessary to fulfill the purposes outlined in this policy, comply with legal obligations, and resolve disputes. The retention period may vary depending on the context of the processing and our legal obligations.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-foreground mb-4">9. International Data Transfers</h2>
              <p className="text-foreground/80 leading-relaxed">
                Your information may be transferred to, stored in, and processed in countries other than your country of residence. These countries may have data protection laws that differ from your home country. By using our services, you consent to the transfer of your information to countries outside your country of residence.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-foreground mb-4">10. Third-Party Links</h2>
              <p className="text-foreground/80 leading-relaxed">
                Our website may contain links to third-party websites. We are not responsible for the privacy practices of these external sites. We encourage you to review their privacy policies before providing any personal information.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-foreground mb-4">11. Changes to This Policy</h2>
              <p className="text-foreground/80 leading-relaxed">
                We may update this Privacy Policy from time to time. We will notify you of significant changes by posting the new policy on our website and updating the &quot;Last Updated&quot; date. Your continued use of our services following such notification constitutes your acceptance of the updated policy.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-foreground mb-4">12. Contact Us</h2>
              <p className="text-foreground/80 leading-relaxed">
                If you have questions about this Privacy Policy or our privacy practices, please contact us at:
              </p>
              <div className="bg-card/50 p-6 rounded-lg border border-border mt-4">
                <p className="text-foreground"><strong>Privacy Officer</strong></p>
                <p className="text-foreground/80">Maniks International</p>
                <p className="text-foreground/80">123 Commerce Street</p>
                <p className="text-foreground/80">New York, NY 10001, USA</p>
                <p className="text-foreground/80 mt-2">Email: privacy@maniks.com</p>
                <p className="text-foreground/80">Phone: +1 (555) 123-4567</p>
              </div>
            </section>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  )
}
