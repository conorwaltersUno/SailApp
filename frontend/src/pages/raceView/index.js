import React from "react";
import { useEffect, useState } from "react";
import { useParams } from "react-router";
import instance from "../../utils/axios";
import BoatDataGrid from "./components/BoatDataGrid";
import moment from "moment";
import { Link } from "react-router-dom";

const RaceView = () => {
  const [race, setRace] = useState([]);
  const [raceBoats, setRaceBoats] = useState([]);
  const [startTime, setStartTime] = useState("");
  const [id, setRaceId] = useState("");
  const params = useParams();

  const getData = async () => {
    try {
      const raceRes = (await instance.get(`/race/${params.id}`)).data;
      setRace(raceRes.race);
      setRaceBoats(raceRes.race[0].raceboats);
      setStartTime(raceRes.race[0].starttime);
      setRaceId(raceRes.race[0].id);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <div>
      <div style={{ marginLeft: "20px", marginTop: "20px" }}>
        <Link to={`/race/${params.id}/manage`} className="btn btn-primary">
          Manage race
        </Link>
      </div>
      {race.length > 0 ? (
        <div className="event-view-container">
          <div>Race ID: {id}</div>
          <div>StartTime: {moment(startTime).format("MMM DD YYYY h:mm A")}</div>
          <div className="boats-display-container">
            {raceBoats.length > 0 ? (
              <BoatDataGrid raceBoats={raceBoats} />
            ) : (
              <div className="boat-display-error">No race info to show</div>
            )}
          </div>
        </div>
      ) : (
        <div>Loading</div>
      )}
    </div>
  );
};

export default RaceView;
