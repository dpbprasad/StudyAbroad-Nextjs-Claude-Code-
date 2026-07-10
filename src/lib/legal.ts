/**
 * Single source of truth for the legal documents (Privacy Policy + Terms of
 * Service), rendered by the shared tabbed pages at /privacy-policy and
 * /terms-of-service.
 *
 * Content below is the client-approved final text ("Study Abroad Website Terms
 * and Privacy Policy — Reviewed 05-07-2026"), transcribed faithfully. Only
 * obvious typos/spacing were corrected; no legal wording was changed.
 *
 * PENDING before go-live: the Effective Date + Last Updated below are left as
 * highlighted placeholders — fill them in at publication (see LEGAL_* consts).
 * Contact details are transcribed exactly as they appear in the approved doc
 * (note: the privacy contact email differs by section, as in the source).
 * Inline links use markdown syntax: [label](/path).
 */

// TODO(launch): set the real dates when the site is deployed.
export const LEGAL_EFFECTIVE_DATE = '[To be set at publication]';
export const LEGAL_LAST_UPDATED = '[To be set at publication]';

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

/* --------------------------------------------------------------------------
 * PART B — Privacy Policy
 * ------------------------------------------------------------------------ */
const privacy: LegalDoc = {
  key: 'privacy',
  title: 'Privacy Policy',
  shortTitle: 'Privacy',
  path: '/privacy-policy',
  sections: [
    {
      id: 'introduction',
      heading: 'Introduction',
      blocks: [
        { type: 'p', text: `Study Abroad (Pvt) Ltd respects your privacy and is committed to protecting personal information. This Privacy Policy explains how we collect, use, store, disclose, transfer and safeguard personal information when you use our website, contact us, submit enquiries, provide documents, attend counselling or engage our education consultancy services.` },
        { type: 'p', text: `This Policy is intended to align with applicable Sri Lankan privacy and data protection requirements, including the Personal Data Protection Act, No. 9 of 2022, as amended where applicable, and with common international privacy transparency standards relevant to international education services.` },
        { type: 'p', text: `The Company primarily operates in Sri Lanka and complies with applicable Sri Lankan data protection laws. Users accessing the Website from outside Sri Lanka do so on the understanding that their personal data will be processed in Sri Lanka and may not be subject to the same protections as in their home jurisdiction.` },
      ],
    },
    {
      id: 'who-we-are',
      heading: 'Who we are',
      blocks: [
        { type: 'p', text: `Study Abroad (Pvt) Ltd is an education consultancy incorporated in Sri Lanka. For personal data collected through our website and consultancy services, Study Abroad generally acts as the data controller because we determine why and how personal information is processed for our services.` },
        {
          type: 'list',
          items: [
            { label: 'Company', text: `Study Abroad (Pvt) Ltd` },
            { label: 'Company Registration No.', text: `PV 60125` },
            { label: 'Registered Office', text: `109, Kirulapone Avenue, Colombo 05` },
            { label: 'Privacy Contact', text: `info@studyabroad.lk`, href: 'mailto:info@studyabroad.lk' },
            { label: 'General Contact', text: `0112 512515` },
          ],
        },
      ],
    },
    {
      id: 'scope',
      heading: 'Scope of this policy',
      blocks: [
        { type: 'p', text: `This Policy applies to personal information collected through our website, online forms, email, telephone, WhatsApp, SMS, social media, video meetings, CRM systems, physical documents, counselling sessions, application handling, visa documentation support and related education consultancy services.` },
        { type: 'p', text: `Third-party websites, university portals, visa portals, payment providers, social media platforms and external service providers may have their own privacy policies. You should review those policies separately.` },
      ],
    },
    {
      id: 'information-we-collect',
      heading: 'Personal information we collect',
      blocks: [
        { type: 'p', text: `Depending on your enquiry or service, we may collect the following categories of personal information (strictly no original documents; these documents are in the form of soft copies or hard copies):` },
        {
          type: 'list',
          items: [
            { label: 'Identification and contact details', text: `name, date of birth, nationality, gender where relevant, passport details, photograph, email address, telephone number, residential address and emergency contact details.` },
            { label: 'Education information', text: `school records, qualifications, transcripts, certificates, English test results, academic references, CV, statement of purpose, portfolios and academic history.` },
            { label: 'Employment information', text: `employment history, job title, employer details, salary information, EPF/ETF or equivalent records where relevant, employment letters and payslips.` },
            { label: 'Financial and sponsorship information', text: `information that aligns with student visa applications, based on the requirements of the country of choice.` },
            { label: 'Family and dependent information', text: `parent, spouse, partner, child or sponsor details where required for applications and visa support.` },
            { label: 'Immigration information', text: `previous visa applications, visa refusals, travel history, immigration history, passports, visa labels, entry/exit records and related official correspondence (copies only, not original documents).` },
            { label: 'Special or sensitive information where required', text: `health or medical information, police clearance/criminal record information, disability support information, biometric-related documents, or other information required by a university, government authority or visa process.` },
            { label: 'Communications', text: `emails, WhatsApp messages, call notes, meeting notes, enquiry records, counselling notes, consent records and service history.` },
          ],
        },
      ],
    },
    {
      id: 'how-we-collect',
      heading: 'How we collect information',
      blocks: [
        { type: 'p', text: `We may collect personal information directly from you, from your parent, legal guardian, spouse, sponsor, authorised representative, school, employer, institution, testing body, government authority, online form, social media platform, CRM system or other source involved in your enquiry or case.` },
        { type: 'p', text: `You must ensure that any information you provide about another person, such as a parent, sponsor, spouse, child or referee, is provided lawfully and with appropriate authority or consent where required.` },
      ],
    },
    {
      id: 'purposes',
      heading: 'Purposes and lawful bases for processing',
      blocks: [
        { type: 'p', text: `We process personal information only where we have a lawful and legitimate basis to do so. The purposes may include:` },
        {
          type: 'list',
          items: [
            `responding to enquiries and providing counselling;`,
            `assessing academic, financial, immigration and service eligibility;`,
            `identifying suitable study destinations, institutions and programmes;`,
            `preparing, reviewing and submitting university, college, scholarship or pathway applications;`,
            `providing visa documentation guidance and administrative support;`,
            `communicating with students, parents, sponsors, institutions and service providers;`,
            `preparing checklists, application documents, statements, CVs and supporting materials where requested;`,
            `tracking case progress, deadlines, payments, documentation and service quality;`,
            `arranging pre-departure, accommodation, insurance, travel or related support where requested;`,
            `sending service updates, event information, educational opportunities and marketing communications where permitted;`,
            `maintaining records for accounting, legal, compliance, dispute-resolution and audit purposes;`,
            `protecting website security, preventing fraud and maintaining business operations.`,
          ],
        },
        { type: 'p', text: `Depending on the context, our lawful bases may include consent, explicit consent for sensitive information where required, steps necessary before entering into a contract, performance of a contract, compliance with legal obligations, legitimate business interests, establishment or defence of legal claims, and other lawful bases recognised under applicable law.` },
      ],
    },
    {
      id: 'sensitive-information',
      heading: 'Sensitive information and high-risk documents',
      blocks: [
        { type: 'p', text: `International education and visa processes may require sensitive or high-risk documents, including passports, financial records, family records, visa refusal records, medical documents, police clearances and dependent information. We collect and process such information only where reasonably necessary for counselling, application processing, visa documentation support, compliance, fraud prevention, official requirements or service delivery, in the form of hard or soft copies.` },
        { type: 'p', text: `We may decline to process or retain sensitive documents that are unnecessary, excessive, suspicious, unlawfully obtained or unrelated to the service requested.` },
      ],
    },
    {
      id: 'children',
      heading: 'Children and minors',
      blocks: [
        { type: 'p', text: `Where a student is under 18 years of age, or where information about dependent children is required for a family or visa-related process, personal information should be provided by or with the involvement and consent of a parent or legal guardian. We may use children's information only for the relevant educational, counselling, application, visa, dependent, safeguarding or administrative purpose.` },
      ],
    },
    {
      id: 'sharing',
      heading: 'Sharing of personal information',
      blocks: [
        { type: 'p', text: `The student acknowledges and agrees that we may disclose personal information to parties including but not limited to those mentioned below, solely to the extent necessary for the provision of services requested by the student:` },
        {
          type: 'list',
          items: [
            `universities, colleges, pathway providers, awarding bodies and their authorised representatives;`,
            `scholarship providers, English test providers, admissions portals and student recruitment platforms;`,
            `embassies, high commissions, immigration authorities, visa application centres and government agencies;`,
            `parents, sponsors, spouses, guardians or authorised representatives involved in the case;`,
            `accommodation providers, insurance providers, travel providers and pre-departure support providers where requested and approved by the student/guardian;`,
            `IT, CRM, email, cloud storage, website hosting, analytics, cybersecurity, payment, accounting and administrative service providers;`,
            `professional advisers, auditors, insurers, regulators, courts, tribunals, law enforcement bodies or government authorities where required or permitted by law;`,
            `successor entities in the event of a restructuring, merger, acquisition, sale or transfer of all or part of our business, subject to appropriate confidentiality and legal safeguards.`,
          ],
        },
        { type: 'p', text: `We do not sell, rent or trade personal information to third parties for their independent marketing purposes.` },
        { type: 'p', text: `Notwithstanding the foregoing, we may disclose personal information without prior notice or consent where such disclosure is required or authorized by applicable law, regulation, court order, governmental or regulatory authority, or where disclosure is necessary to protect the rights, property, or safety of Study Abroad, its Directors, Employees, Clients, or the Public.` },
        { type: 'p', text: `The student further acknowledges that such disclosures made under legal or regulatory obligation shall not constitute a breach of this Agreement or any duty of confidentiality owed by the Company.` },
      ],
    },
    {
      id: 'international-transfers',
      heading: 'International data transfers',
      blocks: [
        { type: 'p', text: `Because our services relate to international education, personal information may be transferred to, stored in or accessed from countries outside Sri Lanka, including countries where universities, colleges, government authorities, cloud providers, application portals or service providers are located. Data protection laws in those countries may differ from Sri Lankan law.` },
        { type: 'p', text: `Where required, we rely on appropriate safeguards, contractual commitments, consent, explicit consent, necessity for application or visa services, compliance with legal obligations, establishment or defence of legal claims, public interest grounds, emergency grounds or other lawful transfer mechanisms recognised under applicable law.` },
      ],
    },
    {
      id: 'digital-tools',
      heading: 'Use of digital tools, CRM systems and AI-assisted tools',
      blocks: [
        { type: 'p', text: `We may use digital systems, including CRM platforms, email systems, cloud storage, productivity tools, analytics tools, document management tools and communication platforms, to manage enquiries, track applications, store records, improve service quality and maintain operational security.` },
        { type: 'p', text: `We may use technology-assisted tools to organise information, prepare drafts, summarise documents, check completeness, manage workflows or improve service efficiency. Where personal documents are involved, we aim to use such tools responsibly and with appropriate safeguards. We do not make final university admission, scholarship or visa decisions; those decisions are made by the relevant institutions and authorities.` },
      ],
    },
    {
      id: 'cookies',
      heading: 'Cookies and tracking technologies',
      blocks: [
        { type: 'p', text: `Our website may use cookies, pixels, tags, analytics tools, security tools and similar technologies to operate the website, remember preferences, analyse traffic, improve user experience, measure campaign performance, support live chat or enquiry forms, prevent misuse and deliver relevant marketing where permitted.` },
        { type: 'p', text: `Cookies may include strictly necessary cookies, functionality cookies, analytics cookies and marketing cookies. You may manage or disable cookies through your browser settings. Where required by applicable law, we will request consent for non-essential cookies or provide a mechanism to manage cookie preferences.` },
      ],
    },
    {
      id: 'marketing',
      heading: 'Marketing communications',
      blocks: [
        { type: 'p', text: `We may contact you with information about study opportunities, events, reminders, application updates, scholarships, deadlines, destination updates or related services where permitted by law or where you have consented. You may opt out of marketing communications by using the unsubscribe method provided or by contacting us. Service-related communications, such as application updates or document requests, may continue where necessary for an active case.` },
      ],
    },
    {
      id: 'security',
      heading: 'Data security',
      blocks: [
        { type: 'p', text: `We use reasonable administrative, technical and organisational safeguards to protect personal information against unauthorised access, disclosure, alteration, misuse, loss or destruction. These may include staff access controls, document handling procedures, secure storage, password protection, system permissions, confidentiality obligations, security monitoring and secure disposal practices where appropriate.` },
        { type: 'p', text: `No electronic transmission or storage system is completely secure. You are responsible for using secure communication channels where possible, avoiding unnecessary sharing of passwords or sensitive documents, and informing us promptly if you believe your information has been compromised.` },
      ],
    },
    {
      id: 'retention',
      heading: 'Data retention',
      blocks: [
        { type: 'p', text: `We retain personal information only for as long as reasonably necessary for the purpose collected, including service delivery, application support, legal compliance, accounting, audit, dispute resolution, fraud prevention, regulatory requirements and business records. Retention periods may vary depending on the type of information, case status, legal obligations and risk profile.` },
        {
          type: 'list',
          items: [
            { label: 'General website enquiries that do not become active cases', text: `Normally retained for a limited business period, unless earlier deletion is appropriate or continued retention is justified.` },
            { label: 'Counselling and assessment records', text: `Retained while the enquiry or case is active and for a reasonable period afterwards for service continuity, quality control and dispute management.` },
            { label: 'University, scholarship and visa-related case files', text: `Retained for a reasonable post-closure period for record keeping, institutional queries, compliance, appeals, reapplications and dispute management.` },
            { label: 'Financial, invoice, accounting and payment records', text: `Retained in accordance with applicable accounting, tax, audit and legal record-keeping requirements.` },
            { label: 'Marketing contact records', text: `Retained until consent is withdrawn, the contact opts out, the record becomes inactive beyond the chosen retention period, or deletion is otherwise appropriate.` },
            { label: 'Security logs and website analytics', text: `Retained for a limited period appropriate to website security, analytics and operational needs.` },
          ],
        },
        { type: 'p', text: `When personal information is no longer required, we will take reasonable steps to delete, anonymise, archive or securely dispose of it, subject to legal, regulatory and operational requirements.` },
      ],
    },
    {
      id: 'your-rights',
      heading: 'Your privacy rights',
      blocks: [
        { type: 'p', text: `Subject to applicable law and verification of identity, you may have the right to:` },
        {
          type: 'list',
          items: [
            `request access to personal information we hold about you;`,
            `request correction of inaccurate or incomplete personal information;`,
            `withdraw consent where processing is based on consent, subject to consequences for service delivery;`,
            `request deletion or anonymisation where legally permitted;`,
            `object to or restrict certain processing where applicable;`,
            `request information about how your personal information is processed;`,
            `complain to Study Abroad and, where applicable, to the relevant data protection authority.`,
          ],
        },
        { type: 'p', text: `Some requests may be refused or limited where retention or processing is required for legal obligations, contracts, official applications, accounting records, fraud prevention, institutional requirements, legal claims, public interest or other lawful reasons.` },
      ],
    },
    {
      id: 'privacy-request',
      heading: 'How to make a privacy request',
      blocks: [
        { type: 'p', text: `To make a privacy request, contact us using the privacy contact details in this Policy. We may need to verify your identity and may request additional information to process the request. We will respond within the timeframe required by applicable law, subject to any permitted extensions. If we refuse or limit a request, we will provide reasons where required and explain available complaint or appeal routes where applicable.` },
      ],
    },
    {
      id: 'data-breaches',
      heading: 'Data breaches',
      blocks: [
        { type: 'p', text: `If we become aware of a personal data breach, we will assess the nature, scope and risk of the incident and take appropriate remedial, notification and reporting steps in accordance with applicable law. This may include notifying affected individuals, regulators, service providers, institutions or authorities where legally required or operationally necessary.` },
      ],
    },
    {
      id: 'accuracy',
      heading: 'Accuracy of information',
      blocks: [
        { type: 'p', text: `We rely on students, parents, sponsors and authorised representatives to provide accurate and updated information. Please notify us promptly if your personal information, academic records, financial details, contact details, passport details, immigration history or other relevant information changes.` },
      ],
    },
    {
      id: 'third-party-websites',
      heading: 'Third-party websites and platforms',
      blocks: [
        { type: 'p', text: `Our website and services may link to or use third-party websites, portals, platforms and tools. We are not responsible for the privacy practices, content, security or decisions of third parties. You should review the privacy notices and terms of those third parties before submitting personal information to them.` },
      ],
    },
    {
      id: 'changes',
      heading: 'Changes to this privacy policy',
      blocks: [
        { type: 'p', text: `We may update this Privacy Policy from time to time to reflect legal, regulatory, operational, technology or service changes. The updated version will be published on our website with a revised effective date. Where required by law or where changes materially affect consent-based processing, we will provide additional notice or seek consent as appropriate.` },
      ],
    },
    {
      id: 'contact',
      heading: 'Contact us',
      blocks: [
        { type: 'p', text: `For questions, complaints or privacy requests, please contact:` },
        {
          type: 'list',
          items: [
            { label: 'Company', text: `Study Abroad (Pvt) Ltd, Company Registration No. PV 60125` },
            { label: 'Registered Office', text: `109, Kirulapone Avenue, Colombo 05` },
            { label: 'Privacy Contact Email', text: `priyanka@studyabroad.lk`, href: 'mailto:priyanka@studyabroad.lk' },
            { label: 'General Email', text: `info@studyabroad.lk`, href: 'mailto:info@studyabroad.lk' },
            { label: 'Telephone', text: `0112 512515 / 0716363665 / 0774963373` },
          ],
        },
      ],
    },
  ],
};

/* --------------------------------------------------------------------------
 * PART A — Website Terms of Service
 * ------------------------------------------------------------------------ */
const terms: LegalDoc = {
  key: 'terms',
  title: 'Terms of Service',
  shortTitle: 'Terms',
  path: '/terms-of-service',
  sections: [
    {
      id: 'introduction',
      heading: 'Introduction',
      blocks: [
        { type: 'p', text: `By accessing and using this website, you acknowledge that you have read, understood and agreed to be bound by these terms and conditions. Accessing this website or communicating through the website does not create any contractual, fiduciary or agency relationship between the visitor and Study Abroad.` },
        { type: 'p', text: `Welcome to the website of Study Abroad (Pvt) Ltd ("Study Abroad", "we", "our" or "us"). These Website Terms of Service ("Terms") govern your access to and use of our website, online forms, downloadable materials, enquiry channels and any website-related services. By accessing or using this website, you agree to be bound by these Terms. If you do not agree, you should discontinue use of the website.` },
        { type: 'p', text: `These Terms apply to website use and general online interactions. Paid consultancy services, application handling, visa documentation support, refunds and service-specific obligations may also be governed by a separate client agreement, registration form, invoice, consent form, checklist, engagement letter or written communication issued by Study Abroad. If there is an inconsistency between these website Terms and a signed client agreement, the signed client agreement will prevail for the paid consultancy service.` },
      ],
    },
    {
      id: 'about-us',
      heading: 'About Study Abroad and our services',
      blocks: [
        { type: 'p', text: `Study Abroad (Pvt) Ltd is an education consultancy incorporated in Sri Lanka, providing guidance and administrative support for students and families seeking international education opportunities. Our services may include educational counselling, course and institution shortlisting, application guidance, university or college application support, scholarship information, English language test guidance, visa documentation guidance, pre-departure support and related student services.` },
        { type: 'p', text: `We are not a university, college, embassy, high commission, visa application centre, immigration authority, scholarship awarding body, bank, tax adviser, legal adviser or government agency. Final decisions on admission, scholarships, credit exemptions, visas, immigration outcomes, work rights, post-study options and residence pathways are made solely by the relevant institution, authority or third-party decision-maker.` },
      ],
    },
    {
      id: 'general-information',
      heading: 'Website information is general information only',
      blocks: [
        { type: 'p', text: `Information on this website is provided for general educational and informational purposes. It should not be treated as legal, immigration, tax, investment, financial or professional advice. Admission requirements, tuition fees, scholarships, refund rules, immigration policies, visa processing times, English language requirements, living-cost requirements, work rights and post-study options may change without notice.` },
        { type: 'p', text: `Users should verify critical information directly with the relevant university, college, awarding body, scholarship provider, embassy, high commission, immigration authority or official government source before making financial, academic, migration or travel decisions.` },
        { type: 'p', text: `While the Company endeavours to ensure that the information published on this Website is accurate and up to date, it does not warrant or guarantee the completeness, accuracy, reliability or currency of such information. Visitors are solely responsible for independently verifying any information before relying upon it for any decision relating to overseas education, admissions, visas, scholarships or any related matter. To the fullest extent permitted by applicable law, the Company shall not be liable for any loss, damage, expense or liability arising from or connected with any reliance placed upon the information contained on this Website.` },
      ],
    },
    {
      id: 'no-guarantee',
      heading: 'No guarantee of outcomes',
      blocks: [
        { type: 'p', text: `We are committed to assisting prospective students by providing professional guidance and support throughout the overseas education process. However, admission decisions, scholarship awards, visa approvals and other outcomes are made solely by the relevant educational institutions, governmental authorities or other third parties. Whilst we endeavour to assist each student diligently, no representation, warranty or guarantee is given that any particular outcome will be achieved. Such outcomes include, but are not limited to:` },
        {
          type: 'list',
          items: [
            `admission to any university, college, pathway provider or educational institution;`,
            `scholarship awards, fee discounts, credit transfers or exemptions;`,
            `visa approval, immigration approval, visitor entry, dependent visa approval or spouse/partner visa approval;`,
            `employment, internship, post-study work, permanent residence or migration outcomes;`,
            `course availability, seat availability, campus availability, intake availability or programme continuation;`,
            `specific processing times, interview outcomes, embassy decisions or government decisions.`,
          ],
        },
        { type: 'p', text: `The outcome of any application or related process may depend upon a range of factors beyond the Company's control, including, without limitation, the student's academic and personal background, eligibility, financial capacity, immigration history, supporting documentation, the accuracy, completeness and timeliness of information and documents provided by the student, the admission criteria and policies of educational institutions, the requirements and decisions of immigration and other governmental authorities, and changes in applicable laws, policies or procedures.` },
      ],
    },
    {
      id: 'eligibility-assessments',
      heading: 'Preliminary eligibility assessments',
      blocks: [
        { type: 'p', text: `Any initial eligibility assessment, counselling recommendation, course option, scholarship indication, visa-risk comment or pathway suggestion is preliminary until all relevant documents and facts are reviewed. Study Abroad may revise its assessment if new information, missing documents, policy changes, deadline changes, financial issues, academic issues, immigration history, document concerns or third-party requirements arise.` },
        { type: 'p', text: `Any preliminary assessment is indicative only and is not a final determination of eligibility. Our assessment may change following receipt of further information or documentation, or where the requirements or policies of the relevant institution or authority are amended or clarified. Accordingly, a student who is initially assessed as potentially eligible may subsequently be found to be ineligible.` },
      ],
    },
    {
      id: 'responsibilities',
      heading: 'User and client responsibilities',
      blocks: [
        { type: 'p', text: `By using our website or engaging with our services, you agree to:` },
        {
          type: 'list',
          items: [
            `provide accurate, complete, current and truthful personal, academic, financial, employment, family and immigration information;`,
            `disclose all relevant facts, including previous visa refusals, overstays, deportations, cancellations, criminal matters, medical issues where relevant, academic gaps, employment gaps and financial sponsorship details;`,
            `submit only genuine, complete, legally valid and unaltered documents;`,
            `check and approve all forms, statements, applications and supporting documents before submission;`,
            `respond promptly to requests for information and documents;`,
            `meet institutional, visa, payment and document deadlines;`,
            `keep your contact details updated;`,
            `avoid relying solely on informal advice from friends, social media or unofficial sources where official rules apply.`,
          ],
        },
        { type: 'p', text: `The student represents and warrants that all information and documents provided to the Company, whether directly or through a parent, sponsor, agent, representative or any other person acting on the student's behalf, are true, accurate, complete and not misleading. The student acknowledges that the provision of any false, incomplete, inaccurate, misleading, concealed, inconsistent or unverifiable information or documentation may result in the refusal, cancellation or withdrawal of an application, admission, visa or other related benefit. We shall not be liable for any loss or adverse consequence arising from such information or documentation, and the student agrees to indemnify and hold us harmless against any claims, liabilities, losses, damages, costs and expenses arising therefrom.` },
      ],
    },
    {
      id: 'false-documents',
      heading: 'False, forged or misleading documents',
      blocks: [
        { type: 'p', text: `Study Abroad has a zero-tolerance position on false, forged, altered, fraudulent, misleading or incomplete documents and statements. We may refuse, suspend or terminate services immediately without further notice if we discover and/or reasonably believe that a document or statement is false, forged, altered, misleading, incomplete, inconsistent or not lawfully obtained. We may also decline to submit or continue an application if doing so may breach institutional rules, government requirements, professional standards or applicable law.` },
        { type: 'p', text: `Where required or permitted by law, institutional rules or official process, suspected fraudulent documents or material misrepresentations may be disclosed to relevant institutions, authorities, professional advisers or service providers involved in the case.` },
        { type: 'p', text: `Termination under this clause shall be without prejudice to the Company's right to retain all fees paid in respect of services already rendered and to recover any outstanding fees, costs or expenses incurred prior to termination.` },
      ],
    },
    {
      id: 'fees',
      heading: 'Fees, payments, refunds and third-party costs',
      blocks: [
        { type: 'p', text: `Study Abroad may charge consultancy fees or service fees as communicated to the client. University application fees, tuition deposits, visa application fees, biometric fees, English test fees, courier fees, bank charges, transfer charges, translation fees, notarial fees, attestation fees, medical fees, police clearance fees, insurance fees, travel fees and other third-party expenses are normally separate unless expressly stated in writing.` },
        { type: 'p', text: `Refunds, cancellations, file holds, inactive file closure, fee transfers and service termination are governed by the relevant signed agreement, invoice, receipt, written fee schedule or refund policy provided to the client. Unless expressly agreed in writing, Study Abroad is not responsible for refund decisions made by universities, colleges, government agencies, visa application centres, banks, accommodation providers, airlines or other third parties.` },
        { type: 'p', text: `Foreign currency amounts, tuition fees, living-cost requirements and third-party charges may change due to exchange-rate movements, institutional updates, tax changes, bank charges or government policy changes.` },
      ],
    },
    {
      id: 'deadlines',
      heading: 'Deadlines, processing times and client delays',
      blocks: [
        { type: 'p', text: `Application deadlines, scholarship deadlines, visa processing times and institutional response times are outside our control. Study Abroad will make reasonable efforts to guide clients on timelines based on available information, but we are not liable for delays, missed deadlines or adverse outcomes caused by late instructions, late payments, incomplete documents, third-party system issues, official processing delays, policy changes, portal failures, courier delays, bank delays or circumstances beyond our reasonable control.` },
      ],
    },
    {
      id: 'marketing-claims',
      heading: 'Marketing claims, campaigns and testimonials',
      blocks: [
        { type: 'p', text: `Any statement on this website or in our marketing materials about work rights, dependent visas, spouse/partner work rights, children's education, post-study work, permanent residence pathways, scholarships, tuition fees, low-cost options, free education, high-demand occupations, limited seats or visa processing times is subject to the official rules and conditions in force at the relevant time. Such statements are not guarantees.` },
        { type: 'p', text: `Testimonials, case studies and success stories reflect individual circumstances and do not guarantee similar results for other students or clients.` },
      ],
    },
    {
      id: 'third-party-links',
      heading: 'Third-party links and external websites',
      blocks: [
        { type: 'p', text: `This website may include links to universities, colleges, government agencies, testing bodies, accommodation providers, payment providers, social media pages or other external websites. These links are provided for convenience only. Study Abroad does not control and is not responsible for the content, accuracy, security, availability, privacy practices, fees, policies or decisions of third-party websites or service providers.` },
      ],
    },
    {
      id: 'electronic-communications',
      heading: 'Electronic communications and online submissions',
      blocks: [
        { type: 'p', text: `By contacting us through this website, online forms, email, telephone, WhatsApp, SMS, social media, video meeting tools, CRM tools or other electronic channels, you consent to receive communications through these channels where reasonably necessary for enquiries, counselling, application handling, document collection, case updates, service delivery, compliance and administrative purposes.` },
        { type: 'p', text: `Electronic records, scanned documents, online confirmations, digital acknowledgements and electronic communications may be used for operational purposes, subject to applicable law and any additional requirements of institutions, government agencies or courts.` },
      ],
    },
    {
      id: 'intellectual-property',
      heading: 'Intellectual property',
      blocks: [
        { type: 'p', text: `All website content, text, graphics, photographs, logos, icons, videos, downloadable documents, checklists, guides, course comparison materials, designs, layouts, slogans, branding and other materials are owned by or licensed to Study Abroad unless otherwise stated. Except as expressly permitted by law or with our prior written consent, you must not copy, reproduce, modify, adapt, translate, publish, distribute, transmit, display, perform, create derivative works from, sell, license, commercially exploit, scrape, data mine, frame, mirror, reverse engineer (where applicable), use for the training of artificial intelligence or machine learning systems, or otherwise use any Website Content or our intellectual property for any commercial or public purpose.` },
        { type: 'p', text: `Any unauthorised use of the Website Content or our intellectual property constitutes a breach of these Terms and may also constitute an infringement of Study Abroad's intellectual property rights. We reserve the right to take any legal action available under applicable law, including seeking injunctive relief, damages, an account of profits and recovery of legal costs, in respect of any actual or threatened infringement.` },
      ],
    },
    {
      id: 'prohibited-use',
      heading: 'Prohibited website use',
      blocks: [
        { type: 'p', text: `You must not use this website or our online channels to:` },
        {
          type: 'list',
          items: [
            `submit false, abusive, defamatory, misleading or unlawful content;`,
            `upload malware, viruses or harmful code;`,
            `attempt to gain unauthorised access to our systems, accounts, data or networks;`,
            `scrape, harvest, copy or misuse website content or personal data;`,
            `impersonate another person or organisation;`,
            `interfere with website security, availability or functionality;`,
            `use the website in breach of applicable law or third-party rights.`,
          ],
        },
      ],
    },
    {
      id: 'suspension',
      heading: 'Suspension or termination of access or services',
      blocks: [
        { type: 'p', text: `We may suspend or terminate website access, enquiry handling or services where we reasonably believe that a user has breached these Terms, submitted false or suspicious information, misused our systems, acted unlawfully, failed to cooperate, failed to pay agreed fees, acted abusively towards staff or created legal, ethical, compliance, reputational or operational risk for Study Abroad.` },
      ],
    },
    {
      id: 'liability',
      heading: 'Limitation of liability',
      blocks: [
        { type: 'p', text: `To the maximum extent permitted by applicable law, Study Abroad shall not be liable for indirect, incidental, consequential, special, punitive or economic losses, loss of opportunity, loss of profits, loss of data, loss of goodwill, travel losses, accommodation losses, exchange-rate losses, visa refusal consequences, admission refusal consequences, scholarship refusal consequences, delays or third-party decisions arising from or connected with use of this website or our services.` },
        { type: 'p', text: `Nothing in these Terms excludes or limits liability that cannot lawfully be excluded or limited under applicable law, including liability for fraud, wilful misconduct, gross negligence where such exclusion is not permitted, or any mandatory statutory rights that cannot be waived.` },
      ],
    },
    {
      id: 'indemnity',
      heading: 'Indemnity',
      blocks: [
        { type: 'p', text: `You agree to indemnify and hold harmless Study Abroad, its directors, officers, employees, consultants and representatives from claims, losses, damages, liabilities, penalties, costs and expenses arising from your breach of these Terms, false or misleading information, fraudulent documents, unlawful conduct, infringement of third-party rights or misuse of the website or our services.` },
      ],
    },
    {
      id: 'force-majeure',
      heading: 'Force majeure',
      blocks: [
        { type: 'p', text: `Study Abroad is not liable for failure or delay in performing obligations caused by events beyond our reasonable control, including natural disasters (tsunami, floods, landslide, etc.), government action or inaction, immigration policy changes, institutional closures, strikes, civil unrest, war, terrorism, epidemic or pandemic events, power failures, internet outages, cyber incidents, banking delays, courier delays, travel restrictions or third-party system failures.` },
      ],
    },
    {
      id: 'complaints',
      heading: 'Complaints and dispute resolution',
      blocks: [
        { type: 'p', text: `If you have a complaint, you should first contact Study Abroad in writing using the contact details provided in this document or on our website. We will review the matter and make reasonable efforts to respond within a reasonable period. Where appropriate, disputes should first be addressed through discussion, management review or mediation before court proceedings are commenced.` },
      ],
    },
    {
      id: 'governing-law',
      heading: 'Governing law and jurisdiction',
      blocks: [
        { type: 'p', text: `These Terms are governed by the laws of the Democratic Socialist Republic of Sri Lanka. Subject to any mandatory consumer or statutory rights that may apply, the District/Commercial courts of Colombo, Sri Lanka shall have jurisdiction over disputes arising from or connected with these Terms, this website or our services.` },
      ],
    },
    {
      id: 'changes',
      heading: 'Changes to these terms',
      blocks: [
        { type: 'p', text: `We may update these Terms from time to time. The updated version will be published on this website with an updated effective date. Where required by law or where changes are material, we may provide additional notice. Continued use of the website after publication of updated Terms indicates acceptance of the updated Terms.` },
      ],
    },
    {
      id: 'privacy',
      heading: 'Privacy',
      blocks: [
        { type: 'p', text: `The Student acknowledges and agrees that Study Abroad's collection, use, storage and disclosure of personal data shall be governed by our [Privacy Policy](/privacy-policy), as amended from time to time, which is hereby incorporated into this Agreement by reference. The Student agrees to abide by the terms of such Privacy Policy.` },
      ],
    },
    {
      id: 'entire-agreement',
      heading: 'Entire agreement',
      blocks: [
        { type: 'p', text: `This Agreement, together with any documents expressly incorporated herein by reference, constitutes the entire agreement between the parties and supersedes all prior discussions, negotiations, representations, understandings or agreements, whether written or oral, relating to its subject matter.` },
      ],
    },
    {
      id: 'severability',
      heading: 'Severability',
      blocks: [
        { type: 'p', text: `If any provision of this Agreement is found by any court or competent authority to be invalid, illegal or unenforceable in whole or in part, such provision shall, to the extent of such invalidity, illegality or unenforceability, be deemed severed from this Agreement and the remaining provisions shall continue in full force and effect.` },
      ],
    },
    {
      id: 'waiver',
      heading: 'Waiver',
      blocks: [
        { type: 'p', text: `No failure or delay by us in exercising any right or remedy under this Agreement shall operate as a waiver of such right or remedy. Any waiver of any provision of this Agreement shall be effective only if made in writing and signed by an authorized representative of Study Abroad.` },
      ],
    },
    {
      id: 'contact',
      heading: 'Contact us',
      blocks: [
        { type: 'p', text: `For questions about these Terms, please contact:` },
        {
          type: 'list',
          items: [
            { label: 'Company', text: `Study Abroad (Pvt) Ltd, Company Registration No. PV 60125` },
            { label: 'Registered Office', text: `109, Kirulapone Avenue, Colombo 05` },
            { label: 'Email', text: `info@studyabroad.lk`, href: 'mailto:info@studyabroad.lk' },
            { label: 'Telephone', text: `0112 512515 / 0716363665 / 0774963373` },
          ],
        },
      ],
    },
  ],
};

export const legalDocs: Record<LegalKey, LegalDoc> = { privacy, terms };
