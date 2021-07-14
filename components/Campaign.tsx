import Link from 'next/link';
import { useBehaviorTracking } from '@uniformdev/optimize-tracker-react';
//import Splitter from './Splitter';
import { CampaignDocument } from '../lib/sanityTypes';
import { urlFor } from '../lib/sanityHelpers';

const Campaign: React.FC<CampaignDocument> = (props) => {
  const { title, description, buttonLinkSlug, buttonText, image, unfrmOptIntentTag } = props;

  useBehaviorTracking(unfrmOptIntentTag);

  return (
    <>
      <div className="antialiased bg-gray-200 h-screen w-screen bg-center">
        <div className="flex items-center justify-center min-h-screen">
          <div className="bg-white shadow-xl rounded-lg max-w-lg overflow-hidden">
            <div className="bg-cover bg-center h-96">
              {image && (
                    <img
                      src={urlFor(image.asset).url()}
                      alt={buttonText}
                    />
                  )}
            </div>
            <div className="container p-4">
              <div className="pb-4">{title}</div>
              <div className="pb-4">
                <p>{description}</p>
              </div>
              <div><a href="https://www.vmlyr.com/en-au/australia/work/maccas-monopoly">Show more</a></div>
            </div>
          </div>
        </div>
      </div>
      
    </>
  );
};

export default Campaign;
/*
            <Link href={'/[[...slug]]'} as={buttonLinkSlug}>
              <button className="mx-auto lg:mx-0 hover:underline bg-white text-gray-800 font-bold rounded-full my-6 py-4 px-8 shadow-lg">
                {buttonText}
              </button>
            </Link>
<Splitter />
            */