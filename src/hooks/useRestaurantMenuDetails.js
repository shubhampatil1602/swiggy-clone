import { useEffect, useState } from 'react';
import { CORS_PROXY, RESTAURANTS_MENU_DETAILS_URL } from '../utils/constants';

const useRestaurantMenuDetails = (resId) => {
  const [resInfo, setResInfo] = useState(null);

  const fetchData = async () => {
    try {
      const res = await fetch(
        CORS_PROXY +
          RESTAURANTS_MENU_DETAILS_URL +
          resId +
          '&catalog_qa=undefined&submitAction=ENTER'
      );
      const r = await res.json();
      setResInfo(r?.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);
  return {
    resInfo,
  };
};

export default useRestaurantMenuDetails;
