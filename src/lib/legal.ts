/**
 * Single source of truth for the legal documents (Privacy Policy + Terms of
 * Service), rendered by the shared tabbed page at /privacy-policy and
 * /terms-of-service.
 *
 * Content is currently a DRAFT under client/legal review. Unresolved items are
 * left as [bracketed] placeholders — the renderer highlights them so nothing
 * ships looking blank. Update the dates below + any [..] tokens when finalised.
 *
 * Contact details are pulled from BUSINESS (lib/site) so they never drift.
 * Inline links use markdown syntax: [label](/path).
 */
import { BUSINESS } from './site';

const FULL_ADDRESS = `${BUSINESS.address.street}, ${BUSINESS.address.locality}, ${BUSINESS.address.postalCode}, ${BUSINESS.address.countryName}`;

// TODO(client/legal): set real dates once the documents are approved.
export const LEGAL_EFFECTIVE_DATE = '[DATE]';
export const LEGAL_LAST_UPDATED = '[DATE]';

export type LegalKey = 'privacy' | 'terms';

export type ListItem = string | { label: string; text: string; href?: string };

export type Block =
  | { type: 'p'; text: string }
  | { type: 'subheading'; text: string }
  | { type: 'list'; items: ListItem[] }
  | { type: 'note'; text: string }
  | { type: 'callout'; text: string };

export interface LegalSection {
  id: string;
  heading: string;
  blocks: Block[];
}

export interface LegalDoc {
  key: LegalKey;
  /** Tab label + page title. */
  title: string;
  /** Short label for breadcrumbs / nav. */
  shortTitle: string;
  path: string;
  sections: LegalSection[];
}

const contactBlock = (): Block => ({
  type: 'list',
  items: [
    { label: 'Company', text: BUSINESS.legalName },
    { label: 'Address', text: FULL_ADDRESS },
    { label: 'Email', text: BUSINESS.email, href: `mailto:${BUSINESS.email}` },
    { label: 'Phone', text: BUSINESS.phoneDisplay, href: `tel:${BUSINESS.phone}` },
  ],
});

const privacy: LegalDoc = {
  key: 'privacy',
  title: 'Privacy Policy',
  shortTitle: 'Privacy',
  path: '/privacy-policy',
  sections: [
    {
      id: 'who-we-are',
      heading: 'Who we are',
      blocks: [
        { type: 'p', text: `Study Abroad (Pvt) Ltd ("we", "us", "our") is an international education and student-visa consultancy based at ${FULL_ADDRESS}. This policy explains how we collect, use, share, and protect your personal information when you use our website [www.studyabroad.lk](https://www.studyabroad.lk) (the "Website") or our services.` },
        { type: 'p', text: 'For any privacy questions or requests, contact us via:' },
        {
          type: 'list',
          items: [
            { label: 'Email', text: BUSINESS.email, href: `mailto:${BUSINESS.email}` },
            { label: 'Phone', text: BUSINESS.phoneDisplay, href: `tel:${BUSINESS.phone}` },
            { label: 'Postal Address', text: '[Insert full postal address if different from above]' },
            { label: 'Optional', text: '[Name or contact info of a Data Protection Officer, if applicable]' },
          ],
        },
      ],
    },
    {
      id: 'information-we-collect',
      heading: 'Information we collect',
      blocks: [
        { type: 'p', text: 'We collect information to provide you with consultancy services and to ensure our website functions correctly.' },
        { type: 'subheading', text: 'a. Information you give us' },
        {
          type: 'list',
          items: [
            { label: 'Consultation enquiry form', text: 'First name, last name, phone number, email address, intended level of study, current qualification, preferred destination country, and any message you choose to provide.' },
            { label: 'Live chat', text: 'Any information, details, or contact data you voluntarily share in a live chat conversation with us via our embedded widget.' },
            { label: 'Direct contact', text: 'Information contained in emails, forms, or phone calls you initiate with us.' },
          ],
        },
        { type: 'subheading', text: 'b. Information collected automatically' },
        {
          type: 'list',
          items: [
            'Standard technical data such as your IP address, browser type, operating system, device type, pages visited, and timestamps (collected via our hosting provider’s logs and embedded tools).',
            'Essential cookies and similar tracking technologies (see Section 6).',
          ],
        },
        { type: 'note', text: 'We do not intentionally collect sensitive or special-category data (e.g., health data, political opinions, religious beliefs) through the Website. Please do not submit such data in free-text contact fields.' },
      ],
    },
    {
      id: 'how-we-use',
      heading: 'How we use your information',
      blocks: [
        { type: 'p', text: 'We use your personal data strictly for the following purposes:' },
        {
          type: 'list',
          items: [
            'To respond to your enquiries and provide customized education-consultancy services (including academic counselling, university applications, and visa guidance).',
            'To communicate directly with you about your active enquiries and our services.',
            'To safely operate, maintain, secure, and improve our website.',
            'To comply with legal and regulatory obligations in Sri Lanka.',
          ],
        },
      ],
    },
    {
      id: 'legal-basis',
      heading: 'Legal basis for processing',
      blocks: [
        { type: 'p', text: 'Under applicable data protection laws, we process your data on the following bases:' },
        {
          type: 'list',
          items: [
            { label: 'Your Consent', text: 'When you voluntarily submit a contact form or engage with our live chat.' },
            { label: 'Performance of a Contract / Service', text: 'To take the necessary steps to provide the consultancy services you explicitly request from us.' },
            { label: 'Legitimate Interests', text: 'To effectively respond to business enquiries, manage client relationships, and ensure the cybersecurity of our Website.' },
            { label: 'Legal Obligations', text: 'To comply with statutory requirements when necessary.' },
          ],
        },
        { type: 'note', text: '[Client/Legal to confirm and adjust these processing bases under the PDPA/GDPR if necessary]' },
      ],
    },
    {
      id: 'how-we-share',
      heading: 'How we share your information',
      blocks: [
        { type: 'p', text: 'We do not sell, rent, or trade your personal data. We share it only with trusted entities as described below:' },
        {
          type: 'list',
          items: [
            { label: 'Zoho', text: 'Our third-party platform provider used to host our live-chat widget and manage inbound customer enquiries.' },
            { label: 'Our hosting provider', text: '[Insert hosting platform] — necessary to securely operate, deploy, and serve the Website.' },
            { label: 'Educational institutions / partners', text: 'Shared only as necessary to progress an application that you have explicitly authorized us to make on your behalf.' },
            { label: 'Google', text: 'Embedded maps and video assets (YouTube) may process limited technical data when you interact with them on our site.' },
            { label: 'Authorities / professional advisors', text: 'Only where required by law, regulation, or court order.' },
          ],
        },
      ],
    },
    {
      id: 'cookies',
      heading: 'Cookies & similar technologies',
      blocks: [
        { type: 'p', text: 'Our website uses cookies and similar technologies strictly to support core features and ensure our communication channels function effectively.' },
        {
          type: 'list',
          items: [
            { label: 'Zoho SalesIQ', text: 'Our embedded live-chat widget deploys cookies to manage active chat sessions and recognize returning visitors, allowing us to maintain your conversation history.' },
            { label: 'Google Maps', text: 'Limited third-party cookies may be processed by Google only if you interact with the embedded map on our contact page.' },
            { label: 'YouTube', text: 'Video assets embedded on our site utilize YouTube’s privacy-enhanced ("nocookie") mode, meaning tracking cookies are not deployed unless you actively play a video.' },
          ],
        },
      ],
    },
    {
      id: 'international-transfers',
      heading: 'International data transfers',
      blocks: [
        { type: 'p', text: 'Certain third-party infrastructure providers listed above (such as Zoho, Google, and [Insert hosting platform]) may store or process data on cloud servers located outside Sri Lanka. Where international transfers occur, we take reasonable measures to ensure your data remains protected in accordance with this policy and applicable Sri Lankan laws.' },
      ],
    },
    {
      id: 'data-retention',
      heading: 'Data retention',
      blocks: [
        { type: 'p', text: 'We keep your personal data only as long as necessary to fulfill the educational consultancy purposes outlined in this policy, or as required to meet statutory legal, tax, or accounting obligations.' },
        { type: 'note', text: '[Client/Legal to specify exact retention periods, e.g., "Enquiry data is kept for X years following the conclusion of your consultation services"]' },
      ],
    },
    {
      id: 'your-rights',
      heading: 'Your rights',
      blocks: [
        { type: 'p', text: 'Subject to applicable local laws (including Sri Lanka’s PDPA), you may have the right to:' },
        {
          type: 'list',
          items: [
            'Access the personal data we hold about you.',
            'Correct or update inaccurate or incomplete records.',
            'Request the deletion of your data when it is no longer needed.',
            'Object to or restrict certain types of data processing.',
            'Withdraw your consent at any time (where processing is explicitly based on your consent).',
          ],
        },
        { type: 'p', text: `To exercise any of these rights, please contact us directly at [${BUSINESS.email}](mailto:${BUSINESS.email}). We will review and process your request manually in accordance with statutory timelines.` },
      ],
    },
    {
      id: 'security',
      heading: 'Security',
      blocks: [
        { type: 'p', text: 'We deploy standard technical and organizational security measures designed to protect your personal data against unauthorized access, loss, alteration, or disclosure. However, please note that no method of transmission over the internet or electronic storage is 100% secure, and we cannot guarantee absolute security.' },
      ],
    },
    {
      id: 'childrens-privacy',
      heading: "Children's privacy",
      blocks: [
        { type: 'p', text: 'Our direct website services are intended for individuals aged 18 and over. Where a prospective student is a minor, we require a parent or legal guardian to initiate contact, submit enquiries, and provide consent for any personal data shared.' },
      ],
    },
    {
      id: 'changes',
      heading: 'Changes to this policy',
      blocks: [
        { type: 'p', text: 'We may update this Privacy Policy from time to time to reflect changes in our practices or legal obligations. The latest version will always be published on this page with an updated "Last updated" date.' },
      ],
    },
    {
      id: 'contact',
      heading: 'Contact us',
      blocks: [
        { type: 'p', text: 'If you have any questions or concerns regarding this policy, please reach out to us:' },
        contactBlock(),
      ],
    },
  ],
};

const terms: LegalDoc = {
  key: 'terms',
  title: 'Terms of Service',
  shortTitle: 'Terms',
  path: '/terms-of-service',
  sections: [
    {
      id: 'agreement',
      heading: 'Agreement to these terms',
      blocks: [
        { type: 'p', text: 'By accessing or using [www.studyabroad.lk](https://www.studyabroad.lk) (the "Website") or utilizing our professional consultation workflows, you agree to be bound by these Terms of Service. If you do not agree to these terms, please immediately discontinue your use of the Website.' },
      ],
    },
    {
      id: 'who-we-are',
      heading: 'Who we are',
      blocks: [
        { type: 'p', text: 'Study Abroad (Pvt) Ltd ("we", "us", "our") is an established international education and student visa consultancy based in Colombo, Sri Lanka, operating since 2007.' },
      ],
    },
    {
      id: 'our-services',
      heading: 'Our services',
      blocks: [
        { type: 'p', text: 'We provide professional international education-consultancy services, including academic and career counselling, university matching, application processing, student-visa documentation guidance, and related pre-departure support. The Website is designed to provide general information regarding global study options.' },
      ],
    },
    {
      id: 'no-guarantee',
      heading: 'No guarantee of outcomes',
      blocks: [
        { type: 'p', text: 'While we offer expert professional guidance and application support, all admission decisions are made exclusively by the respective universities/colleges, and all student visa decisions are made solely by the relevant foreign immigration authorities or embassies.' },
        { type: 'callout', text: 'Study Abroad (Pvt) Ltd explicitly does not guarantee university admission, scholarships, visa approvals, or specific processing timelines. Any success references, metrics, or timeline estimates provided on our website or during consultations are indicative only.' },
      ],
    },
    {
      id: 'eligibility',
      heading: 'Eligibility',
      blocks: [
        { type: 'p', text: 'The Website and our services are intended solely for individuals aged 18 or over. Minors looking to study abroad must interact with our services via the direct supervision, participation, and explicit consent of a parent or legal guardian. By submitting data to us, you confirm that all information provided is genuine and accurate.' },
      ],
    },
    {
      id: 'acceptable-use',
      heading: 'Acceptable use',
      blocks: [
        { type: 'p', text: 'You agree to use our website strictly for lawful purposes. You are explicitly prohibited from:' },
        {
          type: 'list',
          items: [
            'Misusing the Website to submit false, fraudulent, or forged academic or financial documentation.',
            'Submitting third-party personal information without explicit legal authority.',
            'Attempting to disrupt, compromise, or gain unauthorized access to the Website’s underlying infrastructure, servers, or scripts.',
          ],
        },
      ],
    },
    {
      id: 'enquiries',
      heading: 'Enquiries and communications',
      blocks: [
        { type: 'p', text: 'By submitting a consultation enquiry form or engaging with our live-chat widget, you authorize us to contact you directly via phone, email, or messaging apps regarding your requested educational pathways. All data submitted through these channels is managed in strict accordance with our [Privacy Policy](/privacy-policy).' },
      ],
    },
    {
      id: 'intellectual-property',
      heading: 'Intellectual property',
      blocks: [
        { type: 'p', text: 'All original content, text, graphics, branding elements, logos, custom layouts, and code structures displayed on the Website are owned by or licensed to Study Abroad (Pvt) Ltd and are protected by Sri Lankan and international copyright and intellectual property laws. You may not copy, harvest, republish, or reuse any element without our explicit prior written consent.' },
      ],
    },
    {
      id: 'third-party',
      heading: 'Third-party links and embedded content',
      blocks: [
        { type: 'p', text: 'Our website integrates external elements to optimize user experience (e.g., Google Maps, YouTube videos, and third-party live-chat scripts). We have no direct control over, and assume no responsibility for, the content, operational uptime, privacy frameworks, or business practices of these independent third-party platforms.' },
      ],
    },
    {
      id: 'disclaimers',
      heading: 'Disclaimers',
      blocks: [
        { type: 'p', text: 'The Website and all information contained within it are provided on an "as is" and "as available" basis, without express or implied warranties of any kind. We do not warrant that the general information on global universities is entirely error-free, up-to-the-minute, or that the Website will remain entirely uninterrupted or secure from external cyber threats.' },
      ],
    },
    {
      id: 'liability',
      heading: 'Limitation of liability',
      blocks: [
        { type: 'p', text: 'To the maximum extent permitted under the laws of Sri Lanka, Study Abroad (Pvt) Ltd, its directors, and its employees shall not be liable for any indirect, incidental, special, or consequential losses, financial damages, or missed academic opportunities arising from:' },
        {
          type: 'list',
          items: [
            'Your reliance on general information published on the Website.',
            'Any application or visa rejection issued by third-party universities or foreign governments.',
          ],
        },
        { type: 'note', text: '[Client/Legal to confirm specific financial liability caps or limits if desired]' },
      ],
    },
    {
      id: 'indemnification',
      heading: 'Indemnification',
      blocks: [
        { type: 'p', text: 'You agree to indemnify, defend, and hold harmless Study Abroad (Pvt) Ltd from and against any third-party claims, damages, liabilities, or operational costs arising out of your direct misuse of the Website or a material breach of these Terms of Service.' },
      ],
    },
    {
      id: 'privacy',
      heading: 'Privacy',
      blocks: [
        { type: 'p', text: 'Your access to and use of the Website is simultaneously governed by our [Privacy Policy](/privacy-policy), which is incorporated directly into these Terms of Service by reference.' },
      ],
    },
    {
      id: 'governing-law',
      heading: 'Governing law and jurisdiction',
      blocks: [
        { type: 'p', text: 'These Terms of Service shall be governed by, construed, and enforced in accordance with the laws of the Democratic Socialist Republic of Sri Lanka. Any legal actions or disputes arising directly from these terms or our associated services shall be filed exclusively within the jurisdiction of the courts of [Colombo, Sri Lanka].' },
      ],
    },
    {
      id: 'changes',
      heading: 'Changes to these terms',
      blocks: [
        { type: 'p', text: 'We reserve the right to alter, edit, or replace these Terms of Service at any time. Any changes will become immediately effective upon being published on this page. Your continued use of the Website following updates indicates a full acceptance of the newly revised Terms.' },
      ],
    },
    {
      id: 'contact',
      heading: 'Contact us',
      blocks: [
        { type: 'p', text: 'For questions or clarification regarding these terms, please contact our main office:' },
        contactBlock(),
      ],
    },
  ],
};

export const legalDocs: Record<LegalKey, LegalDoc> = { privacy, terms };
