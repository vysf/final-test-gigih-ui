import { useEffect, useState } from 'react';
import { getProducts, getVideos } from '../api/network-data';

const callbacks = {
  videos: getVideos,
  products: getProducts,
};

function useAPI(mode) {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    callbacks[mode]().then((response) => {
      setItems(response[mode]);
      setLoading(false);
    });

    return () => {
      setLoading(true);
    };
  }, [mode]);

  return [items, loading];
}

export default useAPI;
