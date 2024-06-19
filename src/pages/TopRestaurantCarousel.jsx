import { GrFormNextLink, GrFormPreviousLink } from 'react-icons/gr';
import useCarousel from '../hooks/useCarousel';
import { useRef } from 'react';
import TopRestaurant from '../components/TopRestaurant';

const TopRestaurantCarousel = () => {
  const carouselRef = useRef(null);
  const { nextDisable, nextSlide, prevDisable, prevSlide } =
    useCarousel(carouselRef);

  // const data = [
  //   'https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/tfbnpd65irvhp9iwhbtk',
  //   'https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/RX_THUMBNAIL/IMAGES/VENDOR/2024/4/17/dfbcecfc-b380-4648-930a-b9b56b21e781_435405.JPG',
  //   'https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/RX_THUMBNAIL/IMAGES/VENDOR/2024/4/17/dfbcecfc-b380-4648-930a-b9b56b21e781_435405.JPG',
  //   'https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/RX_THUMBNAIL/IMAGES/VENDOR/2024/4/17/dfbcecfc-b380-4648-930a-b9b56b21e781_435405.JPG',
  //   'https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/RX_THUMBNAIL/IMAGES/VENDOR/2024/4/17/dfbcecfc-b380-4648-930a-b9b56b21e781_435405.JPG',
  //   'https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/RX_THUMBNAIL/IMAGES/VENDOR/2024/4/17/dfbcecfc-b380-4648-930a-b9b56b21e781_435405.JPG',
  //   'https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/RX_THUMBNAIL/IMAGES/VENDOR/2024/4/17/dfbcecfc-b380-4648-930a-b9b56b21e781_435405.JPG',
  //   'https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/RX_THUMBNAIL/IMAGES/VENDOR/2024/4/17/dfbcecfc-b380-4648-930a-b9b56b21e781_435405.JPG',
  //   'https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/RX_THUMBNAIL/IMAGES/VENDOR/2024/4/17/dfbcecfc-b380-4648-930a-b9b56b21e781_435405.JPG',
  //   'https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/RX_THUMBNAIL/IMAGES/VENDOR/2024/4/17/dfbcecfc-b380-4648-930a-b9b56b21e781_435405.JPG',
  // ];

  const gridElements = {
    infoWithStyle: {
      '@type':
        'type.googleapis.com/swiggy.presentation.food.v2.FavouriteRestaurantInfoWithStyle',
      restaurants: [
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
          analytics: {},
          cta: {
            link: 'https://www.swiggy.com/restaurants/pizza-hut-richmond-town-shanti-nagar-bangalore-10575',
            type: 'WEBLINK',
          },
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
          analytics: {},
          cta: {
            link: 'https://www.swiggy.com/restaurants/mojo-pizza-2x-toppings-langford-road-shantinagar-bangalore-622202',
            type: 'WEBLINK',
          },
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
          analytics: {},
          cta: {
            link: 'https://www.swiggy.com/restaurants/daily-kitchen-homely-meals-lakshmi-road-langford-road-bangalore-750396',
            type: 'WEBLINK',
          },
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
          analytics: {},
          cta: {
            link: 'https://www.swiggy.com/restaurants/paris-panini-gourmet-sandwiches-and-wraps-church-street-central-bangalore-bangalore-667962',
            type: 'WEBLINK',
          },
        },
        {
          info: {
            id: '43836',
            name: "McDonald's",
            cloudinaryImageId:
              'RX_THUMBNAIL/IMAGES/VENDOR/2024/4/1/fe11ced6-89a3-4080-8610-3c743a3bb3f0_43836.jpg',
            locality: 'MG Road',
            areaName: 'Ashok Nagar',
            costForTwo: '₹400 for two',
            cuisines: ['Burgers', 'Beverages', 'Cafe', 'Desserts'],
            avgRating: 4.3,
            parentId: '630',
            avgRatingString: '4.3',
            totalRatingsString: '10K+',
            sla: {
              deliveryTime: 32,
              lastMileTravel: 0.7,
              serviceability: 'SERVICEABLE',
              slaString: '30-35 mins',
              lastMileTravelString: '0.7 km',
              iconType: 'ICON_TYPE_EMPTY',
            },
            availability: {
              nextCloseTime: '2024-06-19 02:45:00',
              opened: true,
            },
            badges: {
              imageBadges: [
                {
                  imageId: 'Rxawards/_CATEGORY-Burger.png',
                  description: 'Delivery!',
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
                        imageId: 'Rxawards/_CATEGORY-Burger.png',
                      },
                    },
                  ],
                },
                textBased: {},
                textExtendedBadges: {},
              },
            },
            aggregatedDiscountInfoV3: {
              header: 'ITEMS',
              subHeader: 'AT ₹199',
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
          analytics: {},
          cta: {
            link: 'https://www.swiggy.com/restaurants/mcdonalds-mg-road-ashok-nagar-bangalore-43836',
            type: 'WEBLINK',
          },
        },
        {
          info: {
            id: '588619',
            name: 'KFC',
            cloudinaryImageId:
              'RX_THUMBNAIL/IMAGES/VENDOR/2024/4/17/4a509cf1-ea35-497b-9813-59145c5007c9_588619.JPG',
            locality: 'Brigade Road',
            areaName: 'Central Bangalore',
            costForTwo: '₹400 for two',
            cuisines: ['Burgers', 'Fast Food', 'Rolls & Wraps'],
            avgRating: 4.2,
            parentId: '547',
            avgRatingString: '4.2',
            totalRatingsString: '1K+',
            sla: {
              deliveryTime: 35,
              lastMileTravel: 2.4,
              serviceability: 'SERVICEABLE',
              slaString: '35-40 mins',
              lastMileTravelString: '2.4 km',
              iconType: 'ICON_TYPE_EMPTY',
            },
            availability: {
              nextCloseTime: '2024-06-19 01:00:00',
              opened: true,
            },
            badges: {},
            isOpen: true,
            aggregatedDiscountInfoV2: {},
            type: 'F',
            badgesV2: {
              entityBadges: {
                imageBased: {},
                textBased: {},
                textExtendedBadges: {},
              },
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
          analytics: {},
          cta: {
            link: 'https://www.swiggy.com/restaurants/kfc-brigade-road-central-bangalore-bangalore-588619',
            type: 'WEBLINK',
          },
        },
        {
          info: {
            id: '23847',
            name: "Domino's Pizza",
            cloudinaryImageId: 'd0450ce1a6ba19ea60cd724471ed54a8',
            locality: 'Rest House Road',
            areaName: 'Brigade Road',
            costForTwo: '₹400 for two',
            cuisines: ['Pizzas', 'Italian', 'Pastas', 'Desserts'],
            avgRating: 4.5,
            parentId: '2456',
            avgRatingString: '4.5',
            totalRatingsString: '5K+',
            sla: {
              deliveryTime: 25,
              lastMileTravel: 1.7,
              serviceability: 'SERVICEABLE',
              slaString: '20-25 mins',
              lastMileTravelString: '1.7 km',
              iconType: 'ICON_TYPE_EMPTY',
            },
            availability: {
              nextCloseTime: '2024-06-18 22:59:00',
              opened: true,
            },
            badges: {
              imageBadges: [
                {
                  imageId: 'Rxawards/_CATEGORY-Pizza.png',
                  description: 'Delivery!',
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
                        imageId: 'Rxawards/_CATEGORY-Pizza.png',
                      },
                    },
                  ],
                },
                textBased: {},
                textExtendedBadges: {},
              },
            },
            aggregatedDiscountInfoV3: {
              header: '₹150 OFF',
              subHeader: 'ABOVE ₹299',
              discountTag: 'FLAT DEAL',
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
          analytics: {},
          cta: {
            link: 'https://www.swiggy.com/restaurants/dominos-pizza-rest-house-road-brigade-road-bangalore-23847',
            type: 'WEBLINK',
          },
        },
        {
          info: {
            id: '342643',
            name: 'The Pizza Bakery - Wood Fired Sourdough',
            cloudinaryImageId: '0335dd45be555d0a4187255e57d2ca88',
            locality: 'Church Street',
            areaName: 'Central Bangalore',
            costForTwo: '₹700 for two',
            cuisines: [
              'Pizzas',
              'Pastas',
              'Italian',
              'Desserts',
              'Continental',
            ],
            avgRating: 4.6,
            parentId: '522292',
            avgRatingString: '4.6',
            totalRatingsString: '5K+',
            sla: {
              deliveryTime: 34,
              lastMileTravel: 1.3,
              serviceability: 'SERVICEABLE',
              slaString: '30-35 mins',
              lastMileTravelString: '1.3 km',
              iconType: 'ICON_TYPE_EMPTY',
            },
            availability: {
              nextCloseTime: '2024-06-18 23:00:00',
              opened: true,
            },
            badges: {
              imageBadges: [
                {
                  imageId: 'Rxawards/_CATEGORY-Pizza.png',
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
                        imageId: 'Rxawards/_CATEGORY-Pizza.png',
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
          analytics: {},
          cta: {
            link: 'https://www.swiggy.com/restaurants/the-pizza-bakery-wood-fired-sourdough-church-street-central-bangalore-bangalore-342643',
            type: 'WEBLINK',
          },
        },
        {
          info: {
            id: '570511',
            name: 'Bakingo',
            cloudinaryImageId:
              'RX_THUMBNAIL/IMAGES/VENDOR/2024/6/18/0886cd59-f21e-41ac-b258-5d4d092f8888_570511.JPG',
            locality: 'Puhlong X-road',
            areaName: 'Vasanth Nagar',
            costForTwo: '₹299 for two',
            cuisines: ['Bakery', 'Desserts', 'Beverages', 'Snacks'],
            avgRating: 4.6,
            parentId: '3818',
            avgRatingString: '4.6',
            totalRatingsString: '1K+',
            sla: {
              deliveryTime: 31,
              lastMileTravel: 3.8,
              serviceability: 'SERVICEABLE',
              slaString: '30-35 mins',
              lastMileTravelString: '3.8 km',
              iconType: 'ICON_TYPE_EMPTY',
            },
            availability: {
              nextCloseTime: '2024-06-19 01:00:00',
              opened: true,
            },
            badges: {
              textExtendedBadges: [
                {
                  iconId: 'v1705582451/Ratnesh_Badges/Perfect_cake.png',
                  shortDescription: 'Perfect cake delivery',
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
                        iconId: 'v1705582451/Ratnesh_Badges/Perfect_cake.png',
                        shortDescription: 'Perfect cake delivery',
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
          analytics: {},
          cta: {
            link: 'https://www.swiggy.com/restaurants/bakingo-puhlong-x-road-vasanth-nagar-bangalore-570511',
            type: 'WEBLINK',
          },
        },
        {
          info: {
            id: '3369',
            name: 'Truffles',
            cloudinaryImageId: 'cd832b6167eb9f88aeb1ccdebf38d942',
            locality: 'St. Marks Road',
            areaName: 'St. Marks Road',
            costForTwo: '₹450 for two',
            cuisines: ['American', 'Desserts', 'Continental', 'Italian'],
            avgRating: 4.6,
            parentId: '218065',
            avgRatingString: '4.6',
            totalRatingsString: '10K+',
            sla: {
              deliveryTime: 35,
              lastMileTravel: 0.9,
              serviceability: 'SERVICEABLE',
              slaString: '30-35 mins',
              lastMileTravelString: '0.9 km',
              iconType: 'ICON_TYPE_EMPTY',
            },
            availability: {
              nextCloseTime: '2024-06-19 00:00:00',
              opened: true,
            },
            badges: {
              imageBadges: [
                {
                  imageId: 'Rxawards/_CATEGORY-Burger.png',
                  description: 'Delivery!',
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
                        imageId: 'Rxawards/_CATEGORY-Burger.png',
                      },
                    },
                  ],
                },
                textBased: {},
                textExtendedBadges: {},
              },
            },
            aggregatedDiscountInfoV3: {
              header: '40% OFF',
              subHeader: 'UPTO ₹80',
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
          analytics: {},
          cta: {
            link: 'https://www.swiggy.com/restaurants/truffles-st-marks-road-bangalore-3369',
            type: 'WEBLINK',
          },
        },
        {
          info: {
            id: '503002',
            name: 'NH1 Bowls - Highway To North',
            cloudinaryImageId: '94654fdf308764cd0faf83dba35bcdc3',
            locality: 'Lakshmi Road',
            areaName: 'Shanti Nagar',
            costForTwo: '₹250 for two',
            cuisines: ['North Indian', 'Punjabi', 'Home Food'],
            avgRating: 4.6,
            parentId: '22452',
            avgRatingString: '4.6',
            totalRatingsString: '100+',
            sla: {
              deliveryTime: 20,
              lastMileTravel: 2.5,
              serviceability: 'SERVICEABLE',
              slaString: '10-20 mins',
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
          analytics: {},
          cta: {
            link: 'https://www.swiggy.com/restaurants/nh1-bowls-highway-to-north-lakshmi-road-shanti-nagar-bangalore-503002',
            type: 'WEBLINK',
          },
        },
        {
          info: {
            id: '681612',
            name: 'LeanCrust Pizza- ThinCrust Experts',
            cloudinaryImageId:
              'RX_THUMBNAIL/IMAGES/VENDOR/2024/5/23/e5e23da8-f5d8-4782-bbe2-a8b28f64cad0_681612.JPG',
            locality: 'Lakshmi Road',
            areaName: 'Shanti Nagar',
            costForTwo: '₹300 for two',
            cuisines: ['Pizzas', 'Italian', 'Desserts'],
            avgRating: 4.5,
            parentId: '11216',
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
          analytics: {},
          cta: {
            link: 'https://www.swiggy.com/restaurants/leancrust-pizza-thincrust-experts-lakshmi-road-shanti-nagar-bangalore-681612',
            type: 'WEBLINK',
          },
        },
        {
          info: {
            id: '688434',
            name: 'Kwality Walls Frozen Dessert and Ice Cream Shop',
            cloudinaryImageId:
              'RX_THUMBNAIL/IMAGES/VENDOR/2024/6/13/dfea08dc-9227-4ce8-addb-72012b13f58d_688434.JPG',
            locality: 'WEST PORTION',
            areaName: 'Shanthinagar',
            costForTwo: '₹200 for two',
            cuisines: ['Desserts', 'Ice Cream', 'Ice Cream Cakes'],
            avgRating: 4.5,
            veg: true,
            parentId: '582',
            avgRatingString: '4.5',
            totalRatingsString: '50+',
            sla: {
              deliveryTime: 33,
              lastMileTravel: 2.1,
              serviceability: 'SERVICEABLE',
              slaString: '30-35 mins',
              lastMileTravelString: '2.1 km',
              iconType: 'ICON_TYPE_EMPTY',
            },
            availability: {
              nextCloseTime: '2024-06-18 23:59:00',
              opened: true,
            },
            badges: {
              imageBadges: [
                {
                  imageId: 'v1695133679/badges/Pure_Veg111.png',
                  description: 'pureveg',
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
                        description: 'pureveg',
                        imageId: 'v1695133679/badges/Pure_Veg111.png',
                      },
                    },
                  ],
                },
                textBased: {},
                textExtendedBadges: {},
              },
            },
            aggregatedDiscountInfoV3: {
              header: '50% OFF',
              subHeader: 'UPTO ₹100',
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
          analytics: {},
          cta: {
            link: 'https://www.swiggy.com/restaurants/kwality-walls-frozen-dessert-and-ice-cream-shop-west-portion-shanthinagar-bangalore-688434',
            type: 'WEBLINK',
          },
        },
        {
          info: {
            id: '86443',
            name: 'NIC Ice Creams',
            cloudinaryImageId: '18d8b8fb6bac8063a6fa886e20148110',
            locality: 'Pulikeshi Nagar',
            areaName: 'Frazer Town',
            costForTwo: '₹120 for two',
            cuisines: ['Ice Cream', 'Desserts'],
            avgRating: 4.7,
            veg: true,
            parentId: '6249',
            avgRatingString: '4.7',
            totalRatingsString: '5K+',
            sla: {
              deliveryTime: 36,
              lastMileTravel: 4.5,
              serviceability: 'SERVICEABLE',
              slaString: '35-40 mins',
              lastMileTravelString: '4.5 km',
              iconType: 'ICON_TYPE_EMPTY',
            },
            availability: {
              nextCloseTime: '2024-06-18 22:00:00',
              opened: true,
            },
            badges: {
              imageBadges: [
                {
                  imageId: 'v1695133679/badges/Pure_Veg111.png',
                  description: 'pureveg',
                },
              ],
              textExtendedBadges: [
                {
                  iconId: 'Ratnesh_Badges/test2.png',
                  shortDescription: 'Perfect ice cream delivery',
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
                        description: 'pureveg',
                        imageId: 'v1695133679/badges/Pure_Veg111.png',
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
                        iconId: 'Ratnesh_Badges/test2.png',
                        shortDescription: 'Perfect ice cream delivery',
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
          analytics: {},
          cta: {
            link: 'https://www.swiggy.com/restaurants/nic-ice-creams-pulikeshi-nagar-frazer-town-bangalore-86443',
            type: 'WEBLINK',
          },
        },
        {
          info: {
            id: '53503',
            name: 'Brik Oven - Original Sourdough Pizzas',
            cloudinaryImageId:
              'RX_THUMBNAIL/IMAGES/VENDOR/2024/5/21/1999d787-3984-4db9-b817-55ffc0c3b0e8_53503.jpg',
            locality: 'Church Street',
            areaName: 'Church Street',
            costForTwo: '₹700 for two',
            cuisines: ['Italian', 'Pizzas', 'Desserts', 'Beverages'],
            avgRating: 4.3,
            parentId: '488952',
            avgRatingString: '4.3',
            totalRatingsString: '10K+',
            sla: {
              deliveryTime: 33,
              lastMileTravel: 1.6,
              serviceability: 'SERVICEABLE',
              slaString: '30-35 mins',
              lastMileTravelString: '1.6 km',
              iconType: 'ICON_TYPE_EMPTY',
            },
            availability: {
              nextCloseTime: '2024-06-19 01:00:00',
              opened: true,
            },
            badges: {
              imageBadges: [
                {
                  imageId: 'Rxawards/_CATEGORY-Pizza.png',
                  description: 'Delivery!',
                },
                {
                  imageId: 'newg.png',
                  description: 'Gourmet',
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
                        imageId: 'Rxawards/_CATEGORY-Pizza.png',
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
                textExtendedBadges: {},
              },
            },
            aggregatedDiscountInfoV3: {
              header: '60% OFF',
              subHeader: 'UPTO ₹120',
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
          analytics: {},
          cta: {
            link: 'https://www.swiggy.com/restaurants/brik-oven-original-sourdough-pizzas-church-street-bangalore-53503',
            type: 'WEBLINK',
          },
        },
        {
          info: {
            id: '146304',
            name: 'Hyderabad Biryaani House',
            cloudinaryImageId: 'taavokxehqfaugbzzhzk',
            locality: 'Victoria Road',
            areaName: 'Ashok Nagar',
            costForTwo: '₹499 for two',
            cuisines: ['Indian'],
            avgRating: 4.3,
            parentId: '2403',
            avgRatingString: '4.3',
            totalRatingsString: '5K+',
            sla: {
              deliveryTime: 31,
              lastMileTravel: 2.8,
              serviceability: 'SERVICEABLE',
              slaString: '30-35 mins',
              lastMileTravelString: '2.8 km',
              iconType: 'ICON_TYPE_EMPTY',
            },
            availability: {
              nextCloseTime: '2024-06-18 23:00:00',
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
              header: '10% OFF',
              subHeader: 'ABOVE ₹800',
              discountTag: 'FLAT DEAL',
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
          analytics: {},
          cta: {
            link: 'https://www.swiggy.com/restaurants/hyderabad-biryaani-house-victoria-road-ashok-nagar-bangalore-146304',
            type: 'WEBLINK',
          },
        },
        {
          info: {
            id: '737841',
            name: 'Amadora Gourmet Ice Cream',
            cloudinaryImageId:
              'RX_THUMBNAIL/IMAGES/VENDOR/2024/4/18/a0d99957-9f36-43ce-bf8e-01721cbd97af_737841.jpg',
            locality: 'u b city',
            areaName: 'Vittal Mallaya',
            costForTwo: '₹300 for two',
            cuisines: ['Ice Cream', 'Desserts', 'Cakes and Pastries'],
            avgRating: 4.8,
            parentId: '30800',
            avgRatingString: '4.8',
            totalRatingsString: '100+',
            sla: {
              deliveryTime: 35,
              lastMileTravel: 0.5,
              serviceability: 'SERVICEABLE',
              slaString: '30-35 mins',
              lastMileTravelString: '0.5 km',
              iconType: 'ICON_TYPE_EMPTY',
            },
            availability: {
              nextCloseTime: '2024-06-18 23:59:00',
              opened: true,
            },
            badges: {
              imageBadges: [
                {
                  imageId:
                    'v1690360529/Ratnesh_Badges/Only_on_swiggy_badge_4x.png',
                  description: 'OnlyOnSwiggy',
                },
                {
                  imageId: 'newg.png',
                  description: 'Gourmet',
                },
              ],
            },
            isOpen: true,
            aggregatedDiscountInfoV2: {},
            type: 'F',
            badgesV2: {
              entityBadges: {
                imageBased: {
                  badgeObject: [
                    {
                      attributes: {
                        description: 'OnlyOnSwiggy',
                        imageId:
                          'v1690360529/Ratnesh_Badges/Only_on_swiggy_badge_4x.png',
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
                textExtendedBadges: {},
              },
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
          analytics: {},
          cta: {
            link: 'https://www.swiggy.com/restaurants/amadora-gourmet-ice-cream-u-b-city-vittal-mallaya-bangalore-737841',
            type: 'WEBLINK',
          },
        },
        {
          info: {
            id: '502999',
            name: 'BOX8 - Desi Meals',
            cloudinaryImageId: '69a061b7e0f951cef2b4947946f94ec6',
            locality: 'Lakshmi Road',
            areaName: 'Shanti Nagar',
            costForTwo: '₹250 for two',
            cuisines: ['North Indian', 'Biryani', 'Thalis', 'Home Food'],
            avgRating: 4.5,
            parentId: '10655',
            avgRatingString: '4.5',
            totalRatingsString: '1K+',
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
              header: 'ITEMS',
              subHeader: 'AT ₹149',
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
          analytics: {},
          cta: {
            link: 'https://www.swiggy.com/restaurants/box8-desi-meals-lakshmi-road-shanti-nagar-bangalore-502999',
            type: 'WEBLINK',
          },
        },
        {
          info: {
            id: '66590',
            name: 'Havmor Havfunn Ice Cream',
            cloudinaryImageId: '49845b494b1e637209b7bd1c7ca184ad',
            locality: 'Vanivilas road',
            areaName: 'Basavanagudi',
            costForTwo: '₹400 for two',
            cuisines: ['Ice Cream', 'Ice Cream Cakes', 'Desserts', 'Beverages'],
            avgRating: 4.6,
            veg: true,
            parentId: '94570',
            avgRatingString: '4.6',
            totalRatingsString: '500+',
            sla: {
              deliveryTime: 36,
              lastMileTravel: 3.9,
              serviceability: 'SERVICEABLE',
              slaString: '35-40 mins',
              lastMileTravelString: '3.9 km',
              iconType: 'ICON_TYPE_EMPTY',
            },
            availability: {
              nextCloseTime: '2024-06-18 23:30:00',
              opened: true,
            },
            badges: {
              textExtendedBadges: [
                {
                  iconId: 'v1705582451/Ratnesh_Badges/Perfect_cake.png',
                  shortDescription: 'Perfect cake delivery',
                  fontColor: '#7E808C',
                },
              ],
            },
            isOpen: true,
            aggregatedDiscountInfoV2: {},
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
                        iconId: 'v1705582451/Ratnesh_Badges/Perfect_cake.png',
                        shortDescription: 'Perfect cake delivery',
                      },
                    },
                  ],
                },
              },
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
          analytics: {},
          cta: {
            link: 'https://www.swiggy.com/restaurants/havmor-havfunn-ice-cream-vanivilas-road-basavanagudi-bangalore-66590',
            type: 'WEBLINK',
          },
        },
        {
          info: {
            id: '643832',
            name: 'WeFit - Protein Bowls, Salads & Sandwiches',
            cloudinaryImageId:
              'RX_THUMBNAIL/IMAGES/VENDOR/2024/5/23/d32dda02-869b-46d5-b16c-47c4c14314e2_643832.JPG',
            locality: 'Langford Road',
            areaName: 'Santhinagar',
            costForTwo: '₹250 for two',
            cuisines: ['Healthy Food', 'Salads', 'Keto', 'Snacks'],
            avgRating: 4.6,
            parentId: '355285',
            avgRatingString: '4.6',
            totalRatingsString: '100+',
            sla: {
              deliveryTime: 30,
              lastMileTravel: 2.5,
              serviceability: 'SERVICEABLE',
              slaString: '20-30 mins',
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
                  shortDescription: 'brand',
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
                        shortDescription: 'brand',
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
          analytics: {},
          cta: {
            link: 'https://www.swiggy.com/restaurants/wefit-protein-bowls-salads-and-sandwiches-langford-road-santhinagar-bangalore-643832',
            type: 'WEBLINK',
          },
        },
      ],
      theme: 'Restaurant_Group_WebView_SEO_PB_Theme',
      widgetType: 'WIDGET_TYPE_POPULAR_BRANDS',
      style: {
        width: {
          type: 'TYPE_RELATIVE',
          value: 0.41111112,
          reference: 'RELATIVE_DIMENSION_REFERENCE_DEVICE_WIDTH',
        },
        height: {
          type: 'TYPE_RELATIVE',
          value: 0.7027027,
          reference: 'RELATIVE_DIMENSION_REFERENCE_WIDTH',
        },
        layoutAlignment: 'LAYOUT_ALIGNMENT_LEFT',
      },
      collectionId: '84124',
    },
  };
  return (
    <div className='w-3/4 mx-auto'>
      <div className='flex justify-between p-4'>
        <h1 className='font-bold text-2xl'>
          Top restaurant chains in Bangalore
        </h1>
        <div className='flex gap-3'>
          <button
            onClick={prevSlide}
            className={`p-2 rounded-full bg-gray-300 ${
              prevDisable && 'opacity-50'
            }`}
            disabled={prevDisable}
          >
            <GrFormPreviousLink size={20} />
          </button>
          <button
            onClick={nextSlide}
            className={`p-2 rounded-full bg-gray-300 ${
              nextDisable && 'opacity-50'
            }`}
            disabled={nextDisable}
          >
            <GrFormNextLink size={20} />
          </button>
        </div>
      </div>

      <div
        ref={carouselRef}
        className='overflow-x-auto hide-scrollbar container-carousel'
      >
        <div className='flex gap-8 pl-4 transition-transform duration-500'>
          {gridElements.infoWithStyle.restaurants.map((r) => (
            <TopRestaurant r={r} sty={'120'} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default TopRestaurantCarousel;
