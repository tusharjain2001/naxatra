import LegalPage from '../components/sections/LegalPage';
import { privacyPolicy } from '../data/legalContent';

export default function PrivacyPolicyPage() {
  return (
    <LegalPage
      title={privacyPolicy.title}
      lastUpdated={privacyPolicy.lastUpdated}
      sections={privacyPolicy.sections}
    />
  );
}
