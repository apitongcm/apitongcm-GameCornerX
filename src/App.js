import React from 'react';
import './App.css';
import requests from './requests';
import Row from './Row';
import Banner from './Banner';
import Navbar from './Navbar';


function App() {
  return (
    <div className="App">
      <Navbar/>
      <Banner/>
      <h1><span style={{color:'red'}}>APITONGCM</span> GAMING CORNER</h1>
      <Row title="Best of the Year" fetchURL={requests.fetchComing}/>
      <Row title="Popular in 2020" fetchURL={requests.fetchPopular2020}/>
      <Row title="All time favorite" fetchURL={requests.fetchAllTime}/>
      <Row title="Highest Rated Android RPG" fetchURL={requests.fetchAndroidRPG}/>
      <Row title="Most Popular Mobile games since 2015" fetchURL={requests.fetchPopularMobile}/>
    </div>
  );
}

export default App;
