import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

export default function Player(props) {
  const [tracksData, setTracksData] = useState(null);

  useEffect(() => {
    fetch("https://itunes.apple.com/search?term=rock&country=GB&entity=song")
      .then((res) => res.json())
      .then((data) => {
        setTracksData(data.results);
      })
      .catch((error) => console.log("Error fetching and parsing data", error));
  }, []);

  const handleClick = (event) => {
    props.setSingleTrack(event);
  };

  return (
    <div>
      <h1>Rock Tracks</h1>
      {tracksData ? (
        <>
          <ul>
            {tracksData.map((item) => {
              return (
                <div
                  key={item.trackId}
                  style={{ margin: 10, padding: 10, listStyleType: "none" }}
                >
                  <li>
                    <img src={item.artworkUrl100} alt="album cover" />
                  </li>
                  <li>
                    <strong>Track name : </strong> {item.trackName}
                  </li>
                  <li>
                    <strong>Artist name : </strong> {item.artistName}{" "}
                  </li>
                  <li>
                    <strong>Price : </strong>
                    {item.currency} {item.trackPrice}{" "}
                  </li>
                  <Link
                    to={`/details/${item.trackId}`}
                    onClick={() => handleClick(item)}
                  >
                    {" "}
                    More Details
                  </Link>
                </div>
              );
            })}
          </ul>
        </>
      ) : (
        <span>Loading ALL rock tracks</span>
      )}
    </div>
  );
}
