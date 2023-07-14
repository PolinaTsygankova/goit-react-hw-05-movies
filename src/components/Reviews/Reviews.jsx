import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { fetchReviews } from '../../servise/fetchReviews';

const Reviews = () => {
  const params = useParams();
  const [reviews, setReviews] = useState(null);

  useEffect(() => {
    fetchReviews(params.movieId)
      .then(response => setReviews(response))
      .catch(err => console.error(err));
  }, [params.movieId]);

  if (!reviews) {
    return;
  }

  return reviews.results.length === 0 ? (
    <p>Sorry, we don't have information about reviews.</p>
  ) : (
    <ul>
      {reviews?.results.map(({ content, author }) => (
        <li key={content}>
          <h2>Author: {author}</h2>
          <p>{content}</p>
        </li>
      ))}
    </ul>
  );
};

export default Reviews;
