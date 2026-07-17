import LegalPage from '../components/sections/LegalPage';
import { privacyPolicy } from '../data/legalContent';
import usePageMeta from '../hooks/usePageMeta';

export default function PrivacyPolicyPage() {
  usePageMeta('Privacy Policy', 'Read the Naxatra Labs privacy policy.');

  return (
    <LegalPage
      title={privacyPolicy.title}
      lastUpdated={privacyPolicy.lastUpdated}
      sections={privacyPolicy.sections}
    />
  );
}
