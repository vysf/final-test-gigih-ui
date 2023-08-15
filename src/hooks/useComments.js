import { useEffect, useState } from 'react';
import { getCommentsFromVideo } from '../api/network-data';

function useComments(id) {
  const [comments, setComments] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getCommentsFromVideo(id).then((response) => {
      setComments(response.comments);
      setLoading(false);
    });

    return () => {
      setLoading(true);
    };
  }, [id]);

  return [comments, loading, setComments];
}

export default useComments;
