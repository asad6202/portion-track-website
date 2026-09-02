import type { Metadata } from "next";
import Link from "next/link";


export const metadata: Metadata = {
  title: "Terms of Use | Portion Track",
  description: "Terms of Service for the Portion Track mobile app and website.",
};

const sections = [
  {
    number: "1",
    title: "Definitions",
    body: '"App" means the Portion Track mobile application. "Service" means the App and related functionality provided by Portion Track. "User" means any individual who downloads, accesses, or uses the Service.',
  },
  {
    number: "2",
    title: "Eligibility",
    body: "You must be at least 18 years of age, or the age of majority in your jurisdiction, to purchase a subscription. If you are under the applicable age of majority, you may use the Service only with the involvement and consent of a parent or legal guardian.",
  },
  {
    number: "3",
    title: "Purpose of the Service",
    body: "Portion Track is a general wellness application designed to support healthier eating habits through portion awareness, meal tracking, meal photo analysis, and educational guidance. The Service promotes general wellness and is not intended to provide individualized healthcare.",
  },
  {
    number: "4",
    title: "Medical Disclaimer",
    body: "Portion Track is not a medical device and does not provide individualized medical, nutrition, or healthcare advice. Meal analysis, portion estimates, recommendations, and educational content are estimates only and should not replace consultation with a physician, registered dietitian, or other qualified healthcare professional. Always seek professional medical advice regarding your health, medications, diet, or treatment.",
  },
  {
    number: "5",
    title: "Artificial Intelligence Meal Analysis",
    body: "The optional meal photo analysis feature uses artificial intelligence to identify foods and estimate portions. AI-generated results may contain errors or omissions. Users remain responsible for reviewing and confirming all entries before saving them and for decisions made based on AI-generated information. Meal images are processed temporarily for analysis and are not permanently stored by Portion Track.",
  },
  {
    number: "6",
    title: "Accuracy",
    body: "While we continually improve the Service, we do not guarantee the completeness, accuracy, reliability, or suitability of any food identification, portion estimate, recommendation, or educational content for your individual circumstances.",
  },
  {
    number: "7",
    title: "Privacy and Local Data Storage",
    body: "Portion Track is intentionally designed with a privacy-first philosophy. The Service does not require user accounts. Food logs, goals, preferences, weight history, and related information are stored locally on your device. Portion Track does not intentionally collect personally identifiable information unless you voluntarily provide it when contacting us for support. Because we do not maintain user accounts or cloud backups, we cannot recover lost data if the App is deleted, your device is replaced or reset, or data is not successfully transferred during device migration.",
  },
  {
    number: "8",
    title: "Subscriptions",
    body: "Certain features require a paid subscription purchased through the Apple App Store or Google Play. Subscriptions automatically renew unless cancelled through your Apple App Store or Google Play account before the end of the current billing period. Billing, renewals, cancellations, refunds, promotional offers, and payment processing are administered by the applicable app store and are subject to that store's terms and policies. Pricing may change in the future.",
  },
  {
    number: "9",
    title: "License",
    body: "We grant you a limited, non-exclusive, non-transferable, revocable license to use the Service for your personal use. Unless expressly authorized by us, you may not copy, redistribute, modify, commercially exploit, or reverse engineer the Service except as permitted by applicable law.",
  },
  {
    number: "10",
    title: "Acceptable Use",
    body: "You agree not to misuse the Service, attempt unauthorized access, bypass subscription features, introduce malicious software, interfere with the operation or security of the Service, use automated tools without authorization, or violate applicable laws.",
  },
  {
    number: "11",
    title: "Intellectual Property",
    body: "All software, graphics, logos, trademarks, educational materials, designs, and related content within Portion Track are owned by A Focus On Health LLC or its licensors and are protected by applicable intellectual property laws.",
  },
  {
    number: "12",
    title: "Feedback",
    body: "If you submit suggestions, ideas, comments, bug reports, or feature requests, you grant A Focus On Health LLC the unrestricted right to use that feedback without compensation or obligation.",
  },
  {
    number: "13",
    title: "Updates and Availability",
    body: "We may modify, improve, replace, suspend, or discontinue features of the Service at any time. We do not guarantee uninterrupted availability and may temporarily suspend the Service for maintenance, updates, security, or operational reasons.",
  },
  {
    number: "14",
    title: "Third-Party Services",
    body: "The Service relies on third-party providers, including payment processors, cloud hosting providers, artificial intelligence providers, and other technology providers necessary to operate the Service. We are not responsible for interruptions or failures caused by those third-party services.",
  },
  {
    number: "15",
    title: "Disclaimer of Warranties",
    body: 'TO THE MAXIMUM EXTENT PERMITTED BY LAW, THE SERVICE IS PROVIDED "AS IS" AND "AS AVAILABLE" WITHOUT WARRANTIES OF ANY KIND, WHETHER EXPRESS OR IMPLIED, INCLUDING WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, NON-INFRINGEMENT, OR ACCURACY.',
  },
  {
    number: "16",
    title: "Limitation of Liability",
    body: "To the fullest extent permitted by applicable law, A Focus On Health LLC shall not be liable for indirect, incidental, consequential, special, exemplary, or punitive damages arising from your use of the Service. Our total liability shall not exceed the amount you paid for Portion Track during the twelve (12) months immediately preceding the claim.",
  },
  {
    number: "17",
    title: "Indemnification",
    body: "You agree to indemnify and hold harmless A Focus On Health LLC from claims, damages, losses, liabilities, and expenses arising from your misuse of the Service or violation of these Terms.",
  },
  {
    number: "18",
    title: "Force Majeure",
    body: "We are not responsible for delays or failures caused by events beyond our reasonable control, including internet outages, cloud or AI provider failures, natural disasters, labor disputes, governmental actions, or similar events.",
  },
  {
    number: "19",
    title: "Export Compliance",
    body: "You agree to comply with all applicable export control and sanctions laws governing your use of the Service.",
  },
  {
    number: "20",
    title: "Governing Law",
    body: "These Terms are governed by the laws of the State of Colorado, USA, without regard to conflict-of-law principles.",
  },
  {
    number: "21",
    title: "Severability",
    body: "If any provision of these Terms is determined to be invalid or unenforceable, the remaining provisions shall remain in full force and effect.",
  },
  {
    number: "22",
    title: "Entire Agreement",
    body: "These Terms, together with the Portion Track Privacy Policy, which is incorporated by reference, constitute the entire agreement between you and A Focus On Health LLC regarding your use of the Service.",
  },
  {
    number: "23",
    title: "Contact Information",
    body: "A Focus On Health LLC\nDBA Portion Track\nColorado, USA\nWebsite: https://portiontrack.com\nEmail: portiontrack@gmail.com",
  },
];

export default function TermsOfUsePage() {
  return (
    <>

      <main className="mx-auto max-w-3xl px-4 py-16 sm:px-6 sm:py-20">
        <h1 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
          Terms of Service
        </h1>
        <p className="mt-2 text-lg font-medium text-foreground">
          Portion Track Terms of Service
        </p>
        <p className="mt-1 text-sm text-muted">Effective Date: July 2026</p>

        <div className="mt-8 space-y-6 rounded-2xl border border-border bg-brand-green-soft/30 p-6">
          <p className="text-sm font-semibold uppercase tracking-wide text-brand-green">
            Our Commitment
          </p>
          <p className="text-base leading-relaxed text-muted">
            Portion Track was built with a simple philosophy: help people build
            healthier eating habits while respecting their privacy. These Terms
            explain your rights and responsibilities when using the Service and
            help us provide a safe, reliable experience.
          </p>
        </div>

        <p className="mt-8 text-base leading-relaxed text-muted">
          These Terms of Service (&ldquo;Terms&rdquo;) govern your access to and
          use of the Portion Track mobile application and related services
          (collectively, the &ldquo;Service&rdquo;), owned and operated by A Focus
          On Health LLC DBA Portion Track (&ldquo;Portion Track,&rdquo;
          &ldquo;we,&rdquo; &ldquo;our,&rdquo; or &ldquo;us&rdquo;). By
          downloading, installing, accessing, or using the Service, you agree to
          be bound by these Terms. If you do not agree, please do not use the
          Service.
        </p>

        <div className="mt-10 space-y-8">
          {sections.map((section) => (
            <section key={section.number}>
              <h2 className="text-lg font-semibold text-foreground">
                {section.number}. {section.title}
              </h2>
              {section.number === "23" ? (
                <div className="mt-3 space-y-1 text-base leading-relaxed text-muted">
                  <p>A Focus On Health LLC</p>
                  <p>DBA Portion Track</p>
                  <p>Colorado, USA</p>
                  <p>
                    Website:{" "}
                    <a
                      href="https://portiontrack.com"
                      className="text-brand-green hover:underline"
                    >
                      https://portiontrack.com
                    </a>
                  </p>
                  <p>
                    Email:{" "}
                    <a
                      href="mailto:portiontrack@gmail.com"
                      className="text-brand-green hover:underline"
                    >
                      portiontrack@gmail.com
                    </a>
                  </p>
                </div>
              ) : (
                <p className="mt-3 text-base leading-relaxed text-muted">
                  {section.body}
                </p>
              )}
            </section>
          ))}
        </div>

        <Link
          href="/"
          className="mt-10 inline-block text-sm font-medium text-brand-green hover:underline"
        >
          ← Back to home
        </Link>
      </main>
    </>
  );
}
