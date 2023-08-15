import { useEffect, useState } from 'react';
import { getVideo } from '../api/network-data';

function useVideo(id) {
  const [video, setVideo] = useState({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getVideo(id).then((response) => {
      setVideo(response.video);
      setLoading(false);
    });

    return () => {
      setLoading(true);
    };
  }, [id]);

  return [video, loading];
}

export default useVideo;
