import LegalPage from '../components/sections/LegalPage';
import { termsOfUse } from '../data/legalContent';

export default function TermsOfUsePage() {
  return (
    <LegalPage
      title={termsOfUse.title}
      lastUpdated={termsOfUse.lastUpdated}
      sections={termsOfUse.sections}
    />
  );
}
