import React from "react";
import { Link } from "react-router-dom";
import * as S from "./TermsOfService.styled";

const TermsOfService: React.FC = () => {
  return (
    <S.Container>
      <S.Title>Terms of Service</S.Title>

      <S.LastUpdated as="div">
        Last Updated: <time dateTime="2024-12-20">December 20, 2024</time>
      </S.LastUpdated>

      <S.Section id="agreement" aria-labelledby="h-agreement">
        <S.SectionTitle id="h-agreement">1. Agreement to Terms</S.SectionTitle>
        <S.Paragraph>
          Welcome to Common Scents HQ. These Terms of Service ("Terms")
          constitute a legally binding agreement between you and Common Scents
          HQ ("we," "us," "our") regarding your access to and use of the website
          commonscentshq.com (the "Site") and any related services provided by
          us.
        </S.Paragraph>
        <S.Paragraph>
          By accessing or using our Site, you agree to be bound by these Terms
          and our Privacy Policy. If you disagree with any part of these Terms,
          you do not have permission to access the Site.
        </S.Paragraph>
      </S.Section>

      <S.Section id="intellectual-property" aria-labelledby="h-ip">
        <S.SectionTitle id="h-ip">
          2. Intellectual Property Rights
        </S.SectionTitle>

        <S.Subsection>
          <S.SubsectionTitle>2.1 Our Content</S.SubsectionTitle>
          <S.Paragraph>
            The Site and its original content, features, and functionality
            (including but not limited to text, graphics, logos, images,
            fragrance reviews, guides, and software) are owned by Common Scents
            HQ and are protected by international copyright, trademark, patent,
            trade secret, and other intellectual property laws.
          </S.Paragraph>

          <S.SubsectionTitle>2.2 Trademarks</S.SubsectionTitle>
          <S.Paragraph>
            "Common Scents HQ," "Common Scents," our logo, and any other marks
            displayed on the Site are trademarks of Common Scents HQ. You may
            not use these marks without our prior written permission.
          </S.Paragraph>

          <S.SubsectionTitle>2.3 Third-Party Content</S.SubsectionTitle>
          <S.Paragraph>
            Fragrance brand names, product names, and related trademarks
            mentioned on our Site are the property of their respective owners.
            We do not claim ownership of these third-party trademarks.
          </S.Paragraph>
        </S.Subsection>
      </S.Section>

      <S.Section id="use-of-site" aria-labelledby="h-use">
        <S.SectionTitle id="h-use">3. Use of the Site</S.SectionTitle>

        <S.Subsection>
          <S.SubsectionTitle>3.1 License to Use</S.SubsectionTitle>
          <S.Paragraph>
            We grant you a limited, non-exclusive, non-transferable,
            non-sublicensable license to access and use the Site for personal,
            non-commercial purposes in accordance with these Terms.
          </S.Paragraph>

          <S.SubsectionTitle>3.2 Prohibited Uses</S.SubsectionTitle>
          <S.Paragraph>You agree not to:</S.Paragraph>
          <S.List>
            <S.ListItem>
              Use the Site for any illegal purpose or in violation of any local,
              state, national, or international law
            </S.ListItem>
            <S.ListItem>
              Violate or infringe upon the intellectual property rights of
              others
            </S.ListItem>
            <S.ListItem>
              Transmit any material that is defamatory, offensive, or otherwise
              objectionable
            </S.ListItem>
            <S.ListItem>
              Attempt to gain unauthorized access to any portion of the Site or
              any systems or networks connected to the Site
            </S.ListItem>
            <S.ListItem>
              Engage in any data mining, harvesting, scraping, or similar data
              gathering activities without our express written consent
            </S.ListItem>
            <S.ListItem>
              Use automated systems (bots, scrapers, or spiders) to access the
              Site in a manner that sends more requests than a human can
              reasonably produce
            </S.ListItem>
            <S.ListItem>
              Interfere with or disrupt the Site or servers or networks
              connected to the Site
            </S.ListItem>
            <S.ListItem>
              Impersonate any person or entity or falsely state or misrepresent
              your affiliation with any person or entity
            </S.ListItem>
            <S.ListItem>
              Copy, reproduce, distribute, or create derivative works from our
              content without permission
            </S.ListItem>
            <S.ListItem>
              Remove, alter, or obscure any copyright, trademark, or other
              proprietary rights notices
            </S.ListItem>
          </S.List>
        </S.Subsection>
      </S.Section>

      <S.Section id="content" aria-labelledby="h-content">
        <S.SectionTitle id="h-content">
          4. Fragrance Reviews and Content
        </S.SectionTitle>

        <S.Subsection>
          <S.SubsectionTitle>4.1 Information Purpose Only</S.SubsectionTitle>
          <S.Paragraph>
            The fragrance reviews, guides, recommendations, and other content
            provided on our Site are for informational and entertainment
            purposes only. They represent our opinions and experiences and
            should not be considered professional advice.
          </S.Paragraph>

          <S.SubsectionTitle>4.2 No Guarantees</S.SubsectionTitle>
          <S.Paragraph>
            We make no warranties or guarantees about the accuracy,
            completeness, or reliability of any information, reviews, or
            recommendations on the Site. Your use of any information or
            materials on this Site is entirely at your own risk.
          </S.Paragraph>

          <S.SubsectionTitle>4.3 Third-Party Data</S.SubsectionTitle>
          <S.Paragraph>
            Some fragrance information displayed on our Site is obtained from
            third-party sources and APIs. We are not responsible for the
            accuracy or completeness of third-party data.
          </S.Paragraph>
        </S.Subsection>
      </S.Section>

      <S.Section id="affiliates" aria-labelledby="h-affiliates">
        <S.SectionTitle id="h-affiliates">
          5. Affiliate Relationships and Disclaimers
        </S.SectionTitle>

        <S.Subsection>
          <S.SubsectionTitle>5.1 Affiliate Links</S.SubsectionTitle>
          <S.Paragraph>
            Our Site may contain affiliate links to third-party websites and
            retailers. If you click on an affiliate link and make a purchase, we
            may receive a commission at no additional cost to you. These
            affiliate relationships do not influence our reviews or
            recommendations.
          </S.Paragraph>

          <S.SubsectionTitle>5.2 Third-Party Websites</S.SubsectionTitle>
          <S.Paragraph>
            We are not responsible for the content, privacy policies, or
            practices of any third-party websites or services. We encourage you
            to review the terms and privacy policies of any third-party sites
            you visit.
          </S.Paragraph>
        </S.Subsection>
      </S.Section>

      <S.Section id="api-usage" aria-labelledby="h-api">
        <S.SectionTitle id="h-api">6. API Usage and Rate Limits</S.SectionTitle>
        <S.Subsection>
          <S.Paragraph>
            Our Site provides access to fragrance review functionality through
            an API. To ensure fair usage and protect our infrastructure:
          </S.Paragraph>
          <S.List>
            <S.ListItem>
              <S.Strong>Rate Limits:</S.Strong> API requests are limited to 8
              requests per 15 minutes per IP address
            </S.ListItem>
            <S.ListItem>
              <S.Strong>Daily Limits:</S.Strong> Global daily limit of 5,000
              requests across all users
            </S.ListItem>
            <S.ListItem>
              <S.Strong>Speed Limiting:</S.Strong> Progressive delays may be
              applied after 3 requests within 15 minutes
            </S.ListItem>
            <S.ListItem>
              <S.Strong>Request Size:</S.Strong> Maximum request size of 10KB
            </S.ListItem>
          </S.List>
          <S.Paragraph>
            Exceeding these limits may result in temporary or permanent access
            restrictions. We reserve the right to modify these limits at any
            time without notice.
          </S.Paragraph>
        </S.Subsection>
      </S.Section>

      <S.Section id="accounts" aria-labelledby="h-accounts">
        <S.SectionTitle id="h-accounts">
          7. User Accounts and Data
        </S.SectionTitle>
        <S.Subsection>
          <S.Paragraph>
            Currently, our Site does not require user registration or account
            creation. If we introduce user accounts in the future, additional
            terms will apply and will be communicated to you at that time.
          </S.Paragraph>
        </S.Subsection>
      </S.Section>

      <S.Section id="privacy" aria-labelledby="h-privacy">
        <S.SectionTitle id="h-privacy">
          8. Privacy and Data Collection
        </S.SectionTitle>
        <S.Subsection>
          <S.Paragraph>
            Your use of the Site is also governed by our Privacy Policy, which
            describes how we collect, use, and protect your information. Please
            review our{" "}
            <S.Link as={Link} to="/privacy-policy">
              Privacy Policy
            </S.Link>{" "}
            to understand our practices.
          </S.Paragraph>
        </S.Subsection>
      </S.Section>

      <S.Section id="warranties" aria-labelledby="h-warranties">
        <S.SectionTitle id="h-warranties">
          9. Disclaimer of Warranties
        </S.SectionTitle>
        <S.Subsection>
          <S.Paragraph>
            THE SITE IS PROVIDED ON AN "AS IS" AND "AS AVAILABLE" BASIS WITHOUT
            WARRANTIES OF ANY KIND, EITHER EXPRESS OR IMPLIED, INCLUDING BUT NOT
            LIMITED TO WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR
            PURPOSE, NON-INFRINGEMENT, OR COURSE OF PERFORMANCE.
          </S.Paragraph>
          <S.Paragraph>We do not warrant that:</S.Paragraph>
          <S.List>
            <S.ListItem>
              The Site will function uninterrupted, secure, or error-free
            </S.ListItem>
            <S.ListItem>
              Defects will be corrected or that the Site is free of viruses or
              harmful components
            </S.ListItem>
            <S.ListItem>
              The results of using the Site will meet your requirements or
              expectations
            </S.ListItem>
            <S.ListItem>
              The quality of any information, products, or services obtained
              through the Site will meet your expectations
            </S.ListItem>
          </S.List>
        </S.Subsection>
      </S.Section>

      <S.Section id="liability" aria-labelledby="h-liability">
        <S.SectionTitle id="h-liability">
          10. Limitation of Liability
        </S.SectionTitle>
        <S.Subsection>
          <S.Paragraph>
            TO THE MAXIMUM EXTENT PERMITTED BY LAW, IN NO EVENT SHALL COMMON
            SCENTS HQ, ITS OFFICERS, DIRECTORS, EMPLOYEES, OR AGENTS BE LIABLE
            FOR ANY INDIRECT, PUNITIVE, INCIDENTAL, SPECIAL, CONSEQUENTIAL, OR
            EXEMPLARY DAMAGES, INCLUDING WITHOUT LIMITATION DAMAGES FOR LOSS OF
            PROFITS, GOODWILL, USE, DATA, OR OTHER INTANGIBLE LOSSES, ARISING
            OUT OF OR RELATING TO:
          </S.Paragraph>
          <S.List>
            <S.ListItem>
              Your access to or use of (or inability to access or use) the Site
            </S.ListItem>
            <S.ListItem>
              Any conduct or content of any third party on the Site
            </S.ListItem>
            <S.ListItem>Any content obtained from the Site</S.ListItem>
            <S.ListItem>
              Unauthorized access, use, or alteration of your transmissions or
              content
            </S.ListItem>
          </S.List>
          <S.Paragraph>
            IN NO EVENT SHALL OUR TOTAL LIABILITY TO YOU FOR ALL DAMAGES,
            LOSSES, OR CAUSES OF ACTION EXCEED ONE HUNDRED DOLLARS ($100).
          </S.Paragraph>
        </S.Subsection>
      </S.Section>

      <S.Section id="indemnification" aria-labelledby="h-indemnification">
        <S.SectionTitle id="h-indemnification">
          11. Indemnification
        </S.SectionTitle>
        <S.Subsection>
          <S.Paragraph>
            You agree to defend, indemnify, and hold harmless Common Scents HQ
            and its officers, directors, employees, and agents from and against
            any claims, liabilities, damages, judgments, awards, losses, costs,
            expenses, or fees (including reasonable attorneys' fees) arising out
            of or relating to:
          </S.Paragraph>
          <S.List>
            <S.ListItem>Your violation of these Terms</S.ListItem>
            <S.ListItem>Your use of the Site</S.ListItem>
            <S.ListItem>
              Your violation of any rights of another party
            </S.ListItem>
            <S.ListItem>
              Your violation of any applicable law or regulation
            </S.ListItem>
          </S.List>
        </S.Subsection>
      </S.Section>

      <S.Section id="modifications" aria-labelledby="h-modifications">
        <S.SectionTitle id="h-modifications">
          12. Modifications to the Site
        </S.SectionTitle>
        <S.Subsection>
          <S.Paragraph>
            We reserve the right to modify, suspend, or discontinue the Site (or
            any part thereof) at any time, with or without notice, for any
            reason. We will not be liable to you or any third party for any
            modification, suspension, or discontinuance of the Site.
          </S.Paragraph>
        </S.Subsection>
      </S.Section>

      <S.Section id="changes" aria-labelledby="h-changes">
        <S.SectionTitle id="h-changes">13. Changes to Terms</S.SectionTitle>
        <S.Subsection>
          <S.Paragraph>
            We reserve the right to modify these Terms at any time. If we make
            material changes, we will notify you by updating the "Last Updated"
            date at the top of these Terms. Your continued use of the Site after
            any such changes constitutes your acceptance of the new Terms.
          </S.Paragraph>
          <S.Paragraph>
            We encourage you to review these Terms periodically for any updates
            or changes.
          </S.Paragraph>
        </S.Subsection>
      </S.Section>

      <S.Section id="termination" aria-labelledby="h-termination">
        <S.SectionTitle id="h-termination">14. Termination</S.SectionTitle>
        <S.Subsection>
          <S.Paragraph>
            We may terminate or suspend your access to the Site immediately,
            without prior notice or liability, for any reason, including but not
            limited to your breach of these Terms.
          </S.Paragraph>
          <S.Paragraph>
            Upon termination, your right to use the Site will immediately cease.
            All provisions of these Terms that by their nature should survive
            termination shall survive, including but not limited to ownership
            provisions, warranty disclaimers, indemnity, and limitations of
            liability.
          </S.Paragraph>
        </S.Subsection>
      </S.Section>

      <S.Section id="disputes" aria-labelledby="h-disputes">
        <S.SectionTitle id="h-disputes">
          15. Governing Law and Dispute Resolution
        </S.SectionTitle>

        <S.Subsection>
          <S.SubsectionTitle>15.1 Governing Law</S.SubsectionTitle>
          <S.Paragraph>
            These Terms shall be governed by and construed in accordance with
            the laws of the jurisdiction in which Common Scents HQ operates,
            without regard to its conflict of law provisions.
          </S.Paragraph>

          <S.SubsectionTitle>15.2 Dispute Resolution</S.SubsectionTitle>
          <S.Paragraph>
            Any disputes arising out of or relating to these Terms or the Site
            shall be resolved through binding arbitration, except that either
            party may seek injunctive or other equitable relief in court to
            prevent the actual or threatened infringement, misappropriation, or
            violation of intellectual property rights.
          </S.Paragraph>
        </S.Subsection>
      </S.Section>

      <S.Section id="severability" aria-labelledby="h-severability">
        <S.SectionTitle id="h-severability">16. Severability</S.SectionTitle>
        <S.Subsection>
          <S.Paragraph>
            If any provision of these Terms is held to be unenforceable or
            invalid, such provision will be changed and interpreted to
            accomplish the objectives of such provision to the greatest extent
            possible under applicable law, and the remaining provisions will
            continue in full force and effect.
          </S.Paragraph>
        </S.Subsection>
      </S.Section>

      <S.Section id="waiver" aria-labelledby="h-waiver">
        <S.SectionTitle id="h-waiver">17. Waiver</S.SectionTitle>
        <S.Subsection>
          <S.Paragraph>
            Our failure to enforce any right or provision of these Terms will
            not be considered a waiver of those rights. The waiver of any such
            right or provision will be effective only if in writing and signed
            by our authorized representative.
          </S.Paragraph>
        </S.Subsection>
      </S.Section>

      <S.Section id="entire-agreement" aria-labelledby="h-entire-agreement">
        <S.SectionTitle id="h-entire-agreement">
          18. Entire Agreement
        </S.SectionTitle>
        <S.Subsection>
          <S.Paragraph>
            These Terms, together with our Privacy Policy and any other legal
            notices published by us on the Site, constitute the entire agreement
            between you and Common Scents HQ concerning the Site and supersede
            all prior or contemporaneous communications and proposals, whether
            electronic, oral, or written.
          </S.Paragraph>
        </S.Subsection>
      </S.Section>

      <S.Section id="contact" aria-labelledby="h-contact">
        <S.SectionTitle id="h-contact">19. Contact Information</S.SectionTitle>
        <S.Subsection>
          <S.Paragraph>
            If you have any questions about these Terms, please contact us:
          </S.Paragraph>
          <S.Paragraph>
            <S.Strong>Email:</S.Strong>{" "}
            <S.Link href="mailto:legal@commonscentshq.com">
              legal@commonscentshq.com
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

      <S.Section id="acknowledgment" aria-labelledby="h-acknowledgment">
        <S.SectionTitle id="h-acknowledgment">
          20. Acknowledgment
        </S.SectionTitle>
        <S.Subsection>
          <S.Paragraph>
            BY USING THE SITE, YOU ACKNOWLEDGE THAT YOU HAVE READ THESE TERMS OF
            SERVICE AND AGREE TO BE BOUND BY THEM.
          </S.Paragraph>
        </S.Subsection>
      </S.Section>
    </S.Container>
  );
};

export default TermsOfService;
