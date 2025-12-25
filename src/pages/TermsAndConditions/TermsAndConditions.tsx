/**
 * Terms and Conditions Page Component
 * Legal terms and conditions for Sacred Groves
 */

import React from 'react'
import { SEO } from '@/components/common/SEO'
import { AlignedWithUNSDGs } from '@/components/common/CommonSections/CommonSections'
import styles from './TermsAndConditions.module.css'
import journeyfirstImg from '@/assets/journeyfirst.svg'

/**
 * TermsAndConditions page component
 * @returns TermsAndConditions page JSX element
 */
export const TermsAndConditions: React.FC = () => {
  return (
    <>
      <SEO
        title="Terms and Conditions - Sacred Groves"
        description="Sacred Groves has its own terms and conditions. Please read these terms and conditions carefully before entering into any acquisition of SGCs."
        keywords="terms, conditions, legal, sacred groves, SGCs"
      />

      <section id="contactone" className={styles.heroSection}>
        <div className={styles.container}>
          <div className={styles.heroContent}>
            <div className={styles.heroImageWrapper}>
              <img className={styles.heroImage} src={journeyfirstImg} alt="Journey First" />
              <h1 className={styles.mainTitle}>Terms and Conditions</h1>
            </div>
            <div className={styles.introSection}>
              <p className={styles.effectiveDate}>Effective Date: 1<sup>st</sup> April, 2022</p>
              <hr className={styles.divider} />
              <p className={styles.introText}>Defined terms are as set out under Appendix 1 to these terms and conditions.</p>
              <p className={styles.introText}>
                Please read the terms and conditions set out in this document carefully before entering into any acquisition of SGCs. The acquisition of SGCs and/or the use of the Guardian Interface constitutes acceptance of these T&Cs. If you do not agree to these T&Cs, then please do not acquire any SGCs or use the Guardian Interface.
              </p>
              <p className={styles.introText}>
                These T&Cs create a contract between any acquirer of SGCs and/or user of the Guardian Interface, and The Sacred Groves <b>(Agreement).</b>
              </p>
              <hr className={styles.divider} />
            </div>
          </div>
        </div>
      </section>

      <section id="terms" className={styles.termsSection}>
      <div className={styles.container}>
        <div className={styles.content}>
            <div className={styles.termsContent}>
              <h5 className={styles.sectionTitle}>1. Electronic Contracting</h5>
              <p className={styles.text}>
                Your acquisition of SGCs and/or use of the Guardian Interface includes the ability to enter into agreements and/or to make transactions electronically. You represent and warrant that you have the right and authority to enter into this Agreement on behalf of any entity that you represent, and to legally bind such entity to the terms and obligations of this Agreement. You acknowledge that your electronic submissions constitute your agreement and intent to be bound by and to pay for such agreements and transactions. Your agreement and intent to be bound by electronic submissions applies to all records relating to all transactions you enter into by way of separate contract and/or through an Access Point, including notices of cancellation, policies, contracts and applications. In order to access and retain your electronic records, you may be required to have certain hardware and software, which are your sole responsibility.
              </p>

              <h5 className={styles.sectionTitle}>2. Assignment or Transfer</h5>
              <p className={styles.text}>
                The assignment and transfer of SGCs is allowed only in accordance with and strictly subject to, these T&Cs. A Guardian may, over a running period of twelve (12) months, transfer up to ten thousand (10,000) SGCs in aggregate to any other persons, in accordance with the process set out in the Guardian Interface from time to time. Such process will always require that a person who is to receive any SGCs must themselves set up a Guardian Account and directly accept these T&Cs, prior to receiving any SGCs. No person may be the beneficiary, from one or more transferors, of more than ten thousand (10,000) SGCs in aggregate during any running period of twelve (12) months.
              </p>
              <p className={styles.text}>
                Please contact customer service at The Sacred Groves (<a href="mailto:connect@sacredgroves.earth" className={styles.link}>connect@sacredgroves.earth</a>) if these transfer limits are to be exceeded, or in the event that the Guardian who has custody of any SGCs suffers permanent impairment or death and a transfer of such SGCs is sought by the heirs, estate or beneficiaries of the Guardian. Each such request will be reviewed on a case-by-case basis, subject to The Sacred Groves receiving such information and documentation as it may reasonably require, and subject to the absolute discretion of The Sacred Groves, on whether to allow such transfer.
              </p>
              <p className={styles.text}>
                The Sacred Groves will be entitled to charge such fees in relation to the transfer of SGCs as may be specified in these T&Cs from time to time.
              </p>
              <p className={styles.text}>
                You accept and undertake that you will not charge any amount/consideration to a person if and when transferring SGCs to such person.
              </p>

              <h5 className={styles.sectionTitle}>3. Gifting</h5>
              <p className={styles.text}>
                You are entitled to acquire SGCs as gifts to be transferred to another person. You will not charge such intended recipient any amount/consideration for such gift.
              </p>
              <p className={styles.text}>
                Upon acquisition of SGCs for the purpose of gifting, you are required to ensure that such SGCs are transferred to the Guardian Account of the intended gift recipient no later than thirty (30) days following the date of acquisition. There will not be any additional fee charged in relation to such transfer.
              </p>

              <h5 className={styles.sectionTitle}>4. No Third Party Software Support</h5>
              <p className={styles.text}>
                The Sacred Groves may provide, as part of the Guardian Interface, access to certain third party software as a convenience. To the extent that the Guardian Interface contains third party software, The Sacred Groves has no express or implied obligation to provide any technical or other support for such software. Please contact the appropriate software vendor or manufacturer directly for technical support and customer service related to its software and products.
              </p>

              <h5 className={styles.sectionTitle}>5. Disclaimer of Warranties and Liability</h5>
              <p className={styles.text}>
                You expressly acknowledge and agree that use of an Access Point and Guardian Interface is at your sole risk and the entire risk as to satisfactory quality, performance, accuracy and effort is with you. To the maximum extent permitted by applicable law, use of an Access Point and Guardian Interface is provided "as is", with all faults and without warranty of any kind, and The Sacred Groves hereby disclaims all warranties and conditions with respect to an Access Point and Guardian Interface or SGCs, either express, implied, or statutory, including, but not limited to, the implied warranties and/or conditions or merchantability, of satisfactory quality, or fitness for a particular purpose, of accuracy, of quiet enjoyment, and non-infringement of third party rights. The Sacred Groves does not warrant against interference with your enjoyment or use of an Access Point and Guardian Interface, that the functions contained in an Access Point and Guardian Interface will meet your requirements, that the operation of an Access Point and Guardian Interface will be uninterrupted or error-free, or that defects in an Access Point and Guardian Interface will be corrected. Use of an Access Point and Guardian Interface and download of any associate software may affect the usability of third-party software, applications or third-party services. You further acknowledge that Access Points, the Guardian Interface and SGCs are not intended or suitable for use in situations or environments where the failure or time delays or, or errors or inaccuracies in the content, data or information provided by an Access Point and Guardian Interface could lead to death, personal injury, or severe physical or environmental damage. No oral or written information or advice given by The Sacred Groves shall create a warranty.
              </p>

              <h5 className={styles.sectionTitle}>6. Limitation of Liability</h5>
              <p className={styles.text}>
                To the extent not prohibited by law, in no event shall The Sacred Groves be liable for personal injury, or any incidental, special, indirect or consequential damages, whatsoever, including, without limitation, damages for loss of profits, loss of data, business interruption, or any other commercial damages or losses, arising out of or related to (i) your acquisition, gifting, assignment or transfer of SGCs, or (ii) your use or your inability to use the Guardian Interface, an Access Point, however caused, regardless of the theory of liability (contract, tort or otherwise), and even if The Sacred Groves is advised of the possibility of such damages. Some jurisdictions do not allow the limitation of liability for personal injury, or of incidental or consequential damages, so this limitation may not apply to you.
              </p>
              <p className={styles.text}>
                In no event shall The Sacred Groves' total liability to you for all damages (other than as may be required by applicable law in cases involving personal injury) exceed the amount of United States Dollars fifty (US$50.00). The foregoing limitations will apply even if the above stated remedy fails of its essential purpose.
              </p>

              <h5 className={styles.sectionTitle}>7. Anti-money laundering and Sanctions</h5>
              <p className={styles.text}>
                You shall at all times comply with anti-money laundering and counter-terrorism financing legislation applicable in the United Kingdom, the European Union, the United States of America, and your applicable home jurisdiction. In the event of any conflict between such laws, your obligation under these T&Cs is to comply with the most stringent obligation.
              </p>
              <p className={styles.text}>
                You shall not acquire SGCs, or use the Guardian Interface on whatever platform, if you are the subject of sanctions whether imposed by the United States or the European Union or the United Kingdom, or of sanctions consistent with the laws of the aforementioned jurisdictions or of the country from where you are accessing any Access Point or the Guardian Interface.
              </p>

              <h5 className={styles.sectionTitle}>8. Use of TSG Content</h5>
              <p className={styles.text}>
                Your use of an Access Point is for your own personal and non-commercial use only. You acknowledge that, as between The Sacred Groves and you, The Sacred Groves is the sole owner of all content accessible through an Access Point, including, without limitation, all applicable copyrights, patents, trademarks, trade secrets, trade names, logos (including the Logo), and other intellectual property rights thereto, as well as text, images, graphics, logos (including the Logo), audio, video and other material appearing on the Website and App or through another Access Point (TSG Content). The Website, App and TSG Content are protected by the copyright laws and other intellectual property laws of the United Kingdom and are protected globally by applicable international copyright treaties.
              </p>
              <p className={styles.text}>
                You may download and print extracts from the TSG Content for your own personal and non-commercial use only, provided you maintain and abide by any author attribution, copyright or trademark notice or restriction in any material that you download or print. You may not use any TSG Content for any other purpose without our prior written approval. Except as expressly authorised by The Sacred Groves, you are not allowed to create a database in electronic or paper form comprising all or part of the material appearing on the Website or App or through another Access Point.
              </p>
              <p className={styles.text}>
                Without prejudice to the foregoing restrictions: (i) the posting of TSG Content on publicly accessible social media, whether on a private or public account, is prohibited when used in conjunction with, or in relation to, any content that is in breach of applicable law, or by or with reference to any person who is engaged in any unlawful activity whatsoever, and (ii) the use of any TSG Content is not allowed in conjunction with, or in relation to, any content or commentary that is racially, ethnically, culturally or otherwise socially divisive, vulgar or offensive, or by or with reference to any person who is engaged in the dissemination, creation or propagation of such content or commentary.
              </p>
              <p className={styles.text}>
                If you wish to use our content other than as permitted by these terms and conditions, please contact us at <a href="mailto:dataprotection@thesacredgroves.com" className={styles.link}>dataprotection@thesacredgroves.com</a>.
              </p>

              <h5 className={styles.sectionTitle}>9. Comments, Communications and other Content</h5>
              <p className={styles.text}>
                You may post comments, photos, videos, and other content, within the Squads feature or wherever else allowed on the Website or within the App or through another Access Point, send other communications; and submit suggestions, ideas, comments, questions, or other information, so long as the content is not illegal, obscene, threatening, defamatory, invasive of privacy, infringing of intellectual property rights (including publicity rights), or otherwise injurious to third parties or objectionable, and does not consist of or contain software viruses, political campaigning, commercial solicitation, chain letters, mass mailings, or any form of "spam" or unsolicited commercial electronic messages. You may not use a false e-mail address, impersonate any person or entity, or otherwise mislead as to the origin of any content. The Sacred Groves reserves the right (but not retain the obligation) to remove or edit such content, but does not regularly review posted content.
              </p>
              <p className={styles.text}>
                If you do post content or submit material, and unless we indicate otherwise, you grant The Sacred Groves a nonexclusive, royalty-free, perpetual, irrevocable, and fully sublicensable right to use, reproduce, modify, adapt, publish, perform, translate, create derivative works from, distribute, and display such content throughout the world in any media. You grant The Sacred Groves the right to use the name that you submit in connection with such content, if they choose. You represent and warrant that you own or otherwise control all of the rights to the content that you post; that the content is accurate; that use of the content you supply does not violate this policy and will not cause injury to any person or entity; and that you will indemnify The Sacred Groves for all claims resulting from content you supply. The Sacred Groves has the right but not the obligation to monitor and edit or remove any activity or content. The Sacred Groves takes no responsibility and assumes no liability for any content posted by you or any third party.
              </p>

              <h5 className={styles.sectionTitle}>10. Indemnity</h5>
              <p className={styles.text}>
                To the extent permitted by applicable law, you agree to indemnify and hold harmless The Sacred Groves, and upon The Sacred Groves' request, defend each Sacred Groves Indemnified Party from any and all Losses incurred by a Sacred Groves Indemnified Party and arising from or related to any of the following: (i) your breach of any certification, covenant, obligation, representation or warranty made in this Agreement; (ii) your purchase, gifting, assignment or transfer of SGCs, and (iii) your use of the Guardian Interface. In no event may you enter into any settlement or like agreement with a third party that affects The Sacred Groves' rights or binds The Sacred Groves in any way, without the prior written consent of The Sacred Groves.
              </p>

              <h5 className={styles.sectionTitle}>11. Tenor and Guardianship</h5>
              <p className={styles.text}>
                Each SGC shall be valid for a tenor of ten (10) years from the date of its initial acquisition, subject to these T&Cs. Such tenor shall not vary or otherwise be affected by any transfer of the SGC during its initial validity. An SGC may be renewed on expiry of the Initial Term for such further period and on such commercial terms as The Sacred Groves may notify in its absolute discretion; provided that The Sacred Groves will notify the relevant Guardian of such updated terms at least three (3) months prior to the expiry of the Initial Term or any subsequent term. The option to renew on such notified, updated terms, may be exercised by the Guardian at his/her/their sole discretion.
              </p>
              <p className={styles.text}>
                You understand that the owner of the Guardian Account to which an SGC is assigned under their Guardian Account will become the acquirer of such SGC and shall be entitled to all associated rights, subject to these T&Cs.
              </p>
              <p className={styles.text}>
                Subject to these T&Cs, rights in relation to any SGCs shall accrue to the Guardian under whose Guardian Account such SGCs are registered.
              </p>

              <h5 className={styles.sectionTitle}>12. Fees payable by Guardian</h5>
              <p className={styles.subHeading}>Initial Fee and Renewal Fee</p>
              <p className={styles.text}>
                The person acquiring SGCs shall be responsible for the payment of the Initial Fee relating to such SGCs; such payment will be required at the time of acquisition of the SGCs.
              </p>
              <p className={styles.text}>
                The Guardian under whose Guardian Account SGCs are registered at the time of renewal upon the expiry of the Initial Term or any subsequent Renewal Term, shall be responsible for payment of the Renewal Fee if such Guardian elects for the renewal of such SGCs.
              </p>

              <h5 className={styles.sectionTitle}>13. Payment Terms</h5>
              <p className={styles.subHeading}>Fees and Charges</p>
              <p className={styles.text}>
                If there is a charge associated with the purchase of SGCs or any other item or service being offered through an Access Point, you agree to pay that charge in the Relevant Currency. The price stated for the SGCs or any other item or service, excludes all applicable taxes and currency exchange settlements, unless stated otherwise. Connecting to the Internet via a corporate or other private network that masks your location may cause charges to be different from those displayed for your actual location. Depending on your location, some transactions might require foreign currency conversion or be processed in another country. Your bank might charge you additional fees for those services when you use a debit or credit card. Please contact your bank for details.
              </p>
              <p className={styles.subHeading}>Billing Account</p>
              <p className={styles.text}>
                To pay the charges for the purchase of SGCs or any other item or service being offered through an Access Point, you will be asked to provide a payment method. You can access and change your billing information and payment method by signing into your <a href="https://application.sacredgroves.earth" target="_blank" rel="noopener noreferrer" className={styles.link}>account portal</a>. Additionally, you agree to permit The Sacred Groves to use any updated account information regarding your selected payment method provided by your issuing bank or the applicable payment network. You agree to promptly update your account and other information, including your email address and payment method details, so we can complete your transactions and contact you as needed in connection with your transactions. Changes made to your billing account will not affect charges we submit to your billing account before we could reasonably act on your changes to your billing account.
              </p>
              <p className={styles.subHeading}>Billing</p>
              <p className={styles.text}>
                By providing The Sacred Groves with a payment method, you (i) represent that you are authorized to use the payment method you provided and that any payment information you provide is true and accurate; (ii) authorize The Sacred Groves to charge you for the purchase of SGCs or any other item or service being offered through an Access Point, using your payment method; and (iii) authorize The Sacred Groves to charge you for any paid feature of an Access Point you choose to sign up for or use while these T&Cs are in force.
              </p>
              <p className={styles.subHeading}>Recurring Payments</p>
              <p className={styles.text}>
                When you purchase SGCs, you agree that you are authorizing recurring payments, and payments will be made to The Sacred Groves by the method and at the recurring intervals you have agreed to. By authorizing recurring payments, you are authorizing The Sacred Groves to process such payments as charges to your designated account (for credit card or similar payments). If any payment is returned unpaid or if any credit card or similar transaction is rejected or denied, The Sacred Groves reserve the right to collect any applicable rejection or insufficient funds fee.
              </p>

              <h5 className={styles.sectionTitle}>14. No Underlying Rights</h5>
              <p className={styles.text}>
                You acknowledge and accept that the acquisition of SGCs and the payment of any fees in relation to such SGCs, or any other items or services available through an Access Point, does not entitle you or any other Guardian or person to any rights, benefits, or access whatsoever in respect of the Natural Habitat  to which any SGC relates.
              </p>
              <p className={styles.text}>
                You acknowledge and accept that The Sacred Groves makes no warranty as to your benefiting from a tax or other similar perspective in relation to the acquiring, dealing or otherwise handling of SGCs.
              </p>
              <p className={styles.text}>
                You further acknowledge and accept that an SGC is not a financial instrument, and as such does not entitle you to a monetary or other financial or commercial return.
              </p>

              <h5 className={styles.sectionTitle}>15. Force majeure</h5>
              <p className={styles.text}>
                You acknowledge and accept that notwithstanding anything else contained in these T&Cs, none of The Sacred Groves Indemnified Parties will be responsible or otherwise liable to you in any respect if such liability arises as a result of circumstances or events that are beyond the reasonable control of any of The Sacred Groves Indemnified Parties, and provided that The Sacred Groves Indemnified Parties have taken reasonable measures from a commercial perspective to mitigate the effects of the aforementioned circumstances or events.
              </p>

              <h5 className={styles.sectionTitle}>16. Amendments to SGC, Guardian Interface</h5>
              <p className={styles.text}>
                You acknowledge and accept that The Sacred Groves reserves the right, at its sole discretion, to amend, from time to time, the content available on the Guardian Interface. You further acknowledge and accept that The Sacred Groves reserves the right, at its sole discretion, to amend, from time to time, the characteristics and attributes of each specific SGC, including but not limited to the attributes, location and/or size of the Natural Habitat  represented by such SGC.
              </p>

              <h5 className={styles.sectionTitle}>17. Re-allocation of SGC</h5>
              <p className={styles.text}>
                You acknowledge and accept that in the event:
              </p>
              <ol type="i" className={`${styles.orderedList} ${styles.orderedListRoman}`}>
                <li>you breach your payment obligations under Clause 12 (<em>Fees payable by Guardian</em>), and such failure continues for more than ninety (90) days;</li>
                <li>you breach your payment obligations under Clause 10 (<em>Indemnity</em>), and such failure continues for more than thirty (30) days;</li>
                <li>you breach any other provision of these T&Cs, including but not limited to Clause 7 (<em>Anti-money laundering and Sanctions</em>), or Clause 8 (<em>Use of TSG Content</em>);</li>
                <li>you breach any warranty or commit any misrepresentation under this T&C,</li>
              </ol>
              <p className={styles.text}>
                then, in relation to:
              </p>
              <ol type="a" className={`${styles.orderedList} ${styles.orderedListAlpha}`}>
                <li>point (i) above, all rights related to SGCs in respect of which there has been a breach of a payment obligation shall revert back to The Sacred Groves, and The Sacred Groves will then be entitled to deal with such SGCs in its absolute discretion, including but not limited to allocating such SGCs to other persons. In the event that you no longer retain any SGCs following such reversion, then, The Sacred Groves will also be entitled to remove your Guardian Account and cancel your access to the Guardian Interface.</li>
                <li>points (ii), (iii) and (iv) above, The Sacred Groves will be entitled to remove your Guardian Account, cancel your access to the Guardian Interface, and all rights related to SGCs in respect of which there has been a breach of a payment obligation shall revert back to The Sacred Groves. The Sacred Groves will then be entitled to deal with such SGCs in its absolute discretion, including but not limited to allocating such SGCs to other persons.</li>
              </ol>

              <h5 className={styles.sectionTitle}>18. Data Privacy</h5>
            <p className={styles.text}>
                The Sacred Groves has a strict data privacy policy that is in line with the most stringent data privacy requirements globally, including the General Data Protection Regulation issued by the European Union. Please refer to Appendix 3 for our <a href="/policy" className={styles.link}>data privacy policy.</a>
              </p>

              <h5 className={styles.sectionTitle}>19. Guardian Account</h5>
              <p className={styles.text}>
                You may need your own Guardian Account, and you may be required to be logged in to the account and have a valid payment method associated with it. If there is a problem charging your selected payment method, we may charge any other valid payment method associated with your account. You are responsible for maintaining the confidentiality of your Guardian Account and password and for restricting access to your Guardian Account, and you agree to accept responsibility for all activities that occur under or through your Guardian Account. The Sacred Groves does sell products for children, but it sells them to adults, who can purchase with a credit card or other permitted payment method. If you are under 18 years of age, you may acquire SGCs and set up a Guardian Account only with involvement of a parent or legal guardian. The Sacred Groves reserves the right to refuse service, terminate Guardian Accounts, terminate your rights to use the Guardian Interface, remove or edit content, or cancel acquisitions, all in its sole discretion.
              </p>
            <p className={styles.text}>
                By accepting these T&Cs and/or setting up a Guardian Account, you confirm that you are of legal adult age in the jurisdiction of your residence, or at least 18 years of age, whichever is older, and that you are not engaged in, or have previously been engaged in a criminal enterprise or activity. Violation of any of the above required confirmations will entitle The Sacred Groves to remove your Guardian Account and cancel your access to the Guardian Interface, and all rights related to your SGCs shall revert back to The Sacred Groves. The Sacred Groves will then be entitled to deal with such SGCs in its absolute discretion, including but not limited to allocating such SGCs to other persons.
            </p>

              <h5 className={styles.sectionTitle}>20. Subrogation</h5>
            <p className={styles.text}>
                You hereby subrogate to The Sacred Groves any rights you may have, now or in the future, to conduct or defend claims whether in a court, tribunal or other forum of dispute, in respect of, related to, or otherwise emanating from, SGCs.
              </p>

              <h5 className={styles.sectionTitle}>21. Entire Agreement and Updates</h5>
              <p className={styles.text}>
                The Agreement set out within these T&Cs supersedes any and all prior negotiations and any oral and written agreements heretofore made between the Parties relating to the subject matter hereof and constitutes the entire agreement of the Parties relating to the subject matter hereof. No amendments or modifications to these T&Cs shall be valid unless made in writing; such amendments or modifications may be made unilaterally by The Sacred Groves upon notification to all Parties.
              </p>
            <p className={styles.text}>
                The Sacred Groves reserves the right, and you acknowledge and accept such right, to amend and update these T&Cs, including any provisions relating to fees, transfers, termination, or use of intellectual property. The Sacred Groves will provide you with a notice of any such updates/amendments in advance of their coming into effect.
            </p>

              <h5 className={styles.sectionTitle}>22. Absolute Discretion</h5>
            <p className={styles.text}>
                Notwithstanding anything else contained in these T&Cs or on the Website or App or another Access Point, you agree that The Sacred Groves shall have absolute discretion on whether to accept any transaction conducted, or purported to be conducted, by you or anyone else on the Website or App or another Access Point, including the purchase, gifting, assignment or transfer of SGCs.
            </p>

              <h5 className={styles.sectionTitle}>23. Severability</h5>
            <p className={styles.text}>
                Should one or more provisions of this Agreement be held invalid, illegal or unenforceable in any respect, the validity, legality and enforceability of the remaining provisions shall not in any way be affected and the Parties shall in good faith restate the affected provision in a manner that it shall: (a) respect the spirit of the affected provision in consideration of the whole agreement between the Parties; and (b) be in compliance with applicable laws and regulations.
            </p>

              <h5 className={styles.sectionTitle}>24. Third Party Rights</h5>
            <p className={styles.text}>
                A person who is not a Party has no right under the Contracts (Rights of Third Parties) Act 1999 to enforce or enjoy the benefit of any term or condition of this Agreement save for The Sacred Groves Indemnified Parties (as and to the extent provided in Clause 10 (<em>Indemnity</em>).
            </p>

              <h5 className={styles.sectionTitle}>25. Electronic communications</h5>
            <p className={styles.text}>
                When you use/interact with the Guardian Interface, or send emails, text messages, and other communications from your computer or mobile device to us, you may be communicating with us electronically. You consent to receive communications from us electronically, such as e-mails, texts, mobile push notices, or notices and messages on the Websites or through the App or another Access Point, and you can retain copies of these communications for your records. You agree that all agreements, notices, disclosures, and other communications that we provide to you electronically satisfy any legal requirement that such communications be in writing.
            </p>

              <h5 className={styles.sectionTitle}>26. Governing Law and Language</h5>
            <p className={styles.text}>
                The Agreement and these T&Cs shall be governed by, and construed in accordance with, the laws of England. In the event of any translations of these T&Cs, the T&Cs in the English language shall prevail, to the extent not prohibited by local laws in your jurisdiction.
              </p>

              <h5 className={styles.sectionTitle}>27. Dispute Resolution</h5>
              <p className={styles.text}>
                The courts of England shall have sole and exclusive jurisdiction as the legal seat of any dispute between the Parties arising from or related to these T&Cs, the Guardian Interface, or SGCs.
              </p>
            </div>
          </div>
        </div>
          </section>

      <section id="definedTerms" className={styles.appendixSection}>
        <div className={styles.container}>
          <div className={styles.content}>
            <div className={styles.appendixContent}>
              <h1 className={styles.appendixTitle}>Appendix 1: Defined Terms</h1>
              <div className={styles.definedTerms}>
                <p className={styles.definedTerm}><b>Access Point:</b> means the Website, App, or any social media platform or other access point through which The Sacred Groves allows persons to access the end-user systems and interface that it has established.</p>
                <p className={styles.definedTerm}><b>App:</b> any software application on a mobile platform, as issued or updated by or on behalf of, The Sacred Groves from time to time, and through which, among other things, Guardians are able to access their Guardian Account.</p>
                <p className={styles.definedTerm}><b>Eur:</b> the Euro, the legal tender of certain member states of the European Union, as well as other countries, that have adopted such currency.</p>
                <p className={styles.definedTerm}><b>GBP:</b> British pounds sterling, the legal tender of the United Kingdom.</p>
                <p className={styles.definedTerm}><b>Guardian:</b> the acquirer of SGCs as well as any person/entity entitled to access the Guardian Interface in respect of any number of SGCs.</p>
                <p className={styles.definedTerm}><b>Guardian Account:</b> the online account created on the Guardian Interface in relation to a person who has acquired or been assigned, SGCs.</p>
                <p className={styles.definedTerm}><b>Guardian Interface:</b> the electronic interface available on any Access Point to acquire, operate or deal with, or obtain/view any information pertaining to, SGCs.</p>
                <p className={styles.definedTerm}><b>Initial Fee:</b> the amount specified in the Relevant Currency on an Access Point from time to time, as being payable in respect of the initial acquisition of an SGC.</p>
                <p className={styles.definedTerm}><b>Initial Term:</b> in relation to an SGC is the period starting from the date of its original acquisition, and continuing for a term of one hundred and twenty (120) months.</p>
                <p className={styles.definedTerm}><b>Logo:</b> the logo of The Sacred Groves, as it appears at any point in time.</p>
                <p className={styles.definedTerm}><b>Losses:</b> collectively, any claims, losses, liabilities, damages, expenses and costs, including without limitation attorneys' fees and court costs.</p>
                <p className={styles.definedTerm}><b>Natural Habitat :</b> any leasehold, freehold, license, easement or other right in, over or under any forest, pasture or other land or body of water, including associated human or natural resources, that is enjoyed by The Sacred Groves.</p>
                <p className={styles.definedTerm}><b>Parties:</b> you and The Sacred Groves.</p>
                <p className={styles.definedTerm}><b>Relevant Currency:</b> means US$, GBP, Eur or such other currency as The Sacred Groves (acting in its absolute discretion) may specify an amount as being denominated in, from time to time.</p>
                <p className={styles.definedTerm}><b>Renewal Fee:</b> the amount specified in the Relevant Currency and notified in accordance with these T&Cs in respect of the renewal of SGCs.</p>
                <p className={styles.definedTerm}><b>Renewal Term:</b> the tenor notified in relation to the renewal of an SGC in accordance with these T&Cs.</p>
                <p className={styles.definedTerm}><b>Sacred Groves Indemnified Party:</b> each of The Sacred Groves, its directors, officers, employees, independent contractors and agents.</p>
                <p className={styles.definedTerm}><b>Sacred Groves Clusters or SGCs:</b> means those units termed as 'Sacred Groves Clusters' which are available for acquisition from The Sacred Groves through an Access Point, and use of which are subject to these T&Cs.</p>
                <p className={styles.definedTerm}><b>Squads:</b> is a social purpose feature within the Guardian Interface that, among other things, allows the formation of groups of Guardians, facilitates interactions between group members, and allows for the creation and achievement of goal-oriented tasks.</p>
                <p className={styles.definedTerm}><b>T&Cs:</b> the terms and conditions set out in this document including its appendices.</p>
                <p className={styles.definedTerm}><b>United States Dollars or US$:</b> the legal tender of the United States of America.</p>
                <p className={styles.definedTerm}><b>Website:</b> any website(s) set-up by or on behalf of, The Sacred Groves from time to time, and through which, among other things, Guardians are able to access their Guardian Account.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="interpretation" className={styles.appendixSection}>
        <div className={styles.container}>
          <div className={styles.content}>
            <div className={styles.appendixContent}>
              <h1 className={styles.appendixTitle}>Appendix 2: Interpretation</h1>
              <div className={`${styles.interpretationList} ${styles.termsListsub}`}>
                <ol>
                  <li>Interpretation
                    <ol>
                      <li>The following rules of interpretation shall apply to these T&Cs:
                        <ol>
                          <li>The singular includes the plural and the plural includes the singular; "or" is not exclusive; the words "include," "includes" and "including" are not limiting.</li>
                          <li>A reference to a person includes a natural person, as well as any form of organisation, unit or corporation, and its permitted successors and assigns.</li>
                          <li>A reference to a Clause or Appendix is to the relevant Clause or Appendix of these T&Cs unless otherwise indicated.</li>
                          <li>The words "hereof", "herein" and "hereinafter" and words of similar import refer to these T&Cs as a whole and not to any particular provision, unless otherwise indicated.</li>
                          <li>Headings and titles are for convenience of reference only and shall not be interpretive of the text hereof.</li>
                          <li>The expiration or termination of the Agreement shall not affect such of the provisions of these T&Cs as expressly provide that they will operate after any such expiration or termination or which of necessity must continue to have effect after such expiration or termination, notwithstanding that the Clauses themselves do not expressly provide for this. Similarly, if any Guardian ceases to be a Guardian, such cessation shall not in any way limit or derogate from any rights or obligations of such Guardian in terms of the Agreement which expressly, or must of necessity, continue to operate in favour of or bind such Guardian even after such cessation.</li>
                          <li>References to "this Agreement", "T&Cs", or any other agreement, statute or other document, law or regulation shall be construed as a reference to such agreement, statute or other document, law or regulation as amended, modified or supplemented and in effect from time to time and shall include a reference to any document which amends, modifies or supplements it, or is entered into, made or given pursuant to or in accordance with its terms.</li>
                        </ol>
                      </li>
                    </ol>
                  </li>
                </ol>
              </div>
              <div className={styles.downloadButtonWrapper}>
                <a href="/terms-and-conditions.pdf" download className={styles.downloadLink}>
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

export default TermsAndConditions
