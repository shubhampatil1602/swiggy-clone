import Header from './pages/Header';
import RestaurantMenu from './pages/RestaurantMenu';
import TopRestaurantCarousel from './pages/TopRestaurantCarousel';
import WhatIsOnYourMindCarousel from './pages/WhatIsOnYourMindCarousel';

const App = () => {
  const imageGridCards = {
    info: [
      {
        id: '750579',
        imageId:
          'v1674029856/PC_Creative%20refresh/3D_bau/banners_new/Pizza.png',
        action: {
          link: 'https://www.swiggy.com/collections/83631?collection_id=83631&search_context=pizza&tags=layout_CCS_Pizza&type=rcv2',
          text: 'Pizzas',
          type: 'WEBLINK',
        },
        entityType: 'BANNER',
        accessibility: {
          altText: 'restaurants curated for pizza',
          altTextCta: 'open',
        },
        entityId:
          'swiggy://collectionV2?collection_id=83631&tags=layout_CCS_Pizza&search_context=pizza',
        frequencyCapping: {},
      },
      {
        id: '750559',
        imageId:
          'v1674029843/PC_Creative%20refresh/3D_bau/banners_new/Vada_Pav.png',
        action: {
          link: 'https://www.swiggy.com/collections/80417?collection_id=80417&tags=layout_BAU_Contextual%2Cvada_pav&type=rcv2',
          text: 'Vada Pav',
          type: 'WEBLINK',
        },
        entityType: 'BANNER',
        accessibility: {
          altText: 'restaurants curated for vada pav',
          altTextCta: 'open',
        },
        entityId: '80417',
        frequencyCapping: {},
      },
      {
        id: '745861',
        imageId:
          'v1674029858/PC_Creative%20refresh/3D_bau/banners_new/Shakes.png',
        action: {
          link: 'https://www.swiggy.com/collections/83673?collection_id=83673&tags=layout_CCS_Shakes&type=rcv2',
          text: 'Shake',
          type: 'WEBLINK',
        },
        entityType: 'BANNER',
        accessibility: {
          altText: 'restaurants curated for shakes',
          altTextCta: 'open',
        },
        entityId:
          'swiggy://collectionV2?collection_id=83673&tags=layout_CCS_Shakes',
        frequencyCapping: {},
      },
      {
        id: '750639',
        imageId:
          'v1674029847/PC_Creative%20refresh/3D_bau/banners_new/Kachori.png',
        action: {
          link: 'https://www.swiggy.com/collections/80448?collection_id=80448&tags=layout_BAU_Contextual%2Ckachori&type=rcv2',
          text: 'Kachori',
          type: 'WEBLINK',
        },
        entityType: 'BANNER',
        accessibility: {
          altText: 'restaurant curated for kachori',
          altTextCta: 'open',
        },
        entityId: '80448',
        frequencyCapping: {},
      },
      {
        id: '750589',
        imageId:
          'v1674029845/PC_Creative%20refresh/3D_bau/banners_new/Burger.png',
        action: {
          link: 'https://www.swiggy.com/collections/83637?collection_id=83637&search_context=burger&tags=layout_CCS_Burger&type=rcv2',
          text: 'Burgers',
          type: 'WEBLINK',
        },
        entityType: 'BANNER',
        accessibility: {
          altText: 'restaurants curated for burger',
          altTextCta: 'open',
        },
        entityId:
          'swiggy://collectionV2?collection_id=83637&tags=layout_CCS_Burger&search_context=burger',
        frequencyCapping: {},
      },
      {
        id: '750222',
        imageId:
          'v1674029858/PC_Creative%20refresh/3D_bau/banners_new/Rolls.png',
        action: {
          link: 'https://www.swiggy.com/collections/83669?collection_id=83669&tags=layout_CCS_Rolls&type=rcv2',
          text: 'Rolls',
          type: 'WEBLINK',
        },
        entityType: 'BANNER',
        accessibility: {
          altText: 'restaurants curated for roll',
          altTextCta: 'open',
        },
        entityId:
          'swiggy://collectionV2?collection_id=83669&tags=layout_CCS_Rolls',
        frequencyCapping: {},
      },
      {
        id: '750591',
        imageId: 'v1675667625/PC_Creative%20refresh/Biryani_2.png',
        action: {
          link: 'https://www.swiggy.com/collections/83639?collection_id=83639&search_context=biryani&tags=layout_CCS_Biryani&type=rcv2',
          text: 'Biryani',
          type: 'WEBLINK',
        },
        entityType: 'BANNER',
        accessibility: {
          altText: 'restaurants curated for biryani',
          altTextCta: 'open',
        },
        entityId:
          'swiggy://collectionV2?collection_id=83639&tags=layout_CCS_Biryani&search_context=biryani',
        frequencyCapping: {},
      },
      {
        id: '750248',
        imageId:
          'v1674029859/PC_Creative%20refresh/3D_bau/banners_new/Shawarma.png',
        action: {
          link: 'https://www.swiggy.com/collections/80402?collection_id=80402&tags=layout_Shawarma_Contextual&type=rcv2',
          text: 'Shawarma',
          type: 'WEBLINK',
        },
        entityType: 'BANNER',
        accessibility: {
          altText: 'restaurant curated for shawarma',
          altTextCta: 'open',
        },
        entityId:
          'swiggy://collectionV2?collection_id=80402&tags=layout_Shawarma_Contextual',
        frequencyCapping: {},
      },
      {
        id: '750216',
        imageId:
          'v1674029854/PC_Creative%20refresh/3D_bau/banners_new/Pav_Bhaji.png',
        action: {
          link: 'https://www.swiggy.com/collections/80362?collection_id=80362&tags=layout_PavBhaji_Contextual&type=rcv2',
          text: 'Pav Bhaji',
          type: 'WEBLINK',
        },
        entityType: 'BANNER',
        accessibility: {
          altText: 'restaurant curated for pav bhaji',
          altTextCta: 'open',
        },
        entityId:
          'swiggy://collectionV2?collection_id=80362&tags=layout_PavBhaji_Contextual',
        frequencyCapping: {},
      },
      {
        id: '750587',
        imageId:
          'v1674029848/PC_Creative%20refresh/3D_bau/banners_new/Chinese.png',
        action: {
          link: 'https://www.swiggy.com/collections/83636?collection_id=83636&tags=layout_CCS_Chinese&type=rcv2',
          text: 'Chinese',
          type: 'WEBLINK',
        },
        entityType: 'BANNER',
        accessibility: {
          altText: 'restaurant curated for chinese',
          altTextCta: 'open',
        },
        entityId:
          'swiggy://collectionV2?collection_id=83636&tags=layout_CCS_Chinese',
        frequencyCapping: {},
      },
      {
        id: '750228',
        imageId:
          'v1674029860/PC_Creative%20refresh/3D_bau/banners_new/Samosas.png',
        action: {
          link: 'https://www.swiggy.com/collections/80396?collection_id=80396&tags=layout_BAU_Contextual%2Csamosa&type=rcv2',
          text: 'Samosa',
          type: 'WEBLINK',
        },
        entityType: 'BANNER',
        accessibility: {
          altText: 'restaurants curated for samosa',
          altTextCta: 'open',
        },
        entityId: '80396',
        frequencyCapping: {},
      },
      {
        id: '750571',
        imageId:
          'v1674029858/PC_Creative%20refresh/3D_bau/banners_new/Pure_Veg.png',
        action: {
          link: 'https://www.swiggy.com/collections/80435?collection_id=80435&tags=layout_CCS_PureVeg&type=rcv2',
          text: 'Pure Veg',
          type: 'WEBLINK',
        },
        entityType: 'BANNER',
        accessibility: {
          altText: 'restaurants curated for veg',
          altTextCta: 'open',
        },
        entityId:
          'swiggy://collectionV2?collection_id=80435&tags=layout_CCS_PureVeg',
        frequencyCapping: {},
      },
      {
        id: '749768',
        imageId:
          'v1674029852/PC_Creative%20refresh/3D_bau/banners_new/Momos.png',
        action: {
          link: 'https://www.swiggy.com/collections/80461?collection_id=80461&tags=layout_CCS_Momos&type=rcv2',
          text: 'Momos',
          type: 'WEBLINK',
        },
        entityType: 'BANNER',
        accessibility: {
          altText: 'restaurant curated for momos',
          altTextCta: 'open',
        },
        entityId:
          'swiggy://collectionV2?collection_id=80461&tags=layout_CCS_Momos',
        frequencyCapping: {},
      },
      {
        id: '749772',
        imageId:
          'v1674029855/PC_Creative%20refresh/3D_bau/banners_new/Noodles.png',
        action: {
          link: 'https://www.swiggy.com/collections/80463?collection_id=80463&tags=layout_BAU_Contextual%2Cnoodles&type=rcv2',
          text: 'Noodles',
          type: 'WEBLINK',
        },
        entityType: 'BANNER',
        accessibility: {
          altText: 'restaurant curated for noodles',
          altTextCta: 'open',
        },
        entityId: '80463',
        frequencyCapping: {},
      },
      {
        id: '749760',
        imageId:
          'v1674029851/PC_Creative%20refresh/3D_bau/banners_new/Khichdi.png',
        action: {
          link: 'https://www.swiggy.com/collections/80455?collection_id=80455&tags=layout_BAU_Contextual%2Ckhichdi&type=rcv2',
          text: 'Khichdi',
          type: 'WEBLINK',
        },
        entityType: 'BANNER',
        accessibility: {
          altText: 'restaurants curated for khichdi',
          altTextCta: 'open',
        },
        entityId: '80455',
        frequencyCapping: {},
      },
      {
        id: '749762',
        imageId:
          'v1674029844/PC_Creative%20refresh/3D_bau/banners_new/Lassi.png',
        action: {
          link: 'https://www.swiggy.com/collections/80458?collection_id=80458&tags=layout_BAU_Contextual%2Classi&type=rcv2',
          text: 'Lassi',
          type: 'WEBLINK',
        },
        entityType: 'BANNER',
        accessibility: {
          altText: 'restaurant curated for lassi',
          altTextCta: 'open',
        },
        entityId: '80458',
        frequencyCapping: {},
      },
      {
        id: '749868',
        imageId:
          'v1674029845/PC_Creative%20refresh/3D_bau/banners_new/Cakes.png',
        action: {
          link: 'https://www.swiggy.com/collections/83655?collection_id=83655&tags=layout_CCS_Cake&type=rcv2',
          text: 'Cakes',
          type: 'WEBLINK',
        },
        entityType: 'BANNER',
        accessibility: {
          altText: 'restaurant curated for cake',
          altTextCta: 'open',
        },
        entityId:
          'swiggy://collectionV2?collection_id=83655&tags=layout_CCS_Cake',
        frequencyCapping: {},
      },
      {
        id: '750131',
        imageId:
          'v1674029850/PC_Creative%20refresh/3D_bau/banners_new/Dosa.png',
        action: {
          link: 'https://www.swiggy.com/collections/80424?collection_id=80424&tags=layout_CCS_Dosa&type=rcv2',
          text: 'Dosa',
          type: 'WEBLINK',
        },
        entityType: 'BANNER',
        accessibility: {
          altText: 'restaurants curated for dosa',
          altTextCta: 'open',
        },
        entityId:
          'swiggy://collectionV2?collection_id=80424&tags=layout_CCS_Dosa',
        frequencyCapping: {},
      },
      {
        id: '750118',
        imageId:
          'v1674029845/PC_Creative%20refresh/3D_bau/banners_new/Dhokla.png',
        action: {
          link: 'https://www.swiggy.com/collections/80422?collection_id=80422&tags=layout_BAU_Contextual%2Cdhokla&type=rcv2',
          text: 'Dhokla',
          type: 'WEBLINK',
        },
        entityType: 'BANNER',
        accessibility: {
          altText: 'restaurants curated for dhokla',
          altTextCta: 'open',
        },
        entityId: '80422',
        frequencyCapping: {},
      },
      {
        id: '750206',
        imageId:
          'v1674029854/PC_Creative%20refresh/3D_bau/banners_new/Pasta.png',
        action: {
          link: 'https://www.swiggy.com/collections/80479?collection_id=80479&tags=layout_BAU_Contextual%2Cpasta%2Cads_pc_pasta&type=rcv2',
          text: 'Pasta',
          type: 'WEBLINK',
        },
        entityType: 'BANNER',
        accessibility: {
          altText: 'restaurant curated for pasta',
          altTextCta: 'open',
        },
        entityId: '80479',
        frequencyCapping: {},
      },
    ],
  };

  return (
    <div>
      <Header />
      <WhatIsOnYourMindCarousel data={imageGridCards} />
      <div className='w-9/12 mx-auto mt-12 mb-6'>
        <hr className='bg-slate-100 h-[2px]' />
      </div>
      <TopRestaurantCarousel />
      <div className='w-9/12 mx-auto mt-12 mb-6'>
        <hr className='bg-slate-100 h-[2px]' />
      </div>
      <RestaurantMenu />
    </div>
  );
};

export default App;
