import React from 'react';
import useAPI from '../hooks/useAPI';
import VideoCard from '../components/VideoCard';
import VideoLoading from '../components/VideoLoading';

function HomePage() {
  const [videos, loading] = useAPI('videos');
  return (
    <div className="container-home">

      {
        loading ? [1, 2, 3, 4, 5, 6, 7].map((n) => <VideoLoading key={n} />)
          : videos.map((video) => (
            <VideoCard
              key={video.id}
              loading={loading}
              id={video.id}
              url={video.thumbnails.medium.url}
              title={video.title}
            />
          ))
      }
    </div>
  );
}

export default HomePage;
