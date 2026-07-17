import LegalPage from '../components/sections/LegalPage';
import { termsOfUse } from '../data/legalContent';
import usePageMeta from '../hooks/usePageMeta';

export default function TermsOfUsePage() {
  usePageMeta('Terms of Use', 'Read the Naxatra Labs terms of use.');

  return (
    <LegalPage
      title={termsOfUse.title}
      lastUpdated={termsOfUse.lastUpdated}
      sections={termsOfUse.sections}
    />
  );
}
