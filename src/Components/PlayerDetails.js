import React from "react";
import { useNavigate } from "react-router";
import moment from "moment";
import { AiFillHome } from "react-icons/ai";

const styles = {
  button: {
    width: 115,
    height: 25,
    background: "white",
    padding: 5,
    margin: 5,
    border: 5,
    borderRadius: 20,
    fontWeight: "bold",
  },
};

export default function PlayerDetails(props) {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate("/");
  };
  const { singleTrack } = props;

  return (
    <div>
      <h1>Rock Tracks</h1>
      {singleTrack ? (
        <>
          <ul>
            <div
              key={singleTrack.trackId}
              style={{ margin: 10, padding: 10, listStyleType: "none" }}
            >
              <li>
                <img src={singleTrack.artworkUrl100} alt="album cover" />
              </li>
              <li>
                <strong>Track name : </strong> {singleTrack.trackName}
              </li>
              <li>
                <strong>Artist name : </strong>
                {singleTrack.artistName}{" "}
              </li>
              <li>
                <strong>Price : </strong>
                {singleTrack.currency} {singleTrack.trackPrice}{" "}
              </li>
              <li>
                <strong>Track length : </strong>
                {moment(singleTrack.trackTimeMillis).format("m:ss")}
              </li>
              <li>
                <strong>Release date : </strong>
                {moment(singleTrack.releaseDate).format("DD-MM-YYYY")}
              </li>
              <a
                href={singleTrack.trackViewUrl}
                target="_blank"
                rel="noopener noreferrer"
              >
                View track
              </a>
              <button onClick={handleClick} style={styles.button}>
                {" "}
                Go to <AiFillHome />
              </button>
            </div>
          </ul>
        </>
      ) : (
        <span>Loading SINGLE rock track</span>
      )}
    </div>
  );
}
