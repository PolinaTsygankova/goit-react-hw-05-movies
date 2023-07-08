import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const Reviews = () => {
  const params = useParams();
  const [reviews, setReviews] = useState(null);

  useEffect(() => {
    const options = {
      method: 'GET',
      headers: {
        accept: 'application/json',
        Authorization:
          'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJmYjY5MWY1OTNlYjc0MjU5MmFkMDFlNmZiNjBhMDE5YiIsInN1YiI6IjY0YTY4YTUxNzI0ZGUxMDBjNWU5ODNiYiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.tqT4KdHOxcFDAo6pMr4lLuCDSt37dEUmae-2jFbOSdU',
      },
    };

    fetch(
      `https://api.themoviedb.org/3/movie/${params.movieId}/reviews?language=en-US&page=1`,
      options
    )
      .then(response => response.json())
      .then(response => setReviews(response))
      .catch(err => console.error(err));
  }, [params.movieId]);

  console.log(reviews);

  if (!reviews) {
    return;
  }

  return (
    <ul>
      {reviews && reviews.results.length === 0 ? (
        <p>We don't have any reviews for this movie</p>
      ) : (
        reviews.results.map(({ content, author }) => (
          <li key={content}>
            <h2>Author: {author}</h2>
            <p>{content}</p>
          </li>
        ))
      )}
    </ul>
  );
};

export default Reviews;
