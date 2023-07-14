import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { fetchCast } from '../../servise/fetchCast';
const defaultImg =
  'https://cdn-icons-png.flaticon.com/512/1104/1104294.png?w=996&t=st=1689375521~exp=1689376121~hmac=111a2a40318614c960d0c0732c707904c16aec9333e7fbd8db51ab6b33886e29';

const Cast = () => {
  const [cast, setCast] = useState(null);
  const params = useParams();

  useEffect(() => {
    fetchCast(params.movieId)
      .then(response => setCast(response))
      .catch(err => console.error(err));
  }, [params.movieId]);

  return cast?.success === false ? (
    <p>Sorry, we don't have information about cast.</p>
  ) : (
    <ul>
      {cast?.cast.map(({ id, name, profile_path }) => {
        return (
          <li key={id}>
            <p>{name}</p>
            <img
              src={
                profile_path
                  ? `https://image.tmdb.org/t/p/w300${profile_path}`
                  : defaultImg
              }
              alt={name}
            />
          </li>
        );
      })}
    </ul>
  );
};

export default Cast;
