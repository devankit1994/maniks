import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";

export const metadata = {
  title: "Terms of Service - Maniks International",
  description:
    "Legal terms and conditions for using Maniks International services.",
};

export default function Terms() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      <div className="pt-32 pb-20 md:pb-32 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Terms of Service
          </h1>
          <p className="text-foreground/60 mb-12">Last updated: January 2024</p>

          <div className="prose prose-invert max-w-none space-y-8">
            <section>
              <h2 className="text-2xl font-bold text-foreground mb-4">
                1. Agreement to Terms
              </h2>
              <p className="text-foreground/80 leading-relaxed">
                By accessing and using the services provided by Maniks
                International (&quot;Company&quot;, &quot;we&quot;,
                &quot;us&quot;, &quot;our&quot;), you agree to be bound by these
                Terms of Service. If you do not agree to abide by the above,
                please do not use this service.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-foreground mb-4">
                2. Use License
              </h2>
              <p className="text-foreground/80 leading-relaxed mb-4">
                Permission is granted to temporarily download one copy of the
                materials (information or software) on our website for personal,
                non-commercial transitory viewing only. This is the grant of a
                license, not a transfer of title, and under this license you may
                not:
              </p>
              <ul className="list-disc list-inside space-y-2 text-foreground/80">
                <li>Modifying or copying the materials</li>
                <li>
                  Using the materials for any commercial purpose or for any
                  public display
                </li>
                <li>
                  Attempting to decompile or reverse engineer any software
                  contained on the website
                </li>
                <li>
                  Removing any copyright or other proprietary notations from the
                  materials
                </li>
                <li>
                  Transferring the materials to another person or
                  &quot;mirroring&quot; the materials on any other server
                </li>
                <li>
                  Using the materials in a way that violates any applicable laws
                  or regulations
                </li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-foreground mb-4">
                3. Disclaimer
              </h2>
              <p className="text-foreground/80 leading-relaxed mb-4">
                The materials on our website are provided on an &quot;as
                is&quot; basis. Maniks International makes no warranties,
                expressed or implied, and hereby disclaims and negates all other
                warranties including, without limitation, implied warranties or
                conditions of merchantability, fitness for a particular purpose,
                or non-infringement of intellectual property or other violation
                of rights.
              </p>
              <p className="text-foreground/80 leading-relaxed">
                Further, Maniks International does not warrant or make any
                representations concerning the accuracy, likely results, or
                reliability of the use of the materials on its website or
                otherwise relating to such materials or on any sites linked to
                this website.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-foreground mb-4">
                4. Limitations of Liability
              </h2>
              <p className="text-foreground/80 leading-relaxed">
                In no event shall Maniks International or its suppliers be
                liable for any damages (including, without limitation, damages
                for loss of data or profit, or due to business interruption)
                arising out of the use or inability to use the materials on our
                website, even if we or our authorized representative has been
                notified orally or in writing of the possibility of such damage.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-foreground mb-4">
                5. Accuracy of Materials
              </h2>
              <p className="text-foreground/80 leading-relaxed">
                The materials appearing on our website could include technical,
                typographical, or photographic errors. Maniks International does
                not warrant that any of the materials on the website are
                accurate, complete, or current. We may make changes to the
                materials contained on the website at any time without notice.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-foreground mb-4">
                6. Links and Third-Party Content
              </h2>
              <p className="text-foreground/80 leading-relaxed mb-4">
                Maniks International has not reviewed all of the sites linked to
                its website and is not responsible for the contents of any such
                linked site. The inclusion of any link does not imply
                endorsement by Maniks International of the site. Use of any such
                linked website is at the user&apos;s own risk.
              </p>
              <p className="text-foreground/80 leading-relaxed">
                If you believe any linked website content infringes your
                intellectual property rights, please notify us immediately.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-foreground mb-4">
                7. Modifications to Terms
              </h2>
              <p className="text-foreground/80 leading-relaxed">
                Maniks International may revise these terms of service for our
                website at any time without notice. By using this website, you
                are agreeing to be bound by the then current version of these
                terms of service.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-foreground mb-4">
                8. Governing Law
              </h2>
              <p className="text-foreground/80 leading-relaxed">
                These terms and conditions are governed by and construed in
                accordance with the laws of the State of New York, and you
                irrevocably submit to the exclusive jurisdiction of the courts
                that are located in that state or location.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-foreground mb-4">
                9. Service Terms
              </h2>
              <p className="text-foreground/80 leading-relaxed mb-4">
                When using Maniks International services:
              </p>
              <ul className="list-disc list-inside space-y-2 text-foreground/80">
                <li>
                  You agree to provide accurate and complete information in all
                  transactions
                </li>
                <li>
                  You are responsible for maintaining confidentiality of your
                  account credentials
                </li>
                <li>
                  You agree to accept all goods in the condition in which they
                  are delivered
                </li>
                <li>
                  Claims for damaged or defective goods must be filed within 14
                  days of delivery
                </li>
                <li>
                  Pricing is subject to change without notice unless otherwise
                  agreed in writing
                </li>
                <li>Payment terms are negotiated on a case-by-case basis</li>
                <li>
                  All transactions are subject to our standard risk management
                  procedures
                </li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-foreground mb-4">
                10. Liability and Claims
              </h2>
              <p className="text-foreground/80 leading-relaxed mb-4">
                Maniks International&apos;s liability for any claim is limited
                to the contract value of the relevant transaction. We are not
                responsible for:
              </p>
              <ul className="list-disc list-inside space-y-2 text-foreground/80">
                <li>Consequential, incidental, or indirect damages</li>
                <li>Loss of profits or business opportunity</li>
                <li>
                  Delays due to circumstances beyond our reasonable control
                </li>
                <li>
                  Quality issues arising from supplier defects or government
                  inspections
                </li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-foreground mb-4">
                11. Insurance and Risk
              </h2>
              <p className="text-foreground/80 leading-relaxed">
                Clients are responsible for arranging appropriate insurance
                coverage for their shipments. Maniks International provides
                insurance options, but clients may elect to self-insure. Risk of
                loss transfers to the client upon delivery according to the
                agreed Incoterms.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-foreground mb-4">
                12. Intellectual Property Rights
              </h2>
              <p className="text-foreground/80 leading-relaxed">
                Unless otherwise stated, Maniks International owns the
                intellectual property rights for all material on our website and
                in our services. All intellectual property rights are reserved.
                You may access this for personal, non-commercial use only,
                subject to restrictions set in these terms and conditions.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-foreground mb-4">
                13. User Conduct
              </h2>
              <p className="text-foreground/80 leading-relaxed mb-4">
                You agree not to:
              </p>
              <ul className="list-disc list-inside space-y-2 text-foreground/80">
                <li>Violate any applicable laws or regulations</li>
                <li>Engage in any form of fraud or misrepresentation</li>
                <li>Provide false or misleading information</li>
                <li>Attempt to gain unauthorized access to our systems</li>
                <li>Harass or abuse our staff or other users</li>
                <li>Use our services for illegal purposes or goods</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-foreground mb-4">
                14. Termination
              </h2>
              <p className="text-foreground/80 leading-relaxed">
                Maniks International may terminate or suspend your access to our
                services at any time, with or without cause, and with or without
                notice. Termination will not relieve you of payment obligations
                for services already provided.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-foreground mb-4">
                15. Dispute Resolution
              </h2>
              <p className="text-foreground/80 leading-relaxed mb-4">
                Any disputes arising from these terms or our services shall be:
              </p>
              <ul className="list-disc list-inside space-y-2 text-foreground/80">
                <li>
                  First subject to good faith negotiation between the parties
                </li>
                <li>If unresolved, subject to mediation</li>
                <li>
                  If mediation fails, subject to binding arbitration or
                  litigation as applicable
                </li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-foreground mb-4">
                16. Contact Information
              </h2>
              <p className="text-foreground/80 leading-relaxed">
                If you have any questions about these Terms of Service, please
                contact us.
              </p>
            </section>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}
