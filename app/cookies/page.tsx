import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";

export const metadata = {
  title: "Cookie Policy - Maniks International",
  description:
    "Information about how we use cookies and tracking technologies on our website.",
};

export default function Cookies() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      <div className="pt-32 pb-20 md:pb-32 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Cookie Policy
          </h1>
          <p className="text-foreground/60 mb-12">Last updated: January 2024</p>

          <div className="prose prose-invert max-w-none space-y-8">
            <section>
              <h2 className="text-2xl font-bold text-foreground mb-4">
                1. What Are Cookies?
              </h2>
              <p className="text-foreground/80 leading-relaxed">
                Cookies are small text files that are placed on your device when
                you visit our website. They are widely used to make websites
                work more efficiently, as well as to provide information to the
                website owners. Cookies help us understand how you use our
                website, what pages you visit, and how long you spend on each
                page.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-foreground mb-4">
                2. Types of Cookies We Use
              </h2>
              <p className="text-foreground/80 leading-relaxed mb-4">
                We use different types of cookies for different purposes:
              </p>

              <div className="space-y-6">
                <div>
                  <h3 className="text-xl font-bold text-foreground mb-2">
                    Essential Cookies
                  </h3>
                  <p className="text-foreground/80">
                    These cookies are strictly necessary for the website to
                    function properly. They enable basic functionality such as
                    page navigation and access to secure areas. Without these
                    cookies, our website cannot function properly.
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-bold text-foreground mb-2">
                    Performance Cookies
                  </h3>
                  <p className="text-foreground/80">
                    These cookies collect information about how you use our
                    website, including which pages you visit most often and
                    whether you receive error messages. This data helps us
                    improve website performance and user experience. These
                    cookies do not collect information that identifies you
                    personally.
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-bold text-foreground mb-2">
                    Functional Cookies
                  </h3>
                  <p className="text-foreground/80">
                    These cookies allow our website to remember choices you make
                    (such as your username, language, or region) to provide
                    enhanced, more personal features. These cookies can be
                    deleted at any time through your browser settings.
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-bold text-foreground mb-2">
                    Targeting/Advertising Cookies
                  </h3>
                  <p className="text-foreground/80">
                    These cookies record your visit to our website, the pages
                    you have visited, and the links you have followed. We will
                    use this information to make our website and any advertising
                    displayed on it more relevant to your interests. We may also
                    share this information with third parties for this purpose.
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-bold text-foreground mb-2">
                    Analytics Cookies
                  </h3>
                  <p className="text-foreground/80">
                    We use Google Analytics and similar tools to track and
                    analyze how users interact with our website. This helps us
                    understand user behavior, measure campaign effectiveness,
                    and improve our services.
                  </p>
                </div>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-foreground mb-4">
                3. Cookies We Use Specifically
              </h2>
              <p className="text-foreground/80 leading-relaxed mb-4">
                Our website uses the following specific cookies:
              </p>
              <div className="overflow-x-auto">
                <table className="w-full text-sm text-foreground/80">
                  <thead className="bg-card/50">
                    <tr>
                      <th className="px-4 py-2 text-left">Cookie Name</th>
                      <th className="px-4 py-2 text-left">Purpose</th>
                      <th className="px-4 py-2 text-left">Expiration</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-b border-border">
                      <td className="px-4 py-2">_session_id</td>
                      <td className="px-4 py-2">Maintains user session</td>
                      <td className="px-4 py-2">Session</td>
                    </tr>
                    <tr className="border-b border-border">
                      <td className="px-4 py-2">_ga</td>
                      <td className="px-4 py-2">Google Analytics tracking</td>
                      <td className="px-4 py-2">2 years</td>
                    </tr>
                    <tr className="border-b border-border">
                      <td className="px-4 py-2">_gid</td>
                      <td className="px-4 py-2">Google Analytics session ID</td>
                      <td className="px-4 py-2">24 hours</td>
                    </tr>
                    <tr className="border-b border-border">
                      <td className="px-4 py-2">user_preferences</td>
                      <td className="px-4 py-2">
                        Stores language and theme preferences
                      </td>
                      <td className="px-4 py-2">1 year</td>
                    </tr>
                    <tr className="border-b border-border">
                      <td className="px-4 py-2">csrf_token</td>
                      <td className="px-4 py-2">
                        Security token for form submissions
                      </td>
                      <td className="px-4 py-2">Session</td>
                    </tr>
                    <tr>
                      <td className="px-4 py-2">marketing_id</td>
                      <td className="px-4 py-2">
                        Marketing tracking for campaigns
                      </td>
                      <td className="px-4 py-2">90 days</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-foreground mb-4">
                4. Third-Party Cookies
              </h2>
              <p className="text-foreground/80 leading-relaxed mb-4">
                Some cookies on our website are set by third parties, such as:
              </p>
              <ul className="list-disc list-inside space-y-2 text-foreground/80">
                <li>
                  <strong>Google Analytics:</strong> For website traffic
                  analysis and user behavior tracking
                </li>
                <li>
                  <strong>Google Ads:</strong> For targeted advertising and
                  conversion tracking
                </li>
                <li>
                  <strong>Facebook Pixel:</strong> For tracking conversions and
                  audience building
                </li>
                <li>
                  <strong>LinkedIn Insights:</strong> For B2B marketing
                  analytics
                </li>
                <li>
                  <strong>Hotjar:</strong> For understanding user interactions
                  and heatmaps
                </li>
              </ul>
              <p className="text-foreground/80 leading-relaxed mt-4">
                These third parties have their own privacy policies and we
                encourage you to review them.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-foreground mb-4">
                5. How We Use Cookie Information
              </h2>
              <p className="text-foreground/80 leading-relaxed mb-4">
                We use cookies to:
              </p>
              <ul className="list-disc list-inside space-y-2 text-foreground/80">
                <li>Provide essential website functionality</li>
                <li>Remember your preferences and settings</li>
                <li>Analyze website traffic and user behavior</li>
                <li>Measure the effectiveness of marketing campaigns</li>
                <li>Provide personalized content and recommendations</li>
                <li>Prevent fraud and enhance security</li>
                <li>Improve overall user experience</li>
                <li>Serve relevant advertisements</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-foreground mb-4">
                6. How to Control Cookies
              </h2>
              <p className="text-foreground/80 leading-relaxed mb-4">
                You have the right to decide whether to accept or reject
                cookies. You can control and delete cookies in several ways:
              </p>

              <div className="space-y-4">
                <div>
                  <h3 className="text-lg font-bold text-foreground mb-2">
                    Browser Controls
                  </h3>
                  <p className="text-foreground/80 mb-2">
                    Most browsers allow you to control cookies through their
                    settings. You can:
                  </p>
                  <ul className="list-disc list-inside space-y-1 text-foreground/80 ml-4">
                    <li>View cookies stored on your device</li>
                    <li>Delete cookies automatically or manually</li>
                    <li>Block cookies from specific websites</li>
                    <li>Block all cookies or third-party cookies</li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-lg font-bold text-foreground mb-2">
                    Opt-Out Options
                  </h3>
                  <p className="text-foreground/80">
                    You can opt out of targeted advertising by visiting industry
                    opt-out tools such as the Network Advertising Initiative
                    (NAI) opt-out tool or the Digital Advertising Alliance (DAA)
                    choice page.
                  </p>
                </div>

                <div>
                  <h3 className="text-lg font-bold text-foreground mb-2">
                    Do Not Track (DNT)
                  </h3>
                  <p className="text-foreground/80">
                    Some browsers include a Do Not Track feature. Currently,
                    there is no universal standard for recognizing DNT signals,
                    and Maniks International does not respond to DNT signals at
                    this time.
                  </p>
                </div>
              </div>

              <p className="text-foreground/80 leading-relaxed mt-4">
                Please note that disabling cookies may impact the functionality
                and user experience of our website. Essential cookies required
                for website operation cannot be disabled.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-foreground mb-4">
                7. Cookie Consent
              </h2>
              <p className="text-foreground/80 leading-relaxed">
                When you first visit our website, we display a cookie consent
                notice. By continuing to use our website after viewing this
                notice, you consent to our use of cookies as described in this
                policy. You can withdraw your consent at any time by adjusting
                your cookie settings.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-foreground mb-4">
                8. Updates to This Policy
              </h2>
              <p className="text-foreground/80 leading-relaxed">
                We may update this Cookie Policy from time to time to reflect
                changes in technology, legislation, or other factors. We will
                notify you of significant changes by posting the updated policy
                on our website. Your continued use of our website following such
                notification constitutes your acceptance of the updated policy.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-foreground mb-4">
                9. Contact Us
              </h2>
              <p className="text-foreground/80 leading-relaxed">
                If you have any questions about this Cookie Policy or how we use
                cookies, please contact us.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-foreground mb-4">
                10. Additional Resources
              </h2>
              <p className="text-foreground/80 leading-relaxed">
                For more information about cookies and privacy, you may find the
                following resources helpful:
              </p>
              <ul className="list-disc list-inside space-y-2 text-foreground/80 mt-4">
                <li>All About Cookies (www.allaboutcookies.org)</li>
                <li>
                  Network Advertising Initiative (www.networkadvertising.org)
                </li>
                <li>Digital Advertising Alliance (www.aboutads.info)</li>
                <li>
                  European Commission Cookies Information
                  (ec.europa.eu/ipg/basics/cookies/index_en.htm)
                </li>
              </ul>
            </section>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}
