import React, { useState, useEffect } from "react";
// import { useNavigate } from 'react-router';
import Player from "./Player";

export default function PlayerDetails() {
  const [tracksData, setTracksData] = useState(null);

  useEffect(() => {
    fetch("https://itunes.apple.com/search?term=rock&country=GB&entity=song")
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setTracksData(data);
      })
      .catch((error) => console.log(error));
  }, []);
  //   explain more about dependencies array/ error handling.
  // function Redirect() {
  //   let navigate = useNavigate();
  //   function handleClick() {
  //     navigate('/home')
  //   }

  return (
    <div>
      <h1>Rock Tracks</h1>
      {tracksData ? (
        <>
          <ul>
            {tracksData.results.map((track, index) => {
              return (
                <div key={index}>
                  <li>
                    <img src={track.artworkUrl60} alt="album cover" />
                  </li>
                  <li>Track {index + 1}</li>
                  <li>Track Name: {track.trackName} </li>
                  <li>Artist Name: {track.artistName} </li>
                  <li>
                    Price: {track.currency} {track.trackPrice}{" "}
                  </li>
                  <li>
                    Duration: {track.currency} {track.duration}{" "}
                  </li>
                  <li>
                    Release Date: {track.currency} {track.releaseDate}{" "}
                  </li>
                  {/* <button onClick={handleClick}>go home</button> */}
                </div>
              );
            })}
          </ul>
        </>
      ) : (
        <span> Loading....</span>
      )}
    </div>
  );
}
// }