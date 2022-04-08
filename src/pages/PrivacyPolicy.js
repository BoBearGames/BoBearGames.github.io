import Footer from "components/footers/MiniCenteredFooter.js";
import Header from "components/headers/light.js";
import { SectionHeading } from "components/misc/Headings";
import { Container, ContentWithPaddingXl } from "components/misc/Layouts";
import AnimationRevealPage from "helpers/AnimationRevealPage.js";
import React from "react";
import styled from "styled-components";
import tw from "twin.macro";

const HeadingRow = tw.div`flex`;
const Heading = tw(SectionHeading)`text-gray-900 mb-10`;
const Text = styled.div`
  ${tw`text-lg  text-gray-800`}
  p {
    ${tw`mt-2 leading-loose`}
  }
  h1 {
    ${tw`text-3xl font-bold mt-10`}
  }
  h2 {
    ${tw`text-2xl font-bold mt-8`}
  }
  h3 {
    ${tw`text-xl font-bold mt-6`}
  }
  ul {
    ${tw`list-disc list-inside`}
    li {
      ${tw`ml-2 mb-3`}
      p {
        ${tw`mt-0 inline leading-normal`}
      }
    }
  }
`;
const Link = tw.a`underline`;
export default ({ headingText = "Privacy Policy" }) => {
  return (
    <AnimationRevealPage disabled="true">
      <Header links={[]} />
      <Container>
        <ContentWithPaddingXl>
          <HeadingRow>
            <Heading>{headingText}</Heading>
          </HeadingRow>
          <Text>
            <p>Last updated: April 6, 2022</p>

            <p>
              We ask that you read this privacy policy (“Privacy Policy”) carefully as it contains important information on how we collect, use, store, disclose and process certain information collected in connection with our Services (described below).
            </p>

            <p>
              We respect the privacy of our users and are committed to protecting our users’ information. We believe that users have a right to know our practices regarding the information that we may collect and use when you use our Services.
            </p>

            <h1>1. Introduction</h1>
            <p>
              Bo Bear Games Inc. (“Bo Bear Games”) develops and publishes a variety of games for mobile devices, each referred to as an “Application”. Our Privacy Policy applies whenever your information is processed as part of our “Services,” which includes any games/applications, products, content and/or websites operated by Bo Bear Games. This Privacy Policy describes how we process your personal information and your rights and choices concerning your personal information. We will not use or share your information with anyone except as described in this Privacy Policy.
            </p>

            <h1>2. The Information We Collect and How We Collect It</h1>

            <h2>Personal Information</h2>
            <ul>
              <li>
                <p>
                  Bo Bear Games collects the advertising identifier (Apple’s IDFA and Google’s advertiser ID) and a unique identifier for each user in our Applications.
                </p>
              </li>
              <li>
                <p>
                  Bo Bear Games integrates third party SDKs into our Applications. These SDKs are used for advertising to our users, analyzing service usage, enabling in-app purchases, or providing game services including account management. We provide third party service providers this data solely for internal operations of the Applications. This could include, but is not limited to, advertising identifiers, geolocation information and IP address. We encourage you to review the policies of our third party service providers listed below.
                </p>
              </li>
              <li>
                <p>
                  If a user explicitly provides it to us when prompted, we will collect email addresses of our users for our mailing list(s), account recovery or customer support purposes.
                </p>
              </li>
              <li>
                <p>
                  Some of our Applications may require or allow a user to provide a screen name so they can be identified within the game.
                </p>
              </li>
              <li>
                <p>
                  If a user purchases in-game virtual currency or items in an Application, they will have to select a third party payment processor who will collect the billing and financial information it needs to process the payment. This may include a user’s postal address, email address, and financial information. Our third party payment processes do not share financial information such as credit card numbers, but they may share non-financial information with us related to a user’s purchases, such as their name, billing address, and the items purchased.
                </p>
              </li>
            </ul>

            <h2>Non-personal Information</h2>
            <ul>
              <li>
                <p>
                  We allow third parties to collect some information by which users cannot be identified. Non-personal information may include technical information about your device, such as your browser type, screen resolution, device type, language, type of operating system and geo location (only general location). Non-personal information is gathered by third party service providers while you are accessing the Applications. They are allowed to use this information to conduct research and analysis, but only for strictly limited purposes.
                </p>
              </li>
              <li>
                <p>
                  Internally, Bo Bear Games also reserves the right to collect anonymous information for research and analysis. This information is generic in nature and cannot be used to individually identify a user. This information is collected each time a user runs one of our Applications.
                </p>
              </li>
            </ul>

            <h1>3. What We Do With The Information We Collect</h1>

            <h2>Personal Information</h2>
            <ul>
              <li>
                <p>
                  Advertisers collect data regarding advertisement performance, users’ interaction with ads, our Applications and users’ interests. Collected data may include the users’ personal information in order to serve users ads and for the third parties’ legitimate business interests.
                </p>
              </li>
              <li>
                <p>
                  Bo Bear Games and third party service providers may use collected personal data to help measure the effectiveness of our promotional campaigns.
                </p>
              </li>
              <li>
                <p>
                  Bo Bear Games collects persistent identifiers in order to provide support for our Applications to our users. Additionally, Bo Bear Games uses persistent identifiers to send promotions regarding new products or updates to our users. If we keep track of persistent advertising identifiers, it allows us to only notify these users about new products that they will actually be interested in.
                </p>
              </li>
              <li>
                <p>
                  We may collect email addresses in some of our Services so that we can notify interested users of upcoming releases and updates of our games and products. These emails always include a way to unsubscribe from receiving future emails. We may also collect email addresses for the purposes of offering support or recovering a user’s account.
                </p>
              </li>
              <li>
                <p>
                  When an Application asks for a screen name, it is used to visually identify that user to other users playing the game. Bo Bear Games prohibits any user under the age of 13 from providing individually identifiable information in their username or screen name. This includes, but is not limited to the user’s first name, last name, email address, and physical address.
                </p>
              </li>
            </ul>

            <h2>Non-personal Information</h2>
            <ul>
              <li>
                <p>
                  Third party service providers are allowed to collect and use non-personal information to conduct research and analysis, to target advertisements or other limited purposes. This information cannot be used to individually identify any user. We encourage you to review the policies of the third party service providers listed below.
                </p>
              </li>
              <li>
                <p>
                  Similarly, Bo Bear Games also uses non-personal information to conduct research and analysis. We do this to improve our services in future updates or to gain knowledge about how our users are interacting with our Services.
                </p>
              </li>
            </ul>

            <h2>Disclosure of Personal Information</h2>
            <p>The scenarios in which we will share your personal information are as follows:</p>
            <ul>
              <li>
                <p>
                  We determine that it is required by law, such as to comply with a subpoena, or similar legal process
                </p>
              </li>
              <li>
                <p>
                  We believe in good faith that disclosure is necessary to protect our rights, protect your safety or the safety of others, investigate fraud, or respond to a government request

                </p>
              </li>
              <li>
                <p>
                  We are participating in a merger, acquisition, liquidation, dissolution or sale of assets
                </p>
              </li>
              <li>
                <p>
                  We have your consent
                </p>
              </li>
              <li>
                <p>
                  In relation to third party service providers collecting information from our Applications as described in this Privacy Policy
                </p>
              </li>
            </ul>
            <p>Under no other circumstances will Bo Bear Games share, sell, rent, or release your information.</p>

            <h1>4. Your Rights</h1>

            <h2>Opt-out of all information collection:</h2>
            <p>
              You can stop collection of all information by uninstalling the Application(s). You may use the standard uninstall processes that are available as part of your mobile device or via the mobile platform or network. You can also request to opt-out by contacting us via email at <Link href="mailto:support@bobeargames.com">support@bobeargames.com</Link>.
            </p>

            <h2>Opt-out of targeted advertising:</h2>
            <p>
              You can opt-out of interest-based advertising on mobile applications by checking the privacy settings of your iOS or Android device and selecting "limit ad tracking" (Apple iOS) or "opt-out of interest based ads" (Android).
            </p>

            <h2>Other Rights:</h2>
            <p>
              You may request access, change, update or delete your personal information at any time by contacting us via email at <Link href="mailto:support@bobeargames.com">support@bobeargames.com</Link>. You have the right to these options as well as the right to not be discriminated against for exercising these options. We will respond to all requests within a reasonable timeframe.
            </p>

            <h2>California Residents:</h2>
            <p>
              The California Consumer Privacy Act (“CCPA”) allows California residents to opt-out of the sale of your personal information. Bo Bear Games does not sell your personal information. We adhere to the CCPA by allowing you to opt-out of any future sale of your personal information by emailing us at <Link href="mailto:support@bobeargames.com">support@bobeargames.com</Link>.
            </p>

            <h1>5. Children's Privacy</h1>
            <p>
              Our Services are not marketed to, or intended for, children under 13 and we do not knowingly collect, use, or disclose personal information from children under 13. We take children’s privacy seriously and encourage parents and guardians to play an active role in their children’s online experience. If you are a parent or guardian and you are aware that your child has provided us with personal information, please contact us so that we can take measures to promptly remove that information from our records.
            </p>

            <h1>6. Data Retention</h1>
            <p>
              How long we retain your personal information depends on why we collected it and how we use it, but we will not retain your personal information for longer than is necessary to provide you with the Services or for our legal requirements.
            </p>
            <p>
              We will retain personal information that is connected with your account and/or the Services you use from us for as long as you have an active account with us. We will take measures to delete this personal information if you delete your account. However, you acknowledge that we may retain some information after you have closed, or we have deleted, your account with us where necessary to enable us to meet our legal obligations or to exercise, defend, or establish our rights.
            </p>

            <h1>7. International Operations and Data Transfers</h1>
            <p>
              Bo Bear Games is based in Canada but our Services are global by nature and your data can therefore be transferred to anywhere in the world. Because different countries may have different data protection laws than your own country, we take steps to ensure adequate safeguards are in place to protect your data as explained in this Privacy Policy. Adequate safeguards that our partners may use include standard contractual clauses approved by EU Commission and the Privacy Shield certification in the case of transfers to the USA.
            </p>

            <h1>8. Security</h1>
            <p>
              We follow generally accepted industry standards and internal procedures to protect personal information submitted to us, both during transmission and once we receive it. While we take precautions against possible security breaches of our Services and our customer databases and records, no website or Internet transmission is completely secure. We cannot guarantee that unauthorized access, hacking, data loss, or other breaches will never occur, and we cannot guarantee the security of your information while it is being transmitted to our Service. Any transmission is at your own risk.
            </p>

            <h1>9. Third-Party Service Providers</h1>

            <h2>Advertising Networks:</h2>
            <p>
              Bo Bear Games allows advertisements from third party ad networks to be displayed in our Applications. We make commercially reasonable efforts to ensure that the third party ad networks are configured to comply with applicable privacy laws, and we reasonably believe this to be the case for each of them. For persons in European Union countries, we also configure networks to be compliant with the General Data Protection Regulation of 2016 (GDPR).
            </p>

            <h2>In-App Purchases:</h2>
            <p>
              In order to make in-app purchases, a user must select a third party payment processor that we have integrated with our Applications to finalize and pay for their order. The third party operator’s privacy policy and security practices will apply to this process a user’s information. We encourage you to read that privacy statement before providing your information.
            </p>

            <h2>Social Networks:</h2>
            <p>
              Some of our Applications may integrate a third party social network such as Facebook or Twitter to allow sharing progress with friends, or allowing them to be invited to use our service. The privacy policy of each social network will indicate what data is available to us and how we use it.
            </p>

            <h2>Analytics:</h2>
            <p>
              Bo Bear Games makes use of third party service providers in order to measure how users utilize our services so that we may improve them and to measure the effectiveness of our advertising campaigns.
            </p>
            <p>
              The following is a comprehensive list of the third party service providers we currently use in our Services, their location and links to their privacy policies. Please note that each individual Application we offer may only use a subset of these operators:
            </p>
            <ul>
              <li>
                <strong>Applovin</strong> (located in the United States) - <Link href="https://www.applovin.com/privacy/">Read their Privacy Policy</Link>
              </li>
              <li>
                <strong>AdColony</strong> (located in the United States) - <Link href="http://www.adcolony.com/privacy-policy/">Read their Privacy Policy</Link>
              </li>
              <li>
                <strong>Facebook</strong> (located in the United States) - <Link href="https://www.facebook.com/privacy/explanation">Read their Privacy Policy</Link>
              </li>
              <li>
                <strong>Tapjoy</strong> (headquartered in the United States with offices throughout the Americas, Asia and Europe) - <Link href="https://www.tapjoy.com/legal/general/privacy-policy/">Read their Privacy Policy</Link>
              </li>
              <li>
                <strong>UnityAds</strong> (headquartered in the United States with offices throughout the Americas, Asia and Europe) - <Link href="https://unity3d.com/legal/privacy-policy">Read their Privacy Policy</Link>
              </li>
              <li>
                <strong>Kochava</strong> (located in the United States) - <Link href="https://www.kochava.com/kochava-difference/kochava-security-privacy/">Read their Privacy Policy</Link>
              </li>
              <li>
                <strong>Apple</strong> (located in the United States) - <Link href="https://www.apple.com/legal/privacy/en-ww/">Read their Privacy Policy</Link>
              </li>
              <li>
                <strong>Google Play Services</strong> (located in the United States) - <Link href="https://www.google.com/policies/privacy/">Read their Privacy Policy</Link>
              </li>
              <li>
                <strong>Firebase Crashlytics</strong> (located in the United States) - <Link href="https://firebase.google.com/policies/analytics">Read their Privacy Policy</Link>
              </li>
            </ul>

            <h1>10. Changes to This Privacy Policy</h1>
            <p>
              We may update our Privacy Policy from time to time. When we do, we will revise the “last updated” date at the top of the policy and notify you of any changes by posting the new Privacy Policy on this page. We encourage you to periodically check this Privacy Policy for updates as your continued use of our services indicate your acceptance of any changes to this privacy policy. If you would like a copy of earlier policies, please get in touch using the Contact Us information below.
            </p>

            <h1>11. Contact Us</h1>
            <p>
              If you have any questions, comments, or concerns regarding our Privacy Policy and/or privacy practices, please send an email to <Link href="mailto:support@bobeargames.com">support@bobeargames.com</Link>.
            </p>
          </Text>
        </ContentWithPaddingXl>
      </Container>
      <Footer />
    </AnimationRevealPage>
  );
};
