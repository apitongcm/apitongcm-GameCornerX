//this is for the functional module of fetching API

 if (process.env.NODE_ENV !== 'production'){
    require('dotenv').config();
   }

   const API_KEY = process.env.API_KEY;



const requests = {
    fetchComing:`/games?key=${API_KEY}&dates=2021-01-01,2021-10-18&ordering=-added`,
    fetchPopular2020:`/games?key=${API_KEY}&dates=2020-01-01,2020-12-31&ordering=-added`,
    fetchAllTime:`/games?key=${API_KEY}&ordering=-added&parent_platforms=13`,
    fetchAndroidRPG:`/games?key=${API_KEY}&dates=2021-01-01,2021-10-18&parent_platforms=4&genres=5&ordering=-added`,
    fetchPopularMobile:`/games?key=${API_KEY}&dates=2015-01-01,2020-10-18&parent_platforms=4&ordering=-added`,

}

export default requests;
