import React from "react";
import * as S from "./PrivacyPolicy.styled";

const PrivacyPolicy: React.FC = () => {
  return (
    <S.Container>
      <S.Title>Privacy Policy</S.Title>
      <S.LastUpdated as="div">
        Last Updated: <time dateTime="2024-12-20">December 20, 2024</time>
      </S.LastUpdated>

      <S.Section id="introduction" aria-labelledby="h-introduction">
        <S.SectionTitle id="h-introduction">1. Introduction</S.SectionTitle>
        <S.Subsection>
          <S.Paragraph>
            Welcome to Common Scents HQ ("we," "our," or "us"). We respect your
            privacy and are committed to protecting your personal information.
            This Privacy Policy explains how we collect, use, disclose, and
            safeguard your information when you visit our website
            commonscentshq.com (the "Site").
          </S.Paragraph>
          <S.Paragraph>
            By accessing or using our Site, you agree to this Privacy Policy. If
            you do not agree with the terms of this Privacy Policy, please do
            not access the Site.
          </S.Paragraph>
        </S.Subsection>
      </S.Section>

      <S.Section id="information-collection" aria-labelledby="h-collection">
        <S.SectionTitle id="h-collection">
          2. Information We Collect
        </S.SectionTitle>
        <S.Subsection>
          <S.SubsectionTitle>2.1 Information You Provide</S.SubsectionTitle>
          <S.Paragraph>
            Currently, our Site does not require user registration or account
            creation. However, we may collect information if you:
          </S.Paragraph>
          <S.List>
            <S.ListItem>Contact us via email or contact forms</S.ListItem>
            <S.ListItem>Subscribe to newsletters (if available)</S.ListItem>
            <S.ListItem>Participate in surveys or promotions</S.ListItem>
            <S.ListItem>Leave comments or feedback</S.ListItem>
          </S.List>

          <S.SubsectionTitle>
            2.2 Automatically Collected Information
          </S.SubsectionTitle>
          <S.Paragraph>
            When you visit our Site, we automatically collect certain
            information about your device and usage patterns, including:
          </S.Paragraph>
          <S.List>
            <S.ListItem>
              <S.Strong>Analytics Data:</S.Strong> We use Google Analytics 4 to
              collect data about site traffic, user behavior, page views,
              session duration, and geographic location (country/city level
              only).
            </S.ListItem>
            <S.ListItem>
              <S.Strong>Technical Data:</S.Strong> IP address, browser type,
              operating system, device type, referring URLs, and pages visited.
            </S.ListItem>
            <S.ListItem>
              <S.Strong>Cookies:</S.Strong> Small data files stored on your
              device to improve site functionality and user experience.
            </S.ListItem>
          </S.List>

          <S.SubsectionTitle>2.3 Third-Party Services</S.SubsectionTitle>
          <S.Paragraph>
            We use third-party services that may collect information used to
            identify you:
          </S.Paragraph>
          <S.List>
            <S.ListItem>
              <S.Strong>Google Analytics 4:</S.Strong> Collects anonymized usage
              data to help us understand how visitors interact with our Site.
              You can opt out by installing the{" "}
              <S.Link
                href="https://tools.google.com/dlpage/gaoptout"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Google Analytics Opt-out Browser Add-on (opens in new tab)"
              >
                Google Analytics Opt-out Browser Add-on
              </S.Link>
              .
            </S.ListItem>
            <S.ListItem>
              <S.Strong>Fragrance Data API:</S.Strong> When you use our
              fragrance review features, we make API requests to retrieve
              fragrance information. These requests are rate-limited and do not
              store personal information.
            </S.ListItem>
          </S.List>
        </S.Subsection>
      </S.Section>

      <S.Section id="usage" aria-labelledby="h-usage">
        <S.SectionTitle id="h-usage">
          3. How We Use Your Information
        </S.SectionTitle>
        <S.Subsection>
          <S.Paragraph>We use the information we collect to:</S.Paragraph>
          <S.List>
            <S.ListItem>Provide, operate, and maintain our Site</S.ListItem>
            <S.ListItem>
              Improve, personalize, and expand our Site and content
            </S.ListItem>
            <S.ListItem>
              Understand and analyze how you use our Site through analytics
            </S.ListItem>
            <S.ListItem>
              Develop new features, products, services, and functionality
            </S.ListItem>
            <S.ListItem>
              Respond to your comments, questions, and provide customer support
            </S.ListItem>
            <S.ListItem>
              Send you updates and marketing communications (with your consent)
            </S.ListItem>
            <S.ListItem>
              Monitor and prevent security issues and abuse
            </S.ListItem>
            <S.ListItem>Comply with legal obligations</S.ListItem>
          </S.List>
        </S.Subsection>
      </S.Section>

      <S.Section id="cookies" aria-labelledby="h-cookies">
        <S.SectionTitle id="h-cookies">
          4. Cookies and Tracking Technologies
        </S.SectionTitle>
        <S.Subsection>
          <S.Paragraph>
            We use cookies and similar tracking technologies to track activity
            on our Site and store certain information. You can instruct your
            browser to refuse all cookies or to indicate when a cookie is being
            sent. However, if you do not accept cookies, you may not be able to
            use some portions of our Site.
          </S.Paragraph>
          <S.SubsectionTitle>Types of Cookies We Use:</S.SubsectionTitle>
          <S.List>
            <S.ListItem>
              <S.Strong>Essential Cookies:</S.Strong> Required for basic site
              functionality
            </S.ListItem>
            <S.ListItem>
              <S.Strong>Analytics Cookies:</S.Strong> Help us understand how
              visitors use our Site (Google Analytics)
            </S.ListItem>
            <S.ListItem>
              <S.Strong>Functional Cookies:</S.Strong> Enable enhanced
              functionality and personalization
            </S.ListItem>
          </S.List>
        </S.Subsection>
      </S.Section>

      <S.Section id="sharing" aria-labelledby="h-sharing">
        <S.SectionTitle id="h-sharing">
          5. How We Share Your Information
        </S.SectionTitle>
        <S.Subsection>
          <S.Paragraph>
            We do not sell, trade, or rent your personal information to third
            parties. We may share information in the following circumstances:
          </S.Paragraph>
          <S.List>
            <S.ListItem>
              <S.Strong>Service Providers:</S.Strong> With trusted third-party
              service providers who assist us in operating our Site (e.g.,
              Google Analytics, hosting providers).
            </S.ListItem>
            <S.ListItem>
              <S.Strong>Legal Requirements:</S.Strong> When required by law or
              to respond to legal process, protect our rights, or ensure the
              safety of our users.
            </S.ListItem>
            <S.ListItem>
              <S.Strong>Business Transfers:</S.Strong> In connection with any
              merger, sale of company assets, financing, or acquisition of all
              or a portion of our business.
            </S.ListItem>
          </S.List>
        </S.Subsection>
      </S.Section>

      <S.Section id="data-security" aria-labelledby="h-security">
        <S.SectionTitle id="h-security">6. Data Security</S.SectionTitle>
        <S.Subsection>
          <S.Paragraph>
            We implement appropriate technical and organizational security
            measures to protect your information, including:
          </S.Paragraph>
          <S.List>
            <S.ListItem>SSL/TLS encryption for data transmission</S.ListItem>
            <S.ListItem>Rate limiting and DDoS protection</S.ListItem>
            <S.ListItem>
              Secure server configurations with security headers (Helmet.js)
            </S.ListItem>
            <S.ListItem>Regular security monitoring and updates</S.ListItem>
            <S.ListItem>Limited data retention policies</S.ListItem>
          </S.List>
          <S.Paragraph>
            However, no method of transmission over the Internet or electronic
            storage is 100% secure. While we strive to use commercially
            acceptable means to protect your information, we cannot guarantee
            absolute security.
          </S.Paragraph>
        </S.Subsection>
      </S.Section>

      <S.Section id="privacy-rights" aria-labelledby="h-rights">
        <S.SectionTitle id="h-rights">7. Your Privacy Rights</S.SectionTitle>
        <S.Subsection>
          <S.Paragraph>
            Depending on your location, you may have the following rights:
          </S.Paragraph>
          <S.List>
            <S.ListItem>
              <S.Strong>Access:</S.Strong> Request a copy of the personal
              information we hold about you
            </S.ListItem>
            <S.ListItem>
              <S.Strong>Correction:</S.Strong> Request correction of inaccurate
              or incomplete information
            </S.ListItem>
            <S.ListItem>
              <S.Strong>Deletion:</S.Strong> Request deletion of your personal
              information
            </S.ListItem>
            <S.ListItem>
              <S.Strong>Opt-Out:</S.Strong> Opt out of marketing communications
              or data collection (e.g., Google Analytics opt-out)
            </S.ListItem>
            <S.ListItem>
              <S.Strong>Data Portability:</S.Strong> Request a copy of your data
              in a machine-readable format
            </S.ListItem>
          </S.List>
          <S.Paragraph>
            To exercise these rights, please contact us at the information
            provided in Section 12.
          </S.Paragraph>
        </S.Subsection>
      </S.Section>

      <S.Section id="third-party" aria-labelledby="h-third-party">
        <S.SectionTitle id="h-third-party">8. Third-Party Links</S.SectionTitle>
        <S.Subsection>
          <S.Paragraph>
            Our Site may contain links to third-party websites, including
            affiliate links to fragrance retailers. We are not responsible for
            the privacy practices or content of these external sites. We
            encourage you to review the privacy policies of any third-party
            sites you visit.
          </S.Paragraph>
        </S.Subsection>
      </S.Section>

      <S.Section id="children" aria-labelledby="h-children">
        <S.SectionTitle id="h-children">9. Children's Privacy</S.SectionTitle>
        <S.Subsection>
          <S.Paragraph>
            Our Site is not intended for children under the age of 13. We do not
            knowingly collect personal information from children under 13. If
            you are a parent or guardian and believe your child has provided us
            with personal information, please contact us so we can delete such
            information.
          </S.Paragraph>
        </S.Subsection>
      </S.Section>

      <S.Section id="international" aria-labelledby="h-international">
        <S.SectionTitle id="h-international">
          10. International Data Transfers
        </S.SectionTitle>
        <S.Subsection>
          <S.Paragraph>
            Your information may be transferred to and maintained on servers
            located outside of your state, province, country, or other
            governmental jurisdiction where data protection laws may differ. By
            using our Site, you consent to the transfer of your information to
            these locations.
          </S.Paragraph>
        </S.Subsection>
      </S.Section>

      <S.Section id="changes" aria-labelledby="h-changes">
        <S.SectionTitle id="h-changes">
          11. Changes to This Privacy Policy
        </S.SectionTitle>
        <S.Subsection>
          <S.Paragraph>
            We may update our Privacy Policy from time to time. We will notify
            you of any changes by posting the new Privacy Policy on this page
            and updating the "Last Updated" date. You are advised to review this
            Privacy Policy periodically for any changes.
          </S.Paragraph>
          <S.Paragraph>
            Changes to this Privacy Policy are effective when posted on this
            page. Your continued use of the Site after any modifications
            indicates your acceptance of the updated Privacy Policy.
          </S.Paragraph>
        </S.Subsection>
      </S.Section>

      <S.Section id="contact" aria-labelledby="h-contact">
        <S.SectionTitle id="h-contact">12. Contact Us</S.SectionTitle>
        <S.Subsection>
          <S.Paragraph>
            If you have any questions about this Privacy Policy or our data
            practices, please contact us:
          </S.Paragraph>
          <S.Paragraph>
            <S.Strong>Email:</S.Strong>{" "}
            <S.Link href="mailto:privacy@commonscentshq.com">
              privacy@commonscentshq.com
            </S.Link>
          </S.Paragraph>
          <S.Paragraph>
            <S.Strong>Website:</S.Strong>{" "}
            <S.Link
              href="https://commonscentshq.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              https://commonscentshq.com
            </S.Link>
          </S.Paragraph>
        </S.Subsection>
      </S.Section>

      <S.Section id="ccpa" aria-labelledby="h-ccpa">
        <S.SectionTitle id="h-ccpa">
          13. California Privacy Rights (CCPA)
        </S.SectionTitle>
        <S.Subsection>
          <S.Paragraph>
            If you are a California resident, you have specific rights under the
            California Consumer Privacy Act (CCPA), including:
          </S.Paragraph>
          <S.List>
            <S.ListItem>
              The right to know what personal information we collect, use,
              disclose, and sell
            </S.ListItem>
            <S.ListItem>
              The right to request deletion of your personal information
            </S.ListItem>
            <S.ListItem>
              The right to opt-out of the sale of personal information (Note: We
              do not sell personal information)
            </S.ListItem>
            <S.ListItem>
              The right to non-discrimination for exercising your rights
            </S.ListItem>
          </S.List>
        </S.Subsection>
      </S.Section>

      <S.Section id="gdpr" aria-labelledby="h-gdpr">
        <S.SectionTitle id="h-gdpr">
          14. European Privacy Rights (GDPR)
        </S.SectionTitle>
        <S.Subsection>
          <S.Paragraph>
            If you are located in the European Economic Area (EEA), you have
            rights under the General Data Protection Regulation (GDPR),
            including:
          </S.Paragraph>
          <S.List>
            <S.ListItem>Right to access your personal data</S.ListItem>
            <S.ListItem>Right to rectification of inaccurate data</S.ListItem>
            <S.ListItem>Right to erasure ("right to be forgotten")</S.ListItem>
            <S.ListItem>Right to restrict processing</S.ListItem>
            <S.ListItem>Right to data portability</S.ListItem>
            <S.ListItem>Right to object to processing</S.ListItem>
            <S.ListItem>
              Right to withdraw consent at any time (where processing is based
              on consent)
            </S.ListItem>
          </S.List>
          <S.Paragraph>
            Our legal basis for processing your data includes: consent,
            performance of a contract, compliance with legal obligations, and
            legitimate interests.
          </S.Paragraph>
        </S.Subsection>
      </S.Section>
    </S.Container>
  );
};

export default PrivacyPolicy;
