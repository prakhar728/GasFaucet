import CommunitySection from './sections/CommunitySection';
import AIAgentsSection from './sections/AIAgentsSection';
import TokenSection from './sections/TokenSection';
import EcosystemSection from './sections/EcosystemSection';
import ContentHubSection from './sections/ContentHubSection';
import GovernanceSection from './sections/GovernanceSection';

export default function MainContent() {
  return (
    <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 space-y-32 relative z-10">
      <CommunitySection />
      <AIAgentsSection />
      <TokenSection />
      <EcosystemSection />
      <ContentHubSection />
      <GovernanceSection />
    </main>
  );
}