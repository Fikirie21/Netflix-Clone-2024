// import React, { useState, useEffect } from "react";
// import axios from "../../Utils/Axios"
// import requests from "../../Utils/Requests";
// const Banner = () => {
//   const [movie, setMovie] = useState({});
//   useEffect(()=>{(async ()=>{
//     try{
//         const request=await axios.get(requests.fetchNetflixOriginals)
//         setMovie(request.data.results[Math.floor(Math.random()*request.data.results.length)

//         ]);
//     } catch (error){console.log("error",error);

//     }
//   })()},[]);

//   return (
//     <div
//       className="banner"
//       style={{
//         backgroundSize: "cover",
//         backgroundImage: `url('https://image.tmdb.org/t/p/original${movie?.backdrop_path}')`,
//         backgroundPosition: "center",
//         backgroundRepeat: "no-repeat",
//       }}
//     >
//       <div className="banner_content">
//         <h1 className="banner_title">
//           (movie?.title || movie?.name || movie?.original_name)
//         </h1>
//         <div className="banner_buttons">
//           <button className="banner_button" play>
//             Play
//           </button>
//           <button className="banner_buttons">My List</button>
//         </div>
//         <h1 className="banner_description">{truncate(movie?.overview, 150)}</h1>
//       </div>
//       <div className="banner_fadeBottom"></div>
//     </div>
//   );
// };

// export default Banner;
//*************************? */



import React, { useState, useEffect } from "react";
import axios from "../../Utils/Axios";
import requests from "../../Utils/Requests";
import  "../Banner/Baneer.css"

const Banner = () => {
  const [movie, setMovie] = useState({});

  useEffect(() => {
    const fetchData = async () => {
      try {
        const request = await axios.get(requests.fetchNetflixOriginals);
        const randomIndex = Math.floor(
          Math.random() * request.data.results.length
        );
        setMovie(request.data.results[randomIndex]);
      } catch (error) {
        console.log("error", error);
      }
    };
    fetchData();
  }, []);

  const truncate = (str, n) => {
    return str?.length > n ? str.substr(0, n - 1) + "..." : str;
  };

  return (
    <div
      className="banner"
      style={{
        backgroundSize: "cover",
        backgroundImage: `url('https://image.tmdb.org/t/p/original${movie?.backdrop_path}')`,
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="banner_content">
        <h1 className="banner_title">
          {movie?.title || movie?.name || movie?.original_name}
        </h1>
        <div className="banner_buttons">
          <button className="banner_button" play>
            Play
          </button>
          <button className="banner_buttons">My List</button>
        </div>
        <h1 className="banner_description">{truncate(movie?.overview, 150)}</h1>
      </div>
      <div className="banner_fadeBottom"></div>
    </div>
  );
};

export default Banner;
