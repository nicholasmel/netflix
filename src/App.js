import React from "react";
import "./App.css";
import Row from "./Row";
import requests from "./requests";
import Banner from "./Banner";
import Nav from "./Nav";
import Footer from "./Footer"
// make request with axios, deployed with firebase

function App() {
  return (
    <div className="App">
      <Nav />
      <Banner />
      <Row
        title="Trending Now"
        fetchURL={requests.fetchTrending}
        isLargeRow={true}
      />
      <Row title="Top Rated" fetchURL={requests.fetchTopRated} />
      <Row title="Anime" fetchURL={requests.fetchAnime} />
      <Row title="Action Movies" fetchURL={requests.fetchActionMovies} />
      <Row title="Korean TV Dramas" fetchURL={requests.fetchKdrama} />
      <Row
        title="Netflix Originals"
        isLargeRow={true}
        fetchURL={requests.fetchNetflixOriginals}
      />
      <Row title="Comedies" fetchURL={requests.fetchComedyMovies} />
      <Row title="Sci-Fi" fetchURL={requests.fetchDocumentaries} />
      <Footer />
    </div>
  );
}

export default App;
