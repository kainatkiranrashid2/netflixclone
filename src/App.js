import './App.css';
import requests from './requests';
import Row from './Row';
import Banner from './Banner'
import Nav from './Nav'
function App() {
  return (
    // NavBar
    <div className="App">
      <Nav/>
      <Banner/>
    <Row title="NETFLIX ORIGINALS" fetchUrl={requests.fetchNetflixOriginals} isLargeRow={true} />
    <Row title="TRENDING" fetchUrl={requests.fetchTrending}/>
    <Row title="TOP RATED" fetchUrl={requests.fetchTopRated}/>
    <Row title="ACTION MOVIES" fetchUrl={requests.fetchActionMovies}/>
    <Row title="DOCUMENTORIES" fetchUrl={requests.fetchDocumentaries}/>



    </div>
  );
}

export default App;
