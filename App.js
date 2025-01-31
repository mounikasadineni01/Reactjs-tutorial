import React from "react";
import ReactDOM from "react-dom/client";

/**
 * Header
 *   - Logo
 *   - Nav Items
 * Body
 *   - Search bar
 *   - Search button
 *   - Restaurent container
 *     - Cards
 * Footer
 *   - Copyrights
 *   - Contact
 *   - Links
 *   - Address
 */

const resList = [
  {
    type: "restaurant",
    data: {
      type: "F",
      id: "334475",
      name: "KFC",
      uuid: "eaed0e3b-7c0e-4367-8f59-f41d309fb93a",
      city: "1",
      area: "BTM Layout",
      totalRatingsString: "500+ ratings",
      cloudinaryImageId: "yy7gp0mb7f6ca7vr1kep",
      cuisines: ["Burgers", "Biryani", "American", "Snacks", "Fast Food"],
      tags: [],
      costForTwo: 40000,
      costForTwoString: "₹400 FOR TWO",
      deliveryTime: 36,
      minDeliveryTime: 36,
      maxDeliveryTime: 36,
      slaString: "36 MINS",
      lastMileTravel: 3.5,
      slugs: {
        restaurant: "kfc-btm-layout-btm",
        city: "bangalore",
      },
      cityState: "1",
      address:
        "KFC restaurants, 942,SV Tower, 16th Main, BTM 2nd Stage ,560076",
      locality: "2nd Stage",
      parentId: 547,
      unserviceable: false,
      veg: false,
      select: false,
      favorite: false,
      tradeCampaignHeaders: [],
      aggregatedDiscountInfo: {
        header: "FREE DELIVERY",
        shortDescriptionList: [
          {
            meta: "FREE DELIVERY",
            discountType: "FREE_DELIVERY",
            operationType: "RESTAURANT",
          },
        ],
        descriptionList: [
          {
            meta: "FREE DELIVERY",
            discountType: "FREE_DELIVERY",
            operationType: "RESTAURANT",
          },
        ],
        subHeader: "",
        headerType: 0,
        superFreedel: "",
      },
      aggregatedDiscountInfoV2: {
        header: "",
        shortDescriptionList: [
          {
            meta: "Free Delivery",
            discountType: "FREE_DELIVERY",
            operationType: "RESTAURANT",
          },
        ],
        descriptionList: [
          {
            meta: "FREE DELIVERY",
            discountType: "FREE_DELIVERY",
            operationType: "RESTAURANT",
          },
        ],
        subHeader: "",
        headerType: 0,
        superFreedel: "",
      },
      ribbon: [
        {
          type: "PROMOTED",
        },
      ],
      chain: [],
      feeDetails: {
        fees: [],
        totalFees: 0,
        message: "",
        title: "",
        amount: "",
        icon: "",
      },
      availability: {
        opened: true,
        nextOpenMessage: "",
        nextCloseMessage: "",
      },
      longDistanceEnabled: 0,
      rainMode: "NONE",
      thirdPartyAddress: false,
      thirdPartyVendor: "",
      adTrackingID: "cid=6109309~p=1~eid=00000186-a341-249f-05e6-09c500910178",
      badges: {
        imageBased: [],
        textBased: [],
        textExtendedBadges: [],
      },
      lastMileTravelString: "3.5 kms",
      hasSurge: false,
      sla: {
        restaurantId: "334475",
        deliveryTime: 36,
        minDeliveryTime: 36,
        maxDeliveryTime: 36,
        lastMileTravel: 3.5,
        lastMileDistance: 0,
        serviceability: "SERVICEABLE",
        rainMode: "NONE",
        longDistance: "NOT_LONG_DISTANCE",
        preferentialService: false,
        iconType: "EMPTY",
      },
      promoted: true,
      avgRating: "3.8",
      totalRatings: 500,
      new: false,
    },
    subtype: "basic",
  },
  {
    type: "restaurant",
    data: {
      type: "F",
      id: "229",
      name: "Meghana Foods",
      uuid: "4fdd19e2-5d0f-4bde-9c7f-dc3e8d36021f",
      city: "1",
      area: "Koramangala",
      totalRatingsString: "1000+ ratings",
      cloudinaryImageId: "scn7agoidbkan1adkipb",
      cuisines: [
        "Biryani",
        "Andhra",
        "South Indian",
        "North Indian",
        "Chinese",
        "Seafood",
      ],
      tags: [],
      costForTwo: 50000,
      costForTwoString: "₹500 FOR TWO",
      deliveryTime: 29,
      minDeliveryTime: 29,
      maxDeliveryTime: 29,
      slaString: "29 MINS",
      lastMileTravel: 1.399999976158142,
      slugs: {
        restaurant: "meghana-foods-5th-block-koramangala",
        city: "bangalore",
      },
      cityState: "1",
      address:
        "124, Near Jyothi Nivas College, 1st Cross, KHB Colony, Koramangala 5th Block, Bangalore",
      locality: "5th Block",
      parentId: 635,
      unserviceable: false,
      veg: false,
      select: false,
      favorite: false,
      tradeCampaignHeaders: [],
      aggregatedDiscountInfo: {
        header: "FREE DELIVERY",
        shortDescriptionList: [
          {
            meta: "FREE DELIVERY",
            discountType: "FREE_DELIVERY",
            operationType: "RESTAURANT",
          },
        ],
        descriptionList: [
          {
            meta: "FREE DELIVERY",
            discountType: "FREE_DELIVERY",
            operationType: "RESTAURANT",
          },
        ],
        subHeader: "",
        headerType: 0,
        superFreedel: "",
      },
      aggregatedDiscountInfoV2: {
        header: "",
        shortDescriptionList: [
          {
            meta: "Free Delivery",
            discountType: "FREE_DELIVERY",
            operationType: "RESTAURANT",
          },
        ],
        descriptionList: [
          {
            meta: "FREE DELIVERY",
            discountType: "FREE_DELIVERY",
            operationType: "RESTAURANT",
          },
        ],
        subHeader: "",
        headerType: 0,
        superFreedel: "",
      },
      chain: [],
      feeDetails: {
        fees: [],
        totalFees: 0,
        message: "",
        title: "",
        amount: "",
        icon: "",
      },
      availability: {
        opened: true,
        nextOpenMessage: "",
        nextCloseMessage: "",
      },
      longDistanceEnabled: 0,
      rainMode: "NONE",
      thirdPartyAddress: false,
      thirdPartyVendor: "",
      adTrackingID: "",
      badges: {
        imageBased: [],
        textBased: [],
        textExtendedBadges: [],
      },
      lastMileTravelString: "1.3 kms",
      hasSurge: false,
      sla: {
        restaurantId: "229",
        deliveryTime: 29,
        minDeliveryTime: 29,
        maxDeliveryTime: 29,
        lastMileTravel: 1.399999976158142,
        lastMileDistance: 0,
        serviceability: "SERVICEABLE",
        rainMode: "NONE",
        longDistance: "NOT_LONG_DISTANCE",
        preferentialService: false,
        iconType: "EMPTY",
      },
      promoted: false,
      avgRating: "4.4",
      totalRatings: 1000,
      new: false,
    },
    subtype: "basic",
  },
  {
    type: "restaurant",
    data: {
      type: "F",
      id: "121603",
      name: "Kannur Food Point",
      uuid: "51983905-e698-4e31-b0d7-e376eca56320",
      city: "1",
      area: "Tavarekere",
      totalRatingsString: "5000+ ratings",
      cloudinaryImageId: "hnuci0w3iqmrejfikfzb",
      cuisines: ["Kerala", "Chinese"],
      tags: [],
      costForTwo: 30000,
      costForTwoString: "₹300 FOR TWO",
      deliveryTime: 31,
      minDeliveryTime: 31,
      maxDeliveryTime: 31,
      slaString: "31 MINS",
      lastMileTravel: 3,
      slugs: {
        restaurant: "kannur-food-point-btm",
        city: "bangalore",
      },
      cityState: "1",
      address:
        "6/21,9TH CROSS ,1ST MAIN, VENKATESHWARA LAYOUT,SG PALYA, BENGALURU, - 560093",
      locality: "SG Palya",
      parentId: 20974,
      unserviceable: false,
      veg: false,
      select: false,
      favorite: false,
      tradeCampaignHeaders: [],
      aggregatedDiscountInfo: {
        header: "FREE DELIVERY",
        shortDescriptionList: [
          {
            meta: "FREE DELIVERY",
            discountType: "FREE_DELIVERY",
            operationType: "RESTAURANT",
          },
          {
            meta: "50% off on all orders",
            discountType: "Percentage",
            operationType: "RESTAURANT",
          },
        ],
        descriptionList: [
          {
            meta: "FREE DELIVERY",
            discountType: "FREE_DELIVERY",
            operationType: "RESTAURANT",
          },
          {
            meta: "50% off on all orders",
            discountType: "Percentage",
            operationType: "RESTAURANT",
          },
        ],
        subHeader: "",
        headerType: 0,
        superFreedel: "",
      },
      aggregatedDiscountInfoV2: {
        header: "50% OFF",
        shortDescriptionList: [
          {
            meta: "Free Delivery",
            discountType: "FREE_DELIVERY",
            operationType: "RESTAURANT",
          },
        ],
        descriptionList: [
          {
            meta: "FREE DELIVERY",
            discountType: "FREE_DELIVERY",
            operationType: "RESTAURANT",
          },
          {
            meta: "50% off on all orders",
            discountType: "Percentage",
            operationType: "RESTAURANT",
          },
        ],
        subHeader: "",
        headerType: 0,
        superFreedel: "",
      },
      chain: [],
      feeDetails: {
        fees: [],
        totalFees: 0,
        message: "",
        title: "",
        amount: "",
        icon: "",
      },
      availability: {
        opened: true,
        nextOpenMessage: "",
        nextCloseMessage: "",
      },
      longDistanceEnabled: 0,
      rainMode: "NONE",
      thirdPartyAddress: false,
      thirdPartyVendor: "",
      adTrackingID: "",
      badges: {
        imageBased: [],
        textBased: [],
        textExtendedBadges: [],
      },
      lastMileTravelString: "3 kms",
      hasSurge: false,
      sla: {
        restaurantId: "121603",
        deliveryTime: 31,
        minDeliveryTime: 31,
        maxDeliveryTime: 31,
        lastMileTravel: 3,
        lastMileDistance: 0,
        serviceability: "SERVICEABLE",
        rainMode: "NONE",
        longDistance: "NOT_LONG_DISTANCE",
        preferentialService: false,
        iconType: "EMPTY",
      },
      promoted: false,
      avgRating: "3.8",
      totalRatings: 5000,
      new: false,
    },
    subtype: "basic",
  },
  {
    type: "restaurant",
    data: {
      type: "F",
      id: "337335",
      name: "Kannur food kitchen",
      uuid: "c70b61bc-0f68-4e24-996b-749fbf295c35",
      city: "1",
      area: "BTM Layout",
      totalRatingsString: "1000+ ratings",
      cloudinaryImageId: "fnnshpr2s8ibh9e157a8",
      cuisines: ["Kerala", "Biryani", "Beverages"],
      tags: [],
      costForTwo: 20000,
      costForTwoString: "₹200 FOR TWO",
      deliveryTime: 30,
      minDeliveryTime: 30,
      maxDeliveryTime: 30,
      slaString: "30 MINS",
      lastMileTravel: 2.5,
      slugs: {
        restaurant: "kannur-food-kitchen-btm-btm",
        city: "bangalore",
      },
      cityState: "1",
      address:
        "kannur food point, Chocolate Factory Road, Tavarekere, Cashier Layout, 1st Stage, BTM Layout, thavrakharea, Karnataka, India",
      locality: "1st  Stage",
      parentId: 114756,
      unserviceable: false,
      veg: false,
      select: false,
      favorite: false,
      tradeCampaignHeaders: [],
      aggregatedDiscountInfo: {
        header: "FREE DELIVERY",
        shortDescriptionList: [
          {
            meta: "FREE DELIVERY",
            discountType: "FREE_DELIVERY",
            operationType: "RESTAURANT",
          },
          {
            meta: "50% off on all orders",
            discountType: "Percentage",
            operationType: "RESTAURANT",
          },
        ],
        descriptionList: [
          {
            meta: "FREE DELIVERY",
            discountType: "FREE_DELIVERY",
            operationType: "RESTAURANT",
          },
          {
            meta: "50% off on all orders",
            discountType: "Percentage",
            operationType: "RESTAURANT",
          },
        ],
        subHeader: "",
        headerType: 0,
        superFreedel: "",
      },
      aggregatedDiscountInfoV2: {
        header: "50% OFF",
        shortDescriptionList: [
          {
            meta: "Free Delivery",
            discountType: "FREE_DELIVERY",
            operationType: "RESTAURANT",
          },
        ],
        descriptionList: [
          {
            meta: "FREE DELIVERY",
            discountType: "FREE_DELIVERY",
            operationType: "RESTAURANT",
          },
          {
            meta: "50% off on all orders",
            discountType: "Percentage",
            operationType: "RESTAURANT",
          },
        ],
        subHeader: "",
        headerType: 0,
        superFreedel: "",
      },
      chain: [],
      feeDetails: {
        fees: [],
        totalFees: 0,
        message: "",
        title: "",
        amount: "",
        icon: "",
      },
      availability: {
        opened: true,
        nextOpenMessage: "",
        nextCloseMessage: "",
      },
      longDistanceEnabled: 0,
      rainMode: "NONE",
      thirdPartyAddress: false,
      thirdPartyVendor: "",
      adTrackingID: "",
      badges: {
        imageBased: [],
        textBased: [],
        textExtendedBadges: [],
      },
      lastMileTravelString: "2.5 kms",
      hasSurge: false,
      sla: {
        restaurantId: "337335",
        deliveryTime: 30,
        minDeliveryTime: 30,
        maxDeliveryTime: 30,
        lastMileTravel: 2.5,
        lastMileDistance: 0,
        serviceability: "SERVICEABLE",
        rainMode: "NONE",
        longDistance: "NOT_LONG_DISTANCE",
        preferentialService: false,
        iconType: "EMPTY",
      },
      promoted: false,
      avgRating: "3.8",
      totalRatings: 1000,
      new: false,
    },
    subtype: "basic",
  },
  {
    type: "restaurant",
    data: {
      type: "F",
      id: "492159",
      name: "Roti Wala",
      uuid: "ada41f9b-cca3-4197-805c-8c43798919e9",
      city: "1",
      area: "Koramangala",
      totalRatingsString: "100+ ratings",
      cloudinaryImageId: "ptcxcu2mmnzieax8hjpf",
      cuisines: ["Home Food", "North Indian", "Thalis"],
      tags: [],
      costForTwo: 20000,
      costForTwoString: "₹200 FOR TWO",
      deliveryTime: 36,
      minDeliveryTime: 36,
      maxDeliveryTime: 36,
      slaString: "36 MINS",
      lastMileTravel: 1,
      slugs: {
        restaurant: "new-roti-wala-koramangala-koramangala",
        city: "bangalore",
      },
      cityState: "1",
      address:
        "No 18 ,MIG, KHB Colony, 5th Block, Koramangala, Bengaluru, Karnataka 560095, India",
      locality: "5th Block",
      parentId: 171678,
      unserviceable: false,
      veg: false,
      select: false,
      favorite: false,
      tradeCampaignHeaders: [],
      aggregatedDiscountInfo: {
        header: "20% off",
        shortDescriptionList: [
          {
            meta: "20% off | Use TRYNEW",
            discountType: "Percentage",
            operationType: "RESTAURANT",
          },
        ],
        descriptionList: [
          {
            meta: "20% off up to ₹50 | Use code TRYNEW",
            discountType: "Percentage",
            operationType: "RESTAURANT",
          },
        ],
        subHeader: "",
        headerType: 0,
        superFreedel: "",
      },
      aggregatedDiscountInfoV2: {
        header: "20% OFF",
        shortDescriptionList: [
          {
            meta: "Use TRYNEW",
            discountType: "Percentage",
            operationType: "RESTAURANT",
          },
        ],
        descriptionList: [
          {
            meta: "20% off up to ₹50 | Use code TRYNEW",
            discountType: "Percentage",
            operationType: "RESTAURANT",
          },
        ],
        subHeader: "",
        headerType: 0,
        superFreedel: "",
      },
      chain: [],
      feeDetails: {
        fees: [],
        totalFees: 0,
        message: "",
        title: "",
        amount: "",
        icon: "",
      },
      availability: {
        opened: true,
        nextOpenMessage: "",
        nextCloseMessage: "",
      },
      longDistanceEnabled: 0,
      rainMode: "NONE",
      thirdPartyAddress: false,
      thirdPartyVendor: "",
      adTrackingID: "",
      badges: {
        imageBased: [],
        textBased: [],
        textExtendedBadges: [],
      },
      lastMileTravelString: "1 kms",
      hasSurge: false,
      sla: {
        restaurantId: "492159",
        deliveryTime: 36,
        minDeliveryTime: 36,
        maxDeliveryTime: 36,
        lastMileTravel: 1,
        lastMileDistance: 0,
        serviceability: "SERVICEABLE",
        rainMode: "NONE",
        longDistance: "NOT_LONG_DISTANCE",
        preferentialService: false,
        iconType: "EMPTY",
      },
      promoted: false,
      avgRating: "4.1",
      totalRatings: 100,
      new: false,
    },
    subtype: "basic",
  },
  {
    type: "restaurant",
    data: {
      type: "F",
      id: "425",
      name: "Hotel Empire",
      uuid: "c0c37758-2e83-4429-aad6-eb94debb48f5",
      city: "1",
      area: "Koramangala",
      totalRatingsString: "1000+ ratings",
      cloudinaryImageId: "froq9icxh2mbtpti9rk6",
      cuisines: ["North Indian", "Kebabs", "Biryani"],
      tags: [],
      costForTwo: 45000,
      costForTwoString: "₹450 FOR TWO",
      deliveryTime: 30,
      minDeliveryTime: 30,
      maxDeliveryTime: 30,
      slaString: "30 MINS",
      lastMileTravel: 1.2999999523162842,
      slugs: {
        restaurant: "hotel-empire-5th-block-koramangala",
        city: "bangalore",
      },
      cityState: "1",
      address:
        "103, Industrial Area, 5th Block, Near Jyothi Nivas College, Koramangala 5th Block, Bangalore",
      locality: "Koramangala",
      parentId: 475,
      unserviceable: false,
      veg: false,
      select: false,
      favorite: false,
      tradeCampaignHeaders: [],
      aggregatedDiscountInfo: {
        header: "10% off",
        shortDescriptionList: [
          {
            meta: "10% off | Use TRYNEW",
            discountType: "Percentage",
            operationType: "RESTAURANT",
          },
        ],
        descriptionList: [
          {
            meta: "10% off up to ₹40 | Use code TRYNEW",
            discountType: "Percentage",
            operationType: "RESTAURANT",
          },
        ],
        subHeader: "",
        headerType: 0,
        superFreedel: "",
      },
      aggregatedDiscountInfoV2: {
        header: "10% OFF",
        shortDescriptionList: [
          {
            meta: "Use TRYNEW",
            discountType: "Percentage",
            operationType: "RESTAURANT",
          },
        ],
        descriptionList: [
          {
            meta: "10% off up to ₹40 | Use code TRYNEW",
            discountType: "Percentage",
            operationType: "RESTAURANT",
          },
        ],
        subHeader: "",
        headerType: 0,
        superFreedel: "",
      },
      chain: [],
      feeDetails: {
        fees: [],
        totalFees: 0,
        message: "",
        title: "",
        amount: "",
        icon: "",
      },
      availability: {
        opened: true,
        nextOpenMessage: "",
        nextCloseMessage: "",
      },
      longDistanceEnabled: 0,
      rainMode: "NONE",
      thirdPartyAddress: false,
      thirdPartyVendor: "",
      adTrackingID: "",
      badges: {
        imageBased: [],
        textBased: [],
        textExtendedBadges: [],
      },
      lastMileTravelString: "1.2 kms",
      hasSurge: false,
      sla: {
        restaurantId: "425",
        deliveryTime: 30,
        minDeliveryTime: 30,
        maxDeliveryTime: 30,
        lastMileTravel: 1.2999999523162842,
        lastMileDistance: 0,
        serviceability: "SERVICEABLE",
        rainMode: "NONE",
        longDistance: "NOT_LONG_DISTANCE",
        preferentialService: false,
        iconType: "EMPTY",
      },
      promoted: false,
      avgRating: "4.1",
      totalRatings: 1000,
      new: false,
    },
    subtype: "basic",
  },
];
const resObj = {
  type: "restaurant",
  data: {
    type: "F",
    id: "334475",
    name: "KFC",
    uuid: "eaed0e3b-7c0e-4367-8f59-f41d309fb93a",
    city: "1",
    area: "BTM Layout",
    totalRatingsString: "500+ ratings",
    cloudinaryImageId: "yy7gp0mb7f6ca7vr1kep",
    cuisines: ["Burgers", "Biryani", "American", "Snacks", "Fast Food"],
    tags: [],
    costForTwo: 40000,
    costForTwoString: "₹400 FOR TWO",
    deliveryTime: 36,
    minDeliveryTime: 36,
    maxDeliveryTime: 36,
    slaString: "36 MINS",
    lastMileTravel: 3.5,
    slugs: {
      restaurant: "kfc-btm-layout-btm",
      city: "bangalore",
    },
    cityState: "1",
    address: "KFC restaurants, 942,SV Tower, 16th Main, BTM 2nd Stage ,560076",
    locality: "2nd Stage",
    parentId: 547,
    unserviceable: false,
    veg: false,
    select: false,
    favorite: false,
    tradeCampaignHeaders: [],
    aggregatedDiscountInfo: {
      header: "FREE DELIVERY",
      shortDescriptionList: [
        {
          meta: "FREE DELIVERY",
          discountType: "FREE_DELIVERY",
          operationType: "RESTAURANT",
        },
      ],
      descriptionList: [
        {
          meta: "FREE DELIVERY",
          discountType: "FREE_DELIVERY",
          operationType: "RESTAURANT",
        },
      ],
      subHeader: "",
      headerType: 0,
      superFreedel: "",
    },
    aggregatedDiscountInfoV2: {
      header: "",
      shortDescriptionList: [
        {
          meta: "Free Delivery",
          discountType: "FREE_DELIVERY",
          operationType: "RESTAURANT",
        },
      ],
      descriptionList: [
        {
          meta: "FREE DELIVERY",
          discountType: "FREE_DELIVERY",
          operationType: "RESTAURANT",
        },
      ],
      subHeader: "",
      headerType: 0,
      superFreedel: "",
    },
    ribbon: [
      {
        type: "PROMOTED",
      },
    ],
    chain: [],
    feeDetails: {
      fees: [],
      totalFees: 0,
      message: "",
      title: "",
      amount: "",
      icon: "",
    },
    availability: {
      opened: true,
      nextOpenMessage: "",
      nextCloseMessage: "",
    },
    longDistanceEnabled: 0,
    rainMode: "NONE",
    thirdPartyAddress: false,
    thirdPartyVendor: "",
    adTrackingID: "cid=6109309~p=1~eid=00000186-a341-249f-05e6-09c500910178",
    badges: {
      imageBased: [],
      textBased: [],
      textExtendedBadges: [],
    },
    lastMileTravelString: "3.5 kms",
    hasSurge: false,
    sla: {
      restaurantId: "334475",
      deliveryTime: 36,
      minDeliveryTime: 36,
      maxDeliveryTime: 36,
      lastMileTravel: 3.5,
      lastMileDistance: 0,
      serviceability: "SERVICEABLE",
      rainMode: "NONE",
      longDistance: "NOT_LONG_DISTANCE",
      preferentialService: false,
      iconType: "EMPTY",
    },
    promoted: true,
    avgRating: "3.8",
    totalRatings: 500,
    new: false,
  },
  subtype: "basic",
};

const Header = () => {
  return (
    <div className="header">
      <div className="logo-container">
        <img
          className="logo"
          src="https://media.istockphoto.com/id/1435983029/vector/food-delivery-logo-images.jpg?s=612x612&w=0&k=20&c=HXPxcjOxUiW4pMW1u9E0k2dJYQOU37a_0qZAy3so8fY="
        ></img>
        <h1>Uber Eats</h1>
      </div>
      <div className="navbar">
        <ul>
          <li>Home</li>
          <li>About us</li>
          <li>Contact</li>
          <li>Cart</li>
        </ul>
      </div>
    </div>
  );
};

const Card = (props) => {
  // const{resName, cuisine, Rating} = props;
  const { resData } = props;
  const {
    name,
    cloudinaryImageId,
    cuisines,
    avgRating,
    costForTwo,
    deliveryTime,
  } = resData?.data;
  return (
    <div className="res-card">
      <img
        className="res-image"
        src={
          "https://res.cloudinary.com/grubhub/image/upload/d_search:browse-images:default.jpg/w_342,q_80,fl_lossy,dpr_2.0,c_fill,f_auto,h_156/" +
          cloudinaryImageId
        }
        alt={name}
      ></img>
      <h3>{name}</h3>
      <h5>{cuisines.join(", ")}</h5>
      <h5>Rating : {avgRating} </h5>
      <h5>{costForTwo / 100} FOR TWO</h5>
      <h5>{deliveryTime} minutes</h5>
    </div>
  );
};

const Body = () => {
  return (
    <div className="body">
      <div className="searchbar">Searchbar</div>
      <div className="res-container">
        {/*<Card resData={resObj} />*/}
        {/*<Card resData={resList[1]} />*/}
        {resList.map((restaurant) => (
          <Card key={restaurant.data.id} resData={restaurant} />
        ))}
      </div>
    </div>
  );
};

const Footer = () => {
  return <div className="footer"></div>;
};

const Swiggy = () => {
  return (
    <div className="app">
      <Header />
      <Body />
      <Footer />
    </div>
  );
};
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<Swiggy />);
