import { Personalize } from '@uniformdev/optimize-tracker-react';
import { mapSanityDocumentToPersonalizableItem } from '../lib/optimizeHelpers';
import { PersonalizedCampaignDocument } from '../lib/sanityTypes';
import Campaign from './Campaign';
import Splitter from './Splitter';

const PersonalizedCampaignLoading = () => {
  return (
    <>
      <div className="antialiased bg-gray-200 h-screen w-screen bg-center">
        <div className="flex items-center justify-center min-h-screen">
          <div className="bg-white shadow-xl rounded-lg max-w-lg overflow-hidden">
            <div className="bg-cover bg-center h-96"></div>
            <div className="container p-4">
              <div className="pb-4"></div>
              <div className="pb-4">
                <p></p>
              </div>
              <div></div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export const PersonalizedCampaign: React.FC<PersonalizedCampaignDocument> = ({ campaignVariations }) => {
  const variations = campaignVariations.map(mapSanityDocumentToPersonalizableItem);

  return (
    <Personalize
      variations={variations}
      trackingEventName="campaignPersonalized"
      component={Campaign}
      loadingMode={PersonalizedCampaignLoading}
    />
  );
};
