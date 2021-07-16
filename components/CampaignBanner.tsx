import Link from 'next/link';
import { useBehaviorTracking } from '@uniformdev/optimize-tracker-react';
//import Splitter from './Splitter';
import { CampaignDocument } from '../lib/sanityTypes';
import { urlFor } from '../lib/sanityHelpers';

const CampaignBanner: React.FC<CampaignDocument> = (props) => {
  const { title, description, buttonLinkSlug, buttonText, image, unfrmOptIntentTag } = props;

  useBehaviorTracking(unfrmOptIntentTag);

  return (
    <>
      <div className="container mx-auto my-5">
          <div className="relative rounded-lg flex flex-col md:flex-row items-center md:shadow-xl md:h-96 mx-2">
              <div className="z-0 order-1 md:order-2 relative w-full md:w-2/5 h-80 md:h-full overflow-hidden rounded-lg md:rounded-none md:rounded-r-lg">
                  <div className="absolute inset-0 w-full h-full object-fill object-center bg-blue-400 bg-opacity-30 bg-cover bg-bottom">
                      {image && (
                              <img
                                src={urlFor(image.asset).url()}
                                alt={buttonText}
                              />
                            )}
                  </div>
                  <div className="md:hidden absolute inset-0 h-full p-6 pb-6 flex flex-col-reverse justify-start items-start bg-gradient-to-b from-transparent via-transparent to-gray-900">
                      <h3 className="w-full font-bold text-2xl text-white leading-tight mb-2">{title}</h3>
                  </div>
                  <svg className="hidden md:block absolute inset-y-0 h-full w-24 fill-current text-white -ml-12" viewBox="0 0 100 100" preserveAspectRatio="none">
                      <polygon points="50,0 100,0 50,100 0,100" />
                  </svg>
              </div>
              <div className="z-10 order-2 md:order-1 w-full h-full md:w-3/5 flex items-center -mt-6 md:mt-0">
                  <div className="p-8 md:pr-18 md:pl-14 md:py-12 mx-2 md:mx-0 h-full bg-white rounded-lg md:rounded-none md:rounded-l-lg shadow-xl md:shadow-none">
                      <h3 className="hidden md:block font-bold text-2xl text-gray-700">{title}</h3>
                      <p className="text-gray-600 text-justify">{description}</p>
                      <a className="flex items-baseline mt-3 text-blue-600 hover:text-blue-900 focus:text-blue-900" href="#">
                          <span>Show more</span>
                          <span className="text-xs ml-1">&#x279c;</span>
                      </a>
                  </div>
              </div>
          </div>
      </div>
    </>
  );
};

export default CampaignBanner;
/*
            <Link href={'/[[...slug]]'} as={buttonLinkSlug}>
              <button className="mx-auto lg:mx-0 hover:underline bg-white text-gray-800 font-bold rounded-full my-6 py-4 px-8 shadow-lg">
                {buttonText}
              </button>
            </Link>
<Splitter />
            */