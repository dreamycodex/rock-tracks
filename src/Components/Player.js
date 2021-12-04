import React, { useState, useEffect } from "react";
// import PlayerDetails from "./PlayerDetails";
import { Link } from "react-router-dom";
// import {BsPlayCircle} from "react-icons/bs";

export default function Player() {
  const [tracksData, setTracksData] = useState(null);

  useEffect(() => {
    fetch("https://itunes.apple.com/search?term=rock&country=GB&entity=song")
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setTracksData(data);
      }).catch((error) => console.log(error));
  }, []);
//   explain more about dependencies array/ error handling.  

    return (
      <div>
        <h1>Rock Tracks</h1>
        {tracksData ? (
            <>
            <ul>
            {tracksData.results.map((track, index) => {
                return (
                    <div key={index}>
                    <li><img src={track.artworkUrl60} alt="album cover" /></li>
                    <li>Track {index + 1}</li>
                    <li>Track Name: {track.trackName} </li>
                    <li>Artist Name: {track.artistName} </li>
                    <li>Price: {track.currency} {track.trackPrice} </li>
                    <Link to={`/details/${track.trackId}`}> More Details</Link>
                    </div>
                )
            })}
            </ul>
            
            </>
        ) : (
            <span> Loading....</span>
        )
        }
      </div>
    );
}