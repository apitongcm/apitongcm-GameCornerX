import React,{useState,useEffect} from 'react';
import axios from './axios';
import requests from './requests';
import "./Banner.css";



function Banner() {

    const [games, setGames] = useState([]);

    useEffect(() => {
        async function fetchData()
        {
            const request = await axios.get(requests.fetchComing);
            setGames(
                request.data.results[
                    Math.floor(Math.random() * request.data.results.length-1)
                ]
            );

            return request;
        }
        fetchData();
    }, []);

    console.log(games?.genres);

    return (
        <header className="banner"
        style={{
            backgroundImage:`url(
                ${games?.background_image}
            )`,
        }}>
        <div className="banner__contents">
            <h1 className="banner__title">
                {games?.name}
            </h1>
            <div className="banner__buttons">
                    <button className="banner__button">Play</button>
                    <button className="banner__button">Info</button>
            </div>
            <div className="banner__genres">
                    {games?.genres?.map(genre =>(
                        <button className="banner__genre">
                            {genre?.name}
                        </button>
                    ))}     
            </div>
            <button className="banner__rating">
                    {games?.rating}
            </button>

            
        </div>
        <div className="banner__fadeBottom"></div> 
        </header>
    )
}

export default Banner;
