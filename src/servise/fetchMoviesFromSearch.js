export function fetchMoviesFromSearch(movies) {
  const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization:
        'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJmYjY5MWY1OTNlYjc0MjU5MmFkMDFlNmZiNjBhMDE5YiIsInN1YiI6IjY0YTY4YTUxNzI0ZGUxMDBjNWU5ODNiYiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.tqT4KdHOxcFDAo6pMr4lLuCDSt37dEUmae-2jFbOSdU',
    },
  };

  return fetch(
    `https://api.themoviedb.org/3/search/movie?query=${movies}&include_adult=false&language=en-US&page=1`,
    options
  ).then(res => {
    if (res.ok) {
      return res.json();
    }

    return new Error('Something goes wrong');
  });
}
