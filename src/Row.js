import React,{useState, useEffect}  from 'react';
import axios from './axios';
import './Row.css';
import YouTube from 'react-youtube';
import gametrailer from './gametrailer';
import './Banner.css';




function Row({title,fetchURL}) {

    const[games, setGames] = useState([]);
    const[trailerUrl,setTrailerUrl] = useState("");
    
    useEffect(() => {
        
        async function fetchData() {
            const request = await axios.get(fetchURL);
            setGames(request.data.results);
            return request;
        }
        
        fetchData();
    },[fetchURL]);

    const opts= {
        height:'390',
        width:'100%',
        playerVars:
        {
            autoplay:1,
        },
    }

    const game__trailer = gametrailer;
    console.log(games);
    
    const handleClick = (games) => {
        if(trailerUrl)
        {
            setTrailerUrl('');
        }else
        {

            game__trailer?.map((trailerUrl) => {
                if(trailerUrl.name === games.name)
                {
                    setTrailerUrl(trailerUrl.url)
                }
                else
                {
                    console.log("not found");
                }
            })
        }
    }

    function truncate(str, n)
    {
        return str?.length > n ? str.substr(0, n-1) + "..." : str;
    }

    return (
        <div className="row">
            <h2>{title}</h2>
            <div className="row__posters">
                {games?.map((game) => 
                    <div className="row__cards">
                    <img 
                    key={game?.id}
                    onClick={() => handleClick(game)}
                    className={`row__poster`}
                    src={game?.background_image}
                    alt={game?.name}
                    />
                    <h4 className="row__posterTitle">{truncate(game?.name, 22)}</h4>
                    <p className="row__posterRating">{game?.rating}</p>
                    </div>
                    )}
            </div>
            {trailerUrl && <YouTube videoId={trailerUrl} opts={opts}/>}
        </div>
    )
}

export default Row;
