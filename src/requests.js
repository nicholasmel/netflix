const API_KEY = "19f84e11932abbc79e6d83f82d6d1045";

const requests = {
  fetchTrending: `/trending/all/week?api_key=${API_KEY}&language=en-US`,
  fetchNetflixOriginals: `/discover/tv?api_key=${API_KEY}&with_networks=213`,
  fetchTopRated: `/tv/top_rated?api_key=${API_KEY}&with_networks=213`,
  fetchActionMovies: `/discover/movie?api_key=${API_KEY}&with_genres=28`,
  fetchComedyMovies: `/discover/movie?api_key=${API_KEY}&with_genres=35`,
  fetchKdrama: `/discover/tv?api_key=${API_KEY}&with_networks=866`,
  fetchAnime: `/discover/movie?api_key=${API_KEY}&with_keywords=210024`,
  fetchDocumentaries: `/discover/movie?api_key=${API_KEY}&with_genres=878`,
};

export default requests;
