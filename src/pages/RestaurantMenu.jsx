import { useState } from 'react';
import TopRestaurant from '../components/TopRestaurant';
import { GoSearch } from 'react-icons/go';

const RestaurantMenu = () => {
  const gridElements = {
    infoWithStyle: {
      '@type':
        'type.googleapis.com/swiggy.presentation.food.v2.FavouriteRestaurantInfoWithStyle',
      restaurants: [
        {
          info: {
            id: '405798',
            name: 'Chinese Wok',
            cloudinaryImageId: 'e0839ff574213e6f35b3899ebf1fc597',
            locality: 'Malleshwaram',
            areaName: 'Malleshwaram',
            costForTwo: '₹250 for two',
            cuisines: ['Chinese', 'Asian', 'Tibetan', 'Desserts'],
            avgRating: 4.3,
            parentId: '61955',
            avgRatingString: '4.3',
            totalRatingsString: '500+',
            sla: {
              deliveryTime: 56,
              lastMileTravel: 5.5,
              serviceability: 'SERVICEABLE',
              slaString: '55-60 mins',
              lastMileTravelString: '5.5 km',
              iconType: 'ICON_TYPE_EMPTY',
            },
            availability: {
              nextCloseTime: '2024-06-18 22:00:00',
              opened: true,
            },
            badges: {},
            isOpen: true,
            type: 'F',
            badgesV2: {
              entityBadges: {
                imageBased: {},
                textBased: {},
                textExtendedBadges: {},
              },
            },
            aggregatedDiscountInfoV3: {
              header: 'ITEMS',
              subHeader: 'AT ₹149',
            },
            orderabilityCommunication: {
              title: {},
              subTitle: {},
              message: {},
              customIcon: {},
            },
            differentiatedUi: {
              displayType: 'ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT',
              differentiatedUiMediaDetails: {
                mediaType: 'ADS_MEDIA_ENUM_IMAGE',
                lottie: {},
                video: {},
              },
            },
            reviewsSummary: {},
            displayType: 'RESTAURANT_DISPLAY_TYPE_DEFAULT',
            restaurantOfferPresentationInfo: {},
          },
          analytics: {
            context: 'seo-data-dea3db87-7c29-4ac8-874b-4d2a8ccdd277',
          },
          cta: {
            link: 'https://www.swiggy.com/restaurants/chinese-wok-malleshwaram-bangalore-405798',
            text: 'RESTAURANT_MENU',
            type: 'WEBLINK',
          },
          widgetId:
            'collectionV5RestaurantListWidget_SimRestoRelevance_food_seo',
        },
        {
          info: {
            id: '527591',
            name: 'Wow! Momo',
            cloudinaryImageId: '64fd45fd9f44c1737bc446e470bed666',
            locality: 'Church Street',
            areaName: 'Ashok Nagar',
            costForTwo: '₹300 for two',
            cuisines: [
              'Tibetan',
              'Healthy Food',
              'Asian',
              'Chinese',
              'Snacks',
              'Continental',
              'Desserts',
              'Beverages',
            ],
            avgRating: 4.2,
            parentId: '1776',
            avgRatingString: '4.2',
            totalRatingsString: '100+',
            sla: {
              deliveryTime: 44,
              lastMileTravel: 1.3,
              serviceability: 'SERVICEABLE',
              slaString: '40-45 mins',
              lastMileTravelString: '1.3 km',
              iconType: 'ICON_TYPE_EMPTY',
            },
            availability: {
              nextCloseTime: '2024-06-19 02:00:00',
              opened: true,
            },
            badges: {},
            isOpen: true,
            type: 'F',
            badgesV2: {
              entityBadges: {
                imageBased: {},
                textBased: {},
                textExtendedBadges: {},
              },
            },
            aggregatedDiscountInfoV3: {
              header: 'ITEMS',
              subHeader: 'AT ₹99',
            },
            orderabilityCommunication: {
              title: {},
              subTitle: {},
              message: {},
              customIcon: {},
            },
            differentiatedUi: {
              displayType: 'ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT',
              differentiatedUiMediaDetails: {
                mediaType: 'ADS_MEDIA_ENUM_IMAGE',
                lottie: {},
                video: {},
              },
            },
            reviewsSummary: {},
            displayType: 'RESTAURANT_DISPLAY_TYPE_DEFAULT',
            restaurantOfferPresentationInfo: {},
          },
          analytics: {
            context: 'seo-data-dea3db87-7c29-4ac8-874b-4d2a8ccdd277',
          },
          cta: {
            link: 'https://www.swiggy.com/restaurants/wow-momo-church-street-ashok-nagar-bangalore-527591',
            text: 'RESTAURANT_MENU',
            type: 'WEBLINK',
          },
          widgetId:
            'collectionV5RestaurantListWidget_SimRestoRelevance_food_seo',
        },
        {
          info: {
            id: '10575',
            name: 'Pizza Hut',
            cloudinaryImageId: '2b4f62d606d1b2bfba9ba9e5386fabb7',
            locality: 'Richmond Town',
            areaName: 'Shanti Nagar',
            costForTwo: '₹600 for two',
            cuisines: ['Pizzas'],
            avgRating: 4.2,
            parentId: '721',
            avgRatingString: '4.2',
            totalRatingsString: '5K+',
            sla: {
              deliveryTime: 42,
              lastMileTravel: 2.5,
              serviceability: 'SERVICEABLE',
              slaString: '40-45 mins',
              lastMileTravelString: '2.5 km',
              iconType: 'ICON_TYPE_EMPTY',
            },
            availability: {
              nextCloseTime: '2024-06-19 01:00:00',
              opened: true,
            },
            badges: {},
            isOpen: true,
            type: 'F',
            badgesV2: {
              entityBadges: {
                imageBased: {},
                textBased: {},
                textExtendedBadges: {},
              },
            },
            aggregatedDiscountInfoV3: {
              header: '50% OFF',
              subHeader: 'UPTO ₹100',
            },
            orderabilityCommunication: {
              title: {},
              subTitle: {},
              message: {},
              customIcon: {},
            },
            differentiatedUi: {
              displayType: 'ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT',
              differentiatedUiMediaDetails: {
                mediaType: 'ADS_MEDIA_ENUM_IMAGE',
                lottie: {},
                video: {},
              },
            },
            reviewsSummary: {},
            displayType: 'RESTAURANT_DISPLAY_TYPE_DEFAULT',
            restaurantOfferPresentationInfo: {},
          },
          analytics: {
            context: 'seo-data-dea3db87-7c29-4ac8-874b-4d2a8ccdd277',
          },
          cta: {
            link: 'https://www.swiggy.com/restaurants/pizza-hut-richmond-town-shanti-nagar-bangalore-10575',
            text: 'RESTAURANT_MENU',
            type: 'WEBLINK',
          },
          widgetId:
            'collectionV5RestaurantListWidget_SimRestoRelevance_food_seo',
        },
        {
          info: {
            id: '302699',
            name: 'Barbeque Nation',
            cloudinaryImageId: 'qzqeafcmayvxggjgj7rf',
            locality: 'Ulsoor',
            areaName: 'Ulsoor',
            costForTwo: '₹600 for two',
            cuisines: ['Barbecue', 'Biryani', 'Kebabs', 'Mughlai', 'Desserts'],
            avgRating: 4.2,
            parentId: '2438',
            avgRatingString: '4.2',
            totalRatingsString: '500+',
            sla: {
              deliveryTime: 46,
              lastMileTravel: 4.8,
              serviceability: 'SERVICEABLE',
              slaString: '45-50 mins',
              lastMileTravelString: '4.8 km',
              iconType: 'ICON_TYPE_EMPTY',
            },
            availability: {
              nextCloseTime: '2024-06-18 23:30:00',
              opened: true,
            },
            badges: {},
            isOpen: true,
            type: 'F',
            badgesV2: {
              entityBadges: {
                imageBased: {},
                textBased: {},
                textExtendedBadges: {},
              },
            },
            aggregatedDiscountInfoV3: {
              header: '50% OFF',
              subHeader: 'UPTO ₹100',
            },
            orderabilityCommunication: {
              title: {},
              subTitle: {},
              message: {},
              customIcon: {},
            },
            differentiatedUi: {
              displayType: 'ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT',
              differentiatedUiMediaDetails: {
                mediaType: 'ADS_MEDIA_ENUM_IMAGE',
                lottie: {},
                video: {},
              },
            },
            reviewsSummary: {},
            displayType: 'RESTAURANT_DISPLAY_TYPE_DEFAULT',
            restaurantOfferPresentationInfo: {},
          },
          analytics: {
            context: 'seo-data-dea3db87-7c29-4ac8-874b-4d2a8ccdd277',
          },
          cta: {
            link: 'https://www.swiggy.com/restaurants/barbeque-nation-ulsoor-bangalore-302699',
            text: 'RESTAURANT_MENU',
            type: 'WEBLINK',
          },
          widgetId:
            'collectionV5RestaurantListWidget_SimRestoRelevance_food_seo',
        },
        {
          info: {
            id: '5247',
            name: 'Corner House Ice Cream',
            cloudinaryImageId: 'o2rwujynxk8vhkbtdtvb',
            locality: 'Residency Road',
            areaName: 'Ashok Nagar',
            costForTwo: '₹250 for two',
            cuisines: ['Ice Cream', 'Desserts'],
            avgRating: 4.7,
            parentId: '65254',
            avgRatingString: '4.7',
            totalRatingsString: '10K+',
            sla: {
              deliveryTime: 31,
              lastMileTravel: 2,
              serviceability: 'SERVICEABLE',
              slaString: '30-35 mins',
              lastMileTravelString: '2.0 km',
              iconType: 'ICON_TYPE_EMPTY',
            },
            availability: {
              nextCloseTime: '2024-06-18 23:00:00',
              opened: true,
            },
            badges: {
              imageBadges: [
                {
                  imageId: 'Rxawards/_CATEGORY-Desserts.png',
                  description: 'Delivery!',
                },
                {
                  imageId: 'Rxawards/_CATEGORY-Ice-creams.png',
                  description: 'Delivery!',
                },
              ],
            },
            isOpen: true,
            aggregatedDiscountInfoV2: {},
            type: 'D',
            badgesV2: {
              entityBadges: {
                imageBased: {
                  badgeObject: [
                    {
                      attributes: {
                        description: 'Delivery!',
                        imageId: 'Rxawards/_CATEGORY-Desserts.png',
                      },
                    },
                    {
                      attributes: {
                        description: 'Delivery!',
                        imageId: 'Rxawards/_CATEGORY-Ice-creams.png',
                      },
                    },
                  ],
                },
                textBased: {},
                textExtendedBadges: {},
              },
            },
            orderabilityCommunication: {
              title: {},
              subTitle: {},
              message: {},
              customIcon: {},
            },
            differentiatedUi: {
              displayType: 'ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT',
              differentiatedUiMediaDetails: {
                mediaType: 'ADS_MEDIA_ENUM_IMAGE',
                lottie: {},
                video: {},
              },
            },
            reviewsSummary: {},
            displayType: 'RESTAURANT_DISPLAY_TYPE_DEFAULT',
            restaurantOfferPresentationInfo: {},
          },
          analytics: {
            context: 'seo-data-dea3db87-7c29-4ac8-874b-4d2a8ccdd277',
          },
          cta: {
            link: 'https://www.swiggy.com/restaurants/corner-house-ice-cream-residency-road-ashok-nagar-bangalore-5247',
            text: 'RESTAURANT_MENU',
            type: 'WEBLINK',
          },
          widgetId:
            'collectionV5RestaurantListWidget_SimRestoRelevance_food_seo',
        },
        {
          info: {
            id: '750396',
            name: 'Daily Kitchen - Homely Meals',
            cloudinaryImageId:
              'RX_THUMBNAIL/IMAGES/VENDOR/2024/5/19/741d7d41-1341-4358-b6e0-cc22b8e82f9a_750396.JPG',
            locality: 'Lakshmi Road',
            areaName: 'Langford Road',
            costForTwo: '₹400 for two',
            cuisines: ['Home Food', 'Indian', 'North Indian', 'Thalis'],
            avgRating: 4.4,
            parentId: '444382',
            avgRatingString: '4.4',
            totalRatingsString: '100+',
            sla: {
              deliveryTime: 25,
              lastMileTravel: 2.5,
              serviceability: 'SERVICEABLE',
              slaString: '15-25 mins',
              lastMileTravelString: '2.5 km',
              iconType: 'ICON_TYPE_EMPTY',
            },
            availability: {
              nextCloseTime: '2024-06-19 02:00:00',
              opened: true,
            },
            badges: {
              textExtendedBadges: [
                {
                  iconId: 'guiltfree/GF_Logo_android_3x',
                  shortDescription: 'options available',
                  fontColor: '#7E808C',
                },
              ],
            },
            isOpen: true,
            type: 'F',
            badgesV2: {
              entityBadges: {
                imageBased: {},
                textBased: {},
                textExtendedBadges: {
                  badgeObject: [
                    {
                      attributes: {
                        description: '',
                        fontColor: '#7E808C',
                        iconId: 'guiltfree/GF_Logo_android_3x',
                        shortDescription: 'options available',
                      },
                    },
                  ],
                },
              },
            },
            aggregatedDiscountInfoV3: {
              header: '50% OFF',
              subHeader: 'UPTO ₹100',
            },
            orderabilityCommunication: {
              title: {},
              subTitle: {},
              message: {},
              customIcon: {},
            },
            differentiatedUi: {
              displayType: 'ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT',
              differentiatedUiMediaDetails: {
                mediaType: 'ADS_MEDIA_ENUM_IMAGE',
                lottie: {},
                video: {},
              },
            },
            reviewsSummary: {},
            displayType: 'RESTAURANT_DISPLAY_TYPE_DEFAULT',
            restaurantOfferPresentationInfo: {},
          },
          analytics: {
            context: 'seo-data-dea3db87-7c29-4ac8-874b-4d2a8ccdd277',
          },
          cta: {
            link: 'https://www.swiggy.com/restaurants/daily-kitchen-homely-meals-lakshmi-road-langford-road-bangalore-750396',
            text: 'RESTAURANT_MENU',
            type: 'WEBLINK',
          },
          widgetId:
            'collectionV5RestaurantListWidget_SimRestoRelevance_food_seo',
        },
        {
          info: {
            id: '622202',
            name: 'MOJO Pizza - 2X Toppings',
            cloudinaryImageId:
              'RX_THUMBNAIL/IMAGES/VENDOR/2024/5/20/349e8d46-3138-4b19-96b2-df400a77e285_622202.JPG',
            locality: 'Langford Road',
            areaName: 'Shantinagar',
            costForTwo: '₹250 for two',
            cuisines: ['Pizzas', 'Italian', 'Fast Food', 'Desserts'],
            avgRating: 4.5,
            parentId: '11329',
            avgRatingString: '4.5',
            totalRatingsString: '100+',
            sla: {
              deliveryTime: 25,
              lastMileTravel: 2.5,
              serviceability: 'SERVICEABLE',
              slaString: '15-25 mins',
              lastMileTravelString: '2.5 km',
              iconType: 'ICON_TYPE_EMPTY',
            },
            availability: {
              nextCloseTime: '2024-06-19 02:00:00',
              opened: true,
            },
            badges: {
              textExtendedBadges: [
                {
                  iconId: 'guiltfree/GF_Logo_android_3x',
                  shortDescription: 'options available',
                  fontColor: '#7E808C',
                },
              ],
            },
            isOpen: true,
            type: 'F',
            badgesV2: {
              entityBadges: {
                imageBased: {},
                textBased: {},
                textExtendedBadges: {
                  badgeObject: [
                    {
                      attributes: {
                        description: '',
                        fontColor: '#7E808C',
                        iconId: 'guiltfree/GF_Logo_android_3x',
                        shortDescription: 'options available',
                      },
                    },
                  ],
                },
              },
            },
            aggregatedDiscountInfoV3: {
              header: '50% OFF',
              subHeader: 'UPTO ₹100',
            },
            orderabilityCommunication: {
              title: {},
              subTitle: {},
              message: {},
              customIcon: {},
            },
            differentiatedUi: {
              displayType: 'ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT',
              differentiatedUiMediaDetails: {
                mediaType: 'ADS_MEDIA_ENUM_IMAGE',
                lottie: {},
                video: {},
              },
            },
            reviewsSummary: {},
            displayType: 'RESTAURANT_DISPLAY_TYPE_DEFAULT',
            restaurantOfferPresentationInfo: {},
          },
          analytics: {
            context: 'seo-data-dea3db87-7c29-4ac8-874b-4d2a8ccdd277',
          },
          cta: {
            link: 'https://www.swiggy.com/restaurants/mojo-pizza-2x-toppings-langford-road-shantinagar-bangalore-622202',
            text: 'RESTAURANT_MENU',
            type: 'WEBLINK',
          },
          widgetId:
            'collectionV5RestaurantListWidget_SimRestoRelevance_food_seo',
        },
        {
          info: {
            id: '667962',
            name: 'Paris Panini - Gourmet Sandwiches & Wraps',
            cloudinaryImageId: '33101e2fff3a071cbd8b85e73c0d4f45',
            locality: 'Church Street',
            areaName: 'Central Bangalore',
            costForTwo: '₹500 for two',
            cuisines: [
              'Continental',
              'Pastas',
              'Salads',
              'Snacks',
              'Desserts',
              'Fast Food',
              'French',
            ],
            avgRating: 4.6,
            parentId: '21019',
            avgRatingString: '4.6',
            totalRatingsString: '1K+',
            sla: {
              deliveryTime: 35,
              lastMileTravel: 1.5,
              serviceability: 'SERVICEABLE',
              slaString: '35-40 mins',
              lastMileTravelString: '1.5 km',
              iconType: 'ICON_TYPE_EMPTY',
            },
            availability: {
              nextCloseTime: '2024-06-18 23:00:00',
              opened: true,
            },
            badges: {
              imageBadges: [
                {
                  imageId: 'Rxawards/_CATEGORY-Sandwiches.png',
                  description: 'Delivery!',
                },
                {
                  imageId: 'newg.png',
                  description: 'Gourmet',
                },
              ],
              textExtendedBadges: [
                {
                  iconId: 'guiltfree/GF_Logo_android_3x',
                  shortDescription: 'options available',
                  fontColor: '#7E808C',
                },
              ],
            },
            isOpen: true,
            type: 'F',
            badgesV2: {
              entityBadges: {
                imageBased: {
                  badgeObject: [
                    {
                      attributes: {
                        description: 'Delivery!',
                        imageId: 'Rxawards/_CATEGORY-Sandwiches.png',
                      },
                    },
                    {
                      attributes: {
                        description: 'Gourmet',
                        imageId: 'newg.png',
                      },
                    },
                  ],
                },
                textBased: {},
                textExtendedBadges: {
                  badgeObject: [
                    {
                      attributes: {
                        description: '',
                        fontColor: '#7E808C',
                        iconId: 'guiltfree/GF_Logo_android_3x',
                        shortDescription: 'options available',
                      },
                    },
                  ],
                },
              },
            },
            aggregatedDiscountInfoV3: {
              header: '60% OFF',
              subHeader: 'UPTO ₹120',
            },
            orderabilityCommunication: {
              title: {},
              subTitle: {},
              message: {},
              customIcon: {},
            },
            differentiatedUi: {
              displayType: 'ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT',
              differentiatedUiMediaDetails: {
                mediaType: 'ADS_MEDIA_ENUM_IMAGE',
                lottie: {},
                video: {},
              },
            },
            reviewsSummary: {},
            displayType: 'RESTAURANT_DISPLAY_TYPE_DEFAULT',
            restaurantOfferPresentationInfo: {},
          },
          analytics: {
            context: 'seo-data-dea3db87-7c29-4ac8-874b-4d2a8ccdd277',
          },
          cta: {
            link: 'https://www.swiggy.com/restaurants/paris-panini-gourmet-sandwiches-and-wraps-church-street-central-bangalore-bangalore-667962',
            text: 'RESTAURANT_MENU',
            type: 'WEBLINK',
          },
          widgetId:
            'collectionV5RestaurantListWidget_SimRestoRelevance_food_seo',
        },
      ],
      theme: 'SeoRestaurantListingGridWidget',
    },
  };
  const [listOfResto, setListOfResto] = useState(
    gridElements?.infoWithStyle?.restaurants
  );
  return (
    <div className='w-3/4 mx-auto'>
      <div className='flex justify-between p-4'>
        <h1 className='font-bold text-2xl'>
          Restaurants with online food delivery in Bangalore
        </h1>
      </div>
      <div className='w-full flex items-center gap-4 flex-col mb-10 mt-3'>
        <div className=''>
          <button
            onClick={() => {
              const filteredResto = listOfResto?.filter(
                (l) =>
                  l?.info?.avgRating > 4.2 || l?.info?.avgRatingString > 4.2
              );
              console.log(filteredResto);
              setListOfResto(filteredResto);
            }}
            className='border py-2 px-4 rounded bg-'
          >
            TOP RATED RESTO
          </button>
        </div>
        <div className='w-full flex justify-center items-center'>
          <input
            type='text'
            placeholder='Search for restaurants and foods'
            className=' w-3/4 px-3 py-2 outline-none border-l border-y rounded-s'
          />
          <button className='px-5 py-[7.3px] border-r border-y rounded-e'>
            <GoSearch size={25} />
          </button>
        </div>
      </div>
      <div className='flex justify-center gap-10 pl-4 flex-wrap'>
        {listOfResto?.map((r) => (
          <TopRestaurant key={r?.info?.id} r={r} sty={'100'} />
        ))}
      </div>
    </div>
  );
};

export default RestaurantMenu;
