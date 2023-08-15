/* eslint-disable no-console */
/* eslint-disable no-nested-ternary */
import React from 'react';
import { useParams } from 'react-router-dom';
import useAPI from '../hooks/useAPI';
import ProductCard from '../components/ProductCard';
import ProductLoading from '../components/ProductLoading';
import VideoDetail from '../components/VideoDetail';
import useVideo from '../hooks/useVideo';
import VideoDetailLoading from '../components/VideoDetailLoading';
import CommentCard from '../components/CommentCard';
import useComments from '../hooks/useComments';
import SpinLoading from '../components/SpinLoading';
import useInput from '../hooks/useInput';
import { postCommentToVideo } from '../api/network-data';
import CommentForm from '../components/CommentForm';

function VideoPage() {
  const { id } = useParams();
  const [products, productsLoading] = useAPI('products');
  const [video, videoLoading] = useVideo(id);
  const [comments, commentsLoading, setComments] = useComments(id);

  const [name, handleNameChange, setName] = useInput('');
  const [body, handleBodyChange, setBody] = useInput('');

  const handleForm = (e) => {
    e.preventDefault();
    if (name === '' || body === '') {
      return;
    }
    const formObject = {
      name,
      body,
      videoId: id,
      imageUrl: `https://ui-avatars.com/api/?background=random&name=${name.replace(/ /g, '+')}&size=128`,
    };
    postCommentToVideo(id, formObject)
      .then(() => {
        setComments((prevComments) => [formObject, ...prevComments]);
        setName('');
        setBody('');
      }).catch((err) => {
        console.log(err);
      });
  };
  return (
    <div className="container-video">
      <div style={{ width: 'min-content' }}>
        {videoLoading ? <VideoDetailLoading /> : <VideoDetail video={video} />}
        <span>
          {comments.length}
          {' '}
          Comments
        </span>
        <CommentForm
          handleForm={handleForm}
          handleBodyChange={handleBodyChange}
          handleNameChange={handleNameChange}
          name={name}
          body={body}
        />
        {/* kalau masih loading maka tampilkan spiner,
        kalu comments kosong tampilkan pesan "tidak ada komentar" */}
        {
          commentsLoading
            ? <SpinLoading />
            : (
              comments.length > 0
                ? comments.map((comment) => (
                  <CommentCard
                    key={comment.id}
                    name={comment.name}
                    body={comment.body}
                    imageUrl={comment.imageUrl}
                    createdAt={comment.createdAt}
                  />
                ))
                : <p>There is no comments</p>
            )
        }

      </div>
      <div>
        {
          productsLoading ? [1, 2, 3, 4, 5, 6, 7].map((n) => <ProductLoading key={n} />)
            : products.map((product) => (
              <ProductCard
                key={product.id}
                title={product.title}
                price={product.price}
                thumbnail={product.thumbnail}
              />
            ))
        }
      </div>
    </div>
  );
}

export default VideoPage;
