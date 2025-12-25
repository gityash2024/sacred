/**
 * Privacy Policy Page Component
 * Data privacy policy for Sacred Groves
 */

import React from 'react'
import { SEO } from '@/components/common/SEO'
import { AlignedWithUNSDGs } from '@/components/common/CommonSections/CommonSections'
import styles from './Policy.module.css'
import journeyfirstImg from '@/assets/journeyfirst.svg'

/**
 * PrivacyPolicy page component
 * @returns PrivacyPolicy page JSX element
 */
export const Policy: React.FC = () => {
  return (
    <>
      <SEO
        title="Privacy Policy - Sacred Groves"
        description="Sacred Groves respects your right to privacy. We do not share your personal information when you visit our website unless you choose to provide that information to us."
        keywords="privacy, policy, data protection, sacred groves"
      />

      <section id="contactone" className={styles.heroSection}>
        <div className={styles.container}>
          <div className={styles.heroContent}>
            <div className={styles.heroImageWrapper}>
              <img className={styles.heroImage} src={journeyfirstImg} alt="Journey First" />
              <h1 className={styles.mainTitle}>Data Privacy Policy</h1>
            </div>
            <div className={styles.introSection}>
              <p className={styles.effectiveDate}>Effective Date: 13<sup>th</sup> August, 2021</p>
              <hr className={styles.divider} />
            </div>
          </div>
        </div>
      </section>

      <section id="privacyPolicy" className={styles.policySection}>
        <div className={styles.container}>
          <div className={styles.content}>
            <div className={styles.policyContent}>

              <h5 className={styles.sectionTitle}>INTRODUCTION AND SUMMARY</h5>
              <p className={styles.text}>
                This document sets out the privacy and cookie policy (the Policy) for The Sacred Groves C.I.C. (the Company).
              </p>
              <p className={styles.text}>
                The privacy of your data is of great importance to us. We use the personal data we collect from you when you use any Access Point, or access a Guardian Interface. Your personal data is used for specific purposes as further explained in this Policy; we do not seek to use or distribute your personal data for any other purpose or in any other manner.
              </p>

              <h5 className={styles.sectionTitle}>WHAT DATA DO WE COLLECT AND HOW DO WE COLLECT IT?</h5>
              <h6 className={styles.subSectionTitle}>REGISTRATION, APPS AND OTHER INTERACTIONS</h6>
              <p className={styles.text}>
                We collect contact information, biographical details, preferences, and other declared personal information about you when you provide it to us. For example, when you fill out our online forms, engage with the Website or App chatbot, respond to our communications, register and use our App, enquire about, or register for, our products and services, engage in the Squads feature or otherwise message on an Access Point platforms, or participate in a reader forum or poll (which could be on any medium). Such data can include your name, date of birth, email address, postal address, phone number, mobile number, financial details, such as payment cards you use to purchase products/services or otherwise support our conservation and related activities.
              </p>
              
              <h6 className={styles.subSectionTitle}>INFORMATION FROM DEVICES</h6>
              <p className={styles.text}>You acknowledge and accept that in the event:</p>
              <ul className={styles.unorderedList}>
                <li>Information about your device type, operating system, hardware, software, display settings and browser type to tailor your experience to your device (tablet vs phone).</li>
                <li>Unique identifiers like IP address, so that we can recognise if you have been to our Websites before, allow your device to interact with our Websites and Apps.</li>
                <li>Device settings such as general geographic location (this can be to provide services that have copyright restrictions, to show you content that is relevant to where you are).</li>
                <li>Device operations, such as information about how you've used the device on our Websites, so that we can tailor the experience based on the way you or similar users interact with our content.</li>
                <li>We may also collect information from cookies placed on your device and store other cookies and technologies. See the Cookie Policy section for more information about our use of cookies.</li>
                <li>With your consent, we may also collect the specific location of your device or request access to data from other applications to provide certain services you have requested.</li>
              </ul>
              
              <h6 className={styles.subSectionTitle}>MOBILE APPS</h6>
              <p className={styles.text}>
                When you download our Apps, we will collect the following information from your device: unique identifier (UDID), MAC address or other applicable device identifier and location.
              </p>
              
              <h6 className={styles.subSectionTitle}>SOCIAL LOG-IN</h6>
              <p className={styles.text}>
                If you log in to our Websites or online services via a third-party site, such as Apple, Facebook or Google, that site may pass information to us, such as user ID, name associated with the ID, email address and location, plus other information as described in that website's privacy policy. Access Points may also return information about you to that social networking site regarding your log in, such as which of our Access Points you visit and use, and your use of social media services on or through those Access Points.
              </p>
              <p className={styles.text}>
                If you log in with or connect to your account using social media (Facebook, Twitter, etc), the social media service's use of the shared information will be governed by their privacy policy. If you do not want your personal information shared in this way, please do not connect your social media service account with your Guardian Account, and do not participate in social sharing through our Access Points.
              </p>
              
              <h6 className={styles.subSectionTitle}>CONTACTS: PERMISSION & INDEMNITY</h6>
              <p className={styles.text}>
                The App will require affirmative consent from you prior to accessing your contact list. Such contact information may be uploaded to our servers for the purposes of enabling you to better connect with other Guardians in your existing network. This is achieved through the syncing of contacts in order to identify Guardians within your contact list.
              </p>
              <p className={styles.text}>
                If you provide us with any information pertaining to other persons, whether when interacting with the Squads feature, gifting SGCs, allowing access to your contacts, or otherwise, then you shall remain responsible for and shall indemnify us from any claims or costs pertaining to, the provision of such information and its use in relation to electronic communications or use within an Access Point or any other use permitted under this Policy.
              </p>
              
              <h6 className={styles.subSectionTitle}>PUBLIC INFORMATION AND POSTS</h6>
              <p className={styles.text}>
                Any information about yourself or others that you post on our social media pages, on platforms like Twitter, Facebook and other chat rooms, blogs and forums, will be viewed by others (including search engines), over whom we have no control. You are responsible for the information you choose to post or otherwise make available in public areas, and you acknowledge that this may be collected and used by third parties.
              </p>
              
              <h6 className={styles.subSectionTitle}>ADDITIONAL SOURCES</h6>
              <p className={styles.text}>
                We may ask data management and consumer insight providers if they have lifestyle, demographic, household information or other insights about you. This information helps us better understand our audiences. For more information on how to control this use of your information, see the section below on Controlling Your Information.
              </p>
              <p className={styles.text}>
                When you use third party payment providers, to pay for or receive payment from us, we will receive information including your name, email address, billing or other address, phone number (if applicable), date of sign-up, the number of payments you have received from verified PayPal users, whether you have been verified to have control of a bank account and any other information you agree they can share.
              </p>
              <p className={styles.text}>
                Other organisations that provide products and services to you may also share information with us. For example, they may notify us when you move home or when the payment card you used with us is renewed or replaced, so that we can keep your information accurate and up to date. This also helps ensure that you do not lose access to our products and services. We also may receive information from our partners about their customer database. This allows our partners to see if they can reach their audiences on our platforms. Generally, we will receive aggregated information rather than individual information, although your information may be used to generate these insights.
              </p>

              <h5 className={styles.sectionTitle}>HOW DO WE STORE YOUR DATA?</h5>
              <h6 className={styles.subSectionTitle}>SECURITY OF PERSONAL DATA</h6>
              <p className={styles.text}>
                We have implemented appropriate technical and organisational controls to protect your personal data against unauthorised processing and against accidental loss, damage or destruction. You are responsible for choosing a secure password when we ask you to set up a password to access parts of our sites or apps. You should keep this password confidential and you should choose a password that you do not use on any other site. You should not share your password with anyone else, including anyone who works for us. Unfortunately, sending any information, including personal data, via the internet is not completely secure. Although we will do our best to protect your personal data once with us, we cannot guarantee the security of any personal data sent to an Access Point and so you provide it at your own risk.
              </p>
              
              <h6 className={styles.subSectionTitle}>INTERNATIONAL DATA TRANSFERS</h6>
              <p className={styles.text}>
                Data we collect may be transferred to, stored and processed in any country or territory where one or more of our service providers, or the Company itself, are based or have facilities. While other countries or territories may not have the same standards of data protection as those in your home country, we will continue to protect personal data that we transfer in line with this privacy policy.
              </p>
              <p className={styles.text}>
                Whenever we transfer your personal data out of the European Economic Area (<b>EEA</b>), we ensure similar protection and put in place at least one of these safeguards:
              </p>
              <ul className={styles.unorderedList}>
                <li>We will only transfer your personal data to countries that have been found to provide an adequate level of protection for personal data.</li>
                <li>We may also use specific approved contracts that use Standard Contractual Clauses for the protection of personal data where appropriate, with our service providers that are based in countries outside the EEA. These contracts give your personal data the same protection it has in the EEA.</li>
              </ul>
              <p className={styles.text}>
                If you are located in the EEA, you may contact us for a copy of the safeguards which we have put in place for the transfer of your personal data outside the EEA.
              </p>
              
              <h6 className={styles.subSectionTitle}>HOW LONG DO WE KEEP YOUR DATA?</h6>
              <p className={styles.text}>
                We keep your personal data for only as long as we need to. How long we need your personal data depends on what we are using it for, as set out in this Policy. For example, we may need to use it to answer your queries about a product or service and as a result may keep personal data while you are still using our product or services. We may also need to keep your personal data for accounting purposes, for example, where you have bought a product/service. If we no longer need your data, we will delete it or make it anonymous by removing all details that identify you. If we have asked for your permission to process your personal data and we have no other lawful grounds to continue with that processing, and you withdraw your permission, we will delete your personal data. However, when you unsubscribe from social or marketing communications, we will keep your email address to ensure that we do not send you any marketing in future.
              </p>

              <h5 className={styles.sectionTitle}>HOW DO WE USE YOUR DATA?</h5>
              <h6 className={styles.subSectionTitle}>LEGAL BASES</h6>
              <p className={styles.text}>
                Our legal bases for using your personal data may be any one or more of the following:
              </p>
              <ul className={styles.unorderedList}>
                <li><em>Consent</em>: For example, where you have provided your consent to receive update, marketing or editorial emails from us. You can withdraw your consent at any time. In the case of marketing emails you can withdraw your consent by clicking on the "unsubscribe" link at the bottom of the email or through your email preferences in the "Email Preference" tab, when signed into your Guardian Account.</li>
                <li><em>Performance of a contract with you (or in order to take steps prior to entering into a contract with you)</em>: For example, where you have purchased SGCs from us and we need to use your contact details and payment data in order to process your order and deliver/allocate the SGCs.</li>
                <li><em>Compliance with law</em>: In some cases, we may have a legal obligation to use or keep your personal data.</li>
                <li><em>Our legitimate interests</em>: Where it is necessary for us to understand our users, promote our services/products and operate our sites and apps efficiently for the creation, publication and distribution of news, media and related social awareness content online and in print form, globally. Examples of when we rely on our legitimate interests to use your personal data include:
                  <ul className={styles.nestedList}>
                    <li>when we analyse what content has been viewed on our sites and apps, so that we can understand how they are used and improve our content;</li>
                    <li>to carry out marketing analyses to better understand your interests and preferences so that we can make our marketing more relevant to your interests and preferences. This includes when we promote our own products and services. For example, we look at what you have viewed on our sites and apps and what products and services you have bought. You can opt out from having your personal data used for marketing analyses by going into your account to the tab "Email Preference";</li>
                    <li>for internal administrative purposes related to when you use our services - such as our accounting and records - and to make you aware of any changes to our services;</li>
                    <li>to collect and log IP addresses to improve the Website and monitor website usage;</li>
                    <li>to personalise our services (for example, so you can sign in) by remembering your settings, and recognising you when you sign in on different devices;</li>
                    <li>enabling you to share our content with others using social media or email;</li>
                    <li>when responding to your queries and to resolve complaints; and</li>
                    <li>for security and fraud prevention, and to ensure that our sites and apps are safe and secure and used in line with our terms of use.</li>
                  </ul>
                </li>
                <li><em>Access</em>: when using the App you may be asked for permission to access certain features/functionalities of your mobile device, including your contact details, storage and your photo library.</li>
                <li><em>Updating your personal data</em>: when you register for, or are assigned, a Guardian Account, you have access to a profile page. Under "edit profile" you can review and update what personal data is public when you comment on our blog/articles, or if people look up your profile. You may also update your marketing preferences in the "Email Preference" tab in your Guardian Account.</li>
                <li><em>Ensure our services are used appropriately</em>: If you post or send offensive or objectionable content anywhere on or to our Access Points, or otherwise engage in any disruptive behaviour on any of our platforms, we may use the information that is available to us about you to stop such behaviour. This may involve informing relevant third parties, including your employer, law enforcement or other competent authorities about the content and your behaviour.</li>
              </ul>
              
              <h6 className={styles.subSectionTitle}>USING CHILDREN'S PERSONAL DATA</h6>
              <p className={styles.text}>
                We do not aim any of our products or services directly at children under the age of thirteen (13) and we do not knowingly collect personal data about children under thirteen (13). Some of our services may have a higher age restriction and this will be shown at the point of registration. We also note that California law prohibits sale of personal data of consumers between 13-16 years of age unless the legal guardian has authorized the sale. We comply with this requirement.
              </p>

              <h5 className={styles.sectionTitle}>HOW WE MAY SHARE YOUR DATA</h5>
              <h6 className={styles.subSectionTitle}>EXTERNAL ORGANISATIONS</h6>
              <p className={styles.text}>
                We share your personal data with other organisations that are not directly linked to us under the following circumstances:
              </p>
              <p className={styles.text}>
                <em>Service providers</em> - We may share your data with other organisations that provide services on our behalf. We may do this to perform a contract we have entered into with you, where it is in our legitimate interests or with your consent. Examples of when we may share your data with service providers include sharing with:
              </p>
              <ul className={styles.unorderedList}>
                <li>online payments processors who process credit and debit card transactions on our behalf;</li>
                <li>fraud management providers that help us to identify and prevent online fraud;</li>
                <li>credit reference agencies to prevent fraudulent purchases;</li>
                <li>internet and cloud hosting services providers;</li>
                <li>software service providers that assist us with our customer relationship management;</li>
                <li>service providers in relation to recording transactions related to SGCs in blockchain;</li>
                <li>communications services providers, such as our blog story provider;</li>
                <li>error tracking software providers, to help us diagnose and fix errors and optimise the performance of our website and apps;</li>
                <li>service providers that help us carry out analytics, facilitate audience creation and segmentation and to measure our audience engagement;</li>
                <li>service providers that help provide us with insights and analytics that help us to improve our products and services. For example, we use Google Analytics to understand how visitors engage with our sites or apps. If you don't want Google Analytics to be used in your browser, you can install the 'Google Analytics Opt-Out Browser Add-On', provided by Google;</li>
                <li>data management companies, that help us collect data via online forms and surveys.</li>
              </ul>
              <p className={styles.text}>
                <em>Agencies and authorities if required by law</em> - We may reveal your personal data to any law enforcement agency, court, regulator, government authority, or in connection with any legal action if we are required to do so to meet a legal or regulatory obligation, where the request is proportionate, or otherwise to protect our rights or the rights of anyone else (for example, in response to valid and properly served legal process such as subpoena or warrant). We will attempt to notify you prior to disclosing your data unless (i) prohibited by applicable law from doing so, or (ii) there are clear indications of unlawful conduct in connection with your use of our services.
              </p>
              <p className={styles.text}>
                <em>Event sponsors and partners</em> - we may share your personal data with sponsors of the Company's events and partners who we hold events with for marketing purposes when you have given your permission for us to do so.
              </p>
              <p className={styles.text}>
                <em>Social media organisations</em> - We may share your personal data with other organisations when our web pages use social plug-ins from these organisations (such as the "Facebook Recommend" function, Twitter's retweet function, Google+ function). These other organisations may receive and use personal data about your visit to our sites or apps. If you browse our site or view content on our apps, personal data they collect may be connected to your account on their site. For more information on how these organisations use personal data, please read their privacy policies.
              </p>
              <p className={styles.text}>
                Any organisations which access your data in the course of providing services on our behalf will be governed by strict contractual restrictions to make sure that they protect your data and keep to all data privacy laws that apply. We may also independently audit these service providers to make sure that they meet our standards.
              </p>
              <p className={styles.text}>
                These transfers to third parties may constitute "sale" of your personal information under California law. A California resident can halt these sales at any time by pressing the "California resident - Do not sell" link that is located in the footer of every page. Third-parties do not sell personal information that has been sold to them by the Company unless you have first received explicit notice and are provided an opportunity to exercise the right to opt out. Anyone accessing our Access Points may manually inspect the sharing, transfer, and sale of their personal data in our Cookie Policy set out further below.
              </p>

              <h5 className={styles.sectionTitle}>HOW WE MAY CONTACT YOU</h5>
              <h6 className={styles.subSectionTitle}>SERVICE COMMUNICATIONS</h6>
              <p className={styles.text}>
                From time to time we may send you service emails, for example, with special offers relating to guardianship of SGCs, telling you your guardianship is coming to an end, informing you of a gift of SGCs that has been made to you, providing you with updates on transactions relating to, and status of, SGCs, or thanking you when you contribute or place an order with us.
              </p>
              
              <h6 className={styles.subSectionTitle}>MARKETING COMMUNICATIONS AND BLOG UPDATES</h6>
              <p className={styles.text}>
                If we have your permission, we may send you materials we think may interest you, such as new offers and updates. Depending on your marketing preferences, this may be by email, phone, or SMS.
              </p>
              <p className={styles.text}>
                We offer an editorial newsletter. You can manage your subscription to these emails through your profile page when you are signed in to your Guardian Account.
              </p>
              <p className={styles.text}>
                You can decide not to receive these emails at any time and will be able to "unsubscribe" directly by clicking a link in the email or through your email preferences in the tab "Email Preference" when you are signed in to your Guardian Account.
              </p>
              
              <h6 className={styles.subSectionTitle}>MARKET RESEARCH</h6>
              <p className={styles.text}>
                Sometimes we may contact you for market research purposes, for example about a survey. You can opt out from being contacted in this way by signing into your Guardian Account and going to the tab "Email Preference".
              </p>
              
              <h6 className={styles.subSectionTitle}>RESPONDING TO YOUR QUERIES OR COMPLAINTS</h6>
              <p className={styles.text}>
                If you have raised a query or a complaint with us, we may contact you to answer your query or to resolve your complaint.
              </p>
              
              <h6 className={styles.subSectionTitle}>SPECIAL NOTE TO CALIFORNIA USERS</h6>
              <p className={styles.text}>
                If you elect to use the "do not sell" button, we will not recontact you about that choice for at least twelve (12) months.
              </p>

              <h5 className={styles.sectionTitle}>YOUR PRIVACY AND DATA PROTECTION RIGHTS</h5>
              <h6 className={styles.subSectionTitle}>GENERAL RIGHT TO CONTROL DATA</h6>
              <p className={styles.text}>
                You have a number of rights with regard to the personal data that we hold about you and you can contact us with regard to the following rights in relation to your personal data:
              </p>
              <ul className={styles.unorderedList}>
                <li>You have the right to receive a copy of the personal data we hold about you.</li>
                <li>You have the right to correct the personal data we hold about you.</li>
                <li>Where applicable, you may also have a right to receive a machine-readable copy of your personal data.</li>
                <li>You also have the right to ask us to delete your personal data or restrict how it is used, consistent with the GDPR. There may be exceptions to the right to erasure for specific legal reasons which, if applicable, we will set out for you in response to your request.</li>
                <li>Where applicable, you have the right to object to processing of your personal data for certain purposes.</li>
                <li>Where you have provided us with consent to use your personal data, you can withdraw this at any time.</li>
                <li>If you do not want us to use your personal data for marketing analysis, you can change your settings in the "Email Preference" tab of your Guardian Account.</li>
              </ul>
              <p className={styles.text}>
                If you would like to exercise any of your rights specified above, please email <a href="mailto:dataprotection@thesacredgroves.com" className={styles.link}>dataprotection@thesacredgroves.com</a>. We will aim to deal with requests within one (1) month.
              </p>
              <p className={styles.text}>
                We may need to request specific information from you to help us confirm your identity. If your request is complicated or if you have made a large number of requests, it may take us longer. We will let you know if we need longer than one (1) month to respond. You will not have to pay a fee to obtain a copy of your personal data (or to exercise any of the other rights). However, we may charge a reasonable fee if your request is clearly unfounded, repetitive or excessive.
              </p>
              
              <h6 className={styles.subSectionTitle}>CALIFORNIA PRIVACY RIGHTS</h6>
              <p className={styles.text}>
                Under the California Consumer Privacy Act, California Civil Code Section 1798.100, if you are a resident of California you may contact us with regard to the following rights in relation to your personal data:
              </p>
              <ul className={styles.unorderedList}>
                <li>Right of Access: You have a right to request access to the personal data we may hold on you for the past twelve (12) months. You may submit up to two (2) requests per year of access to your personal data.</li>
                <li>Right to Opt-In/Opt-Out of Sale of Personal Data: For individuals sixteen (16) years or older, you have the right to opt-out of sale of personal data we may hold on you. You can exercise this right at any time by pressing the "California resident - Do not sell" link in the footer of every page. For individuals between thirteen (13) to sixteen (16) years old, you have the right to opt-in to the sale of personal data we may hold on you.</li>
                <li>Right to Deletion: You also have the right to ask us to delete personal data we may hold on you or restrict how it is used. There may be exceptions to the right to deletion for specific legal reasons which, if applicable, we will set out for you in response to your request.</li>
                <li>Right to Non-Discrimination: We will not discriminate against you for exercising any of your California Consumer Privacy Act rights.</li>
              </ul>
              <p className={styles.text}>
                If you want to make any of these requests, please contact us at <a href="mailto:dataprotection@thesacredgroves.com" className={styles.link}>dataprotection@thesacredgroves.com</a>. We will deal with requests for access to your personal data within forty-five (45) days for California-specific requests.
              </p>
              <p className={styles.text}>
                To help us respond as you expect, please specify that you are making a request under the California Consumer Privacy Act. We may need to request specific information from you to help us confirm your identity.
              </p>

              <h5 id="cookies" className={styles.sectionTitle}>COOKIE POLICY</h5>
              <h6 className={styles.subSectionTitle}>COOKIES</h6>
              <p className={styles.text}>
                Cookies are text files placed on your computer to collect standard Internet log information and visitor behaviour information. When you visit our Website, we may collect information from you automatically through cookies or similar technology. For further information, visit allaboutcookies.org
              </p>
              <p className={styles.text}>
                Cookies, device identifiers, or other information can be stored or accessed on your device for the purposes presented to you further below. These may be placed either directly by us or by third parties. Third parties such as Cloudflare, Firebase, Google Analytics, Facebook Auth, Twitter Auth, serve cookies through our websites for analytics and other purposes.
              </p>
              
              <h6 className={styles.subSectionTitle}>HOW DO WE USE COOKIES?</h6>
              <p className={styles.text}>
                Our Company uses cookies in a range of ways to improve your experience on our website, and can be categorized as follows:
              </p>
              <ul className={styles.unorderedList}>
                <li>Strictly Necessary Cookies: These cookies are essential to enable you browse around our websites and use their features. Without these cookies, services like shopping check-out and e-billing cannot be provided.</li>
                <li>Performance Cookies: These cookies collect information about how you use our websites, for instance, which pages you go to the most. This data may be used to optimize our websites and make them easier for you to navigate. These cookies do not collect information that identifies you. All information these cookies collect is aggregated and therefore, anonymous.</li>
                <li>Functionality Cookies: These cookies allow our websites to remember choices you make while browsing. We may remember preferences related to customizable site elements. They may also be used to keep track of which videos or posts have been viewed in order to avoid repetition. The information there will not personally identify you, and they cannot track your browsing activity on websites other than Websites.</li>
              </ul>
              
              <h6 className={styles.subSectionTitle}>MANAGING COOKIES</h6>
              <p className={styles.text}>
                You can set your browser not to accept cookies, through the appropriate preferences or settings on the browser used to access our Websites. Since cookies are used throughout our Websites, disabling them may prevent you from using certain parts of such Websites.
              </p>

              <h5 className={styles.sectionTitle}>MISCELLANEOUS</h5>
              <h6 className={styles.subSectionTitle}>Privacy policies of other websites</h6>
              <p className={styles.text}>
                Websites contain links to other websites. Our privacy policy applies only to our Website, so if you click on a link to another website, you should read their privacy policy.
              </p>
              
              <h6 className={styles.subSectionTitle}>Changes to our privacy policy</h6>
              <p className={styles.text}>
                Our Company keeps its privacy policy under regular review and places any updates on this web page. This Policy was last updated on 13<sup>th</sup> August, 2021.
              </p>
              
              <h6 className={styles.subSectionTitle}>How to contact us</h6>
              <p className={styles.text}>
                If you have any questions about our Company's privacy policy, the data we hold on you, or you would like to exercise one of your data protection rights, please do not hesitate to contact us at: <a href="mailto:dataprotection@thesacredgroves.com" className={styles.link}>dataprotection@thesacredgroves.com</a>.
              </p>

              <div className={styles.downloadButtonWrapper}>
                <a href="/privacy-policy.pdf" download className={styles.downloadLink}>
                  <button type="button" className={styles.downloadButton}>
                    <span className={styles.downloadButtonText}>DOWNLOAD POLICY</span>
                    <svg className={styles.downloadArrow} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M12 5V19" stroke="#03303D" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      <path d="M7 14L12 19L17 14" stroke="#03303D" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </button>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Aligned with UN SDGs - shown above footer, without LinkedIn carousel */}
      <AlignedWithUNSDGs hideLinkedInCarousel />
    </>
  )
}

export default Policy

